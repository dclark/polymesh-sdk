import { SubmittableExtrinsic } from '@polkadot/api/types';
import { DispatchError, EventRecord } from '@polkadot/types/interfaces';
import { ISubmittableResult, RegistryError, Signer as PolkadotSigner } from '@polkadot/types/types';
import BigNumber from 'bignumber.js';
import P from 'bluebird';
import { EventEmitter } from 'events';
import { range } from 'lodash';

import { Context, Identity, PolymeshError, PostTransactionValue } from '~/internal';
import { latestProcessedBlock } from '~/middleware/queries';
import { Query } from '~/middleware/types';
import {
  ErrorCode,
  PayingAccount,
  PayingAccountFees,
  PayingAccountType,
  TransactionStatus,
} from '~/types';
import {
  BaseTransactionSpec,
  isResolverFunction,
  MaybePostTransactionValue,
  TransactionSigningData,
} from '~/types/internal';
import { Ensured } from '~/types/utils';
import { balanceToBigNumber, hashToString, u32ToBigNumber } from '~/utils/conversion';
import { defusePromise, delay } from '~/utils/internal';

/**
 * @hidden
 */
enum Event {
  StatusChange = 'StatusChange',
  ProcessedByMiddleware = 'ProcessedByMiddleware',
}

/**
 * Wrapper class for a Polymesh Transaction
 */
export abstract class PolymeshTransactionBase<
  ReturnValue = void,
  TransformedReturnValue = ReturnValue
> {
  /**
   * current status of the transaction
   */
  public status: TransactionStatus = TransactionStatus.Idle;

  /**
   * stores errors thrown while running the transaction (status: `Failed`, `Aborted`)
   */
  public error?: PolymeshError;

  /**
   * stores the transaction receipt (if successful)
   */
  public receipt?: ISubmittableResult;

  /**
   * transaction hash (status: `Running`, `Succeeded`, `Failed`)
   */
  public txHash?: string;

  /**
   * transaction index within its block (status: `Succeeded`, `Failed`)
   */
  public txIndex?: BigNumber;

  /**
   * hash of the block where this transaction resides (status: `Succeeded`, `Failed`)
   */
  public blockHash?: string;

  /**
   * number of the block where this transaction resides (status: `Succeeded`, `Failed`)
   */
  public blockNumber?: BigNumber;

  /**
   * @hidden
   *
   * Identity that will pay for this transaction's fees. This value overrides any subsidy,
   *   and is seen as having infinite allowance (but still constrained by its current balance)
   */
  protected paidForBy?: Identity;

  /**
   * @hidden
   *
   * wrapper for a value that will exist after this transaction has executed
   */
  protected returnValue: MaybePostTransactionValue<ReturnValue>;

  /**
   * @hidden
   *
   * internal event emitter to handle status changes
   */
  protected emitter = new EventEmitter();

  /**
   * @hidden
   *
   * Account that will sign the transaction
   */
  protected signingAddress: string;

  /**
   * @hidden
   *
   * object that performs the payload signing logic
   */
  protected signer: PolkadotSigner;

  /**
   * @hidden
   *
   * used by procedures to set the fee manually in case the protocol op can't be
   *   dynamically generated from the transaction name, or a specific procedure has
   *   special rules for calculating them
   */
  protected protocolFee?: BigNumber;

  /**
   * @hidden
   *
   * function that transforms the return value to another type. Useful when using the same
   *   Procedure for different endpoints which are supposed to return different values
   */
  protected transformer: (
    result: ReturnValue
  ) => Promise<TransformedReturnValue> | TransformedReturnValue;

  protected context: Context;

  /**
   * @hidden
   * whether the queue has run or not (prevents re-running)
   */
  private hasRun = false;

  /**
   * @hidden
   */
  constructor(
    transactionSpec: BaseTransactionSpec<ReturnValue, TransformedReturnValue> &
      TransactionSigningData,
    context: Context
  ) {
    const {
      resolver,
      transformer = async (val): Promise<TransformedReturnValue> =>
        val as unknown as TransformedReturnValue,
      signingAddress,
      signer,
      fee,
      paidForBy,
    } = transactionSpec;

    if (isResolverFunction(resolver)) {
      this.returnValue = new PostTransactionValue(resolver);
    } else {
      this.returnValue = resolver;
    }

    this.signingAddress = signingAddress;
    this.signer = signer;
    this.protocolFee = fee;
    this.context = context;
    this.paidForBy = paidForBy;
    this.transformer = transformer;
  }

  /**
   * Run the transaction, update its status and return a result if applicable.
   *   Certain transactions create Entities on the blockchain, and those Entities are returned
   *   for convenience. For example, when running a transaction that creates an Asset, the Asset itself
   *   is returned
   */
  public async run(): Promise<TransformedReturnValue> {
    if (this.hasRun) {
      throw new PolymeshError({
        code: ErrorCode.General,
        message: 'Cannot re-run a Transaction',
      });
    }

    try {
      await this.assertFeesCovered();

      const receipt = await this.internalRun();
      this.receipt = receipt;

      const { returnValue } = this;

      let value: ReturnValue;

      if (returnValue instanceof PostTransactionValue) {
        await returnValue.run(receipt);

        value = returnValue.value;
      } else {
        value = returnValue;
      }

      this.updateStatus(TransactionStatus.Succeeded);

      return this.transformer(value);
    } catch (err) {
      const error: PolymeshError = err;

      this.error = err;

      switch (error.code) {
        case ErrorCode.TransactionAborted: {
          this.updateStatus(TransactionStatus.Aborted);
          break;
        }
        case ErrorCode.TransactionRejectedByUser: {
          this.updateStatus(TransactionStatus.Rejected);
          break;
        }
        case ErrorCode.TransactionReverted:
        case ErrorCode.FatalError:
        default: {
          this.updateStatus(TransactionStatus.Failed);
          break;
        }
      }

      throw error;
    } finally {
      this.hasRun = true;
      await this.emitWhenMiddlewareIsSynced();
    }
  }

  /**
   * @hidden
   *
   * Execute the underlying transaction, updating the status where applicable and
   *   throwing any pertinent errors
   */
  private async internalRun(): Promise<ISubmittableResult> {
    const { signingAddress, signer } = this;
    this.updateStatus(TransactionStatus.Unapproved);

    return new Promise((resolve, reject) => {
      const txWithArgs = this.composeTx();
      let settingBlockData = Promise.resolve();

      // nonce: -1 takes pending transactions into consideration.
      // More information can be found at: https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce
      const gettingUnsub = txWithArgs.signAndSend(
        signingAddress,
        { nonce: -1, signer },
        receipt => {
          const { status } = receipt;
          let isLastCallback = false;
          let unsubscribing = Promise.resolve();
          let extrinsicFailedEvent: EventRecord | undefined;

          // isCompleted === isFinalized || isInBlock || isError
          if (receipt.isCompleted) {
            if (receipt.isInBlock) {
              const blockHash = status.asInBlock;

              /*
               * this must be done to ensure that the block hash and number are set before the success event
               *   is emitted, and at the same time. We do not resolve or reject the containing promise until this
               *   one resolves
               */
              settingBlockData = defusePromise(
                this.context.polymeshApi.rpc.chain.getBlock(blockHash).then(({ block }) => {
                  this.blockHash = hashToString(blockHash);
                  this.blockNumber = u32ToBigNumber(block.header.number.unwrap());

                  // we know that the index has to be set by the time the transaction is included in a block
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  this.txIndex = new BigNumber(receipt.txIndex!);
                })
              );

              // if the extrinsic failed due to an on-chain error, we should handle it in a special way
              extrinsicFailedEvent = receipt.findRecord('system', 'ExtrinsicFailed');

              // extrinsic failed so we can unsubscribe
              isLastCallback = !!extrinsicFailedEvent;
            } else {
              // isFinalized || isError so we know we can unsubscribe
              isLastCallback = true;
            }

            if (isLastCallback) {
              unsubscribing = gettingUnsub.then(unsub => {
                unsub();
              });
            }

            /*
             * Promise chain that handles all sub-promises in this pass through the signAndSend callback.
             * Primarily for consistent error handling
             */
            let finishing = Promise.resolve();

            if (extrinsicFailedEvent) {
              const {
                event: { data },
              } = extrinsicFailedEvent;

              finishing = Promise.all([settingBlockData, unsubscribing]).then(() => {
                this.handleExtrinsicFailure(resolve, reject, data[0] as DispatchError);
              });
            } else if (receipt.isFinalized) {
              finishing = Promise.all([settingBlockData, unsubscribing]).then(() => {
                this.handleExtrinsicSuccess(resolve, reject, receipt);
              });
            } else if (receipt.isError) {
              reject(new PolymeshError({ code: ErrorCode.TransactionAborted }));
            }

            finishing.catch((err: Error) => reject(err));
          }
        }
      );

      gettingUnsub
        .then(() => {
          // tx approved by signer
          this.txHash = txWithArgs.hash.toString();
          this.updateStatus(TransactionStatus.Running);
        })
        .catch((err: Error) => {
          let error;
          /* istanbul ignore else */
          if (err.message.indexOf('Cancelled') > -1) {
            // tx rejected by signer
            error = { code: ErrorCode.TransactionRejectedByUser };
          } else {
            // unexpected error
            error = { code: ErrorCode.UnexpectedError, message: err.message };
          }

          reject(new PolymeshError(error));
        });
    });
  }

  /**
   * Subscribe to status changes
   *
   * @param listener - callback function that will be called whenever the status changes
   *
   * @returns unsubscribe function
   */
  public onStatusChange(listener: (transaction: PolymeshTransactionBase) => void): () => void {
    this.emitter.on(Event.StatusChange, listener);

    return (): void => {
      this.emitter.removeListener(Event.StatusChange, listener);
    };
  }

  /**
   * Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them
   *
   * @note these values might change if the transaction is run at a later time. This can be due to a governance vote or other
   *   chain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)
   */
  public async getFees(): Promise<PayingAccountFees> {
    const { signingAddress } = this;
    let { protocolFee: protocol } = this;

    const composedTx = this.composeTx();

    const paymentInfoPromise = composedTx.paymentInfo(signingAddress);

    if (!protocol) {
      protocol = await this.getProtocolFees();
    }

    const [payingAccount, { partialFee }] = await Promise.all([
      this.getPayingAccount(),
      paymentInfoPromise,
    ]);

    const { free: balance } = await payingAccount.account.getBalance();
    const gas = balanceToBigNumber(partialFee);

    return {
      fees: {
        protocol,
        gas,
        total: protocol.plus(gas),
      },
      payingAccountData: {
        ...payingAccount,
        balance,
      },
    };
  }

  /**
   * Subscribe to the results of this transaction being processed by the indexing service (and as such, available to the middleware)
   *
   * @param listener - callback function that will be called whenever the middleware is updated with the latest data.
   *   If there is an error (timeout or middleware offline) it will be passed to this callback
   *
   * @note this event will be fired even if the queue fails
   * @returns unsubscribe function
   * @throws if the middleware wasn't enabled when instantiating the SDK client
   */
  public onProcessedByMiddleware(listener: (err?: PolymeshError) => void): () => void {
    if (!this.context.isMiddlewareEnabled()) {
      throw new PolymeshError({
        code: ErrorCode.General,
        message: 'Cannot subscribe without an enabled middleware connection',
      });
    }

    this.emitter.on(Event.ProcessedByMiddleware, listener);

    return (): void => {
      this.emitter.removeListener(Event.ProcessedByMiddleware, listener);
    };
  }

  /**
   * Poll the middleware every 2 seconds to see if it has already processed the
   *   block that reflects the changes brought on by this transaction being run. If so,
   *   emit the corresponding event. After 5 retries (or if the middleware can't be reached),
   *   the event is emitted with an error
   *
   * @note uses the middleware
   */
  private async emitWhenMiddlewareIsSynced(): Promise<void> {
    const { context } = this;

    if (!context.isMiddlewareEnabled()) {
      return;
    }

    const blockNumber = await context.getLatestBlock();

    let done = false;

    /*
     * We do not await this promise because it is supposed to run in the background, and
     * any errors encountered are emitted. If the user isn't listening, they shouldn't
     * care about middleware (or other) errors anyway
     */
    P.each(range(6), async i => {
      if (done) {
        return;
      }

      try {
        const {
          data: {
            latestBlock: { id: processedBlock },
          },
        } = await context.queryMiddleware<Ensured<Query, 'latestBlock'>>(latestProcessedBlock());

        if (blockNumber.lte(processedBlock)) {
          done = true;
          this.emitter.emit(Event.ProcessedByMiddleware);
          return;
        }
      } catch (err) {}

      if (i === 5) {
        this.emitter.emit(
          Event.ProcessedByMiddleware,
          new PolymeshError({ code: ErrorCode.MiddlewareError, message: 'Timed out' })
        );
      }

      return delay(2000);
    }).catch(
      /* istanbul ignore next: very hard to test, extreme edge case */
      err => {
        this.emitter.emit(
          Event.ProcessedByMiddleware,
          new PolymeshError({
            code: ErrorCode.UnexpectedError,
            message: err.message || 'Unexpected error',
          })
        );
      }
    );
  }

  /**
   * @hidden
   */
  protected updateStatus(status: TransactionStatus): void {
    this.status = status;

    /* eslint-disable default-case */
    switch (status) {
      case TransactionStatus.Unapproved:
      case TransactionStatus.Running:
      case TransactionStatus.Succeeded: {
        this.emitter.emit(Event.StatusChange, this);
        return;
      }
      case TransactionStatus.Rejected:
      case TransactionStatus.Aborted:
      case TransactionStatus.Failed: {
        this.emitter.emit(Event.StatusChange, this, this.error);
      }
    }
    /* eslint-enable default-case */
  }

  /**
   * Return whether the transaction can be subsidized. If the result is false
   *   AND the caller is being subsidized by a third party, the transaction can't be executed and trying
   *   to do so will result in an error
   *
   * @note this depends on the type of transaction itself (i.e. `staking.bond` can't be subsidized, but `asset.createAsset` can)
   */
  public abstract supportsSubsidy(): boolean;

  /**
   * @hidden
   *
   * Compose a Transaction Object with arguments that can be signed
   */
  protected abstract composeTx(): SubmittableExtrinsic<'promise', ISubmittableResult>;

  /* istanbul ignore next: there is no way of reaching this path currently */
  /**
   * @hidden
   *
   * Return whether the transaction ignores any existing subsidizer relationships
   *   and is always paid by the caller
   */
  protected ignoresSubsidy(): boolean {
    /*
     * since we don't know anything about the transaction, a safe default is
     *   to assume it doesn't ignore subsidies
     */
    return false;
  }

  /**
   * @hidden
   *
   * Fetch and calculate this transaction's protocol fees
   */
  protected abstract getProtocolFees(): Promise<BigNumber>;

  /**
   * @hidden
   */
  protected handleExtrinsicFailure(
    _resolve: (value: ISubmittableResult | PromiseLike<ISubmittableResult>) => void,
    reject: (reason?: unknown) => void,
    error: DispatchError,
    data?: Record<string, unknown>
  ): void {
    // get revert message from event
    let message: string;

    if (error.isModule) {
      // known error
      const mod = error.asModule;

      const { section, name, docs }: RegistryError = mod.registry.findMetaError(mod);
      message = `${section}.${name}: ${docs.join(' ')}`;
    } else if (error.isBadOrigin) {
      message = 'Bad origin';
    } else if (error.isCannotLookup) {
      message = 'Could not lookup information required to validate the transaction';
    } else {
      message = 'Unknown error';
    }

    reject(new PolymeshError({ code: ErrorCode.TransactionReverted, message, data }));
  }

  /**
   * @hidden
   */
  protected handleExtrinsicSuccess(
    resolve: (value: ISubmittableResult | PromiseLike<ISubmittableResult>) => void,
    _reject: (reason?: unknown) => void,
    receipt: ISubmittableResult
  ): void {
    resolve(receipt);
  }

  /**
   * @hidden
   *
   * Check if balances and allowances (both third party and signing Account)
   *   are sufficient to cover this transaction's fees
   */
  private async assertFeesCovered(): Promise<void> {
    const {
      fees: { total },
      payingAccountData,
    } = await this.getFees();

    const { type, balance } = payingAccountData;

    if (type === PayingAccountType.Subsidy) {
      const { allowance } = payingAccountData;
      if (!this.supportsSubsidy()) {
        throw new PolymeshError({
          code: ErrorCode.UnmetPrerequisite,
          message: 'This transaction cannot be run by a subsidized Account',
        });
      }

      if (allowance.lt(total)) {
        throw new PolymeshError({
          code: ErrorCode.UnmetPrerequisite,
          message:
            "The subsidizer Account has not granted the caller Account enough allowance to pay this transaction's fees",
          data: {
            allowance,
            fees: total,
          },
        });
      }
    }

    const accountDescriptions = {
      [PayingAccountType.Caller]: 'caller',
      [PayingAccountType.Other]: 'paying third party',
      [PayingAccountType.Subsidy]: 'subsidizer',
    };

    if (balance.lt(total)) {
      throw new PolymeshError({
        code: ErrorCode.InsufficientBalance,
        message: `The ${accountDescriptions[type]} Account does not have enough POLYX balance to pay this transaction's fees`,
        data: {
          balance,
          fees: total,
        },
      });
    }
  }

  /**
   * @hidden
   *
   * Retrieve the Account that would pay fees for the transaction if it was run at this moment, as well as the total amount that can be
   *   charged to it (allowance) in case of a subsidy
   *
   * @note this value might change if, before running the transaction, the caller Account enters (or leaves)
   *   a subsidizer relationship. A governance vote or chain upgrade could also cause the value to change between the time
   *   this method is called and the time the transaction is run
   */
  private async getPayingAccount(): Promise<PayingAccount> {
    const { paidForBy, context } = this;

    if (paidForBy) {
      const { account: primaryAccount } = await paidForBy.getPrimaryAccount();

      return {
        type: PayingAccountType.Other,
        account: primaryAccount,
      };
    }

    const subsidyWithAllowance = await context.accountSubsidy();

    if (!subsidyWithAllowance || this.ignoresSubsidy()) {
      const caller = context.getSigningAccount();

      return {
        account: caller,
        type: PayingAccountType.Caller,
      };
    }

    const {
      subsidy: { subsidizer: account },
      allowance,
    } = subsidyWithAllowance;

    return {
      type: PayingAccountType.Subsidy,
      account,
      allowance,
    };
  }
}

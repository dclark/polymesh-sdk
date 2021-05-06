import BigNumber from 'bignumber.js';

import { PolymeshError } from '~/base/PolymeshError';
import {
  Context,
  Entity,
  Identity,
  modifyInstructionAffirmation,
  SecurityToken,
  Venue,
} from '~/internal';
import { ErrorCode, PaginationOptions, ResultSet } from '~/types';
import { InstructionAffirmationOperation, ProcedureMethod } from '~/types/internal';
import {
  balanceToBigNumber,
  identityIdToString,
  meshAffirmationStatusToAffirmationStatus,
  meshInstructionStatusToInstructionStatus,
  meshPortfolioIdToPortfolio,
  momentToDate,
  numberToU64,
  tickerToString,
  u32ToBigNumber,
  u64ToBigNumber,
} from '~/utils/conversion';
import { createProcedureMethod, requestPaginated } from '~/utils/internal';

import {
  InstructionAffirmation,
  InstructionDetails,
  InstructionStatus,
  InstructionType,
  Leg,
} from './types';

export interface UniqueIdentifiers {
  id: BigNumber;
}

const notExistsMessage =
  'Instruction no longer exists. This means it was already executed/rejected (execution might have failed)';

/**
 * Represents a settlement Instruction to be executed on a certain Venue
 */
export class Instruction extends Entity<UniqueIdentifiers> {
  /**
   * @hidden
   * Check if a value is of type [[UniqueIdentifiers]]
   */
  public static isUniqueIdentifiers(identifier: unknown): identifier is UniqueIdentifiers {
    const { id } = identifier as UniqueIdentifiers;

    return id instanceof BigNumber;
  }

  /**
   * Identifier number of the venue
   */
  public id: BigNumber;

  /**
   * @hidden
   */
  public constructor(identifiers: UniqueIdentifiers, context: Context) {
    super(identifiers, context);

    const { id } = identifiers;

    this.id = id;

    this.reject = createProcedureMethod(
      {
        getProcedureAndArgs: () => [
          modifyInstructionAffirmation,
          { id, operation: InstructionAffirmationOperation.Reject },
        ],
      },
      context
    );

    this.affirm = createProcedureMethod(
      {
        getProcedureAndArgs: () => [
          modifyInstructionAffirmation,
          { id, operation: InstructionAffirmationOperation.Affirm },
        ],
      },
      context
    );

    this.withdraw = createProcedureMethod(
      {
        getProcedureAndArgs: () => [
          modifyInstructionAffirmation,
          { id, operation: InstructionAffirmationOperation.Withdraw },
        ],
      },
      context
    );
  }

  /**
   * Retrieve whether the Instruction still exists on chain. Executed/rejected instructions
   *   are pruned from the storage
   */
  public async exists(): Promise<boolean> {
    const {
      context: {
        polymeshApi: {
          query: { settlement },
        },
      },
      id,
      context,
    } = this;

    const { status: rawStatus } = await settlement.instructionDetails(numberToU64(id, context));

    const status = meshInstructionStatusToInstructionStatus(rawStatus);

    return status !== InstructionStatus.Unknown;
  }

  /**
   * Retrieve information specific to this Instruction
   */
  public async details(): Promise<InstructionDetails> {
    const {
      context: {
        polymeshApi: {
          query: { settlement },
        },
      },
      id,
      context,
    } = this;

    const {
      status: rawStatus,
      created_at: createdAt,
      trade_date: tradeDate,
      value_date: valueDate,
      settlement_type: type,
      venue_id: venueId,
    } = await settlement.instructionDetails(numberToU64(id, context));

    const status = meshInstructionStatusToInstructionStatus(rawStatus);

    if (status === InstructionStatus.Unknown) {
      throw new PolymeshError({
        code: ErrorCode.FatalError,
        message: notExistsMessage,
      });
    }

    const details = {
      status,
      createdAt: momentToDate(createdAt.unwrap()),
      tradeDate: tradeDate.isSome ? momentToDate(tradeDate.unwrap()) : null,
      valueDate: valueDate.isSome ? momentToDate(valueDate.unwrap()) : null,
      venue: new Venue({ id: u64ToBigNumber(venueId) }, context),
    };

    if (type.isSettleOnAffirmation) {
      return {
        ...details,
        type: InstructionType.SettleOnAffirmation,
      };
    }

    return {
      ...details,
      type: InstructionType.SettleOnBlock,
      endBlock: u32ToBigNumber(type.asSettleOnBlock),
    };
  }

  /**
   * Retrieve every authorization generated by this Instruction (status and authorizing Identity)
   *
   * @note supports pagination
   */
  public async getAffirmations(
    paginationOpts?: PaginationOptions
  ): Promise<ResultSet<InstructionAffirmation>> {
    const {
      context: {
        polymeshApi: {
          query: { settlement },
        },
      },
      id,
      context,
    } = this;

    const exists = await this.exists();

    if (!exists) {
      throw new PolymeshError({
        code: ErrorCode.FatalError,
        message: notExistsMessage,
      });
    }

    const { entries, lastKey: next } = await requestPaginated(settlement.affirmsReceived, {
      arg: numberToU64(id, context),
      paginationOpts,
    });

    const data = entries.map(([{ args }, meshAffirmationStatus]) => {
      const [, { did }] = args;
      return {
        identity: new Identity({ did: identityIdToString(did) }, context),
        status: meshAffirmationStatusToAffirmationStatus(meshAffirmationStatus),
      };
    });

    return {
      data,
      next,
    };
  }

  /**
   * Retrieve all legs of this Instruction
   *
   * @note supports pagination
   */
  public async getLegs(paginationOpts?: PaginationOptions): Promise<ResultSet<Leg>> {
    const {
      context: {
        polymeshApi: {
          query: { settlement },
        },
      },
      id,
      context,
    } = this;

    const exists = await this.exists();

    if (!exists) {
      throw new PolymeshError({
        code: ErrorCode.FatalError,
        message: notExistsMessage,
      });
    }

    const { entries: legs, lastKey: next } = await requestPaginated(settlement.instructionLegs, {
      arg: numberToU64(id, context),
      paginationOpts,
    });

    const data = legs.map(([, leg]) => {
      const { from, to, amount, asset } = leg;

      const ticker = tickerToString(asset);
      const fromPortfolio = meshPortfolioIdToPortfolio(from, context);
      const toPortfolio = meshPortfolioIdToPortfolio(to, context);

      return {
        from: fromPortfolio,
        to: toPortfolio,
        amount: balanceToBigNumber(amount),
        token: new SecurityToken({ ticker }, context),
      };
    });

    return {
      data,
      next,
    };
  }

  /**
   * Reject this instruction
   *
   * @note reject on `SettleOnAffirmation` will execute the settlement and it will fail immediately.
   * @note reject on `SettleOnBlock` behaves just like unauthorize
   */

  public reject: ProcedureMethod<void, Instruction>;

  /**
   * Affirm this instruction (authorize)
   */

  public affirm: ProcedureMethod<void, Instruction>;

  /**
   * Withdraw affirmation from this instruction (unauthorize)
   */
  public withdraw: ProcedureMethod<void, Instruction>;
}

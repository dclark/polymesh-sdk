import { Signer as PolkadotSigner } from '@polkadot/types/types';
import BigNumber from 'bignumber.js';
import { noop } from 'lodash';
import sinon from 'sinon';

import { Context, PolymeshTransactionBatch } from '~/internal';
import { fakePromise } from '~/testUtils';
import { dsMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { TransactionStatus, TxTags } from '~/types';
import { tuple } from '~/types/utils';

describe('Polymesh Transaction Batch class', () => {
  let context: Mocked<Context>;

  beforeAll(() => {
    dsMockUtils.initMocks();
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
  });

  const txSpec = {
    signingAddress: 'signingAddress',
    signer: 'signer' as PolkadotSigner,
    isCritical: false,
    fee: new BigNumber(100),
  };

  afterEach(() => {
    dsMockUtils.reset();
  });

  describe('get: transactions', () => {
    it('should return unwrapped transactions', () => {
      const transaction = dsMockUtils.createTxStub('asset', 'registerTicker');
      const args = tuple('A_TICKER');

      const transactions = [
        {
          transaction,
          args,
        },
      ];

      const tx = new PolymeshTransactionBatch(
        {
          ...txSpec,
          transactions,
        },
        context
      );

      const expectedResult = [
        {
          tag: TxTags.asset.RegisterTicker,
          args,
        },
      ];

      expect(tx.transactions).toEqual(expectedResult);
      expect(tx.transactions).toEqual(expectedResult); // this second call is to cover the case where the internal value is already set
    });
  });

  describe('method: run', () => {
    beforeAll(() => {
      dsMockUtils.createRpcStub('chain', 'getBlock', {
        returnValue: dsMockUtils.createMockSignedBlock({
          block: {
            header: {
              number: dsMockUtils.createMockCompact(dsMockUtils.createMockU32(new BigNumber(1))),
              parentHash: 'hash',
              stateRoot: 'hash',
              extrinsicsRoot: 'hash',
            },
          },
        }),
      });
    });
    it('should execute the underlying transaction with the provided arguments, setting the tx and block hash when finished', async () => {
      const transaction = dsMockUtils.createTxStub('asset', 'registerTicker');
      const batchStub = dsMockUtils.createTxStub('utility', 'batchAtomic', { autoResolve: false });
      const args = tuple('A_TICKER');

      const tx = new PolymeshTransactionBatch(
        {
          ...txSpec,
          transactions: [
            {
              transaction,
              args,
            },
          ],
        },
        context
      );

      tx.run().catch(noop);

      dsMockUtils.updateTxStatus(batchStub, dsMockUtils.MockTxStatus.InBlock);

      await fakePromise();

      dsMockUtils.updateTxStatus(batchStub, dsMockUtils.MockTxStatus.Succeeded);

      await fakePromise();

      sinon.assert.calledWith(transaction, ...args);
      sinon.assert.calledOnce(batchStub);
      expect(tx.blockHash).toBeDefined();
      expect(tx.blockNumber).toBeDefined();
      expect(tx.txHash).toBeDefined();
      expect(tx.status).toBe(TransactionStatus.Succeeded);
    });

    it('should throw an error when one of the transactions in the batch fails', async () => {
      const transaction = dsMockUtils.createTxStub('asset', 'registerTicker');
      const batchStub = dsMockUtils.createTxStub('utility', 'batchAtomic', { autoResolve: false });
      const args = tuple('ANOTHER_TICKER');

      const tx = new PolymeshTransactionBatch(
        {
          ...txSpec,
          transactions: [
            {
              transaction,
              args,
            },
          ],
        },
        context
      );
      const runPromise = tx.run();

      dsMockUtils.updateTxStatus(batchStub, dsMockUtils.MockTxStatus.BatchFailed);

      await expect(runPromise).rejects.toThrow('Unknown error');
      expect(tx.status).toBe(TransactionStatus.Failed);
    });
  });

  describe('method: supportsSubsidy', () => {
    it('should return false', () => {
      const transaction = dsMockUtils.createTxStub('asset', 'registerTicker');
      const args = tuple('A_TICKER');

      const transactions = [
        {
          transaction,
          args,
        },
      ];

      const tx = new PolymeshTransactionBatch(
        {
          ...txSpec,
          transactions,
        },
        context
      );

      expect(tx.supportsSubsidy()).toBe(false);
    });
  });
});

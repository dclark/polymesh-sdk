import { BTreeSet, u64 } from '@polkadot/types';
import { Permill } from '@polkadot/types/interfaces';
import {
  PolymeshPrimitivesIdentityId,
  PolymeshPrimitivesStatisticsStatOpType,
  PolymeshPrimitivesStatisticsStatType,
  PolymeshPrimitivesTicker,
  PolymeshPrimitivesTransferComplianceTransferCondition,
} from '@polkadot/types/lookup';
import BigNumber from 'bignumber.js';
import { ScopeId } from 'polymesh-types/types';
import sinon from 'sinon';

import {
  AddTransferRestrictionParams,
  getAuthorization,
  prepareAddTransferRestriction,
  prepareStorage,
  Storage,
} from '~/api/procedures/addTransferRestriction';
import { Context, PolymeshError } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { createMockBTreeSet } from '~/testUtils/mocks/dataSources';
import { Mocked } from '~/testUtils/types';
import { ErrorCode, TransferRestriction, TransferRestrictionType, TxTags } from '~/types';
import { PolymeshTx, StatisticsOpType, TickerKey } from '~/types/internal';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Asset',
  require('~/testUtils/mocks/entities').mockAssetModule('~/api/entities/Asset')
);
jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);

describe('addTransferRestriction procedure', () => {
  let mockContext: Mocked<Context>;

  let count: BigNumber;
  let percentage: BigNumber;
  let countRestriction: TransferRestriction;
  let percentageRestriction: TransferRestriction;
  let rawTicker: PolymeshPrimitivesTicker;
  let rawCount: u64;
  let rawPercentage: Permill;
  let rawCountCondition: PolymeshPrimitivesTransferComplianceTransferCondition;
  let rawPercentageCondition: PolymeshPrimitivesTransferComplianceTransferCondition;
  let args: AddTransferRestrictionParams;
  let rawCountOp: PolymeshPrimitivesStatisticsStatOpType;
  let rawBalanceOp: PolymeshPrimitivesStatisticsStatOpType;
  let rawStatType: PolymeshPrimitivesStatisticsStatType;
  let rawScopeId: PolymeshPrimitivesIdentityId;

  let addBatchTransactionStub: sinon.SinonStub;
  let transferRestrictionToTransferRestrictionStub: sinon.SinonStub<
    [TransferRestriction, Context],
    PolymeshPrimitivesTransferComplianceTransferCondition
  >;
  let stringToTickerKeyStub: sinon.SinonStub<[string, Context], TickerKey>;
  let complianceConditionsToBtreeSetSub: sinon.SinonStub<
    [PolymeshPrimitivesTransferComplianceTransferCondition[], Context],
    BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>
  >;
  let transferConditionsToBtreeTransferConditionsStub: sinon.SinonStub<
    [PolymeshPrimitivesTransferComplianceTransferCondition[], Context],
    BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>
  >;
  let setAssetTransferCompliance: PolymeshTx<
    [PolymeshPrimitivesTicker, PolymeshPrimitivesTransferComplianceTransferCondition]
  >;
  let setExemptedEntitiesTransaction: PolymeshTx<
    [PolymeshPrimitivesTicker, PolymeshPrimitivesTransferComplianceTransferCondition, ScopeId[]]
  >;
  let scopeIdsToBtreeSetIdentityIdStub: sinon.SinonStub<
    [PolymeshPrimitivesIdentityId[], Context],
    BTreeSet<PolymeshPrimitivesIdentityId>
  >;
  let statisticsOpTypeToStatOpTypeStub: sinon.SinonStub<
    [StatisticsOpType, Context],
    PolymeshPrimitivesStatisticsStatOpType
  >;

  let mockStatTypeBtree: BTreeSet<PolymeshPrimitivesStatisticsStatType>;
  let mockStatTypeBtreeHasStub: sinon.SinonStub;
  let mockCountBtreeSet: BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>;
  let mockPercentBtree: BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>;
  const emptyStatsBtreeSet = createMockBTreeSet<PolymeshPrimitivesStatisticsStatType>([]);
  const emptyRestrictionsBtreeSet =
    createMockBTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>([]);
  const emptyStorage = {
    currentExemptions: [],
    currentRestrictions: emptyRestrictionsBtreeSet,
    currentStats: emptyStatsBtreeSet,
  };

  let stringToScopeIdStub: sinon.SinonStub;
  const did = 'someDid';
  const ticker = 'TICKER';

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();

    count = new BigNumber(10);
    percentage = new BigNumber(49);
    countRestriction = { type: TransferRestrictionType.Count, value: count };
    percentageRestriction = { type: TransferRestrictionType.Percentage, value: percentage };
  });

  beforeEach(() => {
    mockContext = dsMockUtils.getContextInstance();
    addBatchTransactionStub = procedureMockUtils.getAddBatchTransactionStub();
    setAssetTransferCompliance = dsMockUtils.createTxStub(
      'statistics',
      'setAssetTransferCompliance'
    );
    setExemptedEntitiesTransaction = dsMockUtils.createTxStub('statistics', 'setEntitiesExempt');

    dsMockUtils.setConstMock('statistics', 'maxTransferConditionsPerAsset', {
      returnValue: dsMockUtils.createMockU32(new BigNumber(3)),
    });
    transferRestrictionToTransferRestrictionStub = sinon.stub(
      utilsConversionModule,
      'transferRestrictionToPolymeshTransferCondition'
    );
    stringToTickerKeyStub = sinon.stub(utilsConversionModule, 'stringToTickerKey');
    scopeIdsToBtreeSetIdentityIdStub = sinon.stub(
      utilsConversionModule,
      'scopeIdsToBtreeSetIdentityId'
    );
    transferConditionsToBtreeTransferConditionsStub = sinon.stub(
      utilsConversionModule,
      'transferConditionsToBtreeTransferConditions'
    );
    complianceConditionsToBtreeSetSub = sinon.stub(
      utilsConversionModule,
      'complianceConditionsToBtreeSet'
    );
    statisticsOpTypeToStatOpTypeStub = sinon.stub(
      utilsConversionModule,
      'statisticsOpTypeToStatOpType'
    );
    stringToScopeIdStub = sinon.stub(utilsConversionModule, 'stringToScopeId');

    mockCountBtreeSet = dsMockUtils.createMockBTreeSet([rawCountCondition]);
    mockStatTypeBtree = dsMockUtils.createMockBTreeSet([rawStatType]);
    mockStatTypeBtreeHasStub = mockStatTypeBtree.has as sinon.SinonStub;
    rawCountOp = dsMockUtils.createMockStatisticsOpType(StatisticsOpType.Count);
    rawBalanceOp = dsMockUtils.createMockStatisticsOpType(StatisticsOpType.Balance);
    rawStatType = dsMockUtils.createMockStatisticsStatType();
    rawTicker = dsMockUtils.createMockTicker(ticker);
    rawCount = dsMockUtils.createMockU64(count);
    rawScopeId = dsMockUtils.createMockIdentityId(did);
    rawPercentage = dsMockUtils.createMockPermill(percentage.multipliedBy(10000));
    rawCountCondition = dsMockUtils.createMockTransferCondition({ MaxInvestorCount: rawCount });
    rawPercentageCondition = dsMockUtils.createMockTransferCondition({
      MaxInvestorOwnership: rawPercentage,
    });
    mockPercentBtree =
      dsMockUtils.createMockBTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>([
        rawPercentageCondition,
      ]);

    stringToScopeIdStub.withArgs(did, mockContext).returns(rawScopeId);

    transferRestrictionToTransferRestrictionStub
      .withArgs(countRestriction, mockContext)
      .returns(rawCountCondition);
    transferRestrictionToTransferRestrictionStub
      .withArgs(percentageRestriction, mockContext)
      .returns(rawPercentageCondition);
    stringToTickerKeyStub.withArgs(ticker, mockContext).returns({ Ticker: rawTicker });
    complianceConditionsToBtreeSetSub
      .withArgs([rawCountCondition], mockContext)
      .returns(mockCountBtreeSet);
    complianceConditionsToBtreeSetSub
      .withArgs([rawPercentageCondition], mockContext)
      .returns(mockPercentBtree);
    statisticsOpTypeToStatOpTypeStub
      .withArgs(StatisticsOpType.Count, mockContext)
      .returns(rawCountOp);
    statisticsOpTypeToStatOpTypeStub
      .withArgs(StatisticsOpType.Balance, mockContext)
      .returns(rawBalanceOp);
  });

  afterEach(() => {
    entityMockUtils.reset();
    procedureMockUtils.reset();
    dsMockUtils.reset();
    sinon.restore();
  });

  afterAll(() => {
    procedureMockUtils.cleanup();
    dsMockUtils.cleanup();
  });

  it('should add an add asset transfer compliance transaction to the queue', async () => {
    args = {
      type: TransferRestrictionType.Count,
      exemptedIdentities: [],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      { ...emptyStorage }
    );

    transferConditionsToBtreeTransferConditionsStub.returns(mockCountBtreeSet);

    let result = await prepareAddTransferRestriction.call(proc, args);

    sinon.assert.calledWith(addBatchTransactionStub.firstCall, {
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, mockCountBtreeSet],
        },
      ],
    });

    transferConditionsToBtreeTransferConditionsStub.returns(mockPercentBtree);

    expect(result).toEqual(new BigNumber(1));

    args = {
      type: TransferRestrictionType.Percentage,
      exemptedIdentities: [],
      percentage,
      ticker,
    };

    result = await prepareAddTransferRestriction.call(proc, args);

    sinon.assert.calledWith(addBatchTransactionStub.secondCall, {
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, mockPercentBtree],
        },
      ],
    });

    expect(result).toEqual(new BigNumber(1));
  });

  it('should add an add exempted entities transaction to the queue', async () => {
    const identityScopeId = 'anotherScopeId';
    const rawIdentityScopeId = dsMockUtils.createMockScopeId(identityScopeId);
    const rawIdentityBtree = dsMockUtils.createMockBTreeSet<PolymeshPrimitivesIdentityId>([
      rawIdentityScopeId,
    ]);
    scopeIdsToBtreeSetIdentityIdStub.returns(rawIdentityBtree);

    entityMockUtils.configureMocks({
      identityOptions: { getScopeId: identityScopeId },
      assetOptions: { details: { requiresInvestorUniqueness: true } },
    });
    args = {
      type: TransferRestrictionType.Count,
      exemptedIdentities: [did],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      { ...emptyStorage }
    );

    let result = await prepareAddTransferRestriction.call(proc, args);
    sinon.assert.calledWith(addBatchTransactionStub.firstCall, {
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, mockCountBtreeSet],
        },
        {
          transaction: setExemptedEntitiesTransaction,
          feeMultiplier: new BigNumber(1),
          args: [true, { asset: { Ticker: rawTicker }, op: rawCountOp }, rawIdentityBtree],
        },
      ],
    });

    expect(result).toEqual(new BigNumber(1));

    result = await prepareAddTransferRestriction.call(proc, {
      ...args,
      exemptedIdentities: [entityMockUtils.getIdentityInstance()],
    });

    sinon.assert.calledWith(addBatchTransactionStub.secondCall, {
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, mockCountBtreeSet],
        },
        {
          transaction: setExemptedEntitiesTransaction,
          feeMultiplier: new BigNumber(1),
          args: [true, { asset: { Ticker: rawTicker }, op: rawCountOp }, rawIdentityBtree],
        },
      ],
    });

    expect(result).toEqual(new BigNumber(1));
  });

  it('should throw an error if attempting to add a restriction that already exists', async () => {
    args = {
      type: TransferRestrictionType.Count,
      exemptedIdentities: [],
      count,
      ticker,
    };
    let proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      {
        ...emptyStorage,
        currentRestrictions:
          dsMockUtils.createMockBTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>([
            rawCountCondition,
          ]),
      }
    );

    let err;

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Cannot add the same restriction more than once');

    args = {
      type: TransferRestrictionType.Percentage,
      exemptedIdentities: [],
      percentage,
      ticker,
    };

    proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      {
        ...emptyStorage,
        currentRestrictions:
          dsMockUtils.createMockBTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>([
            rawCountCondition,
            rawPercentageCondition,
          ]),
      }
    );

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Cannot add the same restriction more than once');
  });

  it('should throw an error if attempting to add a restriction when the restriction limit has been reached', async () => {
    args = {
      type: TransferRestrictionType.Count,
      count,
      ticker,
    };
    const restrictionsMockBtree =
      dsMockUtils.createMockBTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>([
        rawPercentageCondition,
        rawPercentageCondition,
        rawPercentageCondition,
      ]);

    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      {
        ...emptyStorage,
        currentRestrictions: restrictionsMockBtree,
      }
    );

    let err;

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Transfer Restriction limit reached');
    expect(err.data).toEqual({ limit: new BigNumber(3) });
  });

  it('should throw an error if exempted entities are repeated', async () => {
    args = {
      type: TransferRestrictionType.Count,
      exemptedIdentities: ['someScopeId', 'someScopeId'],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
      mockContext,
      emptyStorage
    );

    let err;

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe(
      'One or more of the passed exempted Identities are repeated or have the same Scope ID'
    );
  });

  describe('getAuthorization', () => {
    it('should return the appropriate roles and permissions', () => {
      args = {
        ticker,
        count,
        type: TransferRestrictionType.Count,
      };

      let proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
        mockContext,
        emptyStorage
      );
      let boundFunc = getAuthorization.bind(proc);

      expect(boundFunc(args)).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [TxTags.statistics.SetAssetTransferCompliance],
          portfolios: [],
        },
      });
      expect(boundFunc({ ...args, exemptedIdentities: ['someScopeId'] })).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [
            TxTags.statistics.SetAssetTransferCompliance,
            TxTags.statistics.SetEntitiesExempt,
          ],
          portfolios: [],
        },
      });

      proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
        mockContext,
        {
          ...emptyStorage,
        }
      );
      boundFunc = getAuthorization.bind(proc);

      expect(boundFunc(args)).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [TxTags.statistics.SetAssetTransferCompliance],
          portfolios: [],
        },
      });
    });
  });

  describe('prepareStorage', () => {
    beforeEach(() => {
      dsMockUtils.configureMocks({
        contextOptions: {
          did,
        },
      });
      dsMockUtils.createQueryStub('statistics', 'activeAssetStats', {
        returnValue: mockStatTypeBtree,
      });

      dsMockUtils.createQueryStub('statistics', 'assetTransferCompliances', {
        returnValue: { requirements: emptyRestrictionsBtreeSet },
      });
    });

    it('should fetch, process and return shared data', async () => {
      const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
        mockContext
      );
      mockStatTypeBtreeHasStub.returns(true);

      const boundFunc = prepareStorage.bind(proc);

      let result = await boundFunc({
        ticker: 'TICKER',
        type: TransferRestrictionType.Count,
        count: new BigNumber(1),
      } as AddTransferRestrictionParams);

      expect(result).toEqual({
        currentRestrictions: emptyRestrictionsBtreeSet,
      });

      dsMockUtils.createQueryStub('statistics', 'assetTransferCompliances', {
        returnValue: { requirements: mockCountBtreeSet },
      });

      result = await boundFunc({
        ticker: 'TICKER',
        type: TransferRestrictionType.Count,
        count: new BigNumber(1),
      } as AddTransferRestrictionParams);

      expect(result).toEqual({
        currentRestrictions: mockCountBtreeSet,
      });

      result = await boundFunc({
        ticker: 'TICKER',
        type: TransferRestrictionType.Percentage,
        percentage: new BigNumber(1),
      } as AddTransferRestrictionParams);

      expect(result).toEqual({
        currentRestrictions: mockCountBtreeSet,
      });
    });

    it('should throw an error if the appropriate stat is not set', () => {
      const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber, Storage>(
        mockContext
      );
      const boundFunc = prepareStorage.bind(proc);

      const expectedError = new PolymeshError({
        code: ErrorCode.UnmetPrerequisite,
        message:
          'The appropriate stat type for this restriction is not set for the Asset. Try calling enableStat in the namespace first',
      });

      return expect(
        boundFunc({
          ticker: 'TICKER',
          type: TransferRestrictionType.Percentage,
          percentage: new BigNumber(1),
        } as AddTransferRestrictionParams)
      ).rejects.toThrowError(expectedError);
    });
  });
});

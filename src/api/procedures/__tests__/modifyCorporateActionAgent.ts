import { Moment } from '@polkadot/types/interfaces';
import BigNumber from 'bignumber.js';
import { AgentGroup, AuthorizationData, Signatory, Ticker } from 'polymesh-types/types';
import sinon from 'sinon';

import {
  getAuthorization,
  Params,
  prepareModifyCorporateActionsAgent,
} from '~/api/procedures/modifyCorporateActionsAgent';
import { Account, Context, Identity } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { Authorization, SignerValue, TxTags } from '~/types';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Asset',
  require('~/testUtils/mocks/entities').mockAssetModule('~/api/entities/Asset')
);

describe('modifyCorporateActionAgent procedure', () => {
  let mockContext: Mocked<Context>;
  let authorizationToAuthorizationDataStub: sinon.SinonStub<
    [Authorization, Context],
    AuthorizationData
  >;
  let dateToMomentStub: sinon.SinonStub<[Date, Context], Moment>;
  let signerToStringStub: sinon.SinonStub<[string | Identity | Account], string>;
  let signerValueToSignatoryStub: sinon.SinonStub<[SignerValue, Context], Signatory>;
  let ticker: string;
  let rawTicker: Ticker;
  let rawAgentGroup: AgentGroup;
  let target: string;
  let addTransactionStub: sinon.SinonStub;
  let rawSignatory: Signatory;
  let rawAuthorizationData: AuthorizationData;

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
    authorizationToAuthorizationDataStub = sinon.stub(
      utilsConversionModule,
      'authorizationToAuthorizationData'
    );
    dateToMomentStub = sinon.stub(utilsConversionModule, 'dateToMoment');
    signerToStringStub = sinon.stub(utilsConversionModule, 'signerToString');
    signerValueToSignatoryStub = sinon.stub(utilsConversionModule, 'signerValueToSignatory');
    ticker = 'someTicker';
    rawTicker = dsMockUtils.createMockTicker(ticker);
    rawAgentGroup = dsMockUtils.createMockAgentGroup('Full');
    target = 'someDid';
    rawSignatory = dsMockUtils.createMockSignatory({
      Identity: dsMockUtils.createMockIdentityId(target),
    });
    rawAuthorizationData = dsMockUtils.createMockAuthorizationData({
      BecomeAgent: [rawTicker, rawAgentGroup],
    });
  });

  beforeEach(() => {
    entityMockUtils.configureMocks({
      assetOptions: {
        corporateActionsGetAgents: [],
      },
    });
    mockContext = dsMockUtils.getContextInstance();
    authorizationToAuthorizationDataStub.returns(rawAuthorizationData);
    signerToStringStub.returns(target);
    signerValueToSignatoryStub.returns(rawSignatory);
    addTransactionStub = procedureMockUtils.getAddTransactionStub();
  });

  afterEach(() => {
    entityMockUtils.reset();
    procedureMockUtils.reset();
    dsMockUtils.reset();
  });

  afterAll(() => {
    procedureMockUtils.cleanup();
    dsMockUtils.cleanup();
  });

  it("should throw an error if the supplied target doesn't exist", () => {
    const args = {
      target,
      ticker,
    };

    dsMockUtils.configureMocks({ contextOptions: { invalidDids: [target] } });

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    return expect(prepareModifyCorporateActionsAgent.call(proc, args)).rejects.toThrow(
      'The supplied Identity does not exist'
    );
  });

  it('should throw an error if the supplied Identity is currently the corporate actions agent', () => {
    entityMockUtils.configureMocks({
      assetOptions: {
        corporateActionsGetAgents: [entityMockUtils.getIdentityInstance({ did: target })],
      },
    });

    const args = {
      target,
      ticker,
      requestExpiry: new Date(),
    };

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    return expect(prepareModifyCorporateActionsAgent.call(proc, args)).rejects.toThrow(
      'The Corporate Actions Agent must be undefined to perform this procedure'
    );
  });

  it('should throw an error if the supplied expiry date is not a future date', () => {
    entityMockUtils.configureMocks({
      assetOptions: {
        corporateActionsGetAgents: [],
      },
    });

    const args = {
      target,
      ticker,
      requestExpiry: new Date(),
    };

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    return expect(prepareModifyCorporateActionsAgent.call(proc, args)).rejects.toThrow(
      'The request expiry must be a future date'
    );
  });

  it('should add an add authorization transaction to the queue', async () => {
    const args = {
      target,
      ticker,
    };
    const requestExpiry = new Date('12/12/2050');
    const rawExpiry = dsMockUtils.createMockMoment(new BigNumber(requestExpiry.getTime()));

    dateToMomentStub.withArgs(requestExpiry, mockContext).returns(rawExpiry);

    const transaction = dsMockUtils.createTxStub('identity', 'addAuthorization');
    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    await prepareModifyCorporateActionsAgent.call(proc, args);

    sinon.assert.calledWith(addTransactionStub, {
      transaction,
      args: [rawSignatory, rawAuthorizationData, null],
    });

    await prepareModifyCorporateActionsAgent.call(proc, {
      ...args,
      requestExpiry,
    });

    sinon.assert.calledWith(addTransactionStub, {
      transaction,
      args: [rawSignatory, rawAuthorizationData, rawExpiry],
    });
  });

  describe('getAuthorization', () => {
    it('should return the appropriate roles and permissions', () => {
      const proc = procedureMockUtils.getInstance<Params, void>(mockContext);
      const boundFunc = getAuthorization.bind(proc);
      const args = {
        ticker,
      } as Params;

      expect(boundFunc(args)).toEqual({
        permissions: {
          portfolios: [],
          transactions: [TxTags.identity.AddAuthorization],
          assets: [expect.objectContaining({ ticker })],
        },
      });
    });
  });
});

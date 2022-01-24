import BigNumber from 'bignumber.js';
import { IdentityId, Ticker } from 'polymesh-types/types';
import sinon from 'sinon';

import { Context, Identity, KnownPermissionGroup, Namespace, TransactionQueue } from '~/internal';
import { eventByIndexedArgs, tickerExternalAgentActions } from '~/middleware/queries';
import { EventIdEnum, ModuleIdEnum } from '~/middleware/types';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { PermissionGroupType, PermissionType, SecurityToken, TxTags } from '~/types';
import { tuple } from '~/types/utils';
import { MAX_TICKER_LENGTH } from '~/utils/constants';
import * as utilsConversionModule from '~/utils/conversion';
import * as utilsInternalModule from '~/utils/internal';

import { TokenPermissions } from '../TokenPermissions';

jest.mock(
  '~/base/Procedure',
  require('~/testUtils/mocks/procedure').mockProcedureModule('~/base/Procedure')
);

describe('TokenPermissions class', () => {
  const did = 'someDid';
  const ticker = 'SOMETICKER';
  let token: Mocked<SecurityToken>;

  let context: Mocked<Context>;
  let tokenPermissions: TokenPermissions;
  let identity: Identity;

  beforeAll(() => {
    dsMockUtils.initMocks();
    entityMockUtils.initMocks();
    procedureMockUtils.initMocks();
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
    identity = entityMockUtils.getIdentityInstance({ did });
    token = entityMockUtils.getSecurityTokenInstance({ ticker });
    tokenPermissions = new TokenPermissions(identity, context);
  });

  afterEach(() => {
    entityMockUtils.reset();
    dsMockUtils.reset();
    procedureMockUtils.reset();
  });

  afterAll(() => {
    dsMockUtils.cleanup();
    procedureMockUtils.cleanup();
  });

  test('should extend namespace', () => {
    expect(TokenPermissions.prototype instanceof Namespace).toBe(true);
  });

  describe('method: getGroup', () => {
    test('should throw an error if the Identity is no longer an Agent', async () => {
      dsMockUtils.createQueryStub('externalAgents', 'groupOfAgent', {
        returnValue: dsMockUtils.createMockOption(),
      });

      let error;

      try {
        await tokenPermissions.getGroup({ token });
      } catch (err) {
        error = err;
      }

      expect(error.message).toBe('This Identity is no longer an Agent for this Security Token');
    });

    test('should return the permission group associated with the Agent', async () => {
      dsMockUtils.createQueryStub('externalAgents', 'groupOfAgent', {
        returnValue: dsMockUtils.createMockOption(dsMockUtils.createMockAgentGroup('Full')),
      });

      const result = await tokenPermissions.getGroup({ token });

      expect(result instanceof KnownPermissionGroup).toEqual(true);
      expect((result as KnownPermissionGroup).type).toEqual(PermissionGroupType.Full);
    });
  });

  describe('method: enabledAt', () => {
    test('should return the event identifier object of the agent added', async () => {
      const blockNumber = new BigNumber(1234);
      const blockDate = new Date('4/14/2020');
      const eventIdx = 1;
      const variables = {
        moduleId: ModuleIdEnum.Externalagents,
        eventId: EventIdEnum.AgentAdded,
        eventArg1: utilsInternalModule.padString(ticker, MAX_TICKER_LENGTH),
      };
      const fakeResult = { blockNumber, blockDate, eventIndex: eventIdx };

      dsMockUtils.createApolloQueryStub(eventByIndexedArgs(variables), {
        /* eslint-disable @typescript-eslint/naming-convention */
        eventByIndexedArgs: {
          block_id: blockNumber.toNumber(),
          block: { datetime: blockDate },
          event_idx: eventIdx,
        },
        /* eslint-enable @typescript-eslint/naming-convention */
      });

      const result = await tokenPermissions.enabledAt({ token });

      expect(result).toEqual(fakeResult);
    });

    test('should return null if the query result is empty', async () => {
      const variables = {
        moduleId: ModuleIdEnum.Externalagents,
        eventId: EventIdEnum.AgentAdded,
        eventArg1: utilsInternalModule.padString(ticker, MAX_TICKER_LENGTH),
      };

      dsMockUtils.createApolloQueryStub(eventByIndexedArgs(variables), {});
      const result = await tokenPermissions.enabledAt({ token });
      expect(result).toBeNull();
    });
  });

  describe('method: setGroup', () => {
    test('should prepare the procedure and return the resulting transaction queue', async () => {
      const group = {
        transactions: {
          type: PermissionType.Include,
          values: [],
        },
        token,
      };
      const expectedQueue = 'someQueue' as unknown as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args: { identity, group }, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await tokenPermissions.setGroup({ group });

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: checkPermissions', () => {
    beforeAll(() => {
      entityMockUtils.initMocks();
    });

    afterEach(() => {
      entityMockUtils.reset();
    });

    test('should check whether the Identity has the appropriate permissions for the token', async () => {
      dsMockUtils.createQueryStub('externalAgents', 'groupOfAgent', {
        returnValue: dsMockUtils.createMockOption(),
      });

      let result = await tokenPermissions.checkPermissions({ token, transactions: null });

      expect(result).toEqual({
        result: false,
        missingPermissions: null,
        message: 'The Identity is not an Agent for the Security Token',
      });
      dsMockUtils.createQueryStub('externalAgents', 'groupOfAgent', {
        returnValue: dsMockUtils.createMockOption(dsMockUtils.createMockAgentGroup('Full')),
      });

      result = await tokenPermissions.checkPermissions({ token, transactions: null });

      expect(result).toEqual({ result: true });

      dsMockUtils.createQueryStub('externalAgents', 'groupOfAgent', {
        returnValue: dsMockUtils.createMockOption(dsMockUtils.createMockAgentGroup('ExceptMeta')),
      });

      result = await tokenPermissions.checkPermissions({ token, transactions: null });

      expect(result).toEqual({ result: false, missingPermissions: null });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.externalAgents.RemoveAgent],
      });

      expect(result).toEqual({
        result: false,
        missingPermissions: [TxTags.externalAgents.RemoveAgent],
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.asset.ControllerTransfer],
      });

      expect(result).toEqual({ result: true });

      dsMockUtils.createQueryStub('externalAgents', 'groupOfAgent', {
        returnValue: dsMockUtils.createMockOption(
          dsMockUtils.createMockAgentGroup('PolymeshV1Pia')
        ),
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.asset.CreateAsset],
      });

      expect(result).toEqual({
        result: false,
        missingPermissions: [TxTags.asset.CreateAsset],
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.asset.ControllerTransfer, TxTags.sto.Invest],
      });

      expect(result).toEqual({
        result: false,
        missingPermissions: [TxTags.sto.Invest],
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.asset.ControllerTransfer, TxTags.sto.FreezeFundraiser],
      });

      expect(result).toEqual({
        result: true,
      });

      dsMockUtils.createQueryStub('externalAgents', 'groupOfAgent', {
        returnValue: dsMockUtils.createMockOption(
          dsMockUtils.createMockAgentGroup('PolymeshV1Caa')
        ),
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.asset.CreateAsset],
      });

      expect(result).toEqual({
        result: false,
        missingPermissions: [TxTags.asset.CreateAsset],
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.corporateAction.ChangeRecordDate],
      });

      expect(result).toEqual({
        result: true,
      });

      dsMockUtils.createQueryStub('externalAgents', 'groupOfAgent', {
        returnValue: dsMockUtils.createMockOption(
          dsMockUtils.createMockAgentGroup({ Custom: dsMockUtils.createMockU32(1) })
        ),
      });
      dsMockUtils.createQueryStub('externalAgents', 'groupPermissions', {
        returnValue: dsMockUtils.createMockOption(
          dsMockUtils.createMockExtrinsicPermissions('Whole')
        ),
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.corporateAction.ChangeRecordDate],
      });

      expect(result).toEqual({
        result: true,
      });

      /* eslint-disable @typescript-eslint/naming-convention */
      dsMockUtils.createQueryStub('externalAgents', 'groupPermissions', {
        returnValue: dsMockUtils.createMockOption(
          dsMockUtils.createMockExtrinsicPermissions({
            These: [
              dsMockUtils.createMockPalletPermissions({
                pallet_name: 'asset',
                dispatchable_names: {
                  Except: [dsMockUtils.createMockDispatchableName('createAsset')],
                },
              }),
            ],
          })
        ),
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: null,
      });

      expect(result).toEqual({
        result: false,
        missingPermissions: null,
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.asset.CreateAsset],
      });

      expect(result).toEqual({
        result: false,
        missingPermissions: [TxTags.asset.CreateAsset],
      });

      dsMockUtils.createQueryStub('externalAgents', 'groupPermissions', {
        returnValue: dsMockUtils.createMockOption(
          dsMockUtils.createMockExtrinsicPermissions({
            Except: [
              dsMockUtils.createMockPalletPermissions({
                pallet_name: 'asset',
                dispatchable_names: 'Whole',
              }),
            ],
          })
        ),
      });

      result = await tokenPermissions.checkPermissions({
        token,
        transactions: [TxTags.identity.AddClaim],
      });

      expect(result).toEqual({
        result: true,
      });
      /* eslint-enable @typescript-eslint/naming-convention */
    });

    test('should throw an error if the transaction array is empty', async () => {
      expect(tokenPermissions.checkPermissions({ token, transactions: [] })).rejects.toThrow(
        'Cannot check Permissions for an empty transaction array'
      );
    });
  });

  describe('method: hasPermissions', () => {
    beforeAll(() => {
      entityMockUtils.initMocks();
    });

    afterEach(() => {
      entityMockUtils.reset();
    });

    test('should check whether the Identity has the appropriate permissions for the token', async () => {
      dsMockUtils.createQueryStub('externalAgents', 'groupOfAgent', {
        returnValue: dsMockUtils.createMockOption(),
      });

      const result = await tokenPermissions.hasPermissions({ token, transactions: null });

      expect(result).toBe(false);
    });
  });

  describe('method: waive', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const args = {
        token,
        identity,
      };

      const expectedQueue = 'someQueue' as unknown as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await tokenPermissions.waive(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: get', () => {
    let rawDid: IdentityId;
    let rawTicker: Ticker;
    let stringToIdentityIdStub: sinon.SinonStub;

    beforeAll(() => {
      stringToIdentityIdStub = sinon.stub(utilsConversionModule, 'stringToIdentityId');
      rawDid = dsMockUtils.createMockIdentityId(did);
      rawTicker = dsMockUtils.createMockTicker(ticker);
    });

    beforeEach(() => {
      stringToIdentityIdStub.withArgs(did, context).returns(rawDid);
    });

    afterAll(() => {
      sinon.restore();
    });

    test('should return a list of AgentWithGroup', async () => {
      const group = entityMockUtils.getKnownPermissionGroupInstance({
        ticker,
        type: PermissionGroupType.Full,
        getPermissions: {
          transactions: null,
          transactionGroups: [],
        },
      });

      entityMockUtils.configureMocks({
        securityTokenOptions: {
          ticker,
        },
      });

      sinon.stub(tokenPermissions, 'getGroup').resolves(group);

      dsMockUtils.createQueryStub('externalAgents', 'agentOf', {
        entries: [tuple([rawDid, rawTicker], {})],
      });

      const result = await tokenPermissions.get();
      expect(result.length).toEqual(1);
      expect(result[0].token.ticker).toEqual(ticker);
      expect(result[0].group instanceof KnownPermissionGroup).toEqual(true);
    });
  });

  describe('method: getOperationHistory', () => {
    test('should return the Events triggered by Operations the Identity has performed on a specific Security Token', async () => {
      const blockId = new BigNumber(1);
      const blockHash = 'someHash';
      const eventIndex = 1;
      const datetime = '2020-10-10';

      dsMockUtils.createQueryStub('system', 'blockHash', {
        multi: [dsMockUtils.createMockHash(blockHash)],
      });
      /* eslint-disable @typescript-eslint/naming-convention */
      dsMockUtils.createApolloQueryStub(
        tickerExternalAgentActions({
          ticker,
          caller_did: did,
          pallet_name: undefined,
          event_id: undefined,
          count: undefined,
          skip: undefined,
        }),
        {
          tickerExternalAgentActions: {
            totalCount: 1,
            items: [
              {
                block_id: blockId.toNumber(),
                datetime,
                event_idx: eventIndex,
              },
            ],
          },
        }
      );
      /* eslint-enable @typescript-eslint/naming-convention */

      let result = await tokenPermissions.getOperationHistory({
        token: ticker,
      });

      expect(result.next).toEqual(null);
      expect(result.count).toEqual(1);
      expect(result.data).toEqual([
        {
          blockNumber: blockId,
          blockHash,
          blockDate: new Date(`${datetime}Z`),
          eventIndex,
        },
      ]);

      /* eslint-disable @typescript-eslint/naming-convention */
      dsMockUtils.createApolloQueryStub(
        tickerExternalAgentActions({
          ticker,
          caller_did: did,
          pallet_name: undefined,
          event_id: undefined,
          count: undefined,
          skip: undefined,
        }),
        {
          tickerExternalAgentActions: {
            totalCount: 0,
            items: [],
          },
        }
      );
      /* eslint-enable @typescript-eslint/naming-convention */

      result = await tokenPermissions.getOperationHistory({
        token: ticker,
      });

      expect(result.next).toEqual(null);
      expect(result.count).toEqual(0);
      expect(result.data).toEqual([]);
    });
  });
});

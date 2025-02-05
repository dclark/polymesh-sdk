import { bool, u64 } from '@polkadot/types';
import BigNumber from 'bignumber.js';
import sinon from 'sinon';

import {
  ConsumeAddMultiSigSignerAuthorizationParams,
  getAuthorization,
  prepareConsumeAddMultiSigSignerAuthorization,
} from '~/api/procedures/consumeAddMultiSigSignerAuthorization';
import { AuthorizationRequest, Context } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { Authorization, AuthorizationType, Signer, TxTags } from '~/types';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);

describe('consumeAddMultiSigSignerAuthorization procedure', () => {
  let mockContext: Mocked<Context>;
  let targetAddress: string;
  let bigNumberToU64Stub: sinon.SinonStub<[BigNumber, Context], u64>;
  let booleanToBoolStub: sinon.SinonStub<[boolean, Context], bool>;
  let rawTrue: bool;
  let rawFalse: bool;
  let authId: BigNumber;
  let rawAuthId: u64;

  beforeAll(() => {
    targetAddress = 'someAddress';
    dsMockUtils.initMocks({
      contextOptions: {
        signingAddress: targetAddress,
      },
    });
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
    bigNumberToU64Stub = sinon.stub(utilsConversionModule, 'bigNumberToU64');
    booleanToBoolStub = sinon.stub(utilsConversionModule, 'booleanToBool');
    authId = new BigNumber(1);
    rawAuthId = dsMockUtils.createMockU64(authId);
    rawTrue = dsMockUtils.createMockBool(true);
    rawFalse = dsMockUtils.createMockBool(false);

    sinon.stub(utilsConversionModule, 'addressToKey');
  });

  let addTransactionStub: sinon.SinonStub;

  beforeEach(() => {
    addTransactionStub = procedureMockUtils.getAddTransactionStub();
    mockContext = dsMockUtils.getContextInstance();
    bigNumberToU64Stub.withArgs(authId, mockContext).returns(rawAuthId);
    booleanToBoolStub.withArgs(true, mockContext).returns(rawTrue);
    booleanToBoolStub.withArgs(false, mockContext).returns(rawFalse);
    dsMockUtils.createQueryStub('identity', 'authorizations', {
      returnValue: dsMockUtils.createMockOption(
        dsMockUtils.createMockAuthorization({
          /* eslint-disable @typescript-eslint/naming-convention */
          authorization_data: dsMockUtils.createMockAuthorizationData('RotatePrimaryKey'),
          auth_id: new BigNumber(1),
          authorized_by: 'someDid',
          expiry: dsMockUtils.createMockOption(),
          /* eslint-enable @typescript-eslint/naming-convention */
        })
      ),
    });
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

  it('should throw an error if the Authorization Request is expired', () => {
    const proc = procedureMockUtils.getInstance<ConsumeAddMultiSigSignerAuthorizationParams, void>(
      mockContext
    );

    const target = entityMockUtils.getAccountInstance({ address: 'someAddress' });

    return expect(
      prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
        authRequest: new AuthorizationRequest(
          {
            target,
            issuer: entityMockUtils.getIdentityInstance(),
            authId,
            expiry: new Date('10/14/1987'),
            data: {
              type: AuthorizationType.AddMultiSigSigner,
              value: 'someAddress',
            },
          },
          mockContext
        ),
        accept: true,
      })
    ).rejects.toThrow('The Authorization Request has expired');
  });

  it('should throw an error if the passed Account is already part of an Identity', async () => {
    const proc = procedureMockUtils.getInstance<ConsumeAddMultiSigSignerAuthorizationParams, void>(
      mockContext
    );

    dsMockUtils.createTxStub('multiSig', 'acceptMultisigSignerAsKey');

    const identity = entityMockUtils.getIdentityInstance();
    const target = entityMockUtils.getAccountInstance({
      address: 'someAddress',
      getIdentity: identity,
    });

    let error;

    try {
      await prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
        authRequest: new AuthorizationRequest(
          {
            target,
            issuer: entityMockUtils.getIdentityInstance(),
            authId,
            expiry: null,
            data: {
              type: AuthorizationType.AddMultiSigSigner,
              value: 'multisigAddr',
            },
          },
          mockContext
        ),
        accept: true,
      });
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('The target Account is already part of an Identity');
  });

  it('should add a acceptMultisigSignerAsKey transaction to the queue if the target is an Account', async () => {
    const proc = procedureMockUtils.getInstance<ConsumeAddMultiSigSignerAuthorizationParams, void>(
      mockContext
    );
    dsMockUtils.createQueryStub('multiSig', 'keyToMultiSig', {
      returnValue: dsMockUtils.createMockAccountId(),
    });

    const transaction = dsMockUtils.createTxStub('multiSig', 'acceptMultisigSignerAsKey');

    const issuer = entityMockUtils.getIdentityInstance();
    const target = entityMockUtils.getAccountInstance({
      address: 'someAddress',
      getIdentity: null,
    });

    await prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
      authRequest: new AuthorizationRequest(
        {
          target,
          issuer,
          authId,
          expiry: null,
          data: {
            type: AuthorizationType.AddMultiSigSigner,
            value: 'someAccount',
          },
        },
        mockContext
      ),
      accept: true,
    });

    sinon.assert.calledWith(addTransactionStub, {
      transaction,
      paidForBy: issuer,
      args: [rawAuthId],
    });
  });

  it('should add a acceptMultisigSignerAsIdentity transaction to the queue if the target is an Identity', async () => {
    const proc = procedureMockUtils.getInstance<ConsumeAddMultiSigSignerAuthorizationParams, void>(
      mockContext
    );

    const transaction = dsMockUtils.createTxStub('multiSig', 'acceptMultisigSignerAsIdentity');

    const issuer = entityMockUtils.getIdentityInstance();
    const target = entityMockUtils.getIdentityInstance({ did: 'someOtherDid' });

    await prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
      authRequest: new AuthorizationRequest(
        {
          target,
          issuer,
          authId,
          expiry: null,
          data: {
            type: AuthorizationType.AddMultiSigSigner,
            value: 'someAccount',
          },
        },
        mockContext
      ),
      accept: true,
    });

    sinon.assert.calledWith(addTransactionStub, {
      transaction,
      paidForBy: issuer,
      args: [rawAuthId],
    });
  });

  it('should add a removeAuthorization transaction to the queue if accept is set to false', async () => {
    const proc = procedureMockUtils.getInstance<ConsumeAddMultiSigSignerAuthorizationParams, void>(
      mockContext
    );

    const transaction = dsMockUtils.createTxStub('identity', 'removeAuthorization');

    const issuer = entityMockUtils.getIdentityInstance();
    let target: Signer = entityMockUtils.getIdentityInstance({ did: 'someOtherDid' });

    const rawSignatory = dsMockUtils.createMockSignatory({
      Identity: dsMockUtils.createMockIdentityId(target.did),
    });

    sinon.stub(utilsConversionModule, 'signerValueToSignatory').returns(rawSignatory);

    await prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
      authRequest: new AuthorizationRequest(
        {
          target,
          issuer,
          authId,
          expiry: null,
          data: {
            type: AuthorizationType.AddMultiSigSigner,
            value: 'multiSigAddr',
          },
        },
        mockContext
      ),
      accept: false,
    });

    sinon.assert.calledWith(addTransactionStub, {
      transaction,
      args: [rawSignatory, rawAuthId, rawFalse],
    });

    target = entityMockUtils.getAccountInstance({
      address: targetAddress,
      isEqual: false,
      getIdentity: null,
    });

    await prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
      authRequest: new AuthorizationRequest(
        {
          target,
          issuer,
          authId,
          expiry: null,
          data: {
            type: AuthorizationType.AddMultiSigSigner,
            value: 'multiSigAddr',
          },
        },
        mockContext
      ),
      accept: false,
    });

    sinon.assert.calledWith(addTransactionStub, {
      transaction,
      paidForBy: issuer,
      args: [rawSignatory, rawAuthId, rawTrue],
    });
  });

  describe('getAuthorization', () => {
    it('should return the appropriate roles and permissions', async () => {
      const proc = procedureMockUtils.getInstance<
        ConsumeAddMultiSigSignerAuthorizationParams,
        void
      >(mockContext);
      const { address } = mockContext.getSigningAccount();
      const constructorParams = {
        authId,
        expiry: null,
        target: entityMockUtils.getAccountInstance({ address }),
        issuer: entityMockUtils.getIdentityInstance({ did: 'issuerDid1' }),
        data: {
          type: AuthorizationType.AddMultiSigSigner,
        } as Authorization,
      };
      const args = {
        authRequest: new AuthorizationRequest(constructorParams, mockContext),
        accept: true,
      };

      const boundFunc = getAuthorization.bind(proc);
      let result = await boundFunc(args);
      expect(result).toEqual({
        roles: true,
        permissions: undefined,
      });

      args.authRequest.target = entityMockUtils.getIdentityInstance({
        did: 'notTheSigningIdentity',
      });

      dsMockUtils.configureMocks({
        contextOptions: {
          signingIdentityIsEqual: false,
        },
      });

      result = await boundFunc(args);
      expect(result).toEqual({
        roles:
          '"AddMultiSigSigner" Authorization Requests can only be accepted by the target Signer',
        permissions: {
          transactions: [TxTags.multiSig.AcceptMultisigSignerAsIdentity],
        },
      });

      args.accept = false;
      args.authRequest.issuer = await mockContext.getSigningIdentity();

      dsMockUtils.configureMocks({
        contextOptions: {
          signingIdentityIsEqual: true,
        },
      });

      result = await boundFunc(args);
      expect(result).toEqual({
        roles: true,
        permissions: {
          transactions: [TxTags.identity.RemoveAuthorization],
        },
      });

      dsMockUtils.configureMocks({
        contextOptions: {
          signingIdentityIsEqual: false,
        },
      });

      result = await boundFunc(args);
      expect(result).toEqual({
        roles:
          '"AddMultiSigSigner" Authorization Request can only be removed by the issuing Identity or the target Signer',
        permissions: {
          transactions: [TxTags.identity.RemoveAuthorization],
        },
      });

      mockContext.getSigningAccount.returns(
        entityMockUtils.getAccountInstance({ address, getIdentity: null })
      );

      result = await boundFunc(args);
      expect(result).toEqual({
        roles:
          '"AddMultiSigSigner" Authorization Request can only be removed by the issuing Identity or the target Signer',
        permissions: {
          transactions: [TxTags.identity.RemoveAuthorization],
        },
      });

      args.authRequest.target = entityMockUtils.getAccountInstance({ address, getIdentity: null });

      result = await boundFunc(args);
      expect(result).toEqual({
        roles: true,
      });
    });
  });
});

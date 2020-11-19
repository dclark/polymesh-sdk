import sinon from 'sinon';

import { Account, Context, CurrentAccount, CurrentIdentity, Identity } from '~/internal';
import { dsMockUtils } from '~/testUtils/mocks';
import * as utilsConversionModule from '~/utils/conversion';

describe('CurrentAccount class', () => {
  let context: Context;

  beforeAll(() => {
    dsMockUtils.initMocks();

    sinon.stub(utilsConversionModule, 'addressToKey');
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
  });

  afterEach(() => {
    dsMockUtils.reset();
  });

  afterAll(() => {
    dsMockUtils.cleanup();
  });

  test('should extend Account', () => {
    expect(CurrentAccount.prototype instanceof Account).toBe(true);
  });

  describe('method: getIdentity', () => {
    test('should return the current Identity', async () => {
      const did = 'someDid';
      sinon.stub(Account.prototype, 'getIdentity').resolves(new Identity({ did }, context));

      const account = new CurrentAccount({ address: 'someAddress' }, context);

      const result = await account.getIdentity();

      expect(result instanceof CurrentIdentity).toBe(true);
      expect(result?.did).toBe(did);
    });
  });
});

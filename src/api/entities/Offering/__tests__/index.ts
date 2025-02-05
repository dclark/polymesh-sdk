import BigNumber from 'bignumber.js';
import sinon from 'sinon';

import { Context, Entity, Offering, TransactionQueue } from '~/internal';
import { heartbeat, investments } from '~/middleware/queries';
import { InvestmentResult } from '~/middleware/types';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import {
  OfferingBalanceStatus,
  OfferingDetails,
  OfferingSaleStatus,
  OfferingTimingStatus,
} from '~/types';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);
jest.mock(
  '~/api/entities/Asset',
  require('~/testUtils/mocks/entities').mockAssetModule('~/api/entities/Asset')
);
jest.mock(
  '~/api/entities/DefaultPortfolio',
  require('~/testUtils/mocks/entities').mockDefaultPortfolioModule(
    '~/api/entities/DefaultPortfolio'
  )
);
jest.mock(
  '~/api/entities/NumberedPortfolio',
  require('~/testUtils/mocks/entities').mockNumberedPortfolioModule(
    '~/api/entities/NumberedPortfolio'
  )
);
jest.mock(
  '~/api/entities/Venue',
  require('~/testUtils/mocks/entities').mockVenueModule('~/api/entities/Venue')
);
jest.mock(
  '~/base/Procedure',
  require('~/testUtils/mocks/procedure').mockProcedureModule('~/base/Procedure')
);

describe('Offering class', () => {
  let context: Context;

  beforeAll(() => {
    dsMockUtils.initMocks();
    entityMockUtils.initMocks();
    procedureMockUtils.initMocks();
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
  });

  afterEach(() => {
    dsMockUtils.reset();
    entityMockUtils.reset();
    procedureMockUtils.reset();
  });

  afterAll(() => {
    dsMockUtils.cleanup();
    procedureMockUtils.cleanup();
  });

  it('should extend Entity', () => {
    expect(Offering.prototype instanceof Entity).toBe(true);
  });

  describe('constructor', () => {
    it('should assign ticker and id to instance', () => {
      const ticker = 'SOME_TICKER';
      const id = new BigNumber(1);
      const offering = new Offering({ id, ticker }, context);

      expect(offering.asset.ticker).toBe(ticker);
      expect(offering.id).toEqual(id);
    });
  });

  describe('method: isUniqueIdentifiers', () => {
    it('should return true if the object conforms to the interface', () => {
      expect(Offering.isUniqueIdentifiers({ id: new BigNumber(1), ticker: 'symbol' })).toBe(true);
      expect(Offering.isUniqueIdentifiers({})).toBe(false);
      expect(Offering.isUniqueIdentifiers({ id: new BigNumber(1) })).toBe(false);
      expect(Offering.isUniqueIdentifiers({ id: 1 })).toBe(false);
    });
  });

  describe('method: details', () => {
    const ticker = 'FAKETICKER';
    const id = new BigNumber(1);
    const someDid = 'someDid';
    const name = 'someSto';
    const otherDid = 'otherDid';
    const raisingCurrency = 'USD';
    const amount = new BigNumber(1000);
    const price = new BigNumber(100);
    const remaining = new BigNumber(700);
    const date = new Date();
    const minInvestmentValue = new BigNumber(1);

    const rawFundraiser = dsMockUtils.createMockOption(
      dsMockUtils.createMockFundraiser({
        /* eslint-disable @typescript-eslint/naming-convention */
        creator: dsMockUtils.createMockIdentityId(someDid),
        offering_portfolio: dsMockUtils.createMockPortfolioId({
          did: dsMockUtils.createMockIdentityId(someDid),
          kind: dsMockUtils.createMockPortfolioKind('Default'),
        }),
        offering_asset: dsMockUtils.createMockTicker(ticker),
        raising_portfolio: dsMockUtils.createMockPortfolioId({
          did: dsMockUtils.createMockIdentityId(otherDid),
          kind: dsMockUtils.createMockPortfolioKind({
            User: dsMockUtils.createMockU64(new BigNumber(1)),
          }),
        }),
        raising_asset: dsMockUtils.createMockTicker(raisingCurrency),
        tiers: [
          dsMockUtils.createMockFundraiserTier({
            total: dsMockUtils.createMockBalance(amount),
            price: dsMockUtils.createMockBalance(price),
            remaining: dsMockUtils.createMockBalance(remaining),
          }),
        ],
        venue_id: dsMockUtils.createMockU64(new BigNumber(1)),
        start: dsMockUtils.createMockMoment(new BigNumber(date.getTime())),
        end: dsMockUtils.createMockOption(
          dsMockUtils.createMockMoment(new BigNumber(date.getTime()))
        ),
        status: dsMockUtils.createMockFundraiserStatus('Live'),
        minimum_investment: dsMockUtils.createMockBalance(minInvestmentValue),
        /* eslint-enable @typescript-eslint/naming-convention */
      })
    );

    const rawName = dsMockUtils.createMockFundraiserName(name);

    let offering: Offering;

    beforeEach(() => {
      context = dsMockUtils.getContextInstance();
      offering = new Offering({ ticker, id }, context);
    });

    it('should return details for an Asset offering', async () => {
      const fakeResult = {
        creator: expect.objectContaining({ did: someDid }),
        name,
        offeringPortfolio: expect.objectContaining({
          owner: expect.objectContaining({ did: someDid }),
        }),
        raisingPortfolio: expect.objectContaining({
          owner: expect.objectContaining({ did: otherDid }),
          id: new BigNumber(1),
        }),
        raisingCurrency,
        tiers: [
          {
            amount: amount.shiftedBy(-6),
            price: price.shiftedBy(-6),
            remaining: remaining.shiftedBy(-6),
          },
        ],
        venue: expect.objectContaining({ id: new BigNumber(1) }),
        start: date,
        end: date,
        status: {
          sale: OfferingSaleStatus.Live,
          timing: OfferingTimingStatus.Expired,
          balance: OfferingBalanceStatus.Residual,
        },
        minInvestment: minInvestmentValue.shiftedBy(-6),
        totalAmount: amount.shiftedBy(-6),
        totalRemaining: remaining.shiftedBy(-6),
      };

      dsMockUtils.createQueryStub('sto', 'fundraisers', {
        returnValue: rawFundraiser,
      });

      dsMockUtils.createQueryStub('sto', 'fundraiserNames', {
        returnValue: rawName,
      });

      const details = await offering.details();
      expect(details).toEqual(fakeResult);
    });

    it('should allow subscription', async () => {
      const unsubCallback = 'unsubCallBack';

      dsMockUtils.createQueryStub('sto', 'fundraiserNames', {
        returnValue: rawName,
      });

      dsMockUtils.createQueryStub('sto', 'fundraisers').callsFake(async (_a, _b, cbFunc) => {
        cbFunc(rawFundraiser, rawName);
        return unsubCallback;
      });

      const callback = sinon.stub();
      const result = await offering.details(callback);

      sinon
        .stub(utilsConversionModule, 'fundraiserToOfferingDetails')
        .returns({} as OfferingDetails);

      expect(result).toBe(unsubCallback);
      sinon.assert.calledWithExactly(callback, sinon.match({}));
    });
  });

  describe('method: close', () => {
    it('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const ticker = 'SOME_TICKER';
      const id = new BigNumber(1);
      const offering = new Offering({ id, ticker }, context);

      const args = {
        ticker,
        id,
      };

      const expectedQueue = 'someQueue' as unknown as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await offering.close();

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: modifyTimes', () => {
    it('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const ticker = 'SOME_TICKER';
      const id = new BigNumber(1);
      const offering = new Offering({ id, ticker }, context);

      const now = new Date();
      const start = new Date(now.getTime() + 100000);
      const end = new Date(start.getTime() + 100000);

      const args = {
        ticker,
        id,
        start,
        end,
      };

      const expectedQueue = 'someQueue' as unknown as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await offering.modifyTimes({
        start,
        end,
      });

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: getInvestments', () => {
    it('should return a list of investors', async () => {
      const ticker = 'SOME_TICKER';
      const id = new BigNumber(1);
      const offering = new Offering({ id, ticker }, context);
      const did = 'someDid';
      const offeringToken = 'TICKER';
      const raiseToken = 'USD';
      const offeringTokenAmount = new BigNumber(10000);
      const raiseTokenAmount = new BigNumber(1000);

      const items = [
        {
          investor: did,
          offeringToken,
          raiseToken,
          offeringTokenAmount: offeringTokenAmount.toNumber(),
          raiseTokenAmount: raiseTokenAmount.toNumber(),
          datetime: '2020-10-10',
        },
      ];

      /* eslint-disable @typescript-eslint/naming-convention */
      const investmentQueryResponse: InvestmentResult = {
        totalCount: 1,
        items,
      };
      /* eslint-enable @typescript-eslint/naming-convention */

      dsMockUtils.createApolloQueryStub(heartbeat(), true);

      dsMockUtils.createApolloQueryStub(
        investments({
          stoId: id.toNumber(),
          ticker,
          count: 5,
          skip: 0,
        }),
        {
          investments: investmentQueryResponse,
        }
      );

      let result = await offering.getInvestments({
        size: new BigNumber(5),
        start: new BigNumber(0),
      });

      const { data } = result;

      expect(data[0].investor.did).toBe(did);
      expect(data[0].soldAmount).toEqual(offeringTokenAmount.div(Math.pow(10, 6)));
      expect(data[0].investedAmount).toEqual(raiseTokenAmount.div(Math.pow(10, 6)));

      dsMockUtils.createApolloQueryStub(
        investments({
          stoId: id.toNumber(),
          ticker,
          count: undefined,
          skip: undefined,
        }),
        {
          investments: {
            totalCount: 0,
            items: [],
          },
        }
      );

      result = await offering.getInvestments();
      expect(result.data).toEqual([]);
      expect(result.next).toBeNull();
    });
  });

  describe('method: freeze', () => {
    it('should prepare the procedure and return the resulting transaction queue', async () => {
      const ticker = 'SOME_TICKER';
      const id = new BigNumber(1);
      const offering = new Offering({ id, ticker }, context);

      const expectedQueue = 'someQueue' as unknown as TransactionQueue<Offering>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args: { ticker, id, freeze: true }, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await offering.freeze();

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: unfreeze', () => {
    it('should prepare the procedure and return the resulting transaction queue', async () => {
      const ticker = 'SOME_TICKER';
      const id = new BigNumber(1);
      const offering = new Offering({ id, ticker }, context);

      const expectedQueue = 'someQueue' as unknown as TransactionQueue<Offering>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args: { ticker, id, freeze: false }, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await offering.unfreeze();

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: invest', () => {
    it('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const ticker = 'SOME_TICKER';
      const id = new BigNumber(1);
      const offering = new Offering({ id, ticker }, context);
      const did = 'someDid';

      const purchasePortfolio = entityMockUtils.getDefaultPortfolioInstance({ did });
      const fundingPortfolio = entityMockUtils.getDefaultPortfolioInstance({ did });
      const purchaseAmount = new BigNumber(10);

      const args = {
        ticker,
        id,
        purchasePortfolio,
        fundingPortfolio,
        purchaseAmount,
      };

      const expectedQueue = 'someQueue' as unknown as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await offering.invest({
        purchasePortfolio,
        fundingPortfolio,
        purchaseAmount,
      });

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: exists', () => {
    it('should return whether the Offering exists', async () => {
      const offering = new Offering({ ticker: 'SOME_TICKER', id: new BigNumber(1) }, context);

      dsMockUtils.createQueryStub('sto', 'fundraisers', {
        returnValue: dsMockUtils.createMockOption(dsMockUtils.createMockFundraiser()),
      });

      let result = await offering.exists();
      expect(result).toBe(true);

      dsMockUtils.createQueryStub('sto', 'fundraisers', {
        returnValue: dsMockUtils.createMockOption(),
      });

      result = await offering.exists();
      expect(result).toBe(false);
    });
  });

  describe('method: toJson', () => {
    it('should return a human readable version of the entity', () => {
      const offering = new Offering({ ticker: 'SOME_TICKER', id: new BigNumber(1) }, context);

      expect(offering.toJson()).toEqual({
        id: '1',
        ticker: 'SOME_TICKER',
      });
    });
  });
});

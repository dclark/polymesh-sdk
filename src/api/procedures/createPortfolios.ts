import { ISubmittableResult } from '@polkadot/types/types';

import {
  Context,
  NumberedPortfolio,
  PolymeshError,
  PostTransactionValue,
  Procedure,
} from '~/internal';
import { ErrorCode, TxTags } from '~/types';
import { tuple } from '~/types/utils';
import {
  identityIdToString,
  stringToIdentityId,
  stringToText,
  u64ToBigNumber,
} from '~/utils/conversion';
import { filterEventRecords, getPortfolioIdsByName } from '~/utils/internal';

/**
 * @hidden
 */
export interface Params {
  names: string[];
}

/**
 * @hidden
 */
export const createPortfoliosResolver =
  (context: Context) =>
  (receipt: ISubmittableResult): NumberedPortfolio[] => {
    const records = filterEventRecords(receipt, 'portfolio', 'PortfolioCreated');

    return records.map(({ data }) => {
      const did = identityIdToString(data[0]);
      const id = u64ToBigNumber(data[1]);

      return new NumberedPortfolio({ did, id }, context);
    });
  };

/**
 * @hidden
 */
export async function prepareCreatePortfolios(
  this: Procedure<Params, NumberedPortfolio[]>,
  args: Params
): Promise<PostTransactionValue<NumberedPortfolio[]>> {
  const {
    context: {
      polymeshApi: { tx },
    },
    context,
  } = this;
  const { names: portfolioNames } = args;

  const { did } = await context.getSigningIdentity();

  const rawIdentityId = stringToIdentityId(did, context);

  const rawNames = portfolioNames.map(name => stringToText(name, context));

  const portfolioIds = await getPortfolioIdsByName(rawIdentityId, rawNames, context);

  const existingNames: string[] = [];

  portfolioIds.forEach((id, index) => {
    if (id) {
      existingNames.push(portfolioNames[index]);
    }
  });

  if (existingNames.length) {
    throw new PolymeshError({
      code: ErrorCode.UnmetPrerequisite,
      message: 'There already exist Portfolios with some of the given names',
      data: {
        existingNames,
      },
    });
  }

  const transaction = tx.portfolio.createPortfolio;

  const [newNumberedPortfolios] = this.addBatchTransaction({
    transactions: rawNames.map(name => ({
      transaction,
      args: tuple(name),
    })),
    resolvers: [createPortfoliosResolver(context)],
  });

  return newNumberedPortfolios;
}

/**
 * @hidden
 */
export const createPortfolios = (): Procedure<Params, NumberedPortfolio[]> =>
  new Procedure(prepareCreatePortfolios, {
    permissions: {
      transactions: [TxTags.portfolio.CreatePortfolio],
      assets: [],
      portfolios: [],
    },
  });

import { ISubmittableResult } from '@polkadot/types/types';

import { createAuthorizationResolver, getGroupFromPermissions } from '~/api/procedures/utils';
import {
  Asset,
  AuthorizationRequest,
  CustomPermissionGroup,
  Identity,
  KnownPermissionGroup,
  PolymeshError,
  Procedure,
} from '~/internal';
import {
  Authorization,
  AuthorizationType,
  ErrorCode,
  SignerType,
  TransactionPermissions,
  TxGroup,
  TxTags,
} from '~/types';
import { ExtrinsicParams, ProcedureAuthorization, TransactionSpec } from '~/types/internal';
import {
  authorizationToAuthorizationData,
  dateToMoment,
  permissionsLikeToPermissions,
  signerToString,
  signerValueToSignatory,
  stringToTicker,
  transactionPermissionsToExtrinsicPermissions,
  u64ToBigNumber,
} from '~/utils/conversion';
import { filterEventRecords, optionize } from '~/utils/internal';

export const createGroupAndAuthorizationResolver =
  (target: Identity) =>
  (receipt: ISubmittableResult): Promise<AuthorizationRequest> => {
    const [{ data }] = filterEventRecords(receipt, 'identity', 'AuthorizationAdded');

    const id = u64ToBigNumber(data[3]);

    return target.authorizations.getOne({ id });
  };

export interface InviteExternalAgentParams {
  target: string | Identity;
  permissions:
    | KnownPermissionGroup
    | CustomPermissionGroup
    | {
        transactions: TransactionPermissions | null;
      }
    | {
        transactionGroups: TxGroup[];
      };
  /**
   * date at which the authorization request for invitation expires (optional)
   *
   * @note if expiry date is not set, the invitation will never expire
   * @note due to chain limitations, the expiry will be ignored if the passed `permissions` don't correspond to an existing Permission Group
   */
  expiry?: Date;
}

/**
 * @hidden
 */
export type Params = InviteExternalAgentParams & {
  ticker: string;
};

/**
 * @hidden
 */
export interface Storage {
  asset: Asset;
}

/**
 * @hidden
 */
export async function prepareInviteExternalAgent(
  this: Procedure<Params, AuthorizationRequest, Storage>,
  args: Params
): Promise<
  | TransactionSpec<
      AuthorizationRequest,
      ExtrinsicParams<'externalAgents', 'createGroupAndAddAuth'>
    >
  | TransactionSpec<AuthorizationRequest, ExtrinsicParams<'identity', 'addAuthorization'>>
> {
  const {
    context: {
      polymeshApi: {
        tx: { identity, externalAgents },
      },
    },
    context,
    storage: { asset },
  } = this;

  const { ticker, target, permissions, expiry = null } = args;

  const issuer = await context.getSigningIdentity();
  const targetIdentity = await context.getIdentity(target);

  const currentAgents = await asset.permissions.getAgents();

  const isAgent = !!currentAgents.find(({ agent }) => agent.isEqual(targetIdentity));

  if (isAgent) {
    throw new PolymeshError({
      code: ErrorCode.NoDataChange,
      message: 'The target Identity is already an External Agent',
    });
  }

  const rawSignatory = signerValueToSignatory(
    { type: SignerType.Identity, value: signerToString(target) },
    context
  );

  let newAuthorizationData: Authorization;
  let rawAuthorizationData;

  // helper to transform permissions into the relevant Authorization
  const createBecomeAgentData = (
    value: KnownPermissionGroup | CustomPermissionGroup
  ): Authorization => ({
    type: AuthorizationType.BecomeAgent,
    value,
  });

  if (permissions instanceof KnownPermissionGroup || permissions instanceof CustomPermissionGroup) {
    newAuthorizationData = createBecomeAgentData(permissions);
    rawAuthorizationData = authorizationToAuthorizationData(newAuthorizationData, context);
  } else {
    const rawTicker = stringToTicker(ticker, context);
    const { transactions } = permissionsLikeToPermissions(permissions, context);

    const matchingGroup = await getGroupFromPermissions(asset, transactions);

    /*
     * if there is no existing group with the passed permissions, we create it together with the Authorization Request.
     *   Otherwise, we use the existing group's ID to create the Authorization request
     */
    if (!matchingGroup) {
      return {
        transaction: externalAgents.createGroupAndAddAuth,
        args: [
          rawTicker,
          transactionPermissionsToExtrinsicPermissions(transactions, context),
          rawSignatory,
        ],
        resolver: createGroupAndAuthorizationResolver(targetIdentity),
      };
    }

    newAuthorizationData = createBecomeAgentData(matchingGroup);
    rawAuthorizationData = authorizationToAuthorizationData(newAuthorizationData, context);
  }

  const rawExpiry = optionize(dateToMoment)(expiry, context);

  return {
    transaction: identity.addAuthorization,
    args: [rawSignatory, rawAuthorizationData, rawExpiry],
    resolver: createAuthorizationResolver(
      newAuthorizationData,
      issuer,
      targetIdentity,
      expiry,
      context
    ),
  };
}

/**
 * @hidden
 */
export function getAuthorization(
  this: Procedure<Params, AuthorizationRequest, Storage>
): ProcedureAuthorization {
  const {
    storage: { asset },
  } = this;
  return {
    permissions: {
      transactions: [TxTags.identity.AddAuthorization],
      assets: [asset],
      portfolios: [],
    },
  };
}

/**
 * @hidden
 */
export function prepareStorage(
  this: Procedure<Params, AuthorizationRequest, Storage>,
  { ticker }: Params
): Storage {
  const { context } = this;

  return {
    asset: new Asset({ ticker }, context),
  };
}

/**
 * @hidden
 */
export const inviteExternalAgent = (): Procedure<Params, AuthorizationRequest, Storage> =>
  new Procedure(prepareInviteExternalAgent, getAuthorization, prepareStorage);

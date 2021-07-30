import { Context, PermissionGroup } from '~/internal';
import { GroupPermissions, ModuleName, PermissionGroupType, PermissionType, TxTags } from '~/types';
import { transactionPermissionsToTxGroups } from '~/utils/conversion';
import { toHumanReadable } from '~/utils/internal';

export interface HumanReadable {
  type: PermissionGroupType;
  ticker: string;
}

export interface UniqueIdentifiers {
  type: PermissionGroupType;
  ticker: string;
}

/**
 * Represents a group of known permissions for a Security Token
 */
export class KnownPermissionGroup extends PermissionGroup {
  /**
   * @hidden
   * Check if a value is of type [[UniqueIdentifiers]]
   */
  public static isUniqueIdentifiers(identifier: unknown): identifier is UniqueIdentifiers {
    const { type, ticker } = identifier as UniqueIdentifiers;

    return type in PermissionGroupType && typeof ticker === 'string';
  }

  /**
   * group permission type
   */
  public type: PermissionGroupType;
  public ticker: string;

  /**
   * @hidden
   */
  public constructor(identifiers: UniqueIdentifiers, context: Context) {
    super(identifiers, context);

    const { type, ticker } = identifiers;

    this.type = type;
    this.ticker = ticker;
  }

  /**
   * Retrieve the Permissions associated with this Permission Group
   */
  public async getPermissions(): Promise<GroupPermissions> {
    const { type } = this;
    let transactions;

    switch (type) {
      case PermissionGroupType.ExceptMeta:
        transactions = { values: [ModuleName.ExternalAgents], type: PermissionType.Exclude };
        break;
      case PermissionGroupType.PolymeshV1Caa:
        transactions = {
          values: [
            ModuleName.CorporateAction,
            ModuleName.CorporateBallot,
            ModuleName.CapitalDistribution,
          ],
          type: PermissionType.Include,
        };
        break;
      case PermissionGroupType.PolymeshV1Pia:
        transactions = {
          values: [
            TxTags.asset.Issue,
            TxTags.asset.Redeem,
            TxTags.asset.ControllerTransfer,
            ModuleName.Sto,
          ],
          exceptions: [TxTags.sto.Invest],
          type: PermissionType.Include,
        };
        break;
      default:
        transactions = null;
        break;
    }

    return {
      transactions,
      transactionGroups: transactions ? transactionPermissionsToTxGroups(transactions) : [],
    };
  }

  /**
   * Return the KnownPermissionGroup's static data
   */
  public toJson(): HumanReadable {
    const { type, ticker } = this;

    return toHumanReadable({
      type,
      ticker,
    });
  }
}

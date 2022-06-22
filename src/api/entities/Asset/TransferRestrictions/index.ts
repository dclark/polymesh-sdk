import { Asset, Context, Namespace } from '~/internal';

import { ClaimCount } from './ClaimCount';
import { ClaimOwnership } from './ClaimOwnership';
import { Count } from './Count';
import { Percentage } from './Percentage';

/**
 * Handles all Asset Transfer Restrictions related functionality
 */
export class TransferRestrictions extends Namespace<Asset> {
  public count: Count;
  public percentage: Percentage;
  public claimCount: ClaimCount;
  public claimOwnership: ClaimOwnership;

  /**
   * @hidden
   */
  constructor(parent: Asset, context: Context) {
    super(parent, context);

    this.count = new Count(parent, context);
    this.percentage = new Percentage(parent, context);
    this.claimCount = new ClaimCount(parent, context);
    this.claimOwnership = new ClaimOwnership(parent, context);
  }
}

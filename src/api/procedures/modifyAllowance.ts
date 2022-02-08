import BigNumber from 'bignumber.js';
import { RelayerTx, TxTags } from 'polymesh-types/types';

import { PolymeshError, Procedure, Subsidy } from '~/internal';
import { AllowanceOperation, ErrorCode } from '~/types';
import { ProcedureAuthorization } from '~/types/internal';
import { bigNumberToBalance, stringToAccountId } from '~/utils/conversion';

interface IncreaseAllowanceParams {
  /**
   * amount of POLYX to be increased
   */
  allowance: BigNumber;
  operation: AllowanceOperation.Increase;
}

interface DecreaseAllowanceParams {
  /**
   * amount of POLYX to be decreased
   */
  allowance: BigNumber;
  operation: AllowanceOperation.Decrease;
}

interface SetAllowanceParams {
  /**
   * amount of POLYX to be set
   */
  allowance: BigNumber;
  operation: AllowanceOperation.Set;
}

export type ModifyAllowanceParams = (
  | IncreaseAllowanceParams
  | DecreaseAllowanceParams
  | SetAllowanceParams
) & {
  subsidy: Subsidy;
};

/**
 * @hidden
 */
export async function prepareModifyAllowance(
  this: Procedure<ModifyAllowanceParams, void>,
  args: ModifyAllowanceParams
): Promise<void> {
  const {
    context: {
      polymeshApi: { tx },
    },
    context,
  } = this;

  const {
    subsidy: {
      beneficiary: { address: beneficiaryAddress },
    },
    subsidy,
    allowance,
    operation,
  } = args;

  const [exists, currentAllowance] = await Promise.all([subsidy.exists(), subsidy.getAllowance()]);

  if (!exists) {
    throw new PolymeshError({
      code: ErrorCode.DataUnavailable,
      message: 'The Subsidy no longer exists',
    });
  }

  const rawAllowance = bigNumberToBalance(allowance, context);

  const rawBeneficiaryAccount = stringToAccountId(beneficiaryAddress, context);

  let transaction = tx.relayer.increasePolyxLimit;

  if (operation === AllowanceOperation.Set) {
    if (currentAllowance.isEqualTo(allowance)) {
      throw new PolymeshError({
        code: ErrorCode.NoDataChange,
        message: 'Amount of allowance to set is equal to the current allowance',
      });
    }

    transaction = tx.relayer.updatePolyxLimit;
  }

  if (operation === AllowanceOperation.Decrease) {
    if (currentAllowance.lt(allowance)) {
      throw new PolymeshError({
        code: ErrorCode.NoDataChange,
        message: 'Amount of allowance to decrease cannot be less than the current allowance',
      });
    }

    transaction = tx.relayer.decreasePolyxLimit;
  }

  this.addTransaction({
    transaction,
    args: [rawBeneficiaryAccount, rawAllowance],
  });
}

/**
 * @hidden
 *
 * To modify the allowance for a Subsidy, the caller should be the subsidizer
 */
export async function getAuthorization(
  this: Procedure<ModifyAllowanceParams, void>,
  args: ModifyAllowanceParams
): Promise<ProcedureAuthorization> {
  const { context } = this;
  const {
    subsidy: { subsidizer },
    operation,
  } = args;

  const currentAccount = await context.getCurrentAccount();

  const hasRoles = subsidizer.isEqual(currentAccount);

  const transactionMap = new Map<AllowanceOperation, RelayerTx>([
    [AllowanceOperation.Increase, TxTags.relayer.IncreasePolyxLimit],
    [AllowanceOperation.Decrease, TxTags.relayer.DecreasePolyxLimit],
    [AllowanceOperation.Set, TxTags.relayer.UpdatePolyxLimit],
  ]);

  return {
    roles: hasRoles || 'Only the subsidizer is allowed to modify the allowance of a Subsidy',
    permissions: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transactions: [transactionMap.get(operation)!],
    },
  };
}

/**
 * @hidden
 */
export const modifyAllowance = (): Procedure<ModifyAllowanceParams, void> =>
  new Procedure(prepareModifyAllowance, getAuthorization);

import { u64 } from '@polkadot/types';
import BigNumber from 'bignumber.js';
import P from 'bluebird';
import { AffirmationStatus as MeshAffirmationStatus, PortfolioId } from 'polymesh-types/types';

import { assertInstructionValid } from '~/api/procedures/utils';
import { Instruction, PolymeshError, Procedure } from '~/internal';
import { AffirmationStatus, ErrorCode } from '~/types';
import { InstructionAffirmationOperation, PolymeshTx } from '~/types/internal';
import { tuple } from '~/types/utils';
import {
  meshAffirmationStatusToAffirmationStatus,
  numberToU64,
  portfolioIdToMeshPortfolioId,
  portfolioToPortfolioId,
} from '~/utils/conversion';

export interface ModifyInstructionAffirmationParams {
  id: BigNumber;
  operation: InstructionAffirmationOperation;
}

/**
 * @hidden
 */
export async function prepareModifyInstructionAffirmation(
  this: Procedure<ModifyInstructionAffirmationParams, Instruction>,
  args: ModifyInstructionAffirmationParams
): Promise<Instruction> {
  const {
    context: {
      polymeshApi: {
        tx: { settlement: settlementTx },
        query: { settlement },
      },
    },
    context,
  } = this;

  const { operation, id } = args;

  const instruction = new Instruction({ id }, context);

  await assertInstructionValid(instruction, context);

  const legs = await instruction.getLegs();

  const rawInstructionId = numberToU64(id, context);
  const rawPortfolioIds: PortfolioId[] = [];

  const excludeCriteria: AffirmationStatus[] = [];
  let errorMessage: string;
  let transaction: PolymeshTx<[u64, PortfolioId[]]>;

  switch (operation) {
    case InstructionAffirmationOperation.Affirm: {
      excludeCriteria.push(AffirmationStatus.Affirmed);
      errorMessage = 'The Instruction is already affirmed';
      transaction = settlementTx.affirmInstruction;

      break;
    }
    case InstructionAffirmationOperation.Withdraw: {
      excludeCriteria.push(AffirmationStatus.Pending, AffirmationStatus.Rejected);
      errorMessage = 'The instruction is not affirmed';
      transaction = settlementTx.withdrawAffirmation;

      break;
    }
    case InstructionAffirmationOperation.Reject: {
      excludeCriteria.push(AffirmationStatus.Rejected);
      errorMessage = 'The Instruction cannot be rejected';
      transaction = settlementTx.rejectInstruction;

      break;
    }
  }

  await Promise.all([
    P.map(legs, async ({ from, to }) => {
      const fromId = portfolioToPortfolioId(from);
      const toId = portfolioToPortfolioId(to);

      const [fromIsCustodied, toIsCustodied] = await Promise.all([
        from.isCustodiedBy(),
        to.isCustodiedBy(),
      ]);

      if (fromIsCustodied) {
        rawPortfolioIds.push(portfolioIdToMeshPortfolioId(fromId, context));
      }

      if (toIsCustodied) {
        rawPortfolioIds.push(portfolioIdToMeshPortfolioId(toId, context));
      }
    }),
  ]);

  const multiArgs = rawPortfolioIds.map(portfolioId => tuple(portfolioId, rawInstructionId));

  const rawAffirmationStatuses = await settlement.userAffirmations.multi<MeshAffirmationStatus>(
    multiArgs
  );

  const affirmationStatuses = rawAffirmationStatuses.map(meshAffirmationStatusToAffirmationStatus);

  const validPortfolioIds = rawPortfolioIds.filter(
    (_, index) => !excludeCriteria.includes(affirmationStatuses[index])
  );

  if (!validPortfolioIds.length) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: errorMessage,
    });
  }

  this.addTransaction(transaction, {}, rawInstructionId, validPortfolioIds);

  return instruction;
}

/**
 * @hidden
 */
export const modifyInstructionAffirmation = new Procedure(prepareModifyInstructionAffirmation);

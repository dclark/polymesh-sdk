[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / TransactionQueueStatus

# Enumeration: TransactionQueueStatus

[types](../modules/types.md).TransactionQueueStatus

## Table of contents

### Enumeration Members

- [Failed](types.TransactionQueueStatus.md#failed)
- [Idle](types.TransactionQueueStatus.md#idle)
- [Running](types.TransactionQueueStatus.md#running)
- [Succeeded](types.TransactionQueueStatus.md#succeeded)

## Enumeration Members

### Failed

• **Failed**

a critical transaction's execution failed.
This might mean the transaction was rejected,
failed due to a revert or never entered a block

#### Defined in

[types/index.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L81)

___

### Idle

• **Idle**

the queue is prepped to run

#### Defined in

[types/index.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L71)

___

### Running

• **Running**

transactions in the queue are being executed

#### Defined in

[types/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L75)

___

### Succeeded

• **Succeeded**

the queue finished running all of its transactions. Non-critical transactions
might still have failed

#### Defined in

[types/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L86)

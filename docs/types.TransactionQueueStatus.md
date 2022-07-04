# Enumeration: TransactionQueueStatus

[types](../wiki/types).TransactionQueueStatus

## Table of contents

### Enumeration Members

- [Failed](../wiki/types.TransactionQueueStatus#failed)
- [Idle](../wiki/types.TransactionQueueStatus#idle)
- [Running](../wiki/types.TransactionQueueStatus#running)
- [Succeeded](../wiki/types.TransactionQueueStatus#succeeded)

## Enumeration Members

### Failed

• **Failed**

a critical transaction's execution failed.
This might mean the transaction was rejected,
failed due to a revert or never entered a block

#### Defined in

[types/index.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L79)

___

### Idle

• **Idle**

the queue is prepped to run

#### Defined in

[types/index.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L69)

___

### Running

• **Running**

transactions in the queue are being executed

#### Defined in

[types/index.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L73)

___

### Succeeded

• **Succeeded**

the queue finished running all of its transactions. Non-critical transactions
might still have failed

#### Defined in

[types/index.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L84)

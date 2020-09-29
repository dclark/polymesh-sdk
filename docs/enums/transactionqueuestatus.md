# TransactionQueueStatus

## Index

### Enumeration members

* [Failed](transactionqueuestatus.md#failed)
* [Idle](transactionqueuestatus.md#idle)
* [Running](transactionqueuestatus.md#running)
* [Succeeded](transactionqueuestatus.md#succeeded)

## Enumeration members

### Failed

• **Failed**: = "Failed"

_Defined in_ [_src/types/index.ts:55_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/types/index.ts#L55)

a critical transaction's execution failed. This might mean the transaction was rejected, failed due to a revert or never entered a block

### Idle

• **Idle**: = "Idle"

_Defined in_ [_src/types/index.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/types/index.ts#L45)

the queue is prepped to run

### Running

• **Running**: = "Running"

_Defined in_ [_src/types/index.ts:49_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/types/index.ts#L49)

transactions in the queue are being executed

### Succeeded

• **Succeeded**: = "Succeeded"

_Defined in_ [_src/types/index.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/types/index.ts#L60)

the queue finished running all of its transactions. Non-critical transactions might still have failed


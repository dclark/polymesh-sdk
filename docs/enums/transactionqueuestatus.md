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

_Defined in_ [_src/types/index.ts:69_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L69)

a critical transaction's execution failed. This might mean the transaction was rejected, failed due to a revert or never entered a block

### Idle

• **Idle**: = "Idle"

_Defined in_ [_src/types/index.ts:59_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L59)

the queue is prepped to run

### Running

• **Running**: = "Running"

_Defined in_ [_src/types/index.ts:63_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L63)

transactions in the queue are being executed

### Succeeded

• **Succeeded**: = "Succeeded"

_Defined in_ [_src/types/index.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L74)

the queue finished running all of its transactions. Non-critical transactions might still have failed


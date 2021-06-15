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

_Defined in_ [_src/types/index.ts:73_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L73)

a critical transaction's execution failed. This might mean the transaction was rejected, failed due to a revert or never entered a block

### Idle

• **Idle**: = "Idle"

_Defined in_ [_src/types/index.ts:63_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L63)

the queue is prepped to run

### Running

• **Running**: = "Running"

_Defined in_ [_src/types/index.ts:67_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L67)

transactions in the queue are being executed

### Succeeded

• **Succeeded**: = "Succeeded"

_Defined in_ [_src/types/index.ts:78_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L78)

the queue finished running all of its transactions. Non-critical transactions might still have failed


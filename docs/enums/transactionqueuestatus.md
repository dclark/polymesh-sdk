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

_Defined in_ [_src/types/index.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L74)

a critical transaction's execution failed. This might mean the transaction was rejected, failed due to a revert or never entered a block

### Idle

• **Idle**: = "Idle"

_Defined in_ [_src/types/index.ts:64_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L64)

the queue is prepped to run

### Running

• **Running**: = "Running"

_Defined in_ [_src/types/index.ts:68_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L68)

transactions in the queue are being executed

### Succeeded

• **Succeeded**: = "Succeeded"

_Defined in_ [_src/types/index.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L79)

the queue finished running all of its transactions. Non-critical transactions might still have failed


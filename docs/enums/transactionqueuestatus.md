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

_Defined in_ [_src/types/index.ts:67_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L67)

a critical transaction's execution failed. This might mean the transaction was rejected, failed due to a revert or never entered a block

### Idle

• **Idle**: = "Idle"

_Defined in_ [_src/types/index.ts:57_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L57)

the queue is prepped to run

### Running

• **Running**: = "Running"

_Defined in_ [_src/types/index.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L61)

transactions in the queue are being executed

### Succeeded

• **Succeeded**: = "Succeeded"

_Defined in_ [_src/types/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L72)

the queue finished running all of its transactions. Non-critical transactions might still have failed


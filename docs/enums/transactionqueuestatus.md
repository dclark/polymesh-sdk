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

_Defined in_ [_src/types/index.ts:76_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L76)

a critical transaction's execution failed. This might mean the transaction was rejected, failed due to a revert or never entered a block

### Idle

• **Idle**: = "Idle"

_Defined in_ [_src/types/index.ts:66_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L66)

the queue is prepped to run

### Running

• **Running**: = "Running"

_Defined in_ [_src/types/index.ts:70_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L70)

transactions in the queue are being executed

### Succeeded

• **Succeeded**: = "Succeeded"

_Defined in_ [_src/types/index.ts:81_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L81)

the queue finished running all of its transactions. Non-critical transactions might still have failed


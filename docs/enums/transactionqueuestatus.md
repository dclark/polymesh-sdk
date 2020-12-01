# Enumeration: TransactionQueueStatus

## Index

### Enumeration members

* [Failed](transactionqueuestatus.md#failed)
* [Idle](transactionqueuestatus.md#idle)
* [Running](transactionqueuestatus.md#running)
* [Succeeded](transactionqueuestatus.md#succeeded)

## Enumeration members

###  Failed

• **Failed**: = "Failed"

*Defined in [src/types/index.ts:67](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L67)*

a critical transaction's execution failed.
This might mean the transaction was rejected,
failed due to a revert or never entered a block

___

###  Idle

• **Idle**: = "Idle"

*Defined in [src/types/index.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L57)*

the queue is prepped to run

___

###  Running

• **Running**: = "Running"

*Defined in [src/types/index.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L61)*

transactions in the queue are being executed

___

###  Succeeded

• **Succeeded**: = "Succeeded"

*Defined in [src/types/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L72)*

the queue finished running all of its transactions. Non-critical transactions
might still have failed

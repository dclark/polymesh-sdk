# TransactionStatus

## Index

### Enumeration members

* [Aborted](transactionstatus.md#aborted)
* [Failed](transactionstatus.md#failed)
* [Idle](transactionstatus.md#idle)
* [Rejected](transactionstatus.md#rejected)
* [Running](transactionstatus.md#running)
* [Succeeded](transactionstatus.md#succeeded)
* [Unapproved](transactionstatus.md#unapproved)

## Enumeration members

### Aborted

• **Aborted**: = "Aborted"

_Defined in_ [_src/types/index.ts:59_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L59)

the transaction couldn't be broadcast. It was either dropped, usurped or invalidated see [https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs\#L58-L110](https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110)

### Failed

• **Failed**: = "Failed"

_Defined in_ [_src/types/index.ts:54_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L54)

the transaction's execution failed due to a revert

### Idle

• **Idle**: = "Idle"

_Defined in_ [_src/types/index.ts:34_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L34)

the transaction is prepped to run

### Rejected

• **Rejected**: = "Rejected"

_Defined in_ [_src/types/index.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L46)

the transaction was rejected by the signer

### Running

• **Running**: = "Running"

_Defined in_ [_src/types/index.ts:42_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L42)

the transaction is being executed

### Succeeded

• **Succeeded**: = "Succeeded"

_Defined in_ [_src/types/index.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L50)

the transaction was run successfully

### Unapproved

• **Unapproved**: = "Unapproved"

_Defined in_ [_src/types/index.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L38)

the transaction is waiting for the user's signature


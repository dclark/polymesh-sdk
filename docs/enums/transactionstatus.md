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

_Defined in_ [_src/types/index.ts:56_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L56)

the transaction couldn't be broadcast. It was either dropped, usurped or invalidated see [https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs\#L58-L110](https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110)

### Failed

• **Failed**: = "Failed"

_Defined in_ [_src/types/index.ts:51_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L51)

the transaction's execution failed due to a revert

### Idle

• **Idle**: = "Idle"

_Defined in_ [_src/types/index.ts:31_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L31)

the transaction is prepped to run

### Rejected

• **Rejected**: = "Rejected"

_Defined in_ [_src/types/index.ts:43_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L43)

the transaction was rejected by the signer

### Running

• **Running**: = "Running"

_Defined in_ [_src/types/index.ts:39_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L39)

the transaction is being executed

### Succeeded

• **Succeeded**: = "Succeeded"

_Defined in_ [_src/types/index.ts:47_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L47)

the transaction was run successfully

### Unapproved

• **Unapproved**: = "Unapproved"

_Defined in_ [_src/types/index.ts:35_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L35)

the transaction is waiting for the user's signature


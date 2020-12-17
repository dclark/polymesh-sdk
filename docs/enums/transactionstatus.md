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

_Defined in_ [_src/types/index.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L50)

the transaction couldn't be broadcast. It was either dropped, usurped or invalidated see [https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs\#L58-L110](https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110)

### Failed

• **Failed**: = "Failed"

_Defined in_ [_src/types/index.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L45)

the transaction's execution failed due to a revert

### Idle

• **Idle**: = "Idle"

_Defined in_ [_src/types/index.ts:25_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L25)

the transaction is prepped to run

### Rejected

• **Rejected**: = "Rejected"

_Defined in_ [_src/types/index.ts:37_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L37)

the transaction was rejected by the signer

### Running

• **Running**: = "Running"

_Defined in_ [_src/types/index.ts:33_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L33)

the transaction is being executed

### Succeeded

• **Succeeded**: = "Succeeded"

_Defined in_ [_src/types/index.ts:41_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L41)

the transaction was run successfully

### Unapproved

• **Unapproved**: = "Unapproved"

_Defined in_ [_src/types/index.ts:29_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L29)

the transaction is waiting for the user's signature


[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / TransactionStatus

# Enumeration: TransactionStatus

[types](../modules/types.md).TransactionStatus

## Table of contents

### Enumeration Members

- [Aborted](types.TransactionStatus.md#aborted)
- [Failed](types.TransactionStatus.md#failed)
- [Idle](types.TransactionStatus.md#idle)
- [Rejected](types.TransactionStatus.md#rejected)
- [Running](types.TransactionStatus.md#running)
- [Succeeded](types.TransactionStatus.md#succeeded)
- [Unapproved](types.TransactionStatus.md#unapproved)

## Enumeration Members

### Aborted

• **Aborted**

the transaction couldn't be broadcast. It was either dropped, usurped or invalidated
see https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110

#### Defined in

[types/index.ts:64](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L64)

___

### Failed

• **Failed**

the transaction's execution failed due to a revert

#### Defined in

[types/index.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L59)

___

### Idle

• **Idle**

the transaction is prepped to run

#### Defined in

[types/index.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L39)

___

### Rejected

• **Rejected**

the transaction was rejected by the signer

#### Defined in

[types/index.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L51)

___

### Running

• **Running**

the transaction is being executed

#### Defined in

[types/index.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L47)

___

### Succeeded

• **Succeeded**

the transaction was run successfully

#### Defined in

[types/index.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L55)

___

### Unapproved

• **Unapproved**

the transaction is waiting for the user's signature

#### Defined in

[types/index.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L43)

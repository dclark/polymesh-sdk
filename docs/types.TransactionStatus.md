# Enumeration: TransactionStatus

[types](../wiki/types).TransactionStatus

## Table of contents

### Enumeration Members

- [Aborted](../wiki/types.TransactionStatus#aborted)
- [Failed](../wiki/types.TransactionStatus#failed)
- [Idle](../wiki/types.TransactionStatus#idle)
- [Rejected](../wiki/types.TransactionStatus#rejected)
- [Running](../wiki/types.TransactionStatus#running)
- [Succeeded](../wiki/types.TransactionStatus#succeeded)
- [Unapproved](../wiki/types.TransactionStatus#unapproved)

## Enumeration Members

### Aborted

• **Aborted**

the transaction couldn't be broadcast. It was either dropped, usurped or invalidated
see https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110

#### Defined in

[types/index.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L62)

___

### Failed

• **Failed**

the transaction's execution failed due to a revert

#### Defined in

[types/index.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L57)

___

### Idle

• **Idle**

the transaction is prepped to run

#### Defined in

[types/index.ts:37](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L37)

___

### Rejected

• **Rejected**

the transaction was rejected by the signer

#### Defined in

[types/index.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L49)

___

### Running

• **Running**

the transaction is being executed

#### Defined in

[types/index.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L45)

___

### Succeeded

• **Succeeded**

the transaction was run successfully

#### Defined in

[types/index.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L53)

___

### Unapproved

• **Unapproved**

the transaction is waiting for the user's signature

#### Defined in

[types/index.ts:41](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L41)

# Interface: ProcedureMethod ‹**MethodArgs, ProcedureReturnValue, ReturnValue**›

## Type parameters

▪ **MethodArgs**

▪ **ProcedureReturnValue**

▪ **ReturnValue**

## Hierarchy

* **ProcedureMethod**

## Callable

▸ (`args`: MethodArgs, `opts?`: [ProcedureOpts](procedureopts.md)): *Promise‹[TransactionQueue](../classes/transactionqueue.md)‹ProcedureReturnValue, ReturnValue››*

*Defined in [src/types/index.ts:1040](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L1040)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | MethodArgs |
`opts?` | [ProcedureOpts](procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](../classes/transactionqueue.md)‹ProcedureReturnValue, ReturnValue››*

## Index

### Properties

* [checkAuthorization](proceduremethod.md#checkauthorization)

## Properties

###  checkAuthorization

• **checkAuthorization**: *function*

*Defined in [src/types/index.ts:1044](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L1044)*

#### Type declaration:

▸ (`args`: MethodArgs, `opts?`: [ProcedureOpts](procedureopts.md)): *Promise‹[ProcedureAuthorizationStatus](procedureauthorizationstatus.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`args` | MethodArgs |
`opts?` | [ProcedureOpts](procedureopts.md) |

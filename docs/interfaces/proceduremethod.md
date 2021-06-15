# Interface: ProcedureMethod ‹**MethodArgs, ProcedureReturnValue, ReturnValue**›

## Type parameters

▪ **MethodArgs**

▪ **ProcedureReturnValue**

▪ **ReturnValue**

## Hierarchy

* **ProcedureMethod**

## Callable

▸ (`args`: MethodArgs): *Promise‹[TransactionQueue](../classes/transactionqueue.md)‹ProcedureReturnValue, ReturnValue››*

*Defined in [src/types/index.ts:973](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L973)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | MethodArgs |

**Returns:** *Promise‹[TransactionQueue](../classes/transactionqueue.md)‹ProcedureReturnValue, ReturnValue››*

## Index

### Properties

* [checkAuthorization](proceduremethod.md#checkauthorization)

## Properties

###  checkAuthorization

• **checkAuthorization**: *function*

*Defined in [src/types/index.ts:975](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L975)*

#### Type declaration:

▸ (`args`: MethodArgs): *Promise‹[ProcedureAuthorizationStatus](procedureauthorizationstatus.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`args` | MethodArgs |

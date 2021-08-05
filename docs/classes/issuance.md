# Class: Issuance

Handles all Security Token Issuance related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Issuance**

## Index

### Properties

* [context](issuance.md#protected-context)
* [parent](issuance.md#protected-parent)

### Methods

* [issue](issuance.md#issue)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L9)*

## Methods

###  issue

▸ **issue**(`args`: object, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Issuance.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Issuance.ts#L38)*

Issue a certain amount of tokens to the primary issuance agent

**`note`** required role:
  - Security Token Primary Issuance Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `issue.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`amount` | BigNumber | amount of tokens to be issued to primary issuance agent  |

▪`Optional`  **opts**: *[ProcedureOpts](../interfaces/procedureopts.md)*

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

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

*Defined in [src/api/entities/Namespace.ts:12](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L12)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L10)*

## Methods

###  issue

▸ **issue**(`args`: object): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Issuance.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Issuance.ts#L16)*

Issue a certain amount of tokens to the primary issuance agent

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`amount` | BigNumber | amount of tokens to be issued to primary issuance agent  |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

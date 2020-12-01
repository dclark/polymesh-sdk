# Issuance

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

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:12_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L12)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:10_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L10)

## Methods

### issue

▸ **issue**\(`args`: object\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Issuance.ts:16_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Issuance.ts#L16)

Issue a certain amount of tokens to the primary issuance agent

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `amount` | BigNumber | amount of tokens to be issued to primary issuance agent |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_


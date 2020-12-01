# Requirements

Handles all Security Token Compliance Requirements related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Requirements**

## Index

### Properties

* [context](requirements.md#protected-context)
* [parent](requirements.md#protected-parent)

### Methods

* [arePaused](requirements.md#arepaused)
* [checkSettle](requirements.md#checksettle)
* [get](requirements.md#get)
* [pause](requirements.md#pause)
* [reset](requirements.md#reset)
* [set](requirements.md#set)
* [unpause](requirements.md#unpause)

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

### arePaused

▸ **arePaused**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:183_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L183)

Check whether asset compliance requirements are paused or not

**Returns:** _Promise‹boolean›_

### checkSettle

▸ **checkSettle**\(`args`: object\): _Promise‹_[_Compliance_](compliance.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:149_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L149)

Check whether the sender and receiver Identities in a transfer comply with all the requirements of this asset

**`note`** this does not take balances into account

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `from?` | string \| [Identity](identity.md) | sender Identity \(optional, defaults to the current Identity\) |
| `to` | string \| [Identity](identity.md) | receiver Identity |

**Returns:** _Promise‹_[_Compliance_](compliance.md)_›_

### get

▸ **get**\(\): _Promise‹_[_Requirement_](../interfaces/requirement.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:51_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L51)

Retrieve all of the Security Token's requirements

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Requirement_](../interfaces/requirement.md)_\[\]›_

▸ **get**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:52_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L52)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### pause

▸ **pause**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:122_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L122)

Pause all the Security Token's requirements. This means that all transfers will be allowed until requirements are unpaused

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### reset

▸ **reset**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:111_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L111)

Detele all the current requirements for the Security Token.

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### set

▸ **set**\(`args`: [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L38)

Configure asset compliance requirements for the Security Token. This operation will replace all existing requirements with a new requirement set

This requires two transactions

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`. For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### unpause

▸ **unpause**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:133_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L133)

Un-pause all the Security Token's current requirements

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_


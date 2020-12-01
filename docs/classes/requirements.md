# Class: Requirements

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

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:12](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L12)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L10)*

## Methods

###  arePaused

▸ **arePaused**(): *Promise‹boolean›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L183)*

Check whether asset compliance requirements are paused or not

**Returns:** *Promise‹boolean›*

___

###  checkSettle

▸ **checkSettle**(`args`: object): *Promise‹[Compliance](compliance.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:149](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L149)*

Check whether the sender and receiver Identities in a transfer comply with all the requirements of this asset

**`note`** this does not take balances into account

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`from?` | string &#124; [Identity](identity.md) | sender Identity (optional, defaults to the current Identity) |
`to` | string &#124; [Identity](identity.md) | receiver Identity  |

**Returns:** *Promise‹[Compliance](compliance.md)›*

___

###  get

▸ **get**(): *Promise‹[Requirement](../interfaces/requirement.md)[]›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L51)*

Retrieve all of the Security Token's requirements

**`note`** can be subscribed to

**Returns:** *Promise‹[Requirement](../interfaces/requirement.md)[]›*

▸ **get**(`callback`: [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  pause

▸ **pause**(): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:122](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L122)*

Pause all the Security Token's requirements. This means that all transfers will be allowed until requirements are unpaused

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  reset

▸ **reset**(): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L111)*

Detele all the current requirements for the Security Token.

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  set

▸ **set**(`args`: [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L38)*

Configure asset compliance requirements for the Security Token. This operation will replace all existing requirements with a new requirement set

This requires two transactions

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`.
For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  unpause

▸ **unpause**(): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:133](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Compliance/Requirements.ts#L133)*

Un-pause all the Security Token's current requirements

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

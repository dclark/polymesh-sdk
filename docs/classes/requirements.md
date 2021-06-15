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

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)*

## Methods

###  arePaused

▸ **arePaused**(): *Promise‹boolean›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:225](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L225)*

Check whether asset compliance requirements are paused or not

**Returns:** *Promise‹boolean›*

___

###  checkSettle

▸ **checkSettle**(`args`: object): *Promise‹[Compliance](compliance.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:196](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L196)*

Check whether the sender and receiver Identities in a transfer comply with all the requirements of this asset

**`note`** this does not take balances into account

**`deprecated`** in favor of `settlements.canTransfer`

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

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L79)*

Retrieve all of the Security Token's requirements

**`note`** can be subscribed to

**Returns:** *Promise‹[Requirement](../interfaces/requirement.md)[]›*

▸ **get**(`callback`: [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:80](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  pause

▸ **pause**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:172](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L172)*

Pause all the Security Token's requirements. This means that all transfers will be allowed until requirements are unpaused

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `pause.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  reset

▸ **reset**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:159](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L159)*

Detele all the current requirements for the Security Token.

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `reset.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  set

▸ **set**(`args`: [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L70)*

Configure asset compliance requirements for the Security Token. This operation will replace all existing requirements with a new requirement set

This requires two transactions

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`.
For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `set.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  unpause

▸ **unpause**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:182](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L182)*

Un-pause all the Security Token's current requirements

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unpause.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

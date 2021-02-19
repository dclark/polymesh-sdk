# Requirements

Handles all Security Token Compliance Requirements related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Requirements**

## Index

### Properties

* [context](requirements.md#protected-context)
* [parent](requirements.md#protected-parent)
* [pause](requirements.md#pause)
* [reset](requirements.md#reset)
* [set](requirements.md#set)
* [unpause](requirements.md#unpause)

### Methods

* [arePaused](requirements.md#arepaused)
* [checkSettle](requirements.md#checksettle)
* [get](requirements.md#get)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L9)

### pause

• **pause**: _ProcedureMethod‹void,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:160_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L160)

Pause all the Security Token's requirements. This means that all transfers will be allowed until requirements are unpaused

**`note`** required role:

* Security Token Owner

### reset

• **reset**: _ProcedureMethod‹void,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:152_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L152)

Detele all the current requirements for the Security Token.

**`note`** required role:

* Security Token Owner

### set

• **set**: _ProcedureMethod‹_[_SetAssetRequirementsParams_](../interfaces/setassetrequirementsparams.md)_,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:68_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L68)

Configure asset compliance requirements for the Security Token. This operation will replace all existing requirements with a new requirement set

This requires two transactions

**`param`** array of array of conditions. For a transfer to be successful, it must comply with all the conditions of at least one of the arrays. In other words, higher level arrays are _OR_ between them, while conditions inside each array are _AND_ between them

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`. For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`note`** required role:

* Security Token Owner

### unpause

• **unpause**: _ProcedureMethod‹void,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:165_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L165)

Un-pause all the Security Token's current requirements

## Methods

### arePaused

▸ **arePaused**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:204_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L204)

Check whether asset compliance requirements are paused or not

**Returns:** _Promise‹boolean›_

### checkSettle

▸ **checkSettle**\(`args`: object\): _Promise‹_[_Compliance_](compliance.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:175_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L175)

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

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:75_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L75)

Retrieve all of the Security Token's requirements

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Requirement_](../interfaces/requirement.md)_\[\]›_

▸ **get**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:76_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/Requirements.ts#L76)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_


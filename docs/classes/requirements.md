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

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L9)

## Methods

### arePaused

▸ **arePaused**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:226_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Compliance/Requirements.ts#L226)

Check whether asset compliance requirements are paused or not

**Returns:** _Promise‹boolean›_

### checkSettle

▸ **checkSettle**\(`args`: object\): _Promise‹Compliance›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:197_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Compliance/Requirements.ts#L197)

Check whether the sender and receiver Identities in a transfer comply with all the requirements of this asset

**`note`** this does not take balances into account

**`deprecated`** in favor of `settlements.canTransfer`

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `from?` | string \| [Identity](identity.md) | sender Identity \(optional, defaults to the current Identity\) |
| `to` | string \| [Identity](identity.md) | receiver Identity |

**Returns:** _Promise‹Compliance›_

### get

▸ **get**\(\): _Promise‹_[_Requirement_](../interfaces/requirement.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:80_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Compliance/Requirements.ts#L80)

Retrieve all of the Security Token's requirements

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Requirement_](../interfaces/requirement.md)_\[\]›_

▸ **get**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:81_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Compliance/Requirements.ts#L81)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Requirement](../interfaces/requirement.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### pause

▸ **pause**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:173_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Compliance/Requirements.ts#L173)

Pause all the Security Token's requirements. This means that all transfers will be allowed until requirements are unpaused

**`note`** required role:

* Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `pause.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### reset

▸ **reset**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:160_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Compliance/Requirements.ts#L160)

Detele all the current requirements for the Security Token.

**`note`** required role:

* Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `reset.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### set

▸ **set**\(`args`: [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:71_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Compliance/Requirements.ts#L71)

Configure asset compliance requirements for the Security Token. This operation will replace all existing requirements with a new requirement set

This requires two transactions

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`. For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`note`** required role:

* Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `set.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### unpause

▸ **unpause**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Requirements.ts:183_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Compliance/Requirements.ts#L183)

Un-pause all the Security Token's current requirements

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unpause.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_


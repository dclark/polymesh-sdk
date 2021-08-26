# TransferRestrictionBase

Base class for managing Transfer Restrictions

## Type parameters

▪ **T**: [_TransferRestrictionType_](../enums/transferrestrictiontype.md)

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **TransferRestrictionBase**

  ↳ [Count](count.md)

  ↳ [Percentage](percentage.md)

## Index

### Properties

* [context](transferrestrictionbase.md#protected-context)
* [exemptedScopeIds](transferrestrictionbase.md#optional-exemptedscopeids)
* [parent](transferrestrictionbase.md#protected-parent)
* [type](transferrestrictionbase.md#protected-abstract-type)

### Methods

* [addRestriction](transferrestrictionbase.md#addrestriction)
* [get](transferrestrictionbase.md#get)
* [removeRestrictions](transferrestrictionbase.md#removerestrictions)
* [setRestrictions](transferrestrictionbase.md#setrestrictions)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L11)

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : _string\[\]_

_Defined in_ [_src/types/index.ts:973_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L973)

array of Scope IDs that are exempted from the Restriction

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L9)

### `Protected` `Abstract` type

• **type**: _T_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:56_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L56)

## Methods

### addRestriction

▸ **addRestriction**\(`args`: [AddRestrictionParams](../globals.md#addrestrictionparams)‹T›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:126_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L126)

Add a Transfer Restriction of the corresponding type to this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:

* Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addRestriction.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [AddRestrictionParams](../globals.md#addrestrictionparams)‹T› |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

### get

▸ **get**\(\): _Promise‹_[_GetReturnType_](../globals.md#getreturntype)_‹T››_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:167_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L167)

Retrieve all active Transfer Restrictions of the corresponding type

**`note`** there is a maximum number of restrictions allowed accross all types. The `availableSlots` property of the result represents how many more restrictions can be added before reaching that limit

**Returns:** _Promise‹_[_GetReturnType_](../globals.md#getreturntype)_‹T››_

### removeRestrictions

▸ **removeRestrictions**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:156_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L156)

Removes all Transfer Restrictions of the corresponding type from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:

* Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeRestrictions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

### setRestrictions

▸ **setRestrictions**\(`args`: [SetRestrictionsParams](../globals.md#setrestrictionsparams)‹T›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:141_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L141)

Sets all Transfer Restrictions of the corresponding type on this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:

* Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setRestrictions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetRestrictionsParams](../globals.md#setrestrictionsparams)‹T› |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_


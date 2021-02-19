# TransferRestrictionBase

Base class for managing Transfer Restrictions

## Type parameters

▪ **T**: _TransferRestrictionType_

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **TransferRestrictionBase**

  ↳ [CountTransferRestriction](../interfaces/counttransferrestriction.md)

  ↳ [PercentageTransferRestriction](../interfaces/percentagetransferrestriction.md)

## Index

### Properties

* [addRestriction](transferrestrictionbase.md#addrestriction)
* [context](transferrestrictionbase.md#protected-context)
* [exemptedScopeIds](transferrestrictionbase.md#optional-exemptedscopeids)
* [parent](transferrestrictionbase.md#protected-parent)
* [removeRestrictions](transferrestrictionbase.md#removerestrictions)
* [setRestrictions](transferrestrictionbase.md#setrestrictions)
* [type](transferrestrictionbase.md#protected-abstract-type)

### Methods

* [get](transferrestrictionbase.md#get)

## Properties

### addRestriction

• **addRestriction**: _ProcedureMethod‹_[_AddRestrictionParams_](../globals.md#addrestrictionparams)_‹T›, number›_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:112_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L112)

Add a Transfer Restriction of the corresponding type to this Security Token

**`param`** array of Scope IDs that are exempted from the Restriction

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:

* Security Token Owner

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L11)

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : _string\[\]_

_Defined in_ [_src/types/index.ts:723_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L723)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L9)

### removeRestrictions

• **removeRestrictions**: _ProcedureMethod‹void, number›_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:134_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L134)

Removes all Transfer Restrictions of the corresponding type from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:

* Security Token Owner

### setRestrictions

• **setRestrictions**: _ProcedureMethod‹_[_SetRestrictionsParams_](../globals.md#setrestrictionsparams)_‹T›, number›_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:124_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L124)

Sets all Transfer Restrictions of the corresponding type on this Security Token

**`param`** array of Transfer Restrictions with their corresponding exemptions \(if applicable\)

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:

* Security Token Owner

### `Protected` `Abstract` type

• **type**: _T_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:53_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L53)

## Methods

### get

▸ **get**\(\): _Promise‹_[_GetReturnType_](../globals.md#getreturntype)_‹T››_

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:143_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L143)

Retrieve all active Transfer Restrictions of the corresponding type

**`note`** there is a maximum number of restrictions allowed accross all types. The `availableSlots` property of the result represents how many more restrictions can be added before reaching that limit

**Returns:** _Promise‹_[_GetReturnType_](../globals.md#getreturntype)_‹T››_


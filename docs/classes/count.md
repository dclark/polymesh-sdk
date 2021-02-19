# Count

Handles all Count Transfer Restriction related functionality

## Hierarchy

* TransferRestrictionBase‹Count›

  ↳ **Count**

## Index

### Properties

* [addRestriction](count.md#addrestriction)
* [context](count.md#protected-context)
* [get](count.md#get)
* [parent](count.md#protected-parent)
* [removeRestrictions](count.md#removerestrictions)
* [setRestrictions](count.md#setrestrictions)
* [type](count.md#protected-type)

## Properties

### addRestriction

• **addRestriction**: _ProcedureMethod‹Omit‹_[_AddCountTransferRestrictionParams_](../globals.md#addcounttransferrestrictionparams)_, "type"›, number›_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_addRestriction_](transferrestrictionbase.md#addrestriction)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:24_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L24)

Add a Count Transfer Restriction to this Security Token

**`param`** limit on the amount of different \(unique\) investors that can hold this Security Token at once

**`param`** array of Scope IDs that are exempted from the Restriction

**`param`** array of Identities \(or DIDs\) that are exempted from the Restriction

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:

* Security Token Owner

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L11)

### get

• **get**: _function_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_get_](transferrestrictionbase.md#get)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:55_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L55)

Retrieve all active Count Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed accross all types. The `availableSlots` property of the result represents how many more restrictions can be added before reaching that limit

#### Type declaration:

▸ \(\): _Promise‹_[_ActiveTransferRestrictions_](../interfaces/activetransferrestrictions.md)_‹_[_CountTransferRestriction_](../interfaces/counttransferrestriction.md)_››_

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L9)

### removeRestrictions

• **removeRestrictions**: _ProcedureMethod‹void, number›_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_removeRestrictions_](transferrestrictionbase.md#removerestrictions)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L46)

Removes all Count Transfer Restrictions from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

### setRestrictions

• **setRestrictions**: _ProcedureMethod‹Omit‹_[_SetCountTransferRestrictionsParams_](../interfaces/setcounttransferrestrictionsparams.md)_, "type"›, number›_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_setRestrictions_](transferrestrictionbase.md#setrestrictions)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:36_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L36)

Sets all Count Transfer Restrictions on this Security Token

**`param`** array of Count Transfer Restrictions with their corresponding exemptions \(if applicable\)

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:

* Security Token Owner

### `Protected` type

• **type**: _Count_ = TransferRestrictionType.Count as const

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_type_](transferrestrictionbase.md#protected-abstract-type)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:10_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L10)


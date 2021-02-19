# Percentage

Handles all Percentage Transfer Restriction related functionality

## Hierarchy

* TransferRestrictionBase‹Percentage›

  ↳ **Percentage**

## Index

### Properties

* [addRestriction](percentage.md#addrestriction)
* [context](percentage.md#protected-context)
* [get](percentage.md#get)
* [parent](percentage.md#protected-parent)
* [removeRestrictions](percentage.md#removerestrictions)
* [setRestrictions](percentage.md#setrestrictions)
* [type](percentage.md#protected-type)

## Properties

### addRestriction

• **addRestriction**: _ProcedureMethod‹Omit‹_[_AddPercentageTransferRestrictionParams_](../globals.md#addpercentagetransferrestrictionparams)_, "type"›, number›_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_addRestriction_](transferrestrictionbase.md#addrestriction)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:27_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L27)

Add a Percentage Transfer Restriction to this Security Token

**`param`** limit on the proportion of the total supply of this Security Token that can be held by a single investor at once

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

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L61)

Retrieve all active Percentage Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed accross all types. The `availableSlots` property of the result represents how many more restrictions can be added before reaching that limit

#### Type declaration:

▸ \(\): _Promise‹_[_ActiveTransferRestrictions_](../interfaces/activetransferrestrictions.md)_‹_[_PercentageTransferRestriction_](../interfaces/percentagetransferrestriction.md)_››_

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L9)

### removeRestrictions

• **removeRestrictions**: _ProcedureMethod‹void, number›_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_removeRestrictions_](transferrestrictionbase.md#removerestrictions)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:52_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L52)

Removes all Percentage Transfer Restrictions from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

### setRestrictions

• **setRestrictions**: _ProcedureMethod‹Omit‹_[_SetPercentageTransferRestrictionsParams_](../interfaces/setpercentagetransferrestrictionsparams.md)_, "type"›, number›_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_setRestrictions_](transferrestrictionbase.md#setrestrictions)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:42_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L42)

Sets all Percentage Transfer Restrictions on this Security Token

**`param`** array of Percentage Transfer Restrictions with their corresponding exemptions \(if applicable\)

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:

* Security Token Owner

### `Protected` type

• **type**: _Percentage_ = TransferRestrictionType.Percentage as const

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_type_](transferrestrictionbase.md#protected-abstract-type)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:13_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L13)


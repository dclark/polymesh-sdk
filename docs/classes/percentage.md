# Percentage

Handles all Percentage Transfer Restriction related functionality

## Hierarchy

↳ [TransferRestrictionBase](transferrestrictionbase.md)‹[Percentage](../enums/transferrestrictiontype.md#percentage)›

↳ **Percentage**

## Index

### Properties

* [context](percentage.md#protected-context)
* [get](percentage.md#get)
* [parent](percentage.md#protected-parent)
* [type](percentage.md#protected-type)

### Methods

* [addRestriction](percentage.md#addrestriction)
* [removeRestrictions](percentage.md#removerestrictions)
* [setRestrictions](percentage.md#setrestrictions)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L11)

### get

• **get**: _function_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_get_](transferrestrictionbase.md#get)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:64_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L64)

Retrieve all active Percentage Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed accross all types. The `availableSlots` property of the result represents how many more restrictions can be added before reaching that limit

#### Type declaration:

▸ \(\): _Promise‹_[_ActiveTransferRestrictions_](../interfaces/activetransferrestrictions.md)_‹_[_PercentageTransferRestriction_](../interfaces/percentagetransferrestriction.md)_››_

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L9)

### `Protected` type

• **type**: [_Percentage_](../enums/transferrestrictiontype.md#percentage) = TransferRestrictionType.Percentage as const

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_type_](transferrestrictionbase.md#protected-abstract-type)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:19_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L19)

## Methods

### addRestriction

▸ **addRestriction**\(`args`: Omit‹[AddPercentageTransferRestrictionParams](../globals.md#addpercentagetransferrestrictionparams), "type"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_addRestriction_](transferrestrictionbase.md#addrestriction)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:29_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L29)

Add a Percentage Transfer Restriction to this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addRestriction.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Omit‹[AddPercentageTransferRestrictionParams](../globals.md#addpercentagetransferrestrictionparams), "type"› |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

### removeRestrictions

▸ **removeRestrictions**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_removeRestrictions_](transferrestrictionbase.md#removerestrictions)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:53_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L53)

Removes all Percentage Transfer Restrictions from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeRestrictions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

### setRestrictions

▸ **setRestrictions**\(`args`: Omit‹[SetPercentageTransferRestrictionsParams](../interfaces/setpercentagetransferrestrictionsparams.md), "type"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_setRestrictions_](transferrestrictionbase.md#setrestrictions)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:41_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L41)

Sets all Percentage Transfer Restrictions on this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setRestrictions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Omit‹[SetPercentageTransferRestrictionsParams](../interfaces/setpercentagetransferrestrictionsparams.md), "type"› |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_


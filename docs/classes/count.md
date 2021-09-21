# Count

Handles all Count Transfer Restriction related functionality

## Hierarchy

↳ [TransferRestrictionBase](transferrestrictionbase.md)‹[Count](../enums/transferrestrictiontype.md#count)›

↳ **Count**

## Index

### Properties

* [context](count.md#protected-context)
* [get](count.md#get)
* [parent](count.md#protected-parent)
* [type](count.md#protected-type)

### Methods

* [addRestriction](count.md#addrestriction)
* [removeRestrictions](count.md#removerestrictions)
* [setRestrictions](count.md#setrestrictions)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L11)

### get

• **get**: _function_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_get_](transferrestrictionbase.md#get)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L61)

Retrieve all active Count Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed accross all types. The `availableSlots` property of the result represents how many more restrictions can be added before reaching that limit

#### Type declaration:

▸ \(\): _Promise‹_[_ActiveTransferRestrictions_](../interfaces/activetransferrestrictions.md)_‹_[_CountTransferRestriction_](../interfaces/counttransferrestriction.md)_››_

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L9)

### `Protected` type

• **type**: [_Count_](../enums/transferrestrictiontype.md#count) = TransferRestrictionType.Count as const

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_type_](transferrestrictionbase.md#protected-abstract-type)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:16_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L16)

## Methods

### addRestriction

▸ **addRestriction**\(`args`: Omit‹[AddCountTransferRestrictionParams](../globals.md#addcounttransferrestrictionparams), "type"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_addRestriction_](transferrestrictionbase.md#addrestriction)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:26_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L26)

Add a Count Transfer Restriction to this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addRestriction.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Omit‹[AddCountTransferRestrictionParams](../globals.md#addcounttransferrestrictionparams), "type"› |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

### removeRestrictions

▸ **removeRestrictions**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_removeRestrictions_](transferrestrictionbase.md#removerestrictions)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L50)

Removes all Count Transfer Restrictions from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeRestrictions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

### setRestrictions

▸ **setRestrictions**\(`args`: Omit‹[SetCountTransferRestrictionsParams](../interfaces/setcounttransferrestrictionsparams.md), "type"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_

_Overrides_ [_TransferRestrictionBase_](transferrestrictionbase.md)_._[_setRestrictions_](transferrestrictionbase.md#setrestrictions)

_Defined in_ [_src/api/entities/SecurityToken/TransferRestrictions/Count.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L38)

Sets all Count Transfer Restrictions on this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setRestrictions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Omit‹[SetCountTransferRestrictionsParams](../interfaces/setcounttransferrestrictionsparams.md), "type"› |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹number››_


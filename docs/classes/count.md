# Class: Count

Handles all Count Transfer Restriction related functionality

## Hierarchy

* TransferRestrictionBase‹[Count](../enums/transferrestrictiontype.md#count)›

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

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)*

___

###  get

• **get**: *function*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[get](transferrestrictionbase.md#get)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L66)*

Retrieve all active Count Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed accross all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Type declaration:

▸ (): *Promise‹[ActiveTransferRestrictions](../interfaces/activetransferrestrictions.md)‹[CountTransferRestriction](../interfaces/counttransferrestriction.md)››*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)*

___

### `Protected` type

• **type**: *[Count](../enums/transferrestrictiontype.md#count)* = TransferRestrictionType.Count as const

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[type](transferrestrictionbase.md#protected-abstract-type)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L15)*

## Methods

###  addRestriction

▸ **addRestriction**(`args`: Omit‹[AddCountTransferRestrictionParams](../globals.md#addcounttransferrestrictionparams), "type"›): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[addRestriction](transferrestrictionbase.md#addrestriction)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L28)*

Add a Count Transfer Restriction to this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addRestriction.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[AddCountTransferRestrictionParams](../globals.md#addcounttransferrestrictionparams), "type"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

___

###  removeRestrictions

▸ **removeRestrictions**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[removeRestrictions](transferrestrictionbase.md#removerestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L55)*

Removes all Count Transfer Restrictions from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeRestrictions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

___

###  setRestrictions

▸ **setRestrictions**(`args`: Omit‹[SetCountTransferRestrictionsParams](../interfaces/setcounttransferrestrictionsparams.md), "type"›): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[setRestrictions](transferrestrictionbase.md#setrestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L43)*

Sets all Count Transfer Restrictions on this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setRestrictions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[SetCountTransferRestrictionsParams](../interfaces/setcounttransferrestrictionsparams.md), "type"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

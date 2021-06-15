# Class: Percentage

Handles all Percentage Transfer Restriction related functionality

## Hierarchy

* TransferRestrictionBase‹[Percentage](../enums/transferrestrictiontype.md#percentage)›

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

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)*

___

###  get

• **get**: *function*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[get](transferrestrictionbase.md#get)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L69)*

Retrieve all active Percentage Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed accross all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Type declaration:

▸ (): *Promise‹[ActiveTransferRestrictions](../interfaces/activetransferrestrictions.md)‹[PercentageTransferRestriction](../interfaces/percentagetransferrestriction.md)››*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)*

___

### `Protected` type

• **type**: *[Percentage](../enums/transferrestrictiontype.md#percentage)* = TransferRestrictionType.Percentage as const

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[type](transferrestrictionbase.md#protected-abstract-type)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L18)*

## Methods

###  addRestriction

▸ **addRestriction**(`args`: Omit‹[AddPercentageTransferRestrictionParams](../globals.md#addpercentagetransferrestrictionparams), "type"›): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[addRestriction](transferrestrictionbase.md#addrestriction)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L31)*

Add a Percentage Transfer Restriction to this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addRestriction.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[AddPercentageTransferRestrictionParams](../globals.md#addpercentagetransferrestrictionparams), "type"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

___

###  removeRestrictions

▸ **removeRestrictions**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[removeRestrictions](transferrestrictionbase.md#removerestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:58](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L58)*

Removes all Percentage Transfer Restrictions from this Security Token

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

▸ **setRestrictions**(`args`: Omit‹[SetPercentageTransferRestrictionsParams](../interfaces/setpercentagetransferrestrictionsparams.md), "type"›): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[setRestrictions](transferrestrictionbase.md#setrestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/TransferRestrictions/Percentage.ts#L46)*

Sets all Percentage Transfer Restrictions on this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setRestrictions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[SetPercentageTransferRestrictionsParams](../interfaces/setpercentagetransferrestrictionsparams.md), "type"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

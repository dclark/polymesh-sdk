# Class: Venue

Represents a Venue through which settlements are handled

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Venue**

## Index

### Properties

* [context](venue.md#protected-context)
* [id](venue.md#id)
* [uuid](venue.md#uuid)

### Methods

* [addInstruction](venue.md#addinstruction)
* [addInstructions](venue.md#addinstructions)
* [details](venue.md#details)
* [exists](venue.md#exists)
* [getPendingInstructions](venue.md#getpendinginstructions)
* [isEqual](venue.md#isequal)
* [modify](venue.md#modify)
* [generateUuid](venue.md#static-generateuuid)
* [unserialize](venue.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Venue/index.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L57)*

Identifier number of the venue

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)*

## Methods

###  addInstruction

▸ **addInstruction**(`args`: [AddInstructionParams](../interfaces/addinstructionparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[], [Instruction](instruction.md)››*

*Defined in [src/api/entities/Venue/index.ts:194](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L194)*

Creates a settlement Instruction in this Venue

**`note`** required role:
  - Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addInstruction.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddInstructionParams](../interfaces/addinstructionparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[], [Instruction](instruction.md)››*

___

###  addInstructions

▸ **addInstructions**(`args`: [AddInstructionsParams](../interfaces/addinstructionsparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[]››*

*Defined in [src/api/entities/Venue/index.ts:207](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L207)*

Creates a batch of settlement Instructions in this Venue

**`note`** required role:
  - Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addInstructions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddInstructionsParams](../interfaces/addinstructionsparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[]››*

___

###  details

▸ **details**(): *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

*Defined in [src/api/entities/Venue/index.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L110)*

Retrieve information specific to this venue

**Returns:** *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Defined in [src/api/entities/Venue/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L91)*

Retrieve whether the Venue exists

**Returns:** *Promise‹boolean›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/Venue/index.ts:144](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L144)*

Retrieve all pending Instructions in this Venue

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown› |

**Returns:** *boolean*

___

###  modify

▸ **modify**(`args`: [ModifyVenueParams](../globals.md#modifyvenueparams)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Venue/index.ts:220](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L220)*

Modify description and type

**`note`** required role:
  - Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modify.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyVenueParams](../globals.md#modifyvenueparams) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

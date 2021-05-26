# Class: Venue

Represents a Venue through which settlements are handled

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Venue**

## Index

### Properties

* [addInstruction](venue.md#addinstruction)
* [addInstructions](venue.md#addinstructions)
* [context](venue.md#protected-context)
* [id](venue.md#id)
* [modify](venue.md#modify)
* [uuid](venue.md#uuid)

### Methods

* [details](venue.md#details)
* [exists](venue.md#exists)
* [getPendingInstructions](venue.md#getpendinginstructions)
* [isEqual](venue.md#isequal)
* [generateUuid](venue.md#static-generateuuid)
* [unserialize](venue.md#static-unserialize)

## Properties

###  addInstruction

• **addInstruction**: *ProcedureMethod‹[AddInstructionParams](../interfaces/addinstructionparams.md), [Instruction](instruction.md)[], [Instruction](instruction.md)›*

*Defined in [src/api/entities/Venue/index.ts:196](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Venue/index.ts#L196)*

Creates a settlement Instruction in this Venue

**`param`** array of token movements (amount, from, to, token)

**`param`** date at which the trade was agreed upon (optional, for offchain trades)

**`param`** date at which the trade was executed (optional, for offchain trades)

**`param`** block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)

**`note`** required role:
  - Venue Owner

___

###  addInstructions

• **addInstructions**: *ProcedureMethod‹[AddInstructionsParams](../interfaces/addinstructionsparams.md), [Instruction](instruction.md)[]›*

*Defined in [src/api/entities/Venue/index.ts:210](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Venue/index.ts#L210)*

Creates a batch of settlement Instructions in this Venue

**`param`** array of Instructions

**`param`** array of token movements (amount, from, to, token)

**`param`** date at which the trade was agreed upon (optional, for offchain trades)

**`param`** date at which the trade was executed (optional, for offchain trades)

**`param`** block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)

**`note`** required role:
  - Venue Owner

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Venue/index.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Venue/index.ts#L57)*

Identifier number of the venue

___

###  modify

• **modify**: *ProcedureMethod‹[ModifyVenueParams](../globals.md#modifyvenueparams), void›*

*Defined in [src/api/entities/Venue/index.ts:218](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Venue/index.ts#L218)*

Modify description and type

**`note`** required role:
  - Venue Owner

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L46)*

## Methods

###  details

▸ **details**(): *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

*Defined in [src/api/entities/Venue/index.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Venue/index.ts#L110)*

Retrieve information specific to this venue

**Returns:** *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Defined in [src/api/entities/Venue/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Venue/index.ts#L91)*

Retrieve whether the Venue exists

**Returns:** *Promise‹boolean›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/Venue/index.ts:144](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Venue/index.ts#L144)*

Retrieve all pending Instructions in this Venue

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹object›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹object› |

**Returns:** *boolean*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

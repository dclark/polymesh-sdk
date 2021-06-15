# Venue

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

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/Venue/index.ts:57_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L57)

Identifier number of the venue

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### addInstruction

▸ **addInstruction**\(`args`: [AddInstructionParams](../interfaces/addinstructionparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_\[\],_ [_Instruction_](instruction.md)_››_

_Defined in_ [_src/api/entities/Venue/index.ts:194_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L194)

Creates a settlement Instruction in this Venue

**`note`** required role:

* Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addInstruction.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [AddInstructionParams](../interfaces/addinstructionparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_\[\],_ [_Instruction_](instruction.md)_››_

### addInstructions

▸ **addInstructions**\(`args`: [AddInstructionsParams](../interfaces/addinstructionsparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_\[\]››_

_Defined in_ [_src/api/entities/Venue/index.ts:207_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L207)

Creates a batch of settlement Instructions in this Venue

**`note`** required role:

* Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addInstructions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [AddInstructionsParams](../interfaces/addinstructionsparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_\[\]››_

### details

▸ **details**\(\): _Promise‹_[_VenueDetails_](../interfaces/venuedetails.md)_›_

_Defined in_ [_src/api/entities/Venue/index.ts:110_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L110)

Retrieve information specific to this venue

**Returns:** _Promise‹_[_VenueDetails_](../interfaces/venuedetails.md)_›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Venue/index.ts:91_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L91)

Retrieve whether the Venue exists

**Returns:** _Promise‹boolean›_

### getPendingInstructions

▸ **getPendingInstructions**\(\): _Promise‹_[_Instruction_](instruction.md)_\[\]›_

_Defined in_ [_src/api/entities/Venue/index.ts:144_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L144)

Retrieve all pending Instructions in this Venue

**Returns:** _Promise‹_[_Instruction_](instruction.md)_\[\]›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown›\): _boolean_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_isEqual_](checkpointschedule.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown› |

**Returns:** _boolean_

### modify

▸ **modify**\(`args`: [ModifyVenueParams](../globals.md#modifyvenueparams)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Venue/index.ts:220_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Venue/index.ts#L220)

Modify description and type

**`note`** required role:

* Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modify.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyVenueParams](../globals.md#modifyvenueparams) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_generateUuid_](checkpointschedule.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_unserialize_](checkpointschedule.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


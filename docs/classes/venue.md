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
* [details](venue.md#details)
* [getPendingInstructions](venue.md#getpendinginstructions)
* [generateUuid](venue.md#static-generateuuid)
* [unserialize](venue.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L48)

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/Venue/index.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Venue/index.ts#L45)

Identifier number of the venue

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L46)

## Methods

### addInstruction

▸ **addInstruction**\(`args`: [AddInstructionParams](../interfaces/addinstructionparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_››_

_Defined in_ [_src/api/entities/Venue/index.ts:119_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Venue/index.ts#L119)

Creates a settlement instruction in this Venue

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [AddInstructionParams](../interfaces/addinstructionparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_››_

### details

▸ **details**\(\): _Promise‹_[_VenueDetails_](../interfaces/venuedetails.md)_›_

_Defined in_ [_src/api/entities/Venue/index.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Venue/index.ts#L61)

Retrieve information specific to this venue

**Returns:** _Promise‹_[_VenueDetails_](../interfaces/venuedetails.md)_›_

### getPendingInstructions

▸ **getPendingInstructions**\(\): _Promise‹_[_Instruction_](instruction.md)_\[\]›_

_Defined in_ [_src/api/entities/Venue/index.ts:86_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Venue/index.ts#L86)

Retrieve all pending Instructions in this Venue

**Returns:** _Promise‹_[_Instruction_](instruction.md)_\[\]›_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


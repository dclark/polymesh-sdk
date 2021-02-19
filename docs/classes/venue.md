# Venue

Represents a Venue through which settlements are handled

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Venue**

## Index

### Properties

* [addInstruction](venue.md#addinstruction)
* [context](venue.md#protected-context)
* [id](venue.md#id)
* [uuid](venue.md#uuid)

### Methods

* [details](venue.md#details)
* [exists](venue.md#exists)
* [getPendingInstructions](venue.md#getpendinginstructions)
* [generateUuid](venue.md#static-generateuuid)
* [unserialize](venue.md#static-unserialize)

## Properties

### addInstruction

• **addInstruction**: _ProcedureMethod‹_[_AddInstructionParams_](../interfaces/addinstructionparams.md)_,_ [_Instruction_](instruction.md)_›_

_Defined in_ [_src/api/entities/Venue/index.ts:167_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Venue/index.ts#L167)

Creates a settlement Instruction in this Venue

**`param`** array of token movements \(amount, from, to, token\)

**`param`** date at which the trade was agreed upon \(optional, for offchain trades\)

**`param`** date at which the trade was executed \(optional, for offchain trades\)

**`param`** block at which the Instruction will be executed automatically \(optional, the Instruction will be executed when all participants have authorized it if not supplied\)

**`note`** required role:

* Venue Owner

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L48)

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/Venue/index.ts:47_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Venue/index.ts#L47)

Identifier number of the venue

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L46)

## Methods

### details

▸ **details**\(\): _Promise‹_[_VenueDetails_](../interfaces/venuedetails.md)_›_

_Defined in_ [_src/api/entities/Venue/index.ts:87_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Venue/index.ts#L87)

Retrieve information specific to this venue

**Returns:** _Promise‹_[_VenueDetails_](../interfaces/venuedetails.md)_›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Venue/index.ts:68_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Venue/index.ts#L68)

Retrieve whether the Venue exists

**Returns:** _Promise‹boolean›_

### getPendingInstructions

▸ **getPendingInstructions**\(\): _Promise‹_[_Instruction_](instruction.md)_\[\]›_

_Defined in_ [_src/api/entities/Venue/index.ts:121_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Venue/index.ts#L121)

Retrieve all pending Instructions in this Venue

**Returns:** _Promise‹_[_Instruction_](instruction.md)_\[\]›_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


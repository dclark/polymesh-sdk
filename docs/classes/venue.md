# Venue

Represents a Venue through which settlements are handled

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

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
* [getInstructions](venue.md#getinstructions)
* [getPendingInstructions](venue.md#getpendinginstructions)
* [isEqual](venue.md#isequal)
* [modify](venue.md#modify)
* [toJson](venue.md#tojson)
* [generateUuid](venue.md#static-generateuuid)
* [unserialize](venue.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L48)

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/Venue/index.ts:58_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Venue/index.ts#L58)

Identifier number of the venue

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L46)

## Methods

### addInstruction

▸ **addInstruction**\(`args`: [AddInstructionParams](../interfaces/addinstructionparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_\[\],_ [_Instruction_](instruction.md)_››_

_Defined in_ [_src/api/entities/Venue/index.ts:238_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Venue/index.ts#L238)

Creates a settlement Instruction in this Venue

**`note`** required role:

* Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addInstruction.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [AddInstructionParams](../interfaces/addinstructionparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_\[\],_ [_Instruction_](instruction.md)_››_

### addInstructions

▸ **addInstructions**\(`args`: [AddInstructionsParams](../interfaces/addinstructionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_\[\]››_

_Defined in_ [_src/api/entities/Venue/index.ts:251_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Venue/index.ts#L251)

Creates a batch of settlement Instructions in this Venue

**`note`** required role:

* Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addInstructions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [AddInstructionsParams](../interfaces/addinstructionsparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Instruction_](instruction.md)_\[\]››_

### details

▸ **details**\(\): _Promise‹_[_VenueDetails_](../interfaces/venuedetails.md)_›_

_Defined in_ [_src/api/entities/Venue/index.ts:111_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Venue/index.ts#L111)

Retrieve information specific to this venue

**Returns:** _Promise‹_[_VenueDetails_](../interfaces/venuedetails.md)_›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Overrides_ [_Entity_](entity.md)_._[_exists_](entity.md#abstract-exists)

_Defined in_ [_src/api/entities/Venue/index.ts:92_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Venue/index.ts#L92)

Determine whether this Venue exists on chain

**Returns:** _Promise‹boolean›_

### getInstructions

▸ **getInstructions**\(\): _Promise‹Pick‹_[_GroupedInstructions_](../interfaces/groupedinstructions.md)_, "pending" \| "failed"››_

_Defined in_ [_src/api/entities/Venue/index.ts:147_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Venue/index.ts#L147)

Retrieve all pending and failed Instructions in this Venue

**Returns:** _Promise‹Pick‹_[_GroupedInstructions_](../interfaces/groupedinstructions.md)_, "pending" \| "failed"››_

### getPendingInstructions

▸ **getPendingInstructions**\(\): _Promise‹_[_Instruction_](instruction.md)_\[\]›_

_Defined in_ [_src/api/entities/Venue/index.ts:185_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Venue/index.ts#L185)

Retrieve all pending Instructions in this Venue

**`deprecated`** in favor of `getInstructions`

**Returns:** _Promise‹_[_Instruction_](instruction.md)_\[\]›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### modify

▸ **modify**\(`args`: [ModifyVenueParams](../globals.md#modifyvenueparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Venue/index.ts:264_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Venue/index.ts#L264)

Modify description and type

**`note`** required role:

* Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modify.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyVenueParams](../globals.md#modifyvenueparams) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### toJson

▸ **toJson**\(\): _string_

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/Venue/index.ts:271_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Venue/index.ts#L271)

Return the Venue's ID

**Returns:** _string_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L14)

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

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


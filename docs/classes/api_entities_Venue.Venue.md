[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Venue](../modules/api_entities_Venue.md) / Venue

# Class: Venue

[api/entities/Venue](../modules/api_entities_Venue.md).Venue

Represents a Venue through which settlements are handled

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_Venue.UniqueIdentifiers.md), `string`\>

  ↳ **`Venue`**

## Table of contents

### Properties

- [id](api_entities_Venue.Venue.md#id)
- [uuid](api_entities_Venue.Venue.md#uuid)

### Methods

- [addInstruction](api_entities_Venue.Venue.md#addinstruction)
- [addInstructions](api_entities_Venue.Venue.md#addinstructions)
- [details](api_entities_Venue.Venue.md#details)
- [exists](api_entities_Venue.Venue.md#exists)
- [getInstructions](api_entities_Venue.Venue.md#getinstructions)
- [getPendingInstructions](api_entities_Venue.Venue.md#getpendinginstructions)
- [isEqual](api_entities_Venue.Venue.md#isequal)
- [modify](api_entities_Venue.Venue.md#modify)
- [toHuman](api_entities_Venue.Venue.md#tohuman)
- [generateUuid](api_entities_Venue.Venue.md#generateuuid)
- [unserialize](api_entities_Venue.Venue.md#unserialize)

## Properties

### id

• **id**: `BigNumber`

identifier number of the Venue

#### Defined in

[api/entities/Venue/index.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Venue/index.ts#L57)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### addInstruction

▸ **addInstruction**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Instruction`](api_entities_Instruction.Instruction.md)[], [`Instruction`](api_entities_Instruction.Instruction.md), `unknown`[][]\>\>

Creates a settlement Instruction in this Venue

**`note`** required role:
  - Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [addInstruction.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddInstructionParams`](../interfaces/api_procedures_addInstruction.AddInstructionParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Instruction`](api_entities_Instruction.Instruction.md)[], [`Instruction`](api_entities_Instruction.Instruction.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Venue/index.ts:214](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Venue/index.ts#L214)

___

### addInstructions

▸ **addInstructions**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Instruction`](api_entities_Instruction.Instruction.md)[], [`Instruction`](api_entities_Instruction.Instruction.md)[], `unknown`[][]\>\>

Creates a batch of settlement Instructions in this Venue

**`note`** required role:
  - Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [addInstructions.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddInstructionsParams`](../interfaces/api_procedures_addInstruction.AddInstructionsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Instruction`](api_entities_Instruction.Instruction.md)[], [`Instruction`](api_entities_Instruction.Instruction.md)[], `unknown`[][]\>\>

#### Defined in

[api/entities/Venue/index.ts:227](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Venue/index.ts#L227)

___

### details

▸ **details**(): `Promise`<[`VenueDetails`](../interfaces/api_entities_Venue_types.VenueDetails.md)\>

Retrieve information specific to this Venue

#### Returns

`Promise`<[`VenueDetails`](../interfaces/api_entities_Venue_types.VenueDetails.md)\>

#### Defined in

[api/entities/Venue/index.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Venue/index.ts#L110)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Venue exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/Venue/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Venue/index.ts#L91)

___

### getInstructions

▸ **getInstructions**(): `Promise`<`Pick`<[`GroupedInstructions`](../interfaces/types.GroupedInstructions.md), ``"pending"`` \| ``"failed"``\>\>

Retrieve all pending and failed Instructions in this Venue

#### Returns

`Promise`<`Pick`<[`GroupedInstructions`](../interfaces/types.GroupedInstructions.md), ``"pending"`` \| ``"failed"``\>\>

#### Defined in

[api/entities/Venue/index.ts:139](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Venue/index.ts#L139)

___

### getPendingInstructions

▸ **getPendingInstructions**(): `Promise`<[`Instruction`](api_entities_Instruction.Instruction.md)[]\>

Retrieve all pending Instructions in this Venue

**`deprecated`** in favor of `getInstructions`

#### Returns

`Promise`<[`Instruction`](api_entities_Instruction.Instruction.md)[]\>

#### Defined in

[api/entities/Venue/index.ts:168](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Venue/index.ts#L168)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](api_entities_Entity.Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[isEqual](api_entities_Entity.Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L61)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify description and type

**`note`** required role:
  - Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [modify.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyVenueParams`](../modules/api_procedures_modifyVenue.md#modifyvenueparams) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Venue/index.ts:240](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Venue/index.ts#L240)

___

### toHuman

▸ **toHuman**(): `string`

Return the Venue's ID

#### Returns

`string`

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/Venue/index.ts:247](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Venue/index.ts#L247)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[generateUuid](api_entities_Entity.Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[unserialize](api_entities_Entity.Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

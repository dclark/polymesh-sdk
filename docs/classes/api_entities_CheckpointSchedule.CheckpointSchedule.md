[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/CheckpointSchedule](../modules/api_entities_CheckpointSchedule.md) / CheckpointSchedule

# Class: CheckpointSchedule

[api/entities/CheckpointSchedule](../modules/api_entities_CheckpointSchedule.md).CheckpointSchedule

Represents a Checkpoint Schedule for an Asset. Schedules can be set up to create Checkpoints at regular intervals

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_CheckpointSchedule.UniqueIdentifiers.md), `HumanReadable`\>

  ↳ **`CheckpointSchedule`**

## Table of contents

### Properties

- [asset](api_entities_CheckpointSchedule.CheckpointSchedule.md#asset)
- [complexity](api_entities_CheckpointSchedule.CheckpointSchedule.md#complexity)
- [expiryDate](api_entities_CheckpointSchedule.CheckpointSchedule.md#expirydate)
- [id](api_entities_CheckpointSchedule.CheckpointSchedule.md#id)
- [period](api_entities_CheckpointSchedule.CheckpointSchedule.md#period)
- [start](api_entities_CheckpointSchedule.CheckpointSchedule.md#start)
- [uuid](api_entities_CheckpointSchedule.CheckpointSchedule.md#uuid)

### Methods

- [details](api_entities_CheckpointSchedule.CheckpointSchedule.md#details)
- [exists](api_entities_CheckpointSchedule.CheckpointSchedule.md#exists)
- [getCheckpoints](api_entities_CheckpointSchedule.CheckpointSchedule.md#getcheckpoints)
- [isEqual](api_entities_CheckpointSchedule.CheckpointSchedule.md#isequal)
- [toHuman](api_entities_CheckpointSchedule.CheckpointSchedule.md#tohuman)
- [generateUuid](api_entities_CheckpointSchedule.CheckpointSchedule.md#generateuuid)
- [unserialize](api_entities_CheckpointSchedule.CheckpointSchedule.md#unserialize)

## Properties

### asset

• **asset**: [`Asset`](api_entities_Asset.Asset.md)

Asset for which Checkpoints are scheduled

#### Defined in

[api/entities/CheckpointSchedule/index.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L65)

___

### complexity

• **complexity**: `BigNumber`

abstract measure of the complexity of this Schedule. Shorter periods translate into more complexity

#### Defined in

[api/entities/CheckpointSchedule/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L87)

___

### expiryDate

• **expiryDate**: ``null`` \| `Date`

date at which the last Checkpoint will be created with this Schedule.
  A null value means that this Schedule never expires

#### Defined in

[api/entities/CheckpointSchedule/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L82)

___

### id

• **id**: `BigNumber`

schedule identifier number

#### Defined in

[api/entities/CheckpointSchedule/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L60)

___

### period

• **period**: ``null`` \| [`CalendarPeriod`](../interfaces/types.CalendarPeriod.md)

how often this Schedule creates a Checkpoint. A null value means this Schedule
  creates a single Checkpoint and then expires

#### Defined in

[api/entities/CheckpointSchedule/index.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L71)

___

### start

• **start**: `Date`

first Checkpoint creation date

#### Defined in

[api/entities/CheckpointSchedule/index.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L76)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### details

▸ **details**(): `Promise`<[`ScheduleDetails`](../interfaces/api_entities_CheckpointSchedule_types.ScheduleDetails.md)\>

Retrieve information specific to this Schedule

#### Returns

`Promise`<[`ScheduleDetails`](../interfaces/api_entities_CheckpointSchedule_types.ScheduleDetails.md)\>

#### Defined in

[api/entities/CheckpointSchedule/index.ts:123](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L123)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Checkpoint Schedule exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/CheckpointSchedule/index.ts:189](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L189)

___

### getCheckpoints

▸ **getCheckpoints**(): `Promise`<[`Checkpoint`](api_entities_Checkpoint.Checkpoint.md)[]\>

Retrieve all Checkpoints created by this Schedule

#### Returns

`Promise`<[`Checkpoint`](api_entities_Checkpoint.Checkpoint.md)[]\>

#### Defined in

[api/entities/CheckpointSchedule/index.ts:157](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L157)

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

### toHuman

▸ **toHuman**(): `HumanReadable`

Return the Schedule's static data

#### Returns

`HumanReadable`

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/CheckpointSchedule/index.ts:211](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CheckpointSchedule/index.ts#L211)

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

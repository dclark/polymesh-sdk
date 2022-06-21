[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/Checkpoints/Schedules](../modules/api_entities_Asset_Checkpoints_Schedules.md) / Schedules

# Class: Schedules

[api/entities/Asset/Checkpoints/Schedules](../modules/api_entities_Asset_Checkpoints_Schedules.md).Schedules

Handles all Asset Checkpoint Schedules related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`Schedules`**

## Table of contents

### Methods

- [complexityOf](api_entities_Asset_Checkpoints_Schedules.Schedules.md#complexityof)
- [create](api_entities_Asset_Checkpoints_Schedules.Schedules.md#create)
- [currentComplexity](api_entities_Asset_Checkpoints_Schedules.Schedules.md#currentcomplexity)
- [get](api_entities_Asset_Checkpoints_Schedules.Schedules.md#get)
- [getOne](api_entities_Asset_Checkpoints_Schedules.Schedules.md#getone)
- [maxComplexity](api_entities_Asset_Checkpoints_Schedules.Schedules.md#maxcomplexity)
- [remove](api_entities_Asset_Checkpoints_Schedules.Schedules.md#remove)

## Methods

### complexityOf

▸ **complexityOf**(`period`): `BigNumber`

Calculate an abstract measure of the complexity of a given Calendar Period

#### Parameters

| Name | Type |
| :------ | :------ |
| `period` | [`CalendarPeriod`](../interfaces/types.CalendarPeriod.md) |

#### Returns

`BigNumber`

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:127](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/Schedules.ts#L127)

___

### create

▸ **create**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`CheckpointSchedule`](api_entities_CheckpointSchedule.CheckpointSchedule.md), [`CheckpointSchedule`](api_entities_CheckpointSchedule.CheckpointSchedule.md), `unknown`[][]\>\>

Create a schedule for Checkpoint creation (i.e. "Create a checkpoint every week for 5 weeks, starting next tuesday")

**`note`** due to chain limitations, schedules are advanced and (if appropriate) executed whenever the Asset is
  redeemed, issued or transferred between portfolios. This means that on an Asset without much movement, there may be disparities between intended Checkpoint creation dates
  and the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [create.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateCheckpointScheduleParams`](../interfaces/api_procedures_createCheckpointSchedule.CreateCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`CheckpointSchedule`](api_entities_CheckpointSchedule.CheckpointSchedule.md), [`CheckpointSchedule`](api_entities_CheckpointSchedule.CheckpointSchedule.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/Schedules.ts#L57)

___

### currentComplexity

▸ **currentComplexity**(): `Promise`<`BigNumber`\>

Calculate the sum of the complexity of all current Checkpoint Schedules for this Asset.
  The number cannot exceed the Asset's maximum complexity (obtained via [maxComplexity](api_entities_Asset_Checkpoints_Schedules.Schedules.md#maxcomplexity))

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:135](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/Schedules.ts#L135)

___

### get

▸ **get**(): `Promise`<[`ScheduleWithDetails`](../interfaces/types.ScheduleWithDetails.md)[]\>

Retrieve all active Checkpoint Schedules

#### Returns

`Promise`<[`ScheduleWithDetails`](../interfaces/types.ScheduleWithDetails.md)[]\>

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/Schedules.ts#L94)

___

### getOne

▸ **getOne**(`__namedParameters`): `Promise`<[`ScheduleWithDetails`](../interfaces/types.ScheduleWithDetails.md)\>

Retrieve a single Checkpoint Schedule associated to this Asset by its ID

**`throws`** if there is no Schedule with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.id` | `BigNumber` |

#### Returns

`Promise`<[`ScheduleWithDetails`](../interfaces/types.ScheduleWithDetails.md)\>

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/Schedules.ts#L76)

___

### maxComplexity

▸ **maxComplexity**(): `Promise`<`BigNumber`\>

Retrieve the maximum allowed Schedule complexity for this Asset

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:144](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/Schedules.ts#L144)

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Remove the supplied Checkpoint Schedule for a given Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [remove.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveCheckpointScheduleParams`](../interfaces/api_procedures_removeCheckpointSchedule.RemoveCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:67](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/Schedules.ts#L67)

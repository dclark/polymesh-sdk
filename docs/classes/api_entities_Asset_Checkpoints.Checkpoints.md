[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/Checkpoints](../modules/api_entities_Asset_Checkpoints.md) / Checkpoints

# Class: Checkpoints

[api/entities/Asset/Checkpoints](../modules/api_entities_Asset_Checkpoints.md).Checkpoints

Handles all Asset Checkpoints related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`Checkpoints`**

## Table of contents

### Properties

- [schedules](api_entities_Asset_Checkpoints.Checkpoints.md#schedules)

### Methods

- [create](api_entities_Asset_Checkpoints.Checkpoints.md#create)
- [get](api_entities_Asset_Checkpoints.Checkpoints.md#get)
- [getOne](api_entities_Asset_Checkpoints.Checkpoints.md#getone)

## Properties

### schedules

• **schedules**: [`Schedules`](api_entities_Asset_Checkpoints_Schedules.Schedules.md)

#### Defined in

[api/entities/Asset/Checkpoints/index.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/index.ts#L30)

## Methods

### create

▸ **create**(`opts?`): `Promise`<`TransactionQueue`<[`Checkpoint`](api_entities_Checkpoint.Checkpoint.md), [`Checkpoint`](api_entities_Checkpoint.Checkpoint.md), `unknown`[][]\>\>

Create a snapshot of Asset Holders and their respective balances at this moment

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [create.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Checkpoint`](api_entities_Checkpoint.Checkpoint.md), [`Checkpoint`](api_entities_Checkpoint.Checkpoint.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Checkpoints/index.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/index.ts#L54)

___

### get

▸ **get**(`paginationOpts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`CheckpointWithData`](../interfaces/types.CheckpointWithData.md)\>\>

Retrieve all Checkpoints created on this Asset, together with their corresponding creation Date and Total Supply

**`note`** supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../interfaces/types.PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`CheckpointWithData`](../interfaces/types.CheckpointWithData.md)\>\>

#### Defined in

[api/entities/Asset/Checkpoints/index.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/index.ts#L88)

___

### getOne

▸ **getOne**(`args`): `Promise`<[`Checkpoint`](api_entities_Checkpoint.Checkpoint.md)\>

Retrieve a single Checkpoint for this Asset by its ID

**`throws`** if there is no Checkpoint with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`Checkpoint`](api_entities_Checkpoint.Checkpoint.md)\>

#### Defined in

[api/entities/Asset/Checkpoints/index.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/index.ts#L63)

[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / api/entities/Asset/Checkpoints/types

# Module: api/entities/Asset/Checkpoints/types

## Table of contents

### Enumerations

- [CaCheckpointType](../enums/api_entities_Asset_Checkpoints_types.CaCheckpointType.md)

### Type Aliases

- [InputCaCheckpoint](api_entities_Asset_Checkpoints_types.md#inputcacheckpoint)

## Type Aliases

### InputCaCheckpoint

Ƭ **InputCaCheckpoint**: [`Checkpoint`](../classes/api_entities_Checkpoint.Checkpoint.md) \| [`CheckpointSchedule`](../classes/api_entities_CheckpointSchedule.CheckpointSchedule.md) \| `Date` \| { `id`: `BigNumber` ; `type`: [`Existing`](../enums/api_entities_Asset_Checkpoints_types.CaCheckpointType.md#existing)  } \| { `id`: `BigNumber` ; `type`: [`Schedule`](../enums/api_entities_Asset_Checkpoints_types.CaCheckpointType.md#schedule)  }

#### Defined in

[api/entities/Asset/Checkpoints/types.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Checkpoints/types.ts#L10)

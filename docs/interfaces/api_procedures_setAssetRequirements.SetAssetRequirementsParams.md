[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/setAssetRequirements](../modules/api_procedures_setAssetRequirements.md) / SetAssetRequirementsParams

# Interface: SetAssetRequirementsParams

[api/procedures/setAssetRequirements](../modules/api_procedures_setAssetRequirements.md).SetAssetRequirementsParams

## Table of contents

### Properties

- [requirements](api_procedures_setAssetRequirements.SetAssetRequirementsParams.md#requirements)

## Properties

### requirements

• **requirements**: [`InputCondition`](../modules/types.md#inputcondition)[][]

array of array of conditions. For a transfer to be successful, it must comply with all the conditions of at least one of the arrays.
  In other words, higher level arrays are *OR* between them, while conditions inside each array are *AND* between them

#### Defined in

[api/procedures/setAssetRequirements.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/setAssetRequirements.ts#L16)

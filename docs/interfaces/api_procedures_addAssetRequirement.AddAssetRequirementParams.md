[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/addAssetRequirement](../modules/api_procedures_addAssetRequirement.md) / AddAssetRequirementParams

# Interface: AddAssetRequirementParams

[api/procedures/addAssetRequirement](../modules/api_procedures_addAssetRequirement.md).AddAssetRequirementParams

## Table of contents

### Properties

- [conditions](api_procedures_addAssetRequirement.AddAssetRequirementParams.md#conditions)

## Properties

### conditions

• **conditions**: [`InputCondition`](../modules/types.md#inputcondition)[]

array of conditions that form the requirement that must be added.
  Conditions within a requirement are *AND* between them. This means that in order
  for a transfer to comply with this requirement, it must fulfill *ALL* conditions

#### Defined in

[api/procedures/addAssetRequirement.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/addAssetRequirement.ts#L17)

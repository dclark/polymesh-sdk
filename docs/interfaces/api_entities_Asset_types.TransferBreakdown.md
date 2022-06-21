[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/types](../modules/api_entities_Asset_types.md) / TransferBreakdown

# Interface: TransferBreakdown

[api/entities/Asset/types](../modules/api_entities_Asset_types.md).TransferBreakdown

Object containing every reason why a specific Asset transfer would fail

## Table of contents

### Properties

- [compliance](api_entities_Asset_types.TransferBreakdown.md#compliance)
- [general](api_entities_Asset_types.TransferBreakdown.md#general)
- [restrictions](api_entities_Asset_types.TransferBreakdown.md#restrictions)
- [result](api_entities_Asset_types.TransferBreakdown.md#result)

## Properties

### compliance

• **compliance**: [`Compliance`](types.Compliance.md)

how the transfer adheres to the asset's compliance rules

#### Defined in

[api/entities/Asset/types.ts:44](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/types.ts#L44)

___

### general

• **general**: [`TransferError`](../enums/types.TransferError.md)[]

list of general transfer errors

#### Defined in

[api/entities/Asset/types.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/types.ts#L40)

___

### restrictions

• **restrictions**: [`TransferRestrictionResult`](api_entities_Asset_types.TransferRestrictionResult.md)[]

list of transfer restrictions and whether the transfer satisfies each one

#### Defined in

[api/entities/Asset/types.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/types.ts#L48)

___

### result

• **result**: `boolean`

true if the transfer is possible

#### Defined in

[api/entities/Asset/types.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/types.ts#L52)

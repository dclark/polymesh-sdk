[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / api/entities/CorporateActionBase/types

# Module: api/entities/CorporateActionBase/types

## Table of contents

### References

- [CorporateActionParams](api_entities_CorporateActionBase_types.md#corporateactionparams)

### Enumerations

- [CorporateActionKind](../enums/api_entities_CorporateActionBase_types.CorporateActionKind.md)
- [TargetTreatment](../enums/api_entities_CorporateActionBase_types.TargetTreatment.md)

### Interfaces

- [CorporateActionTargets](../interfaces/api_entities_CorporateActionBase_types.CorporateActionTargets.md)
- [TaxWithholding](../interfaces/api_entities_CorporateActionBase_types.TaxWithholding.md)

### Type Aliases

- [InputTargets](api_entities_CorporateActionBase_types.md#inputtargets)
- [InputTaxWithholding](api_entities_CorporateActionBase_types.md#inputtaxwithholding)

## References

### CorporateActionParams

Renames and re-exports [Params](../interfaces/api_entities_CorporateActionBase.Params.md)

## Type Aliases

### InputTargets

Ƭ **InputTargets**: [`Modify`](types_utils.md#modify)<[`CorporateActionTargets`](../interfaces/api_entities_CorporateActionBase_types.CorporateActionTargets.md), { `identities`: (`string` \| [`Identity`](../classes/api_entities_Identity.Identity.md))[]  }\>

#### Defined in

[api/entities/CorporateActionBase/types.ts:21](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/types.ts#L21)

___

### InputTaxWithholding

Ƭ **InputTaxWithholding**: [`Modify`](types_utils.md#modify)<[`TaxWithholding`](../interfaces/api_entities_CorporateActionBase_types.TaxWithholding.md), { `identity`: `string` \| [`Identity`](../classes/api_entities_Identity.Identity.md)  }\>

#### Defined in

[api/entities/CorporateActionBase/types.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/types.ts#L28)

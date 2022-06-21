[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/CorporateAction](../modules/api_entities_CorporateAction.md) / HumanReadable

# Interface: HumanReadable

[api/entities/CorporateAction](../modules/api_entities_CorporateAction.md).HumanReadable

## Table of contents

### Properties

- [declarationDate](api_entities_CorporateAction.HumanReadable.md#declarationdate)
- [defaultTaxWithholding](api_entities_CorporateAction.HumanReadable.md#defaulttaxwithholding)
- [description](api_entities_CorporateAction.HumanReadable.md#description)
- [id](api_entities_CorporateAction.HumanReadable.md#id)
- [targets](api_entities_CorporateAction.HumanReadable.md#targets)
- [taxWithholdings](api_entities_CorporateAction.HumanReadable.md#taxwithholdings)
- [ticker](api_entities_CorporateAction.HumanReadable.md#ticker)

## Properties

### declarationDate

• **declarationDate**: `string`

#### Defined in

[api/entities/CorporateAction.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateAction.ts#L28)

___

### defaultTaxWithholding

• **defaultTaxWithholding**: `string`

#### Defined in

[api/entities/CorporateAction.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateAction.ts#L31)

___

### description

• **description**: `string`

#### Defined in

[api/entities/CorporateAction.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateAction.ts#L29)

___

### id

• **id**: `string`

#### Defined in

[api/entities/CorporateAction.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateAction.ts#L26)

___

### targets

• **targets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `identities` | `string`[] |
| `treatment` | [`TargetTreatment`](../enums/api_entities_CorporateActionBase_types.TargetTreatment.md) |

#### Defined in

[api/entities/CorporateAction.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateAction.ts#L30)

___

### taxWithholdings

• **taxWithholdings**: { `identity`: `string` ; `percentage`: `string`  }[]

#### Defined in

[api/entities/CorporateAction.ts:32](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateAction.ts#L32)

___

### ticker

• **ticker**: `string`

#### Defined in

[api/entities/CorporateAction.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateAction.ts#L27)

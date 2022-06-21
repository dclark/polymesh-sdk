[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/CorporateActions/Distributions](../modules/api_entities_Asset_CorporateActions_Distributions.md) / Distributions

# Class: Distributions

[api/entities/Asset/CorporateActions/Distributions](../modules/api_entities_Asset_CorporateActions_Distributions.md).Distributions

Handles all Asset Distributions related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`Distributions`**

## Table of contents

### Methods

- [configureDividendDistribution](api_entities_Asset_CorporateActions_Distributions.Distributions.md#configuredividenddistribution)
- [get](api_entities_Asset_CorporateActions_Distributions.Distributions.md#get)
- [getOne](api_entities_Asset_CorporateActions_Distributions.Distributions.md#getone)

## Methods

### configureDividendDistribution

▸ **configureDividendDistribution**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`DividendDistribution`](api_entities_DividendDistribution.DividendDistribution.md), [`DividendDistribution`](api_entities_DividendDistribution.DividendDistribution.md), `unknown`[][]\>\>

Create a Dividend Distribution for a subset of the Asset Holders at a certain (existing or future) Checkpoint

**`note`** required role:
  - Origin Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [configureDividendDistribution.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ConfigureDividendDistributionParams`](../interfaces/api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`DividendDistribution`](api_entities_DividendDistribution.DividendDistribution.md), [`DividendDistribution`](api_entities_DividendDistribution.DividendDistribution.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/CorporateActions/Distributions.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/Distributions.ts#L39)

___

### get

▸ **get**(): `Promise`<[`DistributionWithDetails`](../interfaces/types.DistributionWithDetails.md)[]\>

Retrieve all Dividend Distributions associated to this Asset, along with their details

#### Returns

`Promise`<[`DistributionWithDetails`](../interfaces/types.DistributionWithDetails.md)[]\>

#### Defined in

[api/entities/Asset/CorporateActions/Distributions.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/Distributions.ts#L114)

___

### getOne

▸ **getOne**(`args`): `Promise`<[`DistributionWithDetails`](../interfaces/types.DistributionWithDetails.md)\>

Retrieve a single Dividend Distribution associated to this Asset by its ID

**`throws`** if there is no Distribution with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`DistributionWithDetails`](../interfaces/types.DistributionWithDetails.md)\>

#### Defined in

[api/entities/Asset/CorporateActions/Distributions.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/Distributions.ts#L62)

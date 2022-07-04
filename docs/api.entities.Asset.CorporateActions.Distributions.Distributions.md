# Class: Distributions

[api/entities/Asset/CorporateActions/Distributions](../wiki/api.entities.Asset.CorporateActions.Distributions).Distributions

Handles all Asset Distributions related functionality

## Hierarchy

- `Namespace`<[`Asset`](../wiki/api.entities.Asset.Asset)\>

  ↳ **`Distributions`**

## Table of contents

### Methods

- [configureDividendDistribution](../wiki/api.entities.Asset.CorporateActions.Distributions.Distributions#configuredividenddistribution)
- [get](../wiki/api.entities.Asset.CorporateActions.Distributions.Distributions#get)
- [getOne](../wiki/api.entities.Asset.CorporateActions.Distributions.Distributions#getone)

## Methods

### configureDividendDistribution

▸ **configureDividendDistribution**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`DividendDistribution`](../wiki/api.entities.DividendDistribution.DividendDistribution), [`DividendDistribution`](../wiki/api.entities.DividendDistribution.DividendDistribution), `unknown`[][]\>\>

Create a Dividend Distribution for a subset of the Asset Holders at a certain (existing or future) Checkpoint

**`note`** required role:
  - Origin Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [configureDividendDistribution.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ConfigureDividendDistributionParams`](../wiki/api.procedures.types.ConfigureDividendDistributionParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`DividendDistribution`](../wiki/api.entities.DividendDistribution.DividendDistribution), [`DividendDistribution`](../wiki/api.entities.DividendDistribution.DividendDistribution), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/CorporateActions/Distributions.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/CorporateActions/Distributions.ts#L43)

___

### get

▸ **get**(): `Promise`<[`DistributionWithDetails`](../wiki/types.DistributionWithDetails)[]\>

Retrieve all Dividend Distributions associated to this Asset, along with their details

#### Returns

`Promise`<[`DistributionWithDetails`](../wiki/types.DistributionWithDetails)[]\>

#### Defined in

[api/entities/Asset/CorporateActions/Distributions.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/CorporateActions/Distributions.ts#L118)

___

### getOne

▸ **getOne**(`args`): `Promise`<[`DistributionWithDetails`](../wiki/types.DistributionWithDetails)\>

Retrieve a single Dividend Distribution associated to this Asset by its ID

**`throws`** if there is no Distribution with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`DistributionWithDetails`](../wiki/types.DistributionWithDetails)\>

#### Defined in

[api/entities/Asset/CorporateActions/Distributions.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/CorporateActions/Distributions.ts#L66)

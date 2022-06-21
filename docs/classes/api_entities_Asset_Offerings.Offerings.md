[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/Offerings](../modules/api_entities_Asset_Offerings.md) / Offerings

# Class: Offerings

[api/entities/Asset/Offerings](../modules/api_entities_Asset_Offerings.md).Offerings

Handles all Asset Offering related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`Offerings`**

## Table of contents

### Methods

- [get](api_entities_Asset_Offerings.Offerings.md#get)
- [getOne](api_entities_Asset_Offerings.Offerings.md#getone)
- [launch](api_entities_Asset_Offerings.Offerings.md#launch)

## Methods

### get

▸ **get**(`opts?`): `Promise`<[`OfferingWithDetails`](../interfaces/types.OfferingWithDetails.md)[]\>

Retrieve all of the Asset's Offerings and their details. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.status?` | `Partial`<[`OfferingStatus`](../interfaces/api_entities_Offering_types.OfferingStatus.md)\> | status of the Offerings to fetch. If defined, only Offerings that have all passed statuses will be returned |

#### Returns

`Promise`<[`OfferingWithDetails`](../interfaces/types.OfferingWithDetails.md)[]\>

#### Defined in

[api/entities/Asset/Offerings.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Offerings.ts#L81)

___

### getOne

▸ **getOne**(`args`): `Promise`<[`Offering`](api_entities_Offering.Offering.md)\>

Retrieve a single Offering associated to this Asset by its ID

**`throws`** if there is no Offering with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`Offering`](api_entities_Offering.Offering.md)\>

#### Defined in

[api/entities/Asset/Offerings.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Offerings.ts#L56)

___

### launch

▸ **launch**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Offering`](api_entities_Offering.Offering.md), [`Offering`](api_entities_Offering.Offering.md), `unknown`[][]\>\>

Launch an Asset Offering

**`note`** required roles:
  - Offering Portfolio Custodian
  - Raising Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [launch.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `LaunchOfferingParams` |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Offering`](api_entities_Offering.Offering.md), [`Offering`](api_entities_Offering.Offering.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Offerings.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Offerings.ts#L47)

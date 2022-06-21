[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/AssetHolders](../modules/api_entities_Asset_AssetHolders.md) / AssetHolders

# Class: AssetHolders

[api/entities/Asset/AssetHolders](../modules/api_entities_Asset_AssetHolders.md).AssetHolders

Handles all Asset Holders related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`AssetHolders`**

## Table of contents

### Methods

- [get](api_entities_Asset_AssetHolders.AssetHolders.md#get)

## Methods

### get

▸ **get**(`paginationOpts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`IdentityBalance`](../interfaces/api_entities_Asset_types.IdentityBalance.md)\>\>

Retrieve all the Asset Holders with their respective balance

**`note`** supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../interfaces/types.PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`IdentityBalance`](../interfaces/api_entities_Asset_types.IdentityBalance.md)\>\>

#### Defined in

[api/entities/Asset/AssetHolders.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/AssetHolders.ts#L17)

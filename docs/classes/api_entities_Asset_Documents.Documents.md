[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/Documents](../modules/api_entities_Asset_Documents.md) / Documents

# Class: Documents

[api/entities/Asset/Documents](../modules/api_entities_Asset_Documents.md).Documents

Handles all Asset Document related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`Documents`**

## Table of contents

### Methods

- [get](api_entities_Asset_Documents.Documents.md#get)
- [set](api_entities_Asset_Documents.Documents.md#set)

## Methods

### get

▸ **get**(`paginationOpts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`AssetDocument`](../interfaces/types.AssetDocument.md)\>\>

Retrieve all documents linked to the Asset

**`note`** supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../interfaces/types.PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`AssetDocument`](../interfaces/types.AssetDocument.md)\>\>

#### Defined in

[api/entities/Asset/Documents.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Documents.ts#L43)

___

### set

▸ **set**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Assign a new list of documents to the Asset by replacing the existing list of documents with the ones passed in the parameters

This requires two transactions

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [set.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetAssetDocumentsParams`](../interfaces/api_procedures_setAssetDocuments.SetAssetDocumentsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Documents.ts:34](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Documents.ts#L34)

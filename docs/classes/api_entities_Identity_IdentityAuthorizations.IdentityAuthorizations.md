[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Identity/IdentityAuthorizations](../modules/api_entities_Identity_IdentityAuthorizations.md) / IdentityAuthorizations

# Class: IdentityAuthorizations

[api/entities/Identity/IdentityAuthorizations](../modules/api_entities_Identity_IdentityAuthorizations.md).IdentityAuthorizations

Handles all Identity Authorization related functionality

## Hierarchy

- [`Authorizations`](api_entities_common_namespaces_Authorizations.Authorizations.md)<[`Identity`](api_entities_Identity.Identity.md)\>

  ↳ **`IdentityAuthorizations`**

## Table of contents

### Methods

- [getOne](api_entities_Identity_IdentityAuthorizations.IdentityAuthorizations.md#getone)
- [getReceived](api_entities_Identity_IdentityAuthorizations.IdentityAuthorizations.md#getreceived)
- [getSent](api_entities_Identity_IdentityAuthorizations.IdentityAuthorizations.md#getsent)

## Methods

### getOne

▸ **getOne**(`args`): `Promise`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md)\>

Retrieve a single Authorization Request targeting or issued by this Identity by its ID

**`throws`** if there is no Authorization Request with the passed ID targeting or issued by this Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md)\>

#### Overrides

[Authorizations](api_entities_common_namespaces_Authorizations.Authorizations.md).[getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

#### Defined in

[api/entities/Identity/IdentityAuthorizations.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/IdentityAuthorizations.ts#L62)

___

### getReceived

▸ **getReceived**(`opts?`): `Promise`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md)[]\>

Fetch all pending Authorization Requests for which this Signer is the target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired authorizations. Defaults to true |
| `opts.type?` | [`AuthorizationType`](../enums/types.AuthorizationType.md) | fetch only authorizations of this type. Fetches all types if not passed |

#### Returns

`Promise`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md)[]\>

#### Inherited from

[Authorizations](api_entities_common_namespaces_Authorizations.Authorizations.md).[getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived)

#### Defined in

[api/entities/common/namespaces/Authorizations.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/common/namespaces/Authorizations.ts#L29)

___

### getSent

▸ **getSent**(`paginationOpts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md)\>\>

Fetch all pending authorization requests issued by this Identity

**`note`** supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../interfaces/types.PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md)\>\>

#### Defined in

[api/entities/Identity/IdentityAuthorizations.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/IdentityAuthorizations.ts#L18)

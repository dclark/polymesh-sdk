# Class: IdentityAuthorizations

[api/entities/Identity/IdentityAuthorizations](../wiki/api.entities.Identity.IdentityAuthorizations).IdentityAuthorizations

Handles all Identity Authorization related functionality

## Hierarchy

- [`Authorizations`](../wiki/api.entities.common.namespaces.Authorizations.Authorizations)<[`Identity`](../wiki/api.entities.Identity.Identity)\>

  ↳ **`IdentityAuthorizations`**

## Table of contents

### Methods

- [getOne](../wiki/api.entities.Identity.IdentityAuthorizations.IdentityAuthorizations#getone)
- [getReceived](../wiki/api.entities.Identity.IdentityAuthorizations.IdentityAuthorizations#getreceived)
- [getSent](../wiki/api.entities.Identity.IdentityAuthorizations.IdentityAuthorizations#getsent)

## Methods

### getOne

▸ **getOne**(`args`): `Promise`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest)\>

Retrieve a single Authorization Request targeting or issued by this Identity by its ID

**`throws`** if there is no Authorization Request with the passed ID targeting or issued by this Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest)\>

#### Overrides

[Authorizations](../wiki/api.entities.common.namespaces.Authorizations.Authorizations).[getOne](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getone)

#### Defined in

[api/entities/Identity/IdentityAuthorizations.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/IdentityAuthorizations.ts#L62)

___

### getReceived

▸ **getReceived**(`opts?`): `Promise`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest)[]\>

Fetch all pending Authorization Requests for which this Signer is the target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired authorizations. Defaults to true |
| `opts.type?` | [`AuthorizationType`](../wiki/types.AuthorizationType) | fetch only authorizations of this type. Fetches all types if not passed |

#### Returns

`Promise`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest)[]\>

#### Inherited from

[Authorizations](../wiki/api.entities.common.namespaces.Authorizations.Authorizations).[getReceived](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getreceived)

#### Defined in

[api/entities/common/namespaces/Authorizations.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/common/namespaces/Authorizations.ts#L29)

___

### getSent

▸ **getSent**(`paginationOpts?`): `Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest)\>\>

Fetch all pending authorization requests issued by this Identity

**`note`** supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../wiki/types.PaginationOptions) |

#### Returns

`Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest)\>\>

#### Defined in

[api/entities/Identity/IdentityAuthorizations.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/IdentityAuthorizations.ts#L18)

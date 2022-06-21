[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/common/namespaces/Authorizations](../modules/api_entities_common_namespaces_Authorizations.md) / Authorizations

# Class: Authorizations<Parent\>

[api/entities/common/namespaces/Authorizations](../modules/api_entities_common_namespaces_Authorizations.md).Authorizations

Handles all Authorization related functionality

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | extends [`Signer`](../modules/types.md#signer) |

## Hierarchy

- `Namespace`<`Parent`\>

  ↳ **`Authorizations`**

  ↳↳ [`IdentityAuthorizations`](api_entities_Identity_IdentityAuthorizations.IdentityAuthorizations.md)

## Table of contents

### Methods

- [getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)
- [getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived)

## Methods

### getOne

▸ **getOne**(`args`): `Promise`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md)\>

Retrieve a single Authorization Request targeting this Signer by its ID

**`throws`** if there is no Authorization Request with the passed ID targeting this Signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md)\>

#### Defined in

[api/entities/common/namespaces/Authorizations.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/common/namespaces/Authorizations.ts#L65)

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

#### Defined in

[api/entities/common/namespaces/Authorizations.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/common/namespaces/Authorizations.ts#L29)

[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/DefaultTrustedClaimIssuer](../modules/api_entities_DefaultTrustedClaimIssuer.md) / DefaultTrustedClaimIssuer

# Class: DefaultTrustedClaimIssuer

[api/entities/DefaultTrustedClaimIssuer](../modules/api_entities_DefaultTrustedClaimIssuer.md).DefaultTrustedClaimIssuer

Represents a default trusted claim issuer for a specific Asset in the Polymesh blockchain

## Hierarchy

- [`Identity`](api_entities_Identity.Identity.md)

  ↳ **`DefaultTrustedClaimIssuer`**

## Table of contents

### Properties

- [asset](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#asset)
- [assetPermissions](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#assetpermissions)
- [authorizations](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#authorizations)
- [did](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#did)
- [portfolios](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#portfolios)
- [uuid](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#uuid)

### Methods

- [addedAt](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#addedat)
- [areSecondaryAccountsFrozen](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#aresecondaryaccountsfrozen)
- [checkRoles](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#checkroles)
- [exists](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#exists)
- [getAssetBalance](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#getassetbalance)
- [getHeldAssets](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#getheldassets)
- [getInstructions](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#getinstructions)
- [getPendingDistributions](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#getpendingdistributions)
- [getPendingInstructions](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#getpendinginstructions)
- [getPrimaryAccount](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#getprimaryaccount)
- [getScopeId](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#getscopeid)
- [getSecondaryAccounts](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#getsecondaryaccounts)
- [getTrustingAssets](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#gettrustingassets)
- [getVenues](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#getvenues)
- [hasRole](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#hasrole)
- [hasRoles](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#hasroles)
- [hasValidCdd](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#hasvalidcdd)
- [isCddProvider](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#iscddprovider)
- [isEqual](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#isequal)
- [isGcMember](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#isgcmember)
- [toHuman](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#tohuman)
- [trustedFor](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#trustedfor)
- [generateUuid](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#generateuuid)
- [unserialize](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md#unserialize)

## Properties

### asset

• **asset**: [`Asset`](api_entities_Asset.Asset.md)

Asset for which this Identity is a Default Trusted Claim Issuer

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DefaultTrustedClaimIssuer.ts#L36)

___

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](api_entities_Identity_AssetPermissions.AssetPermissions.md)

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[assetPermissions](api_entities_Identity.Identity.md#assetpermissions)

#### Defined in

[api/entities/Identity/index.ts:99](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L99)

___

### authorizations

• **authorizations**: [`IdentityAuthorizations`](api_entities_Identity_IdentityAuthorizations.IdentityAuthorizations.md)

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[authorizations](api_entities_Identity.Identity.md#authorizations)

#### Defined in

[api/entities/Identity/index.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L97)

___

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[did](api_entities_Identity.Identity.md#did)

#### Defined in

[api/entities/Identity/index.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L94)

___

### portfolios

• **portfolios**: [`Portfolios`](api_entities_Identity_Portfolios.Portfolios.md)

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[portfolios](api_entities_Identity.Identity.md#portfolios)

#### Defined in

[api/entities/Identity/index.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L98)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[uuid](api_entities_Identity.Identity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### addedAt

▸ **addedAt**(): `Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DefaultTrustedClaimIssuer.ts#L55)

___

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`<`boolean`\>

Check whether secondary Accounts are frozen

**`note`** can be subscribed to

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[areSecondaryAccountsFrozen](api_entities_Identity.Identity.md#aresecondaryaccountsfrozen)

#### Defined in

[api/entities/Identity/index.ts:594](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L594)

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[areSecondaryAccountsFrozen](api_entities_Identity.Identity.md#aresecondaryaccountsfrozen)

#### Defined in

[api/entities/Identity/index.ts:595](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L595)

___

### checkRoles

▸ **checkRoles**(`roles`): `Promise`<[`CheckRolesResult`](../interfaces/types.CheckRolesResult.md)\>

Check whether this Identity possesses all specified roles

#### Parameters

| Name | Type |
| :------ | :------ |
| `roles` | [`Role`](../modules/types.md#role)[] |

#### Returns

`Promise`<[`CheckRolesResult`](../interfaces/types.CheckRolesResult.md)\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[checkRoles](api_entities_Identity.Identity.md#checkroles)

#### Defined in

[api/entities/Identity/index.ts:362](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L362)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Identity exists on chain

**`note`** asset Identities aren't considered to exist for the

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[exists](api_entities_Identity.Identity.md#exists)

#### Defined in

[api/entities/Identity/index.ts:751](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L751)

___

### getAssetBalance

▸ **getAssetBalance**(`args`): `Promise`<`BigNumber`\>

Retrieve the balance of a particular Asset

**`note`** can be subscribed to

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getAssetBalance](api_entities_Identity.Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:166](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L166)

▸ **getAssetBalance**(`args`, `callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<`BigNumber`\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getAssetBalance](api_entities_Identity.Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:167](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L167)

___

### getHeldAssets

▸ **getHeldAssets**(`opts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`Asset`](api_entities_Asset.Asset.md)\>\>

Retrieve a list of all Assets which were held at one point by this Identity

**`note`** uses the middleware

**`note`** supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.order?` | `Order` |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`Asset`](api_entities_Asset.Asset.md)\>\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getHeldAssets](api_entities_Identity.Identity.md#getheldassets)

#### Defined in

[api/entities/Identity/index.ts:320](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L320)

___

### getInstructions

▸ **getInstructions**(): `Promise`<[`GroupedInstructions`](../interfaces/types.GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant,
  grouped by status

#### Returns

`Promise`<[`GroupedInstructions`](../interfaces/types.GroupedInstructions.md)\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getInstructions](api_entities_Identity.Identity.md#getinstructions)

#### Defined in

[api/entities/Identity/index.ts:472](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L472)

___

### getPendingDistributions

▸ **getPendingDistributions**(): `Promise`<[`DistributionWithDetails`](../interfaces/types.DistributionWithDetails.md)[]\>

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Assets this Identity has held

#### Returns

`Promise`<[`DistributionWithDetails`](../interfaces/types.DistributionWithDetails.md)[]\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getPendingDistributions](api_entities_Identity.Identity.md#getpendingdistributions)

#### Defined in

[api/entities/Identity/index.ts:631](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L631)

___

### getPendingInstructions

▸ **getPendingInstructions**(): `Promise`<[`Instruction`](api_entities_Instruction.Instruction.md)[]\>

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

#### Returns

`Promise`<[`Instruction`](api_entities_Instruction.Instruction.md)[]\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getPendingInstructions](api_entities_Identity.Identity.md#getpendinginstructions)

#### Defined in

[api/entities/Identity/index.ts:541](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L541)

___

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

**`note`** can be subscribed to

#### Returns

`Promise`<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getPrimaryAccount](api_entities_Identity.Identity.md#getprimaryaccount)

#### Defined in

[api/entities/Identity/index.ts:267](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L267)

▸ **getPrimaryAccount**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getPrimaryAccount](api_entities_Identity.Identity.md#getprimaryaccount)

#### Defined in

[api/entities/Identity/index.ts:268](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L268)

___

### getScopeId

▸ **getScopeId**(`args`): `Promise`<``null`` \| `string`\>

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Asset, or null
  if there is none

**`note`** more on Investor Uniqueness [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`Asset`](api_entities_Asset.Asset.md) |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getScopeId](api_entities_Identity.Identity.md#getscopeid)

#### Defined in

[api/entities/Identity/index.ts:450](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L450)

___

### getSecondaryAccounts

▸ **getSecondaryAccounts**(): `Promise`<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)[]\>

Get the list of secondary Accounts related to the Identity

**`note`** can be subscribed to

**`note`** This method currently lacks pagination and may be slow for identities with many thousands of keys

#### Returns

`Promise`<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)[]\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getSecondaryAccounts](api_entities_Identity.Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:686](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L686)

▸ **getSecondaryAccounts**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getSecondaryAccounts](api_entities_Identity.Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:687](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L687)

___

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`<[`Asset`](api_entities_Asset.Asset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

**`note`** uses the middleware

#### Returns

`Promise`<[`Asset`](api_entities_Asset.Asset.md)[]\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getTrustingAssets](api_entities_Identity.Identity.md#gettrustingassets)

#### Defined in

[api/entities/Identity/index.ts:397](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L397)

___

### getVenues

▸ **getVenues**(): `Promise`<[`Venue`](api_entities_Venue.Venue.md)[]\>

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

#### Returns

`Promise`<[`Venue`](api_entities_Venue.Venue.md)[]\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getVenues](api_entities_Identity.Identity.md#getvenues)

#### Defined in

[api/entities/Identity/index.ts:414](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L414)

▸ **getVenues**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`Venue`](api_entities_Venue.Venue.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[getVenues](api_entities_Identity.Identity.md#getvenues)

#### Defined in

[api/entities/Identity/index.ts:415](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L415)

___

### hasRole

▸ **hasRole**(`role`): `Promise`<`boolean`\>

Check whether this Identity possesses the specified Role

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | [`Role`](../modules/types.md#role) |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[hasRole](api_entities_Identity.Identity.md#hasrole)

#### Defined in

[api/entities/Identity/index.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L118)

___

### hasRoles

▸ **hasRoles**(`roles`): `Promise`<`boolean`\>

Check whether this Identity possesses all specified roles

**`deprecated`** in favor of `checkRoles`

#### Parameters

| Name | Type |
| :------ | :------ |
| `roles` | [`Role`](../modules/types.md#role)[] |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[hasRoles](api_entities_Identity.Identity.md#hasroles)

#### Defined in

[api/entities/Identity/index.ts:386](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L386)

___

### hasValidCdd

▸ **hasValidCdd**(): `Promise`<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[hasValidCdd](api_entities_Identity.Identity.md#hasvalidcdd)

#### Defined in

[api/entities/Identity/index.ts:215](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L215)

___

### isCddProvider

▸ **isCddProvider**(): `Promise`<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[isCddProvider](api_entities_Identity.Identity.md#iscddprovider)

#### Defined in

[api/entities/Identity/index.ts:248](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L248)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](api_entities_Entity.Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[isEqual](api_entities_Identity.Identity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L61)

___

### isGcMember

▸ **isGcMember**(): `Promise`<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[isGcMember](api_entities_Identity.Identity.md#isgcmember)

#### Defined in

[api/entities/Identity/index.ts:231](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L231)

___

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[toHuman](api_entities_Identity.Identity.md#tohuman)

#### Defined in

[api/entities/Identity/index.ts:774](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L774)

___

### trustedFor

▸ **trustedFor**(): `Promise`<``null`` \| [`ClaimType`](../enums/types.ClaimType.md)[]\>

Retrieve claim types for which this Claim Issuer is trusted. A null value means that the issuer is trusted for all claim types

#### Returns

`Promise`<``null`` \| [`ClaimType`](../enums/types.ClaimType.md)[]\>

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DefaultTrustedClaimIssuer.ts#L77)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[generateUuid](api_entities_Identity.Identity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Identity](api_entities_Identity.Identity.md).[unserialize](api_entities_Identity.Identity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

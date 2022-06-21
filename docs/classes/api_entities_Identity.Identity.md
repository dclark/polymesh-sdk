[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Identity](../modules/api_entities_Identity.md) / Identity

# Class: Identity

[api/entities/Identity](../modules/api_entities_Identity.md).Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_Identity.UniqueIdentifiers.md), `string`\>

  ↳ **`Identity`**

  ↳↳ [`DefaultTrustedClaimIssuer`](api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md)

## Table of contents

### Constructors

- [constructor](api_entities_Identity.Identity.md#constructor)

### Properties

- [assetPermissions](api_entities_Identity.Identity.md#assetpermissions)
- [authorizations](api_entities_Identity.Identity.md#authorizations)
- [did](api_entities_Identity.Identity.md#did)
- [portfolios](api_entities_Identity.Identity.md#portfolios)
- [uuid](api_entities_Identity.Identity.md#uuid)

### Methods

- [areSecondaryAccountsFrozen](api_entities_Identity.Identity.md#aresecondaryaccountsfrozen)
- [checkRoles](api_entities_Identity.Identity.md#checkroles)
- [exists](api_entities_Identity.Identity.md#exists)
- [getAssetBalance](api_entities_Identity.Identity.md#getassetbalance)
- [getHeldAssets](api_entities_Identity.Identity.md#getheldassets)
- [getInstructions](api_entities_Identity.Identity.md#getinstructions)
- [getPendingDistributions](api_entities_Identity.Identity.md#getpendingdistributions)
- [getPendingInstructions](api_entities_Identity.Identity.md#getpendinginstructions)
- [getPrimaryAccount](api_entities_Identity.Identity.md#getprimaryaccount)
- [getScopeId](api_entities_Identity.Identity.md#getscopeid)
- [getSecondaryAccounts](api_entities_Identity.Identity.md#getsecondaryaccounts)
- [getTrustingAssets](api_entities_Identity.Identity.md#gettrustingassets)
- [getVenues](api_entities_Identity.Identity.md#getvenues)
- [hasRole](api_entities_Identity.Identity.md#hasrole)
- [hasRoles](api_entities_Identity.Identity.md#hasroles)
- [hasValidCdd](api_entities_Identity.Identity.md#hasvalidcdd)
- [isCddProvider](api_entities_Identity.Identity.md#iscddprovider)
- [isEqual](api_entities_Identity.Identity.md#isequal)
- [isGcMember](api_entities_Identity.Identity.md#isgcmember)
- [toHuman](api_entities_Identity.Identity.md#tohuman)
- [generateUuid](api_entities_Identity.Identity.md#generateuuid)
- [unserialize](api_entities_Identity.Identity.md#unserialize)

## Constructors

### constructor

• **new Identity**(`identifiers`, `context`)

Create an Identity entity

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | [`UniqueIdentifiers`](../interfaces/api_entities_Identity.UniqueIdentifiers.md) |
| `context` | `Context` |

#### Overrides

Entity&lt;UniqueIdentifiers, string\&gt;.constructor

#### Defined in

[api/entities/Identity/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L104)

## Properties

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](api_entities_Identity_AssetPermissions.AssetPermissions.md)

#### Defined in

[api/entities/Identity/index.ts:99](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L99)

___

### authorizations

• **authorizations**: [`IdentityAuthorizations`](api_entities_Identity_IdentityAuthorizations.IdentityAuthorizations.md)

#### Defined in

[api/entities/Identity/index.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L97)

___

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Defined in

[api/entities/Identity/index.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L94)

___

### portfolios

• **portfolios**: [`Portfolios`](api_entities_Identity_Portfolios.Portfolios.md)

#### Defined in

[api/entities/Identity/index.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L98)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`<`boolean`\>

Check whether secondary Accounts are frozen

**`note`** can be subscribed to

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:594](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L594)

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

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

#### Defined in

[api/entities/Identity/index.ts:362](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L362)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Identity exists on chain

**`note`** asset Identities aren't considered to exist for the

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

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

#### Defined in

[api/entities/Identity/index.ts:320](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L320)

___

### getInstructions

▸ **getInstructions**(): `Promise`<[`GroupedInstructions`](../interfaces/types.GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant,
  grouped by status

#### Returns

`Promise`<[`GroupedInstructions`](../interfaces/types.GroupedInstructions.md)\>

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

#### Defined in

[api/entities/Identity/index.ts:631](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L631)

___

### getPendingInstructions

▸ **getPendingInstructions**(): `Promise`<[`Instruction`](api_entities_Instruction.Instruction.md)[]\>

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

#### Returns

`Promise`<[`Instruction`](api_entities_Instruction.Instruction.md)[]\>

#### Defined in

[api/entities/Identity/index.ts:541](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L541)

___

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

**`note`** can be subscribed to

#### Returns

`Promise`<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)\>

#### Defined in

[api/entities/Identity/index.ts:267](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L267)

▸ **getPrimaryAccount**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

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

#### Defined in

[api/entities/Identity/index.ts:686](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L686)

▸ **getSecondaryAccounts**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`PermissionedAccount`](../interfaces/types.PermissionedAccount.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:687](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L687)

___

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`<[`Asset`](api_entities_Asset.Asset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

**`note`** uses the middleware

#### Returns

`Promise`<[`Asset`](api_entities_Asset.Asset.md)[]\>

#### Defined in

[api/entities/Identity/index.ts:397](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L397)

___

### getVenues

▸ **getVenues**(): `Promise`<[`Venue`](api_entities_Venue.Venue.md)[]\>

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

#### Returns

`Promise`<[`Venue`](api_entities_Venue.Venue.md)[]\>

#### Defined in

[api/entities/Identity/index.ts:414](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L414)

▸ **getVenues**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`Venue`](api_entities_Venue.Venue.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

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

#### Defined in

[api/entities/Identity/index.ts:386](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L386)

___

### hasValidCdd

▸ **hasValidCdd**(): `Promise`<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:215](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L215)

___

### isCddProvider

▸ **isCddProvider**(): `Promise`<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`<`boolean`\>

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

[Entity](api_entities_Entity.Entity.md).[isEqual](api_entities_Entity.Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L61)

___

### isGcMember

▸ **isGcMember**(): `Promise`<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:231](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L231)

___

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/Identity/index.ts:774](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/index.ts#L774)

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

[Entity](api_entities_Entity.Entity.md).[generateUuid](api_entities_Entity.Entity.md#generateuuid)

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

[Entity](api_entities_Entity.Entity.md).[unserialize](api_entities_Entity.Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

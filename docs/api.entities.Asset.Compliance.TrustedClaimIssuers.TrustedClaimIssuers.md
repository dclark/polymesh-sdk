# Class: TrustedClaimIssuers

[api/entities/Asset/Compliance/TrustedClaimIssuers](../wiki/api.entities.Asset.Compliance.TrustedClaimIssuers).TrustedClaimIssuers

Handles all Asset Default Trusted Claim Issuers related functionality

## Hierarchy

- `Namespace`<[`Asset`](../wiki/api.entities.Asset.Asset)\>

  ↳ **`TrustedClaimIssuers`**

## Table of contents

### Methods

- [add](../wiki/api.entities.Asset.Compliance.TrustedClaimIssuers.TrustedClaimIssuers#add)
- [get](../wiki/api.entities.Asset.Compliance.TrustedClaimIssuers.TrustedClaimIssuers#get)
- [remove](../wiki/api.entities.Asset.Compliance.TrustedClaimIssuers.TrustedClaimIssuers#remove)
- [set](../wiki/api.entities.Asset.Compliance.TrustedClaimIssuers.TrustedClaimIssuers#set)

## Methods

### add

▸ **add**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Add the supplied Identities to the Asset's list of trusted claim issuers

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [add.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../wiki/api.procedures.types.ModifyAssetTrustedClaimIssuersAddSetParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L96)

___

### get

▸ **get**(): `Promise`<[`TrustedClaimIssuer`](../wiki/types.TrustedClaimIssuer)<``true``\>[]\>

Retrieve the current Default Trusted Claim Issuers of the Asset

**`note`** can be subscribed to

#### Returns

`Promise`<[`TrustedClaimIssuer`](../wiki/types.TrustedClaimIssuer)<``true``\>[]\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:115](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L115)

▸ **get**(`callback`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../wiki/types#subcallback)<[`TrustedClaimIssuer`](../wiki/types.TrustedClaimIssuer)<``true``\>[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L116)

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Remove the supplied Identities from the Asset's list of trusted claim issuers   *

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [remove.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersRemoveParams`](../wiki/api.procedures.types.ModifyAssetTrustedClaimIssuersRemoveParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:106](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L106)

___

### set

▸ **set**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Assign a new default list of trusted claim issuers to the Asset by replacing the existing ones with the list passed as a parameter

This requires two transactions

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [set.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../wiki/api.procedures.types.ModifyAssetTrustedClaimIssuersAddSetParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L86)

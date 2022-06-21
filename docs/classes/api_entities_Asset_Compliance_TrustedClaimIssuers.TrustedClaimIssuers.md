[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/Compliance/TrustedClaimIssuers](../modules/api_entities_Asset_Compliance_TrustedClaimIssuers.md) / TrustedClaimIssuers

# Class: TrustedClaimIssuers

[api/entities/Asset/Compliance/TrustedClaimIssuers](../modules/api_entities_Asset_Compliance_TrustedClaimIssuers.md).TrustedClaimIssuers

Handles all Asset Default Trusted Claim Issuers related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`TrustedClaimIssuers`**

## Table of contents

### Methods

- [add](api_entities_Asset_Compliance_TrustedClaimIssuers.TrustedClaimIssuers.md#add)
- [get](api_entities_Asset_Compliance_TrustedClaimIssuers.TrustedClaimIssuers.md#get)
- [remove](api_entities_Asset_Compliance_TrustedClaimIssuers.TrustedClaimIssuers.md#remove)
- [set](api_entities_Asset_Compliance_TrustedClaimIssuers.TrustedClaimIssuers.md#set)

## Methods

### add

▸ **add**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Add the supplied Identities to the Asset's list of trusted claim issuers

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [add.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../interfaces/api_procedures_modifyAssetTrustedClaimIssuers.ModifyAssetTrustedClaimIssuersAddSetParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L91)

___

### get

▸ **get**(): `Promise`<[`TrustedClaimIssuer`](../interfaces/types.TrustedClaimIssuer.md)<``true``\>[]\>

Retrieve the current Default Trusted Claim Issuers of the Asset

**`note`** can be subscribed to

#### Returns

`Promise`<[`TrustedClaimIssuer`](../interfaces/types.TrustedClaimIssuer.md)<``true``\>[]\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L110)

▸ **get**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`TrustedClaimIssuer`](../interfaces/types.TrustedClaimIssuer.md)<``true``\>[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L111)

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Remove the supplied Identities from the Asset's list of trusted claim issuers   *

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [remove.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersRemoveParams`](../interfaces/api_procedures_modifyAssetTrustedClaimIssuers.ModifyAssetTrustedClaimIssuersRemoveParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L101)

___

### set

▸ **set**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Assign a new default list of trusted claim issuers to the Asset by replacing the existing ones with the list passed as a parameter

This requires two transactions

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [set.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../interfaces/api_procedures_modifyAssetTrustedClaimIssuers.ModifyAssetTrustedClaimIssuersAddSetParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/TrustedClaimIssuers.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L81)

[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/client/Claims](../modules/api_client_Claims.md) / Claims

# Class: Claims

[api/client/Claims](../modules/api_client_Claims.md).Claims

Handles all Claims related functionality

## Table of contents

### Methods

- [addClaims](api_client_Claims.Claims.md#addclaims)
- [addInvestorUniquenessClaim](api_client_Claims.Claims.md#addinvestoruniquenessclaim)
- [editClaims](api_client_Claims.Claims.md#editclaims)
- [getCddClaims](api_client_Claims.Claims.md#getcddclaims)
- [getClaimScopes](api_client_Claims.Claims.md#getclaimscopes)
- [getIdentitiesWithClaims](api_client_Claims.Claims.md#getidentitieswithclaims)
- [getInvestorUniquenessClaims](api_client_Claims.Claims.md#getinvestoruniquenessclaims)
- [getIssuedClaims](api_client_Claims.Claims.md#getissuedclaims)
- [getTargetingClaims](api_client_Claims.Claims.md#gettargetingclaims)
- [revokeClaims](api_client_Claims.Claims.md#revokeclaims)

## Methods

### addClaims

▸ **addClaims**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Add claims to Identities

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [addClaims.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyClaimsParams`](../modules/api_procedures_modifyClaims.md#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/Claims.ts:126](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L126)

___

### addInvestorUniquenessClaim

▸ **addInvestorUniquenessClaim**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Add an Investor Uniqueness Claim to the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [addInvestorUniquenessClaim.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddInvestorUniquenessClaimParams`](../interfaces/api_procedures_addInvestorUniquenessClaim.AddInvestorUniquenessClaimParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/Claims.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L113)

___

### editClaims

▸ **editClaims**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Edit claims associated to Identities (only the expiry date can be modified)

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [editClaims.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyClaimsParams`](../modules/api_procedures_modifyClaims.md#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/Claims.ts:139](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L139)

___

### getCddClaims

▸ **getCddClaims**(`opts?`): `Promise`<[`ClaimData`](../interfaces/types.ClaimData.md)<[`CddClaim`](../interfaces/types.CddClaim.md)\>[]\>

Retrieve the list of CDD claims for a target Identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.target?` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ClaimData`](../interfaces/types.ClaimData.md)<[`CddClaim`](../interfaces/types.CddClaim.md)\>[]\>

#### Defined in

[api/client/Claims.ts:310](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L310)

___

### getClaimScopes

▸ **getClaimScopes**(`opts?`): `Promise`<[`ClaimScope`](../interfaces/types.ClaimScope.md)[]\>

Retrieve all scopes in which claims have been made for the target Identity.
  If the scope is an asset DID, the corresponding ticker is returned as well

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.target?` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | Identity for which to fetch claim scopes (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ClaimScope`](../interfaces/types.ClaimScope.md)[]\>

#### Defined in

[api/client/Claims.ts:260](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L260)

___

### getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**(`opts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`IdentityWithClaims`](../interfaces/types.IdentityWithClaims.md)\>\>

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.claimTypes?` | ([`Accredited`](../enums/types.ClaimType.md#accredited) \| [`Affiliate`](../enums/types.ClaimType.md#affiliate) \| [`BuyLockup`](../enums/types.ClaimType.md#buylockup) \| [`SellLockup`](../enums/types.ClaimType.md#selllockup) \| [`CustomerDueDiligence`](../enums/types.ClaimType.md#customerduediligence) \| [`KnowYourCustomer`](../enums/types.ClaimType.md#knowyourcustomer) \| [`Jurisdiction`](../enums/types.ClaimType.md#jurisdiction) \| [`Exempted`](../enums/types.ClaimType.md#exempted) \| [`Blocked`](../enums/types.ClaimType.md#blocked) \| [`InvestorUniqueness`](../enums/types.ClaimType.md#investoruniqueness) \| [`NoType`](../enums/types.ClaimType.md#notype) \| [`NoData`](../enums/types.ClaimType.md#nodata))[] | types of the claims to fetch. Defaults to any type |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.scope?` | [`Scope`](../interfaces/types.Scope.md) | scope of the claims to fetch. Defaults to any scope |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |
| `opts.targets?` | (`string` \| [`Identity`](api_entities_Identity.Identity.md))[] | Identities (or Identity IDs) for which to fetch claims (targets). Defaults to all targets |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](api_entities_Identity.Identity.md))[] | Identity IDs of claim issuers. Defaults to all claim issuers |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`IdentityWithClaims`](../interfaces/types.IdentityWithClaims.md)\>\>

#### Defined in

[api/client/Claims.ts:200](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L200)

___

### getInvestorUniquenessClaims

▸ **getInvestorUniquenessClaims**(`opts?`): `Promise`<[`ClaimData`](../interfaces/types.ClaimData.md)<[`InvestorUniquenessClaim`](../interfaces/types.InvestorUniquenessClaim.md)\>[]\>

Retrieve the list of InvestorUniqueness claims for a target Identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.target?` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ClaimData`](../interfaces/types.ClaimData.md)<[`InvestorUniquenessClaim`](../interfaces/types.InvestorUniquenessClaim.md)\>[]\>

#### Defined in

[api/client/Claims.ts:334](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L334)

___

### getIssuedClaims

▸ **getIssuedClaims**(`opts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`ClaimData`](../interfaces/types.ClaimData.md)<[`Claim`](../modules/types.md#claim)\>\>\>

Retrieve all claims issued by an Identity

**`note`** supports pagination

**`note`** uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.size?` | `BigNumber` | - |
| `opts.start?` | `BigNumber` | - |
| `opts.target?` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | Identity (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`ClaimData`](../interfaces/types.ClaimData.md)<[`Claim`](../modules/types.md#claim)\>\>\>

#### Defined in

[api/client/Claims.ts:165](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L165)

___

### getTargetingClaims

▸ **getTargetingClaims**(`opts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`IdentityWithClaims`](../interfaces/types.IdentityWithClaims.md)\>\>

Retrieve all claims issued about an Identity, grouped by claim issuer

**`note`** supports pagination

**`note`** uses the middleware (optional)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.scope?` | [`Scope`](../interfaces/types.Scope.md) | - |
| `opts.size?` | `BigNumber` | - |
| `opts.start?` | `BigNumber` | - |
| `opts.target?` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | Identity for which to fetch targeting claims (optional, defaults to the signing Identity) |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](api_entities_Identity.Identity.md))[] | - |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`IdentityWithClaims`](../interfaces/types.IdentityWithClaims.md)\>\>

#### Defined in

[api/client/Claims.ts:361](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L361)

___

### revokeClaims

▸ **revokeClaims**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Revoke claims from Identities

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [revokeClaims.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyClaimsParams`](../modules/api_procedures_modifyClaims.md#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/Claims.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Claims.ts#L152)

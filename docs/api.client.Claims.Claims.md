# Class: Claims

[api/client/Claims](../wiki/api.client.Claims).Claims

Handles all Claims related functionality

## Table of contents

### Methods

- [addClaims](../wiki/api.client.Claims.Claims#addclaims)
- [addInvestorUniquenessClaim](../wiki/api.client.Claims.Claims#addinvestoruniquenessclaim)
- [editClaims](../wiki/api.client.Claims.Claims#editclaims)
- [getCddClaims](../wiki/api.client.Claims.Claims#getcddclaims)
- [getClaimScopes](../wiki/api.client.Claims.Claims#getclaimscopes)
- [getIdentitiesWithClaims](../wiki/api.client.Claims.Claims#getidentitieswithclaims)
- [getInvestorUniquenessClaims](../wiki/api.client.Claims.Claims#getinvestoruniquenessclaims)
- [getIssuedClaims](../wiki/api.client.Claims.Claims#getissuedclaims)
- [getTargetingClaims](../wiki/api.client.Claims.Claims#gettargetingclaims)
- [revokeClaims](../wiki/api.client.Claims.Claims#revokeclaims)

## Methods

### addClaims

▸ **addClaims**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Add claims to Identities

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [addClaims.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyClaimsParams`](../wiki/api.procedures.types#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/Claims.ts:121](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L121)

___

### addInvestorUniquenessClaim

▸ **addInvestorUniquenessClaim**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Add an Investor Uniqueness Claim to the signing Identity

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [addInvestorUniquenessClaim.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddInvestorUniquenessClaimParams`](../wiki/api.procedures.types.AddInvestorUniquenessClaimParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/Claims.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L108)

___

### editClaims

▸ **editClaims**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Edit claims associated to Identities (only the expiry date can be modified)

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [editClaims.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyClaimsParams`](../wiki/api.procedures.types#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/Claims.ts:134](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L134)

___

### getCddClaims

▸ **getCddClaims**(`opts?`): `Promise`<[`ClaimData`](../wiki/types.ClaimData)<[`CddClaim`](../wiki/types.CddClaim)\>[]\>

Retrieve the list of CDD claims for a target Identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.target?` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ClaimData`](../wiki/types.ClaimData)<[`CddClaim`](../wiki/types.CddClaim)\>[]\>

#### Defined in

[api/client/Claims.ts:305](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L305)

___

### getClaimScopes

▸ **getClaimScopes**(`opts?`): `Promise`<[`ClaimScope`](../wiki/types.ClaimScope)[]\>

Retrieve all scopes in which claims have been made for the target Identity.
  If the scope is an asset DID, the corresponding ticker is returned as well

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.target?` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | Identity for which to fetch claim scopes (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ClaimScope`](../wiki/types.ClaimScope)[]\>

#### Defined in

[api/client/Claims.ts:255](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L255)

___

### getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**(`opts?`): `Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`IdentityWithClaims`](../wiki/types.IdentityWithClaims)\>\>

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.claimTypes?` | ([`Accredited`](../wiki/types.ClaimType#accredited) \| [`Affiliate`](../wiki/types.ClaimType#affiliate) \| [`BuyLockup`](../wiki/types.ClaimType#buylockup) \| [`SellLockup`](../wiki/types.ClaimType#selllockup) \| [`CustomerDueDiligence`](../wiki/types.ClaimType#customerduediligence) \| [`KnowYourCustomer`](../wiki/types.ClaimType#knowyourcustomer) \| [`Jurisdiction`](../wiki/types.ClaimType#jurisdiction) \| [`Exempted`](../wiki/types.ClaimType#exempted) \| [`Blocked`](../wiki/types.ClaimType#blocked) \| [`InvestorUniqueness`](../wiki/types.ClaimType#investoruniqueness) \| [`NoType`](../wiki/types.ClaimType#notype) \| [`NoData`](../wiki/types.ClaimType#nodata))[] | types of the claims to fetch. Defaults to any type |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.scope?` | [`Scope`](../wiki/types.Scope) | scope of the claims to fetch. Defaults to any scope |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |
| `opts.targets?` | (`string` \| [`Identity`](../wiki/api.entities.Identity.Identity))[] | Identities (or Identity IDs) for which to fetch claims (targets). Defaults to all targets |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../wiki/api.entities.Identity.Identity))[] | Identity IDs of claim issuers. Defaults to all claim issuers |

#### Returns

`Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`IdentityWithClaims`](../wiki/types.IdentityWithClaims)\>\>

#### Defined in

[api/client/Claims.ts:195](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L195)

___

### getInvestorUniquenessClaims

▸ **getInvestorUniquenessClaims**(`opts?`): `Promise`<[`ClaimData`](../wiki/types.ClaimData)<[`InvestorUniquenessClaim`](../wiki/types.InvestorUniquenessClaim)\>[]\>

Retrieve the list of InvestorUniqueness claims for a target Identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.target?` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ClaimData`](../wiki/types.ClaimData)<[`InvestorUniquenessClaim`](../wiki/types.InvestorUniquenessClaim)\>[]\>

#### Defined in

[api/client/Claims.ts:329](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L329)

___

### getIssuedClaims

▸ **getIssuedClaims**(`opts?`): `Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`ClaimData`](../wiki/types.ClaimData)<[`Claim`](../wiki/types#claim)\>\>\>

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
| `opts.target?` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | Identity (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`ClaimData`](../wiki/types.ClaimData)<[`Claim`](../wiki/types#claim)\>\>\>

#### Defined in

[api/client/Claims.ts:160](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L160)

___

### getTargetingClaims

▸ **getTargetingClaims**(`opts?`): `Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`IdentityWithClaims`](../wiki/types.IdentityWithClaims)\>\>

Retrieve all claims issued about an Identity, grouped by claim issuer

**`note`** supports pagination

**`note`** uses the middleware (optional)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.scope?` | [`Scope`](../wiki/types.Scope) | - |
| `opts.size?` | `BigNumber` | - |
| `opts.start?` | `BigNumber` | - |
| `opts.target?` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | Identity for which to fetch targeting claims (optional, defaults to the signing Identity) |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../wiki/api.entities.Identity.Identity))[] | - |

#### Returns

`Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`IdentityWithClaims`](../wiki/types.IdentityWithClaims)\>\>

#### Defined in

[api/client/Claims.ts:356](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L356)

___

### revokeClaims

▸ **revokeClaims**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Revoke claims from Identities

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [revokeClaims.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyClaimsParams`](../wiki/api.procedures.types#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/Claims.ts:147](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Claims.ts#L147)

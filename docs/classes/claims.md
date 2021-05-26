# Class: Claims

Handles all Claims related functionality

## Hierarchy

* **Claims**

## Index

### Properties

* [addClaims](claims.md#addclaims)
* [addInvestorUniquenessClaim](claims.md#addinvestoruniquenessclaim)
* [editClaims](claims.md#editclaims)
* [revokeClaims](claims.md#revokeclaims)

### Methods

* [getCddClaims](claims.md#getcddclaims)
* [getClaimScopes](claims.md#getclaimscopes)
* [getIdentitiesWithClaims](claims.md#getidentitieswithclaims)
* [getInvestorUniquenessClaims](claims.md#getinvestoruniquenessclaims)
* [getIssuedClaims](claims.md#getissuedclaims)
* [getTargetingClaims](claims.md#gettargetingclaims)

## Properties

###  addClaims

• **addClaims**: *ProcedureMethod‹Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"›, void›*

*Defined in [src/Claims.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L118)*

Add claims to Identities

**`param`** array of claims to be added

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

___

###  addInvestorUniquenessClaim

• **addInvestorUniquenessClaim**: *ProcedureMethod‹[AddInvestorUniquenessClaimParams](../interfaces/addinvestoruniquenessclaimparams.md), void›*

*Defined in [src/Claims.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L108)*

Add an Investor Uniqueness Claim to the current Identity

**`param`** 

___

###  editClaims

• **editClaims**: *ProcedureMethod‹Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"›, void›*

*Defined in [src/Claims.ts:129](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L129)*

Edit claims associated to Identities (only the expiry date can be modified)

**`param`** array of claims to be edited

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

___

###  revokeClaims

• **revokeClaims**: *ProcedureMethod‹Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"›, void›*

*Defined in [src/Claims.ts:139](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L139)*

Revoke claims from Identities

**`param`** array of claims to be revoked

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

## Methods

###  getCddClaims

▸ **getCddClaims**(`opts`: object): *Promise‹[ClaimData](../interfaces/claimdata.md)‹[CddClaim](../globals.md#cddclaim)›[]›*

*Defined in [src/Claims.ts:294](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L294)*

Retrieve the list of CDD claims for a target Identity

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`target?` | string &#124; [Identity](identity.md) | identity for which to fetch CDD claims (optional, defaults to the current Identity) |

**Returns:** *Promise‹[ClaimData](../interfaces/claimdata.md)‹[CddClaim](../globals.md#cddclaim)›[]›*

___

###  getClaimScopes

▸ **getClaimScopes**(`opts`: object): *Promise‹[ClaimScope](../interfaces/claimscope.md)[]›*

*Defined in [src/Claims.ts:244](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L244)*

Retrieve all scopes in which claims have been made for the target Identity.
  If the scope is an asset DID, the corresponding ticker is returned as well

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`target?` | string &#124; [Identity](identity.md) | identity for which to fetch claim scopes (optional, defaults to the current Identity)  |

**Returns:** *Promise‹[ClaimScope](../interfaces/claimscope.md)[]›*

___

###  getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

*Defined in [src/Claims.ts:185](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L185)*

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [Exclude](../enums/targettreatment.md#exclude)‹[ClaimType](../enums/claimtype.md), [InvestorUniquenessV2](../enums/claimtype.md#investoruniquenessv2)›[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`scope?` | [Scope](../interfaces/scope.md) | scope of the claims to fetch. Defaults to any scope |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | identities (or Identity IDs) for which to fetch claims (targets). Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

___

###  getInvestorUniquenessClaims

▸ **getInvestorUniquenessClaims**(`opts`: object): *Promise‹[ClaimData](../interfaces/claimdata.md)‹[InvestorUniquenessClaim](../globals.md#investoruniquenessclaim)›[]›*

*Defined in [src/Claims.ts:318](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L318)*

Retrieve the list of InvestorUniqueness claims for a target Identity

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`target?` | string &#124; [Identity](identity.md) | identity for which to fetch CDD claims (optional, defaults to the current Identity) |

**Returns:** *Promise‹[ClaimData](../interfaces/claimdata.md)‹[InvestorUniquenessClaim](../globals.md#investoruniquenessclaim)›[]›*

___

###  getIssuedClaims

▸ **getIssuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/Claims.ts:150](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L150)*

Retrieve all claims issued by an Identity

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`size?` | undefined &#124; number | - |
`start?` | undefined &#124; number | - |
`target?` | string &#124; [Identity](identity.md) | identity (optional, defaults to the current Identity) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  getTargetingClaims

▸ **getTargetingClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

*Defined in [src/Claims.ts:345](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Claims.ts#L345)*

Retrieve all claims issued about an Identity, grouped by claim issuer

**`note`** supports pagination

**`note`** uses the middleware (optional)

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`scope?` | [Scope](../interfaces/scope.md) | - |
`size?` | undefined &#124; number | - |
`start?` | undefined &#124; number | - |
`target?` | string &#124; [Identity](identity.md) | identity for which to fetch targeting claims (optional, defaults to the current Identity) |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | - |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

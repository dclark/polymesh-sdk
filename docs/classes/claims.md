# Claims

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

### addClaims

• **addClaims**: _ProcedureMethod‹Pick‹_[_ModifyClaimsParams_](../globals.md#modifyclaimsparams)_, "claims"›, void›_

_Defined in_ [_src/Claims.ts:112_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L112)

Add claims to Identities

**`param`** array of claims to be added

**`note`** required role if at least one claim is CDD type:

* Customer Due Diligence Provider

### addInvestorUniquenessClaim

• **addInvestorUniquenessClaim**: _ProcedureMethod‹_[_AddInvestorUniquenessClaimParams_](../interfaces/addinvestoruniquenessclaimparams.md)_, void›_

_Defined in_ [_src/Claims.ts:102_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L102)

Add an Investor Uniqueness Claim to the current Identity

**`param`**

### editClaims

• **editClaims**: _ProcedureMethod‹Pick‹_[_ModifyClaimsParams_](../globals.md#modifyclaimsparams)_, "claims"›, void›_

_Defined in_ [_src/Claims.ts:123_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L123)

Edit claims associated to Identities \(only the expiry date can be modified\)

**`param`** array of claims to be edited

**`note`** required role if at least one claim is CDD type:

* Customer Due Diligence Provider

### revokeClaims

• **revokeClaims**: _ProcedureMethod‹Pick‹_[_ModifyClaimsParams_](../globals.md#modifyclaimsparams)_, "claims"›, void›_

_Defined in_ [_src/Claims.ts:133_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L133)

Revoke claims from Identities

**`param`** array of claims to be revoked

**`note`** required role if at least one claim is CDD type:

* Customer Due Diligence Provider

## Methods

### getCddClaims

▸ **getCddClaims**\(`opts`: object\): _Promise‹_[_ClaimData_](../interfaces/claimdata.md)_‹_[_CddClaim_](../globals.md#cddclaim)_›\[\]›_

_Defined in_ [_src/Claims.ts:288_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L288)

Retrieve the list of CDD claims for a target Identity

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `includeExpired?` | undefined \| false \| true | whether to include expired claims. Defaults to true |
| `target?` | string \| [Identity](identity.md) | identity for which to fetch CDD claims \(optional, defaults to the current Identity\) |

**Returns:** _Promise‹_[_ClaimData_](../interfaces/claimdata.md)_‹_[_CddClaim_](../globals.md#cddclaim)_›\[\]›_

### getClaimScopes

▸ **getClaimScopes**\(`opts`: object\): _Promise‹_[_ClaimScope_](../interfaces/claimscope.md)_\[\]›_

_Defined in_ [_src/Claims.ts:238_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L238)

Retrieve all scopes in which claims have been made for the target Identity. If the scope is an asset DID, the corresponding ticker is returned as well

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `target?` | string \| [Identity](identity.md) | identity for which to fetch claim scopes \(optional, defaults to the current Identity\) |

**Returns:** _Promise‹_[_ClaimScope_](../interfaces/claimscope.md)_\[\]›_

### getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityWithClaims_](../interfaces/identitywithclaims.md)_››_

_Defined in_ [_src/Claims.ts:179_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L179)

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `claimTypes?` | [ClaimType](../enums/claimtype.md)\[\] | types of the claims to fetch. Defaults to any type |
| `includeExpired?` | undefined \| false \| true | whether to include expired claims. Defaults to true |
| `scope?` | [Scope](../interfaces/scope.md) | scope of the claims to fetch. Defaults to any scope |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |
| `targets?` | \(string \| [Identity](identity.md)‹›\)\[\] | identities \(or Identity IDs\) for which to fetch claims \(targets\). Defaults to all targets |
| `trustedClaimIssuers?` | \(string \| [Identity](identity.md)‹›\)\[\] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityWithClaims_](../interfaces/identitywithclaims.md)_››_

### getInvestorUniquenessClaims

▸ **getInvestorUniquenessClaims**\(`opts`: object\): _Promise‹_[_ClaimData_](../interfaces/claimdata.md)_‹_[_InvestorUniquenessClaim_](../globals.md#investoruniquenessclaim)_›\[\]›_

_Defined in_ [_src/Claims.ts:312_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L312)

Retrieve the list of InvestorUniqueness claims for a target Identity

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `includeExpired?` | undefined \| false \| true | whether to include expired claims. Defaults to true |
| `target?` | string \| [Identity](identity.md) | identity for which to fetch CDD claims \(optional, defaults to the current Identity\) |

**Returns:** _Promise‹_[_ClaimData_](../interfaces/claimdata.md)_‹_[_InvestorUniquenessClaim_](../globals.md#investoruniquenessclaim)_›\[\]›_

### getIssuedClaims

▸ **getIssuedClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

_Defined in_ [_src/Claims.ts:144_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L144)

Retrieve all claims issued by an Identity

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `includeExpired?` | undefined \| false \| true | whether to include expired claims. Defaults to true |
| `size?` | undefined \| number | - |
| `start?` | undefined \| number | - |
| `target?` | string \| [Identity](identity.md) | identity \(optional, defaults to the current Identity\) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

### getTargetingClaims

▸ **getTargetingClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityWithClaims_](../interfaces/identitywithclaims.md)_››_

_Defined in_ [_src/Claims.ts:339_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Claims.ts#L339)

Retrieve all claims issued about an Identity, grouped by claim issuer

**`note`** supports pagination

**`note`** uses the middleware \(optional\)

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `includeExpired?` | undefined \| false \| true | whether to include expired claims. Defaults to true |
| `scope?` | [Scope](../interfaces/scope.md) | - |
| `size?` | undefined \| number | - |
| `start?` | undefined \| number | - |
| `target?` | string \| [Identity](identity.md) | identity for which to fetch targeting claims \(optional, defaults to the current Identity\) |
| `trustedClaimIssuers?` | \(string \| [Identity](identity.md)‹›\)\[\] | - |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityWithClaims_](../interfaces/identitywithclaims.md)_››_


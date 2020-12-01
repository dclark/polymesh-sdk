# Claims

Handles all Claims related functionality

## Hierarchy

* **Claims**

## Index

### Methods

* [addClaims](claims.md#addclaims)
* [editClaims](claims.md#editclaims)
* [getCddClaims](claims.md#getcddclaims)
* [getClaimScopes](claims.md#getclaimscopes)
* [getIdentitiesWithClaims](claims.md#getidentitieswithclaims)
* [getIssuedClaims](claims.md#getissuedclaims)
* [getTargetingClaims](claims.md#gettargetingclaims)
* [revokeClaims](claims.md#revokeclaims)

## Methods

### addClaims

▸ **addClaims**\(`args`: Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"›\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Claims.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Claims.ts#L46)

Add claims to Identities

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"› |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### editClaims

▸ **editClaims**\(`args`: Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"›\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Claims.ts:55_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Claims.ts#L55)

Edit claims associated to Identities \(only the expiry date can be modified\)

* @param args.claims - array of claims to be edited

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"› |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### getCddClaims

▸ **getCddClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

_Defined in_ [_src/Claims.ts:217_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Claims.ts#L217)

Retrieve the list of CDD claims for a target Identity

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `includeExpired?` | undefined \| false \| true | whether to include expired claims. Defaults to true |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |
| `target?` | string \| [Identity](identity.md) | identity for which to fetch CDD claims \(optional, defaults to the current Identity\) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

### getClaimScopes

▸ **getClaimScopes**\(`opts`: object\): _Promise‹_[_ClaimScope_](../interfaces/claimscope.md)_\[\]›_

_Defined in_ [_src/Claims.ts:179_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Claims.ts#L179)

Retrieve all scopes in which claims have been made for the target Identity. If the scope is an asset DID, the corresponding ticker is returned as well

**`note`** a null scope means the Identity has scopeless claims \(like CDD for example\)

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `target?` | string \| [Identity](identity.md) | identity for which to fetch claim scopes \(optional, defaults to the current Identity\) |

**Returns:** _Promise‹_[_ClaimScope_](../interfaces/claimscope.md)_\[\]›_

### getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityWithClaims_](../interfaces/identitywithclaims.md)_››_

_Defined in_ [_src/Claims.ts:116_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Claims.ts#L116)

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

### getIssuedClaims

▸ **getIssuedClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

_Defined in_ [_src/Claims.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Claims.ts#L79)

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

_Defined in_ [_src/Claims.ts:250_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Claims.ts#L250)

Retrieve all claims issued about an Identity, grouped by claim issuer

**`note`** supports pagination

**`note`** uses the middleware

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

### revokeClaims

▸ **revokeClaims**\(`args`: Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"›\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Claims.ts:64_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Claims.ts#L64)

Revoke claims from Identities

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"› |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_


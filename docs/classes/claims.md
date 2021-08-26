# Claims

Handles all Claims related functionality

## Hierarchy

* **Claims**

## Index

### Methods

* [addClaims](claims.md#addclaims)
* [addInvestorUniquenessClaim](claims.md#addinvestoruniquenessclaim)
* [editClaims](claims.md#editclaims)
* [getCddClaims](claims.md#getcddclaims)
* [getClaimScopes](claims.md#getclaimscopes)
* [getIdentitiesWithClaims](claims.md#getidentitieswithclaims)
* [getInvestorUniquenessClaims](claims.md#getinvestoruniquenessclaims)
* [getIssuedClaims](claims.md#getissuedclaims)
* [getTargetingClaims](claims.md#gettargetingclaims)
* [revokeClaims](claims.md#revokeclaims)

## Methods

### addClaims

▸ **addClaims**\(`args`: Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Claims.ts:127_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L127)

Add claims to Identities

**`note`** required roles:

* Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addClaims.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"› |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### addInvestorUniquenessClaim

▸ **addInvestorUniquenessClaim**\(`args`: [AddInvestorUniquenessClaimParams](../interfaces/addinvestoruniquenessclaimparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Claims.ts:114_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L114)

Add an Investor Uniqueness Claim to the current Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addInvestorUniquenessClaim.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `args` | [AddInvestorUniquenessClaimParams](../interfaces/addinvestoruniquenessclaimparams.md) |  |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) | - |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### editClaims

▸ **editClaims**\(`args`: Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Claims.ts:140_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L140)

Edit claims associated to Identities \(only the expiry date can be modified\)

**`note`** required roles:

* Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `editClaims.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"› |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### getCddClaims

▸ **getCddClaims**\(`opts`: object\): _Promise‹_[_ClaimData_](../interfaces/claimdata.md)_‹_[_CddClaim_](../globals.md#cddclaim)_›\[\]›_

_Defined in_ [_src/Claims.ts:310_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L310)

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

_Defined in_ [_src/Claims.ts:260_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L260)

Retrieve all scopes in which claims have been made for the target Identity. If the scope is an asset DID, the corresponding ticker is returned as well

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `target?` | string \| [Identity](identity.md) | identity for which to fetch claim scopes \(optional, defaults to the current Identity\) |

**Returns:** _Promise‹_[_ClaimScope_](../interfaces/claimscope.md)_\[\]›_

### getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityWithClaims_](../interfaces/identitywithclaims.md)_››_

_Defined in_ [_src/Claims.ts:201_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L201)

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `claimTypes?` | [Exclude](../enums/targettreatment.md#exclude)‹[ClaimType](../enums/claimtype.md), [InvestorUniquenessV2](../enums/claimtype.md#investoruniquenessv2)›\[\] | types of the claims to fetch. Defaults to any type |
| `includeExpired?` | undefined \| false \| true | whether to include expired claims. Defaults to true |
| `scope?` | [Scope](../interfaces/scope.md) | scope of the claims to fetch. Defaults to any scope |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |
| `targets?` | \(string \| [Identity](identity.md)‹›\)\[\] | identities \(or Identity IDs\) for which to fetch claims \(targets\). Defaults to all targets |
| `trustedClaimIssuers?` | \(string \| [Identity](identity.md)‹›\)\[\] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityWithClaims_](../interfaces/identitywithclaims.md)_››_

### getInvestorUniquenessClaims

▸ **getInvestorUniquenessClaims**\(`opts`: object\): _Promise‹_[_ClaimData_](../interfaces/claimdata.md)_‹_[_InvestorUniquenessClaim_](../globals.md#investoruniquenessclaim)_›\[\]›_

_Defined in_ [_src/Claims.ts:334_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L334)

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

_Defined in_ [_src/Claims.ts:166_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L166)

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

_Defined in_ [_src/Claims.ts:361_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L361)

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

### revokeClaims

▸ **revokeClaims**\(`args`: Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Claims.ts:153_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/Claims.ts#L153)

Revoke claims from Identities

**`note`** required roles:

* Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `revokeClaims.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"› |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_


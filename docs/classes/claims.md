# Class: Claims

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

###  addClaims

▸ **addClaims**(`args`: Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"›): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Claims.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Claims.ts#L38)*

Add claims to Identities

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  editClaims

▸ **editClaims**(`args`: Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"›): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Claims.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Claims.ts#L47)*

Edit claims associated to Identities (only the expiry date can be modified)

* @param args.claims - array of claims to be edited

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  getCddClaims

▸ **getCddClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/Claims.ts:201](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Claims.ts#L201)*

Retrieve the list of CDD claims for a target Identity

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= { includeExpired: true }

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`target?` | string &#124; [Identity](identity.md) | identity for which to fetch CDD claims (optional, defaults to the current Identity) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  getClaimScopes

▸ **getClaimScopes**(`opts`: object): *Promise‹[ClaimScope](../interfaces/claimscope.md)[]›*

*Defined in [src/Claims.ts:163](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Claims.ts#L163)*

Retrieve all scopes in which claims have been made for the target Identity.
  If the scope is an asset DID, the corresponding ticker is returned as well

**`note`** a null scope means the Identity has scopeless claims (like CDD for example)

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`target?` | string &#124; [Identity](identity.md) | identity for which to fetch claim scopes (optional, defaults to the current Identity)  |

**Returns:** *Promise‹[ClaimScope](../interfaces/claimscope.md)[]›*

___

###  getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

*Defined in [src/Claims.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Claims.ts#L108)*

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= { includeExpired: true }

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [ClaimType](../enums/claimtype.md)[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`scope?` | undefined &#124; string | scope of the claims to fetch. Defaults to any scope |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | identities (or Identity IDs) for which to fetch claims (targets). Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

___

###  getIssuedClaims

▸ **getIssuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/Claims.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Claims.ts#L71)*

Retrieve all claims issued by an Identity

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= { includeExpired: true }

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

*Defined in [src/Claims.ts:234](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Claims.ts#L234)*

Retrieve all claims issued about an Identity, grouped by claim issuer

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= { includeExpired: true }

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`scope?` | undefined &#124; string | - |
`size?` | undefined &#124; number | - |
`start?` | undefined &#124; number | - |
`target?` | string &#124; [Identity](identity.md) | identity for which to fetch targeting claims (optional, defaults to the current Identity) |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | - |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

___

###  revokeClaims

▸ **revokeClaims**(`args`: Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"›): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Claims.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Claims.ts#L56)*

Revoke claims from Identities

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "operation"› |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

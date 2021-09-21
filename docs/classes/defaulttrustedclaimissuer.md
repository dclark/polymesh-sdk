# DefaultTrustedClaimIssuer

Represents a default trusted claim issuer for a specific token in the Polymesh blockchain

## Hierarchy

↳ [Identity](identity.md)

↳ **DefaultTrustedClaimIssuer**

## Index

### Properties

* [authorizations](defaulttrustedclaimissuer.md#authorizations)
* [context](defaulttrustedclaimissuer.md#protected-context)
* [did](defaulttrustedclaimissuer.md#did)
* [portfolios](defaulttrustedclaimissuer.md#portfolios)
* [ticker](defaulttrustedclaimissuer.md#ticker)
* [tokenPermissions](defaulttrustedclaimissuer.md#tokenpermissions)
* [trustedFor](defaulttrustedclaimissuer.md#optional-trustedfor)
* [uuid](defaulttrustedclaimissuer.md#uuid)

### Methods

* [addedAt](defaulttrustedclaimissuer.md#addedat)
* [areSecondaryKeysFrozen](defaulttrustedclaimissuer.md#aresecondarykeysfrozen)
* [createVenue](defaulttrustedclaimissuer.md#createvenue)
* [freezeSecondaryKeys](defaulttrustedclaimissuer.md#freezesecondarykeys)
* [getHeldTokens](defaulttrustedclaimissuer.md#getheldtokens)
* [getInstructions](defaulttrustedclaimissuer.md#getinstructions)
* [getPendingDistributions](defaulttrustedclaimissuer.md#getpendingdistributions)
* [getPendingInstructions](defaulttrustedclaimissuer.md#getpendinginstructions)
* [getPrimaryKey](defaulttrustedclaimissuer.md#getprimarykey)
* [getScopeId](defaulttrustedclaimissuer.md#getscopeid)
* [getSecondaryKeys](defaulttrustedclaimissuer.md#getsecondarykeys)
* [getTokenBalance](defaulttrustedclaimissuer.md#gettokenbalance)
* [getTrustingTokens](defaulttrustedclaimissuer.md#gettrustingtokens)
* [getVenues](defaulttrustedclaimissuer.md#getvenues)
* [hasRole](defaulttrustedclaimissuer.md#hasrole)
* [hasRoles](defaulttrustedclaimissuer.md#hasroles)
* [hasValidCdd](defaulttrustedclaimissuer.md#hasvalidcdd)
* [inviteAccount](defaulttrustedclaimissuer.md#inviteaccount)
* [isCddProvider](defaulttrustedclaimissuer.md#iscddprovider)
* [isEqual](defaulttrustedclaimissuer.md#isequal)
* [isGcMember](defaulttrustedclaimissuer.md#isgcmember)
* [modifyPermissions](defaulttrustedclaimissuer.md#modifypermissions)
* [removeSecondaryKeys](defaulttrustedclaimissuer.md#removesecondarykeys)
* [revokePermissions](defaulttrustedclaimissuer.md#revokepermissions)
* [toJson](defaulttrustedclaimissuer.md#tojson)
* [unfreezeSecondaryKeys](defaulttrustedclaimissuer.md#unfreezesecondarykeys)
* [generateUuid](defaulttrustedclaimissuer.md#static-generateuuid)
* [unserialize](defaulttrustedclaimissuer.md#static-unserialize)

## Properties

### authorizations

• **authorizations**: [_IdentityAuthorizations_](identityauthorizations.md)

_Inherited from_ [_Identity_](identity.md)_._[_authorizations_](identity.md#authorizations)

_Defined in_ [_src/api/entities/Identity/index.ts:108_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L108)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Inherited from_ [_Identity_](identity.md)_._[_did_](identity.md#did)

_Defined in_ [_src/api/entities/Identity/index.ts:105_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L105)

identity ID as stored in the blockchain

### portfolios

• **portfolios**: [_Portfolios_](portfolios.md)

_Inherited from_ [_Identity_](identity.md)_._[_portfolios_](identity.md#portfolios)

_Defined in_ [_src/api/entities/Identity/index.ts:109_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L109)

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/DefaultTrustedClaimIssuer.ts:40_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/DefaultTrustedClaimIssuer.ts#L40)

ticker of the Security Token

### tokenPermissions

• **tokenPermissions**: [_TokenPermissions_](tokenpermissions.md)

_Inherited from_ [_Identity_](identity.md)_._[_tokenPermissions_](identity.md#tokenpermissions)

_Defined in_ [_src/api/entities/Identity/index.ts:110_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L110)

### `Optional` trustedFor

• **trustedFor**? : [_ClaimType_](../enums/claimtype.md)_\[\]_

_Defined in_ [_src/api/entities/DefaultTrustedClaimIssuer.ts:35_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/DefaultTrustedClaimIssuer.ts#L35)

claim types for which this Claim Issuer is trusted. An undefined value means that the issuer is trusted for all claim types

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L46)

## Methods

### addedAt

▸ **addedAt**\(\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/DefaultTrustedClaimIssuer.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/DefaultTrustedClaimIssuer.ts#L60)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when the trusted claim issuer was added

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### areSecondaryKeysFrozen

▸ **areSecondaryKeysFrozen**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_areSecondaryKeysFrozen_](identity.md#aresecondarykeysfrozen)

_Defined in_ [_src/api/entities/Identity/index.ts:682_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L682)

Check whether secondary keys are frozen

**`note`** can be subscribed to

**Returns:** _Promise‹boolean›_

▸ **areSecondaryKeysFrozen**\(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_areSecondaryKeysFrozen_](identity.md#aresecondarykeysfrozen)

_Defined in_ [_src/api/entities/Identity/index.ts:683_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L683)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### createVenue

▸ **createVenue**\(`args`: [CreateVenueParams](../interfaces/createvenueparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Venue_](venue.md)_››_

_Inherited from_ [_Identity_](identity.md)_._[_createVenue_](identity.md#createvenue)

_Defined in_ [_src/api/entities/Identity/index.ts:224_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L224)

Create a Venue

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `createVenue.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [CreateVenueParams](../interfaces/createvenueparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Venue_](venue.md)_››_

### freezeSecondaryKeys

▸ **freezeSecondaryKeys**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Identity_](identity.md)_._[_freezeSecondaryKeys_](identity.md#freezesecondarykeys)

_Defined in_ [_src/api/entities/Identity/index.ts:234_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L234)

Freeze all the secondary keys in this Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the keys are unfrozen via [unfreezeSecondaryKeys](defaulttrustedclaimissuer.md#unfreezesecondarykeys)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freezeSecondaryKeys.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### getHeldTokens

▸ **getHeldTokens**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Inherited from_ [_Identity_](identity.md)_._[_getHeldTokens_](identity.md#getheldtokens)

_Defined in_ [_src/api/entities/Identity/index.ts:434_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L434)

Retrieve a list of all tokens which were held at one point by this Identity

**`note`** uses the middleware

**`note`** supports pagination

**Parameters:**

▪`Default value` **opts**: _object_= { order: Order.Asc }

| Name | Type |
| :--- | :--- |
| `order?` | Order |
| `size?` | undefined \| number |
| `start?` | undefined \| number |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### getInstructions

▸ **getInstructions**\(\): _Promise‹_[_GroupedInstructions_](../interfaces/groupedinstructions.md)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getInstructions_](identity.md#getinstructions)

_Defined in_ [_src/api/entities/Identity/index.ts:558_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L558)

Retrieve all Instructions where this Identity is a participant, grouped by status

**Returns:** _Promise‹_[_GroupedInstructions_](../interfaces/groupedinstructions.md)_›_

### getPendingDistributions

▸ **getPendingDistributions**\(\): _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_

_Inherited from_ [_Identity_](identity.md)_._[_getPendingDistributions_](identity.md#getpendingdistributions)

_Defined in_ [_src/api/entities/Identity/index.ts:718_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L718)

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Tokens this Identity has held

**Returns:** _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_

### getPendingInstructions

▸ **getPendingInstructions**\(\): _Promise‹_[_Instruction_](instruction.md)_\[\]›_

_Inherited from_ [_Identity_](identity.md)_._[_getPendingInstructions_](identity.md#getpendinginstructions)

_Defined in_ [_src/api/entities/Identity/index.ts:631_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L631)

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

**Returns:** _Promise‹_[_Instruction_](instruction.md)_\[\]›_

### getPrimaryKey

▸ **getPrimaryKey**\(\): _Promise‹string›_

_Inherited from_ [_Identity_](identity.md)_._[_getPrimaryKey_](identity.md#getprimarykey)

_Defined in_ [_src/api/entities/Identity/index.ts:399_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L399)

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **getPrimaryKey**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getPrimaryKey_](identity.md#getprimarykey)

_Defined in_ [_src/api/entities/Identity/index.ts:400_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L400)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getScopeId

▸ **getScopeId**\(`args`: object\): _Promise‹string›_

_Inherited from_ [_Identity_](identity.md)_._[_getScopeId_](identity.md#getscopeid)

_Defined in_ [_src/api/entities/Identity/index.ts:540_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L540)

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Security Token

**`note`** more on Investor Uniqueness: [https://developers.polymesh.live/confidential\_identity](https://developers.polymesh.live/confidential_identity)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `token` | [SecurityToken](securitytoken.md) \| string |

**Returns:** _Promise‹string›_

### getSecondaryKeys

▸ **getSecondaryKeys**\(\): _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

_Inherited from_ [_Identity_](identity.md)_._[_getSecondaryKeys_](identity.md#getsecondarykeys)

_Defined in_ [_src/api/entities/Identity/index.ts:770_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L770)

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

▸ **getSecondaryKeys**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getSecondaryKeys_](identity.md#getsecondarykeys)

_Defined in_ [_src/api/entities/Identity/index.ts:771_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L771)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTokenBalance

▸ **getTokenBalance**\(`args`: object\): _Promise‹BigNumber›_

_Inherited from_ [_Identity_](identity.md)_._[_getTokenBalance_](identity.md#gettokenbalance)

_Defined in_ [_src/api/entities/Identity/index.ts:299_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L299)

Retrieve the balance of a particular Security Token

**`note`** can be subscribed to

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

**Returns:** _Promise‹BigNumber›_

▸ **getTokenBalance**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getTokenBalance_](identity.md#gettokenbalance)

_Defined in_ [_src/api/entities/Identity/index.ts:300_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L300)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹BigNumber›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTrustingTokens

▸ **getTrustingTokens**\(`args`: object\): _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

_Inherited from_ [_Identity_](identity.md)_._[_getTrustingTokens_](identity.md#gettrustingtokens)

_Defined in_ [_src/api/entities/Identity/index.ts:485_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L485)

Get the list of tokens for which this Identity is a trusted claim issuer

**`note`** uses the middleware

**Parameters:**

▪`Default value` **args**: _object_= { order: Order.Asc }

| Name | Type |
| :--- | :--- |
| `order` | Order |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

### getVenues

▸ **getVenues**\(\): _Promise‹_[_Venue_](venue.md)_\[\]›_

_Inherited from_ [_Identity_](identity.md)_._[_getVenues_](identity.md#getvenues)

_Defined in_ [_src/api/entities/Identity/index.ts:506_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L506)

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Venue_](venue.md)_\[\]›_

▸ **getVenues**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getVenues_](identity.md#getvenues)

_Defined in_ [_src/api/entities/Identity/index.ts:507_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L507)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### hasRole

▸ **hasRole**\(`role`: [Role](../globals.md#role)\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasRole_](identity.md#hasrole)

_Defined in_ [_src/api/entities/Identity/index.ts:251_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L251)

Check whether this Identity possesses the specified Role

**Parameters:**

| Name | Type |
| :--- | :--- |
| `role` | [Role](../globals.md#role) |

**Returns:** _Promise‹boolean›_

### hasRoles

▸ **hasRoles**\(`roles`: [Role](../globals.md#role)\[\]\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasRoles_](identity.md#hasroles)

_Defined in_ [_src/api/entities/Identity/index.ts:474_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L474)

Check whether this Identity possesses all specified roles

**Parameters:**

| Name | Type |
| :--- | :--- |
| `roles` | [Role](../globals.md#role)\[\] |

**Returns:** _Promise‹boolean›_

### hasValidCdd

▸ **hasValidCdd**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasValidCdd_](identity.md#hasvalidcdd)

_Defined in_ [_src/api/entities/Identity/index.ts:347_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L347)

Check whether this Identity has a valid CDD claim

**Returns:** _Promise‹boolean›_

### inviteAccount

▸ **inviteAccount**\(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Identity_](identity.md)_._[_inviteAccount_](identity.md#inviteaccount)

_Defined in_ [_src/api/entities/Identity/index.ts:214_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L214)

Send an invitation to an Account to join this Identity

**`note`** this may create AuthorizationRequest which have to be accepted by the corresponding Account. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `inviteAccount.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [InviteAccountParams](../interfaces/inviteaccountparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### isCddProvider

▸ **isCddProvider**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_isCddProvider_](identity.md#iscddprovider)

_Defined in_ [_src/api/entities/Identity/index.ts:380_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L380)

Check whether this Identity is a CDD provider

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### isGcMember

▸ **isGcMember**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_isGcMember_](identity.md#isgcmember)

_Defined in_ [_src/api/entities/Identity/index.ts:363_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L363)

Check whether this Identity is Governance Committee member

**Returns:** _Promise‹boolean›_

### modifyPermissions

▸ **modifyPermissions**\(`args`: [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Identity_](identity.md)_._[_modifyPermissions_](identity.md#modifypermissions)

_Defined in_ [_src/api/entities/Identity/index.ts:200_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L200)

Modify all permissions of a list of secondary keys associated with the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyPermissions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### removeSecondaryKeys

▸ **removeSecondaryKeys**\(`args`: [RemoveSecondaryKeysParams](../interfaces/removesecondarykeysparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Identity_](identity.md)_._[_removeSecondaryKeys_](identity.md#removesecondarykeys)

_Defined in_ [_src/api/entities/Identity/index.ts:180_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L180)

Remove a list of secondary keys associated with the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeSecondaryKeys.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RemoveSecondaryKeysParams](../interfaces/removesecondarykeysparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### revokePermissions

▸ **revokePermissions**\(`args`: object, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Identity_](identity.md)_._[_revokePermissions_](identity.md#revokepermissions)

_Defined in_ [_src/api/entities/Identity/index.ts:190_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L190)

Revoke all permissions of a list of secondary keys associated with the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `revokePermissions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `secondaryKeys` | [Signer](../globals.md#signer)\[\] |

▪`Optional` **opts**: [_ProcedureOpts_](../interfaces/procedureopts.md)

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### toJson

▸ **toJson**\(\): _string_

_Inherited from_ [_Identity_](identity.md)_._[_toJson_](identity.md#tojson)

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/Identity/index.ts:805_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L805)

Return the Identity's DID

**Returns:** _string_

### unfreezeSecondaryKeys

▸ **unfreezeSecondaryKeys**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Identity_](identity.md)_._[_unfreezeSecondaryKeys_](identity.md#unfreezesecondarykeys)

_Defined in_ [_src/api/entities/Identity/index.ts:244_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L244)

Unfreeze all the secondary keys in this Identity. This will restore their permissions as they were before being frozen

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unfreezeSecondaryKeys.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


# CurrentIdentity

Represents the Identity associated to the current [Account](account.md)

## Hierarchy

↳ [Identity](identity.md)

↳ **CurrentIdentity**

## Index

### Constructors

* [constructor](currentidentity.md#constructor)

### Properties

* [authorizations](currentidentity.md#authorizations)
* [context](currentidentity.md#protected-context)
* [createVenue](currentidentity.md#createvenue)
* [did](currentidentity.md#did)
* [inviteAccount](currentidentity.md#inviteaccount)
* [modifyPermissions](currentidentity.md#modifypermissions)
* [portfolios](currentidentity.md#portfolios)
* [removeSecondaryKeys](currentidentity.md#removesecondarykeys)
* [revokePermissions](currentidentity.md#revokepermissions)
* [uuid](currentidentity.md#uuid)

### Methods

* [getHeldTokens](currentidentity.md#getheldtokens)
* [getPendingInstructions](currentidentity.md#getpendinginstructions)
* [getPrimaryKey](currentidentity.md#getprimarykey)
* [getScopeId](currentidentity.md#getscopeid)
* [getSecondaryKeys](currentidentity.md#getsecondarykeys)
* [getTokenBalance](currentidentity.md#gettokenbalance)
* [getTrustingTokens](currentidentity.md#gettrustingtokens)
* [getVenues](currentidentity.md#getvenues)
* [hasRole](currentidentity.md#hasrole)
* [hasRoles](currentidentity.md#hasroles)
* [hasValidCdd](currentidentity.md#hasvalidcdd)
* [isCddProvider](currentidentity.md#iscddprovider)
* [isGcMember](currentidentity.md#isgcmember)
* [generateUuid](currentidentity.md#static-generateuuid)
* [unserialize](currentidentity.md#static-unserialize)

## Constructors

### constructor

+ **new CurrentIdentity**\(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)\): [_CurrentIdentity_](currentidentity.md)

_Overrides_ [_Identity_](identity.md)_._[_constructor_](identity.md#constructor)

_Defined in_ [_src/api/entities/CurrentIdentity.ts:34_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/CurrentIdentity.ts#L34)

Create a CurrentIdentity entity

**Parameters:**

| Name | Type |
| :--- | :--- |
| `identifiers` | [UniqueIdentifiers](../interfaces/uniqueidentifiers.md) |
| `context` | [Context](context.md) |

**Returns:** [_CurrentIdentity_](currentidentity.md)

## Properties

### authorizations

• **authorizations**: [_IdentityAuthorizations_](identityauthorizations.md)

_Inherited from_ [_Identity_](identity.md)_._[_authorizations_](identity.md#authorizations)

_Defined in_ [_src/api/entities/Identity/index.ts:73_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L73)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L48)

### createVenue

• **createVenue**: _ProcedureMethod‹_[_CreateVenueParams_](../interfaces/createvenueparams.md)_,_ [_Venue_](venue.md)_›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:122_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/CurrentIdentity.ts#L122)

Create a Venue

### did

• **did**: _string_

_Inherited from_ [_Identity_](identity.md)_._[_did_](identity.md#did)

_Defined in_ [_src/api/entities/Identity/index.ts:70_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L70)

identity ID as stored in the blockchain

### inviteAccount

• **inviteAccount**: _ProcedureMethod‹_[_InviteAccountParams_](../interfaces/inviteaccountparams.md)_, void›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:117_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/CurrentIdentity.ts#L117)

Send an invitation to an Account to join this Identity

**`note`** this may create AuthorizationRequest which have to be accepted by the corresponding Account. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`param`** list of allowed permissions \(optional, defaults to no permissions\)

**`param`** array of Security Tokens \(or tickers\) for which to allow permission. Set null to allow all \(optional, no permissions if not passed\)

**`param`** array of tags associated with the transaction that will be executed for which to allow permission. Set null to allow all \(optional, no permissions if not passed\)

**`param`** array of portfolios for which to allow permission. Set null to allow all \(optional, no permissions if not passed\)

### modifyPermissions

• **modifyPermissions**: _ProcedureMethod‹_[_ModifySignerPermissionsParams_](../interfaces/modifysignerpermissionsparams.md)_, void›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:103_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/CurrentIdentity.ts#L103)

Modify all permissions of a list of secondary keys associated with the Identity

**`param`** list of permissions

**`param`** array of Security Tokens on which to grant permissions. A null value represents full permissions

**`param`** array of transaction tags that the Secondary Key has permission to execute. A null value represents full permissions

**`param`** array of Portfolios for which to grant permissions. A null value represents full permissions

### portfolios

• **portfolios**: [_Portfolios_](portfolios.md)

_Inherited from_ [_Identity_](identity.md)_._[_portfolios_](identity.md#portfolios)

_Defined in_ [_src/api/entities/Identity/index.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L74)

### removeSecondaryKeys

• **removeSecondaryKeys**: _ProcedureMethod‹_[_RemoveSecondaryKeysParams_](../interfaces/removesecondarykeysparams.md)_, void›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:88_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/CurrentIdentity.ts#L88)

Remove a list of secondary keys associated with the Identity

### revokePermissions

• **revokePermissions**: _ProcedureMethod‹object, void›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:93_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/CurrentIdentity.ts#L93)

Revoke all permissions of a list of secondary keys associated with the Identity

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L46)

## Methods

### getHeldTokens

▸ **getHeldTokens**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Inherited from_ [_Identity_](identity.md)_._[_getHeldTokens_](identity.md#getheldtokens)

_Defined in_ [_src/api/entities/Identity/index.ts:290_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L290)

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

### getPendingInstructions

▸ **getPendingInstructions**\(\): _Promise‹_[_Instruction_](instruction.md)_\[\]›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:127_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/CurrentIdentity.ts#L127)

Retrieve all pending Instructions involving the Current Identity

**Returns:** _Promise‹_[_Instruction_](instruction.md)_\[\]›_

### getPrimaryKey

▸ **getPrimaryKey**\(\): _Promise‹string›_

_Inherited from_ [_Identity_](identity.md)_._[_getPrimaryKey_](identity.md#getprimarykey)

_Defined in_ [_src/api/entities/Identity/index.ts:255_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L255)

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **getPrimaryKey**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getPrimaryKey_](identity.md#getprimarykey)

_Defined in_ [_src/api/entities/Identity/index.ts:256_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L256)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getScopeId

▸ **getScopeId**\(`args`: object\): _Promise‹string›_

_Inherited from_ [_Identity_](identity.md)_._[_getScopeId_](identity.md#getscopeid)

_Defined in_ [_src/api/entities/Identity/index.ts:396_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L396)

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

_Defined in_ [_src/api/entities/CurrentIdentity.ts:69_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/CurrentIdentity.ts#L69)

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

▸ **getSecondaryKeys**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:70_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/CurrentIdentity.ts#L70)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTokenBalance

▸ **getTokenBalance**\(`args`: object\): _Promise‹BigNumber›_

_Inherited from_ [_Identity_](identity.md)_._[_getTokenBalance_](identity.md#gettokenbalance)

_Defined in_ [_src/api/entities/Identity/index.ts:155_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L155)

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

_Defined in_ [_src/api/entities/Identity/index.ts:156_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L156)

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

_Defined in_ [_src/api/entities/Identity/index.ts:341_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L341)

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

_Defined in_ [_src/api/entities/Identity/index.ts:362_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L362)

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Venue_](venue.md)_\[\]›_

▸ **getVenues**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getVenues_](identity.md#getvenues)

_Defined in_ [_src/api/entities/Identity/index.ts:363_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L363)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### hasRole

▸ **hasRole**\(`role`: [Role](../globals.md#role)\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasRole_](identity.md#hasrole)

_Defined in_ [_src/api/entities/Identity/index.ts:92_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L92)

Check whether this Identity possesses the specified Role

**Parameters:**

| Name | Type |
| :--- | :--- |
| `role` | [Role](../globals.md#role) |

**Returns:** _Promise‹boolean›_

### hasRoles

▸ **hasRoles**\(`roles`: [Role](../globals.md#role)\[\]\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasRoles_](identity.md#hasroles)

_Defined in_ [_src/api/entities/Identity/index.ts:330_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L330)

Check whether this Identity possesses all specified roles

**Parameters:**

| Name | Type |
| :--- | :--- |
| `roles` | [Role](../globals.md#role)\[\] |

**Returns:** _Promise‹boolean›_

### hasValidCdd

▸ **hasValidCdd**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasValidCdd_](identity.md#hasvalidcdd)

_Defined in_ [_src/api/entities/Identity/index.ts:203_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L203)

Check whether this Identity has a valid CDD claim

**Returns:** _Promise‹boolean›_

### isCddProvider

▸ **isCddProvider**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_isCddProvider_](identity.md#iscddprovider)

_Defined in_ [_src/api/entities/Identity/index.ts:236_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L236)

Check whether this Identity is a CDD provider

**Returns:** _Promise‹boolean›_

### isGcMember

▸ **isGcMember**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_isGcMember_](identity.md#isgcmember)

_Defined in_ [_src/api/entities/Identity/index.ts:219_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L219)

Check whether this Identity is Governance Committee member

**Returns:** _Promise‹boolean›_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


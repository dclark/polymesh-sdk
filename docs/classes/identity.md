# Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹[UniqueIdentifiers](../interfaces/uniqueidentifiers.md), string›

  ↳ **Identity**

  ↳ [DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)

## Index

### Constructors

* [constructor](identity.md#constructor)

### Properties

* [authorizations](identity.md#authorizations)
* [context](identity.md#protected-context)
* [did](identity.md#did)
* [portfolios](identity.md#portfolios)
* [tokenPermissions](identity.md#tokenpermissions)
* [uuid](identity.md#uuid)

### Methods

* [areSecondaryKeysFrozen](identity.md#aresecondarykeysfrozen)
* [createVenue](identity.md#createvenue)
* [exists](identity.md#exists)
* [freezeSecondaryKeys](identity.md#freezesecondarykeys)
* [getHeldTokens](identity.md#getheldtokens)
* [getInstructions](identity.md#getinstructions)
* [getPendingDistributions](identity.md#getpendingdistributions)
* [getPendingInstructions](identity.md#getpendinginstructions)
* [getPrimaryKey](identity.md#getprimarykey)
* [getScopeId](identity.md#getscopeid)
* [getSecondaryKeys](identity.md#getsecondarykeys)
* [getTokenBalance](identity.md#gettokenbalance)
* [getTrustingTokens](identity.md#gettrustingtokens)
* [getVenues](identity.md#getvenues)
* [hasRole](identity.md#hasrole)
* [hasRoles](identity.md#hasroles)
* [hasValidCdd](identity.md#hasvalidcdd)
* [inviteAccount](identity.md#inviteaccount)
* [isCddProvider](identity.md#iscddprovider)
* [isEqual](identity.md#isequal)
* [isGcMember](identity.md#isgcmember)
* [modifyPermissions](identity.md#modifypermissions)
* [removeSecondaryKeys](identity.md#removesecondarykeys)
* [revokePermissions](identity.md#revokepermissions)
* [toJson](identity.md#tojson)
* [unfreezeSecondaryKeys](identity.md#unfreezesecondarykeys)
* [generateUuid](identity.md#static-generateuuid)
* [unserialize](identity.md#static-unserialize)

## Constructors

### constructor

+ **new Identity**\(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)\): [_Identity_](identity.md)

_Overrides void_

_Defined in_ [_src/api/entities/Identity/index.ts:111_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L111)

Create an Identity entity

**Parameters:**

| Name | Type |
| :--- | :--- |
| `identifiers` | [UniqueIdentifiers](../interfaces/uniqueidentifiers.md) |
| `context` | [Context](context.md) |

**Returns:** [_Identity_](identity.md)

## Properties

### authorizations

• **authorizations**: [_IdentityAuthorizations_](identityauthorizations.md)

_Defined in_ [_src/api/entities/Identity/index.ts:109_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L109)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Defined in_ [_src/api/entities/Identity/index.ts:106_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L106)

identity ID as stored in the blockchain

### portfolios

• **portfolios**: [_Portfolios_](portfolios.md)

_Defined in_ [_src/api/entities/Identity/index.ts:110_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L110)

### tokenPermissions

• **tokenPermissions**: [_TokenPermissions_](tokenpermissions.md)

_Defined in_ [_src/api/entities/Identity/index.ts:111_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L111)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L46)

## Methods

### areSecondaryKeysFrozen

▸ **areSecondaryKeysFrozen**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:683_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L683)

Check whether secondary keys are frozen

**`note`** can be subscribed to

**Returns:** _Promise‹boolean›_

▸ **areSecondaryKeysFrozen**\(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:684_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L684)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### createVenue

▸ **createVenue**\(`args`: [CreateVenueParams](../interfaces/createvenueparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Venue_](venue.md)_››_

_Defined in_ [_src/api/entities/Identity/index.ts:225_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L225)

Create a Venue

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `createVenue.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [CreateVenueParams](../interfaces/createvenueparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Venue_](venue.md)_››_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Overrides_ [_Entity_](entity.md)_._[_exists_](entity.md#abstract-exists)

_Defined in_ [_src/api/entities/Identity/index.ts:806_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L806)

Determine whether this Identity exists on chain

**Returns:** _Promise‹boolean›_

### freezeSecondaryKeys

▸ **freezeSecondaryKeys**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Identity/index.ts:235_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L235)

Freeze all the secondary keys in this Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the keys are unfrozen via [unfreezeSecondaryKeys](identity.md#unfreezesecondarykeys)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freezeSecondaryKeys.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### getHeldTokens

▸ **getHeldTokens**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/Identity/index.ts:435_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L435)

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

_Defined in_ [_src/api/entities/Identity/index.ts:559_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L559)

Retrieve all Instructions where this Identity is a participant, grouped by status

**Returns:** _Promise‹_[_GroupedInstructions_](../interfaces/groupedinstructions.md)_›_

### getPendingDistributions

▸ **getPendingDistributions**\(\): _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_

_Defined in_ [_src/api/entities/Identity/index.ts:719_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L719)

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Tokens this Identity has held

**Returns:** _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_

### getPendingInstructions

▸ **getPendingInstructions**\(\): _Promise‹_[_Instruction_](instruction.md)_\[\]›_

_Defined in_ [_src/api/entities/Identity/index.ts:632_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L632)

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

**Returns:** _Promise‹_[_Instruction_](instruction.md)_\[\]›_

### getPrimaryKey

▸ **getPrimaryKey**\(\): _Promise‹_[_Account_](account.md)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:400_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L400)

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Account_](account.md)_›_

▸ **getPrimaryKey**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Account](account.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:401_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L401)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Account](account.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getScopeId

▸ **getScopeId**\(`args`: object\): _Promise‹string›_

_Defined in_ [_src/api/entities/Identity/index.ts:541_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L541)

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

_Defined in_ [_src/api/entities/Identity/index.ts:771_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L771)

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

▸ **getSecondaryKeys**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:772_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L772)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTokenBalance

▸ **getTokenBalance**\(`args`: object\): _Promise‹BigNumber›_

_Defined in_ [_src/api/entities/Identity/index.ts:300_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L300)

Retrieve the balance of a particular Security Token

**`note`** can be subscribed to

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

**Returns:** _Promise‹BigNumber›_

▸ **getTokenBalance**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:301_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L301)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹BigNumber›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTrustingTokens

▸ **getTrustingTokens**\(`args`: object\): _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

_Defined in_ [_src/api/entities/Identity/index.ts:486_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L486)

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

_Defined in_ [_src/api/entities/Identity/index.ts:507_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L507)

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Venue_](venue.md)_\[\]›_

▸ **getVenues**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:508_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L508)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### hasRole

▸ **hasRole**\(`role`: [Role](../globals.md#role)\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:252_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L252)

Check whether this Identity possesses the specified Role

**Parameters:**

| Name | Type |
| :--- | :--- |
| `role` | [Role](../globals.md#role) |

**Returns:** _Promise‹boolean›_

### hasRoles

▸ **hasRoles**\(`roles`: [Role](../globals.md#role)\[\]\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:475_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L475)

Check whether this Identity possesses all specified roles

**Parameters:**

| Name | Type |
| :--- | :--- |
| `roles` | [Role](../globals.md#role)\[\] |

**Returns:** _Promise‹boolean›_

### hasValidCdd

▸ **hasValidCdd**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:348_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L348)

Check whether this Identity has a valid CDD claim

**Returns:** _Promise‹boolean›_

### inviteAccount

▸ **inviteAccount**\(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Identity/index.ts:215_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L215)

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

_Defined in_ [_src/api/entities/Identity/index.ts:381_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L381)

Check whether this Identity is a CDD provider

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### isGcMember

▸ **isGcMember**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:364_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L364)

Check whether this Identity is Governance Committee member

**Returns:** _Promise‹boolean›_

### modifyPermissions

▸ **modifyPermissions**\(`args`: [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Identity/index.ts:201_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L201)

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

_Defined in_ [_src/api/entities/Identity/index.ts:181_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L181)

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

_Defined in_ [_src/api/entities/Identity/index.ts:191_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L191)

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

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/Identity/index.ts:819_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L819)

Return the Identity's DID

**Returns:** _string_

### unfreezeSecondaryKeys

▸ **unfreezeSecondaryKeys**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Identity/index.ts:245_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/index.ts#L245)

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

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


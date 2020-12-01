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
* [did](currentidentity.md#did)
* [portfolios](currentidentity.md#portfolios)
* [uuid](currentidentity.md#uuid)

### Methods

* [createVenue](currentidentity.md#createvenue)
* [getHeldTokens](currentidentity.md#getheldtokens)
* [getPendingInstructions](currentidentity.md#getpendinginstructions)
* [getPrimaryKey](currentidentity.md#getprimarykey)
* [getSecondaryKeys](currentidentity.md#getsecondarykeys)
* [getTokenBalance](currentidentity.md#gettokenbalance)
* [getTrustingTokens](currentidentity.md#gettrustingtokens)
* [getVenues](currentidentity.md#getvenues)
* [hasRole](currentidentity.md#hasrole)
* [hasRoles](currentidentity.md#hasroles)
* [hasValidCdd](currentidentity.md#hasvalidcdd)
* [inviteAccount](currentidentity.md#inviteaccount)
* [isCddProvider](currentidentity.md#iscddprovider)
* [isGcMember](currentidentity.md#isgcmember)
* [removeSecondaryKeys](currentidentity.md#removesecondarykeys)
* [generateUuid](currentidentity.md#static-generateuuid)
* [unserialize](currentidentity.md#static-unserialize)

## Constructors

### constructor

+ **new CurrentIdentity**\(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)\): [_CurrentIdentity_](currentidentity.md)

_Inherited from_ [_Identity_](identity.md)_._[_constructor_](identity.md#constructor)

_Overrides void_

_Defined in_ [_src/api/entities/Identity/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L72)

Create an Identity entity

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

_Defined in_ [_src/api/entities/Identity/index.ts:71_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L71)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Inherited from_ [_Identity_](identity.md)_._[_did_](identity.md#did)

_Defined in_ [_src/api/entities/Identity/index.ts:68_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L68)

identity ID as stored in the blockchain

### portfolios

• **portfolios**: [_Portfolios_](portfolios.md)

_Inherited from_ [_Identity_](identity.md)_._[_portfolios_](identity.md#portfolios)

_Defined in_ [_src/api/entities/Identity/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L72)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L46)

## Methods

### createVenue

▸ **createVenue**\(`args`: [CreateVenueParams](../interfaces/createvenueparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Venue_](venue.md)_››_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:69_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L69)

Create a Venue

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [CreateVenueParams](../interfaces/createvenueparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Venue_](venue.md)_››_

### getHeldTokens

▸ **getHeldTokens**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Inherited from_ [_Identity_](identity.md)_._[_getHeldTokens_](identity.md#getheldtokens)

_Defined in_ [_src/api/entities/Identity/index.ts:286_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L286)

Retrieve a list of all tokens which were held at one point by this Identity

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

_Defined in_ [_src/api/entities/CurrentIdentity.ts:76_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L76)

Retrieve all pending Instructions involving the Current Identity

**Returns:** _Promise‹_[_Instruction_](instruction.md)_\[\]›_

### getPrimaryKey

▸ **getPrimaryKey**\(\): _Promise‹string›_

_Inherited from_ [_Identity_](identity.md)_._[_getPrimaryKey_](identity.md#getprimarykey)

_Defined in_ [_src/api/entities/Identity/index.ts:252_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L252)

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **getPrimaryKey**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getPrimaryKey_](identity.md#getprimarykey)

_Defined in_ [_src/api/entities/Identity/index.ts:253_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L253)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getSecondaryKeys

▸ **getSecondaryKeys**\(\): _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:32_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L32)

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

▸ **getSecondaryKeys**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:33_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L33)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTokenBalance

▸ **getTokenBalance**\(`args`: object\): _Promise‹BigNumber›_

_Inherited from_ [_Identity_](identity.md)_._[_getTokenBalance_](identity.md#gettokenbalance)

_Defined in_ [_src/api/entities/Identity/index.ts:151_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L151)

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

_Defined in_ [_src/api/entities/Identity/index.ts:152_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L152)

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

_Defined in_ [_src/api/entities/Identity/index.ts:337_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L337)

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

_Defined in_ [_src/api/entities/Identity/index.ts:358_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L358)

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Venue_](venue.md)_\[\]›_

▸ **getVenues**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getVenues_](identity.md#getvenues)

_Defined in_ [_src/api/entities/Identity/index.ts:359_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L359)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### hasRole

▸ **hasRole**\(`role`: [Role](../globals.md#role)\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasRole_](identity.md#hasrole)

_Defined in_ [_src/api/entities/Identity/index.ts:90_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L90)

Check whether this Identity possesses the specified Role

**Parameters:**

| Name | Type |
| :--- | :--- |
| `role` | [Role](../globals.md#role) |

**Returns:** _Promise‹boolean›_

### hasRoles

▸ **hasRoles**\(`roles`: [Role](../globals.md#role)\[\]\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasRoles_](identity.md#hasroles)

_Defined in_ [_src/api/entities/Identity/index.ts:326_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L326)

Check whether this Identity possesses all specified roles

**Parameters:**

| Name | Type |
| :--- | :--- |
| `roles` | [Role](../globals.md#role)\[\] |

**Returns:** _Promise‹boolean›_

### hasValidCdd

▸ **hasValidCdd**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasValidCdd_](identity.md#hasvalidcdd)

_Defined in_ [_src/api/entities/Identity/index.ts:199_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L199)

Check whether this Identity has a valid CDD claim

**Returns:** _Promise‹boolean›_

### inviteAccount

▸ **inviteAccount**\(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:62_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L62)

Send an invitation to an Account to join to your Identity

**`note`** this may create AuthorizationRequest which have to be accepted by the corresponding Account. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [InviteAccountParams](../interfaces/inviteaccountparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### isCddProvider

▸ **isCddProvider**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_isCddProvider_](identity.md#iscddprovider)

_Defined in_ [_src/api/entities/Identity/index.ts:233_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L233)

Check whether this Identity is a CDD provider

**Returns:** _Promise‹boolean›_

### isGcMember

▸ **isGcMember**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_isGcMember_](identity.md#isgcmember)

_Defined in_ [_src/api/entities/Identity/index.ts:216_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L216)

Check whether this Identity is Governance Committee member

**Returns:** _Promise‹boolean›_

### removeSecondaryKeys

▸ **removeSecondaryKeys**\(`args`: object\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:51_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L51)

Remove a list of secondary keys associated with the Identity

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `signers` | [Signer](../globals.md#signer)\[\] |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


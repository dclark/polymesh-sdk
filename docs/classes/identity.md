# Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹[UniqueIdentifiers](../interfaces/uniqueidentifiers.md)›

  ↳ **Identity**

  ↳ [CurrentIdentity](currentidentity.md)

## Index

### Constructors

* [constructor](identity.md#constructor)

### Properties

* [authorizations](identity.md#authorizations)
* [context](identity.md#protected-context)
* [did](identity.md#did)
* [portfolios](identity.md#portfolios)
* [uuid](identity.md#uuid)

### Methods

* [getHeldTokens](identity.md#getheldtokens)
* [getPrimaryKey](identity.md#getprimarykey)
* [getScopeId](identity.md#getscopeid)
* [getTokenBalance](identity.md#gettokenbalance)
* [getTrustingTokens](identity.md#gettrustingtokens)
* [getVenues](identity.md#getvenues)
* [hasRole](identity.md#hasrole)
* [hasRoles](identity.md#hasroles)
* [hasValidCdd](identity.md#hasvalidcdd)
* [isCddProvider](identity.md#iscddprovider)
* [isGcMember](identity.md#isgcmember)
* [generateUuid](identity.md#static-generateuuid)
* [unserialize](identity.md#static-unserialize)

## Constructors

### constructor

+ **new Identity**\(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)\): [_Identity_](identity.md)

_Overrides void_

_Defined in_ [_src/api/entities/Identity/index.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L74)

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

_Defined in_ [_src/api/entities/Identity/index.ts:73_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L73)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Defined in_ [_src/api/entities/Identity/index.ts:70_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L70)

identity ID as stored in the blockchain

### portfolios

• **portfolios**: [_Portfolios_](portfolios.md)

_Defined in_ [_src/api/entities/Identity/index.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L74)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L46)

## Methods

### getHeldTokens

▸ **getHeldTokens**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_SecurityToken_](securitytoken.md)_››_

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

### getPrimaryKey

▸ **getPrimaryKey**\(\): _Promise‹string›_

_Defined in_ [_src/api/entities/Identity/index.ts:255_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L255)

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **getPrimaryKey**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:256_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L256)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getScopeId

▸ **getScopeId**\(`args`: object\): _Promise‹string›_

_Defined in_ [_src/api/entities/Identity/index.ts:396_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L396)

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Security Token

**`note`** more on Investor Uniqueness: [https://developers.polymesh.live/confidential\_identity](https://developers.polymesh.live/confidential_identity)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `token` | [SecurityToken](securitytoken.md) \| string |

**Returns:** _Promise‹string›_

### getTokenBalance

▸ **getTokenBalance**\(`args`: object\): _Promise‹BigNumber›_

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

_Defined in_ [_src/api/entities/Identity/index.ts:362_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L362)

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Venue_](venue.md)_\[\]›_

▸ **getVenues**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:363_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L363)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### hasRole

▸ **hasRole**\(`role`: [Role](../globals.md#role)\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:92_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L92)

Check whether this Identity possesses the specified Role

**Parameters:**

| Name | Type |
| :--- | :--- |
| `role` | [Role](../globals.md#role) |

**Returns:** _Promise‹boolean›_

### hasRoles

▸ **hasRoles**\(`roles`: [Role](../globals.md#role)\[\]\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:330_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L330)

Check whether this Identity possesses all specified roles

**Parameters:**

| Name | Type |
| :--- | :--- |
| `roles` | [Role](../globals.md#role)\[\] |

**Returns:** _Promise‹boolean›_

### hasValidCdd

▸ **hasValidCdd**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:203_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L203)

Check whether this Identity has a valid CDD claim

**Returns:** _Promise‹boolean›_

### isCddProvider

▸ **isCddProvider**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:236_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/index.ts#L236)

Check whether this Identity is a CDD provider

**Returns:** _Promise‹boolean›_

### isGcMember

▸ **isGcMember**\(\): _Promise‹boolean›_

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


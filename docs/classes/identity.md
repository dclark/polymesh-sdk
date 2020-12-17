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

_Defined in_ [_src/api/entities/Identity/index.ts:73_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L73)

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

_Defined in_ [_src/api/entities/Identity/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L72)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Defined in_ [_src/api/entities/Identity/index.ts:69_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L69)

identity ID as stored in the blockchain

### portfolios

• **portfolios**: [_Portfolios_](portfolios.md)

_Defined in_ [_src/api/entities/Identity/index.ts:73_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L73)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L46)

## Methods

### getHeldTokens

▸ **getHeldTokens**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/Identity/index.ts:287_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L287)

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

### getPrimaryKey

▸ **getPrimaryKey**\(\): _Promise‹string›_

_Defined in_ [_src/api/entities/Identity/index.ts:253_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L253)

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **getPrimaryKey**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:254_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L254)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTokenBalance

▸ **getTokenBalance**\(`args`: object\): _Promise‹BigNumber›_

_Defined in_ [_src/api/entities/Identity/index.ts:152_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L152)

Retrieve the balance of a particular Security Token

**`note`** can be subscribed to

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

**Returns:** _Promise‹BigNumber›_

▸ **getTokenBalance**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:153_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L153)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹BigNumber›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTrustingTokens

▸ **getTrustingTokens**\(`args`: object\): _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

_Defined in_ [_src/api/entities/Identity/index.ts:338_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L338)

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

_Defined in_ [_src/api/entities/Identity/index.ts:359_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L359)

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Venue_](venue.md)_\[\]›_

▸ **getVenues**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:360_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L360)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### hasRole

▸ **hasRole**\(`role`: [Role](../globals.md#role)\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:91_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L91)

Check whether this Identity possesses the specified Role

**Parameters:**

| Name | Type |
| :--- | :--- |
| `role` | [Role](../globals.md#role) |

**Returns:** _Promise‹boolean›_

### hasRoles

▸ **hasRoles**\(`roles`: [Role](../globals.md#role)\[\]\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:327_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L327)

Check whether this Identity possesses all specified roles

**Parameters:**

| Name | Type |
| :--- | :--- |
| `roles` | [Role](../globals.md#role)\[\] |

**Returns:** _Promise‹boolean›_

### hasValidCdd

▸ **hasValidCdd**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:200_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L200)

Check whether this Identity has a valid CDD claim

**Returns:** _Promise‹boolean›_

### isCddProvider

▸ **isCddProvider**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:234_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L234)

Check whether this Identity is a CDD provider

**Returns:** _Promise‹boolean›_

### isGcMember

▸ **isGcMember**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:217_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Identity/index.ts#L217)

Check whether this Identity is Governance Committee member

**Returns:** _Promise‹boolean›_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


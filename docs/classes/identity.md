# Class: Identity

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

###  constructor

\+ **new Identity**(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)): *[Identity](identity.md)*

*Overrides void*

*Defined in [src/api/entities/Identity/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L72)*

Create an Identity entity

**Parameters:**

Name | Type |
------ | ------ |
`identifiers` | [UniqueIdentifiers](../interfaces/uniqueidentifiers.md) |
`context` | [Context](context.md) |

**Returns:** *[Identity](identity.md)*

## Properties

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Defined in [src/api/entities/Identity/index.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L71)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/Identity/index.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L68)*

identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Defined in [src/api/entities/Identity/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L72)*

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L46)*

## Methods

###  getHeldTokens

▸ **getHeldTokens**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/Identity/index.ts:286](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L286)*

Retrieve a list of all tokens which were held at one point by this Identity

**`note`** supports pagination

**Parameters:**

▪`Default value`  **opts**: *object*= { order: Order.Asc }

Name | Type |
------ | ------ |
`order?` | Order |
`size?` | undefined &#124; number |
`start?` | undefined &#124; number |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

___

###  getPrimaryKey

▸ **getPrimaryKey**(): *Promise‹string›*

*Defined in [src/api/entities/Identity/index.ts:252](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L252)*

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **getPrimaryKey**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:253](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L253)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTokenBalance

▸ **getTokenBalance**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/api/entities/Identity/index.ts:151](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L151)*

Retrieve the balance of a particular Security Token

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹BigNumber›*

▸ **getTokenBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L152)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹BigNumber›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTrustingTokens

▸ **getTrustingTokens**(`args`: object): *Promise‹[SecurityToken](securitytoken.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:337](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L337)*

Get the list of tokens for which this Identity is a trusted claim issuer

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **args**: *object*= { order: Order.Asc }

Name | Type |
------ | ------ |
`order` | Order |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)[]›*

___

###  getVenues

▸ **getVenues**(): *Promise‹[Venue](venue.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:358](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L358)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:359](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L359)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:90](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L90)*

Check whether this Identity possesses the specified Role

**Parameters:**

Name | Type |
------ | ------ |
`role` | [Role](../globals.md#role) |

**Returns:** *Promise‹boolean›*

___

###  hasRoles

▸ **hasRoles**(`roles`: [Role](../globals.md#role)[]): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:326](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L326)*

Check whether this Identity possesses all specified roles

**Parameters:**

Name | Type |
------ | ------ |
`roles` | [Role](../globals.md#role)[] |

**Returns:** *Promise‹boolean›*

___

###  hasValidCdd

▸ **hasValidCdd**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:199](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L199)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:233](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L233)*

Check whether this Identity is a CDD provider

**Returns:** *Promise‹boolean›*

___

###  isGcMember

▸ **isGcMember**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:216](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L216)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

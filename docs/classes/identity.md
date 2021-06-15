# Class: Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

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

* [areSecondaryKeysFrozen](identity.md#aresecondarykeysfrozen)
* [getHeldTokens](identity.md#getheldtokens)
* [getPendingDistributions](identity.md#getpendingdistributions)
* [getPendingInstructions](identity.md#getpendinginstructions)
* [getPrimaryKey](identity.md#getprimarykey)
* [getScopeId](identity.md#getscopeid)
* [getTokenBalance](identity.md#gettokenbalance)
* [getTrustingTokens](identity.md#gettrustingtokens)
* [getVenues](identity.md#getvenues)
* [hasRole](identity.md#hasrole)
* [hasRoles](identity.md#hasroles)
* [hasValidCdd](identity.md#hasvalidcdd)
* [isCddProvider](identity.md#iscddprovider)
* [isEqual](identity.md#isequal)
* [isGcMember](identity.md#isgcmember)
* [generateUuid](identity.md#static-generateuuid)
* [unserialize](identity.md#static-unserialize)

## Constructors

###  constructor

\+ **new Identity**(`identifiers`: UniqueIdentifiers, `context`: [Context](context.md)): *[Identity](identity.md)*

*Overrides void*

*Defined in [src/api/entities/Identity/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L86)*

Create an Identity entity

**Parameters:**

Name | Type |
------ | ------ |
`identifiers` | UniqueIdentifiers |
`context` | [Context](context.md) |

**Returns:** *[Identity](identity.md)*

## Properties

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Defined in [src/api/entities/Identity/index.ts:85](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L85)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/Identity/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L82)*

identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Defined in [src/api/entities/Identity/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L86)*

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)*

## Methods

###  areSecondaryKeysFrozen

▸ **areSecondaryKeysFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:483](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L483)*

Check whether secondary keys are frozen

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **areSecondaryKeysFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:484](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L484)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getHeldTokens

▸ **getHeldTokens**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/Identity/index.ts:309](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L309)*

Retrieve a list of all tokens which were held at one point by this Identity

**`note`** uses the middleware

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

###  getPendingDistributions

▸ **getPendingDistributions**(): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:519](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L519)*

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Tokens this Identity has held

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:432](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L432)*

Retrieve all pending Instructions involving this Identity

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPrimaryKey

▸ **getPrimaryKey**(): *Promise‹string›*

*Defined in [src/api/entities/Identity/index.ts:274](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L274)*

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **getPrimaryKey**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:275](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L275)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getScopeId

▸ **getScopeId**(`args`: object): *Promise‹string›*

*Defined in [src/api/entities/Identity/index.ts:415](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L415)*

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Security Token

**`note`** more on Investor Uniqueness: https://developers.polymesh.live/confidential_identity

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`token` | [SecurityToken](securitytoken.md) &#124; string |

**Returns:** *Promise‹string›*

___

###  getTokenBalance

▸ **getTokenBalance**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/api/entities/Identity/index.ts:174](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L174)*

Retrieve the balance of a particular Security Token

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹BigNumber›*

▸ **getTokenBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:175](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L175)*

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

*Defined in [src/api/entities/Identity/index.ts:360](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L360)*

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

*Defined in [src/api/entities/Identity/index.ts:381](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L381)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:382](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L382)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L104)*

Check whether this Identity possesses the specified Role

**Parameters:**

Name | Type |
------ | ------ |
`role` | [Role](../globals.md#role) |

**Returns:** *Promise‹boolean›*

___

###  hasRoles

▸ **hasRoles**(`roles`: [Role](../globals.md#role)[]): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:349](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L349)*

Check whether this Identity possesses all specified roles

**Parameters:**

Name | Type |
------ | ------ |
`roles` | [Role](../globals.md#role)[] |

**Returns:** *Promise‹boolean›*

___

###  hasValidCdd

▸ **hasValidCdd**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:222](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L222)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:255](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L255)*

Check whether this Identity is a CDD provider

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown› |

**Returns:** *boolean*

___

###  isGcMember

▸ **isGcMember**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:238](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L238)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

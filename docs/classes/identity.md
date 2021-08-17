# Class: Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹[UniqueIdentifiers](../interfaces/uniqueidentifiers.md), string›

  ↳ **Identity**

  ↳ [CurrentIdentity](currentidentity.md)

  ↳ [DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)

  ↳ [Agent](agent.md)

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
* [hasTokenPermissions](identity.md#hastokenpermissions)
* [hasValidCdd](identity.md#hasvalidcdd)
* [isCddProvider](identity.md#iscddprovider)
* [isEqual](identity.md#isequal)
* [isGcMember](identity.md#isgcmember)
* [toJson](identity.md#tojson)
* [generateUuid](identity.md#static-generateuuid)
* [unserialize](identity.md#static-unserialize)

## Constructors

###  constructor

\+ **new Identity**(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)): *[Identity](identity.md)*

*Overrides void*

*Defined in [src/api/entities/Identity/index.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L97)*

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

*Defined in [src/api/entities/Identity/index.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L96)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/Identity/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L93)*

identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Defined in [src/api/entities/Identity/index.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L97)*

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L46)*

## Methods

###  areSecondaryKeysFrozen

▸ **areSecondaryKeysFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:667](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L667)*

Check whether secondary keys are frozen

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **areSecondaryKeysFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:668](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L668)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getHeldTokens

▸ **getHeldTokens**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/Identity/index.ts:419](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L419)*

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

###  getInstructions

▸ **getInstructions**(): *Promise‹[GroupedInstructions](../interfaces/groupedinstructions.md)›*

*Defined in [src/api/entities/Identity/index.ts:543](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L543)*

Retrieve all Instructions where this Identity is a participant,
  grouped by status

**Returns:** *Promise‹[GroupedInstructions](../interfaces/groupedinstructions.md)›*

___

###  getPendingDistributions

▸ **getPendingDistributions**(): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:703](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L703)*

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Tokens this Identity has held

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:616](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L616)*

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPrimaryKey

▸ **getPrimaryKey**(): *Promise‹string›*

*Defined in [src/api/entities/Identity/index.ts:384](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L384)*

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **getPrimaryKey**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:385](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L385)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getScopeId

▸ **getScopeId**(`args`: object): *Promise‹string›*

*Defined in [src/api/entities/Identity/index.ts:525](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L525)*

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Security Token

**`note`** more on Investor Uniqueness: https://developers.polymesh.live/confidential_identity

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`token` | [SecurityToken](securitytoken.md) &#124; string |

**Returns:** *Promise‹string›*

___

###  getSecondaryKeys

▸ **getSecondaryKeys**(): *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:755](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L755)*

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:756](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L756)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTokenBalance

▸ **getTokenBalance**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/api/entities/Identity/index.ts:284](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L284)*

Retrieve the balance of a particular Security Token

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹BigNumber›*

▸ **getTokenBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:285](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L285)*

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

*Defined in [src/api/entities/Identity/index.ts:470](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L470)*

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

*Defined in [src/api/entities/Identity/index.ts:491](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L491)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:492](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L492)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:238](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L238)*

Check whether this Identity possesses the specified Role

**Parameters:**

Name | Type |
------ | ------ |
`role` | [Role](../globals.md#role) |

**Returns:** *Promise‹boolean›*

___

###  hasRoles

▸ **hasRoles**(`roles`: [Role](../globals.md#role)[]): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:459](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L459)*

Check whether this Identity possesses all specified roles

**Parameters:**

Name | Type |
------ | ------ |
`roles` | [Role](../globals.md#role)[] |

**Returns:** *Promise‹boolean›*

___

###  hasTokenPermissions

▸ **hasTokenPermissions**(`args`: object): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:115](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L115)*

Check whether this Identity has specific transaction Permissions over a Security Token

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`token` | [SecurityToken](securitytoken.md) &#124; string |
`transactions` | TxTag[] &#124; null |

**Returns:** *Promise‹boolean›*

___

###  hasValidCdd

▸ **hasValidCdd**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:332](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L332)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:365](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L365)*

Check whether this Identity is a CDD provider

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [Entity](entity.md).[isEqual](entity.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  isGcMember

▸ **isGcMember**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:348](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L348)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

###  toJson

▸ **toJson**(): *string*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Identity/index.ts:790](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L790)*

Return the Identity's DID

**Returns:** *string*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L14)*

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

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

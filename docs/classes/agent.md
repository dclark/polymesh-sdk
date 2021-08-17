# Class: Agent

Represents an agent for a Security Token

## Hierarchy

  ↳ [Identity](identity.md)

  ↳ **Agent**

## Index

### Properties

* [authorizations](agent.md#authorizations)
* [context](agent.md#protected-context)
* [did](agent.md#did)
* [portfolios](agent.md#portfolios)
* [ticker](agent.md#ticker)
* [uuid](agent.md#uuid)

### Methods

* [areSecondaryKeysFrozen](agent.md#aresecondarykeysfrozen)
* [getHeldTokens](agent.md#getheldtokens)
* [getInstructions](agent.md#getinstructions)
* [getPendingDistributions](agent.md#getpendingdistributions)
* [getPendingInstructions](agent.md#getpendinginstructions)
* [getPermissionGroup](agent.md#getpermissiongroup)
* [getPrimaryKey](agent.md#getprimarykey)
* [getScopeId](agent.md#getscopeid)
* [getSecondaryKeys](agent.md#getsecondarykeys)
* [getTokenBalance](agent.md#gettokenbalance)
* [getTrustingTokens](agent.md#gettrustingtokens)
* [getVenues](agent.md#getvenues)
* [hasRole](agent.md#hasrole)
* [hasRoles](agent.md#hasroles)
* [hasTokenPermissions](agent.md#hastokenpermissions)
* [hasValidCdd](agent.md#hasvalidcdd)
* [isCddProvider](agent.md#iscddprovider)
* [isEqual](agent.md#isequal)
* [isGcMember](agent.md#isgcmember)
* [toJson](agent.md#tojson)
* [generateUuid](agent.md#static-generateuuid)
* [unserialize](agent.md#static-unserialize)

## Properties

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Inherited from [Identity](identity.md).[authorizations](identity.md#authorizations)*

*Defined in [src/api/entities/Identity/index.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L96)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Inherited from [Identity](identity.md).[did](identity.md#did)*

*Defined in [src/api/entities/Identity/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L93)*

identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Inherited from [Identity](identity.md).[portfolios](identity.md#portfolios)*

*Defined in [src/api/entities/Identity/index.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L97)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/Agent.ts:37](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Agent.ts#L37)*

ticker of the Security Token

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L46)*

## Methods

###  areSecondaryKeysFrozen

▸ **areSecondaryKeysFrozen**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[areSecondaryKeysFrozen](identity.md#aresecondarykeysfrozen)*

*Defined in [src/api/entities/Identity/index.ts:667](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L667)*

Check whether secondary keys are frozen

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **areSecondaryKeysFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[areSecondaryKeysFrozen](identity.md#aresecondarykeysfrozen)*

*Defined in [src/api/entities/Identity/index.ts:668](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L668)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getHeldTokens

▸ **getHeldTokens**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

*Inherited from [Identity](identity.md).[getHeldTokens](identity.md#getheldtokens)*

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

*Inherited from [Identity](identity.md).[getInstructions](identity.md#getinstructions)*

*Defined in [src/api/entities/Identity/index.ts:543](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L543)*

Retrieve all Instructions where this Identity is a participant,
  grouped by status

**Returns:** *Promise‹[GroupedInstructions](../interfaces/groupedinstructions.md)›*

___

###  getPendingDistributions

▸ **getPendingDistributions**(): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

*Inherited from [Identity](identity.md).[getPendingDistributions](identity.md#getpendingdistributions)*

*Defined in [src/api/entities/Identity/index.ts:703](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L703)*

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Tokens this Identity has held

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Inherited from [Identity](identity.md).[getPendingInstructions](identity.md#getpendinginstructions)*

*Defined in [src/api/entities/Identity/index.ts:616](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L616)*

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPermissionGroup

▸ **getPermissionGroup**(): *Promise‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)›*

*Defined in [src/api/entities/Agent.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Agent.ts#L53)*

Retrieve the agent group associated with this Agent

**Returns:** *Promise‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)›*

___

###  getPrimaryKey

▸ **getPrimaryKey**(): *Promise‹string›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:384](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L384)*

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **getPrimaryKey**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:385](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L385)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getScopeId

▸ **getScopeId**(`args`: object): *Promise‹string›*

*Inherited from [Identity](identity.md).[getScopeId](identity.md#getscopeid)*

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

*Inherited from [Identity](identity.md).[getSecondaryKeys](identity.md#getsecondarykeys)*

*Defined in [src/api/entities/Identity/index.ts:755](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L755)*

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getSecondaryKeys](identity.md#getsecondarykeys)*

*Defined in [src/api/entities/Identity/index.ts:756](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L756)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTokenBalance

▸ **getTokenBalance**(`args`: object): *Promise‹BigNumber›*

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

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

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

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

*Inherited from [Identity](identity.md).[getTrustingTokens](identity.md#gettrustingtokens)*

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

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:491](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L491)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:492](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L492)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasRole](identity.md#hasrole)*

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

*Inherited from [Identity](identity.md).[hasRoles](identity.md#hasroles)*

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

*Inherited from [Identity](identity.md).[hasTokenPermissions](identity.md#hastokenpermissions)*

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

*Inherited from [Identity](identity.md).[hasValidCdd](identity.md#hasvalidcdd)*

*Defined in [src/api/entities/Identity/index.ts:332](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L332)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isCddProvider](identity.md#iscddprovider)*

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

*Inherited from [Identity](identity.md).[isGcMember](identity.md#isgcmember)*

*Defined in [src/api/entities/Identity/index.ts:348](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L348)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

###  toJson

▸ **toJson**(): *string*

*Inherited from [Identity](identity.md).[toJson](identity.md#tojson)*

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

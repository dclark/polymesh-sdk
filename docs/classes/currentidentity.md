# Class: CurrentIdentity

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

###  constructor

\+ **new CurrentIdentity**(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)): *[CurrentIdentity](currentidentity.md)*

*Inherited from [Identity](identity.md).[constructor](identity.md#constructor)*

*Overrides void*

*Defined in [src/api/entities/Identity/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L72)*

Create an Identity entity

**Parameters:**

Name | Type |
------ | ------ |
`identifiers` | [UniqueIdentifiers](../interfaces/uniqueidentifiers.md) |
`context` | [Context](context.md) |

**Returns:** *[CurrentIdentity](currentidentity.md)*

## Properties

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Inherited from [Identity](identity.md).[authorizations](identity.md#authorizations)*

*Defined in [src/api/entities/Identity/index.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L71)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Inherited from [Identity](identity.md).[did](identity.md#did)*

*Defined in [src/api/entities/Identity/index.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L68)*

identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Inherited from [Identity](identity.md).[portfolios](identity.md#portfolios)*

*Defined in [src/api/entities/Identity/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L72)*

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L46)*

## Methods

###  createVenue

▸ **createVenue**(`args`: [CreateVenueParams](../interfaces/createvenueparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Venue](venue.md)››*

*Defined in [src/api/entities/CurrentIdentity.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L69)*

Create a Venue

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateVenueParams](../interfaces/createvenueparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Venue](venue.md)››*

___

###  getHeldTokens

▸ **getHeldTokens**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

*Inherited from [Identity](identity.md).[getHeldTokens](identity.md#getheldtokens)*

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

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/CurrentIdentity.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L76)*

Retrieve all pending Instructions involving the Current Identity

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPrimaryKey

▸ **getPrimaryKey**(): *Promise‹string›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:252](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L252)*

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **getPrimaryKey**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:253](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L253)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getSecondaryKeys

▸ **getSecondaryKeys**(): *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

*Defined in [src/api/entities/CurrentIdentity.ts:32](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L32)*

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/CurrentIdentity.ts:33](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTokenBalance

▸ **getTokenBalance**(`args`: object): *Promise‹BigNumber›*

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

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

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

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

*Inherited from [Identity](identity.md).[getTrustingTokens](identity.md#gettrustingtokens)*

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

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:358](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L358)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:359](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L359)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasRole](identity.md#hasrole)*

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

*Inherited from [Identity](identity.md).[hasRoles](identity.md#hasroles)*

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

*Inherited from [Identity](identity.md).[hasValidCdd](identity.md#hasvalidcdd)*

*Defined in [src/api/entities/Identity/index.ts:199](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L199)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  inviteAccount

▸ **inviteAccount**(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L62)*

Send an invitation to an Account to join to your Identity

**`note`** this may create AuthorizationRequest which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

Name | Type |
------ | ------ |
`args` | [InviteAccountParams](../interfaces/inviteaccountparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isCddProvider](identity.md#iscddprovider)*

*Defined in [src/api/entities/Identity/index.ts:233](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L233)*

Check whether this Identity is a CDD provider

**Returns:** *Promise‹boolean›*

___

###  isGcMember

▸ **isGcMember**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isGcMember](identity.md#isgcmember)*

*Defined in [src/api/entities/Identity/index.ts:216](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/index.ts#L216)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

###  removeSecondaryKeys

▸ **removeSecondaryKeys**(`args`: object): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/CurrentIdentity.ts#L51)*

Remove a list of secondary keys associated with the Identity

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`signers` | [Signer](../globals.md#signer)[] |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

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

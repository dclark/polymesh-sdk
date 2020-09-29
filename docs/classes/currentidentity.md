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
* [uuid](currentidentity.md#uuid)

### Methods

* [getHeldTokens](currentidentity.md#getheldtokens)
* [getMasterKey](currentidentity.md#getmasterkey)
* [getSigningKeys](currentidentity.md#getsigningkeys)
* [getTokenBalance](currentidentity.md#gettokenbalance)
* [getTrustingTokens](currentidentity.md#gettrustingtokens)
* [hasRole](currentidentity.md#hasrole)
* [hasRoles](currentidentity.md#hasroles)
* [hasValidCdd](currentidentity.md#hasvalidcdd)
* [inviteAccount](currentidentity.md#inviteaccount)
* [isCddProvider](currentidentity.md#iscddprovider)
* [isGcMember](currentidentity.md#isgcmember)
* [removeSigningKeys](currentidentity.md#removesigningkeys)
* [generateUuid](currentidentity.md#static-generateuuid)
* [unserialize](currentidentity.md#static-unserialize)

## Constructors

###  constructor

\+ **new CurrentIdentity**(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)): *[CurrentIdentity](currentidentity.md)*

*Inherited from [Identity](identity.md).[constructor](identity.md#constructor)*

*Overrides void*

*Defined in [src/api/entities/Identity/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L60)*

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

*Defined in [src/api/entities/Identity/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L60)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Inherited from [Identity](identity.md).[did](identity.md#did)*

*Defined in [src/api/entities/Identity/index.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L57)*

identity ID as stored in the blockchain

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L46)*

## Methods

###  getHeldTokens

▸ **getHeldTokens**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

*Inherited from [Identity](identity.md).[getHeldTokens](identity.md#getheldtokens)*

*Defined in [src/api/entities/Identity/index.ts:253](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L253)*

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

###  getMasterKey

▸ **getMasterKey**(): *Promise‹string›*

*Inherited from [Identity](identity.md).[getMasterKey](identity.md#getmasterkey)*

*Defined in [src/api/entities/Identity/index.ts:219](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L219)*

Retrieve the master key associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **getMasterKey**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getMasterKey](identity.md#getmasterkey)*

*Defined in [src/api/entities/Identity/index.ts:220](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L220)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getSigningKeys

▸ **getSigningKeys**(): *Promise‹[SigningKey](../interfaces/signingkey.md)[]›*

*Defined in [src/api/entities/CurrentIdentity.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/CurrentIdentity.ts#L15)*

Get the list of signing keys related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[SigningKey](../interfaces/signingkey.md)[]›*

▸ **getSigningKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SigningKey](../interfaces/signingkey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/CurrentIdentity.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/CurrentIdentity.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SigningKey](../interfaces/signingkey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTokenBalance

▸ **getTokenBalance**(`args`: object): *Promise‹BigNumber›*

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

*Defined in [src/api/entities/Identity/index.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L118)*

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

*Defined in [src/api/entities/Identity/index.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L119)*

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

*Defined in [src/api/entities/Identity/index.ts:304](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L304)*

Get the list of tokens for which this Identity is a trusted claim issuer

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **args**: *object*= { order: Order.Asc }

Name | Type |
------ | ------ |
`order` | Order |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)[]›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasRole](identity.md#hasrole)*

*Defined in [src/api/entities/Identity/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L77)*

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

*Defined in [src/api/entities/Identity/index.ts:293](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L293)*

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

*Defined in [src/api/entities/Identity/index.ts:166](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L166)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  inviteAccount

▸ **inviteAccount**(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/CurrentIdentity.ts#L45)*

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

*Defined in [src/api/entities/Identity/index.ts:200](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L200)*

Check whether this Identity is a CDD provider

**Returns:** *Promise‹boolean›*

___

###  isGcMember

▸ **isGcMember**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isGcMember](identity.md#isgcmember)*

*Defined in [src/api/entities/Identity/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L183)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

###  removeSigningKeys

▸ **removeSigningKeys**(`args`: object): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:34](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/CurrentIdentity.ts#L34)*

Remove a list of signing keys associated with the Identity

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

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

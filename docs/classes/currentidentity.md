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

### constructor

+ **new CurrentIdentity**\(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)\): [_CurrentIdentity_](currentidentity.md)

_Inherited from_ [_Identity_](identity.md)_._[_constructor_](identity.md#constructor)

_Overrides void_

_Defined in_ [_src/api/entities/Identity/index.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L60)

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

_Defined in_ [_src/api/entities/Identity/index.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L60)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Inherited from_ [_Identity_](identity.md)_._[_did_](identity.md#did)

_Defined in_ [_src/api/entities/Identity/index.ts:57_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L57)

identity ID as stored in the blockchain

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L46)

## Methods

### getHeldTokens

▸ **getHeldTokens**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Inherited from_ [_Identity_](identity.md)_._[_getHeldTokens_](identity.md#getheldtokens)

_Defined in_ [_src/api/entities/Identity/index.ts:253_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L253)

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

### getMasterKey

▸ **getMasterKey**\(\): _Promise‹string›_

_Inherited from_ [_Identity_](identity.md)_._[_getMasterKey_](identity.md#getmasterkey)

_Defined in_ [_src/api/entities/Identity/index.ts:219_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L219)

Retrieve the master key associated with the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **getMasterKey**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Identity_](identity.md)_._[_getMasterKey_](identity.md#getmasterkey)

_Defined in_ [_src/api/entities/Identity/index.ts:220_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L220)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getSigningKeys

▸ **getSigningKeys**\(\): _Promise‹_[_SigningKey_](../interfaces/signingkey.md)_\[\]›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:15_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/CurrentIdentity.ts#L15)

Get the list of signing keys related to the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SigningKey_](../interfaces/signingkey.md)_\[\]›_

▸ **getSigningKeys**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SigningKey](../interfaces/signingkey.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:16_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/CurrentIdentity.ts#L16)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SigningKey](../interfaces/signingkey.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTokenBalance

▸ **getTokenBalance**\(`args`: object\): _Promise‹BigNumber›_

_Inherited from_ [_Identity_](identity.md)_._[_getTokenBalance_](identity.md#gettokenbalance)

_Defined in_ [_src/api/entities/Identity/index.ts:118_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L118)

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

_Defined in_ [_src/api/entities/Identity/index.ts:119_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L119)

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

_Defined in_ [_src/api/entities/Identity/index.ts:304_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L304)

Get the list of tokens for which this Identity is a trusted claim issuer

**`note`** uses the middleware

**Parameters:**

▪`Default value` **args**: _object_= { order: Order.Asc }

| Name | Type |
| :--- | :--- |
| `order` | Order |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

### hasRole

▸ **hasRole**\(`role`: [Role](../globals.md#role)\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasRole_](identity.md#hasrole)

_Defined in_ [_src/api/entities/Identity/index.ts:77_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L77)

Check whether this Identity possesses the specified Role

**Parameters:**

| Name | Type |
| :--- | :--- |
| `role` | [Role](../globals.md#role) |

**Returns:** _Promise‹boolean›_

### hasRoles

▸ **hasRoles**\(`roles`: [Role](../globals.md#role)\[\]\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasRoles_](identity.md#hasroles)

_Defined in_ [_src/api/entities/Identity/index.ts:293_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L293)

Check whether this Identity possesses all specified roles

**Parameters:**

| Name | Type |
| :--- | :--- |
| `roles` | [Role](../globals.md#role)\[\] |

**Returns:** _Promise‹boolean›_

### hasValidCdd

▸ **hasValidCdd**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_hasValidCdd_](identity.md#hasvalidcdd)

_Defined in_ [_src/api/entities/Identity/index.ts:166_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L166)

Check whether this Identity has a valid CDD claim

**Returns:** _Promise‹boolean›_

### inviteAccount

▸ **inviteAccount**\(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/CurrentIdentity.ts#L45)

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

_Defined in_ [_src/api/entities/Identity/index.ts:200_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L200)

Check whether this Identity is a CDD provider

**Returns:** _Promise‹boolean›_

### isGcMember

▸ **isGcMember**\(\): _Promise‹boolean›_

_Inherited from_ [_Identity_](identity.md)_._[_isGcMember_](identity.md#isgcmember)

_Defined in_ [_src/api/entities/Identity/index.ts:183_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Identity/index.ts#L183)

Check whether this Identity is Governance Committee member

**Returns:** _Promise‹boolean›_

### removeSigningKeys

▸ **removeSigningKeys**\(`args`: object\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CurrentIdentity.ts:34_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/CurrentIdentity.ts#L34)

Remove a list of signing keys associated with the Identity

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `signers` | [Signer](../globals.md#signer)\[\] |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


# Identity

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

### constructor

+ **new Identity**\(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)\): [_Identity_](identity.md)

_Overrides void_

_Defined in_ [_src/api/entities/Identity/index.ts:99_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L99)

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

_Defined in_ [_src/api/entities/Identity/index.ts:98_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L98)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Defined in_ [_src/api/entities/Identity/index.ts:95_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L95)

identity ID as stored in the blockchain

### portfolios

• **portfolios**: [_Portfolios_](portfolios.md)

_Defined in_ [_src/api/entities/Identity/index.ts:99_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L99)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L46)

## Methods

### areSecondaryKeysFrozen

▸ **areSecondaryKeysFrozen**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:693_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L693)

Check whether secondary keys are frozen

**`note`** can be subscribed to

**Returns:** _Promise‹boolean›_

▸ **areSecondaryKeysFrozen**\(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:694_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L694)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getHeldTokens

▸ **getHeldTokens**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/Identity/index.ts:445_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L445)

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

### getInstructions

▸ **getInstructions**\(\): _Promise‹_[_GroupedInstructions_](../interfaces/groupedinstructions.md)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:569_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L569)

Retrieve all Instructions where this Identity is a participant, grouped by status

**Returns:** _Promise‹_[_GroupedInstructions_](../interfaces/groupedinstructions.md)_›_

### getPendingDistributions

▸ **getPendingDistributions**\(\): _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_

_Defined in_ [_src/api/entities/Identity/index.ts:729_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L729)

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Tokens this Identity has held

**Returns:** _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_

### getPendingInstructions

▸ **getPendingInstructions**\(\): _Promise‹_[_Instruction_](instruction.md)_\[\]›_

_Defined in_ [_src/api/entities/Identity/index.ts:642_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L642)

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

**Returns:** _Promise‹_[_Instruction_](instruction.md)_\[\]›_

### getPrimaryKey

▸ **getPrimaryKey**\(\): _Promise‹string›_

_Defined in_ [_src/api/entities/Identity/index.ts:410_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L410)

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **getPrimaryKey**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:411_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L411)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getScopeId

▸ **getScopeId**\(`args`: object\): _Promise‹string›_

_Defined in_ [_src/api/entities/Identity/index.ts:551_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L551)

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Security Token

**`note`** more on Investor Uniqueness: [https://developers.polymesh.live/confidential\_identity](https://developers.polymesh.live/confidential_identity)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `token` | [SecurityToken](securitytoken.md) \| string |

**Returns:** _Promise‹string›_

### getSecondaryKeys

▸ **getSecondaryKeys**\(\): _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

_Defined in_ [_src/api/entities/Identity/index.ts:781_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L781)

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

▸ **getSecondaryKeys**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:782_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L782)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTokenBalance

▸ **getTokenBalance**\(`args`: object\): _Promise‹BigNumber›_

_Defined in_ [_src/api/entities/Identity/index.ts:310_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L310)

Retrieve the balance of a particular Security Token

**`note`** can be subscribed to

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

**Returns:** _Promise‹BigNumber›_

▸ **getTokenBalance**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:311_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L311)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹BigNumber›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTrustingTokens

▸ **getTrustingTokens**\(`args`: object\): _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

_Defined in_ [_src/api/entities/Identity/index.ts:496_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L496)

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

_Defined in_ [_src/api/entities/Identity/index.ts:517_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L517)

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Venue_](venue.md)_\[\]›_

▸ **getVenues**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Identity/index.ts:518_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L518)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### hasRole

▸ **hasRole**\(`role`: [Role](../globals.md#role)\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:240_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L240)

Check whether this Identity possesses the specified Role

**Parameters:**

| Name | Type |
| :--- | :--- |
| `role` | [Role](../globals.md#role) |

**Returns:** _Promise‹boolean›_

### hasRoles

▸ **hasRoles**\(`roles`: [Role](../globals.md#role)\[\]\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:485_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L485)

Check whether this Identity possesses all specified roles

**Parameters:**

| Name | Type |
| :--- | :--- |
| `roles` | [Role](../globals.md#role)\[\] |

**Returns:** _Promise‹boolean›_

### hasTokenPermissions

▸ **hasTokenPermissions**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:117_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L117)

Check whether this Identity has specific transaction Permissions over a Security Token

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `token` | [SecurityToken](securitytoken.md) \| string |
| `transactions` | TxTag\[\] \| null |

**Returns:** _Promise‹boolean›_

### hasValidCdd

▸ **hasValidCdd**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:358_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L358)

Check whether this Identity has a valid CDD claim

**Returns:** _Promise‹boolean›_

### isCddProvider

▸ **isCddProvider**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:391_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L391)

Check whether this Identity is a CDD provider

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### isGcMember

▸ **isGcMember**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/index.ts:374_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L374)

Check whether this Identity is Governance Committee member

**Returns:** _Promise‹boolean›_

### toJson

▸ **toJson**\(\): _string_

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/Identity/index.ts:816_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Identity/index.ts#L816)

Return the Identity's DID

**Returns:** _string_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


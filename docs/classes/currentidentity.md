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

* [areSecondaryKeysFrozen](currentidentity.md#aresecondarykeysfrozen)
* [createVenue](currentidentity.md#createvenue)
* [freezeSecondaryKeys](currentidentity.md#freezesecondarykeys)
* [getHeldTokens](currentidentity.md#getheldtokens)
* [getPendingDistributions](currentidentity.md#getpendingdistributions)
* [getPendingInstructions](currentidentity.md#getpendinginstructions)
* [getPrimaryKey](currentidentity.md#getprimarykey)
* [getScopeId](currentidentity.md#getscopeid)
* [getSecondaryKeys](currentidentity.md#getsecondarykeys)
* [getTokenBalance](currentidentity.md#gettokenbalance)
* [getTrustingTokens](currentidentity.md#gettrustingtokens)
* [getVenues](currentidentity.md#getvenues)
* [hasRole](currentidentity.md#hasrole)
* [hasRoles](currentidentity.md#hasroles)
* [hasValidCdd](currentidentity.md#hasvalidcdd)
* [inviteAccount](currentidentity.md#inviteaccount)
* [isCddProvider](currentidentity.md#iscddprovider)
* [isEqual](currentidentity.md#isequal)
* [isGcMember](currentidentity.md#isgcmember)
* [modifyPermissions](currentidentity.md#modifypermissions)
* [removeSecondaryKeys](currentidentity.md#removesecondarykeys)
* [revokePermissions](currentidentity.md#revokepermissions)
* [unfreezeSecondaryKeys](currentidentity.md#unfreezesecondarykeys)
* [generateUuid](currentidentity.md#static-generateuuid)
* [unserialize](currentidentity.md#static-unserialize)

## Constructors

###  constructor

\+ **new CurrentIdentity**(`identifiers`: UniqueIdentifiers, `context`: [Context](context.md)): *[CurrentIdentity](currentidentity.md)*

*Overrides [Identity](identity.md).[constructor](identity.md#constructor)*

*Defined in [src/api/entities/CurrentIdentity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L23)*

Create a CurrentIdentity entity

**Parameters:**

Name | Type |
------ | ------ |
`identifiers` | UniqueIdentifiers |
`context` | [Context](context.md) |

**Returns:** *[CurrentIdentity](currentidentity.md)*

## Properties

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Inherited from [Identity](identity.md).[authorizations](identity.md#authorizations)*

*Defined in [src/api/entities/Identity/index.ts:85](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L85)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Inherited from [Identity](identity.md).[did](identity.md#did)*

*Defined in [src/api/entities/Identity/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L82)*

identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Inherited from [Identity](identity.md).[portfolios](identity.md#portfolios)*

*Defined in [src/api/entities/Identity/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L86)*

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)*

## Methods

###  areSecondaryKeysFrozen

▸ **areSecondaryKeysFrozen**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[areSecondaryKeysFrozen](identity.md#aresecondarykeysfrozen)*

*Defined in [src/api/entities/Identity/index.ts:483](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L483)*

Check whether secondary keys are frozen

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **areSecondaryKeysFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[areSecondaryKeysFrozen](identity.md#aresecondarykeysfrozen)*

*Defined in [src/api/entities/Identity/index.ts:484](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L484)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  createVenue

▸ **createVenue**(`args`: [CreateVenueParams](../interfaces/createvenueparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Venue](venue.md)››*

*Defined in [src/api/entities/CurrentIdentity.ts:146](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L146)*

Create a Venue

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `createVenue.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateVenueParams](../interfaces/createvenueparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Venue](venue.md)››*

___

###  freezeSecondaryKeys

▸ **freezeSecondaryKeys**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:156](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L156)*

Freeze all the secondary keys in this Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the keys are unfrozen via [unfreezeSecondaryKeys](currentidentity.md#unfreezesecondarykeys)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freezeSecondaryKeys.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  getHeldTokens

▸ **getHeldTokens**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[SecurityToken](securitytoken.md)››*

*Inherited from [Identity](identity.md).[getHeldTokens](identity.md#getheldtokens)*

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

*Inherited from [Identity](identity.md).[getPendingDistributions](identity.md#getpendingdistributions)*

*Defined in [src/api/entities/Identity/index.ts:519](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L519)*

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Tokens this Identity has held

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Inherited from [Identity](identity.md).[getPendingInstructions](identity.md#getpendinginstructions)*

*Defined in [src/api/entities/Identity/index.ts:432](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L432)*

Retrieve all pending Instructions involving this Identity

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPrimaryKey

▸ **getPrimaryKey**(): *Promise‹string›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:274](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L274)*

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **getPrimaryKey**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:275](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L275)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getScopeId

▸ **getScopeId**(`args`: object): *Promise‹string›*

*Inherited from [Identity](identity.md).[getScopeId](identity.md#getscopeid)*

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

###  getSecondaryKeys

▸ **getSecondaryKeys**(): *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

*Defined in [src/api/entities/CurrentIdentity.ts:80](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L80)*

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/CurrentIdentity.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTokenBalance

▸ **getTokenBalance**(`args`: object): *Promise‹BigNumber›*

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

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

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

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

*Inherited from [Identity](identity.md).[getTrustingTokens](identity.md#gettrustingtokens)*

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

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:381](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L381)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:382](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L382)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasRole](identity.md#hasrole)*

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

*Inherited from [Identity](identity.md).[hasRoles](identity.md#hasroles)*

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

*Inherited from [Identity](identity.md).[hasValidCdd](identity.md#hasvalidcdd)*

*Defined in [src/api/entities/Identity/index.ts:222](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L222)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  inviteAccount

▸ **inviteAccount**(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:136](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L136)*

Send an invitation to an Account to join this Identity

**`note`** this may create AuthorizationRequest which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `inviteAccount.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [InviteAccountParams](../interfaces/inviteaccountparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isCddProvider](identity.md#iscddprovider)*

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

*Inherited from [Identity](identity.md).[isGcMember](identity.md#isgcmember)*

*Defined in [src/api/entities/Identity/index.ts:238](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/index.ts#L238)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

###  modifyPermissions

▸ **modifyPermissions**(`args`: [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:122](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L122)*

Modify all permissions of a list of secondary keys associated with the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyPermissions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removeSecondaryKeys

▸ **removeSecondaryKeys**(`args`: [RemoveSecondaryKeysParams](../interfaces/removesecondarykeysparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:102](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L102)*

Remove a list of secondary keys associated with the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeSecondaryKeys.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveSecondaryKeysParams](../interfaces/removesecondarykeysparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  revokePermissions

▸ **revokePermissions**(`args`: object): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L112)*

Revoke all permissions of a list of secondary keys associated with the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `revokePermissions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`secondaryKeys` | [Signer](../globals.md#signer)[] |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  unfreezeSecondaryKeys

▸ **unfreezeSecondaryKeys**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:166](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentIdentity.ts#L166)*

Unfreeze all the secondary keys in this Identity. This will restore their permissions as they were before being frozen

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unfreezeSecondaryKeys.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

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

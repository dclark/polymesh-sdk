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
* [getInstructions](currentidentity.md#getinstructions)
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
* [hasTokenPermissions](currentidentity.md#hastokenpermissions)
* [hasValidCdd](currentidentity.md#hasvalidcdd)
* [inviteAccount](currentidentity.md#inviteaccount)
* [isCddProvider](currentidentity.md#iscddprovider)
* [isEqual](currentidentity.md#isequal)
* [isGcMember](currentidentity.md#isgcmember)
* [modifyPermissions](currentidentity.md#modifypermissions)
* [removeSecondaryKeys](currentidentity.md#removesecondarykeys)
* [revokePermissions](currentidentity.md#revokepermissions)
* [toJson](currentidentity.md#tojson)
* [unfreezeSecondaryKeys](currentidentity.md#unfreezesecondarykeys)
* [generateUuid](currentidentity.md#static-generateuuid)
* [unserialize](currentidentity.md#static-unserialize)

## Constructors

###  constructor

\+ **new CurrentIdentity**(`identifiers`: [UniqueIdentifiers](../interfaces/uniqueidentifiers.md), `context`: [Context](context.md)): *[CurrentIdentity](currentidentity.md)*

*Overrides [Identity](identity.md).[constructor](identity.md#constructor)*

*Defined in [src/api/entities/CurrentIdentity.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CurrentIdentity.ts#L24)*

Create a CurrentIdentity entity

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

###  createVenue

▸ **createVenue**(`args`: [CreateVenueParams](../interfaces/createvenueparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Venue](venue.md)››*

*Defined in [src/api/entities/CurrentIdentity.ts:130](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CurrentIdentity.ts#L130)*

Create a Venue

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `createVenue.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateVenueParams](../interfaces/createvenueparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Venue](venue.md)››*

___

###  freezeSecondaryKeys

▸ **freezeSecondaryKeys**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:140](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CurrentIdentity.ts#L140)*

Freeze all the secondary keys in this Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the keys are unfrozen via [unfreezeSecondaryKeys](currentidentity.md#unfreezesecondarykeys)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freezeSecondaryKeys.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

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

###  inviteAccount

▸ **inviteAccount**(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:120](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CurrentIdentity.ts#L120)*

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
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

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

###  modifyPermissions

▸ **modifyPermissions**(`args`: [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:106](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CurrentIdentity.ts#L106)*

Modify all permissions of a list of secondary keys associated with the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyPermissions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removeSecondaryKeys

▸ **removeSecondaryKeys**(`args`: [RemoveSecondaryKeysParams](../interfaces/removesecondarykeysparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CurrentIdentity.ts#L86)*

Remove a list of secondary keys associated with the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeSecondaryKeys.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveSecondaryKeysParams](../interfaces/removesecondarykeysparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  revokePermissions

▸ **revokePermissions**(`args`: object, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CurrentIdentity.ts#L96)*

Revoke all permissions of a list of secondary keys associated with the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `revokePermissions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`secondaryKeys` | [Signer](../globals.md#signer)[] |

▪`Optional`  **opts**: *[ProcedureOpts](../interfaces/procedureopts.md)*

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *string*

*Inherited from [Identity](identity.md).[toJson](identity.md#tojson)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Identity/index.ts:790](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L790)*

Return the Identity's DID

**Returns:** *string*

___

###  unfreezeSecondaryKeys

▸ **unfreezeSecondaryKeys**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentIdentity.ts:150](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CurrentIdentity.ts#L150)*

Unfreeze all the secondary keys in this Identity. This will restore their permissions as they were before being frozen

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unfreezeSecondaryKeys.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

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

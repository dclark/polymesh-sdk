# Class: DefaultTrustedClaimIssuer

Represents a default trusted claim issuer for a specific token in the Polymesh blockchain

## Hierarchy

  ↳ [Identity](identity.md)

  ↳ **DefaultTrustedClaimIssuer**

## Index

### Properties

* [authorizations](defaulttrustedclaimissuer.md#authorizations)
* [context](defaulttrustedclaimissuer.md#protected-context)
* [did](defaulttrustedclaimissuer.md#did)
* [portfolios](defaulttrustedclaimissuer.md#portfolios)
* [ticker](defaulttrustedclaimissuer.md#ticker)
* [tokenPermissions](defaulttrustedclaimissuer.md#tokenpermissions)
* [trustedFor](defaulttrustedclaimissuer.md#optional-trustedfor)
* [uuid](defaulttrustedclaimissuer.md#uuid)

### Methods

* [addedAt](defaulttrustedclaimissuer.md#addedat)
* [areSecondaryKeysFrozen](defaulttrustedclaimissuer.md#aresecondarykeysfrozen)
* [createVenue](defaulttrustedclaimissuer.md#createvenue)
* [freezeSecondaryKeys](defaulttrustedclaimissuer.md#freezesecondarykeys)
* [getHeldTokens](defaulttrustedclaimissuer.md#getheldtokens)
* [getInstructions](defaulttrustedclaimissuer.md#getinstructions)
* [getPendingDistributions](defaulttrustedclaimissuer.md#getpendingdistributions)
* [getPendingInstructions](defaulttrustedclaimissuer.md#getpendinginstructions)
* [getPrimaryKey](defaulttrustedclaimissuer.md#getprimarykey)
* [getScopeId](defaulttrustedclaimissuer.md#getscopeid)
* [getSecondaryKeys](defaulttrustedclaimissuer.md#getsecondarykeys)
* [getTokenBalance](defaulttrustedclaimissuer.md#gettokenbalance)
* [getTrustingTokens](defaulttrustedclaimissuer.md#gettrustingtokens)
* [getVenues](defaulttrustedclaimissuer.md#getvenues)
* [hasRole](defaulttrustedclaimissuer.md#hasrole)
* [hasRoles](defaulttrustedclaimissuer.md#hasroles)
* [hasValidCdd](defaulttrustedclaimissuer.md#hasvalidcdd)
* [inviteAccount](defaulttrustedclaimissuer.md#inviteaccount)
* [isCddProvider](defaulttrustedclaimissuer.md#iscddprovider)
* [isEqual](defaulttrustedclaimissuer.md#isequal)
* [isGcMember](defaulttrustedclaimissuer.md#isgcmember)
* [modifyPermissions](defaulttrustedclaimissuer.md#modifypermissions)
* [removeSecondaryKeys](defaulttrustedclaimissuer.md#removesecondarykeys)
* [revokePermissions](defaulttrustedclaimissuer.md#revokepermissions)
* [toJson](defaulttrustedclaimissuer.md#tojson)
* [unfreezeSecondaryKeys](defaulttrustedclaimissuer.md#unfreezesecondarykeys)
* [generateUuid](defaulttrustedclaimissuer.md#static-generateuuid)
* [unserialize](defaulttrustedclaimissuer.md#static-unserialize)

## Properties

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Inherited from [Identity](identity.md).[authorizations](identity.md#authorizations)*

*Defined in [src/api/entities/Identity/index.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L108)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Inherited from [Identity](identity.md).[did](identity.md#did)*

*Defined in [src/api/entities/Identity/index.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L105)*

identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Inherited from [Identity](identity.md).[portfolios](identity.md#portfolios)*

*Defined in [src/api/entities/Identity/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L109)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/DefaultTrustedClaimIssuer.ts#L40)*

ticker of the Security Token

___

###  tokenPermissions

• **tokenPermissions**: *[TokenPermissions](tokenpermissions.md)*

*Inherited from [Identity](identity.md).[tokenPermissions](identity.md#tokenpermissions)*

*Defined in [src/api/entities/Identity/index.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L110)*

___

### `Optional` trustedFor

• **trustedFor**? : *[ClaimType](../enums/claimtype.md)[]*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/DefaultTrustedClaimIssuer.ts#L35)*

claim types for which this Claim Issuer is trusted. An undefined value means that the issuer is trusted for all claim types

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L46)*

## Methods

###  addedAt

▸ **addedAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/DefaultTrustedClaimIssuer.ts#L60)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  areSecondaryKeysFrozen

▸ **areSecondaryKeysFrozen**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[areSecondaryKeysFrozen](identity.md#aresecondarykeysfrozen)*

*Defined in [src/api/entities/Identity/index.ts:682](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L682)*

Check whether secondary keys are frozen

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **areSecondaryKeysFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[areSecondaryKeysFrozen](identity.md#aresecondarykeysfrozen)*

*Defined in [src/api/entities/Identity/index.ts:683](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L683)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  createVenue

▸ **createVenue**(`args`: [CreateVenueParams](../interfaces/createvenueparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Venue](venue.md)››*

*Inherited from [Identity](identity.md).[createVenue](identity.md#createvenue)*

*Defined in [src/api/entities/Identity/index.ts:224](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L224)*

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

*Inherited from [Identity](identity.md).[freezeSecondaryKeys](identity.md#freezesecondarykeys)*

*Defined in [src/api/entities/Identity/index.ts:234](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L234)*

Freeze all the secondary keys in this Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the keys are unfrozen via [unfreezeSecondaryKeys](defaulttrustedclaimissuer.md#unfreezesecondarykeys)

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

*Defined in [src/api/entities/Identity/index.ts:434](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L434)*

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

*Defined in [src/api/entities/Identity/index.ts:558](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L558)*

Retrieve all Instructions where this Identity is a participant,
  grouped by status

**Returns:** *Promise‹[GroupedInstructions](../interfaces/groupedinstructions.md)›*

___

###  getPendingDistributions

▸ **getPendingDistributions**(): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

*Inherited from [Identity](identity.md).[getPendingDistributions](identity.md#getpendingdistributions)*

*Defined in [src/api/entities/Identity/index.ts:718](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L718)*

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Tokens this Identity has held

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Inherited from [Identity](identity.md).[getPendingInstructions](identity.md#getpendinginstructions)*

*Defined in [src/api/entities/Identity/index.ts:631](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L631)*

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPrimaryKey

▸ **getPrimaryKey**(): *Promise‹string›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:399](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L399)*

Retrieve the primary key associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **getPrimaryKey**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getPrimaryKey](identity.md#getprimarykey)*

*Defined in [src/api/entities/Identity/index.ts:400](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L400)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getScopeId

▸ **getScopeId**(`args`: object): *Promise‹string›*

*Inherited from [Identity](identity.md).[getScopeId](identity.md#getscopeid)*

*Defined in [src/api/entities/Identity/index.ts:540](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L540)*

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

*Defined in [src/api/entities/Identity/index.ts:770](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L770)*

Get the list of secondary keys related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getSecondaryKeys](identity.md#getsecondarykeys)*

*Defined in [src/api/entities/Identity/index.ts:771](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L771)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTokenBalance

▸ **getTokenBalance**(`args`: object): *Promise‹BigNumber›*

*Inherited from [Identity](identity.md).[getTokenBalance](identity.md#gettokenbalance)*

*Defined in [src/api/entities/Identity/index.ts:299](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L299)*

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

*Defined in [src/api/entities/Identity/index.ts:300](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L300)*

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

*Defined in [src/api/entities/Identity/index.ts:485](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L485)*

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

*Defined in [src/api/entities/Identity/index.ts:506](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L506)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:507](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L507)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasRole](identity.md#hasrole)*

*Defined in [src/api/entities/Identity/index.ts:251](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L251)*

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

*Defined in [src/api/entities/Identity/index.ts:474](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L474)*

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

*Defined in [src/api/entities/Identity/index.ts:347](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L347)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  inviteAccount

▸ **inviteAccount**(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Identity](identity.md).[inviteAccount](identity.md#inviteaccount)*

*Defined in [src/api/entities/Identity/index.ts:214](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L214)*

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

*Defined in [src/api/entities/Identity/index.ts:380](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L380)*

Check whether this Identity is a CDD provider

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [Entity](entity.md).[isEqual](entity.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L61)*

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

*Defined in [src/api/entities/Identity/index.ts:363](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L363)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

###  modifyPermissions

▸ **modifyPermissions**(`args`: [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Identity](identity.md).[modifyPermissions](identity.md#modifypermissions)*

*Defined in [src/api/entities/Identity/index.ts:200](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L200)*

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

*Inherited from [Identity](identity.md).[removeSecondaryKeys](identity.md#removesecondarykeys)*

*Defined in [src/api/entities/Identity/index.ts:180](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L180)*

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

*Inherited from [Identity](identity.md).[revokePermissions](identity.md#revokepermissions)*

*Defined in [src/api/entities/Identity/index.ts:190](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L190)*

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

*Defined in [src/api/entities/Identity/index.ts:805](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L805)*

Return the Identity's DID

**Returns:** *string*

___

###  unfreezeSecondaryKeys

▸ **unfreezeSecondaryKeys**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Identity](identity.md).[unfreezeSecondaryKeys](identity.md#unfreezesecondarykeys)*

*Defined in [src/api/entities/Identity/index.ts:244](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/index.ts#L244)*

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

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

# Class: SecurityToken

Class used to manage all the Security Token functionality

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **SecurityToken**

## Index

### Properties

* [checkpoints](securitytoken.md#checkpoints)
* [compliance](securitytoken.md#compliance)
* [context](securitytoken.md#protected-context)
* [corporateActions](securitytoken.md#corporateactions)
* [did](securitytoken.md#did)
* [documents](securitytoken.md#documents)
* [issuance](securitytoken.md#issuance)
* [offerings](securitytoken.md#offerings)
* [permissions](securitytoken.md#permissions)
* [settlements](securitytoken.md#settlements)
* [ticker](securitytoken.md#ticker)
* [tokenHolders](securitytoken.md#tokenholders)
* [transferRestrictions](securitytoken.md#transferrestrictions)
* [uuid](securitytoken.md#uuid)

### Methods

* [controllerTransfer](securitytoken.md#controllertransfer)
* [createdAt](securitytoken.md#createdat)
* [currentFundingRound](securitytoken.md#currentfundinground)
* [details](securitytoken.md#details)
* [freeze](securitytoken.md#freeze)
* [getIdentifiers](securitytoken.md#getidentifiers)
* [investorCount](securitytoken.md#investorcount)
* [isEqual](securitytoken.md#isequal)
* [isFrozen](securitytoken.md#isfrozen)
* [modify](securitytoken.md#modify)
* [modifyPrimaryIssuanceAgent](securitytoken.md#modifyprimaryissuanceagent)
* [redeem](securitytoken.md#redeem)
* [removePrimaryIssuanceAgent](securitytoken.md#removeprimaryissuanceagent)
* [toJson](securitytoken.md#tojson)
* [transferOwnership](securitytoken.md#transferownership)
* [unfreeze](securitytoken.md#unfreeze)
* [generateUuid](securitytoken.md#static-generateuuid)
* [unserialize](securitytoken.md#static-unserialize)

## Properties

###  checkpoints

• **checkpoints**: *[Checkpoints](checkpoints.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L109)*

___

###  compliance

• **compliance**: *[Compliance](compliance.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:106](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L106)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L48)*

___

###  corporateActions

• **corporateActions**: *[CorporateActions](corporateactions.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L110)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L94)*

identity id of the Security Token

___

###  documents

• **documents**: *[Documents](documents.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:102](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L102)*

___

###  issuance

• **issuance**: *[Issuance](issuance.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L105)*

___

###  offerings

• **offerings**: *[Offerings](offerings.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L108)*

___

###  permissions

• **permissions**: *[Permissions](permissions.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L111)*

___

###  settlements

• **settlements**: *[Settlements](settlements.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:103](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L103)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:99](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L99)*

ticker of the Security Token

___

###  tokenHolders

• **tokenHolders**: *[TokenHolders](tokenholders.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L104)*

___

###  transferRestrictions

• **transferRestrictions**: *[TransferRestrictions](transferrestrictions.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:107](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L107)*

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L46)*

## Methods

###  controllerTransfer

▸ **controllerTransfer**(`args`: [ControllerTransferParams](../interfaces/controllertransferparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:498](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L498)*

Force a transfer from a given Portfolio to the caller’s default Portfolio

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `controllerTransfer.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ControllerTransferParams](../interfaces/controllertransferparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/SecurityToken/index.ts:342](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L342)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  currentFundingRound

▸ **currentFundingRound**(): *Promise‹string›*

*Defined in [src/api/entities/SecurityToken/index.ts:272](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L272)*

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **currentFundingRound**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:273](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L273)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  details

▸ **details**(): *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:201](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L201)*

Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner

**`note`** can be subscribed to

**Returns:** *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:202](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L202)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  freeze

▸ **freeze**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:364](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L364)*

Freezes transfers and minting of the Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freeze.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  getIdentifiers

▸ **getIdentifiers**(): *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

*Defined in [src/api/entities/SecurityToken/index.ts:306](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L306)*

Retrieve the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

▸ **getIdentifiers**(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:307](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L307)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  investorCount

▸ **investorCount**(): *Promise‹number›*

*Defined in [src/api/entities/SecurityToken/index.ts:462](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L462)*

Retrieve the amount of unique investors that hold this Security Token

**`note`** this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances
  of this token in two or more different Identities, but they all have Investor Uniqueness Claims with the same
  Scope ID, then they will only be counted once for the purposes of this result

**`note`** can be subscribed to

**Returns:** *Promise‹number›*

▸ **investorCount**(`callback`: [SubCallback](../globals.md#subcallback)‹number›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:463](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L463)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹number› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

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

###  isFrozen

▸ **isFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/SecurityToken/index.ts:383](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L383)*

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **isFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:384](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L384)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  modify

▸ **modify**(`args`: [ModifyTokenParams](../globals.md#modifytokenparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:192](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L192)*

Modify some properties of the Security Token

**`throws`** if the passed values result in no changes being made to the token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modify.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyTokenParams](../globals.md#modifytokenparams) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**(`args`: [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:423](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L423)*

Assign a new primary issuance agent for the Security Token

**`note`** this may create AuthorizationRequest which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`deprecated`** in favor of `inviteAgent`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyPrimaryIssuanceAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  redeem

▸ **redeem**(`args`: [RedeemTokenParams](../interfaces/redeemtokenparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:449](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L449)*

Redeem (burn) an amount of this Security Token

**`note`** Tokens are removed from the caller's Default Portfolio.

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `redeem.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RedeemTokenParams](../interfaces/redeemtokenparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:437](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L437)*

Remove the primary issuance agent of the Security Token

**`note`** if primary issuance agent is not set, Security Token owner would be used by default

**`deprecated`** 

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removePrimaryIssuanceAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *string*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/SecurityToken/index.ts:505](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L505)*

Return the Token's ticker

**Returns:** *string*

___

###  transferOwnership

▸ **transferOwnership**(`args`: [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:180](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L180)*

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted
  by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferOwnership.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  unfreeze

▸ **unfreeze**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:374](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L374)*

Unfreeze transfers and minting of the Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unfreeze.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

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

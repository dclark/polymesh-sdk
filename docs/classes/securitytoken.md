# Class: SecurityToken

Class used to manage all the Security Token functionality

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

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
* [transferOwnership](securitytoken.md#transferownership)
* [unfreeze](securitytoken.md#unfreeze)
* [generateUuid](securitytoken.md#static-generateuuid)
* [unserialize](securitytoken.md#static-unserialize)

## Properties

###  checkpoints

• **checkpoints**: *[Checkpoints](checkpoints.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L100)*

___

###  compliance

• **compliance**: *Compliance*

*Defined in [src/api/entities/SecurityToken/index.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L97)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)*

___

###  corporateActions

• **corporateActions**: *[CorporateActions](corporateactions.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L101)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:85](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L85)*

identity id of the Security Token

___

###  documents

• **documents**: *[Documents](documents.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L93)*

___

###  issuance

• **issuance**: *[Issuance](issuance.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L96)*

___

###  offerings

• **offerings**: *[Offerings](offerings.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:99](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L99)*

___

###  settlements

• **settlements**: *[Settlements](settlements.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L94)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:90](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L90)*

ticker of the Security Token

___

###  tokenHolders

• **tokenHolders**: *[TokenHolders](tokenholders.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L95)*

___

###  transferRestrictions

• **transferRestrictions**: *[TransferRestrictions](transferrestrictions.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L98)*

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)*

## Methods

###  controllerTransfer

▸ **controllerTransfer**(`args`: [ControllerTransferParams](../interfaces/controllertransferparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:496](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L496)*

Force a transfer from a given Portfolio to the PIA’s default Portfolio

**`note`** required role:
  - Security Token Primary Issuance Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `controllerTransfer.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ControllerTransferParams](../interfaces/controllertransferparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/SecurityToken/index.ts:324](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L324)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  currentFundingRound

▸ **currentFundingRound**(): *Promise‹string›*

*Defined in [src/api/entities/SecurityToken/index.ts:254](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L254)*

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **currentFundingRound**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:255](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L255)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  details

▸ **details**(): *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:196](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L196)*

Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner

**`note`** can be subscribed to

**Returns:** *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:197](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  freeze

▸ **freeze**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:349](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L349)*

Freezes transfers and minting of the Security Token

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freeze.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  getIdentifiers

▸ **getIdentifiers**(): *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

*Defined in [src/api/entities/SecurityToken/index.ts:288](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L288)*

Retrieve the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

▸ **getIdentifiers**(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:289](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L289)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  investorCount

▸ **investorCount**(): *Promise‹number›*

*Defined in [src/api/entities/SecurityToken/index.ts:457](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L457)*

Retrieve the amount of unique investors that hold this Security Token

**`note`** this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances
  of this token in two or more different Identities, but they all have Investor Uniqueness Claims with the same
  Scope ID, then they will only be counted once for the purposes of this result

**`note`** can be subscribed to

**Returns:** *Promise‹number›*

▸ **investorCount**(`callback`: [SubCallback](../globals.md#subcallback)‹number›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:458](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L458)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹number› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

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

###  isFrozen

▸ **isFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/SecurityToken/index.ts:371](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L371)*

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **isFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:372](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L372)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  modify

▸ **modify**(`args`: [ModifyTokenParams](../globals.md#modifytokenparams)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:187](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L187)*

Modify some properties of the Security Token

**`throws`** if the passed values result in no changes being made to the token

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modify.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyTokenParams](../globals.md#modifytokenparams) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**(`args`: [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:412](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L412)*

Assign a new primary issuance agent for the Security Token

**`note`** this may create AuthorizationRequest which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyPrimaryIssuanceAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  redeem

▸ **redeem**(`args`: [RedeemTokenParams](../interfaces/redeemtokenparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:444](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L444)*

Redeem (burn) an amount of this Security Token

**`note`** Tokens are removed from the Primary Issuance Agent's Default Portfolio.
  If the Security Token has no Primary Issuance Agent, funds are removed from the owner's
  Default Portfolio instead

**`note`** required role:
  - Security Token Primary Issuance Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `redeem.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RedeemTokenParams](../interfaces/redeemtokenparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:427](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L427)*

Remove the primary issuance agent of the Security Token

**`note`** if primary issuance agent is not set, Security Token owner would be used by default

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removePrimaryIssuanceAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  transferOwnership

▸ **transferOwnership**(`args`: [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:172](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L172)*

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted
  by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferOwnership.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  unfreeze

▸ **unfreeze**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:362](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/index.ts#L362)*

Unfreeze transfers and minting of the Security Token

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unfreeze.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

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

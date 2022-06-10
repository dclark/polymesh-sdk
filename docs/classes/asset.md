# Class: Asset

Class used to manage all Asset functionality

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **Asset**

## Index

### Properties

* [assetHolders](asset.md#assetholders)
* [checkpoints](asset.md#checkpoints)
* [compliance](asset.md#compliance)
* [context](asset.md#protected-context)
* [corporateActions](asset.md#corporateactions)
* [did](asset.md#did)
* [documents](asset.md#documents)
* [issuance](asset.md#issuance)
* [offerings](asset.md#offerings)
* [permissions](asset.md#permissions)
* [settlements](asset.md#settlements)
* [ticker](asset.md#ticker)
* [transferRestrictions](asset.md#transferrestrictions)
* [uuid](asset.md#uuid)

### Methods

* [controllerTransfer](asset.md#controllertransfer)
* [createdAt](asset.md#createdat)
* [currentFundingRound](asset.md#currentfundinground)
* [details](asset.md#details)
* [exists](asset.md#exists)
* [freeze](asset.md#freeze)
* [getIdentifiers](asset.md#getidentifiers)
* [getOperationHistory](asset.md#getoperationhistory)
* [investorCount](asset.md#investorcount)
* [isEqual](asset.md#isequal)
* [isFrozen](asset.md#isfrozen)
* [modify](asset.md#modify)
* [modifyPrimaryIssuanceAgent](asset.md#modifyprimaryissuanceagent)
* [redeem](asset.md#redeem)
* [removePrimaryIssuanceAgent](asset.md#removeprimaryissuanceagent)
* [toHuman](asset.md#tohuman)
* [transferOwnership](asset.md#transferownership)
* [unfreeze](asset.md#unfreeze)
* [generateUuid](asset.md#static-generateuuid)
* [unserialize](asset.md#static-unserialize)

## Properties

###  assetHolders

• **assetHolders**: *[AssetHolders](assetholders.md)*

*Defined in [src/api/entities/Asset/index.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L114)*

___

###  checkpoints

• **checkpoints**: *[Checkpoints](checkpoints.md)*

*Defined in [src/api/entities/Asset/index.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L119)*

___

###  compliance

• **compliance**: *Compliance*

*Defined in [src/api/entities/Asset/index.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L116)*

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L48)*

___

###  corporateActions

• **corporateActions**: *[CorporateActions](corporateactions.md)*

*Defined in [src/api/entities/Asset/index.ts:120](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L120)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/Asset/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L104)*

Identity ID of the Asset (used for Claims)

___

###  documents

• **documents**: *[Documents](documents.md)*

*Defined in [src/api/entities/Asset/index.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L112)*

___

###  issuance

• **issuance**: *[Issuance](issuance.md)*

*Defined in [src/api/entities/Asset/index.ts:115](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L115)*

___

###  offerings

• **offerings**: *[Offerings](offerings.md)*

*Defined in [src/api/entities/Asset/index.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L118)*

___

###  permissions

• **permissions**: *Permissions*

*Defined in [src/api/entities/Asset/index.ts:121](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L121)*

___

###  settlements

• **settlements**: *[Settlements](settlements.md)*

*Defined in [src/api/entities/Asset/index.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L113)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/Asset/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L109)*

ticker of the Asset

___

###  transferRestrictions

• **transferRestrictions**: *[TransferRestrictions](transferrestrictions.md)*

*Defined in [src/api/entities/Asset/index.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L117)*

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L46)*

## Methods

###  controllerTransfer

▸ **controllerTransfer**(`args`: [ControllerTransferParams](../interfaces/controllertransferparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/index.ts:567](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L567)*

Force a transfer from a given Portfolio to the caller’s default Portfolio

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [controllerTransfer.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ControllerTransferParams](../interfaces/controllertransferparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/Asset/index.ts:392](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L392)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  currentFundingRound

▸ **currentFundingRound**(): *Promise‹string | null›*

*Defined in [src/api/entities/Asset/index.ts:317](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L317)*

Retrieve the Asset's funding round

**`note`** can be subscribed to

**Returns:** *Promise‹string | null›*

▸ **currentFundingRound**(`callback`: [SubCallback](../globals.md#subcallback)‹string | null›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Asset/index.ts:318](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L318)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string &#124; null› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  details

▸ **details**(): *Promise‹[AssetDetails](../interfaces/assetdetails.md)›*

*Defined in [src/api/entities/Asset/index.ts:216](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L216)*

Retrieve the Asset's data

**`note`** can be subscribed to

**Returns:** *Promise‹[AssetDetails](../interfaces/assetdetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[AssetDetails](../interfaces/assetdetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Asset/index.ts:217](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L217)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AssetDetails](../interfaces/assetdetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Asset/index.ts:659](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L659)*

Determine whether this Asset exists on chain

**Returns:** *Promise‹boolean›*

___

###  freeze

▸ **freeze**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/index.ts:414](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L414)*

Freeze transfers of the Asset

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [freeze.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  getIdentifiers

▸ **getIdentifiers**(): *Promise‹[SecurityIdentifier](../interfaces/securityidentifier.md)[]›*

*Defined in [src/api/entities/Asset/index.ts:355](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L355)*

Retrieve the Asset's identifiers list

**`note`** can be subscribed to

**Returns:** *Promise‹[SecurityIdentifier](../interfaces/securityidentifier.md)[]›*

▸ **getIdentifiers**(`callback?`: [SubCallback](../globals.md#subcallback)‹[SecurityIdentifier](../interfaces/securityidentifier.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Asset/index.ts:356](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L356)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [SubCallback](../globals.md#subcallback)‹[SecurityIdentifier](../interfaces/securityidentifier.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getOperationHistory

▸ **getOperationHistory**(): *Promise‹[HistoricAgentOperation](../interfaces/historicagentoperation.md)[]›*

*Defined in [src/api/entities/Asset/index.ts:578](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L578)*

Retrieve this Asset's Operation History

**`note`** Operations are grouped by the agent Identity who performed them

**`note`** uses the middleware

**Returns:** *Promise‹[HistoricAgentOperation](../interfaces/historicagentoperation.md)[]›*

___

###  investorCount

▸ **investorCount**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/Asset/index.ts:511](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L511)*

Retrieve the amount of unique investors that hold this Asset

**`note`** this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances
  of this Asset in two or more different Identities, but they all have Investor Uniqueness Claims with the same
  Scope ID, then they will only be counted once for the purposes of this result

**Returns:** *Promise‹BigNumber›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  isFrozen

▸ **isFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/Asset/index.ts:433](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L433)*

Check whether transfers are frozen for the Asset

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **isFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Asset/index.ts:434](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L434)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  modify

▸ **modify**(`args`: [ModifyAssetParams](../globals.md#modifyassetparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/index.ts:207](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L207)*

Modify some properties of the Asset

**`throws`** if the passed values result in no changes being made to the Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [modify.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyAssetParams](../globals.md#modifyassetparams) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**(`args`: [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/index.ts:474](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L474)*

Assign a new primary issuance agent for the Asset

**`note`** this will create an [Authorization Request](authorizationrequest.md) which has to be accepted by the `target` Identity.
  An [Account](../enums/signertype.md#account) or [Identity](../enums/roletype.md#identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](authorizations.md#getone)

**`deprecated`** in favor of `inviteAgent`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [modifyPrimaryIssuanceAgent.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  redeem

▸ **redeem**(`args`: [RedeemTokensParams](../interfaces/redeemtokensparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/index.ts:500](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L500)*

Redeem (burn) an amount of this Asset's tokens

**`note`** tokens are removed from the caller's Default Portfolio

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [redeem.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RedeemTokensParams](../interfaces/redeemtokensparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/index.ts:488](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L488)*

Remove the primary issuance agent of the Asset

**`note`** if primary issuance agent is not set, Asset owner would be used by default

**`deprecated`** 

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [removePrimaryIssuanceAgent.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toHuman

▸ **toHuman**(): *string*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/Asset/index.ts:672](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L672)*

Return the Asset's ticker

**Returns:** *string*

___

###  transferOwnership

▸ **transferOwnership**(`args`: [TransferAssetOwnershipParams](../interfaces/transferassetownershipparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

*Defined in [src/api/entities/Asset/index.ts:196](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L196)*

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
  by the recipient

**`note`** this will create [Authorization Request](authorizationrequest.md) which has to be accepted by the `target` Identity.
  An [Account](../enums/signertype.md#account) or [Identity](../enums/roletype.md#identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](authorizations.md#getone)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [transferOwnership.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferAssetOwnershipParams](../interfaces/transferassetownershipparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

___

###  unfreeze

▸ **unfreeze**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/index.ts:424](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Asset/index.ts#L424)*

Unfreeze transfers of the Asset

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [unfreeze.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

# SecurityToken

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

### checkpoints

• **checkpoints**: [_Checkpoints_](checkpoints.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:109_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L109)

### compliance

• **compliance**: [_Compliance_](compliance.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:106_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L106)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L48)

### corporateActions

• **corporateActions**: [_CorporateActions_](corporateactions.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:110_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L110)

### did

• **did**: _string_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:94_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L94)

identity id of the Security Token

### documents

• **documents**: [_Documents_](documents.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:102_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L102)

### issuance

• **issuance**: [_Issuance_](issuance.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:105_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L105)

### offerings

• **offerings**: [_Offerings_](offerings.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:108_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L108)

### permissions

• **permissions**: [_Permissions_](permissions.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:111_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L111)

### settlements

• **settlements**: [_Settlements_](settlements.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:103_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L103)

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:99_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L99)

ticker of the Security Token

### tokenHolders

• **tokenHolders**: [_TokenHolders_](tokenholders.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:104_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L104)

### transferRestrictions

• **transferRestrictions**: [_TransferRestrictions_](transferrestrictions.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:107_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L107)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L46)

## Methods

### controllerTransfer

▸ **controllerTransfer**\(`args`: [ControllerTransferParams](../interfaces/controllertransferparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:498_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L498)

Force a transfer from a given Portfolio to the caller’s default Portfolio

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `controllerTransfer.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ControllerTransferParams](../interfaces/controllertransferparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### createdAt

▸ **createdAt**\(\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:342_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L342)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### currentFundingRound

▸ **currentFundingRound**\(\): _Promise‹string›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:272_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L272)

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **currentFundingRound**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:273_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L273)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### details

▸ **details**\(\): _Promise‹_[_SecurityTokenDetails_](../interfaces/securitytokendetails.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:201_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L201)

Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecurityTokenDetails_](../interfaces/securitytokendetails.md)_›_

▸ **details**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:202_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L202)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### freeze

▸ **freeze**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:364_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L364)

Freezes transfers and minting of the Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freeze.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### getIdentifiers

▸ **getIdentifiers**\(\): _Promise‹_[_TokenIdentifier_](../interfaces/tokenidentifier.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:306_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L306)

Retrieve the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** _Promise‹_[_TokenIdentifier_](../interfaces/tokenidentifier.md)_\[\]›_

▸ **getIdentifiers**\(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:307_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L307)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### investorCount

▸ **investorCount**\(\): _Promise‹number›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:462_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L462)

Retrieve the amount of unique investors that hold this Security Token

**`note`** this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances of this token in two or more different Identities, but they all have Investor Uniqueness Claims with the same Scope ID, then they will only be counted once for the purposes of this result

**`note`** can be subscribed to

**Returns:** _Promise‹number›_

▸ **investorCount**\(`callback`: [SubCallback](../globals.md#subcallback)‹number›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:463_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L463)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹number› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### isFrozen

▸ **isFrozen**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:383_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L383)

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** _Promise‹boolean›_

▸ **isFrozen**\(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:384_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L384)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### modify

▸ **modify**\(`args`: [ModifyTokenParams](../globals.md#modifytokenparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:192_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L192)

Modify some properties of the Security Token

**`throws`** if the passed values result in no changes being made to the token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modify.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyTokenParams](../globals.md#modifytokenparams) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**\(`args`: [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:423_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L423)

Assign a new primary issuance agent for the Security Token

**`note`** this may create AuthorizationRequest which have to be accepted by the corresponding Account. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`deprecated`** in favor of `inviteAgent`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyPrimaryIssuanceAgent.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### redeem

▸ **redeem**\(`args`: [RedeemTokenParams](../interfaces/redeemtokenparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:449_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L449)

Redeem \(burn\) an amount of this Security Token

**`note`** Tokens are removed from the caller's Default Portfolio.

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `redeem.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RedeemTokenParams](../interfaces/redeemtokenparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:437_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L437)

Remove the primary issuance agent of the Security Token

**`note`** if primary issuance agent is not set, Security Token owner would be used by default

**`deprecated`**

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removePrimaryIssuanceAgent.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### toJson

▸ **toJson**\(\): _string_

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:505_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L505)

Return the Token's ticker

**Returns:** _string_

### transferOwnership

▸ **transferOwnership**\(`args`: [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:180_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L180)

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferOwnership.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### unfreeze

▸ **unfreeze**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:374_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L374)

Unfreeze transfers and minting of the Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unfreeze.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


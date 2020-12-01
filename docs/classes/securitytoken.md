# Class: SecurityToken

Class used to manage all the Security Token functionality

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **SecurityToken**

## Index

### Properties

* [compliance](securitytoken.md#compliance)
* [context](securitytoken.md#protected-context)
* [did](securitytoken.md#did)
* [documents](securitytoken.md#documents)
* [issuance](securitytoken.md#issuance)
* [settlements](securitytoken.md#settlements)
* [ticker](securitytoken.md#ticker)
* [tokenHolders](securitytoken.md#tokenholders)
* [uuid](securitytoken.md#uuid)

### Methods

* [createdAt](securitytoken.md#createdat)
* [currentFundingRound](securitytoken.md#currentfundinground)
* [details](securitytoken.md#details)
* [freeze](securitytoken.md#freeze)
* [getIdentifiers](securitytoken.md#getidentifiers)
* [isFrozen](securitytoken.md#isfrozen)
* [modify](securitytoken.md#modify)
* [modifyPrimaryIssuanceAgent](securitytoken.md#modifyprimaryissuanceagent)
* [removePrimaryIssuanceAgent](securitytoken.md#removeprimaryissuanceagent)
* [transferOwnership](securitytoken.md#transferownership)
* [unfreeze](securitytoken.md#unfreeze)
* [generateUuid](securitytoken.md#static-generateuuid)
* [unserialize](securitytoken.md#static-unserialize)

## Properties

###  compliance

• **compliance**: *Compliance*

*Defined in [src/api/entities/SecurityToken/index.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L79)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:67](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L67)*

identity id of the Security Token

___

###  documents

• **documents**: *[Documents](documents.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L75)*

___

###  issuance

• **issuance**: *[Issuance](issuance.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:78](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L78)*

___

###  settlements

• **settlements**: *[Settlements](settlements.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L76)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L72)*

ticker of the Security Token

___

###  tokenHolders

• **tokenHolders**: *[TokenHolders](tokenholders.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L77)*

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L46)*

## Methods

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/SecurityToken/index.ts:257](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L257)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  currentFundingRound

▸ **currentFundingRound**(): *Promise‹string›*

*Defined in [src/api/entities/SecurityToken/index.ts:187](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L187)*

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **currentFundingRound**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:188](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  details

▸ **details**(): *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:132](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L132)*

Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner

**`note`** can be subscribed to

**Returns:** *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:133](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  freeze

▸ **freeze**(): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:284](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L284)*

Freezes transfers and minting of the Security Token

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  getIdentifiers

▸ **getIdentifiers**(): *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

*Defined in [src/api/entities/SecurityToken/index.ts:221](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L221)*

Retrive the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

▸ **getIdentifiers**(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:222](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L222)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  isFrozen

▸ **isFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/SecurityToken/index.ts:302](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L302)*

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **isFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:303](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L303)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  modify

▸ **modify**(`args`: [ModifyTokenParams](../globals.md#modifytokenparams)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:122](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L122)*

Modify some properties of the Security Token

**`throws`** if the passed values result in no changes being made to the token

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyTokenParams](../globals.md#modifytokenparams) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**(`args`: [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:340](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L340)*

Assign a new primary issuance agent for the Security Token

**`note`** this may create AuthorizationRequest which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**(): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:352](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L352)*

Remove the primary issuance agent of the Security Token

**`note`** if primary issuance agent is not set, Security Token owner would be used by default

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  transferOwnership

▸ **transferOwnership**(`args`: [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L109)*

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted
  by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  unfreeze

▸ **unfreeze**(): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:292](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L292)*

Unfreeze transfers and minting of the Security Token

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

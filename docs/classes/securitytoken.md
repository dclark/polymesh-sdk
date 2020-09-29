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
* [ticker](securitytoken.md#ticker)
* [tokenHolders](securitytoken.md#tokenholders)
* [transfers](securitytoken.md#transfers)
* [uuid](securitytoken.md#uuid)

### Methods

* [createdAt](securitytoken.md#createdat)
* [currentFundingRound](securitytoken.md#currentfundinground)
* [details](securitytoken.md#details)
* [getIdentifiers](securitytoken.md#getidentifiers)
* [modify](securitytoken.md#modify)
* [transferOwnership](securitytoken.md#transferownership)
* [generateUuid](securitytoken.md#static-generateuuid)
* [unserialize](securitytoken.md#static-unserialize)

## Properties

###  compliance

• **compliance**: *[Compliance](compliance.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L82)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L70)*

identity id of the Security Token

___

###  documents

• **documents**: *[Documents](documents.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:78](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L78)*

___

###  issuance

• **issuance**: *[Issuance](issuance.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L81)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L75)*

ticker of the Security Token

___

###  tokenHolders

• **tokenHolders**: *[TokenHolders](tokenholders.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:80](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L80)*

___

###  transfers

• **transfers**: *[Transfers](transfers.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L79)*

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L46)*

## Methods

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/SecurityToken/index.ts:266](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L266)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  currentFundingRound

▸ **currentFundingRound**(): *Promise‹string›*

*Defined in [src/api/entities/SecurityToken/index.ts:188](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L188)*

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **currentFundingRound**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:189](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L189)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  details

▸ **details**(): *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:135](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L135)*

Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner

**`note`** can be subscribed to

**Returns:** *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:136](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getIdentifiers

▸ **getIdentifiers**(): *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

*Defined in [src/api/entities/SecurityToken/index.ts:219](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L219)*

Retrive the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

▸ **getIdentifiers**(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:220](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L220)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  modify

▸ **modify**(`args`: [ModifyTokenParams](../globals.md#modifytokenparams)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L125)*

Modify some properties of the Security Token

**`throws`** if the passed values result in no changes being made to the token

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyTokenParams](../globals.md#modifytokenparams) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  transferOwnership

▸ **transferOwnership**(`args`: [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/index.ts#L112)*

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted
  by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

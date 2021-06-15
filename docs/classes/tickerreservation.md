# Class: TickerReservation

Represents a reserved token symbol in the Polymesh chain. Ticker reservations expire
  after a set length of time, after which they can be reserved by another Identity.
  A Ticker must be previously reserved by an Identity for that Identity to be able create a Security Token with it

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **TickerReservation**

## Index

### Properties

* [context](tickerreservation.md#protected-context)
* [ticker](tickerreservation.md#ticker)
* [uuid](tickerreservation.md#uuid)

### Methods

* [createToken](tickerreservation.md#createtoken)
* [details](tickerreservation.md#details)
* [extend](tickerreservation.md#extend)
* [isEqual](tickerreservation.md#isequal)
* [transferOwnership](tickerreservation.md#transferownership)
* [generateUuid](tickerreservation.md#static-generateuuid)
* [unserialize](tickerreservation.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/TickerReservation/index.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L48)*

reserved ticker

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)*

## Methods

###  createToken

▸ **createToken**(`args`: [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L183)*

Create a Security Token using the reserved ticker

**`note`** the issuer DID will be set as the primary issuance agent

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `createToken.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  details

▸ **details**(): *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

*Defined in [src/api/entities/TickerReservation/index.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L81)*

Retrieve the Reservation's owner, expiry date and status

**`note`** can be subscribed to

**Returns:** *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/TickerReservation/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  extend

▸ **extend**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:168](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L168)*

Extend the Reservation time period of the ticker for 60 days from now
to later use it in the creation of a Security Token.

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `extend.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

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

###  transferOwnership

▸ **transferOwnership**(`args`: [TransferTickerOwnershipParams](../interfaces/transfertickerownershipparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:201](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L201)*

Transfer ownership of the Ticker Reservation to another Identity. This generates an authorization request that must be accepted
  by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferOwnership.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferTickerOwnershipParams](../interfaces/transfertickerownershipparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

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

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
* [generateUuid](tickerreservation.md#static-generateuuid)
* [unserialize](tickerreservation.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L48)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/TickerReservation/index.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/TickerReservation/index.ts#L45)*

reserved ticker

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L46)*

## Methods

###  createToken

▸ **createToken**(`args`: [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:167](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/TickerReservation/index.ts#L167)*

Create a Security Token using the reserved ticker

**`note`** the issuer DID will be set as the primary issuance agent

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  details

▸ **details**(): *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

*Defined in [src/api/entities/TickerReservation/index.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/TickerReservation/index.ts#L63)*

Retrieve the Reservation's owner, expiry date and status

**`note`** can be subscribed to

**Returns:** *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/TickerReservation/index.ts:64](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/TickerReservation/index.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  extend

▸ **extend**(): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:144](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/TickerReservation/index.ts#L144)*

Extend the Reservation time period of the ticker for 60 days from now
to later use it in the creation of a Security Token.

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

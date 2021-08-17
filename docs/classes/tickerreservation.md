# Class: TickerReservation

Represents a reserved token symbol in the Polymesh chain. Ticker reservations expire
  after a set length of time, after which they can be reserved by another Identity.
  A Ticker must be previously reserved by an Identity for that Identity to be able create a Security Token with it

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

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
* [toJson](tickerreservation.md#tojson)
* [transferOwnership](tickerreservation.md#transferownership)
* [generateUuid](tickerreservation.md#static-generateuuid)
* [unserialize](tickerreservation.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L48)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/TickerReservation/index.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/TickerReservation/index.ts#L49)*

reserved ticker

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L46)*

## Methods

###  createToken

▸ **createToken**(`args`: [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:182](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/TickerReservation/index.ts#L182)*

Create a Security Token using the reserved ticker

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `createToken.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  details

▸ **details**(): *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

*Defined in [src/api/entities/TickerReservation/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/TickerReservation/index.ts#L82)*

Retrieve the Reservation's owner, expiry date and status

**`note`** can be subscribed to

**Returns:** *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/TickerReservation/index.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/TickerReservation/index.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  extend

▸ **extend**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:169](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/TickerReservation/index.ts#L169)*

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
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

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

###  toJson

▸ **toJson**(): *string*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/TickerReservation/index.ts:207](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/TickerReservation/index.ts#L207)*

Return the Reservation's ticker

**Returns:** *string*

___

###  transferOwnership

▸ **transferOwnership**(`args`: [TransferTickerOwnershipParams](../interfaces/transfertickerownershipparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:200](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/TickerReservation/index.ts#L200)*

Transfer ownership of the Ticker Reservation to another Identity. This generates an authorization request that must be accepted
  by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferOwnership.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferTickerOwnershipParams](../interfaces/transfertickerownershipparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

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

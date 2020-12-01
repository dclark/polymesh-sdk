# TickerReservation

Represents a reserved token symbol in the Polymesh chain. Ticker reservations expire after a set length of time, after which they can be reserved by another Identity. A Ticker must be previously reserved by an Identity for that Identity to be able create a Security Token with it

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

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L48)

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/TickerReservation/index.ts#L38)

reserved ticker

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L46)

## Methods

### createToken

▸ **createToken**\(`args`: [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:160_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/TickerReservation/index.ts#L160)

Create a Security Token using the reserved ticker

**`note`** the issuer DID will be set as the primary issuance agent

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### details

▸ **details**\(\): _Promise‹_[_TickerReservationDetails_](../interfaces/tickerreservationdetails.md)_›_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:56_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/TickerReservation/index.ts#L56)

Retrieve the Reservation's owner, expiry date and status

**`note`** can be subscribed to

**Returns:** _Promise‹_[_TickerReservationDetails_](../interfaces/tickerreservationdetails.md)_›_

▸ **details**\(`callback`: [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:57_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/TickerReservation/index.ts#L57)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### extend

▸ **extend**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:137_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/TickerReservation/index.ts#L137)

Extend the Reservation time period of the ticker for 60 days from now to later use it in the creation of a Security Token.

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


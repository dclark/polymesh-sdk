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
* [isEqual](tickerreservation.md#isequal)
* [transferOwnership](tickerreservation.md#transferownership)
* [generateUuid](tickerreservation.md#static-generateuuid)
* [unserialize](tickerreservation.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L48)

reserved ticker

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### createToken

▸ **createToken**\(`args`: [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:183_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L183)

Create a Security Token using the reserved ticker

**`note`** the issuer DID will be set as the primary issuance agent

**`note`** required role:

* Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `createToken.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [CreateSecurityTokenParams](../interfaces/createsecuritytokenparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### details

▸ **details**\(\): _Promise‹_[_TickerReservationDetails_](../interfaces/tickerreservationdetails.md)_›_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:81_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L81)

Retrieve the Reservation's owner, expiry date and status

**`note`** can be subscribed to

**Returns:** _Promise‹_[_TickerReservationDetails_](../interfaces/tickerreservationdetails.md)_›_

▸ **details**\(`callback`: [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:82_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L82)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### extend

▸ **extend**\(`args`: void\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:168_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L168)

Extend the Reservation time period of the ticker for 60 days from now to later use it in the creation of a Security Token.

**`note`** required role:

* Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `extend.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown›\): _boolean_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_isEqual_](checkpointschedule.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown› |

**Returns:** _boolean_

### transferOwnership

▸ **transferOwnership**\(`args`: [TransferTickerOwnershipParams](../interfaces/transfertickerownershipparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

_Defined in_ [_src/api/entities/TickerReservation/index.ts:201_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/TickerReservation/index.ts#L201)

Transfer ownership of the Ticker Reservation to another Identity. This generates an authorization request that must be accepted by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferOwnership.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [TransferTickerOwnershipParams](../interfaces/transfertickerownershipparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_generateUuid_](checkpointschedule.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L14)

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

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_unserialize_](checkpointschedule.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


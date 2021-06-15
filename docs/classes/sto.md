# Sto

Represents a Security Token Offering in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Sto**

## Index

### Properties

* [context](sto.md#protected-context)
* [id](sto.md#id)
* [ticker](sto.md#ticker)
* [uuid](sto.md#uuid)

### Methods

* [close](sto.md#close)
* [details](sto.md#details)
* [freeze](sto.md#freeze)
* [getInvestments](sto.md#getinvestments)
* [invest](sto.md#invest)
* [isEqual](sto.md#isequal)
* [modifyTimes](sto.md#modifytimes)
* [unfreeze](sto.md#unfreeze)
* [generateUuid](sto.md#static-generateuuid)
* [unserialize](sto.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/Sto/index.ts:55_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L55)

identifier number of the Offering

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/Sto/index.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L60)

ticker of the Security Token being offered

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### close

▸ **close**\(`args`: void\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Sto/index.ts:153_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L153)

Close the STO

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `close.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### details

▸ **details**\(\): _Promise‹_[_StoDetails_](../interfaces/stodetails.md)_›_

_Defined in_ [_src/api/entities/Sto/index.ts:100_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L100)

Retrieve the STO's details

**`note`** can be subscribed to

**Returns:** _Promise‹_[_StoDetails_](../interfaces/stodetails.md)_›_

▸ **details**\(`callback`: [SubCallback](../globals.md#subcallback)‹[StoDetails](../interfaces/stodetails.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Sto/index.ts:101_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L101)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[StoDetails](../interfaces/stodetails.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### freeze

▸ **freeze**\(`args`: void\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Sto_](sto.md)_››_

_Defined in_ [_src/api/entities/Sto/index.ts:166_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L166)

Freeze the STO

**`note`** required role:

* Security Token Primary Issuance Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freeze.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Sto_](sto.md)_››_

### getInvestments

▸ **getInvestments**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_Investment_](../interfaces/investment.md)_››_

_Defined in_ [_src/api/entities/Sto/index.ts:224_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L224)

Retrieve all investments made on this STO

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_Investment_](../interfaces/investment.md)_››_

### invest

▸ **invest**\(`args`: [InvestInStoParams](../interfaces/investinstoparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Sto/index.ts:211_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L211)

Invest in the STO

**`note`** required roles:

* Purchase Portfolio Custodian
* Funding Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `invest.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [InvestInStoParams](../interfaces/investinstoparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

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

### modifyTimes

▸ **modifyTimes**\(`args`: [ModifyStoTimesParams](../globals.md#modifystotimesparams)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Sto/index.ts:197_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L197)

Modify the start/end time of the STO

**`throws`** if:

* Trying to modify the start time on an STO that already started
* Trying to modify anything on an STO that already ended
* Trying to change start or end time to a past date

**`note`** required role:

* Security Token Primary Issuance Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyTimes.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyStoTimesParams](../globals.md#modifystotimesparams) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### unfreeze

▸ **unfreeze**\(`args`: void\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Sto_](sto.md)_››_

_Defined in_ [_src/api/entities/Sto/index.ts:179_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L179)

Unfreeze the STO

**`note`** required role:

* Security Token Primary Issuance Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unfreeze.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Sto_](sto.md)_››_

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


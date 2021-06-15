# CheckpointSchedule

Represents a Schedule in which Checkpoints are created for a specific Security Token. Schedules can be set up to create checkpoints

## Hierarchy

* [Entity](entity.md)‹[UniqueIdentifiers](../interfaces/uniqueidentifiers.md)›

  ↳ **CheckpointSchedule**

## Index

### Properties

* [complexity](checkpointschedule.md#complexity)
* [context](checkpointschedule.md#protected-context)
* [expiryDate](checkpointschedule.md#expirydate)
* [id](checkpointschedule.md#id)
* [period](checkpointschedule.md#period)
* [start](checkpointschedule.md#start)
* [ticker](checkpointschedule.md#ticker)
* [uuid](checkpointschedule.md#uuid)

### Methods

* [details](checkpointschedule.md#details)
* [exists](checkpointschedule.md#exists)
* [getCheckpoints](checkpointschedule.md#getcheckpoints)
* [isEqual](checkpointschedule.md#isequal)
* [generateUuid](checkpointschedule.md#static-generateuuid)
* [unserialize](checkpointschedule.md#static-unserialize)

## Properties

### complexity

• **complexity**: _number_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CheckpointSchedule/index.ts#L74)

abstract measure of the complexity of this Schedule. Shorter periods translate into more complexity

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### expiryDate

• **expiryDate**: _Date \| null_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:69_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CheckpointSchedule/index.ts#L69)

date at which the last Checkpoint will be created with this Schedule. A null value means that this Schedule never expires

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:47_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CheckpointSchedule/index.ts#L47)

schedule identifier number

### period

• **period**: [_CalendarPeriod_](../interfaces/calendarperiod.md) _\| null_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:58_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CheckpointSchedule/index.ts#L58)

how often this Schedule creates a Checkpoint. A null value means this Schedule creates a single Checkpoint and then expires

### start

• **start**: _Date_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:63_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CheckpointSchedule/index.ts#L63)

first Checkpoint creation date

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:52_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CheckpointSchedule/index.ts#L52)

ticker of the Security Token for which Checkpoints are scheduled

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### details

▸ **details**\(\): _Promise‹_[_ScheduleDetails_](../interfaces/scheduledetails.md)_›_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:110_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CheckpointSchedule/index.ts#L110)

Retrieve information specific to this Schedule

**Returns:** _Promise‹_[_ScheduleDetails_](../interfaces/scheduledetails.md)_›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:176_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CheckpointSchedule/index.ts#L176)

Retrieve whether the Checkpoint Schedule still exists on chain

**Returns:** _Promise‹boolean›_

### getCheckpoints

▸ **getCheckpoints**\(\): _Promise‹_[_Checkpoint_](checkpoint.md)_\[\]›_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:144_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CheckpointSchedule/index.ts#L144)

Retrieve all Checkpoints created by this Schedule

**Returns:** _Promise‹_[_Checkpoint_](checkpoint.md)_\[\]›_

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


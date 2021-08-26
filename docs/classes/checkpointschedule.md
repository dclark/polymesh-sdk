# CheckpointSchedule

Represents a Schedule in which Checkpoints are created for a specific Security Token. Schedules can be set up to create checkpoints

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

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
* [toJson](checkpointschedule.md#tojson)
* [generateUuid](checkpointschedule.md#static-generateuuid)
* [unserialize](checkpointschedule.md#static-unserialize)

## Properties

### complexity

• **complexity**: _number_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:83_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L83)

abstract measure of the complexity of this Schedule. Shorter periods translate into more complexity

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L48)

### expiryDate

• **expiryDate**: _Date \| null_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:78_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L78)

date at which the last Checkpoint will be created with this Schedule. A null value means that this Schedule never expires

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:56_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L56)

schedule identifier number

### period

• **period**: [_CalendarPeriod_](../interfaces/calendarperiod.md) _\| null_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:67_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L67)

how often this Schedule creates a Checkpoint. A null value means this Schedule creates a single Checkpoint and then expires

### start

• **start**: _Date_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L72)

first Checkpoint creation date

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L61)

ticker of the Security Token for which Checkpoints are scheduled

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L46)

## Methods

### details

▸ **details**\(\): _Promise‹_[_ScheduleDetails_](../interfaces/scheduledetails.md)_›_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:119_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L119)

Retrieve information specific to this Schedule

**Returns:** _Promise‹_[_ScheduleDetails_](../interfaces/scheduledetails.md)_›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:185_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L185)

Retrieve whether the Checkpoint Schedule still exists on chain

**Returns:** _Promise‹boolean›_

### getCheckpoints

▸ **getCheckpoints**\(\): _Promise‹_[_Checkpoint_](checkpoint.md)_\[\]›_

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:153_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L153)

Retrieve all Checkpoints created by this Schedule

**Returns:** _Promise‹_[_Checkpoint_](checkpoint.md)_\[\]›_

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

### toJson

▸ **toJson**\(\): [_HumanReadable_](../interfaces/humanreadable.md)

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/CheckpointSchedule/index.ts:207_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L207)

Return the Schedule's ID and Token ticker

**Returns:** [_HumanReadable_](../interfaces/humanreadable.md)

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


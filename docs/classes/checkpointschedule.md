# Class: CheckpointSchedule

Represents a Schedule in which Checkpoints are created for a specific
 Security Token. Schedules can be set up to create checkpoints

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

###  complexity

• **complexity**: *number*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CheckpointSchedule/index.ts#L74)*

abstract measure of the complexity of this Schedule. Shorter periods translate into more complexity

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L48)*

___

###  expiryDate

• **expiryDate**: *Date | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CheckpointSchedule/index.ts#L69)*

date at which the last Checkpoint will be created with this Schedule.
  A null value means that this Schedule never expires

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CheckpointSchedule/index.ts#L47)*

schedule identifier number

___

###  period

• **period**: *[CalendarPeriod](../interfaces/calendarperiod.md) | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:58](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CheckpointSchedule/index.ts#L58)*

how often this Schedule creates a Checkpoint. A null value means this Schedule
  creates a single Checkpoint and then expires

___

###  start

• **start**: *Date*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CheckpointSchedule/index.ts#L63)*

first Checkpoint creation date

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CheckpointSchedule/index.ts#L52)*

ticker of the Security Token for which Checkpoints are scheduled

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L46)*

## Methods

###  details

▸ **details**(): *Promise‹[ScheduleDetails](../interfaces/scheduledetails.md)›*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CheckpointSchedule/index.ts#L110)*

Retrieve information specific to this Schedule

**Returns:** *Promise‹[ScheduleDetails](../interfaces/scheduledetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:176](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CheckpointSchedule/index.ts#L176)*

Retrieve whether the Checkpoint Schedule still exists on chain

**Returns:** *Promise‹boolean›*

___

###  getCheckpoints

▸ **getCheckpoints**(): *Promise‹[Checkpoint](checkpoint.md)[]›*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:144](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CheckpointSchedule/index.ts#L144)*

Retrieve all Checkpoints created by this Schedule

**Returns:** *Promise‹[Checkpoint](checkpoint.md)[]›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹object›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹object› |

**Returns:** *boolean*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L14)*

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

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

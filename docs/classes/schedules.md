# Schedules

Handles all Security Token Checkpoint Schedules related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Schedules**

## Index

### Properties

* [context](schedules.md#protected-context)
* [parent](schedules.md#protected-parent)

### Methods

* [complexityOf](schedules.md#complexityof)
* [create](schedules.md#create)
* [currentComplexity](schedules.md#currentcomplexity)
* [get](schedules.md#get)
* [maxComplexity](schedules.md#maxcomplexity)
* [remove](schedules.md#remove)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L9)

## Methods

### complexityOf

▸ **complexityOf**\(`period`: [CalendarPeriod](../interfaces/calendarperiod.md)\): _number_

_Defined in_ [_src/api/entities/SecurityToken/Checkpoints/Schedules.ts:105_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L105)

Calculate an abstract measure of the complexity of a given Calendar Period

**Parameters:**

| Name | Type |
| :--- | :--- |
| `period` | [CalendarPeriod](../interfaces/calendarperiod.md) |

**Returns:** _number_

### create

▸ **create**\(`args`: [CreateCheckpointScheduleParams](../interfaces/createcheckpointscheduleparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_CheckpointSchedule_](checkpointschedule.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Checkpoints/Schedules.ts:55_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L55)

Create a schedule for Checkpoint creation \(i.e. "Create a checkpoint every week for 5 weeks, starting next tuesday"\)

**`note`** due to chain limitations, schedules are advanced and \(if appropriate\) executed whenever the Security Token is redeemed, issued or transferred between portfolios. This means that on a Security Token without much movement, there may be disparities between intended Checkpoint creation dates and the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `create.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [CreateCheckpointScheduleParams](../interfaces/createcheckpointscheduleparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_CheckpointSchedule_](checkpointschedule.md)_››_

### currentComplexity

▸ **currentComplexity**\(\): _Promise‹number›_

_Defined in_ [_src/api/entities/SecurityToken/Checkpoints/Schedules.ts:113_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L113)

Calculate the sum of the complexity of all current Checkpoint Schedules for this Security Token. The number cannot exceed the Token's maximum complexity \(obtained via [maxComplexity](schedules.md#maxcomplexity)\)

**Returns:** _Promise‹number›_

### get

▸ **get**\(\): _Promise‹_[_ScheduleWithDetails_](../interfaces/schedulewithdetails.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Checkpoints/Schedules.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L72)

Retrieve all active Checkpoint Schedules

**Returns:** _Promise‹_[_ScheduleWithDetails_](../interfaces/schedulewithdetails.md)_\[\]›_

### maxComplexity

▸ **maxComplexity**\(\): _Promise‹number›_

_Defined in_ [_src/api/entities/SecurityToken/Checkpoints/Schedules.ts:122_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L122)

Retrieve the maximum allowed Schedule complexity for this Security Token

**Returns:** _Promise‹number›_

### remove

▸ **remove**\(`args`: [RemoveCheckpointScheduleParams](../interfaces/removecheckpointscheduleparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/Checkpoints/Schedules.ts:65_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L65)

Remove the supplied Checkpoint Schedule for a given Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `remove.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RemoveCheckpointScheduleParams](../interfaces/removecheckpointscheduleparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_


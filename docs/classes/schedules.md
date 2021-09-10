# Class: Schedules

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

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L9)*

## Methods

###  complexityOf

▸ **complexityOf**(`period`: [CalendarPeriod](../interfaces/calendarperiod.md)): *number*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L105)*

Calculate an abstract measure of the complexity of a given Calendar Period

**Parameters:**

Name | Type |
------ | ------ |
`period` | [CalendarPeriod](../interfaces/calendarperiod.md) |

**Returns:** *number*

___

###  create

▸ **create**(`args`: [CreateCheckpointScheduleParams](../interfaces/createcheckpointscheduleparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[CheckpointSchedule](checkpointschedule.md)››*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L55)*

Create a schedule for Checkpoint creation (i.e. "Create a checkpoint every week for 5 weeks, starting next tuesday")

**`note`** due to chain limitations, schedules are advanced and (if appropriate) executed whenever the Security Token is
  redeemed, issued or transferred between portfolios. This means that on a Security Token without much movement, there may be disparities between intended Checkpoint creation dates
  and the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `create.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateCheckpointScheduleParams](../interfaces/createcheckpointscheduleparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[CheckpointSchedule](checkpointschedule.md)››*

___

###  currentComplexity

▸ **currentComplexity**(): *Promise‹number›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L113)*

Calculate the sum of the complexity of all current Checkpoint Schedules for this Security Token.
  The number cannot exceed the Token's maximum complexity (obtained via [maxComplexity](schedules.md#maxcomplexity))

**Returns:** *Promise‹number›*

___

###  get

▸ **get**(): *Promise‹[ScheduleWithDetails](../interfaces/schedulewithdetails.md)[]›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L72)*

Retrieve all active Checkpoint Schedules

**Returns:** *Promise‹[ScheduleWithDetails](../interfaces/schedulewithdetails.md)[]›*

___

###  maxComplexity

▸ **maxComplexity**(): *Promise‹number›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:122](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L122)*

Retrieve the maximum allowed Schedule complexity for this Security Token

**Returns:** *Promise‹number›*

___

###  remove

▸ **remove**(`args`: [RemoveCheckpointScheduleParams](../interfaces/removecheckpointscheduleparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L65)*

Remove the supplied Checkpoint Schedule for a given Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `remove.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveCheckpointScheduleParams](../interfaces/removecheckpointscheduleparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

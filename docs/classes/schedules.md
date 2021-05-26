# Class: Schedules

Handles all Security Token Checkpoint Schedules related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Schedules**

## Index

### Properties

* [context](schedules.md#protected-context)
* [create](schedules.md#create)
* [parent](schedules.md#protected-parent)
* [remove](schedules.md#remove)

### Methods

* [complexityOf](schedules.md#complexityof)
* [currentComplexity](schedules.md#currentcomplexity)
* [get](schedules.md#get)
* [maxComplexity](schedules.md#maxcomplexity)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L11)*

___

###  create

• **create**: *ProcedureMethod‹[CreateCheckpointScheduleParams](../interfaces/createcheckpointscheduleparams.md), [CheckpointSchedule](checkpointschedule.md)›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L54)*

Create a schedule for Checkpoint creation (i.e. "Create a checkpoint every week for 5 weeks, starting next tuesday")

**`note`** due to chain limitations, schedules are advanced and (if appropriate) executed whenever the Security Token is
  redeemed, issued or transferred between portfolios. This means that on a Security Token without much movement, there may be disparities between intended Checkpoint creation dates
  and the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances

**`note`** required role:
  - Security Token Owner

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L9)*

___

###  remove

• **remove**: *ProcedureMethod‹[RemoveCheckpointScheduleParams](../interfaces/removecheckpointscheduleparams.md), void›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:64](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L64)*

Remove the supplied Checkpoint Schedule for a given Security Token

**`param`** Schedule (or ID) of the schedule to be removed

**`note`** required role:
  - Security Token Owner

## Methods

###  complexityOf

▸ **complexityOf**(`period`: [CalendarPeriod](../interfaces/calendarperiod.md)): *number*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:102](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L102)*

Calculate an abstract measure of the complexity of a given Calendar Period

**Parameters:**

Name | Type |
------ | ------ |
`period` | [CalendarPeriod](../interfaces/calendarperiod.md) |

**Returns:** *number*

___

###  currentComplexity

▸ **currentComplexity**(): *Promise‹number›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L110)*

Calculate the sum of the complexity of all current Checkpoint Schedules for this Security Token.
  The number cannot exceed the Token's maximum complexity (obtained via [maxComplexity](schedules.md#maxcomplexity))

**Returns:** *Promise‹number›*

___

###  get

▸ **get**(): *Promise‹[ScheduleWithDetails](../interfaces/schedulewithdetails.md)[]›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L69)*

Retrieve all active Checkpoint Schedules

**Returns:** *Promise‹[ScheduleWithDetails](../interfaces/schedulewithdetails.md)[]›*

___

###  maxComplexity

▸ **maxComplexity**(): *Promise‹number›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/Schedules.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Checkpoints/Schedules.ts#L119)*

Retrieve the maximum allowed Schedule complexity for this Security Token

**Returns:** *Promise‹number›*

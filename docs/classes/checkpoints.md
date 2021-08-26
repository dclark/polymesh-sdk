# Checkpoints

Handles all Security Token Checkpoints related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Checkpoints**

## Index

### Properties

* [context](checkpoints.md#protected-context)
* [parent](checkpoints.md#protected-parent)
* [schedules](checkpoints.md#schedules)

### Methods

* [create](checkpoints.md#create)
* [get](checkpoints.md#get)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L9)

### schedules

• **schedules**: [_Schedules_](schedules.md)

_Defined in_ [_src/api/entities/SecurityToken/Checkpoints/index.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Checkpoints/index.ts#L23)

## Methods

### create

▸ **create**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Checkpoint_](checkpoint.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Checkpoints/index.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Checkpoints/index.ts#L50)

Create a snapshot of Security Token holders and their respective balances at this moment

**`note`** required role:

* Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `create.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Checkpoint_](checkpoint.md)_››_

### get

▸ **get**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_CheckpointWithData_](../interfaces/checkpointwithdata.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Checkpoints/index.ts:59_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/Checkpoints/index.ts#L59)

Retrieve all Checkpoints created on this Security Token, together with their corresponding creation Date and Total Supply

**`note`** supports pagination

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_CheckpointWithData_](../interfaces/checkpointwithdata.md)_››_


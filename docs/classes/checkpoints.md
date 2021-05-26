# Class: Checkpoints

Handles all Security Token Checkpoints related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Checkpoints**

## Index

### Properties

* [context](checkpoints.md#protected-context)
* [create](checkpoints.md#create)
* [parent](checkpoints.md#protected-parent)
* [schedules](checkpoints.md#schedules)

### Methods

* [get](checkpoints.md#get)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L11)*

___

###  create

• **create**: *ProcedureMethod‹void, [Checkpoint](checkpoint.md)›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/index.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Checkpoints/index.ts#L46)*

Create a snapshot of Security Token holders and their respective balances at this moment

**`note`** required role:
  - Security Token Owner

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L9)*

___

###  schedules

• **schedules**: *[Schedules](schedules.md)*

*Defined in [src/api/entities/SecurityToken/Checkpoints/index.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Checkpoints/index.ts#L22)*

## Methods

###  get

▸ **get**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[CheckpointWithData](../interfaces/checkpointwithdata.md)››*

*Defined in [src/api/entities/SecurityToken/Checkpoints/index.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Checkpoints/index.ts#L53)*

Retrieve all Checkpoints created on this Security Token, together with their corresponding creation Date and Total Supply

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[CheckpointWithData](../interfaces/checkpointwithdata.md)››*

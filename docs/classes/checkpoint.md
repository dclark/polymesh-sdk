# Class: Checkpoint

Represents a snapshot of the Security Token's holders and their respective balances
  at a certain point in time

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Checkpoint**

## Index

### Properties

* [context](checkpoint.md#protected-context)
* [id](checkpoint.md#id)
* [ticker](checkpoint.md#ticker)
* [uuid](checkpoint.md#uuid)

### Methods

* [allBalances](checkpoint.md#allbalances)
* [balance](checkpoint.md#balance)
* [createdAt](checkpoint.md#createdat)
* [exists](checkpoint.md#exists)
* [isEqual](checkpoint.md#isequal)
* [totalSupply](checkpoint.md#totalsupply)
* [generateUuid](checkpoint.md#static-generateuuid)
* [unserialize](checkpoint.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Checkpoint.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Checkpoint.ts#L43)*

checkpoint identifier number

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/Checkpoint.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Checkpoint.ts#L48)*

ticker of the Security Token whose balances are being recorded

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L46)*

## Methods

###  allBalances

▸ **allBalances**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

*Defined in [src/api/entities/Checkpoint.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Checkpoint.ts#L95)*

Retrieve all Tokenholder balances at this Checkpoint

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

___

###  balance

▸ **balance**(`args?`: undefined | object): *Promise‹BigNumber›*

*Defined in [src/api/entities/Checkpoint.ts:177](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Checkpoint.ts#L177)*

Retrieve the balance of a specific Tokenholder Identity at this Checkpoint

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹BigNumber›*

___

###  createdAt

▸ **createdAt**(): *Promise‹Date›*

*Defined in [src/api/entities/Checkpoint.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Checkpoint.ts#L79)*

Retrieve this Checkpoint's creation date

**Returns:** *Promise‹Date›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Defined in [src/api/entities/Checkpoint.ts:217](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Checkpoint.ts#L217)*

Retrieve whether the Checkpoint still exists on chain

**Returns:** *Promise‹boolean›*

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

###  totalSupply

▸ **totalSupply**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/Checkpoint.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Checkpoint.ts#L65)*

Retrieve the Security Token's total supply at this checkpoint

**Returns:** *Promise‹BigNumber›*

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

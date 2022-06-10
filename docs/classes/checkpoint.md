# Class: Checkpoint

Represents a snapshot of the Asset's holders and their respective balances
  at a certain point in time

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **Checkpoint**

## Index

### Properties

* [asset](checkpoint.md#asset)
* [context](checkpoint.md#protected-context)
* [id](checkpoint.md#id)
* [uuid](checkpoint.md#uuid)

### Methods

* [allBalances](checkpoint.md#allbalances)
* [balance](checkpoint.md#balance)
* [createdAt](checkpoint.md#createdat)
* [exists](checkpoint.md#exists)
* [isEqual](checkpoint.md#isequal)
* [toHuman](checkpoint.md#tohuman)
* [totalSupply](checkpoint.md#totalsupply)
* [generateUuid](checkpoint.md#static-generateuuid)
* [unserialize](checkpoint.md#static-unserialize)

## Properties

###  asset

• **asset**: *[Asset](asset.md)*

*Defined in [src/api/entities/Checkpoint.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Checkpoint.ts#L51)*

Asset whose balances are being recorded in this Checkpoint

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Checkpoint.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Checkpoint.ts#L46)*

Checkpoint identifier number

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L46)*

## Methods

###  allBalances

▸ **allBalances**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

*Defined in [src/api/entities/Checkpoint.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Checkpoint.ts#L108)*

Retrieve all Asset Holder balances at this Checkpoint

**`note`** supports pagination

**`note`** current Asset holders who didn't hold any tokens when the Checkpoint was created will be listed with a balance of 0.
This arises from a chain storage optimization and pagination. @see [balance](checkpoint.md#balance) for a more detailed explanation of the logic

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

___

###  balance

▸ **balance**(`args?`: undefined | object): *Promise‹BigNumber›*

*Defined in [src/api/entities/Checkpoint.ts:201](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Checkpoint.ts#L201)*

Retrieve the balance of a specific Asset Holder Identity at this Checkpoint

**`note`** A checkpoint only records balances when they change. The implementation is to query for all balance updates for [ticker, did] pair.
If no balance updates have happened since the Checkpoint has been created, then the storage will not have an entry for the user. Instead the current balance should be used.
The balance is stored only when the Identity makes a transaction after a Checkpoint is created. This helps keep storage usage to a minimum

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹BigNumber›*

___

###  createdAt

▸ **createdAt**(): *Promise‹Date›*

*Defined in [src/api/entities/Checkpoint.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Checkpoint.ts#L86)*

Retrieve this Checkpoint's creation date

**Returns:** *Promise‹Date›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Checkpoint.ts:245](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Checkpoint.ts#L245)*

Determine whether this Checkpoint exists on chain

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  toHuman

▸ **toHuman**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/Checkpoint.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Checkpoint.ts#L265)*

Return the Checkpoint's ticker and identifier

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

###  totalSupply

▸ **totalSupply**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/Checkpoint.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Checkpoint.ts#L68)*

Retrieve the Asset's total supply at this checkpoint

**Returns:** *Promise‹BigNumber›*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

# Checkpoint

Represents a snapshot of the Security Token's holders and their respective balances at a certain point in time

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

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/Checkpoint.ts:43_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Checkpoint.ts#L43)

checkpoint identifier number

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/Checkpoint.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Checkpoint.ts#L48)

ticker of the Security Token whose balances are being recorded

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### allBalances

▸ **allBalances**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityBalance_](../interfaces/identitybalance.md)_››_

_Defined in_ [_src/api/entities/Checkpoint.ts:95_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Checkpoint.ts#L95)

Retrieve all Tokenholder balances at this Checkpoint

**`note`** supports pagination

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityBalance_](../interfaces/identitybalance.md)_››_

### balance

▸ **balance**\(`args?`: undefined \| object\): _Promise‹BigNumber›_

_Defined in_ [_src/api/entities/Checkpoint.ts:177_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Checkpoint.ts#L177)

Retrieve the balance of a specific Tokenholder Identity at this Checkpoint

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹BigNumber›_

### createdAt

▸ **createdAt**\(\): _Promise‹Date›_

_Defined in_ [_src/api/entities/Checkpoint.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Checkpoint.ts#L79)

Retrieve this Checkpoint's creation date

**Returns:** _Promise‹Date›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Checkpoint.ts:217_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Checkpoint.ts#L217)

Retrieve whether the Checkpoint still exists on chain

**Returns:** _Promise‹boolean›_

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

### totalSupply

▸ **totalSupply**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/api/entities/Checkpoint.ts:65_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Checkpoint.ts#L65)

Retrieve the Security Token's total supply at this checkpoint

**Returns:** _Promise‹BigNumber›_

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


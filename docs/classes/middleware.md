# Middleware

Handles all Middleware related functionality

## Hierarchy

* **Middleware**

## Index

### Methods

* [getEventByIndexedArgs](middleware.md#geteventbyindexedargs)
* [getEventsByIndexedArgs](middleware.md#geteventsbyindexedargs)
* [getTransactionByHash](middleware.md#gettransactionbyhash)

## Methods

### getEventByIndexedArgs

▸ **getEventByIndexedArgs**\(`opts`: object\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/Middleware.ts:31_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Middleware.ts#L31)

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

**Parameters:**

▪ **opts**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `eventArg0?` | undefined \| string | event value to filter in position 0 |
| `eventArg1?` | undefined \| string | event value to filter in position 1 |
| `eventArg2?` | undefined \| string | event value to filter in position 2 |
| `eventId` | EventIdEnum | type of the event to fetch |
| `moduleId` | ModuleIdEnum | type of the module to fetch |

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### getEventsByIndexedArgs

▸ **getEventsByIndexedArgs**\(`opts`: object\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md)_\[\] \| null›_

_Defined in_ [_src/Middleware.ts:76_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Middleware.ts#L76)

Retrieve a list of events. Can be filtered using parameters

**Parameters:**

▪ **opts**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `eventArg0?` | undefined \| string | event value to filter in position 0 |
| `eventArg1?` | undefined \| string | event value to filter in position 1 |
| `eventArg2?` | undefined \| string | event value to filter in position 2 |
| `eventId` | EventIdEnum | type of the event to fetch |
| `moduleId` | ModuleIdEnum | type of the module to fetch |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md)_\[\] \| null›_

### getTransactionByHash

▸ **getTransactionByHash**\(`opts`: object\): _Promise‹_[_ExtrinsicData_](../interfaces/extrinsicdata.md) _\| null›_

_Defined in_ [_src/Middleware.ts:123_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Middleware.ts#L123)

Retrieve a transaction by hash

**Parameters:**

▪ **opts**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `txHash` | string | hash of the transaction |

**Returns:** _Promise‹_[_ExtrinsicData_](../interfaces/extrinsicdata.md) _\| null›_


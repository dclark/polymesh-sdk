# Class: Middleware

Handles all Middleware related functionality

## Hierarchy

* **Middleware**

## Index

### Methods

* [getEventByIndexedArgs](middleware.md#geteventbyindexedargs)
* [getEventsByIndexedArgs](middleware.md#geteventsbyindexedargs)
* [getTransactionByHash](middleware.md#gettransactionbyhash)

## Methods

###  getEventByIndexedArgs

▸ **getEventByIndexedArgs**(`opts`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/Middleware.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Middleware.ts#L31)*

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`eventArg0?` | undefined &#124; string | event value to filter in position 0 |
`eventArg1?` | undefined &#124; string | event value to filter in position 1 |
`eventArg2?` | undefined &#124; string | event value to filter in position 2  |
`eventId` | EventIdEnum | type of the event to fetch |
`moduleId` | ModuleIdEnum | type of the module to fetch |

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  getEventsByIndexedArgs

▸ **getEventsByIndexedArgs**(`opts`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md)[] | null›*

*Defined in [src/Middleware.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Middleware.ts#L76)*

Retrieve a list of events. Can be filtered using parameters

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`eventArg0?` | undefined &#124; string | event value to filter in position 0 |
`eventArg1?` | undefined &#124; string | event value to filter in position 1 |
`eventArg2?` | undefined &#124; string | event value to filter in position 2 |
`eventId` | EventIdEnum | type of the event to fetch |
`moduleId` | ModuleIdEnum | type of the module to fetch |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md)[] | null›*

___

###  getTransactionByHash

▸ **getTransactionByHash**(`opts`: object): *Promise‹[ExtrinsicData](../interfaces/extrinsicdata.md) | null›*

*Defined in [src/Middleware.ts:123](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/Middleware.ts#L123)*

Retrieve a transaction by hash

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`txHash` | string | hash of the transaction  |

**Returns:** *Promise‹[ExtrinsicData](../interfaces/extrinsicdata.md) | null›*

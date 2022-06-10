# Class: Network

Handles all Network related functionality, including querying for historical events from middleware

## Hierarchy

* **Network**

## Index

### Methods

* [getEventByIndexedArgs](network.md#geteventbyindexedargs)
* [getEventsByIndexedArgs](network.md#geteventsbyindexedargs)
* [getLatestBlock](network.md#getlatestblock)
* [getNetworkProperties](network.md#getnetworkproperties)
* [getProtocolFees](network.md#getprotocolfees)
* [getSs58Format](network.md#getss58format)
* [getTransactionByHash](network.md#gettransactionbyhash)
* [getTreasuryAccount](network.md#gettreasuryaccount)
* [getTreasuryBalance](network.md#gettreasurybalance)
* [getVersion](network.md#getversion)
* [transferPolyx](network.md#transferpolyx)

## Methods

###  getEventByIndexedArgs

▸ **getEventByIndexedArgs**(`opts`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/Network.ts:158](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L158)*

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`eventArg0?` | undefined &#124; string | event parameter value to filter by in position 0 |
`eventArg1?` | undefined &#124; string | event parameter value to filter by in position 1 |
`eventArg2?` | undefined &#124; string | event parameter value to filter by in position 2  |
`eventId` | EventId | type of the event to fetch |
`moduleId` | ModuleId | type of the module to fetch |

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  getEventsByIndexedArgs

▸ **getEventsByIndexedArgs**(`opts`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md)[] | null›*

*Defined in [src/Network.ts:197](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L197)*

Retrieve a list of events. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`eventArg0?` | undefined &#124; string | event parameter value to filter by in position 0 |
`eventArg1?` | undefined &#124; string | event parameter value to filter by in position 1 |
`eventArg2?` | undefined &#124; string | event parameter value to filter by in position 2 |
`eventId` | EventId | type of the event to fetch |
`moduleId` | ModuleId | type of the module to fetch |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md)[] | null›*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/Network.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L52)*

Retrieve the number of the latest block in the chain

**Returns:** *Promise‹BigNumber›*

___

###  getNetworkProperties

▸ **getNetworkProperties**(): *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

*Defined in [src/Network.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L73)*

Retrieve information for the current network

**Returns:** *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

___

###  getProtocolFees

▸ **getProtocolFees**(`args`: object): *Promise‹[ProtocolFees](../interfaces/protocolfees.md)[]›*

*Defined in [src/Network.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L97)*

Retrieve the protocol fees associated with running specific transactions

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tags` | TxTag[] | list of transaction tags (i.e. [TxTags.asset.CreateAsset, TxTags.asset.RegisterTicker] or ["asset.createAsset", "asset.registerTicker"])  |

**Returns:** *Promise‹[ProtocolFees](../interfaces/protocolfees.md)[]›*

___

###  getSs58Format

▸ **getSs58Format**(): *BigNumber*

*Defined in [src/Network.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L66)*

Retrieve the chain's SS58 format

**Returns:** *BigNumber*

___

###  getTransactionByHash

▸ **getTransactionByHash**(`opts`: object): *Promise‹[ExtrinsicDataWithFees](../interfaces/extrinsicdatawithfees.md) | null›*

*Defined in [src/Network.ts:241](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L241)*

Retrieve a transaction by hash

**`note`** uses the middleware

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`txHash` | string | hash of the transaction  |

**Returns:** *Promise‹[ExtrinsicDataWithFees](../interfaces/extrinsicdatawithfees.md) | null›*

___

###  getTreasuryAccount

▸ **getTreasuryAccount**(): *[Account](account.md)*

*Defined in [src/Network.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L104)*

Get the treasury wallet address

**Returns:** *[Account](account.md)*

___

###  getTreasuryBalance

▸ **getTreasuryBalance**(): *Promise‹BigNumber›*

*Defined in [src/Network.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L117)*

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** *Promise‹BigNumber›*

▸ **getTreasuryBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Network.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getVersion

▸ **getVersion**(): *Promise‹string›*

*Defined in [src/Network.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L59)*

Fetch the current network version (i.e. 3.1.0)

**Returns:** *Promise‹string›*

___

###  transferPolyx

▸ **transferPolyx**(`args`: [TransferPolyxParams](../interfaces/transferpolyxparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Network.ts:143](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/Network.ts#L143)*

Transfer an amount of POLYX to a specified Account

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [transferPolyx.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferPolyxParams](../interfaces/transferpolyxparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

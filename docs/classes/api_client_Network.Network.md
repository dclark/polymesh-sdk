[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/client/Network](../modules/api_client_Network.md) / Network

# Class: Network

[api/client/Network](../modules/api_client_Network.md).Network

Handles all Network related functionality, including querying for historical events from middleware

## Table of contents

### Methods

- [getEventByIndexedArgs](api_client_Network.Network.md#geteventbyindexedargs)
- [getEventsByIndexedArgs](api_client_Network.Network.md#geteventsbyindexedargs)
- [getLatestBlock](api_client_Network.Network.md#getlatestblock)
- [getNetworkProperties](api_client_Network.Network.md#getnetworkproperties)
- [getProtocolFees](api_client_Network.Network.md#getprotocolfees)
- [getSs58Format](api_client_Network.Network.md#getss58format)
- [getTransactionByHash](api_client_Network.Network.md#gettransactionbyhash)
- [getTreasuryAccount](api_client_Network.Network.md#gettreasuryaccount)
- [getTreasuryBalance](api_client_Network.Network.md#gettreasurybalance)
- [getVersion](api_client_Network.Network.md#getversion)
- [transferPolyx](api_client_Network.Network.md#transferpolyx)

## Methods

### getEventByIndexedArgs

▸ **getEventByIndexedArgs**(`opts`): `Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

**`note`** uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.eventArg0?` | `string` | event parameter value to filter by in position 0 |
| `opts.eventArg1?` | `string` | event parameter value to filter by in position 1 |
| `opts.eventArg2?` | `string` | event parameter value to filter by in position 2 |
| `opts.eventId` | `EventIdEnum` | type of the event to fetch |
| `opts.moduleId` | `ModuleIdEnum` | type of the module to fetch |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>

#### Defined in

[api/client/Network.ts:158](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L158)

___

### getEventsByIndexedArgs

▸ **getEventsByIndexedArgs**(`opts`): `Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)[]\>

Retrieve a list of events. Can be filtered using parameters

**`note`** uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.eventArg0?` | `string` | event parameter value to filter by in position 0 |
| `opts.eventArg1?` | `string` | event parameter value to filter by in position 1 |
| `opts.eventArg2?` | `string` | event parameter value to filter by in position 2 |
| `opts.eventId` | `EventIdEnum` | type of the event to fetch |
| `opts.moduleId` | `ModuleIdEnum` | type of the module to fetch |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)[]\>

#### Defined in

[api/client/Network.ts:197](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L197)

___

### getLatestBlock

▸ **getLatestBlock**(): `Promise`<`BigNumber`\>

Retrieve the number of the latest block in the chain

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/client/Network.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L52)

___

### getNetworkProperties

▸ **getNetworkProperties**(): `Promise`<[`NetworkProperties`](../interfaces/types.NetworkProperties.md)\>

Retrieve information for the current network

#### Returns

`Promise`<[`NetworkProperties`](../interfaces/types.NetworkProperties.md)\>

#### Defined in

[api/client/Network.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L73)

___

### getProtocolFees

▸ **getProtocolFees**(`args`): `Promise`<[`ProtocolFees`](../interfaces/types.ProtocolFees.md)[]\>

Retrieve the protocol fees associated with running specific transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.tags` | `TxTag`[] | list of transaction tags (i.e. [TxTags.asset.CreateAsset, TxTags.asset.RegisterTicker] or ["asset.createAsset", "asset.registerTicker"]) |

#### Returns

`Promise`<[`ProtocolFees`](../interfaces/types.ProtocolFees.md)[]\>

#### Defined in

[api/client/Network.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L97)

___

### getSs58Format

▸ **getSs58Format**(): `BigNumber`

Retrieve the chain's SS58 format

#### Returns

`BigNumber`

#### Defined in

[api/client/Network.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L66)

___

### getTransactionByHash

▸ **getTransactionByHash**(`opts`): `Promise`<``null`` \| [`ExtrinsicDataWithFees`](../interfaces/types.ExtrinsicDataWithFees.md)\>

Retrieve a transaction by hash

**`note`** uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.txHash` | `string` | hash of the transaction |

#### Returns

`Promise`<``null`` \| [`ExtrinsicDataWithFees`](../interfaces/types.ExtrinsicDataWithFees.md)\>

#### Defined in

[api/client/Network.ts:241](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L241)

___

### getTreasuryAccount

▸ **getTreasuryAccount**(): [`Account`](api_entities_Account.Account.md)

Get the treasury wallet address

#### Returns

[`Account`](api_entities_Account.Account.md)

#### Defined in

[api/client/Network.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L104)

___

### getTreasuryBalance

▸ **getTreasuryBalance**(): `Promise`<`BigNumber`\>

Get the Treasury POLYX balance

**`note`** can be subscribed to

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/client/Network.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L117)

▸ **getTreasuryBalance**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<`BigNumber`\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/client/Network.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L118)

___

### getVersion

▸ **getVersion**(): `Promise`<`string`\>

Fetch the current network version (i.e. 3.1.0)

#### Returns

`Promise`<`string`\>

#### Defined in

[api/client/Network.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L59)

___

### transferPolyx

▸ **transferPolyx**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Transfer an amount of POLYX to a specified Account

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [transferPolyx.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferPolyxParams`](../interfaces/api_procedures_transferPolyx.TransferPolyxParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/Network.ts:143](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Network.ts#L143)

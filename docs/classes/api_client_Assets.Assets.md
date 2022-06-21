[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/client/Assets](../modules/api_client_Assets.md) / Assets

# Class: Assets

[api/client/Assets](../modules/api_client_Assets.md).Assets

Handles all Asset related functionality

## Table of contents

### Methods

- [claimClassicTicker](api_client_Assets.Assets.md#claimclassicticker)
- [createAsset](api_client_Assets.Assets.md#createasset)
- [getAsset](api_client_Assets.Assets.md#getasset)
- [getAssets](api_client_Assets.Assets.md#getassets)
- [getTickerReservation](api_client_Assets.Assets.md#gettickerreservation)
- [getTickerReservations](api_client_Assets.Assets.md#gettickerreservations)
- [isTickerAvailable](api_client_Assets.Assets.md#istickeravailable)
- [reserveTicker](api_client_Assets.Assets.md#reserveticker)

## Methods

### claimClassicTicker

▸ **claimClassicTicker**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), [`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), `unknown`[][]\>\>

Claim a ticker symbol that was reserved in Polymath Classic (Ethereum). The Ethereum Account
  that owns the ticker must sign a special message that contains the DID of the Identity that will own the ticker
  in Polymesh, and provide the signed data to this call

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [claimClassicTicker.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ClaimClassicTickerParams`](../interfaces/api_procedures_claimClassicTicker.ClaimClassicTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), [`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), `unknown`[][]\>\>

#### Defined in

[api/client/Assets.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Assets.ts#L79)

___

### createAsset

▸ **createAsset**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Create an Asset

**`note`** if ticker is already reserved, then required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [createAsset.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateAssetWithTickerParams`](../interfaces/api_procedures_createAsset.CreateAssetWithTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/client/Assets.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Assets.ts#L92)

___

### getAsset

▸ **getAsset**(`args`): `Promise`<[`Asset`](api_entities_Asset.Asset.md)\>

Retrieve an Asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.ticker` | `string` | Asset ticker |

#### Returns

`Promise`<[`Asset`](api_entities_Asset.Asset.md)\>

#### Defined in

[api/client/Assets.ts:213](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Assets.ts#L213)

___

### getAssets

▸ **getAssets**(`args?`): `Promise`<[`Asset`](api_entities_Asset.Asset.md)[]\>

Retrieve all of the Assets owned by an Identity

**`note`** Assets with unreadable characters in their tickers will be left out

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.owner` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | Identity representation or Identity ID as stored in the blockchain |

#### Returns

`Promise`<[`Asset`](api_entities_Asset.Asset.md)[]\>

#### Defined in

[api/client/Assets.ts:181](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Assets.ts#L181)

___

### getTickerReservation

▸ **getTickerReservation**(`args`): [`TickerReservation`](api_entities_TickerReservation.TickerReservation.md)

Retrieve a Ticker Reservation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.ticker` | `string` | Asset ticker |

#### Returns

[`TickerReservation`](api_entities_TickerReservation.TickerReservation.md)

#### Defined in

[api/client/Assets.ts:167](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Assets.ts#L167)

___

### getTickerReservations

▸ **getTickerReservations**(`args?`): `Promise`<[`TickerReservation`](api_entities_TickerReservation.TickerReservation.md)[]\>

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include Assets that
  have already been launched

**`note`** reservations with unreadable characters in their tickers will be left out

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.owner` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`<[`TickerReservation`](api_entities_TickerReservation.TickerReservation.md)[]\>

#### Defined in

[api/client/Assets.ts:133](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Assets.ts#L133)

___

### isTickerAvailable

▸ **isTickerAvailable**(`args`): `Promise`<`boolean`\>

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/client/Assets.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Assets.ts#L101)

▸ **isTickerAvailable**(`args`, `callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/client/Assets.ts:102](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Assets.ts#L102)

___

### reserveTicker

▸ **reserveTicker**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), [`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), `unknown`[][]\>\>

Reserve a ticker symbol under the ownership of the signing Identity to later use in the creation of an Asset.
  The ticker will expire after a set amount of time, after which other users can reserve it

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [reserveTicker.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ReserveTickerParams`](../interfaces/api_procedures_reserveTicker.ReserveTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), [`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), `unknown`[][]\>\>

#### Defined in

[api/client/Assets.ts:67](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Assets.ts#L67)

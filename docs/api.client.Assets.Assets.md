# Class: Assets

[api/client/Assets](../wiki/api.client.Assets).Assets

Handles all Asset related functionality

## Table of contents

### Methods

- [claimClassicTicker](../wiki/api.client.Assets.Assets#claimclassicticker)
- [createAsset](../wiki/api.client.Assets.Assets#createasset)
- [getAsset](../wiki/api.client.Assets.Assets#getasset)
- [getAssets](../wiki/api.client.Assets.Assets#getassets)
- [getTickerReservation](../wiki/api.client.Assets.Assets#gettickerreservation)
- [getTickerReservations](../wiki/api.client.Assets.Assets#gettickerreservations)
- [isTickerAvailable](../wiki/api.client.Assets.Assets#istickeravailable)
- [reserveTicker](../wiki/api.client.Assets.Assets#reserveticker)

## Methods

### claimClassicTicker

▸ **claimClassicTicker**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), [`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), `unknown`[][]\>\>

Claim a ticker symbol that was reserved in Polymath Classic (Ethereum). The Ethereum Account
  that owns the ticker must sign a special message that contains the DID of the Identity that will own the ticker
  in Polymesh, and provide the signed data to this call

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [claimClassicTicker.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ClaimClassicTickerParams`](../wiki/api.procedures.types.ClaimClassicTickerParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), [`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), `unknown`[][]\>\>

#### Defined in

[api/client/Assets.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Assets.ts#L79)

___

### createAsset

▸ **createAsset**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Create an Asset

**`note`** if ticker is already reserved, then required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [createAsset.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateAssetWithTickerParams`](../wiki/api.procedures.types.CreateAssetWithTickerParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/client/Assets.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Assets.ts#L92)

___

### getAsset

▸ **getAsset**(`args`): `Promise`<[`Asset`](../wiki/api.entities.Asset.Asset)\>

Retrieve an Asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.ticker` | `string` | Asset ticker |

#### Returns

`Promise`<[`Asset`](../wiki/api.entities.Asset.Asset)\>

#### Defined in

[api/client/Assets.ts:213](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Assets.ts#L213)

___

### getAssets

▸ **getAssets**(`args?`): `Promise`<[`Asset`](../wiki/api.entities.Asset.Asset)[]\>

Retrieve all of the Assets owned by an Identity

**`note`** Assets with unreadable characters in their tickers will be left out

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.owner` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | Identity representation or Identity ID as stored in the blockchain |

#### Returns

`Promise`<[`Asset`](../wiki/api.entities.Asset.Asset)[]\>

#### Defined in

[api/client/Assets.ts:181](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Assets.ts#L181)

___

### getTickerReservation

▸ **getTickerReservation**(`args`): [`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation)

Retrieve a Ticker Reservation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.ticker` | `string` | Asset ticker |

#### Returns

[`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation)

#### Defined in

[api/client/Assets.ts:167](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Assets.ts#L167)

___

### getTickerReservations

▸ **getTickerReservations**(`args?`): `Promise`<[`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation)[]\>

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include Assets that
  have already been launched

**`note`** reservations with unreadable characters in their tickers will be left out

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.owner` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | defaults to the signing Identity |

#### Returns

`Promise`<[`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation)[]\>

#### Defined in

[api/client/Assets.ts:133](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Assets.ts#L133)

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

[api/client/Assets.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Assets.ts#L101)

▸ **isTickerAvailable**(`args`, `callback`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../wiki/types#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/client/Assets.ts:102](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Assets.ts#L102)

___

### reserveTicker

▸ **reserveTicker**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), [`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), `unknown`[][]\>\>

Reserve a ticker symbol under the ownership of the signing Identity to later use in the creation of an Asset.
  The ticker will expire after a set amount of time, after which other users can reserve it

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [reserveTicker.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ReserveTickerParams`](../wiki/api.procedures.types.ReserveTickerParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), [`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), `unknown`[][]\>\>

#### Defined in

[api/client/Assets.ts:67](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Assets.ts#L67)

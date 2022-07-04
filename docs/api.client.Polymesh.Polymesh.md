# Class: Polymesh

[api/client/Polymesh](../wiki/api.client.Polymesh).Polymesh

Main entry point of the Polymesh SDK

## Table of contents

### Properties

- [accountManagement](../wiki/api.client.Polymesh.Polymesh#accountmanagement)
- [assets](../wiki/api.client.Polymesh.Polymesh#assets)
- [claims](../wiki/api.client.Polymesh.Polymesh#claims)
- [identities](../wiki/api.client.Polymesh.Polymesh#identities)
- [network](../wiki/api.client.Polymesh.Polymesh#network)
- [settlements](../wiki/api.client.Polymesh.Polymesh#settlements)

### Accessors

- [\_middlewareApi](../wiki/api.client.Polymesh.Polymesh#_middlewareapi)
- [\_polkadotApi](../wiki/api.client.Polymesh.Polymesh#_polkadotapi)
- [\_signingAddress](../wiki/api.client.Polymesh.Polymesh#_signingaddress)

### Methods

- [disconnect](../wiki/api.client.Polymesh.Polymesh#disconnect)
- [getSigningIdentity](../wiki/api.client.Polymesh.Polymesh#getsigningidentity)
- [onConnectionError](../wiki/api.client.Polymesh.Polymesh#onconnectionerror)
- [onDisconnect](../wiki/api.client.Polymesh.Polymesh#ondisconnect)
- [setSigningAccount](../wiki/api.client.Polymesh.Polymesh#setsigningaccount)
- [setSigningManager](../wiki/api.client.Polymesh.Polymesh#setsigningmanager)
- [connect](../wiki/api.client.Polymesh.Polymesh#connect)

## Properties

### accountManagement

• **accountManagement**: [`AccountManagement`](../wiki/api.client.AccountManagement.AccountManagement)

A set of methods for managing a Polymesh Identity's Accounts and their permissions

#### Defined in

[api/client/Polymesh.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L53)

___

### assets

• **assets**: [`Assets`](../wiki/api.client.Assets.Assets)

A set of methods for interacting with Assets

#### Defined in

[api/client/Polymesh.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L61)

___

### claims

• **claims**: [`Claims`](../wiki/api.client.Claims.Claims)

A set of methods to deal with Claims

#### Defined in

[api/client/Polymesh.ts:41](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L41)

___

### identities

• **identities**: [`Identities`](../wiki/api.client.Identities.Identities)

A set of methods for interacting with Polymesh Identities.

#### Defined in

[api/client/Polymesh.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L57)

___

### network

• **network**: [`Network`](../wiki/api.client.Network.Network)

A set of methods to interact with the Polymesh network. This includes transferring POLYX, reading network properties and querying for historical events

#### Defined in

[api/client/Polymesh.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L45)

___

### settlements

• **settlements**: [`Settlements`](../wiki/api.client.Settlements.Settlements)

A set of methods for exchanging Assets

#### Defined in

[api/client/Polymesh.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L49)

## Accessors

### \_middlewareApi

• `get` **_middlewareApi**(): `default`<`NormalizedCacheObject`\>

Middleware client

#### Returns

`default`<`NormalizedCacheObject`\>

#### Defined in

[api/client/Polymesh.ts:258](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L258)

___

### \_polkadotApi

• `get` **_polkadotApi**(): `ApiPromise`

Polkadot client

#### Returns

`ApiPromise`

#### Defined in

[api/client/Polymesh.ts:242](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L242)

___

### \_signingAddress

• `get` **_signingAddress**(): `string`

signing address (to manually submit transactions with the polkadot API)

#### Returns

`string`

#### Defined in

[api/client/Polymesh.ts:250](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L250)

## Methods

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

Disconnect the client and close all open connections and subscriptions

**`note`** the SDK will become unusable after this operation. It will throw an error when attempting to
  access any chain or middleware data. If you wish to continue using the SDK, you must
  create a new instance by calling [connect](../wiki/api.client.Polymesh.Polymesh#connect)

#### Returns

`Promise`<`void`\>

#### Defined in

[api/client/Polymesh.ts:217](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L217)

___

### getSigningIdentity

▸ **getSigningIdentity**(): `Promise`<``null`` \| [`Identity`](../wiki/api.entities.Identity.Identity)\>

Retrieve the Identity associated to the signing Account (null if there is none)

**`throws`** if there is no signing Account associated to the SDK

#### Returns

`Promise`<``null`` \| [`Identity`](../wiki/api.entities.Identity.Identity)\>

#### Defined in

[api/client/Polymesh.ts:172](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L172)

___

### onConnectionError

▸ **onConnectionError**(`callback`): () => `void`

Handle connection errors

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `unknown`[]) => `unknown` |

#### Returns

`fn`

an unsubscribe callback

▸ (): `void`

Handle connection errors

##### Returns

`void`

an unsubscribe callback

#### Defined in

[api/client/Polymesh.ts:181](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L181)

___

### onDisconnect

▸ **onDisconnect**(`callback`): () => `void`

Handle disconnection

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `unknown`[]) => `unknown` |

#### Returns

`fn`

an unsubscribe callback

▸ (): `void`

Handle disconnection

##### Returns

`void`

an unsubscribe callback

#### Defined in

[api/client/Polymesh.ts:198](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L198)

___

### setSigningAccount

▸ **setSigningAccount**(`signer`): `Promise`<`void`\>

Set the SDK's signing Account to the provided one

**`throws`** if the passed Account is not present in the Signing Manager (or there is no Signing Manager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `string` \| [`Account`](../wiki/api.entities.Account.Account) |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/client/Polymesh.ts:226](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L226)

___

### setSigningManager

▸ **setSigningManager**(`signingManager`): `Promise`<`void`\>

Set the SDK's Signing Manager to the provided one

#### Parameters

| Name | Type |
| :------ | :------ |
| `signingManager` | `SigningManager` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/client/Polymesh.ts:233](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L233)

___

### connect

▸ `Static` **connect**(`params`): `Promise`<[`Polymesh`](../wiki/api.client.Polymesh.Polymesh)\>

Create an SDK instance and connect to a Polymesh node

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ConnectParams`](../wiki/api.client.Polymesh.ConnectParams) |

#### Returns

`Promise`<[`Polymesh`](../wiki/api.client.Polymesh.Polymesh)\>

#### Defined in

[api/client/Polymesh.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/Polymesh.ts#L86)

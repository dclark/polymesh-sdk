[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/client/Polymesh](../modules/api_client_Polymesh.md) / Polymesh

# Class: Polymesh

[api/client/Polymesh](../modules/api_client_Polymesh.md).Polymesh

Main entry point of the Polymesh SDK

## Table of contents

### Properties

- [accountManagement](api_client_Polymesh.Polymesh.md#accountmanagement)
- [assets](api_client_Polymesh.Polymesh.md#assets)
- [claims](api_client_Polymesh.Polymesh.md#claims)
- [identities](api_client_Polymesh.Polymesh.md#identities)
- [network](api_client_Polymesh.Polymesh.md#network)
- [settlements](api_client_Polymesh.Polymesh.md#settlements)

### Accessors

- [\_middlewareApi](api_client_Polymesh.Polymesh.md#_middlewareapi)
- [\_polkadotApi](api_client_Polymesh.Polymesh.md#_polkadotapi)
- [\_signingAddress](api_client_Polymesh.Polymesh.md#_signingaddress)

### Methods

- [disconnect](api_client_Polymesh.Polymesh.md#disconnect)
- [getSigningIdentity](api_client_Polymesh.Polymesh.md#getsigningidentity)
- [onConnectionError](api_client_Polymesh.Polymesh.md#onconnectionerror)
- [onDisconnect](api_client_Polymesh.Polymesh.md#ondisconnect)
- [setSigningAccount](api_client_Polymesh.Polymesh.md#setsigningaccount)
- [setSigningManager](api_client_Polymesh.Polymesh.md#setsigningmanager)
- [connect](api_client_Polymesh.Polymesh.md#connect)

## Properties

### accountManagement

• **accountManagement**: [`AccountManagement`](api_client_AccountManagement.AccountManagement.md)

A set of methods for managing a Polymesh Identity's Accounts and their permissions

#### Defined in

[api/client/Polymesh.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L53)

___

### assets

• **assets**: [`Assets`](api_client_Assets.Assets.md)

A set of methods for interacting with Assets

#### Defined in

[api/client/Polymesh.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L61)

___

### claims

• **claims**: [`Claims`](api_client_Claims.Claims.md)

A set of methods to deal with Claims

#### Defined in

[api/client/Polymesh.ts:41](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L41)

___

### identities

• **identities**: [`Identities`](api_client_Identities.Identities.md)

A set of methods for interacting with Polymesh Identities.

#### Defined in

[api/client/Polymesh.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L57)

___

### network

• **network**: [`Network`](api_client_Network.Network.md)

A set of methods to interact with the Polymesh network. This includes transferring POLYX, reading network properties and querying for historical events

#### Defined in

[api/client/Polymesh.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L45)

___

### settlements

• **settlements**: [`Settlements`](api_client_Settlements.Settlements.md)

A set of methods for exchanging Assets

#### Defined in

[api/client/Polymesh.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L49)

## Accessors

### \_middlewareApi

• `get` **_middlewareApi**(): `default`<`NormalizedCacheObject`\>

Middleware client

#### Returns

`default`<`NormalizedCacheObject`\>

#### Defined in

[api/client/Polymesh.ts:258](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L258)

___

### \_polkadotApi

• `get` **_polkadotApi**(): `ApiPromise`

Polkadot client

#### Returns

`ApiPromise`

#### Defined in

[api/client/Polymesh.ts:242](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L242)

___

### \_signingAddress

• `get` **_signingAddress**(): `string`

signing address (to manually submit transactions with the polkadot API)

#### Returns

`string`

#### Defined in

[api/client/Polymesh.ts:250](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L250)

## Methods

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

Disconnect the client and close all open connections and subscriptions

**`note`** the SDK will become unusable after this operation. It will throw an error when attempting to
  access any chain or middleware data. If you wish to continue using the SDK, you must
  create a new instance by calling [connect](api_client_Polymesh.Polymesh.md#connect)

#### Returns

`Promise`<`void`\>

#### Defined in

[api/client/Polymesh.ts:217](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L217)

___

### getSigningIdentity

▸ **getSigningIdentity**(): `Promise`<``null`` \| [`Identity`](api_entities_Identity.Identity.md)\>

Retrieve the Identity associated to the signing Account (null if there is none)

**`throws`** if there is no signing Account associated to the SDK

#### Returns

`Promise`<``null`` \| [`Identity`](api_entities_Identity.Identity.md)\>

#### Defined in

[api/client/Polymesh.ts:172](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L172)

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

[api/client/Polymesh.ts:181](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L181)

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

[api/client/Polymesh.ts:198](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L198)

___

### setSigningAccount

▸ **setSigningAccount**(`signer`): `Promise`<`void`\>

Set the SDK's signing Account to the provided one

**`throws`** if the passed Account is not present in the Signing Manager (or there is no Signing Manager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `string` \| [`Account`](api_entities_Account.Account.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/client/Polymesh.ts:226](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L226)

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

[api/client/Polymesh.ts:233](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L233)

___

### connect

▸ `Static` **connect**(`params`): `Promise`<[`Polymesh`](api_client_Polymesh.Polymesh.md)\>

Create an SDK instance and connect to a Polymesh node

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ConnectParams` |

#### Returns

`Promise`<[`Polymesh`](api_client_Polymesh.Polymesh.md)\>

#### Defined in

[api/client/Polymesh.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Polymesh.ts#L86)

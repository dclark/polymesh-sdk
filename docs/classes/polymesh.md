# Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [claims](polymesh.md#claims)
* [middleware](polymesh.md#middleware)

### Accessors

* [\_polkadotApi](polymesh.md#_polkadotapi)

### Methods

* [getAccount](polymesh.md#getaccount)
* [getAccountBalance](polymesh.md#getaccountbalance)
* [getCurrentIdentity](polymesh.md#getcurrentidentity)
* [getIdentity](polymesh.md#getidentity)
* [getLatestBlock](polymesh.md#getlatestblock)
* [getNetworkProperties](polymesh.md#getnetworkproperties)
* [getSecurityToken](polymesh.md#getsecuritytoken)
* [getSecurityTokens](polymesh.md#getsecuritytokens)
* [getTickerReservation](polymesh.md#gettickerreservation)
* [getTickerReservations](polymesh.md#gettickerreservations)
* [getTransactionFees](polymesh.md#gettransactionfees)
* [getTreasuryAccount](polymesh.md#gettreasuryaccount)
* [getTreasuryBalance](polymesh.md#gettreasurybalance)
* [isIdentityValid](polymesh.md#isidentityvalid)
* [isTickerAvailable](polymesh.md#istickeravailable)
* [onConnectionError](polymesh.md#onconnectionerror)
* [onDisconnect](polymesh.md#ondisconnect)
* [registerIdentity](polymesh.md#registeridentity)
* [reserveTicker](polymesh.md#reserveticker)
* [transferPolyX](polymesh.md#transferpolyx)
* [connect](polymesh.md#static-connect)

## Properties

### claims

• **claims**: [_Claims_](claims.md)

_Defined in_ [_src/Polymesh.ts:83_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L83)

### middleware

• **middleware**: [_Middleware_](middleware.md)

_Defined in_ [_src/Polymesh.ts:84_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L84)

## Accessors

### \_polkadotApi

• **get \_polkadotApi**\(\): _ApiPromise_

_Defined in_ [_src/Polymesh.ts:655_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L655)

Polkadot client

**Returns:** _ApiPromise_

## Methods

### getAccount

▸ **getAccount**\(\): [_CurrentAccount_](currentaccount.md)

_Defined in_ [_src/Polymesh.ts:445_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L445)

Create an Account instance from an address. If no address is passed, the current Account is returned

**Returns:** [_CurrentAccount_](currentaccount.md)

▸ **getAccount**\(`args`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:446_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L446)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** [_Account_](account.md)

### getAccountBalance

▸ **getAccountBalance**\(`args?`: undefined \| object\): _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

_Defined in_ [_src/Polymesh.ts:276_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L276)

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

▸ **getAccountBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:277_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L277)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

▸ **getAccountBalance**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:278_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L278)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `account` | string \| [Account](account.md) |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getCurrentIdentity

▸ **getCurrentIdentity**\(\): _Promise‹_[_CurrentIdentity_](currentidentity.md) _\| null›_

_Defined in_ [_src/Polymesh.ts:438_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L438)

Retrieve the Identity associated to the current Account \(null if there is none\)

**Returns:** _Promise‹_[_CurrentIdentity_](currentidentity.md) _\| null›_

### getIdentity

▸ **getIdentity**\(`args`: object\): [_Identity_](identity.md)

_Defined in_ [_src/Polymesh.ts:431_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L431)

Create an Identity instance from a DID

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `did` | string |

**Returns:** [_Identity_](identity.md)

### getLatestBlock

▸ **getLatestBlock**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:646_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L646)

Retrieve the number of the latest block in the chain

**Returns:** _Promise‹BigNumber›_

### getNetworkProperties

▸ **getNetworkProperties**\(\): _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

_Defined in_ [_src/Polymesh.ts:588_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L588)

Retrieve information for the current network

**Returns:** _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

### getSecurityToken

▸ **getSecurityToken**\(`args`: object\): _Promise‹_[_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/Polymesh.ts:562_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L562)

Retrieve a Security Token

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_›_

### getSecurityTokens

▸ **getSecurityTokens**\(`args?`: undefined \| object\): _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:525_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L525)

Retrieve all the Security Tokens owned by an Identity

**`note`** tokens with unreadable characters in their tickers will be left out

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

### getTickerReservation

▸ **getTickerReservation**\(`args`: object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

_Defined in_ [_src/Polymesh.ts:405_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L405)

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

### getTickerReservations

▸ **getTickerReservations**\(`args?`: undefined \| object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:366_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L366)

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tokens that have already been launched

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

### getTransactionFees

▸ **getTransactionFees**\(`args`: object\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:473_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L473)

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | transaction tag \(i.e. TxTags.asset.CreateAsset or "asset.createAsset"\) |

**Returns:** _Promise‹BigNumber›_

### getTreasuryAccount

▸ **getTreasuryAccount**\(\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:480_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L480)

Get the treasury wallet address

**Returns:** [_Account_](account.md)

### getTreasuryBalance

▸ **getTreasuryBalance**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:612_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L612)

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** _Promise‹BigNumber›_

▸ **getTreasuryBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:613_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L613)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### isIdentityValid

▸ **isIdentityValid**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:462_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L462)

Return whether the supplied Identity/DID exists

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `identity` | [Identity](identity.md) \| string |

**Returns:** _Promise‹boolean›_

### isTickerAvailable

▸ **isTickerAvailable**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:334_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L334)

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

**Returns:** _Promise‹boolean›_

▸ **isTickerAvailable**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:335_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L335)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹boolean›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### onConnectionError

▸ **onConnectionError**\(`callback`: function\): _function_

_Defined in_ [_src/Polymesh.ts:489_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L489)

Handle connection errors

**Parameters:**

▪ **callback**: _function_

▸ \(...`args`: unknown\[\]\): _unknown_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | unknown\[\] |

**Returns:** _function_

an unsubscribe callback

▸ \(\): _void_

### onDisconnect

▸ **onDisconnect**\(`callback`: function\): _function_

_Defined in_ [_src/Polymesh.ts:506_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L506)

Handle disconnection

**Parameters:**

▪ **callback**: _function_

▸ \(...`args`: unknown\[\]\): _unknown_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | unknown\[\] |

**Returns:** _function_

an unsubscribe callback

▸ \(\): _void_

### registerIdentity

▸ **registerIdentity**\(`args`: [RegisterIdentityParams](../interfaces/registeridentityparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Identity_](identity.md)_››_

_Defined in_ [_src/Polymesh.ts:639_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L639)

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RegisterIdentityParams](../interfaces/registeridentityparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Identity_](identity.md)_››_

### reserveTicker

▸ **reserveTicker**\(`args`: [ReserveTickerParams](../interfaces/reservetickerparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

_Defined in_ [_src/Polymesh.ts:325_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L325)

Reserve a ticker symbol to later use in the creation of a Security Token. The ticker will expire after a set amount of time, after which other users can reserve it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ReserveTickerParams](../interfaces/reservetickerparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

### transferPolyX

▸ **transferPolyX**\(`args`: [TransferPolyXParams](../interfaces/transferpolyxparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Polymesh.ts:265_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L265)

Transfer an amount of POLYX to a specified Account

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [TransferPolyXParams](../interfaces/transferpolyxparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` connect

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:106_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L106)

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:116_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L116)

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:130_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L130)

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:139_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L139)

Create the instance and connect to the Polymesh node without an account

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_


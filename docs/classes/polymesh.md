# Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [claims](polymesh.md#claims)
* [middleware](polymesh.md#middleware)
* [registerIdentity](polymesh.md#registeridentity)
* [reserveTicker](polymesh.md#reserveticker)
* [transferPolyX](polymesh.md#transferpolyx)

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
* [connect](polymesh.md#static-connect)

## Properties

### claims

• **claims**: [_Claims_](claims.md)

_Defined in_ [_src/Polymesh.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L74)

### middleware

• **middleware**: [_Middleware_](middleware.md)

_Defined in_ [_src/Polymesh.ts:75_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L75)

### registerIdentity

• **registerIdentity**: _ProcedureMethod‹_[_RegisterIdentityParams_](../interfaces/registeridentityparams.md)_,_ [_Identity_](identity.md)_›_

_Defined in_ [_src/Polymesh.ts:624_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L624)

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Customer Due Diligence Provider

### reserveTicker

• **reserveTicker**: _ProcedureMethod‹_[_ReserveTickerParams_](../interfaces/reservetickerparams.md)_,_ [_TickerReservation_](tickerreservation.md)_›_

_Defined in_ [_src/Polymesh.ts:319_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L319)

Reserve a ticker symbol to later use in the creation of a Security Token. The ticker will expire after a set amount of time, after which other users can reserve it

**`param`** ticker symbol to reserve

**`note`** required role:

* Ticker Owner

### transferPolyX

• **transferPolyX**: _ProcedureMethod‹_[_TransferPolyXParams_](../interfaces/transferpolyxparams.md)_, void›_

_Defined in_ [_src/Polymesh.ts:258_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L258)

Transfer an amount of POLYX to a specified Account

**`param`** account that will receive the POLYX

**`param`** amount of POLYX to be transferred

**`param`** identifier string to help differentiate transfers

## Accessors

### \_polkadotApi

• **get \_polkadotApi**\(\): _ApiPromise_

_Defined in_ [_src/Polymesh.ts:638_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L638)

Polkadot client

**Returns:** _ApiPromise_

## Methods

### getAccount

▸ **getAccount**\(\): [_CurrentAccount_](currentaccount.md)

_Defined in_ [_src/Polymesh.ts:432_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L432)

Create an Account instance from an address. If no address is passed, the current Account is returned

**Returns:** [_CurrentAccount_](currentaccount.md)

▸ **getAccount**\(`args`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:433_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L433)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** [_Account_](account.md)

### getAccountBalance

▸ **getAccountBalance**\(`args?`: undefined \| object\): _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

_Defined in_ [_src/Polymesh.ts:267_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L267)

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

▸ **getAccountBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:268_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L268)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

▸ **getAccountBalance**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:269_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L269)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `account` | string \| [Account](account.md) |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getCurrentIdentity

▸ **getCurrentIdentity**\(\): _Promise‹_[_CurrentIdentity_](currentidentity.md) _\| null›_

_Defined in_ [_src/Polymesh.ts:425_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L425)

Retrieve the Identity associated to the current Account \(null if there is none\)

**Returns:** _Promise‹_[_CurrentIdentity_](currentidentity.md) _\| null›_

### getIdentity

▸ **getIdentity**\(`args`: object\): [_Identity_](identity.md)

_Defined in_ [_src/Polymesh.ts:418_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L418)

Create an Identity instance from a DID

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `did` | string |

**Returns:** [_Identity_](identity.md)

### getLatestBlock

▸ **getLatestBlock**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:629_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L629)

Retrieve the number of the latest block in the chain

**Returns:** _Promise‹BigNumber›_

### getNetworkProperties

▸ **getNetworkProperties**\(\): _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

_Defined in_ [_src/Polymesh.ts:570_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L570)

Retrieve information for the current network

**Returns:** _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

### getSecurityToken

▸ **getSecurityToken**\(`args`: object\): _Promise‹_[_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/Polymesh.ts:544_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L544)

Retrieve a Security Token

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_›_

### getSecurityTokens

▸ **getSecurityTokens**\(`args?`: undefined \| object\): _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:512_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L512)

Retrieve all the Security Tokens owned by an Identity

**`note`** tokens with unreadable characters in their tickers will be left out

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

### getTickerReservation

▸ **getTickerReservation**\(`args`: object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

_Defined in_ [_src/Polymesh.ts:392_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L392)

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

### getTickerReservations

▸ **getTickerReservations**\(`args?`: undefined \| object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:358_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L358)

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tokens that have already been launched

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

### getTransactionFees

▸ **getTransactionFees**\(`args`: object\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:460_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L460)

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | transaction tag \(i.e. TxTags.asset.CreateAsset or "asset.createAsset"\) |

**Returns:** _Promise‹BigNumber›_

### getTreasuryAccount

▸ **getTreasuryAccount**\(\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:467_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L467)

Get the treasury wallet address

**Returns:** [_Account_](account.md)

### getTreasuryBalance

▸ **getTreasuryBalance**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:594_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L594)

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** _Promise‹BigNumber›_

▸ **getTreasuryBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:595_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L595)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### isIdentityValid

▸ **isIdentityValid**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:449_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L449)

Return whether the supplied Identity/DID exists

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `identity` | [Identity](identity.md) \| string |

**Returns:** _Promise‹boolean›_

### isTickerAvailable

▸ **isTickerAvailable**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:326_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L326)

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

**Returns:** _Promise‹boolean›_

▸ **isTickerAvailable**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:327_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L327)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹boolean›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### onConnectionError

▸ **onConnectionError**\(`callback`: function\): _function_

_Defined in_ [_src/Polymesh.ts:476_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L476)

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

_Defined in_ [_src/Polymesh.ts:493_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L493)

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

### `Static` connect

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:103_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L103)

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:113_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L113)

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:127_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L127)

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:137_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L137)

Create the instance and connect to the Polymesh node using an account mnemonic

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:146_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/Polymesh.ts#L146)

Create the instance and connect to the Polymesh node without an account

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_


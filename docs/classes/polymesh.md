# Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [claims](polymesh.md#claims)
* [governance](polymesh.md#governance)

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

_Defined in_ [_src/Polymesh.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L74)

### governance

• **governance**: [_Governance_](governance.md)

_Defined in_ [_src/Polymesh.ts:73_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L73)

## Accessors

### \_polkadotApi

• **get \_polkadotApi**\(\): _ApiPromise_

_Defined in_ [_src/Polymesh.ts:621_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L621)

Polkadot client

**Returns:** _ApiPromise_

## Methods

### getAccount

▸ **getAccount**\(\): [_CurrentAccount_](currentaccount.md)

_Defined in_ [_src/Polymesh.ts:420_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L420)

Create an Account instance from an address. If no address is passed, the current Account is returned

**Returns:** [_CurrentAccount_](currentaccount.md)

▸ **getAccount**\(`args`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:421_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L421)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** [_Account_](account.md)

### getAccountBalance

▸ **getAccountBalance**\(`args?`: undefined \| object\): _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

_Defined in_ [_src/Polymesh.ts:260_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L260)

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

▸ **getAccountBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:261_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L261)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

▸ **getAccountBalance**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:262_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L262)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `account` | string \| [Account](account.md) |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getCurrentIdentity

▸ **getCurrentIdentity**\(\): _Promise‹_[_CurrentIdentity_](currentidentity.md) _\| null›_

_Defined in_ [_src/Polymesh.ts:413_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L413)

Retrieve the Identity associated to the current Account \(null if there is none\)

**Returns:** _Promise‹_[_CurrentIdentity_](currentidentity.md) _\| null›_

### getIdentity

▸ **getIdentity**\(`args`: object\): [_Identity_](identity.md)

_Defined in_ [_src/Polymesh.ts:406_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L406)

Create an Identity instance from a DID

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `did` | string |

**Returns:** [_Identity_](identity.md)

### getLatestBlock

▸ **getLatestBlock**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:612_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L612)

Retrieve the number of the latest block in the chain

**Returns:** _Promise‹BigNumber›_

### getNetworkProperties

▸ **getNetworkProperties**\(\): _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

_Defined in_ [_src/Polymesh.ts:554_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L554)

Retrieve information for the current network

**Returns:** _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

### getSecurityToken

▸ **getSecurityToken**\(`args`: object\): _Promise‹_[_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/Polymesh.ts:528_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L528)

Retrieve a Security Token

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_›_

### getSecurityTokens

▸ **getSecurityTokens**\(`args?`: undefined \| object\): _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:498_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L498)

Retrieve all the Security Tokens owned by an Identity

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

### getTickerReservation

▸ **getTickerReservation**\(`args`: object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

_Defined in_ [_src/Polymesh.ts:380_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L380)

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

### getTickerReservations

▸ **getTickerReservations**\(`args?`: undefined \| object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:348_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L348)

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tokens that have already been launched

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

### getTransactionFees

▸ **getTransactionFees**\(`args`: object\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:448_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L448)

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | transaction tag \(i.e. TxTags.asset.CreateAsset or "asset.createAsset"\) |

**Returns:** _Promise‹BigNumber›_

### getTreasuryAccount

▸ **getTreasuryAccount**\(\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:455_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L455)

Get the treasury wallet address

**Returns:** [_Account_](account.md)

### getTreasuryBalance

▸ **getTreasuryBalance**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:578_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L578)

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** _Promise‹BigNumber›_

▸ **getTreasuryBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:579_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L579)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### isIdentityValid

▸ **isIdentityValid**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:437_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L437)

Return whether the supplied Identity/DID exists

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `identity` | [Identity](identity.md) \| string |

**Returns:** _Promise‹boolean›_

### isTickerAvailable

▸ **isTickerAvailable**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:318_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L318)

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

**Returns:** _Promise‹boolean›_

▸ **isTickerAvailable**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:319_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L319)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹boolean›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### onConnectionError

▸ **onConnectionError**\(`callback`: function\): _function_

_Defined in_ [_src/Polymesh.ts:464_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L464)

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

_Defined in_ [_src/Polymesh.ts:481_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L481)

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

_Defined in_ [_src/Polymesh.ts:605_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L605)

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

_Defined in_ [_src/Polymesh.ts:309_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L309)

Reserve a ticker symbol to later use in the creation of a Security Token. The ticker will expire after a set amount of time, after which other users can reserve it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ReserveTickerParams](../interfaces/reservetickerparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

### transferPolyX

▸ **transferPolyX**\(`args`: [TransferPolyXParams](../interfaces/transferpolyxparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Polymesh.ts:249_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L249)

Transfer an amount of POLYX to a specified Account

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [TransferPolyXParams](../interfaces/transferpolyxparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` connect

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:94_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L94)

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:104_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L104)

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:118_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L118)

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:127_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Polymesh.ts#L127)

Create the instance and connect to the Polymesh node without an account

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_


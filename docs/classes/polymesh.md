# Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [claims](polymesh.md#claims)
* [middleware](polymesh.md#middleware)
* [settlements](polymesh.md#settlements)

### Accessors

* [\_middlewareApi](polymesh.md#_middlewareapi)
* [\_polkadotApi](polymesh.md#_polkadotapi)

### Methods

* [addSigner](polymesh.md#addsigner)
* [claimClassicTicker](polymesh.md#claimclassicticker)
* [disconnect](polymesh.md#disconnect)
* [getAccount](polymesh.md#getaccount)
* [getAccountBalance](polymesh.md#getaccountbalance)
* [getAccounts](polymesh.md#getaccounts)
* [getCurrentIdentity](polymesh.md#getcurrentidentity)
* [getIdentity](polymesh.md#getidentity)
* [getLatestBlock](polymesh.md#getlatestblock)
* [getNetworkProperties](polymesh.md#getnetworkproperties)
* [getNetworkVersion](polymesh.md#getnetworkversion)
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
* [setSigner](polymesh.md#setsigner)
* [transferPolyx](polymesh.md#transferpolyx)
* [connect](polymesh.md#static-connect)

## Properties

### claims

• **claims**: [_Claims_](claims.md)

_Defined in_ [_src/Polymesh.ts:84_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L84)

### middleware

• **middleware**: [_Middleware_](middleware.md)

_Defined in_ [_src/Polymesh.ts:85_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L85)

### settlements

• **settlements**: _Settlements_

_Defined in_ [_src/Polymesh.ts:86_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L86)

## Accessors

### \_middlewareApi

• **get \_middlewareApi**\(\): _ApolloClient‹NormalizedCacheObject›_

_Defined in_ [_src/Polymesh.ts:805_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L805)

Middleware client

**Returns:** _ApolloClient‹NormalizedCacheObject›_

### \_polkadotApi

• **get \_polkadotApi**\(\): _ApiPromise_

_Defined in_ [_src/Polymesh.ts:797_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L797)

Polkadot client

**Returns:** _ApiPromise_

## Methods

### addSigner

▸ **addSigner**\(`params`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:745_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L745)

Adds a new signing key to the SDK instance. This will not change the current signer. For that, you must explicitly call `setSigner`

**Parameters:**

▪ **params**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountSeed` | string | hex seed of the account |

**Returns:** [_Account_](account.md)

▸ **addSigner**\(`params`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:753_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L753)

Adds a new signing key to the SDK instance. This will not change the current signer. For that, you must explicitly call `setSigner`

**Parameters:**

▪ **params**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountMnemonic` | string | account mnemonic |

**Returns:** [_Account_](account.md)

▸ **addSigner**\(`params`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:761_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L761)

Adds a new signing key to the SDK instance. This will not change the current signer. For that, you must explicitly call [setSigner](polymesh.md#setsigner)

**Parameters:**

▪ **params**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountUri` | string | account URI |

**Returns:** [_Account_](account.md)

### claimClassicTicker

▸ **claimClassicTicker**\(`args`: [ClaimClassicTickerParams](../interfaces/claimclassictickerparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

_Defined in_ [_src/Polymesh.ts:384_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L384)

Claim a ticker symbol that was reserved in Polymath Classic \(Ethereum\). The Ethereum account that owns the ticker must sign a special message that contains the DID of the Identity that will own the ticker in Polymesh, and provide the signed data to this call

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `claimClassicTicker.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ClaimClassicTickerParams](../interfaces/claimclassictickerparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

### disconnect

▸ **disconnect**\(\): _Promise‹void›_

_Defined in_ [_src/Polymesh.ts:735_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L735)

Disconnect the client and close all open connections and subscriptions

**`note`** the SDK will become unusable after this operation. It will throw an error when attempting to access any chain or middleware data. If you wish to continue using the SDK, you must create a new instance by calling [connect](polymesh.md#static-connect)

**Returns:** _Promise‹void›_

### getAccount

▸ **getAccount**\(`args?`: undefined \| object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:519_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L519)

Create an Account instance from an address. If no address is passed, the current Account is returned

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** [_Account_](account.md)

### getAccountBalance

▸ **getAccountBalance**\(`args?`: undefined \| object\): _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

_Defined in_ [_src/Polymesh.ts:322_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L322)

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

▸ **getAccountBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:323_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L323)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

▸ **getAccountBalance**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:324_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L324)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `account` | string \| [Account](account.md) |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹_[_AccountBalance_](../globals.md#accountbalance)_›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getAccounts

▸ **getAccounts**\(\): [_Account_](account.md)_\[\]_

_Defined in_ [_src/Polymesh.ts:534_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L534)

Return a list that contains all the signing Accounts associated to the SDK instance

**`throws`** — if there is no current Account associated to the SDK instance

**Returns:** [_Account_](account.md)_\[\]_

### getCurrentIdentity

▸ **getCurrentIdentity**\(\): _Promise‹_[_Identity_](identity.md) _\| null›_

_Defined in_ [_src/Polymesh.ts:512_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L512)

Retrieve the Identity associated to the current Account \(null if there is none\)

**Returns:** _Promise‹_[_Identity_](identity.md) _\| null›_

### getIdentity

▸ **getIdentity**\(`args`: object\): _Promise‹_[_Identity_](identity.md)_›_

_Defined in_ [_src/Polymesh.ts:494_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L494)

Create an Identity instance from a DID

**`throws`** if there is no Identity with the passed DID

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `did` | string |

**Returns:** _Promise‹_[_Identity_](identity.md)_›_

### getLatestBlock

▸ **getLatestBlock**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:724_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L724)

Retrieve the number of the latest block in the chain

**Returns:** _Promise‹BigNumber›_

### getNetworkProperties

▸ **getNetworkProperties**\(\): _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

_Defined in_ [_src/Polymesh.ts:660_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L660)

Retrieve information for the current network

**Returns:** _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

### getNetworkVersion

▸ **getNetworkVersion**\(\): _Promise‹string›_

_Defined in_ [_src/Polymesh.ts:787_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L787)

Fetch the current network version \(i.e. 3.1.0\)

**Returns:** _Promise‹string›_

### getSecurityToken

▸ **getSecurityToken**\(`args`: object\): _Promise‹_[_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/Polymesh.ts:641_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L641)

Retrieve a Security Token

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_›_

### getSecurityTokens

▸ **getSecurityTokens**\(`args?`: undefined \| object\): _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:609_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L609)

Retrieve all the Security Tokens owned by an Identity

**`note`** tokens with unreadable characters in their tickers will be left out

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

### getTickerReservation

▸ **getTickerReservation**\(`args`: object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

_Defined in_ [_src/Polymesh.ts:459_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L459)

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

### getTickerReservations

▸ **getTickerReservations**\(`args?`: undefined \| object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:425_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L425)

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tokens that have already been launched

**`note`** reservations with unreadable characters in their tickers will be left out

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

### getTransactionFees

▸ **getTransactionFees**\(`args`: object\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:553_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L553)

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | transaction tag \(i.e. TxTags.asset.CreateAsset or "asset.createAsset"\) |

**Returns:** _Promise‹BigNumber›_

### getTreasuryAccount

▸ **getTreasuryAccount**\(\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:560_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L560)

Get the treasury wallet address

**Returns:** [_Account_](account.md)

### getTreasuryBalance

▸ **getTreasuryBalance**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:684_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L684)

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** _Promise‹BigNumber›_

▸ **getTreasuryBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:685_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L685)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### isIdentityValid

▸ **isIdentityValid**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:541_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L541)

Return whether the supplied Identity/DID exists

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `identity` | [Identity](identity.md) \| string |

**Returns:** _Promise‹boolean›_

### isTickerAvailable

▸ **isTickerAvailable**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:393_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L393)

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

**Returns:** _Promise‹boolean›_

▸ **isTickerAvailable**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:394_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L394)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹boolean›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### onConnectionError

▸ **onConnectionError**\(`callback`: function\): _function_

_Defined in_ [_src/Polymesh.ts:573_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L573)

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

_Defined in_ [_src/Polymesh.ts:590_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L590)

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

▸ **registerIdentity**\(`args`: [RegisterIdentityParams](../interfaces/registeridentityparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Identity_](identity.md)_››_

_Defined in_ [_src/Polymesh.ts:717_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L717)

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Customer Due Diligence Provider

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `registerIdentity.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RegisterIdentityParams](../interfaces/registeridentityparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Identity_](identity.md)_››_

### reserveTicker

▸ **reserveTicker**\(`args`: [ReserveTickerParams](../interfaces/reservetickerparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

_Defined in_ [_src/Polymesh.ts:372_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L372)

Reserve a ticker symbol to later use in the creation of a Security Token. The ticker will expire after a set amount of time, after which other users can reserve it

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `reserveTicker.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ReserveTickerParams](../interfaces/reservetickerparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

### setSigner

▸ **setSigner**\(`signer`: string \| [Account](account.md)\): _void_

_Defined in_ [_src/Polymesh.ts:780_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L780)

Set the SDK's current signing key to the provided address

**`note`** the key must have been previously added via [addSigner](polymesh.md#addsigner)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `signer` | string \| [Account](account.md) |

**Returns:** _void_

### transferPolyx

▸ **transferPolyx**\(`args`: [TransferPolyxParams](../interfaces/transferpolyxparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Polymesh.ts:311_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L311)

Transfer an amount of POLYX to a specified Account

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferPolyx.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [TransferPolyxParams](../interfaces/transferpolyxparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` connect

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:133_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L133)

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:143_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L143)

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:156_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L156)

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:166_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L166)

Create the instance and connect to the Polymesh node using an account mnemonic

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:175_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/Polymesh.ts#L175)

Create the instance and connect to the Polymesh node without an account

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_


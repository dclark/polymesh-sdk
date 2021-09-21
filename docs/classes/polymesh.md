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

_Defined in_ [_src/Polymesh.ts:77_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L77)

### middleware

• **middleware**: [_Middleware_](middleware.md)

_Defined in_ [_src/Polymesh.ts:78_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L78)

### settlements

• **settlements**: _Settlements_

_Defined in_ [_src/Polymesh.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L79)

## Accessors

### \_middlewareApi

• **get \_middlewareApi**\(\): _ApolloClient‹NormalizedCacheObject›_

_Defined in_ [_src/Polymesh.ts:762_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L762)

Middleware client

**Returns:** _ApolloClient‹NormalizedCacheObject›_

### \_polkadotApi

• **get \_polkadotApi**\(\): _ApiPromise_

_Defined in_ [_src/Polymesh.ts:754_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L754)

Polkadot client

**Returns:** _ApiPromise_

## Methods

### addSigner

▸ **addSigner**\(`params`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:709_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L709)

Adds a new signing key to the SDK instance. This will not change the current signer. For that, you must explicitly call `setSigner`

**Parameters:**

▪ **params**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountSeed` | string | hex seed of the account |

**Returns:** [_Account_](account.md)

▸ **addSigner**\(`params`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:717_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L717)

Adds a new signing key to the SDK instance. This will not change the current signer. For that, you must explicitly call `setSigner`

**Parameters:**

▪ **params**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountMnemonic` | string | account mnemonic |

**Returns:** [_Account_](account.md)

▸ **addSigner**\(`params`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:725_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L725)

Adds a new signing key to the SDK instance. This will not change the current signer. For that, you must explicitly call [setSigner](polymesh.md#setsigner)

**Parameters:**

▪ **params**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountUri` | string | account URI |

**Returns:** [_Account_](account.md)

### claimClassicTicker

▸ **claimClassicTicker**\(`args`: [ClaimClassicTickerParams](../interfaces/claimclassictickerparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_TickerReservation_](tickerreservation.md)_››_

_Defined in_ [_src/Polymesh.ts:351_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L351)

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

_Defined in_ [_src/Polymesh.ts:699_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L699)

Disconnect the client and close all open connections and subscriptions

**`note`** the SDK will become unusable after this operation. It will throw an error when attempting to access any chain or middleware data. If you wish to continue using the SDK, you must create a new instance by calling [connect](polymesh.md#static-connect)

**Returns:** _Promise‹void›_

### getAccount

▸ **getAccount**\(\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:473_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L473)

Create an Account instance from an address. If no address is passed, the current Account is returned

**Returns:** [_Account_](account.md)

▸ **getAccount**\(`args`: object\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:474_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L474)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** [_Account_](account.md)

### getAccountBalance

▸ **getAccountBalance**\(`args?`: undefined \| object\): _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

_Defined in_ [_src/Polymesh.ts:289_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L289)

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

▸ **getAccountBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:290_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L290)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

▸ **getAccountBalance**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:291_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L291)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `account` | string \| [Account](account.md) |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹_[_AccountBalance_](../globals.md#accountbalance)_›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getAccounts

▸ **getAccounts**\(\): [_Account_](account.md)_\[\]_

_Defined in_ [_src/Polymesh.ts:492_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L492)

Return a list that contains all the signing Accounts associated to the SDK instance

**`throws`** — if there is no current Account associated to the SDK instance

**Returns:** [_Account_](account.md)_\[\]_

### getCurrentIdentity

▸ **getCurrentIdentity**\(\): _Promise‹_[_Identity_](identity.md) _\| null›_

_Defined in_ [_src/Polymesh.ts:466_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L466)

Retrieve the Identity associated to the current Account \(null if there is none\)

**Returns:** _Promise‹_[_Identity_](identity.md) _\| null›_

### getIdentity

▸ **getIdentity**\(`args`: object\): [_Identity_](identity.md)

_Defined in_ [_src/Polymesh.ts:459_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L459)

Create an Identity instance from a DID

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `did` | string |

**Returns:** [_Identity_](identity.md)

### getLatestBlock

▸ **getLatestBlock**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:688_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L688)

Retrieve the number of the latest block in the chain

**Returns:** _Promise‹BigNumber›_

### getNetworkProperties

▸ **getNetworkProperties**\(\): _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

_Defined in_ [_src/Polymesh.ts:624_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L624)

Retrieve information for the current network

**Returns:** _Promise‹_[_NetworkProperties_](../interfaces/networkproperties.md)_›_

### getSecurityToken

▸ **getSecurityToken**\(`args`: object\): _Promise‹_[_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/Polymesh.ts:598_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L598)

Retrieve a Security Token

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_›_

### getSecurityTokens

▸ **getSecurityTokens**\(`args?`: undefined \| object\): _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:566_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L566)

Retrieve all the Security Tokens owned by an Identity

**`note`** tokens with unreadable characters in their tickers will be left out

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_SecurityToken_](securitytoken.md)_\[\]›_

### getTickerReservation

▸ **getTickerReservation**\(`args`: object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

_Defined in_ [_src/Polymesh.ts:426_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L426)

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `ticker` | string | Security Token ticker |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_›_

### getTickerReservations

▸ **getTickerReservations**\(`args?`: undefined \| object\): _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

_Defined in_ [_src/Polymesh.ts:392_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L392)

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tokens that have already been launched

**`note`** reservations with unreadable characters in their tickers will be left out

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_TickerReservation_](tickerreservation.md)_\[\]›_

### getTransactionFees

▸ **getTransactionFees**\(`args`: object\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:510_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L510)

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | transaction tag \(i.e. TxTags.asset.CreateAsset or "asset.createAsset"\) |

**Returns:** _Promise‹BigNumber›_

### getTreasuryAccount

▸ **getTreasuryAccount**\(\): [_Account_](account.md)

_Defined in_ [_src/Polymesh.ts:517_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L517)

Get the treasury wallet address

**Returns:** [_Account_](account.md)

### getTreasuryBalance

▸ **getTreasuryBalance**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Polymesh.ts:648_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L648)

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** _Promise‹BigNumber›_

▸ **getTreasuryBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:649_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L649)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### isIdentityValid

▸ **isIdentityValid**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:499_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L499)

Return whether the supplied Identity/DID exists

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `identity` | [Identity](identity.md) \| string |

**Returns:** _Promise‹boolean›_

### isTickerAvailable

▸ **isTickerAvailable**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/Polymesh.ts:360_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L360)

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

**Returns:** _Promise‹boolean›_

▸ **isTickerAvailable**\(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Polymesh.ts:361_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L361)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `ticker` | string |

▪ **callback**: [_SubCallback_](../globals.md#subcallback)_‹boolean›_

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### onConnectionError

▸ **onConnectionError**\(`callback`: function\): _function_

_Defined in_ [_src/Polymesh.ts:530_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L530)

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

_Defined in_ [_src/Polymesh.ts:547_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L547)

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

_Defined in_ [_src/Polymesh.ts:681_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L681)

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

_Defined in_ [_src/Polymesh.ts:339_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L339)

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

_Defined in_ [_src/Polymesh.ts:744_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L744)

Set the SDK's current signing key to the provided address

**`note`** the key must have been previously added via [addSigner](polymesh.md#addsigner)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `signer` | string \| [Account](account.md) |

**Returns:** _void_

### transferPolyx

▸ **transferPolyx**\(`args`: [TransferPolyxParams](../interfaces/transferpolyxparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/Polymesh.ts:278_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L278)

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

_Defined in_ [_src/Polymesh.ts:126_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L126)

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:136_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L136)

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:149_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L149)

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:159_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L159)

Create the instance and connect to the Polymesh node using an account mnemonic

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_

▸ **connect**\(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)\): _Promise‹_[_Polymesh_](polymesh.md)_›_

_Defined in_ [_src/Polymesh.ts:168_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L168)

Create the instance and connect to the Polymesh node without an account

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** _Promise‹_[_Polymesh_](polymesh.md)_›_


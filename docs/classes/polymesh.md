# Class: Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [claims](polymesh.md#claims)
* [middleware](polymesh.md#middleware)
* [settlements](polymesh.md#settlements)

### Accessors

* [_middlewareApi](polymesh.md#_middlewareapi)
* [_polkadotApi](polymesh.md#_polkadotapi)

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

###  claims

• **claims**: *[Claims](claims.md)*

*Defined in [src/Polymesh.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L77)*

___

###  middleware

• **middleware**: *[Middleware](middleware.md)*

*Defined in [src/Polymesh.ts:78](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L78)*

___

###  settlements

• **settlements**: *Settlements*

*Defined in [src/Polymesh.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L79)*

## Accessors

###  _middlewareApi

• **get _middlewareApi**(): *ApolloClient‹NormalizedCacheObject›*

*Defined in [src/Polymesh.ts:762](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L762)*

Middleware client

**Returns:** *ApolloClient‹NormalizedCacheObject›*

___

###  _polkadotApi

• **get _polkadotApi**(): *ApiPromise*

*Defined in [src/Polymesh.ts:754](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L754)*

Polkadot client

**Returns:** *ApiPromise*

## Methods

###  addSigner

▸ **addSigner**(`params`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:709](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L709)*

Adds a new signing key to the SDK instance. This will not change the current signer. For that,
  you must explicitly call `setSigner`

**Parameters:**

▪ **params**: *object*

Name | Type | Description |
------ | ------ | ------ |
`accountSeed` | string | hex seed of the account  |

**Returns:** *[Account](account.md)*

▸ **addSigner**(`params`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:717](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L717)*

Adds a new signing key to the SDK instance. This will not change the current signer. For that,
  you must explicitly call `setSigner`

**Parameters:**

▪ **params**: *object*

Name | Type | Description |
------ | ------ | ------ |
`accountMnemonic` | string | account mnemonic  |

**Returns:** *[Account](account.md)*

▸ **addSigner**(`params`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:725](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L725)*

Adds a new signing key to the SDK instance. This will not change the current signer. For that,
  you must explicitly call [setSigner](polymesh.md#setsigner)

**Parameters:**

▪ **params**: *object*

Name | Type | Description |
------ | ------ | ------ |
`accountUri` | string | account URI  |

**Returns:** *[Account](account.md)*

___

###  claimClassicTicker

▸ **claimClassicTicker**(`args`: [ClaimClassicTickerParams](../interfaces/claimclassictickerparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/Polymesh.ts:351](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L351)*

Claim a ticker symbol that was reserved in Polymath Classic (Ethereum). The Ethereum account
  that owns the ticker must sign a special message that contains the DID of the Identity that will own the ticker
  in Polymesh, and provide the signed data to this call

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `claimClassicTicker.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ClaimClassicTickerParams](../interfaces/claimclassictickerparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

___

###  disconnect

▸ **disconnect**(): *Promise‹void›*

*Defined in [src/Polymesh.ts:699](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L699)*

Disconnect the client and close all open connections and subscriptions

**`note`** the SDK will become unusable after this operation. It will throw an error when attempting to
  access any chain or middleware data. If you wish to continue using the SDK, you must
  create a new instance by calling [connect](polymesh.md#static-connect)

**Returns:** *Promise‹void›*

___

###  getAccount

▸ **getAccount**(): *[Account](account.md)*

*Defined in [src/Polymesh.ts:473](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L473)*

Create an Account instance from an address. If no address is passed, the current Account is returned

**Returns:** *[Account](account.md)*

▸ **getAccount**(`args`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:474](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L474)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[Account](account.md)*

___

###  getAccountBalance

▸ **getAccountBalance**(`args?`: undefined | object): *Promise‹[AccountBalance](../globals.md#accountbalance)›*

*Defined in [src/Polymesh.ts:289](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L289)*

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[AccountBalance](../globals.md#accountbalance)›*

▸ **getAccountBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:290](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L290)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

▸ **getAccountBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:291](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L291)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getAccounts

▸ **getAccounts**(): *[Account](account.md)[]*

*Defined in [src/Polymesh.ts:492](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L492)*

Return a list that contains all the signing Accounts associated to the SDK instance

**`throws`** — if there is no current Account associated to the SDK instance

**Returns:** *[Account](account.md)[]*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[Identity](identity.md) | null›*

*Defined in [src/Polymesh.ts:466](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L466)*

Retrieve the Identity associated to the current Account (null if there is none)

**Returns:** *Promise‹[Identity](identity.md) | null›*

___

###  getIdentity

▸ **getIdentity**(`args`: object): *[Identity](identity.md)*

*Defined in [src/Polymesh.ts:459](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L459)*

Create an Identity instance from a DID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`did` | string |

**Returns:** *[Identity](identity.md)*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:688](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L688)*

Retrieve the number of the latest block in the chain

**Returns:** *Promise‹BigNumber›*

___

###  getNetworkProperties

▸ **getNetworkProperties**(): *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

*Defined in [src/Polymesh.ts:624](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L624)*

Retrieve information for the current network

**Returns:** *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

___

###  getSecurityToken

▸ **getSecurityToken**(`args`: object): *Promise‹[SecurityToken](securitytoken.md)›*

*Defined in [src/Polymesh.ts:598](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L598)*

Retrieve a Security Token

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Security Token ticker  |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)›*

___

###  getSecurityTokens

▸ **getSecurityTokens**(`args?`: undefined | object): *Promise‹[SecurityToken](securitytoken.md)[]›*

*Defined in [src/Polymesh.ts:566](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L566)*

Retrieve all the Security Tokens owned by an Identity

**`note`** tokens with unreadable characters in their tickers will be left out

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)[]›*

___

###  getTickerReservation

▸ **getTickerReservation**(`args`: object): *Promise‹[TickerReservation](tickerreservation.md)›*

*Defined in [src/Polymesh.ts:426](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L426)*

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Security Token ticker  |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)›*

___

###  getTickerReservations

▸ **getTickerReservations**(`args?`: undefined | object): *Promise‹[TickerReservation](tickerreservation.md)[]›*

*Defined in [src/Polymesh.ts:392](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L392)*

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tokens that
  have already been launched

**`note`** reservations with unreadable characters in their tickers will be left out

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)[]›*

___

###  getTransactionFees

▸ **getTransactionFees**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:510](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L510)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  getTreasuryAccount

▸ **getTreasuryAccount**(): *[Account](account.md)*

*Defined in [src/Polymesh.ts:517](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L517)*

Get the treasury wallet address

**Returns:** *[Account](account.md)*

___

###  getTreasuryBalance

▸ **getTreasuryBalance**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:648](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L648)*

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** *Promise‹BigNumber›*

▸ **getTreasuryBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:649](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L649)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  isIdentityValid

▸ **isIdentityValid**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:499](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L499)*

Return whether the supplied Identity/DID exists

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`identity` | [Identity](identity.md) &#124; string |

**Returns:** *Promise‹boolean›*

___

###  isTickerAvailable

▸ **isTickerAvailable**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:360](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L360)*

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹boolean›*

▸ **isTickerAvailable**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:361](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L361)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹boolean›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  onConnectionError

▸ **onConnectionError**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:530](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L530)*

Handle connection errors

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

###  onDisconnect

▸ **onDisconnect**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:547](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L547)*

Handle disconnection

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

###  registerIdentity

▸ **registerIdentity**(`args`: [RegisterIdentityParams](../interfaces/registeridentityparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*

*Defined in [src/Polymesh.ts:681](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L681)*

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Customer Due Diligence Provider

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `registerIdentity.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RegisterIdentityParams](../interfaces/registeridentityparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*

___

###  reserveTicker

▸ **reserveTicker**(`args`: [ReserveTickerParams](../interfaces/reservetickerparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/Polymesh.ts:339](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L339)*

Reserve a ticker symbol to later use in the creation of a Security Token.
  The ticker will expire after a set amount of time, after which other users can reserve it

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `reserveTicker.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ReserveTickerParams](../interfaces/reservetickerparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

___

###  setSigner

▸ **setSigner**(`signer`: string | [Account](account.md)): *void*

*Defined in [src/Polymesh.ts:744](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L744)*

Set the SDK's current signing key to the provided address

**`note`** the key must have been previously added via [addSigner](polymesh.md#addsigner)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | string &#124; [Account](account.md) |

**Returns:** *void*

___

###  transferPolyx

▸ **transferPolyx**(`args`: [TransferPolyxParams](../interfaces/transferpolyxparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Polymesh.ts:278](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L278)*

Transfer an amount of POLYX to a specified Account

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferPolyx.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferPolyxParams](../interfaces/transferpolyxparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

### `Static` connect

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:126](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L126)*

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:136](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L136)*

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:149](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L149)*

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:159](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L159)*

Create the instance and connect to the Polymesh node using an account mnemonic

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:168](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/Polymesh.ts#L168)*

Create the instance and connect to the Polymesh node without an account

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

# Class: Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [claims](polymesh.md#claims)
* [middleware](polymesh.md#middleware)

### Accessors

* [_polkadotApi](polymesh.md#_polkadotapi)

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

###  claims

• **claims**: *[Claims](claims.md)*

*Defined in [src/Polymesh.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L83)*

___

###  middleware

• **middleware**: *[Middleware](middleware.md)*

*Defined in [src/Polymesh.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L84)*

## Accessors

###  _polkadotApi

• **get _polkadotApi**(): *ApiPromise*

*Defined in [src/Polymesh.ts:655](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L655)*

Polkadot client

**Returns:** *ApiPromise*

## Methods

###  getAccount

▸ **getAccount**(): *[CurrentAccount](currentaccount.md)*

*Defined in [src/Polymesh.ts:445](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L445)*

Create an Account instance from an address. If no address is passed, the current Account is returned

**Returns:** *[CurrentAccount](currentaccount.md)*

▸ **getAccount**(`args`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:446](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L446)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[Account](account.md)*

___

###  getAccountBalance

▸ **getAccountBalance**(`args?`: undefined | object): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

*Defined in [src/Polymesh.ts:276](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L276)*

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **getAccountBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:277](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L277)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

▸ **getAccountBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:278](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L278)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md) | null›*

*Defined in [src/Polymesh.ts:438](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L438)*

Retrieve the Identity associated to the current Account (null if there is none)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md) | null›*

___

###  getIdentity

▸ **getIdentity**(`args`: object): *[Identity](identity.md)*

*Defined in [src/Polymesh.ts:431](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L431)*

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

*Defined in [src/Polymesh.ts:646](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L646)*

Retrieve the number of the latest block in the chain

**Returns:** *Promise‹BigNumber›*

___

###  getNetworkProperties

▸ **getNetworkProperties**(): *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

*Defined in [src/Polymesh.ts:588](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L588)*

Retrieve information for the current network

**Returns:** *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

___

###  getSecurityToken

▸ **getSecurityToken**(`args`: object): *Promise‹[SecurityToken](securitytoken.md)›*

*Defined in [src/Polymesh.ts:562](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L562)*

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

*Defined in [src/Polymesh.ts:525](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L525)*

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

*Defined in [src/Polymesh.ts:405](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L405)*

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

*Defined in [src/Polymesh.ts:366](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L366)*

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tokens that
  have already been launched

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)[]›*

___

###  getTransactionFees

▸ **getTransactionFees**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:473](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L473)*

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

*Defined in [src/Polymesh.ts:480](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L480)*

Get the treasury wallet address

**Returns:** *[Account](account.md)*

___

###  getTreasuryBalance

▸ **getTreasuryBalance**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:612](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L612)*

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** *Promise‹BigNumber›*

▸ **getTreasuryBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:613](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L613)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  isIdentityValid

▸ **isIdentityValid**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:462](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L462)*

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

*Defined in [src/Polymesh.ts:334](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L334)*

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹boolean›*

▸ **isTickerAvailable**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:335](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L335)*

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

*Defined in [src/Polymesh.ts:489](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L489)*

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

*Defined in [src/Polymesh.ts:506](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L506)*

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

▸ **registerIdentity**(`args`: [RegisterIdentityParams](../interfaces/registeridentityparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*

*Defined in [src/Polymesh.ts:639](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L639)*

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RegisterIdentityParams](../interfaces/registeridentityparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*

___

###  reserveTicker

▸ **reserveTicker**(`args`: [ReserveTickerParams](../interfaces/reservetickerparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/Polymesh.ts:325](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L325)*

Reserve a ticker symbol to later use in the creation of a Security Token.
  The ticker will expire after a set amount of time, after which other users can reserve it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ReserveTickerParams](../interfaces/reservetickerparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

___

###  transferPolyX

▸ **transferPolyX**(`args`: [TransferPolyXParams](../interfaces/transferpolyxparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Polymesh.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L265)*

Transfer an amount of POLYX to a specified Account

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferPolyXParams](../interfaces/transferpolyxparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

### `Static` connect

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:106](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L106)*

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L116)*

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:130](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L130)*

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:139](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/Polymesh.ts#L139)*

Create the instance and connect to the Polymesh node without an account

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

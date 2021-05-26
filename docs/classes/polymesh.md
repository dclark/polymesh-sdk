# Class: Polymesh

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

* [_polkadotApi](polymesh.md#_polkadotapi)

### Methods

* [disconnect](polymesh.md#disconnect)
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

###  claims

• **claims**: *[Claims](claims.md)*

*Defined in [src/Polymesh.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L74)*

___

###  middleware

• **middleware**: *[Middleware](middleware.md)*

*Defined in [src/Polymesh.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L75)*

___

###  registerIdentity

• **registerIdentity**: *ProcedureMethod‹[RegisterIdentityParams](../interfaces/registeridentityparams.md), [Identity](identity.md)›*

*Defined in [src/Polymesh.ts:639](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L639)*

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Customer Due Diligence Provider

___

###  reserveTicker

• **reserveTicker**: *ProcedureMethod‹[ReserveTickerParams](../interfaces/reservetickerparams.md), [TickerReservation](tickerreservation.md)›*

*Defined in [src/Polymesh.ts:330](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L330)*

Reserve a ticker symbol to later use in the creation of a Security Token.
  The ticker will expire after a set amount of time, after which other users can reserve it

**`param`** ticker symbol to reserve

**`note`** required role:
  - Ticker Owner

___

###  transferPolyX

• **transferPolyX**: *ProcedureMethod‹[TransferPolyXParams](../interfaces/transferpolyxparams.md), void›*

*Defined in [src/Polymesh.ts:269](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L269)*

Transfer an amount of POLYX to a specified Account

**`param`** account that will receive the POLYX

**`param`** amount of POLYX to be transferred

**`param`** identifier string to help differentiate transfers

## Accessors

###  _polkadotApi

• **get _polkadotApi**(): *ApiPromise*

*Defined in [src/Polymesh.ts:664](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L664)*

Polkadot client

**Returns:** *ApiPromise*

## Methods

###  disconnect

▸ **disconnect**(): *Promise‹void›*

*Defined in [src/Polymesh.ts:655](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L655)*

Disconnect the client and close all open connections and subscriptions

**`note`** the SDK will become unusable after this operation. It will throw an error when attempting to
  access any chain or middleware data. If you wish to continue using the SDK, you must
  create a new instance by calling [connect](polymesh.md#static-connect)

**Returns:** *Promise‹void›*

___

###  getAccount

▸ **getAccount**(): *[CurrentAccount](currentaccount.md)*

*Defined in [src/Polymesh.ts:443](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L443)*

Create an Account instance from an address. If no address is passed, the current Account is returned

**Returns:** *[CurrentAccount](currentaccount.md)*

▸ **getAccount**(`args`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:444](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L444)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[Account](account.md)*

___

###  getAccountBalance

▸ **getAccountBalance**(`args?`: undefined | object): *Promise‹[AccountBalance](../globals.md#accountbalance)›*

*Defined in [src/Polymesh.ts:278](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L278)*

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[AccountBalance](../globals.md#accountbalance)›*

▸ **getAccountBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:279](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L279)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

▸ **getAccountBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:280](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L280)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md) | null›*

*Defined in [src/Polymesh.ts:436](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L436)*

Retrieve the Identity associated to the current Account (null if there is none)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md) | null›*

___

###  getIdentity

▸ **getIdentity**(`args`: object): *[Identity](identity.md)*

*Defined in [src/Polymesh.ts:429](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L429)*

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

*Defined in [src/Polymesh.ts:644](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L644)*

Retrieve the number of the latest block in the chain

**Returns:** *Promise‹BigNumber›*

___

###  getNetworkProperties

▸ **getNetworkProperties**(): *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

*Defined in [src/Polymesh.ts:585](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L585)*

Retrieve information for the current network

**Returns:** *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

___

###  getSecurityToken

▸ **getSecurityToken**(`args`: object): *Promise‹[SecurityToken](securitytoken.md)›*

*Defined in [src/Polymesh.ts:559](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L559)*

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

*Defined in [src/Polymesh.ts:527](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L527)*

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

*Defined in [src/Polymesh.ts:403](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L403)*

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

*Defined in [src/Polymesh.ts:369](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L369)*

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

*Defined in [src/Polymesh.ts:471](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L471)*

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

*Defined in [src/Polymesh.ts:478](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L478)*

Get the treasury wallet address

**Returns:** *[Account](account.md)*

___

###  getTreasuryBalance

▸ **getTreasuryBalance**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:609](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L609)*

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** *Promise‹BigNumber›*

▸ **getTreasuryBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:610](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L610)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  isIdentityValid

▸ **isIdentityValid**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:460](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L460)*

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

*Defined in [src/Polymesh.ts:337](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L337)*

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹boolean›*

▸ **isTickerAvailable**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:338](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L338)*

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

*Defined in [src/Polymesh.ts:491](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L491)*

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

*Defined in [src/Polymesh.ts:508](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L508)*

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

### `Static` connect

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L114)*

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:124](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L124)*

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:138](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L138)*

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:148](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L148)*

Create the instance and connect to the Polymesh node using an account mnemonic

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:157](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/Polymesh.ts#L157)*

Create the instance and connect to the Polymesh node without an account

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

# Class: Context

Context in which the SDK is being used

- Holds the current low level API
- Holds the current keyring pair
- Holds the current Identity

## Hierarchy

* **Context**

## Index

### Properties

* [currentPair](context.md#optional-currentpair)
* [isArchiveNode](context.md#isarchivenode)
* [polymeshApi](context.md#polymeshapi)

### Accessors

* [middlewareApi](context.md#middlewareapi)

### Methods

* [accountBalance](context.md#accountbalance)
* [getAccounts](context.md#getaccounts)
* [getCurrentAccount](context.md#getcurrentaccount)
* [getCurrentIdentity](context.md#getcurrentidentity)
* [getCurrentPair](context.md#getcurrentpair)
* [getInvalidDids](context.md#getinvaliddids)
* [getLatestBlock](context.md#getlatestblock)
* [getSecondaryKeys](context.md#getsecondarykeys)
* [getSigner](context.md#getsigner)
* [getTransactionArguments](context.md#gettransactionarguments)
* [getTransactionFees](context.md#gettransactionfees)
* [isMiddlewareAvailable](context.md#ismiddlewareavailable)
* [isMiddlewareEnabled](context.md#ismiddlewareenabled)
* [issuedClaims](context.md#issuedclaims)
* [queryMiddleware](context.md#querymiddleware)
* [setPair](context.md#setpair)
* [create](context.md#static-create)

## Properties

### `Optional` currentPair

• **currentPair**? : *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L76)*

___

###  isArchiveNode

• **isArchiveNode**: *boolean* = false

*Defined in [src/base/Context.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L81)*

Whether the current node is an archive node (contains a full history from genesis onward) or not

___

###  polymeshApi

• **polymeshApi**: *ApiPromise*

*Defined in [src/base/Context.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L74)*

## Accessors

###  middlewareApi

• **get middlewareApi**(): *ApolloClient‹NormalizedCacheObject›*

*Defined in [src/base/Context.ts:670](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L670)*

Retrieve the middleware client

**`throws`** if cred
entials are not set

**Returns:** *ApolloClient‹NormalizedCacheObject›*

## Methods

###  accountBalance

▸ **accountBalance**(`account?`: string | [Account](account.md)): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

*Defined in [src/base/Context.ts:233](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L233)*

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account?` | string &#124; [Account](account.md) |

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **accountBalance**(`account`: string | [Account](account.md) | undefined, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:234](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L234)*

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) &#124; undefined |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getAccounts

▸ **getAccounts**(): *Array‹[AccountData](../interfaces/accountdata.md)›*

*Defined in [src/base/Context.ts:206](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L206)*

Retrieve a list of addresses associated with the account

**Returns:** *Array‹[AccountData](../interfaces/accountdata.md)›*

___

###  getCurrentAccount

▸ **getCurrentAccount**(): *[CurrentAccount](currentaccount.md)*

*Defined in [src/base/Context.ts:292](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L292)*

Retrieve current Account

**`throws`** if there is no current account associated to the SDK instance

**Returns:** *[CurrentAccount](currentaccount.md)*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md)›*

*Defined in [src/base/Context.ts:312](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L312)*

Retrieve current Identity

**`throws`** if there is no Identity associated to the current Account (or there is no current Account associated to the SDK instance)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md)›*

___

###  getCurrentPair

▸ **getCurrentPair**(): *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:332](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L332)*

Retrieve current Keyring Pair

**`throws`** if there is no Account associated to the SDK instance

**Returns:** *[KeyringPair](../interfaces/keyringpair.md)*

___

###  getInvalidDids

▸ **getInvalidDids**(`identities`: (string | [Identity](identity.md)‹›)[]): *Promise‹string[]›*

*Defined in [src/base/Context.ts:360](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L360)*

Check whether Identities exist

**Parameters:**

Name | Type |
------ | ------ |
`identities` | (string &#124; [Identity](identity.md)‹›)[] |

**Returns:** *Promise‹string[]›*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/base/Context.ts:728](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L728)*

Retrieve the latest block number

**Returns:** *Promise‹BigNumber›*

___

###  getSecondaryKeys

▸ **getSecondaryKeys**(): *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

*Defined in [src/base/Context.ts:558](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L558)*

Retrieve the list of secondary keys related to the Account

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:559](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L559)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getSigner

▸ **getSigner**(): *AddressOrPair*

*Defined in [src/base/Context.ts:347](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L347)*

Retrieve the signer address (or keyring pair)

**Returns:** *AddressOrPair*

___

###  getTransactionArguments

▸ **getTransactionArguments**(`args`: object): *[TransactionArgument](../globals.md#transactionargument)[]*

*Defined in [src/base/Context.ts:410](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L410)*

Retrieve the types of arguments that a certain transaction requires to be run

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | tag associated with the transaction that will be executed if the proposal passes  |

**Returns:** *[TransactionArgument](../globals.md#transactionargument)[]*

___

###  getTransactionFees

▸ **getTransactionFees**(`tag`: TxTag): *Promise‹BigNumber›*

*Defined in [src/base/Context.ts:383](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L383)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  isMiddlewareAvailable

▸ **isMiddlewareAvailable**(): *Promise‹boolean›*

*Defined in [src/base/Context.ts:715](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L715)*

Return whether the middleware is enabled and online

**Returns:** *Promise‹boolean›*

___

###  isMiddlewareEnabled

▸ **isMiddlewareEnabled**(): *boolean*

*Defined in [src/base/Context.ts:708](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L708)*

Return whether the middleware was enabled at startup

**Returns:** *boolean*

___

###  issuedClaims

▸ **issuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/base/Context.ts:600](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L600)*

Retrieve a list of claims. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [ClaimType](../enums/claimtype.md)[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | identities (or Identity IDs) for which to fetch claims (targets). Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  queryMiddleware

▸ **queryMiddleware**‹**Result**›(`query`: GraphqlQuery‹unknown›): *Promise‹ApolloQueryResult‹Result››*

*Defined in [src/base/Context.ts:686](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L686)*

Make a query to the middleware server using the apollo client

**Type parameters:**

▪ **Result**: *Partial‹Query›*

**Parameters:**

Name | Type |
------ | ------ |
`query` | GraphqlQuery‹unknown› |

**Returns:** *Promise‹ApolloQueryResult‹Result››*

___

###  setPair

▸ **setPair**(`address`: string): *Promise‹void›*

*Defined in [src/base/Context.ts:216](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L216)*

Set a pair as the current account keyring pair

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹void›*

___

### `Static` create

▸ **create**(`params`: object): *Promise‹[Context](context.md)›*

*Defined in [src/base/Context.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L112)*

Create the Context instance

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`middlewareApi` | ApolloClient‹NormalizedCacheObject› &#124; null |
`polymeshApi` | ApiPromise |
`seed` | string |

**Returns:** *Promise‹[Context](context.md)›*

▸ **create**(`params`: object): *Promise‹[Context](context.md)›*

*Defined in [src/base/Context.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L118)*

Create the Context instance

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`keyring` | [CommonKeyring](../globals.md#commonkeyring) |
`middlewareApi` | ApolloClient‹NormalizedCacheObject› &#124; null |
`polymeshApi` | ApiPromise |

**Returns:** *Promise‹[Context](context.md)›*

▸ **create**(`params`: object): *Promise‹[Context](context.md)›*

*Defined in [src/base/Context.ts:124](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L124)*

Create the Context instance

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`middlewareApi` | ApolloClient‹NormalizedCacheObject› &#124; null |
`polymeshApi` | ApiPromise |
`uri` | string |

**Returns:** *Promise‹[Context](context.md)›*

▸ **create**(`params`: object): *Promise‹[Context](context.md)›*

*Defined in [src/base/Context.ts:130](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/base/Context.ts#L130)*

Create the Context instance

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`middlewareApi` | ApolloClient‹NormalizedCacheObject› &#124; null |
`polymeshApi` | ApiPromise |

**Returns:** *Promise‹[Context](context.md)›*

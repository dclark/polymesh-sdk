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
* [getSigningKeys](context.md#getsigningkeys)
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

*Defined in [src/base/Context.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L77)*

___

###  isArchiveNode

• **isArchiveNode**: *boolean* = false

*Defined in [src/base/Context.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L82)*

Whether the current node is an archive node (contains a full history from genesis onward) or not

___

###  polymeshApi

• **polymeshApi**: *ApiPromise*

*Defined in [src/base/Context.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L75)*

## Accessors

###  middlewareApi

• **get middlewareApi**(): *ApolloClient‹NormalizedCacheObject›*

*Defined in [src/base/Context.ts:647](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L647)*

Retrieve the middleware client

**`throws`** if cred
entials are not set

**Returns:** *ApolloClient‹NormalizedCacheObject›*

## Methods

###  accountBalance

▸ **accountBalance**(`account?`: string | [Account](account.md)): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

*Defined in [src/base/Context.ts:233](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L233)*

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account?` | string &#124; [Account](account.md) |

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **accountBalance**(`account`: string | [Account](account.md) | undefined, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:234](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L234)*

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

*Defined in [src/base/Context.ts:206](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L206)*

Retrieve a list of addresses associated with the account

**Returns:** *Array‹[AccountData](../interfaces/accountdata.md)›*

___

###  getCurrentAccount

▸ **getCurrentAccount**(): *[CurrentAccount](currentaccount.md)*

*Defined in [src/base/Context.ts:292](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L292)*

Retrieve current Account

**`throws`** if there is no current account associated to the SDK instance

**Returns:** *[CurrentAccount](currentaccount.md)*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md)›*

*Defined in [src/base/Context.ts:312](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L312)*

Retrieve current Identity

**`throws`** if there is no Identity associated to the current Account (or there is no current Account associated to the SDK instance)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md)›*

___

###  getCurrentPair

▸ **getCurrentPair**(): *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:332](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L332)*

Retrieve current Keyring Pair

**`throws`** if there is no Account associated to the SDK instance

**Returns:** *[KeyringPair](../interfaces/keyringpair.md)*

___

###  getInvalidDids

▸ **getInvalidDids**(`identities`: (string | [Identity](identity.md)‹›)[]): *Promise‹string[]›*

*Defined in [src/base/Context.ts:347](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L347)*

Check whether Identities exist

**Parameters:**

Name | Type |
------ | ------ |
`identities` | (string &#124; [Identity](identity.md)‹›)[] |

**Returns:** *Promise‹string[]›*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/base/Context.ts:705](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L705)*

Retrieve the latest block number

**Returns:** *Promise‹BigNumber›*

___

###  getSigningKeys

▸ **getSigningKeys**(): *Promise‹[SigningKey](../interfaces/signingkey.md)[]›*

*Defined in [src/base/Context.ts:545](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L545)*

Retrieve the list of signing keys related to the Account

**`note`** can be subscribed to

**Returns:** *Promise‹[SigningKey](../interfaces/signingkey.md)[]›*

▸ **getSigningKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SigningKey](../interfaces/signingkey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:546](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L546)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SigningKey](../interfaces/signingkey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTransactionArguments

▸ **getTransactionArguments**(`args`: object): *[TransactionArgument](../globals.md#transactionargument)[]*

*Defined in [src/base/Context.ts:397](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L397)*

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

*Defined in [src/base/Context.ts:370](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L370)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  isMiddlewareAvailable

▸ **isMiddlewareAvailable**(): *Promise‹boolean›*

*Defined in [src/base/Context.ts:692](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L692)*

Return whether the middleware is enabled and online

**Returns:** *Promise‹boolean›*

___

###  isMiddlewareEnabled

▸ **isMiddlewareEnabled**(): *boolean*

*Defined in [src/base/Context.ts:685](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L685)*

Return whether the middleware was enabled at startup

**Returns:** *boolean*

___

###  issuedClaims

▸ **issuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/base/Context.ts:586](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L586)*

Retrieve a list of claims. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [ClaimType](../enums/claimtype.md)[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | - |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | identities (or Identity IDs) for which to fetch claims (targets). Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  queryMiddleware

▸ **queryMiddleware**‹**Result**›(`query`: GraphqlQuery‹unknown›): *Promise‹ApolloQueryResult‹Result››*

*Defined in [src/base/Context.ts:663](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L663)*

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

*Defined in [src/base/Context.ts:216](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L216)*

Set a pair as the current account keyring pair

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹void›*

___

### `Static` create

▸ **create**(`params`: object): *Promise‹[Context](context.md)›*

*Defined in [src/base/Context.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L113)*

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

*Defined in [src/base/Context.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L119)*

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

*Defined in [src/base/Context.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L125)*

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

*Defined in [src/base/Context.ts:131](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L131)*

Create the Context instance

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`middlewareApi` | ApolloClient‹NormalizedCacheObject› &#124; null |
`polymeshApi` | ApiPromise |

**Returns:** *Promise‹[Context](context.md)›*

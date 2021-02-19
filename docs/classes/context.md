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

*Defined in [src/base/Context.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L83)*

___

###  isArchiveNode

• **isArchiveNode**: *boolean* = false

*Defined in [src/base/Context.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L88)*

Whether the current node is an archive node (contains a full history from genesis onward) or not

___

###  polymeshApi

• **polymeshApi**: *ApiPromise*

*Defined in [src/base/Context.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L81)*

## Accessors

###  middlewareApi

• **get middlewareApi**(): *ApolloClient‹NormalizedCacheObject›*

*Defined in [src/base/Context.ts:777](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L777)*

Retrieve the middleware client

**`throws`** if the middleware is not enabled

**Returns:** *ApolloClient‹NormalizedCacheObject›*

## Methods

###  accountBalance

▸ **accountBalance**(`account?`: string | [Account](account.md)): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

*Defined in [src/base/Context.ts:226](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L226)*

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account?` | string &#124; [Account](account.md) |

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **accountBalance**(`account`: string | [Account](account.md) | undefined, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:227](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L227)*

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

*Defined in [src/base/Context.ts:199](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L199)*

Retrieve a list of addresses associated with the account

**Returns:** *Array‹[AccountData](../interfaces/accountdata.md)›*

___

###  getCurrentAccount

▸ **getCurrentAccount**(): *[CurrentAccount](currentaccount.md)*

*Defined in [src/base/Context.ts:285](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L285)*

Retrieve current Account

**`throws`** if there is no current account associated to the SDK instance

**Returns:** *[CurrentAccount](currentaccount.md)*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md)›*

*Defined in [src/base/Context.ts:305](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L305)*

Retrieve current Identity

**`throws`** if there is no Identity associated to the current Account (or there is no current Account associated to the SDK instance)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md)›*

___

###  getCurrentPair

▸ **getCurrentPair**(): *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:325](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L325)*

Retrieve current Keyring Pair

**`throws`** if there is no Account associated to the SDK instance

**Returns:** *[KeyringPair](../interfaces/keyringpair.md)*

___

###  getInvalidDids

▸ **getInvalidDids**(`identities`: (string | [Identity](identity.md)‹›)[]): *Promise‹string[]›*

*Defined in [src/base/Context.ts:353](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L353)*

Check whether Identities exist

**Parameters:**

Name | Type |
------ | ------ |
`identities` | (string &#124; [Identity](identity.md)‹›)[] |

**Returns:** *Promise‹string[]›*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/base/Context.ts:835](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L835)*

Retrieve the latest block number

**Returns:** *Promise‹BigNumber›*

___

###  getSecondaryKeys

▸ **getSecondaryKeys**(): *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

*Defined in [src/base/Context.ts:551](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L551)*

Retrieve the list of secondary keys related to the Account

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:552](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L552)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getSigner

▸ **getSigner**(): *AddressOrPair*

*Defined in [src/base/Context.ts:340](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L340)*

Retrieve the signer address (or keyring pair)

**Returns:** *AddressOrPair*

___

###  getTransactionArguments

▸ **getTransactionArguments**(`args`: object): *[TransactionArgument](../globals.md#transactionargument)[]*

*Defined in [src/base/Context.ts:403](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L403)*

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

*Defined in [src/base/Context.ts:376](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L376)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  isMiddlewareAvailable

▸ **isMiddlewareAvailable**(): *Promise‹boolean›*

*Defined in [src/base/Context.ts:822](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L822)*

Return whether the middleware is enabled and online

**Returns:** *Promise‹boolean›*

___

###  isMiddlewareEnabled

▸ **isMiddlewareEnabled**(): *boolean*

*Defined in [src/base/Context.ts:815](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L815)*

Return whether the middleware was enabled at startup

**Returns:** *boolean*

___

###  issuedClaims

▸ **issuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/base/Context.ts:726](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L726)*

Retrieve a list of claims. Can be filtered using parameters

**`note`** uses the middleware (optional)

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

*Defined in [src/base/Context.ts:793](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L793)*

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

*Defined in [src/base/Context.ts:209](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L209)*

Set a pair as the current account keyring pair

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹void›*

___

### `Static` create

▸ **create**(`params`: object): *Promise‹[Context](context.md)›*

*Defined in [src/base/Context.ts:122](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/base/Context.ts#L122)*

Create the Context instance

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`accountMnemonic?` | undefined &#124; string |
`accountSeed?` | undefined &#124; string |
`accountUri?` | undefined &#124; string |
`keyring?` | [CommonKeyring](../globals.md#commonkeyring) &#124; [UiKeyring](../interfaces/uikeyring.md) |
`middlewareApi` | ApolloClient‹NormalizedCacheObject› &#124; null |
`polymeshApi` | ApiPromise |

**Returns:** *Promise‹[Context](context.md)›*

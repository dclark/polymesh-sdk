# Context

Context in which the SDK is being used

* Holds the current low level API
* Holds the current keyring pair
* Holds the current Identity

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

• **currentPair**? : [_KeyringPair_](../interfaces/keyringpair.md)

_Defined in_ [_src/base/Context.ts:77_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L77)

### isArchiveNode

• **isArchiveNode**: _boolean_ = false

_Defined in_ [_src/base/Context.ts:82_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L82)

Whether the current node is an archive node \(contains a full history from genesis onward\) or not

### polymeshApi

• **polymeshApi**: _ApiPromise_

_Defined in_ [_src/base/Context.ts:75_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L75)

## Accessors

### middlewareApi

• **get middlewareApi**\(\): _ApolloClient‹NormalizedCacheObject›_

_Defined in_ [_src/base/Context.ts:647_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L647)

Retrieve the middleware client

**`throws`** if cred entials are not set

**Returns:** _ApolloClient‹NormalizedCacheObject›_

## Methods

### accountBalance

▸ **accountBalance**\(`account?`: string \| [Account](account.md)\): _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

_Defined in_ [_src/base/Context.ts:233_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L233)

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account?` | string \| [Account](account.md) |

**Returns:** _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

▸ **accountBalance**\(`account`: string \| [Account](account.md) \| undefined, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/base/Context.ts:234_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L234)

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string \| [Account](account.md) \| undefined |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getAccounts

▸ **getAccounts**\(\): _Array‹_[_AccountData_](../interfaces/accountdata.md)_›_

_Defined in_ [_src/base/Context.ts:206_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L206)

Retrieve a list of addresses associated with the account

**Returns:** _Array‹_[_AccountData_](../interfaces/accountdata.md)_›_

### getCurrentAccount

▸ **getCurrentAccount**\(\): [_CurrentAccount_](currentaccount.md)

_Defined in_ [_src/base/Context.ts:292_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L292)

Retrieve current Account

**`throws`** if there is no current account associated to the SDK instance

**Returns:** [_CurrentAccount_](currentaccount.md)

### getCurrentIdentity

▸ **getCurrentIdentity**\(\): _Promise‹_[_CurrentIdentity_](currentidentity.md)_›_

_Defined in_ [_src/base/Context.ts:312_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L312)

Retrieve current Identity

**`throws`** if there is no Identity associated to the current Account \(or there is no current Account associated to the SDK instance\)

**Returns:** _Promise‹_[_CurrentIdentity_](currentidentity.md)_›_

### getCurrentPair

▸ **getCurrentPair**\(\): [_KeyringPair_](../interfaces/keyringpair.md)

_Defined in_ [_src/base/Context.ts:332_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L332)

Retrieve current Keyring Pair

**`throws`** if there is no Account associated to the SDK instance

**Returns:** [_KeyringPair_](../interfaces/keyringpair.md)

### getInvalidDids

▸ **getInvalidDids**\(`identities`: \(string \| [Identity](identity.md)‹›\)\[\]\): _Promise‹string\[\]›_

_Defined in_ [_src/base/Context.ts:347_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L347)

Check whether Identities exist

**Parameters:**

| Name | Type |
| :--- | :--- |
| `identities` | \(string \| [Identity](identity.md)‹›\)\[\] |

**Returns:** _Promise‹string\[\]›_

### getLatestBlock

▸ **getLatestBlock**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/base/Context.ts:705_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L705)

Retrieve the latest block number

**Returns:** _Promise‹BigNumber›_

### getSigningKeys

▸ **getSigningKeys**\(\): _Promise‹_[_SigningKey_](../interfaces/signingkey.md)_\[\]›_

_Defined in_ [_src/base/Context.ts:545_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L545)

Retrieve the list of signing keys related to the Account

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SigningKey_](../interfaces/signingkey.md)_\[\]›_

▸ **getSigningKeys**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SigningKey](../interfaces/signingkey.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/base/Context.ts:546_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L546)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SigningKey](../interfaces/signingkey.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getTransactionArguments

▸ **getTransactionArguments**\(`args`: object\): [_TransactionArgument_](../globals.md#transactionargument)_\[\]_

_Defined in_ [_src/base/Context.ts:397_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L397)

Retrieve the types of arguments that a certain transaction requires to be run

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | tag associated with the transaction that will be executed if the proposal passes |

**Returns:** [_TransactionArgument_](../globals.md#transactionargument)_\[\]_

### getTransactionFees

▸ **getTransactionFees**\(`tag`: TxTag\): _Promise‹BigNumber›_

_Defined in_ [_src/base/Context.ts:370_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L370)

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | transaction tag \(i.e. TxTags.asset.CreateAsset or "asset.createAsset"\) |

**Returns:** _Promise‹BigNumber›_

### isMiddlewareAvailable

▸ **isMiddlewareAvailable**\(\): _Promise‹boolean›_

_Defined in_ [_src/base/Context.ts:692_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L692)

Return whether the middleware is enabled and online

**Returns:** _Promise‹boolean›_

### isMiddlewareEnabled

▸ **isMiddlewareEnabled**\(\): _boolean_

_Defined in_ [_src/base/Context.ts:685_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L685)

Return whether the middleware was enabled at startup

**Returns:** _boolean_

### issuedClaims

▸ **issuedClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

_Defined in_ [_src/base/Context.ts:586_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L586)

Retrieve a list of claims. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `claimTypes?` | [ClaimType](../enums/claimtype.md)\[\] | types of the claims to fetch. Defaults to any type |
| `includeExpired?` | undefined \| false \| true | - |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |
| `targets?` | \(string \| [Identity](identity.md)‹›\)\[\] | identities \(or Identity IDs\) for which to fetch claims \(targets\). Defaults to all targets |
| `trustedClaimIssuers?` | \(string \| [Identity](identity.md)‹›\)\[\] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

### queryMiddleware

▸ **queryMiddleware**‹**Result**›\(`query`: GraphqlQuery‹unknown›\): _Promise‹ApolloQueryResult‹Result››_

_Defined in_ [_src/base/Context.ts:663_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L663)

Make a query to the middleware server using the apollo client

**Type parameters:**

▪ **Result**: _Partial‹Query›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `query` | GraphqlQuery‹unknown› |

**Returns:** _Promise‹ApolloQueryResult‹Result››_

### setPair

▸ **setPair**\(`address`: string\): _Promise‹void›_

_Defined in_ [_src/base/Context.ts:216_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L216)

Set a pair as the current account keyring pair

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** _Promise‹void›_

### `Static` create

▸ **create**\(`params`: object\): _Promise‹_[_Context_](context.md)_›_

_Defined in_ [_src/base/Context.ts:113_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L113)

Create the Context instance

**Parameters:**

▪ **params**: _object_

| Name | Type |
| :--- | :--- |
| `middlewareApi` | ApolloClient‹NormalizedCacheObject› \| null |
| `polymeshApi` | ApiPromise |
| `seed` | string |

**Returns:** _Promise‹_[_Context_](context.md)_›_

▸ **create**\(`params`: object\): _Promise‹_[_Context_](context.md)_›_

_Defined in_ [_src/base/Context.ts:119_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L119)

Create the Context instance

**Parameters:**

▪ **params**: _object_

| Name | Type |
| :--- | :--- |
| `keyring` | [CommonKeyring](../globals.md#commonkeyring) |
| `middlewareApi` | ApolloClient‹NormalizedCacheObject› \| null |
| `polymeshApi` | ApiPromise |

**Returns:** _Promise‹_[_Context_](context.md)_›_

▸ **create**\(`params`: object\): _Promise‹_[_Context_](context.md)_›_

_Defined in_ [_src/base/Context.ts:125_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L125)

Create the Context instance

**Parameters:**

▪ **params**: _object_

| Name | Type |
| :--- | :--- |
| `middlewareApi` | ApolloClient‹NormalizedCacheObject› \| null |
| `polymeshApi` | ApiPromise |
| `uri` | string |

**Returns:** _Promise‹_[_Context_](context.md)_›_

▸ **create**\(`params`: object\): _Promise‹_[_Context_](context.md)_›_

_Defined in_ [_src/base/Context.ts:131_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/Context.ts#L131)

Create the Context instance

**Parameters:**

▪ **params**: _object_

| Name | Type |
| :--- | :--- |
| `middlewareApi` | ApolloClient‹NormalizedCacheObject› \| null |
| `polymeshApi` | ApiPromise |

**Returns:** _Promise‹_[_Context_](context.md)_›_


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
* [ss58Format](context.md#ss58format)

### Accessors

* [middlewareApi](context.md#middlewareapi)

### Methods

* [accountBalance](context.md#accountbalance)
* [addPair](context.md#addpair)
* [clone](context.md#clone)
* [disconnect](context.md#disconnect)
* [getAccounts](context.md#getaccounts)
* [getCurrentAccount](context.md#getcurrentaccount)
* [getCurrentIdentity](context.md#getcurrentidentity)
* [getCurrentPair](context.md#getcurrentpair)
* [getInvalidDids](context.md#getinvaliddids)
* [getLatestBlock](context.md#getlatestblock)
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

• **currentPair**? : [_KeyringPair_](../interfaces/keyringpair.md)

_Defined in_ [_src/base/Context.ts:114_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L114)

### isArchiveNode

• **isArchiveNode**: _boolean_ = false

_Defined in_ [_src/base/Context.ts:119_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L119)

Whether the current node is an archive node \(contains a full history from genesis onward\) or not

### polymeshApi

• **polymeshApi**: _ApiPromise_

_Defined in_ [_src/base/Context.ts:112_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L112)

### ss58Format

• **ss58Format**: _number_

_Defined in_ [_src/base/Context.ts:121_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L121)

## Accessors

### middlewareApi

• **get middlewareApi**\(\): _ApolloClient‹NormalizedCacheObject›_

_Defined in_ [_src/base/Context.ts:953_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L953)

Retrieve the middleware client

**`throws`** if the middleware is not enabled

**Returns:** _ApolloClient‹NormalizedCacheObject›_

## Methods

### accountBalance

▸ **accountBalance**\(`account?`: string \| [Account](account.md)\): _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

_Defined in_ [_src/base/Context.ts:344_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L344)

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account?` | string \| [Account](account.md) |

**Returns:** _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

▸ **accountBalance**\(`account`: string \| [Account](account.md) \| undefined, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/base/Context.ts:345_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L345)

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string \| [Account](account.md) \| undefined |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### addPair

▸ **addPair**\(`params`: [AddPairParams](../globals.md#addpairparams)\): [_KeyringPair_](../interfaces/keyringpair.md)

_Defined in_ [_src/base/Context.ts:284_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L284)

Add a signing pair to the Keyring

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | [AddPairParams](../globals.md#addpairparams) |

**Returns:** [_KeyringPair_](../interfaces/keyringpair.md)

### clone

▸ **clone**\(\): [_Context_](context.md)

_Defined in_ [_src/base/Context.ts:1041_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L1041)

Returns a \(shallow\) clone of this instance. Useful for providing a separate Context to Procedures with different signers

**Returns:** [_Context_](context.md)

### disconnect

▸ **disconnect**\(\): _Promise‹void›_

_Defined in_ [_src/base/Context.ts:1023_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L1023)

Disconnect the Polkadot API, middleware, and render this instance unusable

**`note`** after disconnecting, trying to access any property in this objecct will result in an error

**Returns:** _Promise‹void›_

### getAccounts

▸ **getAccounts**\(\): _\[\]_

_Defined in_ [_src/base/Context.ts:261_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L261)

Retrieve a list of Accounts that can act as signers

**Returns:** _\[\]_

### getCurrentAccount

▸ **getCurrentAccount**\(\): [_CurrentAccount_](currentaccount.md)

_Defined in_ [_src/base/Context.ts:406_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L406)

Retrieve current Account

**`throws`** if there is no current account associated to the SDK instance

**Returns:** [_CurrentAccount_](currentaccount.md)

### getCurrentIdentity

▸ **getCurrentIdentity**\(\): _Promise‹_[_CurrentIdentity_](currentidentity.md)_›_

_Defined in_ [_src/base/Context.ts:426_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L426)

Retrieve current Identity

**`throws`** if there is no Identity associated to the current Account \(or there is no current Account associated to the SDK instance\)

**Returns:** _Promise‹_[_CurrentIdentity_](currentidentity.md)_›_

### getCurrentPair

▸ **getCurrentPair**\(\): [_KeyringPair_](../interfaces/keyringpair.md)

_Defined in_ [_src/base/Context.ts:446_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L446)

Retrieve current Keyring Pair

**`throws`** if there is no Account associated to the SDK instance

**Returns:** [_KeyringPair_](../interfaces/keyringpair.md)

### getInvalidDids

▸ **getInvalidDids**\(`identities`: \(string \| [Identity](identity.md)‹›\)\[\]\): _Promise‹string\[\]›_

_Defined in_ [_src/base/Context.ts:475_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L475)

Check whether Identities exist

**Parameters:**

| Name | Type |
| :--- | :--- |
| `identities` | \(string \| [Identity](identity.md)‹›\)\[\] |

**Returns:** _Promise‹string\[\]›_

### getLatestBlock

▸ **getLatestBlock**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/base/Context.ts:1011_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L1011)

Retrieve the latest block number

**Returns:** _Promise‹BigNumber›_

### getSigner

▸ **getSigner**\(\): _AddressOrPair_

_Defined in_ [_src/base/Context.ts:462_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L462)

Retrieve the signer address \(or keyring pair\)

**Returns:** _AddressOrPair_

### getTransactionArguments

▸ **getTransactionArguments**\(`args`: object\): [_TransactionArgument_](../globals.md#transactionargument)_\[\]_

_Defined in_ [_src/base/Context.ts:525_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L525)

Retrieve the types of arguments that a certain transaction requires to be run

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | tag associated with the transaction that will be executed if the proposal passes |

**Returns:** [_TransactionArgument_](../globals.md#transactionargument)_\[\]_

### getTransactionFees

▸ **getTransactionFees**\(`tag`: TxTag\): _Promise‹BigNumber›_

_Defined in_ [_src/base/Context.ts:498_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L498)

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | transaction tag \(i.e. TxTags.asset.CreateAsset or "asset.createAsset"\) |

**Returns:** _Promise‹BigNumber›_

### isMiddlewareAvailable

▸ **isMiddlewareAvailable**\(\): _Promise‹boolean›_

_Defined in_ [_src/base/Context.ts:998_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L998)

Return whether the middleware is enabled and online

**Returns:** _Promise‹boolean›_

### isMiddlewareEnabled

▸ **isMiddlewareEnabled**\(\): _boolean_

_Defined in_ [_src/base/Context.ts:991_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L991)

Return whether the middleware was enabled at startup

**Returns:** _boolean_

### issuedClaims

▸ **issuedClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

_Defined in_ [_src/base/Context.ts:902_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L902)

Retrieve a list of claims. Can be filtered using parameters

**`note`** uses the middleware \(optional\)

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `claimTypes?` | [Exclude](../enums/targettreatment.md#exclude)‹[ClaimType](../enums/claimtype.md), [InvestorUniquenessV2](../enums/claimtype.md#investoruniquenessv2)›\[\] | types of the claims to fetch. Defaults to any type |
| `includeExpired?` | undefined \| false \| true | whether to include expired claims. Defaults to true |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |
| `targets?` | \(string \| [Identity](identity.md)‹›\)\[\] | identities \(or Identity IDs\) for which to fetch claims \(targets\). Defaults to all targets |
| `trustedClaimIssuers?` | \(string \| [Identity](identity.md)‹›\)\[\] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

### queryMiddleware

▸ **queryMiddleware**‹**Result**›\(`query`: GraphqlQuery‹unknown›\): _Promise‹ApolloQueryResult‹Result››_

_Defined in_ [_src/base/Context.ts:969_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L969)

Make a query to the middleware server using the apollo client

**Type parameters:**

▪ **Result**: _Partial‹Query›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `query` | GraphqlQuery‹unknown› |

**Returns:** _Promise‹ApolloQueryResult‹Result››_

### setPair

▸ **setPair**\(`address`: string\): _void_

_Defined in_ [_src/base/Context.ts:326_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L326)

Set a pair as the current Account keyring pair

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** _void_

### `Static` create

▸ **create**\(`params`: object\): _Promise‹_[_Context_](context.md)_›_

_Defined in_ [_src/base/Context.ts:182_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/base/Context.ts#L182)

Create the Context instance

**Parameters:**

▪ **params**: _object_

| Name | Type |
| :--- | :--- |
| `accountMnemonic?` | undefined \| string |
| `accountSeed?` | undefined \| string |
| `accountUri?` | undefined \| string |
| `keyring?` | [CommonKeyring](../globals.md#commonkeyring) \| [UiKeyring](../interfaces/uikeyring.md) |
| `middlewareApi` | ApolloClient‹NormalizedCacheObject› \| null |
| `polymeshApi` | ApiPromise |

**Returns:** _Promise‹_[_Context_](context.md)_›_


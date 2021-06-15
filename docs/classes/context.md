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
* [disconnect](context.md#disconnect)
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

• **currentPair**? : [_KeyringPair_](../interfaces/keyringpair.md)

_Defined in_ [_src/base/Context.ts:111_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L111)

### isArchiveNode

• **isArchiveNode**: _boolean_ = false

_Defined in_ [_src/base/Context.ts:116_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L116)

Whether the current node is an archive node \(contains a full history from genesis onward\) or not

### polymeshApi

• **polymeshApi**: _ApiPromise_

_Defined in_ [_src/base/Context.ts:109_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L109)

### ss58Format

• **ss58Format**: _number_ = DEFAULT\_SS58\_FORMAT

_Defined in_ [_src/base/Context.ts:118_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L118)

## Accessors

### middlewareApi

• **get middlewareApi**\(\): _ApolloClient‹NormalizedCacheObject›_

_Defined in_ [_src/base/Context.ts:936_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L936)

Retrieve the middleware client

**`throws`** if the middleware is not enabled

**Returns:** _ApolloClient‹NormalizedCacheObject›_

## Methods

### accountBalance

▸ **accountBalance**\(`account?`: string \| [Account](account.md)\): _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

_Defined in_ [_src/base/Context.ts:293_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L293)

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account?` | string \| [Account](account.md) |

**Returns:** _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

▸ **accountBalance**\(`account`: string \| [Account](account.md) \| undefined, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/base/Context.ts:294_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L294)

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string \| [Account](account.md) \| undefined |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### disconnect

▸ **disconnect**\(\): _Promise‹void›_

_Defined in_ [_src/base/Context.ts:1006_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L1006)

Disconnect the Polkadot API, middleware, and render this instance unusable

**`note`** after disconnecting, trying to access any property in this objecct will result in an error

**Returns:** _Promise‹void›_

### getAccounts

▸ **getAccounts**\(\): _Array‹_[_AccountData_](../interfaces/accountdata.md)_›_

_Defined in_ [_src/base/Context.ts:265_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L265)

Retrieve a list of addresses associated with the account

**Returns:** _Array‹_[_AccountData_](../interfaces/accountdata.md)_›_

### getCurrentAccount

▸ **getCurrentAccount**\(\): [_CurrentAccount_](currentaccount.md)

_Defined in_ [_src/base/Context.ts:355_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L355)

Retrieve current Account

**`throws`** if there is no current account associated to the SDK instance

**Returns:** [_CurrentAccount_](currentaccount.md)

### getCurrentIdentity

▸ **getCurrentIdentity**\(\): _Promise‹_[_CurrentIdentity_](currentidentity.md)_›_

_Defined in_ [_src/base/Context.ts:375_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L375)

Retrieve current Identity

**`throws`** if there is no Identity associated to the current Account \(or there is no current Account associated to the SDK instance\)

**Returns:** _Promise‹_[_CurrentIdentity_](currentidentity.md)_›_

### getCurrentPair

▸ **getCurrentPair**\(\): [_KeyringPair_](../interfaces/keyringpair.md)

_Defined in_ [_src/base/Context.ts:395_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L395)

Retrieve current Keyring Pair

**`throws`** if there is no Account associated to the SDK instance

**Returns:** [_KeyringPair_](../interfaces/keyringpair.md)

### getInvalidDids

▸ **getInvalidDids**\(`identities`: \(string \| [Identity](identity.md)‹›\)\[\]\): _Promise‹string\[\]›_

_Defined in_ [_src/base/Context.ts:423_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L423)

Check whether Identities exist

**Parameters:**

| Name | Type |
| :--- | :--- |
| `identities` | \(string \| [Identity](identity.md)‹›\)\[\] |

**Returns:** _Promise‹string\[\]›_

### getLatestBlock

▸ **getLatestBlock**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/base/Context.ts:994_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L994)

Retrieve the latest block number

**Returns:** _Promise‹BigNumber›_

### getSecondaryKeys

▸ **getSecondaryKeys**\(\): _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

_Defined in_ [_src/base/Context.ts:621_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L621)

Retrieve the list of secondary keys related to the Account

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecondaryKey_](../interfaces/secondarykey.md)_\[\]›_

▸ **getSecondaryKeys**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/base/Context.ts:622_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L622)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getSigner

▸ **getSigner**\(\): _AddressOrPair_

_Defined in_ [_src/base/Context.ts:410_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L410)

Retrieve the signer address \(or keyring pair\)

**Returns:** _AddressOrPair_

### getTransactionArguments

▸ **getTransactionArguments**\(`args`: object\): [_TransactionArgument_](../globals.md#transactionargument)_\[\]_

_Defined in_ [_src/base/Context.ts:473_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L473)

Retrieve the types of arguments that a certain transaction requires to be run

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | tag associated with the transaction that will be executed if the proposal passes |

**Returns:** [_TransactionArgument_](../globals.md#transactionargument)_\[\]_

### getTransactionFees

▸ **getTransactionFees**\(`tag`: TxTag\): _Promise‹BigNumber›_

_Defined in_ [_src/base/Context.ts:446_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L446)

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | transaction tag \(i.e. TxTags.asset.CreateAsset or "asset.createAsset"\) |

**Returns:** _Promise‹BigNumber›_

### isMiddlewareAvailable

▸ **isMiddlewareAvailable**\(\): _Promise‹boolean›_

_Defined in_ [_src/base/Context.ts:981_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L981)

Return whether the middleware is enabled and online

**Returns:** _Promise‹boolean›_

### isMiddlewareEnabled

▸ **isMiddlewareEnabled**\(\): _boolean_

_Defined in_ [_src/base/Context.ts:974_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L974)

Return whether the middleware was enabled at startup

**Returns:** _boolean_

### issuedClaims

▸ **issuedClaims**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ClaimData_](../interfaces/claimdata.md)_››_

_Defined in_ [_src/base/Context.ts:885_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L885)

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

_Defined in_ [_src/base/Context.ts:952_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L952)

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

_Defined in_ [_src/base/Context.ts:275_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L275)

Set a pair as the current account keyring pair

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** _Promise‹void›_

### `Static` create

▸ **create**\(`params`: object\): _Promise‹_[_Context_](context.md)_›_

_Defined in_ [_src/base/Context.ts:166_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/base/Context.ts#L166)

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


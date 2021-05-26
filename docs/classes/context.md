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

• **currentPair**? : *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:90](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L90)*

___

###  isArchiveNode

• **isArchiveNode**: *boolean* = false

*Defined in [src/base/Context.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L95)*

Whether the current node is an archive node (contains a full history from genesis onward) or not

___

###  polymeshApi

• **polymeshApi**: *ApiPromise*

*Defined in [src/base/Context.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L88)*

___

###  ss58Format

• **ss58Format**: *number* = DEFAULT_SS58_FORMAT

*Defined in [src/base/Context.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L97)*

## Accessors

###  middlewareApi

• **get middlewareApi**(): *ApolloClient‹NormalizedCacheObject›*

*Defined in [src/base/Context.ts:826](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L826)*

Retrieve the middleware client

**`throws`** if the middleware is not enabled

**Returns:** *ApolloClient‹NormalizedCacheObject›*

## Methods

###  accountBalance

▸ **accountBalance**(`account?`: string | [Account](account.md)): *Promise‹[AccountBalance](../globals.md#accountbalance)›*

*Defined in [src/base/Context.ts:272](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L272)*

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account?` | string &#124; [Account](account.md) |

**Returns:** *Promise‹[AccountBalance](../globals.md#accountbalance)›*

▸ **accountBalance**(`account`: string | [Account](account.md) | undefined, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:273](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L273)*

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) &#124; undefined |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  disconnect

▸ **disconnect**(): *Promise‹void›*

*Defined in [src/base/Context.ts:896](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L896)*

Disconnect the Polkadot API, middleware, and render this instance unusable

**`note`** after disconnecting, trying to access any property in this objecct will result
  in an error

**Returns:** *Promise‹void›*

___

###  getAccounts

▸ **getAccounts**(): *Array‹[AccountData](../interfaces/accountdata.md)›*

*Defined in [src/base/Context.ts:244](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L244)*

Retrieve a list of addresses associated with the account

**Returns:** *Array‹[AccountData](../interfaces/accountdata.md)›*

___

###  getCurrentAccount

▸ **getCurrentAccount**(): *[CurrentAccount](currentaccount.md)*

*Defined in [src/base/Context.ts:334](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L334)*

Retrieve current Account

**`throws`** if there is no current account associated to the SDK instance

**Returns:** *[CurrentAccount](currentaccount.md)*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md)›*

*Defined in [src/base/Context.ts:354](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L354)*

Retrieve current Identity

**`throws`** if there is no Identity associated to the current Account (or there is no current Account associated to the SDK instance)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md)›*

___

###  getCurrentPair

▸ **getCurrentPair**(): *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:374](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L374)*

Retrieve current Keyring Pair

**`throws`** if there is no Account associated to the SDK instance

**Returns:** *[KeyringPair](../interfaces/keyringpair.md)*

___

###  getInvalidDids

▸ **getInvalidDids**(`identities`: (string | [Identity](identity.md)‹›)[]): *Promise‹string[]›*

*Defined in [src/base/Context.ts:402](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L402)*

Check whether Identities exist

**Parameters:**

Name | Type |
------ | ------ |
`identities` | (string &#124; [Identity](identity.md)‹›)[] |

**Returns:** *Promise‹string[]›*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/base/Context.ts:884](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L884)*

Retrieve the latest block number

**Returns:** *Promise‹BigNumber›*

___

###  getSecondaryKeys

▸ **getSecondaryKeys**(): *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

*Defined in [src/base/Context.ts:600](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L600)*

Retrieve the list of secondary keys related to the Account

**`note`** can be subscribed to

**Returns:** *Promise‹[SecondaryKey](../interfaces/secondarykey.md)[]›*

▸ **getSecondaryKeys**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:601](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L601)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecondaryKey](../interfaces/secondarykey.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getSigner

▸ **getSigner**(): *AddressOrPair*

*Defined in [src/base/Context.ts:389](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L389)*

Retrieve the signer address (or keyring pair)

**Returns:** *AddressOrPair*

___

###  getTransactionArguments

▸ **getTransactionArguments**(`args`: object): *[TransactionArgument](../globals.md#transactionargument)[]*

*Defined in [src/base/Context.ts:452](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L452)*

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

*Defined in [src/base/Context.ts:425](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L425)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  isMiddlewareAvailable

▸ **isMiddlewareAvailable**(): *Promise‹boolean›*

*Defined in [src/base/Context.ts:871](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L871)*

Return whether the middleware is enabled and online

**Returns:** *Promise‹boolean›*

___

###  isMiddlewareEnabled

▸ **isMiddlewareEnabled**(): *boolean*

*Defined in [src/base/Context.ts:864](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L864)*

Return whether the middleware was enabled at startup

**Returns:** *boolean*

___

###  issuedClaims

▸ **issuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/base/Context.ts:775](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L775)*

Retrieve a list of claims. Can be filtered using parameters

**`note`** uses the middleware (optional)

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [Exclude](../enums/targettreatment.md#exclude)‹[ClaimType](../enums/claimtype.md), [InvestorUniquenessV2](../enums/claimtype.md#investoruniquenessv2)›[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | identities (or Identity IDs) for which to fetch claims (targets). Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  queryMiddleware

▸ **queryMiddleware**‹**Result**›(`query`: GraphqlQuery‹unknown›): *Promise‹ApolloQueryResult‹Result››*

*Defined in [src/base/Context.ts:842](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L842)*

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

*Defined in [src/base/Context.ts:254](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L254)*

Set a pair as the current account keyring pair

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹void›*

___

### `Static` create

▸ **create**(`params`: object): *Promise‹[Context](context.md)›*

*Defined in [src/base/Context.ts:145](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/base/Context.ts#L145)*

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

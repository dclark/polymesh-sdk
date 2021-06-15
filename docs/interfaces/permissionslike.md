# PermissionsLike

Permissions to grant to a Signer over an Identity

**`note`** TxGroups in the `transactionGroups` array will be transformed into their corresponding `TxTag`s and appended to the `transactions` array. If `transactions` is null, then the value of `transactionGroups` is redundant

## Hierarchy

* **PermissionsLike**

## Index

### Properties

* [portfolios](permissionslike.md#optional-portfolios)
* [tokens](permissionslike.md#optional-tokens)
* [transactionGroups](permissionslike.md#optional-transactiongroups)
* [transactions](permissionslike.md#optional-transactions)

## Properties

### `Optional` portfolios

• **portfolios**? : [_PortfolioLike_](../globals.md#portfoliolike)_\[\] \| null_

_Defined in_ [_src/types/index.ts:859_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L859)

array of Portfolios for which to grant permissions. A null value represents full permissions

### `Optional` tokens

• **tokens**? : _\(string \|_ [_SecurityToken_](../classes/securitytoken.md)_‹›\)\[\] \| null_

_Defined in_ [_src/types/index.ts:847_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L847)

array of Security Tokens on which to grant permissions. A null value represents full permissions

### `Optional` transactionGroups

• **transactionGroups**? : [_TxGroup_](../enums/txgroup.md)_\[\]_

_Defined in_ [_src/types/index.ts:855_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L855)

array of transaction groups that the Secondary Key has permission to execute.

### `Optional` transactions

• **transactions**? : _TxTag\[\] \| null_

_Defined in_ [_src/types/index.ts:851_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L851)

array of transaction tags that the Secondary Key has permission to execute. A null value represents full permissions


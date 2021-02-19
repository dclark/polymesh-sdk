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

_Defined in_ [_src/types/index.ts:702_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L702)

### `Optional` tokens

• **tokens**? : _\(string \|_ [_SecurityToken_](../classes/securitytoken.md)_‹›\)\[\] \| null_

_Defined in_ [_src/types/index.ts:699_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L699)

### `Optional` transactionGroups

• **transactionGroups**? : [_TxGroup_](../enums/txgroup.md)_\[\]_

_Defined in_ [_src/types/index.ts:701_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L701)

### `Optional` transactions

• **transactions**? : _TxTag\[\] \| null_

_Defined in_ [_src/types/index.ts:700_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L700)


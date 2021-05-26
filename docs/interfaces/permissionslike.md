# Interface: PermissionsLike

Permissions to grant to a Signer over an Identity

**`note`** TxGroups in the `transactionGroups` array will be transformed into their corresponding `TxTag`s
  and appended to the `transactions` array. If `transactions` is null, then the value of `transactionGroups` is redundant

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

• **portfolios**? : *[PortfolioLike](../globals.md#portfoliolike)[] | null*

*Defined in [src/types/index.ts:837](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L837)*

___

### `Optional` tokens

• **tokens**? : *(string | [SecurityToken](../classes/securitytoken.md)‹›)[] | null*

*Defined in [src/types/index.ts:834](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L834)*

___

### `Optional` transactionGroups

• **transactionGroups**? : *[TxGroup](../enums/txgroup.md)[]*

*Defined in [src/types/index.ts:836](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L836)*

___

### `Optional` transactions

• **transactions**? : *TxTag[] | null*

*Defined in [src/types/index.ts:835](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L835)*

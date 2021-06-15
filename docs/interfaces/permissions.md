# Interface: Permissions

Permissions a Secondary Key has over the Identity. A null value means the key has
  all permissions of that type (i.e. if `tokens` is null, the key has permissions over all
  of the Identity's Security Tokens)

## Hierarchy

* **Permissions**

## Index

### Properties

* [portfolios](permissions.md#portfolios)
* [tokens](permissions.md#tokens)
* [transactionGroups](permissions.md#transactiongroups)
* [transactions](permissions.md#transactions)

## Properties

###  portfolios

• **portfolios**: *([DefaultPortfolio](../classes/defaultportfolio.md)‹› | [NumberedPortfolio](../classes/numberedportfolio.md)‹›)[] | null*

*Defined in [src/types/index.ts:727](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L727)*

___

###  tokens

• **tokens**: *[SecurityToken](../classes/securitytoken.md)[] | null*

*Defined in [src/types/index.ts:715](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L715)*

list of Security Tokens over which this key has permissions

___

###  transactionGroups

• **transactionGroups**: *[TxGroup](../enums/txgroup.md)[]*

*Defined in [src/types/index.ts:725](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L725)*

list of Transaction Groups this key can execute. Having permissions over a TxGroup
  means having permissions over every TxTag in said group. Transaction permissions are the result of
  combining these with the `transactions` array. If `transactions` is null, then this value is redundant

___

###  transactions

• **transactions**: *TxTag[] | null*

*Defined in [src/types/index.ts:719](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L719)*

list of Transactions this key can execute

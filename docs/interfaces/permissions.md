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
* [transactions](permissions.md#transactions)

## Properties

###  portfolios

• **portfolios**: *([DefaultPortfolio](../classes/defaultportfolio.md)‹› | [NumberedPortfolio](../classes/numberedportfolio.md)‹›)[] | null*

*Defined in [src/types/index.ts:511](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L511)*

___

###  tokens

• **tokens**: *[SecurityToken](../classes/securitytoken.md)[] | null*

*Defined in [src/types/index.ts:507](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L507)*

___

###  transactions

• **transactions**: *TxTag[] | null*

*Defined in [src/types/index.ts:509](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L509)*

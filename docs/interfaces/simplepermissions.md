# Interface: SimplePermissions

This represents positive permissions (i.e. only "includes"). It is used
  for specifying procedure requirements and querying if an account has certain
  permissions

## Hierarchy

* **SimplePermissions**

## Index

### Properties

* [portfolios](simplepermissions.md#optional-portfolios)
* [tokens](simplepermissions.md#optional-tokens)
* [transactions](simplepermissions.md#optional-transactions)

## Properties

### `Optional` portfolios

• **portfolios**? : *([DefaultPortfolio](../classes/defaultportfolio.md)‹› | [NumberedPortfolio](../classes/numberedportfolio.md)‹›)[] | null*

*Defined in [src/types/index.ts:750](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L750)*

___

### `Optional` tokens

• **tokens**? : *[SecurityToken](../classes/securitytoken.md)[] | null*

*Defined in [src/types/index.ts:744](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L744)*

list of required Security Tokens permissions

___

### `Optional` transactions

• **transactions**? : *TxTag[] | null*

*Defined in [src/types/index.ts:748](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L748)*

list of required Transaction permissions

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

*Defined in [src/types/index.ts:772](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L772)*

___

### `Optional` tokens

• **tokens**? : *[SecurityToken](../classes/securitytoken.md)[] | null*

*Defined in [src/types/index.ts:766](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L766)*

list of required Security Tokens permissions

___

### `Optional` transactions

• **transactions**? : *TxTag[] | null*

*Defined in [src/types/index.ts:770](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L770)*

list of required Transaction permissions

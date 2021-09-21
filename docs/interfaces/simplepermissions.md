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

*Defined in [src/types/index.ts:832](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L832)*

___

### `Optional` tokens

• **tokens**? : *[SecurityToken](../classes/securitytoken.md)[] | null*

*Defined in [src/types/index.ts:826](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L826)*

list of required Security Tokens permissions

___

### `Optional` transactions

• **transactions**? : *TxTag[] | null*

*Defined in [src/types/index.ts:830](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L830)*

list of required Transaction permissions

# SimplePermissions

This represents positive permissions \(i.e. only "includes"\). It is used for specifying procedure requirements and querying if an account has certain permissions

## Hierarchy

* **SimplePermissions**

## Index

### Properties

* [portfolios](simplepermissions.md#optional-portfolios)
* [tokens](simplepermissions.md#optional-tokens)
* [transactions](simplepermissions.md#optional-transactions)

## Properties

### `Optional` portfolios

• **portfolios**? : _\(_[_DefaultPortfolio_](../classes/defaultportfolio.md)_‹› \|_ [_NumberedPortfolio_](../classes/numberedportfolio.md)_‹›\)\[\] \| null_

_Defined in_ [_src/types/index.ts:750_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L750)

### `Optional` tokens

• **tokens**? : [_SecurityToken_](../classes/securitytoken.md)_\[\] \| null_

_Defined in_ [_src/types/index.ts:744_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L744)

list of required Security Tokens permissions

### `Optional` transactions

• **transactions**? : _TxTag\[\] \| null_

_Defined in_ [_src/types/index.ts:748_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L748)

list of required Transaction permissions


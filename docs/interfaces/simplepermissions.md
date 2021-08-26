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

_Defined in_ [_src/types/index.ts:781_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L781)

### `Optional` tokens

• **tokens**? : [_SecurityToken_](../classes/securitytoken.md)_\[\] \| null_

_Defined in_ [_src/types/index.ts:775_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L775)

list of required Security Tokens permissions

### `Optional` transactions

• **transactions**? : _TxTag\[\] \| null_

_Defined in_ [_src/types/index.ts:779_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L779)

list of required Transaction permissions


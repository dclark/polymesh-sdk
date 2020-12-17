# Permissions

Permissions a Secondary Key has over the Identity. A null value means the key has all permissions of that type \(i.e. if `tokens` is null, the key has permissions over all of the Identity's Security Tokens\)

## Hierarchy

* **Permissions**

## Index

### Properties

* [portfolios](permissions.md#portfolios)
* [tokens](permissions.md#tokens)
* [transactions](permissions.md#transactions)

## Properties

### portfolios

• **portfolios**: _\(_[_DefaultPortfolio_](../classes/defaultportfolio.md)_‹› \|_ [_NumberedPortfolio_](../classes/numberedportfolio.md)_‹›\)\[\] \| null_

_Defined in_ [_src/types/index.ts:511_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L511)

### tokens

• **tokens**: [_SecurityToken_](../classes/securitytoken.md)_\[\] \| null_

_Defined in_ [_src/types/index.ts:507_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L507)

### transactions

• **transactions**: _TxTag\[\] \| null_

_Defined in_ [_src/types/index.ts:509_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/types/index.ts#L509)


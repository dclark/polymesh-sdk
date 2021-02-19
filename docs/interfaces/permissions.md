# Permissions

Permissions a Secondary Key has over the Identity. A null value means the key has all permissions of that type \(i.e. if `tokens` is null, the key has permissions over all of the Identity's Security Tokens\)

## Hierarchy

* **Permissions**

## Index

### Properties

* [portfolios](permissions.md#portfolios)
* [tokens](permissions.md#tokens)
* [transactionGroups](permissions.md#transactiongroups)
* [transactions](permissions.md#transactions)

## Properties

### portfolios

• **portfolios**: _\(_[_DefaultPortfolio_](../classes/defaultportfolio.md)_‹› \|_ [_NumberedPortfolio_](../classes/numberedportfolio.md)_‹›\)\[\] \| null_

_Defined in_ [_src/types/index.ts:555_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L555)

### tokens

• **tokens**: [_SecurityToken_](../classes/securitytoken.md)_\[\] \| null_

_Defined in_ [_src/types/index.ts:543_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L543)

list of Security Tokens over which this key has permissions

### transactionGroups

• **transactionGroups**: [_TxGroup_](../enums/txgroup.md)_\[\]_

_Defined in_ [_src/types/index.ts:553_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L553)

list of Transaction Groups this key can execute. Having permissions over a TxGroup means having permissions over every TxTag in said group. Transaction permissions are the result of combining these with the `transactions` array. If `transactions` is null, then this value is redundant

### transactions

• **transactions**: _TxTag\[\] \| null_

_Defined in_ [_src/types/index.ts:547_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L547)

list of Transactions this key can execute


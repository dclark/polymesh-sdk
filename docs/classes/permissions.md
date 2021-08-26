# Permissions

Handles all Security Token Permissions related functionality Permissions a Secondary Key has over the Identity. A null value means the key has all permissions of that type \(i.e. if `tokens` is null, the key has permissions over all of the Identity's Security Tokens\)

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Permissions**

## Index

### Properties

* [context](permissions.md#protected-context)
* [parent](permissions.md#protected-parent)
* [portfolios](permissions.md#portfolios)
* [tokens](permissions.md#tokens)
* [transactionGroups](permissions.md#transactiongroups)
* [transactions](permissions.md#transactions)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L9)

### portfolios

• **portfolios**: [_SectionPermissions_](../interfaces/sectionpermissions.md)_‹_[_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)_› \| null_

_Defined in_ [_src/types/index.ts:763_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L763)

### tokens

• **tokens**: [_SectionPermissions_](../interfaces/sectionpermissions.md)_‹_[_SecurityToken_](securitytoken.md)_› \| null_

_Defined in_ [_src/types/index.ts:751_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L751)

Security Tokens over which this key has permissions

### transactionGroups

• **transactionGroups**: [_TxGroup_](../enums/txgroup.md)_\[\]_

_Defined in_ [_src/types/index.ts:761_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L761)

list of Transaction Groups this key can execute. Having permissions over a TxGroup means having permissions over every TxTag in said group. Partial group permissions are not covered by this value. For a full picture of transaction permissions, see the `transactions` property

### transactions

• **transactions**: [_TransactionPermissions_](../interfaces/transactionpermissions.md) _\| null_

_Defined in_ [_src/types/index.ts:755_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L755)

Transactions this key can execute


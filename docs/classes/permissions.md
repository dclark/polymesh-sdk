# Class: Permissions

Handles all Security Token Permissions related functionality
Permissions a Secondary Key has over the Identity. A null value means the key has
  all permissions of that type (i.e. if `tokens` is null, the key has permissions over all
  of the Identity's Security Tokens)

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

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L9)*

___

###  portfolios

• **portfolios**: *[SectionPermissions](../interfaces/sectionpermissions.md)‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)› | null*

*Defined in [src/types/index.ts:763](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L763)*

___

###  tokens

• **tokens**: *[SectionPermissions](../interfaces/sectionpermissions.md)‹[SecurityToken](securitytoken.md)› | null*

*Defined in [src/types/index.ts:751](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L751)*

Security Tokens over which this key has permissions

___

###  transactionGroups

• **transactionGroups**: *[TxGroup](../enums/txgroup.md)[]*

*Defined in [src/types/index.ts:761](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L761)*

list of Transaction Groups this key can execute. Having permissions over a TxGroup
  means having permissions over every TxTag in said group. Partial group permissions are not
  covered by this value. For a full picture of transaction permissions, see the `transactions` property

___

###  transactions

• **transactions**: *[TransactionPermissions](../interfaces/transactionpermissions.md) | null*

*Defined in [src/types/index.ts:755](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L755)*

Transactions this key can execute

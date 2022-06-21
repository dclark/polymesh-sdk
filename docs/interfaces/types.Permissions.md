[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / Permissions

# Interface: Permissions

[types](../modules/types.md).Permissions

Permissions a Secondary Key has over the Identity. A null value means the key has
  all permissions of that type (i.e. if `assets` is null, the key has permissions over all
  of the Identity's Assets)

## Table of contents

### Properties

- [assets](types.Permissions.md#assets)
- [portfolios](types.Permissions.md#portfolios)
- [transactionGroups](types.Permissions.md#transactiongroups)
- [transactions](types.Permissions.md#transactions)

## Properties

### assets

• **assets**: ``null`` \| [`SectionPermissions`](types.SectionPermissions.md)<[`Asset`](../classes/api_entities_Asset.Asset.md)\>

Assets over which this key has permissions

#### Defined in

[types/index.ts:925](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L925)

___

### portfolios

• **portfolios**: ``null`` \| [`SectionPermissions`](types.SectionPermissions.md)<[`NumberedPortfolio`](../classes/api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](../classes/api_entities_DefaultPortfolio.DefaultPortfolio.md)\>

#### Defined in

[types/index.ts:939](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L939)

___

### transactionGroups

• **transactionGroups**: [`TxGroup`](../enums/types.TxGroup.md)[]

list of Transaction Groups this key can execute. Having permissions over a TxGroup
  means having permissions over every TxTag in said group. Partial group permissions are not
  covered by this value. For a full picture of transaction permissions, see the `transactions` property

NOTE: If transactions is null, ignore this value

#### Defined in

[types/index.ts:937](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L937)

___

### transactions

• **transactions**: ``null`` \| [`TransactionPermissions`](types.TransactionPermissions.md)

Transactions this key can execute

#### Defined in

[types/index.ts:929](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L929)

# Interface: TransactionsParams

[api/procedures/types](../wiki/api.procedures.types).TransactionsParams

## Hierarchy

- [`AssetBase`](../wiki/api.procedures.types.AssetBase)

  ↳ **`TransactionsParams`**

## Table of contents

### Properties

- [asset](../wiki/api.procedures.types.TransactionsParams#asset)
- [transactions](../wiki/api.procedures.types.TransactionsParams#transactions)

## Properties

### asset

• **asset**: `string` \| [`Asset`](../wiki/api.entities.Asset.Asset)

Asset over which the Identity will be granted permissions

#### Inherited from

[AssetBase](../wiki/api.procedures.types.AssetBase).[asset](../wiki/api.procedures.types.AssetBase#asset)

#### Defined in

[api/procedures/types.ts:742](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L742)

___

### transactions

• **transactions**: ``null`` \| [`TransactionPermissions`](../wiki/types.TransactionPermissions)

a null value means full permissions

#### Defined in

[api/procedures/types.ts:749](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L749)

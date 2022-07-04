# Interface: SectionPermissions<T\>

[types](../wiki/types).SectionPermissions

Signer/agent permissions for a specific type

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | type of Permissions (Asset, Transaction, Portfolio, etc) |

## Hierarchy

- **`SectionPermissions`**

  ↳ [`TransactionPermissions`](../wiki/types.TransactionPermissions)

## Table of contents

### Properties

- [type](../wiki/types.SectionPermissions#type)
- [values](../wiki/types.SectionPermissions#values)

## Properties

### type

• **type**: [`PermissionType`](../wiki/types.PermissionType)

Whether the permissions are inclusive or exclusive

#### Defined in

[types/index.ts:903](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L903)

___

### values

• **values**: `T`[]

Values to be included/excluded

#### Defined in

[types/index.ts:899](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L899)

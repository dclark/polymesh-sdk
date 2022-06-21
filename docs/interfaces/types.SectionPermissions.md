[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / SectionPermissions

# Interface: SectionPermissions<T\>

[types](../modules/types.md).SectionPermissions

Signer/agent permissions for a specific type

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | type of Permissions (Asset, Transaction, Portfolio, etc) |

## Hierarchy

- **`SectionPermissions`**

  ↳ [`TransactionPermissions`](types.TransactionPermissions.md)

## Table of contents

### Properties

- [type](types.SectionPermissions.md#type)
- [values](types.SectionPermissions.md#values)

## Properties

### type

• **type**: [`PermissionType`](../enums/types.PermissionType.md)

Whether the permissions are inclusive or exclusive

#### Defined in

[types/index.ts:900](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L900)

___

### values

• **values**: `T`[]

Values to be included/excluded

#### Defined in

[types/index.ts:896](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L896)

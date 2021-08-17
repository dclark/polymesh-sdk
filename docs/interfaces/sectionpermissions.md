# Interface: SectionPermissions ‹**T**›

Signer/agent permissions for a specific type

## Type parameters

▪ **T**

type of Permissions (Security Token, Transaction, Portfolio, etc)

## Hierarchy

* **SectionPermissions**

  ↳ [TransactionPermissions](transactionpermissions.md)

## Index

### Properties

* [type](sectionpermissions.md#type)
* [values](sectionpermissions.md#values)

## Properties

###  type

• **type**: *[PermissionType](../enums/permissiontype.md)*

*Defined in [src/types/index.ts:688](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L688)*

Whether the permissions are inclusive or exclusive

___

###  values

• **values**: *T[]*

*Defined in [src/types/index.ts:684](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L684)*

Values to be included/excluded

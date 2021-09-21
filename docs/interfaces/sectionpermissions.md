# SectionPermissions

Signer/agent permissions for a specific type

## Type parameters

▪ **T**

type of Permissions \(Security Token, Transaction, Portfolio, etc\)

## Hierarchy

* **SectionPermissions**

  ↳ [TransactionPermissions](transactionpermissions.md)

## Index

### Properties

* [type](sectionpermissions.md#type)
* [values](sectionpermissions.md#values)

## Properties

### type

• **type**: [_PermissionType_](../enums/permissiontype.md)

_Defined in_ [_src/types/index.ts:770_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L770)

Whether the permissions are inclusive or exclusive

### values

• **values**: _T\[\]_

_Defined in_ [_src/types/index.ts:766_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L766)

Values to be included/excluded


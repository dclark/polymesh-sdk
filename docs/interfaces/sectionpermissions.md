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

*Defined in [src/types/index.ts:726](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L726)*

Whether the permissions are inclusive or exclusive

___

###  values

• **values**: *T[]*

*Defined in [src/types/index.ts:722](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L722)*

Values to be included/excluded

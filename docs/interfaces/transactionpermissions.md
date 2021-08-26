# TransactionPermissions

Permissions related to Transactions. Can include/exclude individual transactions or entire modules

## Hierarchy

* [SectionPermissions](sectionpermissions.md)‹TxTag \| ModuleName›

  ↳ **TransactionPermissions**

## Index

### Properties

* [exceptions](transactionpermissions.md#optional-exceptions)
* [type](transactionpermissions.md#type)
* [values](transactionpermissions.md#values)

## Properties

### `Optional` exceptions

• **exceptions**? : _TxTag\[\]_

_Defined in_ [_src/types/index.ts:739_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L739)

Transactions to be exempted from inclusion/exclusion. This allows more granularity when setting permissions. For example, let's say we want to include only the `asset` and `staking` modules, but exclude the `asset.registerTicker` transaction. We could add both modules to `values`, and add `TxTags.asset.registerTicker` to `exceptions`

### type

• **type**: [_PermissionType_](../enums/permissiontype.md)

_Inherited from_ [_SectionPermissions_](sectionpermissions.md)_._[_type_](sectionpermissions.md#type)

_Defined in_ [_src/types/index.ts:726_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L726)

Whether the permissions are inclusive or exclusive

### values

• **values**: _\(TxTag \| ModuleName\)\[\]_

_Inherited from_ [_SectionPermissions_](sectionpermissions.md)_._[_values_](sectionpermissions.md#values)

_Defined in_ [_src/types/index.ts:722_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L722)

Values to be included/excluded


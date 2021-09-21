# KnownPermissionGroup

Represents a pre-defined group of permissions for a Security Token

## Hierarchy

↳ [PermissionGroup](permissiongroup.md)

↳ **KnownPermissionGroup**

## Index

### Properties

* [context](knownpermissiongroup.md#protected-context)
* [ticker](knownpermissiongroup.md#ticker)
* [type](knownpermissiongroup.md#type)
* [uuid](knownpermissiongroup.md#uuid)

### Methods

* [exists](knownpermissiongroup.md#exists)
* [getPermissions](knownpermissiongroup.md#getpermissions)
* [isEqual](knownpermissiongroup.md#isequal)
* [toJson](knownpermissiongroup.md#tojson)
* [generateUuid](knownpermissiongroup.md#static-generateuuid)
* [unserialize](knownpermissiongroup.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L48)

### ticker

• **ticker**: _string_

_Inherited from_ [_PermissionGroup_](permissiongroup.md)_._[_ticker_](permissiongroup.md#ticker)

_Defined in_ [_src/api/entities/PermissionGroup.ts:27_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/PermissionGroup.ts#L27)

### type

• **type**: [_PermissionGroupType_](../enums/permissiongrouptype.md)

_Defined in_ [_src/api/entities/KnownPermissionGroup.ts:30_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/KnownPermissionGroup.ts#L30)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Overrides_ [_Entity_](entity.md)_._[_exists_](entity.md#abstract-exists)

_Defined in_ [_src/api/entities/KnownPermissionGroup.ts:90_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/KnownPermissionGroup.ts#L90)

Determine whether this Known Permission Group exists on chain

**Returns:** _Promise‹boolean›_

### getPermissions

▸ **getPermissions**\(\): _Promise‹_[_GroupPermissions_](../globals.md#grouppermissions)_›_

_Overrides_ [_PermissionGroup_](permissiongroup.md)_._[_getPermissions_](permissiongroup.md#abstract-getpermissions)

_Defined in_ [_src/api/entities/KnownPermissionGroup.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/KnownPermissionGroup.ts#L46)

Retrieve the Permissions associated with this Permission Group

**Returns:** _Promise‹_[_GroupPermissions_](../globals.md#grouppermissions)_›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### toJson

▸ **toJson**\(\): _HumanReadable_

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/KnownPermissionGroup.ts:97_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/KnownPermissionGroup.ts#L97)

Return the KnownPermissionGroup's static data

**Returns:** _HumanReadable_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


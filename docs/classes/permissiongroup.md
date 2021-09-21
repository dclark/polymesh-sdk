# PermissionGroup

Represents a group of permissions for a Security Token

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, unknown›

  ↳ **PermissionGroup**

  ↳ [KnownPermissionGroup](knownpermissiongroup.md)

  ↳ [CustomPermissionGroup](custompermissiongroup.md)

## Index

### Properties

* [context](permissiongroup.md#protected-context)
* [ticker](permissiongroup.md#ticker)
* [uuid](permissiongroup.md#uuid)

### Methods

* [getPermissions](permissiongroup.md#abstract-getpermissions)
* [isEqual](permissiongroup.md#isequal)
* [toJson](permissiongroup.md#abstract-tojson)
* [generateUuid](permissiongroup.md#static-generateuuid)
* [isUniqueIdentifiers](permissiongroup.md#static-isuniqueidentifiers)
* [unserialize](permissiongroup.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L48)

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/PermissionGroup.ts:27_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/PermissionGroup.ts#L27)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L46)

## Methods

### `Abstract` getPermissions

▸ **getPermissions**\(\): _Promise‹_[_GroupPermissions_](../globals.md#grouppermissions)_›_

_Defined in_ [_src/api/entities/PermissionGroup.ts:32_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/PermissionGroup.ts#L32)

Retrieve the Permissions associated with this Permission Group

**Returns:** _Promise‹_[_GroupPermissions_](../globals.md#grouppermissions)_›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### `Abstract` toJson

▸ **toJson**\(\): _unknown_

_Inherited from_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/Entity.ts:68_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L68)

Returns Entity data in a human readable \(JSON\) format

**Returns:** _unknown_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` isUniqueIdentifiers

▸ **isUniqueIdentifiers**\(`identifiers`: unknown\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isUniqueIdentifiers_](entity.md#static-isuniqueidentifiers)

_Defined in_ [_src/api/entities/Entity.ts:42_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L42)

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | unknown | object to type check |

**Returns:** _boolean_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


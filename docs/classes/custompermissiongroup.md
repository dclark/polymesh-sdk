# CustomPermissionGroup

Represents a group of custom permissions for a Security Token

## Hierarchy

↳ [PermissionGroup](permissiongroup.md)

↳ **CustomPermissionGroup**

## Index

### Properties

* [context](custompermissiongroup.md#protected-context)
* [id](custompermissiongroup.md#id)
* [ticker](custompermissiongroup.md#ticker)
* [uuid](custompermissiongroup.md#uuid)

### Methods

* [getPermissions](custompermissiongroup.md#getpermissions)
* [isEqual](custompermissiongroup.md#isequal)
* [setPermissions](custompermissiongroup.md#setpermissions)
* [toJson](custompermissiongroup.md#tojson)
* [generateUuid](custompermissiongroup.md#static-generateuuid)
* [unserialize](custompermissiongroup.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L48)

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/CustomPermissionGroup.ts:44_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/CustomPermissionGroup.ts#L44)

### ticker

• **ticker**: _string_

_Inherited from_ [_PermissionGroup_](permissiongroup.md)_._[_ticker_](permissiongroup.md#ticker)

_Defined in_ [_src/api/entities/PermissionGroup.ts:27_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/PermissionGroup.ts#L27)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L46)

## Methods

### getPermissions

▸ **getPermissions**\(\): _Promise‹_[_GroupPermissions_](../globals.md#grouppermissions)_›_

_Overrides_ [_PermissionGroup_](permissiongroup.md)_._[_getPermissions_](permissiongroup.md#abstract-getpermissions)

_Defined in_ [_src/api/entities/CustomPermissionGroup.ts:86_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/CustomPermissionGroup.ts#L86)

Retrieve the list of permissions and transaction groups associated with this Permission Group

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

### setPermissions

▸ **setPermissions**\(`args`: [SetGroupPermissionsParams](../interfaces/setgrouppermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CustomPermissionGroup.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/CustomPermissionGroup.ts#L79)

Modify the group's permissions

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setPermissions.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetGroupPermissionsParams](../interfaces/setgrouppermissionsparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### toJson

▸ **toJson**\(\): _HumanReadable_

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/CustomPermissionGroup.ts:65_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/CustomPermissionGroup.ts#L65)

Return the Group's ID

**Returns:** _HumanReadable_

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


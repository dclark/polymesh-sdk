[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/CustomPermissionGroup](../modules/api_entities_CustomPermissionGroup.md) / CustomPermissionGroup

# Class: CustomPermissionGroup

[api/entities/CustomPermissionGroup](../modules/api_entities_CustomPermissionGroup.md).CustomPermissionGroup

Represents a group of custom permissions for an Asset

## Hierarchy

- [`PermissionGroup`](api_entities_PermissionGroup.PermissionGroup.md)

  ↳ **`CustomPermissionGroup`**

## Table of contents

### Properties

- [asset](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#asset)
- [id](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#id)
- [uuid](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#uuid)

### Methods

- [exists](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#exists)
- [getPermissions](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#getpermissions)
- [isEqual](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#isequal)
- [setPermissions](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#setpermissions)
- [toHuman](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#tohuman)
- [generateUuid](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#generateuuid)
- [unserialize](api_entities_CustomPermissionGroup.CustomPermissionGroup.md#unserialize)

## Properties

### asset

• **asset**: [`Asset`](api_entities_Asset.Asset.md)

Asset for which this group specifies permissions

#### Inherited from

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[asset](api_entities_PermissionGroup.PermissionGroup.md#asset)

#### Defined in

[api/entities/PermissionGroup.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/PermissionGroup.ts#L19)

___

### id

• **id**: `BigNumber`

#### Defined in

[api/entities/CustomPermissionGroup.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CustomPermissionGroup.ts#L45)

___

### uuid

• **uuid**: `string`

#### Inherited from

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[uuid](api_entities_PermissionGroup.PermissionGroup.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Custom Permission Group exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[exists](api_entities_PermissionGroup.PermissionGroup.md#exists)

#### Defined in

[api/entities/CustomPermissionGroup.ts:106](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CustomPermissionGroup.ts#L106)

___

### getPermissions

▸ **getPermissions**(): `Promise`<[`GroupPermissions`](../modules/types.md#grouppermissions)\>

Retrieve the list of permissions and transaction groups associated with this Permission Group

#### Returns

`Promise`<[`GroupPermissions`](../modules/types.md#grouppermissions)\>

#### Overrides

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[getPermissions](api_entities_PermissionGroup.PermissionGroup.md#getpermissions)

#### Defined in

[api/entities/CustomPermissionGroup.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CustomPermissionGroup.ts#L76)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](api_entities_Entity.Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[isEqual](api_entities_PermissionGroup.PermissionGroup.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L61)

___

### setPermissions

▸ **setPermissions**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify the group's permissions

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [setPermissions.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetGroupPermissionsParams`](../interfaces/api_procedures_setGroupPermissions.SetGroupPermissionsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/CustomPermissionGroup.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CustomPermissionGroup.ts#L69)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../interfaces/api_entities_CustomPermissionGroup.HumanReadable.md)

Return the Group's static data

#### Returns

[`HumanReadable`](../interfaces/api_entities_CustomPermissionGroup.HumanReadable.md)

#### Overrides

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[toHuman](api_entities_PermissionGroup.PermissionGroup.md#tohuman)

#### Defined in

[api/entities/CustomPermissionGroup.ts:124](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CustomPermissionGroup.ts#L124)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[generateUuid](api_entities_PermissionGroup.PermissionGroup.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[unserialize](api_entities_PermissionGroup.PermissionGroup.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

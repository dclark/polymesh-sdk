[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/KnownPermissionGroup](../modules/api_entities_KnownPermissionGroup.md) / KnownPermissionGroup

# Class: KnownPermissionGroup

[api/entities/KnownPermissionGroup](../modules/api_entities_KnownPermissionGroup.md).KnownPermissionGroup

Represents a pre-defined group of permissions for an Asset

## Hierarchy

- [`PermissionGroup`](api_entities_PermissionGroup.PermissionGroup.md)

  ↳ **`KnownPermissionGroup`**

## Table of contents

### Properties

- [asset](api_entities_KnownPermissionGroup.KnownPermissionGroup.md#asset)
- [type](api_entities_KnownPermissionGroup.KnownPermissionGroup.md#type)
- [uuid](api_entities_KnownPermissionGroup.KnownPermissionGroup.md#uuid)

### Methods

- [exists](api_entities_KnownPermissionGroup.KnownPermissionGroup.md#exists)
- [getPermissions](api_entities_KnownPermissionGroup.KnownPermissionGroup.md#getpermissions)
- [isEqual](api_entities_KnownPermissionGroup.KnownPermissionGroup.md#isequal)
- [toHuman](api_entities_KnownPermissionGroup.KnownPermissionGroup.md#tohuman)
- [generateUuid](api_entities_KnownPermissionGroup.KnownPermissionGroup.md#generateuuid)
- [unserialize](api_entities_KnownPermissionGroup.KnownPermissionGroup.md#unserialize)

## Properties

### asset

• **asset**: [`Asset`](api_entities_Asset.Asset.md)

Asset for which this group specifies permissions

#### Inherited from

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[asset](api_entities_PermissionGroup.PermissionGroup.md#asset)

#### Defined in

[api/entities/PermissionGroup.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/PermissionGroup.ts#L19)

___

### type

• **type**: [`PermissionGroupType`](../enums/types.PermissionGroupType.md)

#### Defined in

[api/entities/KnownPermissionGroup.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/KnownPermissionGroup.ts#L30)

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

Determine whether this Known Permission Group exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[exists](api_entities_PermissionGroup.PermissionGroup.md#exists)

#### Defined in

[api/entities/KnownPermissionGroup.ts:90](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/KnownPermissionGroup.ts#L90)

___

### getPermissions

▸ **getPermissions**(): `Promise`<[`GroupPermissions`](../modules/types.md#grouppermissions)\>

Retrieve the Permissions associated with this Permission Group

#### Returns

`Promise`<[`GroupPermissions`](../modules/types.md#grouppermissions)\>

#### Overrides

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[getPermissions](api_entities_PermissionGroup.PermissionGroup.md#getpermissions)

#### Defined in

[api/entities/KnownPermissionGroup.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/KnownPermissionGroup.ts#L46)

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

### toHuman

▸ **toHuman**(): [`HumanReadable`](../interfaces/api_entities_KnownPermissionGroup.HumanReadable.md)

Return the KnownPermissionGroup's static data

#### Returns

[`HumanReadable`](../interfaces/api_entities_KnownPermissionGroup.HumanReadable.md)

#### Overrides

[PermissionGroup](api_entities_PermissionGroup.PermissionGroup.md).[toHuman](api_entities_PermissionGroup.PermissionGroup.md#tohuman)

#### Defined in

[api/entities/KnownPermissionGroup.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/KnownPermissionGroup.ts#L97)

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

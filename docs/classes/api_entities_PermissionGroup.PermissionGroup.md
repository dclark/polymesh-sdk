[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/PermissionGroup](../modules/api_entities_PermissionGroup.md) / PermissionGroup

# Class: PermissionGroup

[api/entities/PermissionGroup](../modules/api_entities_PermissionGroup.md).PermissionGroup

Represents a group of permissions for an Asset

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_PermissionGroup.UniqueIdentifiers.md), `unknown`\>

  ↳ **`PermissionGroup`**

  ↳↳ [`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md)

  ↳↳ [`KnownPermissionGroup`](api_entities_KnownPermissionGroup.KnownPermissionGroup.md)

## Table of contents

### Properties

- [asset](api_entities_PermissionGroup.PermissionGroup.md#asset)
- [uuid](api_entities_PermissionGroup.PermissionGroup.md#uuid)

### Methods

- [exists](api_entities_PermissionGroup.PermissionGroup.md#exists)
- [getPermissions](api_entities_PermissionGroup.PermissionGroup.md#getpermissions)
- [isEqual](api_entities_PermissionGroup.PermissionGroup.md#isequal)
- [toHuman](api_entities_PermissionGroup.PermissionGroup.md#tohuman)
- [generateUuid](api_entities_PermissionGroup.PermissionGroup.md#generateuuid)
- [isUniqueIdentifiers](api_entities_PermissionGroup.PermissionGroup.md#isuniqueidentifiers)
- [unserialize](api_entities_PermissionGroup.PermissionGroup.md#unserialize)

## Properties

### asset

• **asset**: [`Asset`](api_entities_Asset.Asset.md)

Asset for which this group specifies permissions

#### Defined in

[api/entities/PermissionGroup.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/PermissionGroup.ts#L19)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ `Abstract` **exists**(): `Promise`<`boolean`\>

Determine whether this Entity exists on chain

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/Entity.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L68)

___

### getPermissions

▸ `Abstract` **getPermissions**(): `Promise`<[`GroupPermissions`](../modules/types.md#grouppermissions)\>

Retrieve the Permissions associated with this Permission Group

#### Returns

`Promise`<[`GroupPermissions`](../modules/types.md#grouppermissions)\>

#### Defined in

[api/entities/PermissionGroup.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/PermissionGroup.ts#L35)

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

[Entity](api_entities_Entity.Entity.md).[isEqual](api_entities_Entity.Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L61)

___

### toHuman

▸ `Abstract` **toHuman**(): `unknown`

Returns Entity data in a human readable (JSON) format

#### Returns

`unknown`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/Entity.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L73)

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

[Entity](api_entities_Entity.Entity.md).[generateUuid](api_entities_Entity.Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L14)

___

### isUniqueIdentifiers

▸ `Static` **isUniqueIdentifiers**(`identifiers`): `boolean`

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifiers` | `unknown` | object to type check |

#### Returns

`boolean`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[isUniqueIdentifiers](api_entities_Entity.Entity.md#isuniqueidentifiers)

#### Defined in

[api/entities/Entity.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L42)

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

[Entity](api_entities_Entity.Entity.md).[unserialize](api_entities_Entity.Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

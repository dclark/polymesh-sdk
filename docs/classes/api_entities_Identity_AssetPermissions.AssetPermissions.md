[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Identity/AssetPermissions](../modules/api_entities_Identity_AssetPermissions.md) / AssetPermissions

# Class: AssetPermissions

[api/entities/Identity/AssetPermissions](../modules/api_entities_Identity_AssetPermissions.md).AssetPermissions

Handles all Asset Permissions (External Agents) related functionality on the Identity side

## Hierarchy

- `Namespace`<[`Identity`](api_entities_Identity.Identity.md)\>

  ↳ **`AssetPermissions`**

## Table of contents

### Methods

- [checkPermissions](api_entities_Identity_AssetPermissions.AssetPermissions.md#checkpermissions)
- [enabledAt](api_entities_Identity_AssetPermissions.AssetPermissions.md#enabledat)
- [get](api_entities_Identity_AssetPermissions.AssetPermissions.md#get)
- [getGroup](api_entities_Identity_AssetPermissions.AssetPermissions.md#getgroup)
- [getOperationHistory](api_entities_Identity_AssetPermissions.AssetPermissions.md#getoperationhistory)
- [hasPermissions](api_entities_Identity_AssetPermissions.AssetPermissions.md#haspermissions)
- [setGroup](api_entities_Identity_AssetPermissions.AssetPermissions.md#setgroup)
- [waive](api_entities_Identity_AssetPermissions.AssetPermissions.md#waive)

## Methods

### checkPermissions

▸ **checkPermissions**(`args`): `Promise`<[`CheckPermissionsResult`](../interfaces/types.CheckPermissionsResult.md)<[`Identity`](../enums/types.SignerType.md#identity)\>\>

Check whether this Identity has specific transaction Permissions over an Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`Asset`](api_entities_Asset.Asset.md) |
| `args.transactions` | ``null`` \| `TxTag`[] |

#### Returns

`Promise`<[`CheckPermissionsResult`](../interfaces/types.CheckPermissionsResult.md)<[`Identity`](../enums/types.SignerType.md#identity)\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:133](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/AssetPermissions.ts#L133)

___

### enabledAt

▸ **enabledAt**(`__namedParameters`): `Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
  an Agent with permissions over a specific Asset

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.asset` | `string` \| [`Asset`](api_entities_Asset.Asset.md) |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:337](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/AssetPermissions.ts#L337)

___

### get

▸ **get**(): `Promise`<[`AssetWithGroup`](../interfaces/types.AssetWithGroup.md)[]\>

Retrieve all the Assets over which this Identity has permissions, with the corresponding Permission Group

#### Returns

`Promise`<[`AssetWithGroup`](../interfaces/types.AssetWithGroup.md)[]\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/AssetPermissions.ts#L104)

___

### getGroup

▸ **getGroup**(`__namedParameters`): `Promise`<[`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md) \| [`KnownPermissionGroup`](api_entities_KnownPermissionGroup.KnownPermissionGroup.md)\>

Retrieve this Identity's Permission Group for a specific Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.asset` | `string` \| [`Asset`](api_entities_Asset.Asset.md) |

#### Returns

`Promise`<[`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md) \| [`KnownPermissionGroup`](api_entities_KnownPermissionGroup.KnownPermissionGroup.md)\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:297](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/AssetPermissions.ts#L297)

___

### getOperationHistory

▸ **getOperationHistory**(`opts`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>\>

Retrieve all Events triggered by Operations this Identity has performed on a specific Asset

**`note`** uses the middleware

**`note`** supports pagination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.asset` | `string` \| [`Asset`](api_entities_Asset.Asset.md) | - |
| `opts.eventId?` | `EventIdEnum` | filters results by event |
| `opts.moduleId?` | `ModuleIdEnum` | filters results by module |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:386](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/AssetPermissions.ts#L386)

___

### hasPermissions

▸ **hasPermissions**(`args`): `Promise`<`boolean`\>

Check whether this Identity has specific transaction Permissions over an Asset

**`deprecated`** in favor of `checkPermissions`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`Asset`](api_entities_Asset.Asset.md) |
| `args.transactions` | ``null`` \| `TxTag`[] |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:285](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/AssetPermissions.ts#L285)

___

### setGroup

▸ **setGroup**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md) \| [`KnownPermissionGroup`](api_entities_KnownPermissionGroup.KnownPermissionGroup.md), [`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md) \| [`KnownPermissionGroup`](api_entities_KnownPermissionGroup.KnownPermissionGroup.md), `unknown`[][]\>\>

Assign this Identity to a different Permission Group for a given Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [setGroup.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetPermissionGroupParams`](../interfaces/api_procedures_setPermissionGroup.SetPermissionGroupParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md) \| [`KnownPermissionGroup`](api_entities_KnownPermissionGroup.KnownPermissionGroup.md), [`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md) \| [`KnownPermissionGroup`](api_entities_KnownPermissionGroup.KnownPermissionGroup.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:371](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/AssetPermissions.ts#L371)

___

### waive

▸ **waive**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Abdicate from the current Permissions Group for a given Asset. This means that this Identity will no longer have any permissions over said Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [waive.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`WaivePermissionsParams`](../interfaces/api_procedures_waivePermissions.WaivePermissionsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:361](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/AssetPermissions.ts#L361)

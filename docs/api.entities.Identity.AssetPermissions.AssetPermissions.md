# Class: AssetPermissions

[api/entities/Identity/AssetPermissions](../wiki/api.entities.Identity.AssetPermissions).AssetPermissions

Handles all Asset Permissions (External Agents) related functionality on the Identity side

## Hierarchy

- `Namespace`<[`Identity`](../wiki/api.entities.Identity.Identity)\>

  ↳ **`AssetPermissions`**

## Table of contents

### Methods

- [checkPermissions](../wiki/api.entities.Identity.AssetPermissions.AssetPermissions#checkpermissions)
- [enabledAt](../wiki/api.entities.Identity.AssetPermissions.AssetPermissions#enabledat)
- [get](../wiki/api.entities.Identity.AssetPermissions.AssetPermissions#get)
- [getGroup](../wiki/api.entities.Identity.AssetPermissions.AssetPermissions#getgroup)
- [getOperationHistory](../wiki/api.entities.Identity.AssetPermissions.AssetPermissions#getoperationhistory)
- [hasPermissions](../wiki/api.entities.Identity.AssetPermissions.AssetPermissions#haspermissions)
- [setGroup](../wiki/api.entities.Identity.AssetPermissions.AssetPermissions#setgroup)
- [waive](../wiki/api.entities.Identity.AssetPermissions.AssetPermissions#waive)

## Methods

### checkPermissions

▸ **checkPermissions**(`args`): `Promise`<[`CheckPermissionsResult`](../wiki/types.CheckPermissionsResult)<[`Identity`](../wiki/types.SignerType#identity)\>\>

Check whether this Identity has specific transaction Permissions over an Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`Asset`](../wiki/api.entities.Asset.Asset) |
| `args.transactions` | ``null`` \| [`TxTag`](../wiki/generated.types#txtag)[] |

#### Returns

`Promise`<[`CheckPermissionsResult`](../wiki/types.CheckPermissionsResult)<[`Identity`](../wiki/types.SignerType#identity)\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:133](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/AssetPermissions.ts#L133)

___

### enabledAt

▸ **enabledAt**(`__namedParameters`): `Promise`<``null`` \| [`EventIdentifier`](../wiki/types.EventIdentifier)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
  an Agent with permissions over a specific Asset

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.asset` | `string` \| [`Asset`](../wiki/api.entities.Asset.Asset) |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../wiki/types.EventIdentifier)\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:337](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/AssetPermissions.ts#L337)

___

### get

▸ **get**(): `Promise`<[`AssetWithGroup`](../wiki/types.AssetWithGroup)[]\>

Retrieve all the Assets over which this Identity has permissions, with the corresponding Permission Group

#### Returns

`Promise`<[`AssetWithGroup`](../wiki/types.AssetWithGroup)[]\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/AssetPermissions.ts#L104)

___

### getGroup

▸ **getGroup**(`__namedParameters`): `Promise`<[`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup) \| [`KnownPermissionGroup`](../wiki/api.entities.KnownPermissionGroup.KnownPermissionGroup)\>

Retrieve this Identity's Permission Group for a specific Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.asset` | `string` \| [`Asset`](../wiki/api.entities.Asset.Asset) |

#### Returns

`Promise`<[`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup) \| [`KnownPermissionGroup`](../wiki/api.entities.KnownPermissionGroup.KnownPermissionGroup)\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:297](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/AssetPermissions.ts#L297)

___

### getOperationHistory

▸ **getOperationHistory**(`opts`): `Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`EventIdentifier`](../wiki/types.EventIdentifier)\>\>

Retrieve all Events triggered by Operations this Identity has performed on a specific Asset

**`note`** uses the middleware

**`note`** supports pagination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.asset` | `string` \| [`Asset`](../wiki/api.entities.Asset.Asset) | - |
| `opts.eventId?` | [`EventIdEnum`](../wiki/types.EventIdEnum) | filters results by event |
| `opts.moduleId?` | [`ModuleIdEnum`](../wiki/types.ModuleIdEnum) | filters results by module |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`EventIdentifier`](../wiki/types.EventIdentifier)\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:386](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/AssetPermissions.ts#L386)

___

### hasPermissions

▸ **hasPermissions**(`args`): `Promise`<`boolean`\>

Check whether this Identity has specific transaction Permissions over an Asset

**`deprecated`** in favor of `checkPermissions`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`Asset`](../wiki/api.entities.Asset.Asset) |
| `args.transactions` | ``null`` \| [`TxTag`](../wiki/generated.types#txtag)[] |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:285](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/AssetPermissions.ts#L285)

___

### setGroup

▸ **setGroup**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup) \| [`KnownPermissionGroup`](../wiki/api.entities.KnownPermissionGroup.KnownPermissionGroup), [`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup) \| [`KnownPermissionGroup`](../wiki/api.entities.KnownPermissionGroup.KnownPermissionGroup), `unknown`[][]\>\>

Assign this Identity to a different Permission Group for a given Asset

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [setGroup.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetPermissionGroupParams`](../wiki/api.procedures.types.SetPermissionGroupParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup) \| [`KnownPermissionGroup`](../wiki/api.entities.KnownPermissionGroup.KnownPermissionGroup), [`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup) \| [`KnownPermissionGroup`](../wiki/api.entities.KnownPermissionGroup.KnownPermissionGroup), `unknown`[][]\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:371](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/AssetPermissions.ts#L371)

___

### waive

▸ **waive**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Abdicate from the current Permissions Group for a given Asset. This means that this Identity will no longer have any permissions over said Asset

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [waive.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`WaivePermissionsParams`](../wiki/api.procedures.types.WaivePermissionsParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:361](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Identity/AssetPermissions.ts#L361)

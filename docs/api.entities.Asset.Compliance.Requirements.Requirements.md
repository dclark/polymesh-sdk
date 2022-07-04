# Class: Requirements

[api/entities/Asset/Compliance/Requirements](../wiki/api.entities.Asset.Compliance.Requirements).Requirements

Handles all Asset Compliance Requirements related functionality

## Hierarchy

- `Namespace`<[`Asset`](../wiki/api.entities.Asset.Asset)\>

  ↳ **`Requirements`**

## Table of contents

### Methods

- [add](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#add)
- [arePaused](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#arepaused)
- [checkSettle](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#checksettle)
- [get](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#get)
- [modify](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#modify)
- [pause](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#pause)
- [remove](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#remove)
- [reset](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#reset)
- [set](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#set)
- [unpause](../wiki/api.entities.Asset.Compliance.Requirements.Requirements#unpause)

## Methods

### add

▸ **add**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Add a new compliance requirement to the the Asset. This doesn't modify existing requirements

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [add.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddAssetRequirementParams`](../wiki/api.procedures.types.AddAssetRequirementParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:103](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L103)

___

### arePaused

▸ **arePaused**(): `Promise`<`boolean`\>

Check whether Asset compliance requirements are paused or not

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:282](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L282)

___

### checkSettle

▸ **checkSettle**(`args`): `Promise`<[`Compliance`](../wiki/types.Compliance)\>

Check whether the sender and receiver Identities in a transfer comply with all the requirements of this Asset

**`note`** this does not take balances into account

**`deprecated`** in favor of `settlements.canTransfer`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.from?` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | sender Identity (optional, defaults to the signing Identity) |
| `args.to` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | receiver Identity |

#### Returns

`Promise`<[`Compliance`](../wiki/types.Compliance)\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:253](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L253)

___

### get

▸ **get**(): `Promise`<[`ComplianceRequirements`](../wiki/types.ComplianceRequirements)\>

Retrieve all of the Asset's compliance requirements, together with the Default Trusted Claim Issuers

**`note`** can be subscribed to

#### Returns

`Promise`<[`ComplianceRequirements`](../wiki/types.ComplianceRequirements)\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:135](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L135)

▸ **get**(`callback`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../wiki/types#subcallback)<[`ComplianceRequirements`](../wiki/types.ComplianceRequirements)\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:136](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L136)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify a compliance requirement for the Asset

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [modify.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyComplianceRequirementParams`](../wiki/api.procedures.types#modifycompliancerequirementparams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:306](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L306)

___

### pause

▸ **pause**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Pause all the Asset's requirements. This means that all transfers will be allowed until requirements are unpaused

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [pause.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:229](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L229)

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Remove an existing compliance requirement from the Asset

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [remove.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveAssetRequirementParams`](../wiki/api.procedures.types.RemoveAssetRequirementParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L113)

___

### reset

▸ **reset**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Delete all the current requirements for the Asset.

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [reset.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:219](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L219)

___

### set

▸ **set**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Configure compliance requirements for the Asset. This operation will replace all existing requirements with a new requirement set

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`.
For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [set.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetAssetRequirementsParams`](../wiki/api.procedures.types.SetAssetRequirementsParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:126](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L126)

___

### unpause

▸ **unpause**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Un-pause all the Asset's current requirements

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [unpause.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:239](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Compliance/Requirements.ts#L239)

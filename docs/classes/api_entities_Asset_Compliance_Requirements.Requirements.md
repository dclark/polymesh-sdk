[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/Compliance/Requirements](../modules/api_entities_Asset_Compliance_Requirements.md) / Requirements

# Class: Requirements

[api/entities/Asset/Compliance/Requirements](../modules/api_entities_Asset_Compliance_Requirements.md).Requirements

Handles all Asset Compliance Requirements related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`Requirements`**

## Table of contents

### Methods

- [add](api_entities_Asset_Compliance_Requirements.Requirements.md#add)
- [arePaused](api_entities_Asset_Compliance_Requirements.Requirements.md#arepaused)
- [checkSettle](api_entities_Asset_Compliance_Requirements.Requirements.md#checksettle)
- [get](api_entities_Asset_Compliance_Requirements.Requirements.md#get)
- [modify](api_entities_Asset_Compliance_Requirements.Requirements.md#modify)
- [pause](api_entities_Asset_Compliance_Requirements.Requirements.md#pause)
- [remove](api_entities_Asset_Compliance_Requirements.Requirements.md#remove)
- [reset](api_entities_Asset_Compliance_Requirements.Requirements.md#reset)
- [set](api_entities_Asset_Compliance_Requirements.Requirements.md#set)
- [unpause](api_entities_Asset_Compliance_Requirements.Requirements.md#unpause)

## Methods

### add

▸ **add**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Add a new compliance requirement to the the Asset. This doesn't modify existing requirements

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [add.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddAssetRequirementParams`](../interfaces/api_procedures_addAssetRequirement.AddAssetRequirementParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:103](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L103)

___

### arePaused

▸ **arePaused**(): `Promise`<`boolean`\>

Check whether Asset compliance requirements are paused or not

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:282](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L282)

___

### checkSettle

▸ **checkSettle**(`args`): `Promise`<[`Compliance`](../interfaces/types.Compliance.md)\>

Check whether the sender and receiver Identities in a transfer comply with all the requirements of this Asset

**`note`** this does not take balances into account

**`deprecated`** in favor of `settlements.canTransfer`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.from?` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | sender Identity (optional, defaults to the signing Identity) |
| `args.to` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | receiver Identity |

#### Returns

`Promise`<[`Compliance`](../interfaces/types.Compliance.md)\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:253](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L253)

___

### get

▸ **get**(): `Promise`<[`ComplianceRequirements`](../interfaces/types.ComplianceRequirements.md)\>

Retrieve all of the Asset's compliance requirements, together with the Default Trusted Claim Issuers

**`note`** can be subscribed to

#### Returns

`Promise`<[`ComplianceRequirements`](../interfaces/types.ComplianceRequirements.md)\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:135](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L135)

▸ **get**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`ComplianceRequirements`](../interfaces/types.ComplianceRequirements.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:136](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L136)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify a compliance requirement for the Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [modify.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyComplianceRequirementParams`](../modules/api_procedures_modifyComplianceRequirement.md#modifycompliancerequirementparams) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:306](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L306)

___

### pause

▸ **pause**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Pause all the Asset's requirements. This means that all transfers will be allowed until requirements are unpaused

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [pause.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:229](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L229)

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Remove an existing compliance requirement from the Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [remove.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveAssetRequirementParams`](../interfaces/api_procedures_removeAssetRequirement.RemoveAssetRequirementParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L113)

___

### reset

▸ **reset**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Delete all the current requirements for the Asset.

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [reset.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:219](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L219)

___

### set

▸ **set**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Configure compliance requirements for the Asset. This operation will replace all existing requirements with a new requirement set

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`.
For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [set.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetAssetRequirementsParams`](../interfaces/api_procedures_setAssetRequirements.SetAssetRequirementsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:126](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L126)

___

### unpause

▸ **unpause**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Un-pause all the Asset's current requirements

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [unpause.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Compliance/Requirements.ts:239](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Compliance/Requirements.ts#L239)

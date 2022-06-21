[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/CorporateActionBase](../modules/api_entities_CorporateActionBase.md) / CorporateActionBase

# Class: CorporateActionBase

[api/entities/CorporateActionBase](../modules/api_entities_CorporateActionBase.md).CorporateActionBase

Represents an action initiated by the issuer of an Asset which may affect the positions of
  the Asset Holders

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_CorporateActionBase.UniqueIdentifiers.md), `unknown`\>

  ↳ **`CorporateActionBase`**

  ↳↳ [`CorporateAction`](api_entities_CorporateAction.CorporateAction.md)

  ↳↳ [`DividendDistribution`](api_entities_DividendDistribution.DividendDistribution.md)

## Table of contents

### Properties

- [asset](api_entities_CorporateActionBase.CorporateActionBase.md#asset)
- [declarationDate](api_entities_CorporateActionBase.CorporateActionBase.md#declarationdate)
- [defaultTaxWithholding](api_entities_CorporateActionBase.CorporateActionBase.md#defaulttaxwithholding)
- [description](api_entities_CorporateActionBase.CorporateActionBase.md#description)
- [id](api_entities_CorporateActionBase.CorporateActionBase.md#id)
- [targets](api_entities_CorporateActionBase.CorporateActionBase.md#targets)
- [taxWithholdings](api_entities_CorporateActionBase.CorporateActionBase.md#taxwithholdings)
- [uuid](api_entities_CorporateActionBase.CorporateActionBase.md#uuid)

### Methods

- [checkpoint](api_entities_CorporateActionBase.CorporateActionBase.md#checkpoint)
- [exists](api_entities_CorporateActionBase.CorporateActionBase.md#exists)
- [isEqual](api_entities_CorporateActionBase.CorporateActionBase.md#isequal)
- [linkDocuments](api_entities_CorporateActionBase.CorporateActionBase.md#linkdocuments)
- [modifyCheckpoint](api_entities_CorporateActionBase.CorporateActionBase.md#modifycheckpoint)
- [toHuman](api_entities_CorporateActionBase.CorporateActionBase.md#tohuman)
- [generateUuid](api_entities_CorporateActionBase.CorporateActionBase.md#generateuuid)
- [unserialize](api_entities_CorporateActionBase.CorporateActionBase.md#unserialize)

## Properties

### asset

• **asset**: [`Asset`](api_entities_Asset.Asset.md)

Asset affected by this Corporate Action

#### Defined in

[api/entities/CorporateActionBase/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L77)

___

### declarationDate

• **declarationDate**: `Date`

date at which the Corporate Action was created

#### Defined in

[api/entities/CorporateActionBase/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L82)

___

### defaultTaxWithholding

• **defaultTaxWithholding**: `BigNumber`

default percentage (0-100) of tax withholding for this Corporate Action

#### Defined in

[api/entities/CorporateActionBase/index.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L98)

___

### description

• **description**: `string`

brief text description of the Corporate Action

#### Defined in

[api/entities/CorporateActionBase/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L87)

___

### id

• **id**: `BigNumber`

internal Corporate Action ID

#### Defined in

[api/entities/CorporateActionBase/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L72)

___

### targets

• **targets**: [`CorporateActionTargets`](../interfaces/api_entities_CorporateActionBase_types.CorporateActionTargets.md)

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

#### Defined in

[api/entities/CorporateActionBase/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L93)

___

### taxWithholdings

• **taxWithholdings**: [`TaxWithholding`](../interfaces/api_entities_CorporateActionBase_types.TaxWithholding.md)[]

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

#### Defined in

[api/entities/CorporateActionBase/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L104)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**(): `Promise`<``null`` \| [`CheckpointSchedule`](api_entities_CheckpointSchedule.CheckpointSchedule.md) \| [`Checkpoint`](api_entities_Checkpoint.Checkpoint.md)\>

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has
  not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means
  the Corporate Action was created without an associated Checkpoint

#### Returns

`Promise`<``null`` \| [`CheckpointSchedule`](api_entities_CheckpointSchedule.CheckpointSchedule.md) \| [`Checkpoint`](api_entities_Checkpoint.Checkpoint.md)\>

#### Defined in

[api/entities/CorporateActionBase/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L183)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Corporate Action exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/CorporateActionBase/index.ts:172](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L172)

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

### linkDocuments

▸ **linkDocuments**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Link a list of documents to this corporate action

**`note`** any previous links are removed in favor of the new list

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [linkDocuments.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`LinkCaDocsParams`](../interfaces/api_procedures_linkCaDocs.LinkCaDocsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/CorporateActionBase/index.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L152)

___

### modifyCheckpoint

▸ `Abstract` **modifyCheckpoint**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify the Corporate Action's Checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [modifyCheckpoint.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`Modify`](../modules/types_utils.md#modify)<`ModifyCaCheckpointParams`, { `checkpoint`: [`InputCaCheckpoint`](../modules/api_entities_Asset_Checkpoints_types.md#inputcacheckpoint)  }\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/CorporateActionBase/index.ts:162](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L162)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../interfaces/api_entities_CorporateActionBase.HumanReadable.md)

Return the Corporate Action's static data

#### Returns

[`HumanReadable`](../interfaces/api_entities_CorporateActionBase.HumanReadable.md)

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/CorporateActionBase/index.ts:262](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L262)

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

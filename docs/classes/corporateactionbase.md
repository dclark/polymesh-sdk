# Class: CorporateActionBase

Represents an action initiated by the issuer of an Asset which may affect the positions of
  the Asset Holders

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, unknown›

  ↳ **CorporateActionBase**

  ↳ [CorporateAction](corporateaction.md)

  ↳ [DividendDistribution](dividenddistribution.md)

## Index

### Properties

* [asset](corporateactionbase.md#asset)
* [context](corporateactionbase.md#protected-context)
* [declarationDate](corporateactionbase.md#declarationdate)
* [defaultTaxWithholding](corporateactionbase.md#defaulttaxwithholding)
* [description](corporateactionbase.md#description)
* [id](corporateactionbase.md#id)
* [kind](corporateactionbase.md#protected-kind)
* [targets](corporateactionbase.md#targets)
* [taxWithholdings](corporateactionbase.md#taxwithholdings)
* [uuid](corporateactionbase.md#uuid)

### Methods

* [checkpoint](corporateactionbase.md#checkpoint)
* [exists](corporateactionbase.md#exists)
* [isEqual](corporateactionbase.md#isequal)
* [linkDocuments](corporateactionbase.md#linkdocuments)
* [modifyCheckpoint](corporateactionbase.md#abstract-modifycheckpoint)
* [toHuman](corporateactionbase.md#tohuman)
* [generateUuid](corporateactionbase.md#static-generateuuid)
* [unserialize](corporateactionbase.md#static-unserialize)

## Properties

###  asset

• **asset**: *[Asset](asset.md)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L77)*

Asset affected by this Corporate Action

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L48)*

___

###  declarationDate

• **declarationDate**: *Date*

*Defined in [src/api/entities/CorporateActionBase/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L82)*

date at which the Corporate Action was created

___

###  defaultTaxWithholding

• **defaultTaxWithholding**: *BigNumber*

*Defined in [src/api/entities/CorporateActionBase/index.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L98)*

default percentage (0-100) of tax withholding for this Corporate Action

___

###  description

• **description**: *string*

*Defined in [src/api/entities/CorporateActionBase/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L87)*

brief text description of the Corporate Action

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/CorporateActionBase/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L72)*

internal Corporate Action ID

___

### `Protected` kind

• **kind**: *[CorporateActionKind](../enums/corporateactionkind.md)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L109)*

type of corporate action being represented

___

###  targets

• **targets**: *[CorporateActionTargets](../interfaces/corporateactiontargets.md)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L93)*

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

___

###  taxWithholdings

• **taxWithholdings**: *[TaxWithholding](../interfaces/taxwithholding.md)[]*

*Defined in [src/api/entities/CorporateActionBase/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L104)*

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L46)*

## Methods

###  checkpoint

▸ **checkpoint**(): *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md) | null›*

*Defined in [src/api/entities/CorporateActionBase/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L183)*

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has
  not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means
  the Corporate Action was created without an associated Checkpoint

**Returns:** *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md) | null›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:172](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L172)*

Determine whether this Corporate Action exists on chain

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  linkDocuments

▸ **linkDocuments**(`args`: [LinkCaDocsParams](../interfaces/linkcadocsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CorporateActionBase/index.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L152)*

Link a list of documents to this corporate action

**`note`** any previous links are removed in favor of the new list

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [linkDocuments.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [LinkCaDocsParams](../interfaces/linkcadocsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

### `Abstract` modifyCheckpoint

▸ **modifyCheckpoint**(`args`: [Modify](../globals.md#modify)‹ModifyCaCheckpointParams, object›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CorporateActionBase/index.ts:162](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L162)*

Modify the Corporate Action's Checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [modifyCheckpoint.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [Modify](../globals.md#modify)‹ModifyCaCheckpointParams, object› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toHuman

▸ **toHuman**(): *HumanReadable*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:262](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/CorporateActionBase/index.ts#L262)*

Return the Corporate Action's static data

**Returns:** *HumanReadable*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

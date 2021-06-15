# CorporateAction

Represents an action initiated by the issuer of a Security Token which may affect the positions of the Tokenholders

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **CorporateAction**

  ↳ [DividendDistribution](dividenddistribution.md)

## Index

### Properties

* [context](corporateaction.md#protected-context)
* [declarationDate](corporateaction.md#declarationdate)
* [defaultTaxWithholding](corporateaction.md#defaulttaxwithholding)
* [description](corporateaction.md#description)
* [id](corporateaction.md#id)
* [kind](corporateaction.md#protected-kind)
* [targets](corporateaction.md#targets)
* [taxWithholdings](corporateaction.md#taxwithholdings)
* [ticker](corporateaction.md#ticker)
* [uuid](corporateaction.md#uuid)

### Methods

* [checkpoint](corporateaction.md#checkpoint)
* [exists](corporateaction.md#exists)
* [isEqual](corporateaction.md#isequal)
* [linkDocuments](corporateaction.md#linkdocuments)
* [modifyCheckpoint](corporateaction.md#modifycheckpoint)
* [generateUuid](corporateaction.md#static-generateuuid)
* [unserialize](corporateaction.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### declarationDate

• **declarationDate**: _Date_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:70_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L70)

date at which the Corporate Action was created

### defaultTaxWithholding

• **defaultTaxWithholding**: _BigNumber_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:86_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L86)

default percentage of tax withholding for this Corporate Action

### description

• **description**: _string_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:75_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L75)

brief text description of the Corporate Action

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L60)

internal Corporate Action ID

### `Protected` kind

• **kind**: [_CorporateActionKind_](../enums/corporateactionkind.md)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:94_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L94)

### targets

• **targets**: [_CorporateActionTargets_](../interfaces/corporateactiontargets.md)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:81_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L81)

tokenholder identities related to this Corporate action. If the treatment is `Exclude`, the identities are not targeted by the Action, and any identities left out of the array will be targeted, and vice versa

### taxWithholdings

• **taxWithholdings**: [_TaxWithholding_](../interfaces/taxwithholding.md)_\[\]_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:92_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L92)

percentage of tax withholding per Identity. Any Identity not present in this array uses the default tax withholding percentage

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:65_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L65)

ticker of the Security Token

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**\(\): _Promise‹_[_Checkpoint_](checkpoint.md) _\|_ [_CheckpointSchedule_](checkpointschedule.md) _\| null›_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:177_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L177)

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means the Corporate Action was created without an associated Checkpoint

**Returns:** _Promise‹_[_Checkpoint_](checkpoint.md) _\|_ [_CheckpointSchedule_](checkpointschedule.md) _\| null›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:166_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L166)

Retrieve whether the Corporate Action exists

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown›\): _boolean_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_isEqual_](checkpointschedule.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown› |

**Returns:** _boolean_

### linkDocuments

▸ **linkDocuments**\(`args`: [LinkCaDocsParams](../interfaces/linkcadocsparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:149_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L149)

Link a list of documents to this corporate action

**`note`** any previous links are removed in favor of the new list

**`note`** required role:

* Corporate Actions Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `linkDocuments.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [LinkCaDocsParams](../interfaces/linkcadocsparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### modifyCheckpoint

▸ **modifyCheckpoint**\(`args`: ModifyCaCheckpointParams\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:159_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L159)

Modify the Corporate Action's Checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyCheckpoint.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | ModifyCaCheckpointParams |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_generateUuid_](checkpointschedule.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L14)

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

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_unserialize_](checkpointschedule.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


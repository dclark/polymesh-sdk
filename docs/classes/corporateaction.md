# CorporateAction

Represents an action initiated by the issuer of a Security Token which may affect the positions of the Tokenholders

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, unknown›

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
* [toJson](corporateaction.md#tojson)
* [generateUuid](corporateaction.md#static-generateuuid)
* [unserialize](corporateaction.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L48)

### declarationDate

• **declarationDate**: _Date_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:82_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L82)

date at which the Corporate Action was created

### defaultTaxWithholding

• **defaultTaxWithholding**: _BigNumber_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:98_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L98)

default percentage of tax withholding for this Corporate Action

### description

• **description**: _string_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:87_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L87)

brief text description of the Corporate Action

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L72)

internal Corporate Action ID

### `Protected` kind

• **kind**: [_CorporateActionKind_](../enums/corporateactionkind.md)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:106_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L106)

### targets

• **targets**: [_CorporateActionTargets_](../interfaces/corporateactiontargets.md)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:93_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L93)

tokenholder identities related to this Corporate action. If the treatment is `Exclude`, the identities are not targeted by the Action, and any identities left out of the array will be targeted, and vice versa

### taxWithholdings

• **taxWithholdings**: [_TaxWithholding_](../interfaces/taxwithholding.md)_\[\]_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:104_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L104)

percentage of tax withholding per Identity. Any Identity not present in this array uses the default tax withholding percentage

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:77_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L77)

ticker of the Security Token

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**\(\): _Promise‹_[_Checkpoint_](checkpoint.md) _\|_ [_CheckpointSchedule_](checkpointschedule.md) _\| null›_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:187_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L187)

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means the Corporate Action was created without an associated Checkpoint

**Returns:** _Promise‹_[_Checkpoint_](checkpoint.md) _\|_ [_CheckpointSchedule_](checkpointschedule.md) _\| null›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:176_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L176)

Retrieve whether the Corporate Action exists

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### linkDocuments

▸ **linkDocuments**\(`args`: [LinkCaDocsParams](../interfaces/linkcadocsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:159_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L159)

Link a list of documents to this corporate action

**`note`** any previous links are removed in favor of the new list

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `linkDocuments.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [LinkCaDocsParams](../interfaces/linkcadocsparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### modifyCheckpoint

▸ **modifyCheckpoint**\(`args`: ModifyCaCheckpointParams, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CorporateAction/index.ts:169_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L169)

Modify the Corporate Action's Checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyCheckpoint.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | ModifyCaCheckpointParams |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### toJson

▸ **toJson**\(\): _HumanReadable_

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:266_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L266)

Return the Corporate Action's static data

**Returns:** _HumanReadable_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L14)

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

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


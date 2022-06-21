[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/DividendDistribution](../modules/api_entities_DividendDistribution.md) / DividendDistribution

# Class: DividendDistribution

[api/entities/DividendDistribution](../modules/api_entities_DividendDistribution.md).DividendDistribution

Represents a Corporate Action via which an Asset issuer wishes to distribute dividends
  between a subset of the Asset Holders (targets)

## Hierarchy

- [`CorporateActionBase`](api_entities_CorporateActionBase.CorporateActionBase.md)

  ↳ **`DividendDistribution`**

## Table of contents

### Properties

- [asset](api_entities_DividendDistribution.DividendDistribution.md#asset)
- [currency](api_entities_DividendDistribution.DividendDistribution.md#currency)
- [declarationDate](api_entities_DividendDistribution.DividendDistribution.md#declarationdate)
- [defaultTaxWithholding](api_entities_DividendDistribution.DividendDistribution.md#defaulttaxwithholding)
- [description](api_entities_DividendDistribution.DividendDistribution.md#description)
- [expiryDate](api_entities_DividendDistribution.DividendDistribution.md#expirydate)
- [id](api_entities_DividendDistribution.DividendDistribution.md#id)
- [maxAmount](api_entities_DividendDistribution.DividendDistribution.md#maxamount)
- [origin](api_entities_DividendDistribution.DividendDistribution.md#origin)
- [paymentDate](api_entities_DividendDistribution.DividendDistribution.md#paymentdate)
- [perShare](api_entities_DividendDistribution.DividendDistribution.md#pershare)
- [targets](api_entities_DividendDistribution.DividendDistribution.md#targets)
- [taxWithholdings](api_entities_DividendDistribution.DividendDistribution.md#taxwithholdings)
- [uuid](api_entities_DividendDistribution.DividendDistribution.md#uuid)

### Methods

- [checkpoint](api_entities_DividendDistribution.DividendDistribution.md#checkpoint)
- [claim](api_entities_DividendDistribution.DividendDistribution.md#claim)
- [details](api_entities_DividendDistribution.DividendDistribution.md#details)
- [exists](api_entities_DividendDistribution.DividendDistribution.md#exists)
- [getParticipant](api_entities_DividendDistribution.DividendDistribution.md#getparticipant)
- [getParticipants](api_entities_DividendDistribution.DividendDistribution.md#getparticipants)
- [getPaymentHistory](api_entities_DividendDistribution.DividendDistribution.md#getpaymenthistory)
- [getWithheldTax](api_entities_DividendDistribution.DividendDistribution.md#getwithheldtax)
- [isEqual](api_entities_DividendDistribution.DividendDistribution.md#isequal)
- [linkDocuments](api_entities_DividendDistribution.DividendDistribution.md#linkdocuments)
- [modifyCheckpoint](api_entities_DividendDistribution.DividendDistribution.md#modifycheckpoint)
- [pay](api_entities_DividendDistribution.DividendDistribution.md#pay)
- [reclaimFunds](api_entities_DividendDistribution.DividendDistribution.md#reclaimfunds)
- [toHuman](api_entities_DividendDistribution.DividendDistribution.md#tohuman)
- [generateUuid](api_entities_DividendDistribution.DividendDistribution.md#generateuuid)
- [unserialize](api_entities_DividendDistribution.DividendDistribution.md#unserialize)

## Properties

### asset

• **asset**: [`Asset`](api_entities_Asset.Asset.md)

Asset affected by this Corporate Action

#### Inherited from

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[asset](api_entities_CorporateActionBase.CorporateActionBase.md#asset)

#### Defined in

[api/entities/CorporateActionBase/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L77)

___

### currency

• **currency**: `string`

ticker of the currency in which dividends are being distributed

#### Defined in

[api/entities/DividendDistribution/index.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L100)

___

### declarationDate

• **declarationDate**: `Date`

date at which the Corporate Action was created

#### Inherited from

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[declarationDate](api_entities_CorporateActionBase.CorporateActionBase.md#declarationdate)

#### Defined in

[api/entities/CorporateActionBase/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L82)

___

### defaultTaxWithholding

• **defaultTaxWithholding**: `BigNumber`

default percentage (0-100) of tax withholding for this Corporate Action

#### Inherited from

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[defaultTaxWithholding](api_entities_CorporateActionBase.CorporateActionBase.md#defaulttaxwithholding)

#### Defined in

[api/entities/CorporateActionBase/index.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L98)

___

### description

• **description**: `string`

brief text description of the Corporate Action

#### Inherited from

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[description](api_entities_CorporateActionBase.CorporateActionBase.md#description)

#### Defined in

[api/entities/CorporateActionBase/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L87)

___

### expiryDate

• **expiryDate**: ``null`` \| `Date`

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

#### Defined in

[api/entities/DividendDistribution/index.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L116)

___

### id

• **id**: `BigNumber`

internal Corporate Action ID

#### Inherited from

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[id](api_entities_CorporateActionBase.CorporateActionBase.md#id)

#### Defined in

[api/entities/CorporateActionBase/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L72)

___

### maxAmount

• **maxAmount**: `BigNumber`

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
  every Asset Holder receives their corresponding amount

#### Defined in

[api/entities/DividendDistribution/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L111)

___

### origin

• **origin**: [`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](api_entities_DefaultPortfolio.DefaultPortfolio.md)

Portfolio from which the dividends will be distributed

#### Defined in

[api/entities/DividendDistribution/index.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L95)

___

### paymentDate

• **paymentDate**: `Date`

date starting from which dividends can be paid/reclaimed

#### Defined in

[api/entities/DividendDistribution/index.ts:121](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L121)

___

### perShare

• **perShare**: `BigNumber`

amount of `currency` to pay for each share held by the Asset Holders

#### Defined in

[api/entities/DividendDistribution/index.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L105)

___

### targets

• **targets**: [`CorporateActionTargets`](../interfaces/api_entities_CorporateActionBase_types.CorporateActionTargets.md)

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

#### Inherited from

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[targets](api_entities_CorporateActionBase.CorporateActionBase.md#targets)

#### Defined in

[api/entities/CorporateActionBase/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L93)

___

### taxWithholdings

• **taxWithholdings**: [`TaxWithholding`](../interfaces/api_entities_CorporateActionBase_types.TaxWithholding.md)[]

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

#### Inherited from

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[taxWithholdings](api_entities_CorporateActionBase.CorporateActionBase.md#taxwithholdings)

#### Defined in

[api/entities/CorporateActionBase/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L104)

___

### uuid

• **uuid**: `string`

#### Inherited from

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[uuid](api_entities_CorporateActionBase.CorporateActionBase.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**(): `Promise`<[`CheckpointSchedule`](api_entities_CheckpointSchedule.CheckpointSchedule.md) \| [`Checkpoint`](api_entities_Checkpoint.Checkpoint.md)\>

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
  the corresponding CheckpointSchedule is returned instead

#### Returns

`Promise`<[`CheckpointSchedule`](api_entities_CheckpointSchedule.CheckpointSchedule.md) \| [`Checkpoint`](api_entities_Checkpoint.Checkpoint.md)\>

#### Overrides

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[checkpoint](api_entities_CorporateActionBase.CorporateActionBase.md#checkpoint)

#### Defined in

[api/entities/DividendDistribution/index.ts:246](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L246)

___

### claim

▸ **claim**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Claim the Dividends corresponding to the signing Identity

**`note`** if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [claim.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/DividendDistribution/index.ts:195](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L195)

___

### details

▸ **details**(): `Promise`<[`DividendDistributionDetails`](../interfaces/api_entities_DividendDistribution_types.DividendDistributionDetails.md)\>

Retrieve details associated with this Dividend Distribution

#### Returns

`Promise`<[`DividendDistributionDetails`](../interfaces/api_entities_DividendDistribution_types.DividendDistributionDetails.md)\>

#### Defined in

[api/entities/DividendDistribution/index.ts:274](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L274)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Retrieve whether the Distribution exists

#### Returns

`Promise`<`boolean`\>

#### Overrides

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[exists](api_entities_CorporateActionBase.CorporateActionBase.md#exists)

#### Defined in

[api/entities/DividendDistribution/index.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L265)

___

### getParticipant

▸ **getParticipant**(`args?`): `Promise`<``null`` \| [`DistributionParticipant`](../interfaces/api_entities_DividendDistribution_types.DistributionParticipant.md)\>

Retrieve an Identity that is entitled to dividends in this Distribution (participant),
  the amount it is entitled to and whether it has been paid or not

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be null.
  This is because the Distribution participant's corresponding payment cannot be determined without a Checkpoint

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`<``null`` \| [`DistributionParticipant`](../interfaces/api_entities_DividendDistribution_types.DistributionParticipant.md)\>

#### Defined in

[api/entities/DividendDistribution/index.ts:355](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L355)

___

### getParticipants

▸ **getParticipants**(): `Promise`<[`DistributionParticipant`](../interfaces/api_entities_DividendDistribution_types.DistributionParticipant.md)[]\>

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution (participants),
  the amount they are entitled to and whether they have been paid or not

**`note`** this request can take a lot of time with large amounts of Asset Holders

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be an empty array.
  This is because the Distribution participants cannot be determined without a Checkpoint

#### Returns

`Promise`<[`DistributionParticipant`](../interfaces/api_entities_DividendDistribution_types.DistributionParticipant.md)[]\>

#### Defined in

[api/entities/DividendDistribution/index.ts:300](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L300)

___

### getPaymentHistory

▸ **getPaymentHistory**(`opts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`DistributionPayment`](../interfaces/types.DistributionPayment.md)\>\>

Retrieve the payment history for this Distribution

**`note`** uses the middleware

**`note`** supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`DistributionPayment`](../interfaces/types.DistributionPayment.md)\>\>

#### Defined in

[api/entities/DividendDistribution/index.ts:492](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L492)

___

### getWithheldTax

▸ **getWithheldTax**(): `Promise`<`BigNumber`\>

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middleware

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/entities/DividendDistribution/index.ts:457](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L457)

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

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[isEqual](api_entities_CorporateActionBase.CorporateActionBase.md#isequal)

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

#### Inherited from

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[linkDocuments](api_entities_CorporateActionBase.CorporateActionBase.md#linkdocuments)

#### Defined in

[api/entities/CorporateActionBase/index.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/CorporateActionBase/index.ts#L152)

___

### modifyCheckpoint

▸ **modifyCheckpoint**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify the Distribution's Checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [modifyCheckpoint.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`Modify`](../modules/types_utils.md#modify)<`ModifyCaCheckpointParams`, { `checkpoint`: [`InputCaCheckpoint`](../modules/api_entities_Asset_Checkpoints_types.md#inputcacheckpoint)  }\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Overrides

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[modifyCheckpoint](api_entities_CorporateActionBase.CorporateActionBase.md#modifycheckpoint)

#### Defined in

[api/entities/DividendDistribution/index.ts:205](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L205)

___

### pay

▸ **pay**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Transfer the corresponding share of the dividends to a list of Identities

**`note`** due to performance issues, we do not validate that the distribution has enough remaining funds to pay the corresponding amount to the supplied Identities

**`note`** if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [pay.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`PayDividendsParams`](../interfaces/api_procedures_payDividends.PayDividendsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/DividendDistribution/index.ts:223](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L223)

___

### reclaimFunds

▸ **reclaimFunds**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

**`note`** withheld taxes are also reclaimed in the same transaction

**`note`** required roles:
  - Origin Portfolio Custodian

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [reclaimFunds.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/DividendDistribution/index.ts:238](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L238)

___

### toHuman

▸ **toHuman**(): `HumanReadable`

Return the Dividend Distribution's static data

#### Returns

`HumanReadable`

#### Overrides

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[toHuman](api_entities_CorporateActionBase.CorporateActionBase.md#tohuman)

#### Defined in

[api/entities/DividendDistribution/index.ts:622](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/index.ts#L622)

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

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[generateUuid](api_entities_CorporateActionBase.CorporateActionBase.md#generateuuid)

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

[CorporateActionBase](api_entities_CorporateActionBase.CorporateActionBase.md).[unserialize](api_entities_CorporateActionBase.CorporateActionBase.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

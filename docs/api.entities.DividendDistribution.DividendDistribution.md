# Class: DividendDistribution

[api/entities/DividendDistribution](../wiki/api.entities.DividendDistribution).DividendDistribution

Represents a Corporate Action via which an Asset issuer wishes to distribute dividends
  between a subset of the Asset Holders (targets)

## Hierarchy

- [`CorporateActionBase`](../wiki/api.entities.CorporateActionBase.CorporateActionBase)

  ↳ **`DividendDistribution`**

## Table of contents

### Properties

- [asset](../wiki/api.entities.DividendDistribution.DividendDistribution#asset)
- [currency](../wiki/api.entities.DividendDistribution.DividendDistribution#currency)
- [declarationDate](../wiki/api.entities.DividendDistribution.DividendDistribution#declarationdate)
- [defaultTaxWithholding](../wiki/api.entities.DividendDistribution.DividendDistribution#defaulttaxwithholding)
- [description](../wiki/api.entities.DividendDistribution.DividendDistribution#description)
- [expiryDate](../wiki/api.entities.DividendDistribution.DividendDistribution#expirydate)
- [id](../wiki/api.entities.DividendDistribution.DividendDistribution#id)
- [maxAmount](../wiki/api.entities.DividendDistribution.DividendDistribution#maxamount)
- [origin](../wiki/api.entities.DividendDistribution.DividendDistribution#origin)
- [paymentDate](../wiki/api.entities.DividendDistribution.DividendDistribution#paymentdate)
- [perShare](../wiki/api.entities.DividendDistribution.DividendDistribution#pershare)
- [targets](../wiki/api.entities.DividendDistribution.DividendDistribution#targets)
- [taxWithholdings](../wiki/api.entities.DividendDistribution.DividendDistribution#taxwithholdings)
- [uuid](../wiki/api.entities.DividendDistribution.DividendDistribution#uuid)

### Methods

- [checkpoint](../wiki/api.entities.DividendDistribution.DividendDistribution#checkpoint)
- [claim](../wiki/api.entities.DividendDistribution.DividendDistribution#claim)
- [details](../wiki/api.entities.DividendDistribution.DividendDistribution#details)
- [exists](../wiki/api.entities.DividendDistribution.DividendDistribution#exists)
- [getParticipant](../wiki/api.entities.DividendDistribution.DividendDistribution#getparticipant)
- [getParticipants](../wiki/api.entities.DividendDistribution.DividendDistribution#getparticipants)
- [getPaymentHistory](../wiki/api.entities.DividendDistribution.DividendDistribution#getpaymenthistory)
- [getWithheldTax](../wiki/api.entities.DividendDistribution.DividendDistribution#getwithheldtax)
- [isEqual](../wiki/api.entities.DividendDistribution.DividendDistribution#isequal)
- [linkDocuments](../wiki/api.entities.DividendDistribution.DividendDistribution#linkdocuments)
- [modifyCheckpoint](../wiki/api.entities.DividendDistribution.DividendDistribution#modifycheckpoint)
- [pay](../wiki/api.entities.DividendDistribution.DividendDistribution#pay)
- [reclaimFunds](../wiki/api.entities.DividendDistribution.DividendDistribution#reclaimfunds)
- [toHuman](../wiki/api.entities.DividendDistribution.DividendDistribution#tohuman)
- [generateUuid](../wiki/api.entities.DividendDistribution.DividendDistribution#generateuuid)
- [unserialize](../wiki/api.entities.DividendDistribution.DividendDistribution#unserialize)

## Properties

### asset

• **asset**: [`Asset`](../wiki/api.entities.Asset.Asset)

Asset affected by this Corporate Action

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[asset](../wiki/api.entities.CorporateActionBase.CorporateActionBase#asset)

#### Defined in

[api/entities/CorporateActionBase/index.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/CorporateActionBase/index.ts#L81)

___

### currency

• **currency**: `string`

ticker of the currency in which dividends are being distributed

#### Defined in

[api/entities/DividendDistribution/index.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L100)

___

### declarationDate

• **declarationDate**: `Date`

date at which the Corporate Action was created

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[declarationDate](../wiki/api.entities.CorporateActionBase.CorporateActionBase#declarationdate)

#### Defined in

[api/entities/CorporateActionBase/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/CorporateActionBase/index.ts#L86)

___

### defaultTaxWithholding

• **defaultTaxWithholding**: `BigNumber`

default percentage (0-100) of tax withholding for this Corporate Action

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[defaultTaxWithholding](../wiki/api.entities.CorporateActionBase.CorporateActionBase#defaulttaxwithholding)

#### Defined in

[api/entities/CorporateActionBase/index.ts:102](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/CorporateActionBase/index.ts#L102)

___

### description

• **description**: `string`

brief text description of the Corporate Action

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[description](../wiki/api.entities.CorporateActionBase.CorporateActionBase#description)

#### Defined in

[api/entities/CorporateActionBase/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/CorporateActionBase/index.ts#L91)

___

### expiryDate

• **expiryDate**: ``null`` \| `Date`

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

#### Defined in

[api/entities/DividendDistribution/index.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L116)

___

### id

• **id**: `BigNumber`

internal Corporate Action ID

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[id](../wiki/api.entities.CorporateActionBase.CorporateActionBase#id)

#### Defined in

[api/entities/CorporateActionBase/index.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/CorporateActionBase/index.ts#L76)

___

### maxAmount

• **maxAmount**: `BigNumber`

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
  every Asset Holder receives their corresponding amount

#### Defined in

[api/entities/DividendDistribution/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L111)

___

### origin

• **origin**: [`NumberedPortfolio`](../wiki/api.entities.NumberedPortfolio.NumberedPortfolio) \| [`DefaultPortfolio`](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio)

Portfolio from which the dividends will be distributed

#### Defined in

[api/entities/DividendDistribution/index.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L95)

___

### paymentDate

• **paymentDate**: `Date`

date starting from which dividends can be paid/reclaimed

#### Defined in

[api/entities/DividendDistribution/index.ts:121](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L121)

___

### perShare

• **perShare**: `BigNumber`

amount of `currency` to pay for each share held by the Asset Holders

#### Defined in

[api/entities/DividendDistribution/index.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L105)

___

### targets

• **targets**: [`CorporateActionTargets`](../wiki/api.entities.CorporateActionBase.types.CorporateActionTargets)

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[targets](../wiki/api.entities.CorporateActionBase.CorporateActionBase#targets)

#### Defined in

[api/entities/CorporateActionBase/index.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/CorporateActionBase/index.ts#L97)

___

### taxWithholdings

• **taxWithholdings**: [`TaxWithholding`](../wiki/api.entities.CorporateActionBase.types.TaxWithholding)[]

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[taxWithholdings](../wiki/api.entities.CorporateActionBase.CorporateActionBase#taxwithholdings)

#### Defined in

[api/entities/CorporateActionBase/index.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/CorporateActionBase/index.ts#L108)

___

### uuid

• **uuid**: `string`

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[uuid](../wiki/api.entities.CorporateActionBase.CorporateActionBase#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**(): `Promise`<[`CheckpointSchedule`](../wiki/api.entities.CheckpointSchedule.CheckpointSchedule) \| [`Checkpoint`](../wiki/api.entities.Checkpoint.Checkpoint)\>

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
  the corresponding CheckpointSchedule is returned instead

#### Returns

`Promise`<[`CheckpointSchedule`](../wiki/api.entities.CheckpointSchedule.CheckpointSchedule) \| [`Checkpoint`](../wiki/api.entities.Checkpoint.Checkpoint)\>

#### Overrides

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[checkpoint](../wiki/api.entities.CorporateActionBase.CorporateActionBase#checkpoint)

#### Defined in

[api/entities/DividendDistribution/index.ts:246](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L246)

___

### claim

▸ **claim**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Claim the Dividends corresponding to the signing Identity

**`note`** if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [claim.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/DividendDistribution/index.ts:195](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L195)

___

### details

▸ **details**(): `Promise`<[`DividendDistributionDetails`](../wiki/api.entities.DividendDistribution.types.DividendDistributionDetails)\>

Retrieve details associated with this Dividend Distribution

#### Returns

`Promise`<[`DividendDistributionDetails`](../wiki/api.entities.DividendDistribution.types.DividendDistributionDetails)\>

#### Defined in

[api/entities/DividendDistribution/index.ts:274](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L274)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Retrieve whether the Distribution exists

#### Returns

`Promise`<`boolean`\>

#### Overrides

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[exists](../wiki/api.entities.CorporateActionBase.CorporateActionBase#exists)

#### Defined in

[api/entities/DividendDistribution/index.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L265)

___

### getParticipant

▸ **getParticipant**(`args?`): `Promise`<``null`` \| [`DistributionParticipant`](../wiki/api.entities.DividendDistribution.types.DistributionParticipant)\>

Retrieve an Identity that is entitled to dividends in this Distribution (participant),
  the amount it is entitled to and whether it has been paid or not

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be null.
  This is because the Distribution participant's corresponding payment cannot be determined without a Checkpoint

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | defaults to the signing Identity |

#### Returns

`Promise`<``null`` \| [`DistributionParticipant`](../wiki/api.entities.DividendDistribution.types.DistributionParticipant)\>

#### Defined in

[api/entities/DividendDistribution/index.ts:355](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L355)

___

### getParticipants

▸ **getParticipants**(): `Promise`<[`DistributionParticipant`](../wiki/api.entities.DividendDistribution.types.DistributionParticipant)[]\>

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution (participants),
  the amount they are entitled to and whether they have been paid or not

**`note`** this request can take a lot of time with large amounts of Asset Holders

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be an empty array.
  This is because the Distribution participants cannot be determined without a Checkpoint

#### Returns

`Promise`<[`DistributionParticipant`](../wiki/api.entities.DividendDistribution.types.DistributionParticipant)[]\>

#### Defined in

[api/entities/DividendDistribution/index.ts:300](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L300)

___

### getPaymentHistory

▸ **getPaymentHistory**(`opts?`): `Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`DistributionPayment`](../wiki/types.DistributionPayment)\>\>

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

`Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`DistributionPayment`](../wiki/types.DistributionPayment)\>\>

#### Defined in

[api/entities/DividendDistribution/index.ts:492](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L492)

___

### getWithheldTax

▸ **getWithheldTax**(): `Promise`<`BigNumber`\>

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middleware

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/entities/DividendDistribution/index.ts:457](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L457)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../wiki/api.entities.Entity.Entity)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[isEqual](../wiki/api.entities.CorporateActionBase.CorporateActionBase#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L61)

___

### linkDocuments

▸ **linkDocuments**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Link a list of documents to this corporate action

**`note`** any previous links are removed in favor of the new list

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [linkDocuments.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`LinkCaDocsParams`](../wiki/api.procedures.types.LinkCaDocsParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Inherited from

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[linkDocuments](../wiki/api.entities.CorporateActionBase.CorporateActionBase#linkdocuments)

#### Defined in

[api/entities/CorporateActionBase/index.ts:156](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/CorporateActionBase/index.ts#L156)

___

### modifyCheckpoint

▸ **modifyCheckpoint**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify the Distribution's Checkpoint

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [modifyCheckpoint.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`Modify`](../wiki/types.utils#modify)<[`ModifyCaCheckpointParams`](../wiki/api.procedures.types.ModifyCaCheckpointParams), { `checkpoint`: [`InputCaCheckpoint`](../wiki/api.entities.Asset.Checkpoints.types#inputcacheckpoint)  }\> |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Overrides

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[modifyCheckpoint](../wiki/api.entities.CorporateActionBase.CorporateActionBase#modifycheckpoint)

#### Defined in

[api/entities/DividendDistribution/index.ts:205](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L205)

___

### pay

▸ **pay**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Transfer the corresponding share of the dividends to a list of Identities

**`note`** due to performance issues, we do not validate that the distribution has enough remaining funds to pay the corresponding amount to the supplied Identities

**`note`** if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [pay.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`PayDividendsParams`](../wiki/api.procedures.types.PayDividendsParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/DividendDistribution/index.ts:223](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L223)

___

### reclaimFunds

▸ **reclaimFunds**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

**`note`** withheld taxes are also reclaimed in the same transaction

**`note`** required roles:
  - Origin Portfolio Custodian

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [reclaimFunds.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/DividendDistribution/index.ts:238](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L238)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../wiki/api.entities.DividendDistribution.HumanReadable)

Return the Dividend Distribution's static data

#### Returns

[`HumanReadable`](../wiki/api.entities.DividendDistribution.HumanReadable)

#### Overrides

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[toHuman](../wiki/api.entities.CorporateActionBase.CorporateActionBase#tohuman)

#### Defined in

[api/entities/DividendDistribution/index.ts:622](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DividendDistribution/index.ts#L622)

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

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[generateUuid](../wiki/api.entities.CorporateActionBase.CorporateActionBase#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L14)

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

[CorporateActionBase](../wiki/api.entities.CorporateActionBase.CorporateActionBase).[unserialize](../wiki/api.entities.CorporateActionBase.CorporateActionBase#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L23)

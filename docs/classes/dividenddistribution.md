# Class: DividendDistribution

Represents a Corporate Action via which a Security Token issuer wishes to distribute dividends
  between a subset of the Tokenholders (targets)

## Hierarchy

  ↳ [CorporateAction](corporateaction.md)

  ↳ **DividendDistribution**

## Index

### Properties

* [claim](dividenddistribution.md#claim)
* [context](dividenddistribution.md#protected-context)
* [currency](dividenddistribution.md#currency)
* [declarationDate](dividenddistribution.md#declarationdate)
* [defaultTaxWithholding](dividenddistribution.md#defaulttaxwithholding)
* [description](dividenddistribution.md#description)
* [expiryDate](dividenddistribution.md#expirydate)
* [id](dividenddistribution.md#id)
* [kind](dividenddistribution.md#protected-kind)
* [linkDocuments](dividenddistribution.md#linkdocuments)
* [maxAmount](dividenddistribution.md#maxamount)
* [modifyCheckpoint](dividenddistribution.md#modifycheckpoint)
* [origin](dividenddistribution.md#origin)
* [pay](dividenddistribution.md#pay)
* [paymentDate](dividenddistribution.md#paymentdate)
* [perShare](dividenddistribution.md#pershare)
* [reclaimFunds](dividenddistribution.md#reclaimfunds)
* [targets](dividenddistribution.md#targets)
* [taxWithholdings](dividenddistribution.md#taxwithholdings)
* [ticker](dividenddistribution.md#ticker)
* [uuid](dividenddistribution.md#uuid)

### Methods

* [checkpoint](dividenddistribution.md#checkpoint)
* [details](dividenddistribution.md#details)
* [exists](dividenddistribution.md#exists)
* [getParticipants](dividenddistribution.md#getparticipants)
* [getWithheldTax](dividenddistribution.md#getwithheldtax)
* [isEqual](dividenddistribution.md#isequal)
* [generateUuid](dividenddistribution.md#static-generateuuid)
* [unserialize](dividenddistribution.md#static-unserialize)

## Properties

###  claim

• **claim**: *ProcedureMethod‹void, void›*

*Defined in [src/api/entities/DividendDistribution/index.ts:154](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L154)*

Claim the dividends corresponding to the current Identity

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L48)*

___

###  currency

• **currency**: *string*

*Defined in [src/api/entities/DividendDistribution/index.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L70)*

ticker of the currency in which dividends are being distibuted

___

###  declarationDate

• **declarationDate**: *Date*

*Inherited from [CorporateAction](corporateaction.md).[declarationDate](corporateaction.md#declarationdate)*

*Defined in [src/api/entities/CorporateAction/index.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CorporateAction/index.ts#L70)*

date at which the Corporate Action was created

___

###  defaultTaxWithholding

• **defaultTaxWithholding**: *BigNumber*

*Inherited from [CorporateAction](corporateaction.md).[defaultTaxWithholding](corporateaction.md#defaulttaxwithholding)*

*Defined in [src/api/entities/CorporateAction/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CorporateAction/index.ts#L86)*

default percentage of tax withholding for this Corporate Action

___

###  description

• **description**: *string*

*Inherited from [CorporateAction](corporateaction.md).[description](corporateaction.md#description)*

*Defined in [src/api/entities/CorporateAction/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CorporateAction/index.ts#L75)*

brief text description of the Corporate Action

___

###  expiryDate

• **expiryDate**: *null | Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L86)*

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

___

###  id

• **id**: *BigNumber*

*Inherited from [CorporateAction](corporateaction.md).[id](corporateaction.md#id)*

*Defined in [src/api/entities/CorporateAction/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CorporateAction/index.ts#L60)*

internal Corporate Action ID

___

### `Protected` kind

• **kind**: *[UnpredictableBenefit](../enums/corporateactionkind.md#unpredictablebenefit)*

*Overrides [CorporateAction](corporateaction.md).[kind](corporateaction.md#protected-kind)*

*Defined in [src/api/entities/DividendDistribution/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L93)*

___

###  linkDocuments

• **linkDocuments**: *ProcedureMethod‹[LinkCaDocsParams](../interfaces/linkcadocsparams.md), void›*

*Inherited from [CorporateAction](corporateaction.md).[linkDocuments](corporateaction.md#linkdocuments)*

*Defined in [src/api/entities/CorporateAction/index.ts:148](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CorporateAction/index.ts#L148)*

Link a list of documents to this corporate action

**`param`** list of documents

**`note`** any previous links are removed in favor of the new list

**`note`** required role:
  - Corporate Actions Agent

___

###  maxAmount

• **maxAmount**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L81)*

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
  every Tokenholder receives their corresponding amount

___

###  modifyCheckpoint

• **modifyCheckpoint**: *ProcedureMethod‹ModifyDistributionCheckpointParams, void›*

*Overrides [CorporateAction](corporateaction.md).[modifyCheckpoint](corporateaction.md#modifycheckpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:159](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L159)*

Modify the Distribution's checkpoint

___

###  origin

• **origin**: *[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)*

*Defined in [src/api/entities/DividendDistribution/index.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L65)*

Portfolio from which the dividends will be distributed

___

###  pay

• **pay**: *ProcedureMethod‹[PayDividendsParams](../interfaces/paydividendsparams.md), void›*

*Defined in [src/api/entities/DividendDistribution/index.ts:164](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L164)*

Transfer the corresponding share of the dividends to a list of Identities

___

###  paymentDate

• **paymentDate**: *Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L91)*

date starting from which dividends can be paid/reclaimed

___

###  perShare

• **perShare**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L75)*

amount of `currency` to pay for each share the Tokenholder holds

___

###  reclaimFunds

• **reclaimFunds**: *ProcedureMethod‹void, void›*

*Defined in [src/api/entities/DividendDistribution/index.ts:174](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L174)*

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

**`note`** withheld taxes are also reclaimed in the same transaction

**`note`** required roles:
  - Origin Portfolio Custodian

___

###  targets

• **targets**: *[CorporateActionTargets](../interfaces/corporateactiontargets.md)*

*Inherited from [CorporateAction](corporateaction.md).[targets](corporateaction.md#targets)*

*Defined in [src/api/entities/CorporateAction/index.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CorporateAction/index.ts#L81)*

tokenholder identities related to this Corporate action. If the treatment is `Exclude`, the identities
  are not targeted by the Action, and any identities left out of the array will be targeted, and vice versa

___

###  taxWithholdings

• **taxWithholdings**: *[TaxWithholding](../interfaces/taxwithholding.md)[]*

*Inherited from [CorporateAction](corporateaction.md).[taxWithholdings](corporateaction.md#taxwithholdings)*

*Defined in [src/api/entities/CorporateAction/index.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CorporateAction/index.ts#L92)*

percentage of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

___

###  ticker

• **ticker**: *string*

*Inherited from [CorporateAction](corporateaction.md).[ticker](corporateaction.md#ticker)*

*Defined in [src/api/entities/CorporateAction/index.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/CorporateAction/index.ts#L65)*

ticker of the Security Token

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L46)*

## Methods

###  checkpoint

▸ **checkpoint**(): *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

*Overrides [CorporateAction](corporateaction.md).[checkpoint](corporateaction.md#checkpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:180](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L180)*

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
  the corresponding CheckpointSchedule is returned instead

**Returns:** *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

___

###  details

▸ **details**(): *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

*Defined in [src/api/entities/DividendDistribution/index.ts:199](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L199)*

Retrieve details associated with this Dividend Distribution

**Returns:** *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [CorporateAction](corporateaction.md).[exists](corporateaction.md#exists)*

*Defined in [src/api/entities/DividendDistribution/index.ts:190](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L190)*

Retrieve whether the Distribution exists

**Returns:** *Promise‹boolean›*

___

###  getParticipants

▸ **getParticipants**(): *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md)[]›*

*Defined in [src/api/entities/DividendDistribution/index.ts:225](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L225)*

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution (participants),
  the amount they are entitled to and whether they have been paid or not

**`note`** this request can take a lot of time with large amounts of Tokenholders

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be an empty array.
  This is because the Distribution participants cannot be determined without a Checkpoint

**Returns:** *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md)[]›*

___

###  getWithheldTax

▸ **getWithheldTax**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/DividendDistribution/index.ts:292](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DividendDistribution/index.ts#L292)*

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middleware

**Returns:** *Promise‹BigNumber›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹object›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹object› |

**Returns:** *boolean*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

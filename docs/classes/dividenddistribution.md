# DividendDistribution

Represents a Corporate Action via which a Security Token issuer wishes to distribute dividends between a subset of the Tokenholders \(targets\)

## Hierarchy

↳ [CorporateAction](corporateaction.md)

↳ **DividendDistribution**

## Index

### Properties

* [context](dividenddistribution.md#protected-context)
* [currency](dividenddistribution.md#currency)
* [declarationDate](dividenddistribution.md#declarationdate)
* [defaultTaxWithholding](dividenddistribution.md#defaulttaxwithholding)
* [description](dividenddistribution.md#description)
* [expiryDate](dividenddistribution.md#expirydate)
* [id](dividenddistribution.md#id)
* [kind](dividenddistribution.md#protected-kind)
* [maxAmount](dividenddistribution.md#maxamount)
* [origin](dividenddistribution.md#origin)
* [paymentDate](dividenddistribution.md#paymentdate)
* [perShare](dividenddistribution.md#pershare)
* [targets](dividenddistribution.md#targets)
* [taxWithholdings](dividenddistribution.md#taxwithholdings)
* [ticker](dividenddistribution.md#ticker)
* [uuid](dividenddistribution.md#uuid)

### Methods

* [checkpoint](dividenddistribution.md#checkpoint)
* [claim](dividenddistribution.md#claim)
* [details](dividenddistribution.md#details)
* [exists](dividenddistribution.md#exists)
* [getParticipant](dividenddistribution.md#getparticipant)
* [getParticipants](dividenddistribution.md#getparticipants)
* [getPaymentHistory](dividenddistribution.md#getpaymenthistory)
* [getWithheldTax](dividenddistribution.md#getwithheldtax)
* [isEqual](dividenddistribution.md#isequal)
* [linkDocuments](dividenddistribution.md#linkdocuments)
* [modifyCheckpoint](dividenddistribution.md#modifycheckpoint)
* [pay](dividenddistribution.md#pay)
* [reclaimFunds](dividenddistribution.md#reclaimfunds)
* [generateUuid](dividenddistribution.md#static-generateuuid)
* [unserialize](dividenddistribution.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### currency

• **currency**: _string_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L74)

ticker of the currency in which dividends are being distibuted

### declarationDate

• **declarationDate**: _Date_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_declarationDate_](corporateaction.md#declarationdate)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:70_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L70)

date at which the Corporate Action was created

### defaultTaxWithholding

• **defaultTaxWithholding**: _BigNumber_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_defaultTaxWithholding_](corporateaction.md#defaulttaxwithholding)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:86_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L86)

default percentage of tax withholding for this Corporate Action

### description

• **description**: _string_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_description_](corporateaction.md#description)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:75_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L75)

brief text description of the Corporate Action

### expiryDate

• **expiryDate**: _null \| Date_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:90_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L90)

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

### id

• **id**: _BigNumber_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_id_](corporateaction.md#id)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L60)

internal Corporate Action ID

### `Protected` kind

• **kind**: [_UnpredictableBenefit_](../enums/corporateactionkind.md#unpredictablebenefit)

_Overrides_ [_CorporateAction_](corporateaction.md)_._[_kind_](corporateaction.md#protected-kind)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:97_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L97)

### maxAmount

• **maxAmount**: _BigNumber_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:85_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L85)

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before every Tokenholder receives their corresponding amount

### origin

• **origin**: [_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:69_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L69)

Portfolio from which the dividends will be distributed

### paymentDate

• **paymentDate**: _Date_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:95_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L95)

date starting from which dividends can be paid/reclaimed

### perShare

• **perShare**: _BigNumber_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L79)

amount of `currency` to pay for each share the Tokenholder holds

### targets

• **targets**: [_CorporateActionTargets_](../interfaces/corporateactiontargets.md)

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_targets_](corporateaction.md#targets)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:81_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L81)

tokenholder identities related to this Corporate action. If the treatment is `Exclude`, the identities are not targeted by the Action, and any identities left out of the array will be targeted, and vice versa

### taxWithholdings

• **taxWithholdings**: [_TaxWithholding_](../interfaces/taxwithholding.md)_\[\]_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_taxWithholdings_](corporateaction.md#taxwithholdings)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:92_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L92)

percentage of tax withholding per Identity. Any Identity not present in this array uses the default tax withholding percentage

### ticker

• **ticker**: _string_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_ticker_](corporateaction.md#ticker)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:65_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L65)

ticker of the Security Token

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**\(\): _Promise‹_[_Checkpoint_](checkpoint.md) _\|_ [_CheckpointSchedule_](checkpointschedule.md)_›_

_Overrides_ [_CorporateAction_](corporateaction.md)_._[_checkpoint_](corporateaction.md#checkpoint)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:206_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L206)

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet, the corresponding CheckpointSchedule is returned instead

**Returns:** _Promise‹_[_Checkpoint_](checkpoint.md) _\|_ [_CheckpointSchedule_](checkpointschedule.md)_›_

### claim

▸ **claim**\(`args`: void\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:161_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L161)

Claim the dividends corresponding to the current Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `claim.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### details

▸ **details**\(\): _Promise‹_[_DividendDistributionDetails_](../interfaces/dividenddistributiondetails.md)_›_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:225_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L225)

Retrieve details associated with this Dividend Distribution

**Returns:** _Promise‹_[_DividendDistributionDetails_](../interfaces/dividenddistributiondetails.md)_›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Overrides_ [_CorporateAction_](corporateaction.md)_._[_exists_](corporateaction.md#exists)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:216_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L216)

Retrieve whether the Distribution exists

**Returns:** _Promise‹boolean›_

### getParticipant

▸ **getParticipant**\(`args?`: undefined \| object\): _Promise‹_[_DistributionParticipant_](../interfaces/distributionparticipant.md) _\| null›_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:311_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L311)

Retrieve an Identity that is entitled to dividends in this Distribution \(participant\), the amount it is entitled to and whether it has been paid or not

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be null. This is because the Distribution participant's corresponding payment cannot be determined without a Checkpoint

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_DistributionParticipant_](../interfaces/distributionparticipant.md) _\| null›_

### getParticipants

▸ **getParticipants**\(\): _Promise‹_[_DistributionParticipant_](../interfaces/distributionparticipant.md)_\[\]›_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:251_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L251)

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution \(participants\), the amount they are entitled to and whether they have been paid or not

**`note`** this request can take a lot of time with large amounts of Tokenholders

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be an empty array. This is because the Distribution participants cannot be determined without a Checkpoint

**Returns:** _Promise‹_[_DistributionParticipant_](../interfaces/distributionparticipant.md)_\[\]›_

### getPaymentHistory

▸ **getPaymentHistory**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_DistributionPayment_](../interfaces/distributionpayment.md)_››_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:406_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L406)

Retrieve the payment history for this Distribution

**`note`** uses the middleware

**`note`** supports pagination

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type |
| :--- | :--- |
| `size?` | undefined \| number |
| `start?` | undefined \| number |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_DistributionPayment_](../interfaces/distributionpayment.md)_››_

### getWithheldTax

▸ **getWithheldTax**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:384_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L384)

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middleware

**Returns:** _Promise‹BigNumber›_

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

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_linkDocuments_](corporateaction.md#linkdocuments)

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

▸ **modifyCheckpoint**\(`args`: ModifyDistributionCheckpointParams\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Overrides_ [_CorporateAction_](corporateaction.md)_._[_modifyCheckpoint_](corporateaction.md#modifycheckpoint)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:171_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L171)

Modify the Distribution's checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyCheckpoint.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | ModifyDistributionCheckpointParams |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### pay

▸ **pay**\(`args`: [PayDividendsParams](../interfaces/paydividendsparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:183_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L183)

Transfer the corresponding share of the dividends to a list of Identities

**`note`** due to performance issues, we do not validate that the distribution has enough remaining funds to pay the corresponding amount to the supplied Identities

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `pay.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [PayDividendsParams](../interfaces/paydividendsparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### reclaimFunds

▸ **reclaimFunds**\(`args`: void\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:198_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L198)

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

**`note`** withheld taxes are also reclaimed in the same transaction

**`note`** required roles:

* Origin Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `reclaimFunds.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |

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


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
* [toJson](dividenddistribution.md#tojson)
* [generateUuid](dividenddistribution.md#static-generateuuid)
* [unserialize](dividenddistribution.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L48)

### currency

• **currency**: _string_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:94_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L94)

ticker of the currency in which dividends are being distibuted

### declarationDate

• **declarationDate**: _Date_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_declarationDate_](corporateaction.md#declarationdate)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:82_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/index.ts#L82)

date at which the Corporate Action was created

### defaultTaxWithholding

• **defaultTaxWithholding**: _BigNumber_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_defaultTaxWithholding_](corporateaction.md#defaulttaxwithholding)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:98_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/index.ts#L98)

default percentage of tax withholding for this Corporate Action

### description

• **description**: _string_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_description_](corporateaction.md#description)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:87_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/index.ts#L87)

brief text description of the Corporate Action

### expiryDate

• **expiryDate**: _null \| Date_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:110_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L110)

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

### id

• **id**: _BigNumber_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_id_](corporateaction.md#id)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/index.ts#L72)

internal Corporate Action ID

### `Protected` kind

• **kind**: [_UnpredictableBenefit_](../enums/corporateactionkind.md#unpredictablebenefit)

_Overrides_ [_CorporateAction_](corporateaction.md)_._[_kind_](corporateaction.md#protected-kind)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:117_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L117)

### maxAmount

• **maxAmount**: _BigNumber_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:105_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L105)

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before every Tokenholder receives their corresponding amount

### origin

• **origin**: [_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:89_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L89)

Portfolio from which the dividends will be distributed

### paymentDate

• **paymentDate**: _Date_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:115_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L115)

date starting from which dividends can be paid/reclaimed

### perShare

• **perShare**: _BigNumber_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:99_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L99)

amount of `currency` to pay for each share the Tokenholder holds

### targets

• **targets**: [_CorporateActionTargets_](../interfaces/corporateactiontargets.md)

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_targets_](corporateaction.md#targets)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:93_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/index.ts#L93)

tokenholder identities related to this Corporate action. If the treatment is `Exclude`, the identities are not targeted by the Action, and any identities left out of the array will be targeted, and vice versa

### taxWithholdings

• **taxWithholdings**: [_TaxWithholding_](../interfaces/taxwithholding.md)_\[\]_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_taxWithholdings_](corporateaction.md#taxwithholdings)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:104_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/index.ts#L104)

percentage of tax withholding per Identity. Any Identity not present in this array uses the default tax withholding percentage

### ticker

• **ticker**: _string_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_ticker_](corporateaction.md#ticker)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:77_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/index.ts#L77)

ticker of the Security Token

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**\(\): _Promise‹_[_Checkpoint_](checkpoint.md) _\|_ [_CheckpointSchedule_](checkpointschedule.md)_›_

_Overrides_ [_CorporateAction_](corporateaction.md)_._[_checkpoint_](corporateaction.md#checkpoint)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:226_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L226)

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet, the corresponding CheckpointSchedule is returned instead

**Returns:** _Promise‹_[_Checkpoint_](checkpoint.md) _\|_ [_CheckpointSchedule_](checkpointschedule.md)_›_

### claim

▸ **claim**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:181_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L181)

Claim the dividends corresponding to the current Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `claim.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### details

▸ **details**\(\): _Promise‹_[_DividendDistributionDetails_](../interfaces/dividenddistributiondetails.md)_›_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:245_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L245)

Retrieve details associated with this Dividend Distribution

**Returns:** _Promise‹_[_DividendDistributionDetails_](../interfaces/dividenddistributiondetails.md)_›_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Overrides_ [_CorporateAction_](corporateaction.md)_._[_exists_](corporateaction.md#exists)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:236_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L236)

Retrieve whether the Distribution exists

**Returns:** _Promise‹boolean›_

### getParticipant

▸ **getParticipant**\(`args?`: undefined \| object\): _Promise‹_[_DistributionParticipant_](../interfaces/distributionparticipant.md) _\| null›_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:331_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L331)

Retrieve an Identity that is entitled to dividends in this Distribution \(participant\), the amount it is entitled to and whether it has been paid or not

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be null. This is because the Distribution participant's corresponding payment cannot be determined without a Checkpoint

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_DistributionParticipant_](../interfaces/distributionparticipant.md) _\| null›_

### getParticipants

▸ **getParticipants**\(\): _Promise‹_[_DistributionParticipant_](../interfaces/distributionparticipant.md)_\[\]›_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:271_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L271)

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution \(participants\), the amount they are entitled to and whether they have been paid or not

**`note`** this request can take a lot of time with large amounts of Tokenholders

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be an empty array. This is because the Distribution participants cannot be determined without a Checkpoint

**Returns:** _Promise‹_[_DistributionParticipant_](../interfaces/distributionparticipant.md)_\[\]›_

### getPaymentHistory

▸ **getPaymentHistory**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_DistributionPayment_](../interfaces/distributionpayment.md)_››_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:426_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L426)

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

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:404_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L404)

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middleware

**Returns:** _Promise‹BigNumber›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### linkDocuments

▸ **linkDocuments**\(`args`: [LinkCaDocsParams](../interfaces/linkcadocsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_CorporateAction_](corporateaction.md)_._[_linkDocuments_](corporateaction.md#linkdocuments)

_Defined in_ [_src/api/entities/CorporateAction/index.ts:161_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/index.ts#L161)

Link a list of documents to this corporate action

**`note`** any previous links are removed in favor of the new list

**`note`** required role:

* Corporate Actions Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `linkDocuments.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [LinkCaDocsParams](../interfaces/linkcadocsparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### modifyCheckpoint

▸ **modifyCheckpoint**\(`args`: ModifyDistributionCheckpointParams, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Overrides_ [_CorporateAction_](corporateaction.md)_._[_modifyCheckpoint_](corporateaction.md#modifycheckpoint)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:191_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L191)

Modify the Distribution's checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyCheckpoint.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | ModifyDistributionCheckpointParams |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### pay

▸ **pay**\(`args`: [PayDividendsParams](../interfaces/paydividendsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:203_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L203)

Transfer the corresponding share of the dividends to a list of Identities

**`note`** due to performance issues, we do not validate that the distribution has enough remaining funds to pay the corresponding amount to the supplied Identities

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `pay.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [PayDividendsParams](../interfaces/paydividendsparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### reclaimFunds

▸ **reclaimFunds**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:218_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L218)

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

**`note`** withheld taxes are also reclaimed in the same transaction

**`note`** required roles:

* Origin Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `reclaimFunds.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### toJson

▸ **toJson**\(\): [_HumanReadable_](../interfaces/humanreadable.md)

_Overrides_ [_CorporateAction_](corporateaction.md)_._[_toJson_](corporateaction.md#tojson)

_Defined in_ [_src/api/entities/DividendDistribution/index.ts:515_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/DividendDistribution/index.ts#L515)

Return the Dividend Distribution's static data

**Returns:** [_HumanReadable_](../interfaces/humanreadable.md)

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


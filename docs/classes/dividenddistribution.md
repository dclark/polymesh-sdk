# Class: DividendDistribution

Represents a Corporate Action via which a Security Token issuer wishes to distribute dividends
  between a subset of the Tokenholders (targets)

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

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)*

___

###  currency

• **currency**: *string*

*Defined in [src/api/entities/DividendDistribution/index.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L74)*

ticker of the currency in which dividends are being distibuted

___

###  declarationDate

• **declarationDate**: *Date*

*Inherited from [CorporateAction](corporateaction.md).[declarationDate](corporateaction.md#declarationdate)*

*Defined in [src/api/entities/CorporateAction/index.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L70)*

date at which the Corporate Action was created

___

###  defaultTaxWithholding

• **defaultTaxWithholding**: *BigNumber*

*Inherited from [CorporateAction](corporateaction.md).[defaultTaxWithholding](corporateaction.md#defaulttaxwithholding)*

*Defined in [src/api/entities/CorporateAction/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L86)*

default percentage of tax withholding for this Corporate Action

___

###  description

• **description**: *string*

*Inherited from [CorporateAction](corporateaction.md).[description](corporateaction.md#description)*

*Defined in [src/api/entities/CorporateAction/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L75)*

brief text description of the Corporate Action

___

###  expiryDate

• **expiryDate**: *null | Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:90](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L90)*

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

___

###  id

• **id**: *BigNumber*

*Inherited from [CorporateAction](corporateaction.md).[id](corporateaction.md#id)*

*Defined in [src/api/entities/CorporateAction/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L60)*

internal Corporate Action ID

___

### `Protected` kind

• **kind**: *[UnpredictableBenefit](../enums/corporateactionkind.md#unpredictablebenefit)*

*Overrides [CorporateAction](corporateaction.md).[kind](corporateaction.md#protected-kind)*

*Defined in [src/api/entities/DividendDistribution/index.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L97)*

___

###  maxAmount

• **maxAmount**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:85](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L85)*

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
  every Tokenholder receives their corresponding amount

___

###  origin

• **origin**: *[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)*

*Defined in [src/api/entities/DividendDistribution/index.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L69)*

Portfolio from which the dividends will be distributed

___

###  paymentDate

• **paymentDate**: *Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L95)*

date starting from which dividends can be paid/reclaimed

___

###  perShare

• **perShare**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L79)*

amount of `currency` to pay for each share the Tokenholder holds

___

###  targets

• **targets**: *[CorporateActionTargets](../interfaces/corporateactiontargets.md)*

*Inherited from [CorporateAction](corporateaction.md).[targets](corporateaction.md#targets)*

*Defined in [src/api/entities/CorporateAction/index.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L81)*

tokenholder identities related to this Corporate action. If the treatment is `Exclude`, the identities
  are not targeted by the Action, and any identities left out of the array will be targeted, and vice versa

___

###  taxWithholdings

• **taxWithholdings**: *[TaxWithholding](../interfaces/taxwithholding.md)[]*

*Inherited from [CorporateAction](corporateaction.md).[taxWithholdings](corporateaction.md#taxwithholdings)*

*Defined in [src/api/entities/CorporateAction/index.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L92)*

percentage of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

___

###  ticker

• **ticker**: *string*

*Inherited from [CorporateAction](corporateaction.md).[ticker](corporateaction.md#ticker)*

*Defined in [src/api/entities/CorporateAction/index.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L65)*

ticker of the Security Token

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)*

## Methods

###  checkpoint

▸ **checkpoint**(): *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

*Overrides [CorporateAction](corporateaction.md).[checkpoint](corporateaction.md#checkpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:206](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L206)*

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
  the corresponding CheckpointSchedule is returned instead

**Returns:** *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

___

###  claim

▸ **claim**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:161](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L161)*

Claim the dividends corresponding to the current Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `claim.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  details

▸ **details**(): *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

*Defined in [src/api/entities/DividendDistribution/index.ts:225](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L225)*

Retrieve details associated with this Dividend Distribution

**Returns:** *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [CorporateAction](corporateaction.md).[exists](corporateaction.md#exists)*

*Defined in [src/api/entities/DividendDistribution/index.ts:216](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L216)*

Retrieve whether the Distribution exists

**Returns:** *Promise‹boolean›*

___

###  getParticipant

▸ **getParticipant**(`args?`: undefined | object): *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md) | null›*

*Defined in [src/api/entities/DividendDistribution/index.ts:311](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L311)*

Retrieve an Identity that is entitled to dividends in this Distribution (participant),
  the amount it is entitled to and whether it has been paid or not

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be null.
  This is because the Distribution participant's corresponding payment cannot be determined without a Checkpoint

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md) | null›*

___

###  getParticipants

▸ **getParticipants**(): *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md)[]›*

*Defined in [src/api/entities/DividendDistribution/index.ts:251](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L251)*

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution (participants),
  the amount they are entitled to and whether they have been paid or not

**`note`** this request can take a lot of time with large amounts of Tokenholders

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be an empty array.
  This is because the Distribution participants cannot be determined without a Checkpoint

**Returns:** *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md)[]›*

___

###  getPaymentHistory

▸ **getPaymentHistory**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[DistributionPayment](../interfaces/distributionpayment.md)››*

*Defined in [src/api/entities/DividendDistribution/index.ts:406](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L406)*

Retrieve the payment history for this Distribution

**`note`** uses the middleware

**`note`** supports pagination

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |
`start?` | undefined &#124; number |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[DistributionPayment](../interfaces/distributionpayment.md)››*

___

###  getWithheldTax

▸ **getWithheldTax**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/DividendDistribution/index.ts:384](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L384)*

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middleware

**Returns:** *Promise‹BigNumber›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown› |

**Returns:** *boolean*

___

###  linkDocuments

▸ **linkDocuments**(`args`: [LinkCaDocsParams](../interfaces/linkcadocsparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [CorporateAction](corporateaction.md).[linkDocuments](corporateaction.md#linkdocuments)*

*Defined in [src/api/entities/CorporateAction/index.ts:149](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CorporateAction/index.ts#L149)*

Link a list of documents to this corporate action

**`note`** any previous links are removed in favor of the new list

**`note`** required role:
  - Corporate Actions Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `linkDocuments.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [LinkCaDocsParams](../interfaces/linkcadocsparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  modifyCheckpoint

▸ **modifyCheckpoint**(`args`: ModifyDistributionCheckpointParams): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Overrides [CorporateAction](corporateaction.md).[modifyCheckpoint](corporateaction.md#modifycheckpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:171](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L171)*

Modify the Distribution's checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyCheckpoint.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | ModifyDistributionCheckpointParams |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  pay

▸ **pay**(`args`: [PayDividendsParams](../interfaces/paydividendsparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L183)*

Transfer the corresponding share of the dividends to a list of Identities

**`note`** due to performance issues, we do not validate that the distribution has enough remaining funds to pay the corresponding amount to the supplied Identities

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `pay.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [PayDividendsParams](../interfaces/paydividendsparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  reclaimFunds

▸ **reclaimFunds**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:198](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DividendDistribution/index.ts#L198)*

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

**`note`** withheld taxes are also reclaimed in the same transaction

**`note`** required roles:
  - Origin Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `reclaimFunds.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/configureDividendDistribution](../modules/api_procedures_configureDividendDistribution.md) / ConfigureDividendDistributionParams

# Interface: ConfigureDividendDistributionParams

[api/procedures/configureDividendDistribution](../modules/api_procedures_configureDividendDistribution.md).ConfigureDividendDistributionParams

## Table of contents

### Properties

- [checkpoint](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#checkpoint)
- [currency](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#currency)
- [declarationDate](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#declarationdate)
- [defaultTaxWithholding](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#defaulttaxwithholding)
- [description](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#description)
- [expiryDate](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#expirydate)
- [maxAmount](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#maxamount)
- [originPortfolio](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#originportfolio)
- [paymentDate](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#paymentdate)
- [perShare](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#pershare)
- [targets](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#targets)
- [taxWithholdings](api_procedures_configureDividendDistribution.ConfigureDividendDistributionParams.md#taxwithholdings)

## Properties

### checkpoint

• **checkpoint**: [`InputCaCheckpoint`](../modules/api_entities_Asset_Checkpoints_types.md#inputcacheckpoint)

checkpoint to be used to calculate Dividends. If a Schedule is passed, the next Checkpoint it creates will be used.
  If a Date is passed, a Checkpoint will be created at that date and used

#### Defined in

[api/procedures/configureDividendDistribution.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L93)

___

### currency

• **currency**: `string`

ticker of the currency in which Dividends will be distributed

#### Defined in

[api/procedures/configureDividendDistribution.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L101)

___

### declarationDate

• `Optional` **declarationDate**: `Date`

date at which the issuer publicly declared the Dividend Distribution. Optional, defaults to the current date

#### Defined in

[api/procedures/configureDividendDistribution.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L72)

___

### defaultTaxWithholding

• `Optional` **defaultTaxWithholding**: `BigNumber`

default percentage (0-100) of the Benefits to be held for tax purposes

#### Defined in

[api/procedures/configureDividendDistribution.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L83)

___

### description

• **description**: `string`

#### Defined in

[api/procedures/configureDividendDistribution.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L73)

___

### expiryDate

• `Optional` **expiryDate**: `Date`

optional, defaults to never expiring

#### Defined in

[api/procedures/configureDividendDistribution.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L117)

___

### maxAmount

• **maxAmount**: `BigNumber`

maximum amount of `currency` to distribute in total

#### Defined in

[api/procedures/configureDividendDistribution.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L109)

___

### originPortfolio

• `Optional` **originPortfolio**: `BigNumber` \| [`NumberedPortfolio`](../classes/api_entities_NumberedPortfolio.NumberedPortfolio.md)

portfolio from which the Dividends will be distributed. Optional, defaults to the Dividend Distributions Agent's Default Portfolio

#### Defined in

[api/procedures/configureDividendDistribution.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L97)

___

### paymentDate

• **paymentDate**: `Date`

date from which Asset Holders can claim their Dividends

#### Defined in

[api/procedures/configureDividendDistribution.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L113)

___

### perShare

• **perShare**: `BigNumber`

amount of `currency` to distribute per each share of the Asset that a target holds

#### Defined in

[api/procedures/configureDividendDistribution.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L105)

___

### targets

• `Optional` **targets**: [`InputCorporateActionTargets`](../modules/types.md#inputcorporateactiontargets)

Asset Holder Identities to be included (or excluded) from the Dividend Distribution. Inclusion/exclusion is controlled by the `treatment`
  property. When the value is `Include`, all Asset Holders not present in the array are excluded, and vice-versa. If no value is passed,
  the default value for the Asset is used. If there is no default value, all Asset Holders will be part of the Dividend Distribution

#### Defined in

[api/procedures/configureDividendDistribution.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L79)

___

### taxWithholdings

• `Optional` **taxWithholdings**: [`InputCorporateActionTaxWithholdings`](../modules/types.md#inputcorporateactiontaxwithholdings)

percentage (0-100) of the Benefits to be held for tax purposes from individual Asset Holder Identities.
  This overrides the value of `defaultTaxWithholding`

#### Defined in

[api/procedures/configureDividendDistribution.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/configureDividendDistribution.ts#L88)

# Class: Distributions

Handles all Security Token Distributions related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Distributions**

## Index

### Properties

* [configureDividendDistribution](distributions.md#configuredividenddistribution)
* [context](distributions.md#protected-context)
* [parent](distributions.md#protected-parent)

### Methods

* [get](distributions.md#get)

## Properties

###  configureDividendDistribution

• **configureDividendDistribution**: *ProcedureMethod‹[ConfigureDividendDistributionParams](../globals.md#configuredividenddistributionparams), [DividendDistribution](dividenddistribution.md)›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/Distributions.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L52)*

Create a Dividend Distribution for a subset of the Tokenholders at a certain (existing or future) Checkpoint

**`param`** date at which the issuer publicly declared the Distribution. Optional, defaults to the current date

**`param`** checkpoint to be used to calculate Dividends. If a Schedule is passed, the next Checkpoint it creates will be used.
  If a Date is passed, a Checkpoint will be created at that date and used

**`param`** tokenholder identities to be included (or excluded) from the distribution. Inclusion/exclusion is controlled by the `treatment`
  property. When the value is `Include`, all tokenholders not present in the array are excluded, and vice-versa

**`param`** default percentage of the Dividends to be held for tax purposes

**`param`** percentage of the Dividends to be held for tax purposes from individual tokenholder Identities.
  This overrides the value of `defaultTaxWithholding`

**`param`** portfolio from which the Dividends will be distributed. Optional, defaults to the Corporate Actions Agent's Default Portfolio

**`param`** ticker of the currency in which Dividends will be distributed

**`param`** amount of `currency` to distribute per each share of the Security Token held

**`param`** maximum amount of `currency` to distribute in total

**`param`** date from which Tokenholders can claim their Dividends

**`param`** a null value means the Distribution never expires

**`note`** required roles:
  - Security Token Corporate Actions Agent
  - Origin Portfolio Custodian

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L9)*

## Methods

###  get

▸ **get**(): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/Distributions.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L74)*

Retrieve all Dividend Distributions associated to this Security Token

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

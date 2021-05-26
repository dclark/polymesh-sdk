# Class: Portfolios

Handles all Portfolio related functionality on the Identity side

## Hierarchy

* Namespace‹[Identity](identity.md)›

  ↳ **Portfolios**

## Index

### Properties

* [context](portfolios.md#protected-context)
* [create](portfolios.md#create)
* [delete](portfolios.md#delete)
* [parent](portfolios.md#protected-parent)

### Methods

* [getCustodiedPortfolios](portfolios.md#getcustodiedportfolios)
* [getPortfolio](portfolios.md#getportfolio)
* [getPortfolios](portfolios.md#getportfolios)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L11)*

___

###  create

• **create**: *ProcedureMethod‹object, [NumberedPortfolio](numberedportfolio.md)›*

*Defined in [src/api/entities/Identity/Portfolios.ts:162](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Identity/Portfolios.ts#L162)*

Create a new Portfolio for the Identity

___

###  delete

• **delete**: *ProcedureMethod‹object, void›*

*Defined in [src/api/entities/Identity/Portfolios.ts:170](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Identity/Portfolios.ts#L170)*

Delete a Portfolio by ID

**`note`** required role:
  - Portfolio Custodian

___

### `Protected` parent

• **parent**: *[Identity](identity.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L9)*

## Methods

###  getCustodiedPortfolios

▸ **getCustodiedPortfolios**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)››*

*Defined in [src/api/entities/Identity/Portfolios.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Identity/Portfolios.ts#L81)*

Retrieve all Portfolios custodied by this Identity.
  This only includes portfolios owned by a different Identity but custodied by this one.
  To fetch Portfolios owned by this Identity, use [getPortfolios](portfolios.md#getportfolios)

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)››*

___

###  getPortfolio

▸ **getPortfolio**(): *Promise‹[DefaultPortfolio](defaultportfolio.md)›*

*Defined in [src/api/entities/Identity/Portfolios.ts:128](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Identity/Portfolios.ts#L128)*

Retrieve a numbered Portfolio or the default Portfolio if Portfolio ID is not passed

**Returns:** *Promise‹[DefaultPortfolio](defaultportfolio.md)›*

▸ **getPortfolio**(`args`: object): *Promise‹[NumberedPortfolio](numberedportfolio.md)›*

*Defined in [src/api/entities/Identity/Portfolios.ts:129](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Identity/Portfolios.ts#L129)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`portfolioId` | BigNumber |

**Returns:** *Promise‹[NumberedPortfolio](numberedportfolio.md)›*

___

###  getPortfolios

▸ **getPortfolios**(): *Promise‹[[DefaultPortfolio](defaultportfolio.md), [NumberedPortfolio](numberedportfolio.md)]›*

*Defined in [src/api/entities/Identity/Portfolios.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Identity/Portfolios.ts#L50)*

Retrieve all the Portfolios owned by this Identity

**Returns:** *Promise‹[[DefaultPortfolio](defaultportfolio.md), [NumberedPortfolio](numberedportfolio.md)]›*

# Portfolios

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

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L11)

### create

• **create**: _ProcedureMethod‹object,_ [_NumberedPortfolio_](numberedportfolio.md)_›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:154_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/Portfolios.ts#L154)

Create a new Portfolio for the Identity

### delete

• **delete**: _ProcedureMethod‹object, void›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:162_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/Portfolios.ts#L162)

Delete a Portfolio by ID

**`note`** required role:

* Portfolio Custodian

### `Protected` parent

• **parent**: [_Identity_](identity.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L9)

## Methods

### getCustodiedPortfolios

▸ **getCustodiedPortfolios**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)_››_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:73_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/Portfolios.ts#L73)

Retrieve all Portfolios custodied by this Identity. This only includes portfolios owned by a different Identity but custodied by this one. To fetch Portfolios owned by this Identity, use [getPortfolios](portfolios.md#getportfolios)

**`note`** supports pagination

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)_››_

### getPortfolio

▸ **getPortfolio**\(\): _Promise‹_[_DefaultPortfolio_](defaultportfolio.md)_›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:120_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/Portfolios.ts#L120)

Retrieve a numbered Portfolio or the default Portfolio if Portfolio ID is not passed

**Returns:** _Promise‹_[_DefaultPortfolio_](defaultportfolio.md)_›_

▸ **getPortfolio**\(`args`: object\): _Promise‹_[_NumberedPortfolio_](numberedportfolio.md)_›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:121_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/Portfolios.ts#L121)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `portfolioId` | BigNumber |

**Returns:** _Promise‹_[_NumberedPortfolio_](numberedportfolio.md)_›_

### getPortfolios

▸ **getPortfolios**\(\): _Promise‹\[_[_DefaultPortfolio_](defaultportfolio.md)_,_ [_NumberedPortfolio_](numberedportfolio.md)_\]›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:42_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Identity/Portfolios.ts#L42)

Retrieve all the Portfolios owned by this Identity

**Returns:** _Promise‹\[_[_DefaultPortfolio_](defaultportfolio.md)_,_ [_NumberedPortfolio_](numberedportfolio.md)_\]›_


# Portfolios

Handles all Portfolio related functionality on the Identity side

## Hierarchy

* Namespace‹[Identity](identity.md)›

  ↳ **Portfolios**

## Index

### Properties

* [context](portfolios.md#protected-context)
* [parent](portfolios.md#protected-parent)

### Methods

* [create](portfolios.md#create)
* [delete](portfolios.md#delete)
* [getCustodiedPortfolios](portfolios.md#getcustodiedportfolios)
* [getPortfolio](portfolios.md#getportfolio)
* [getPortfolios](portfolios.md#getportfolios)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:12_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L12)

### `Protected` parent

• **parent**: [_Identity_](identity.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:10_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L10)

## Methods

### create

▸ **create**\(`args`: object\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_NumberedPortfolio_](numberedportfolio.md)_››_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:113_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L113)

Create a new Portfolio for the Identity

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `name` | string |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_NumberedPortfolio_](numberedportfolio.md)_››_

### delete

▸ **delete**\(`args`: object\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:120_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L120)

Delete a Portfolio by ID

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `portfolio` | BigNumber \| [NumberedPortfolio](numberedportfolio.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### getCustodiedPortfolios

▸ **getCustodiedPortfolios**\(\): _Promise‹\(_[_DefaultPortfolio_](defaultportfolio.md)_‹› \|_ [_NumberedPortfolio_](numberedportfolio.md)_‹›\)\[\]›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:49_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L49)

Retrieve all Portfolios custodied by this Identity. This only includes portfolios owned by a different Identity but custodied by this one. To fetch Portfolios owned by this Identity, use [getPortfolios](portfolios.md#getportfolios)

**Returns:** _Promise‹\(_[_DefaultPortfolio_](defaultportfolio.md)_‹› \|_ [_NumberedPortfolio_](numberedportfolio.md)_‹›\)\[\]›_

### getPortfolio

▸ **getPortfolio**\(`args?`: undefined \| object\): _Promise‹_[_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)_›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:83_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L83)

Retrieve a numbered Portfolio or the default Portfolio if Portfolio ID is not passed

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)_›_

### getPortfolios

▸ **getPortfolios**\(\): _Promise‹\[_[_DefaultPortfolio_](defaultportfolio.md)_,_ [_NumberedPortfolio_](numberedportfolio.md)_\]›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:18_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L18)

Retrieve all the Portfolios owned by this Identity

**Returns:** _Promise‹\[_[_DefaultPortfolio_](defaultportfolio.md)_,_ [_NumberedPortfolio_](numberedportfolio.md)_\]›_


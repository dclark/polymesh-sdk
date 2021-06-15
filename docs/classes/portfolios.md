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

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_Identity_](identity.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)

## Methods

### create

▸ **create**\(`args`: object\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_NumberedPortfolio_](numberedportfolio.md)_››_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:165_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L165)

Create a new Portfolio for the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `create.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `name` | string |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_NumberedPortfolio_](numberedportfolio.md)_››_

### delete

▸ **delete**\(`args`: object\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:178_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L178)

Delete a Portfolio by ID

**`note`** required role:

* Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `delete.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `portfolio` | BigNumber \| [NumberedPortfolio](numberedportfolio.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### getCustodiedPortfolios

▸ **getCustodiedPortfolios**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)_››_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:81_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L81)

Retrieve all Portfolios custodied by this Identity. This only includes portfolios owned by a different Identity but custodied by this one. To fetch Portfolios owned by this Identity, use [getPortfolios](portfolios.md#getportfolios)

**`note`** supports pagination

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)_››_

### getPortfolio

▸ **getPortfolio**\(\): _Promise‹_[_DefaultPortfolio_](defaultportfolio.md)_›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:128_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L128)

Retrieve a numbered Portfolio or the default Portfolio if Portfolio ID is not passed

**Returns:** _Promise‹_[_DefaultPortfolio_](defaultportfolio.md)_›_

▸ **getPortfolio**\(`args`: object\): _Promise‹_[_NumberedPortfolio_](numberedportfolio.md)_›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:129_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L129)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `portfolioId` | BigNumber |

**Returns:** _Promise‹_[_NumberedPortfolio_](numberedportfolio.md)_›_

### getPortfolios

▸ **getPortfolios**\(\): _Promise‹\[\]›_

_Defined in_ [_src/api/entities/Identity/Portfolios.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L50)

Retrieve all the Portfolios owned by this Identity

**Returns:** _Promise‹\[\]›_


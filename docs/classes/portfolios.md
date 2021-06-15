# Class: Portfolios

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

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Identity](identity.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)*

## Methods

###  create

▸ **create**(`args`: object): *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

*Defined in [src/api/entities/Identity/Portfolios.ts:165](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L165)*

Create a new Portfolio for the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `create.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

___

###  delete

▸ **delete**(`args`: object): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Identity/Portfolios.ts:178](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L178)*

Delete a Portfolio by ID

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `delete.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`portfolio` | BigNumber &#124; [NumberedPortfolio](numberedportfolio.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  getCustodiedPortfolios

▸ **getCustodiedPortfolios**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)››*

*Defined in [src/api/entities/Identity/Portfolios.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L81)*

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

*Defined in [src/api/entities/Identity/Portfolios.ts:128](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L128)*

Retrieve a numbered Portfolio or the default Portfolio if Portfolio ID is not passed

**Returns:** *Promise‹[DefaultPortfolio](defaultportfolio.md)›*

▸ **getPortfolio**(`args`: object): *Promise‹[NumberedPortfolio](numberedportfolio.md)›*

*Defined in [src/api/entities/Identity/Portfolios.ts:129](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L129)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`portfolioId` | BigNumber |

**Returns:** *Promise‹[NumberedPortfolio](numberedportfolio.md)›*

___

###  getPortfolios

▸ **getPortfolios**(): *Promise‹[]›*

*Defined in [src/api/entities/Identity/Portfolios.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Identity/Portfolios.ts#L50)*

Retrieve all the Portfolios owned by this Identity

**Returns:** *Promise‹[]›*

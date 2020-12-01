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

*Defined in [src/api/entities/Namespace.ts:12](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L12)*

___

### `Protected` parent

• **parent**: *[Identity](identity.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L10)*

## Methods

###  create

▸ **create**(`args`: object): *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

*Defined in [src/api/entities/Identity/Portfolios.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L113)*

Create a new Portfolio for the Identity

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

___

###  delete

▸ **delete**(`args`: object): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Identity/Portfolios.ts:120](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L120)*

Delete a Portfolio by ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`portfolio` | BigNumber &#124; [NumberedPortfolio](numberedportfolio.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  getCustodiedPortfolios

▸ **getCustodiedPortfolios**(): *Promise‹([DefaultPortfolio](defaultportfolio.md)‹› | [NumberedPortfolio](numberedportfolio.md)‹›)[]›*

*Defined in [src/api/entities/Identity/Portfolios.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L49)*

Retrieve all Portfolios custodied by this Identity.
  This only includes portfolios owned by a different Identity but custodied by this one.
  To fetch Portfolios owned by this Identity, use [getPortfolios](portfolios.md#getportfolios)

**Returns:** *Promise‹([DefaultPortfolio](defaultportfolio.md)‹› | [NumberedPortfolio](numberedportfolio.md)‹›)[]›*

___

###  getPortfolio

▸ **getPortfolio**(`args?`: undefined | object): *Promise‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)›*

*Defined in [src/api/entities/Identity/Portfolios.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L83)*

Retrieve a numbered Portfolio or the default Portfolio if Portfolio ID is not passed

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)›*

___

###  getPortfolios

▸ **getPortfolios**(): *Promise‹[[DefaultPortfolio](defaultportfolio.md), [NumberedPortfolio](numberedportfolio.md)]›*

*Defined in [src/api/entities/Identity/Portfolios.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/Portfolios.ts#L18)*

Retrieve all the Portfolios owned by this Identity

**Returns:** *Promise‹[[DefaultPortfolio](defaultportfolio.md), [NumberedPortfolio](numberedportfolio.md)]›*

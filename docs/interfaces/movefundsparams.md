# MoveFundsParams

## Hierarchy

* **MoveFundsParams**

## Index

### Properties

* [items](movefundsparams.md#items)
* [to](movefundsparams.md#optional-to)

## Properties

### items

• **items**: [_PortfolioMovement_](portfoliomovement.md)_\[\]_

_Defined in_ [_src/api/procedures/moveFunds.ts:21_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/procedures/moveFunds.ts#L21)

list of tokens \(and their corresponding amounts\) that will be moved

### `Optional` to

• **to**? : _BigNumber \|_ [_DefaultPortfolio_](../classes/defaultportfolio.md) _\|_ [_NumberedPortfolio_](../classes/numberedportfolio.md)

_Defined in_ [_src/api/procedures/moveFunds.ts:17_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/procedures/moveFunds.ts#L17)

portfolio \(or portfolio ID\) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner


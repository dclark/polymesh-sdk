[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/moveFunds](../modules/api_procedures_moveFunds.md) / MoveFundsParams

# Interface: MoveFundsParams

[api/procedures/moveFunds](../modules/api_procedures_moveFunds.md).MoveFundsParams

## Table of contents

### Properties

- [items](api_procedures_moveFunds.MoveFundsParams.md#items)
- [to](api_procedures_moveFunds.MoveFundsParams.md#to)

## Properties

### items

• **items**: [`PortfolioMovement`](types.PortfolioMovement.md)[]

list of Assets (and the corresponding token amounts) that will be moved

#### Defined in

[api/procedures/moveFunds.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/moveFunds.ts#L22)

___

### to

• `Optional` **to**: `BigNumber` \| [`NumberedPortfolio`](../classes/api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](../classes/api_entities_DefaultPortfolio.DefaultPortfolio.md)

portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner

#### Defined in

[api/procedures/moveFunds.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/moveFunds.ts#L18)

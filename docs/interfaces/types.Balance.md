[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / Balance

# Interface: Balance

[types](../modules/types.md).Balance

## Hierarchy

- **`Balance`**

  ↳ [`PortfolioBalance`](api_entities_Portfolio_types.PortfolioBalance.md)

## Table of contents

### Properties

- [free](types.Balance.md#free)
- [locked](types.Balance.md#locked)
- [total](types.Balance.md#total)

## Properties

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Defined in

[types/index.ts:671](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L671)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Defined in

[types/index.ts:675](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L675)

___

### total

• **total**: `BigNumber`

free + locked

#### Defined in

[types/index.ts:679](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L679)

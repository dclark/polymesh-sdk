# Interface: Balance

[types](../wiki/types).Balance

## Hierarchy

- **`Balance`**

  ↳ [`PortfolioBalance`](../wiki/api.entities.Portfolio.types.PortfolioBalance)

## Table of contents

### Properties

- [free](../wiki/types.Balance#free)
- [locked](../wiki/types.Balance#locked)
- [total](../wiki/types.Balance#total)

## Properties

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Defined in

[types/index.ts:674](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L674)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Defined in

[types/index.ts:678](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L678)

___

### total

• **total**: `BigNumber`

free + locked

#### Defined in

[types/index.ts:682](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L682)

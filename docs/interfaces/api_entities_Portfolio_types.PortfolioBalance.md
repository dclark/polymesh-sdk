[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Portfolio/types](../modules/api_entities_Portfolio_types.md) / PortfolioBalance

# Interface: PortfolioBalance

[api/entities/Portfolio/types](../modules/api_entities_Portfolio_types.md).PortfolioBalance

## Hierarchy

- [`Balance`](types.Balance.md)

  ↳ **`PortfolioBalance`**

## Table of contents

### Properties

- [asset](api_entities_Portfolio_types.PortfolioBalance.md#asset)
- [free](api_entities_Portfolio_types.PortfolioBalance.md#free)
- [locked](api_entities_Portfolio_types.PortfolioBalance.md#locked)
- [total](api_entities_Portfolio_types.PortfolioBalance.md#total)

## Properties

### asset

• **asset**: [`Asset`](../classes/api_entities_Asset.Asset.md)

#### Defined in

[api/entities/Portfolio/types.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/types.ts#L11)

___

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Inherited from

[Balance](types.Balance.md).[free](types.Balance.md#free)

#### Defined in

[types/index.ts:671](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L671)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Inherited from

[Balance](types.Balance.md).[locked](types.Balance.md#locked)

#### Defined in

[types/index.ts:675](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L675)

___

### total

• **total**: `BigNumber`

free + locked

#### Inherited from

[Balance](types.Balance.md).[total](types.Balance.md#total)

#### Defined in

[types/index.ts:679](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L679)

# Interface: PortfolioBalance

## Hierarchy

* [Balance](balance.md)

  ↳ **PortfolioBalance**

## Index

### Properties

* [asset](portfoliobalance.md#asset)
* [free](portfoliobalance.md#free)
* [locked](portfoliobalance.md#locked)
* [total](portfoliobalance.md#total)

## Properties

###  asset

• **asset**: *[Asset](../classes/asset.md)*

*Defined in [src/api/entities/Portfolio/types.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/api/entities/Portfolio/types.ts#L11)*

___

###  free

• **free**: *BigNumber*

*Inherited from [PortfolioBalance](portfoliobalance.md).[free](portfoliobalance.md#free)*

*Defined in [src/types/index.ts:654](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L654)*

balance available for transferring and paying fees

___

###  locked

• **locked**: *BigNumber*

*Inherited from [PortfolioBalance](portfoliobalance.md).[locked](portfoliobalance.md#locked)*

*Defined in [src/types/index.ts:658](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L658)*

unavailable balance, either bonded for staking or locked for some other purpose

___

###  total

• **total**: *BigNumber*

*Inherited from [PortfolioBalance](portfoliobalance.md).[total](portfoliobalance.md#total)*

*Defined in [src/types/index.ts:662](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L662)*

free + locked

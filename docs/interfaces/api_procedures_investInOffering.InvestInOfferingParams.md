[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/investInOffering](../modules/api_procedures_investInOffering.md) / InvestInOfferingParams

# Interface: InvestInOfferingParams

[api/procedures/investInOffering](../modules/api_procedures_investInOffering.md).InvestInOfferingParams

## Table of contents

### Properties

- [fundingPortfolio](api_procedures_investInOffering.InvestInOfferingParams.md#fundingportfolio)
- [maxPrice](api_procedures_investInOffering.InvestInOfferingParams.md#maxprice)
- [purchaseAmount](api_procedures_investInOffering.InvestInOfferingParams.md#purchaseamount)
- [purchasePortfolio](api_procedures_investInOffering.InvestInOfferingParams.md#purchaseportfolio)

## Properties

### fundingPortfolio

• **fundingPortfolio**: [`PortfolioLike`](../modules/types.md#portfoliolike)

portfolio from which funds will be withdrawn to pay for the Asset tokens

#### Defined in

[api/procedures/investInOffering.ts:32](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/investInOffering.ts#L32)

___

### maxPrice

• `Optional` **maxPrice**: `BigNumber`

maximum average price to pay per Asset token (optional)

#### Defined in

[api/procedures/investInOffering.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/investInOffering.ts#L40)

___

### purchaseAmount

• **purchaseAmount**: `BigNumber`

amount of Asset tokens to purchase

#### Defined in

[api/procedures/investInOffering.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/investInOffering.ts#L36)

___

### purchasePortfolio

• **purchasePortfolio**: [`PortfolioLike`](../modules/types.md#portfoliolike)

portfolio in which the purchased Asset tokens will be stored

#### Defined in

[api/procedures/investInOffering.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/investInOffering.ts#L28)

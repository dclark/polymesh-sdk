[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Offering/types](../modules/api_entities_Offering_types.md) / OfferingBalanceStatus

# Enumeration: OfferingBalanceStatus

[api/entities/Offering/types](../modules/api_entities_Offering_types.md).OfferingBalanceStatus

## Table of contents

### Enumeration Members

- [Available](api_entities_Offering_types.OfferingBalanceStatus.md#available)
- [Residual](api_entities_Offering_types.OfferingBalanceStatus.md#residual)
- [SoldOut](api_entities_Offering_types.OfferingBalanceStatus.md#soldout)

## Enumeration Members

### Available

• **Available**

There still are Asset tokens available for purchase

#### Defined in

[api/entities/Offering/types.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/types.ts#L24)

___

### Residual

• **Residual**

There are remaining Asset tokens, but their added value is lower than the Offering's
  minimum investment, so they cannot be purchased. The Offering should be manually closed
  to retrieve them

#### Defined in

[api/entities/Offering/types.ts:34](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/types.ts#L34)

___

### SoldOut

• **SoldOut**

All Asset tokens in the Offering have been sold

#### Defined in

[api/entities/Offering/types.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/types.ts#L28)

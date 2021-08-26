# StoBalanceStatus

## Index

### Enumeration members

* [Available](stobalancestatus.md#available)
* [Residual](stobalancestatus.md#residual)
* [SoldOut](stobalancestatus.md#soldout)

## Enumeration members

### Available

• **Available**: = "Available"

_Defined in_ [_src/api/entities/Sto/types.ts:24_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Sto/types.ts#L24)

There still are Security Tokens available for purchase

### Residual

• **Residual**: = "Residual"

_Defined in_ [_src/api/entities/Sto/types.ts:34_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Sto/types.ts#L34)

There are remaining tokens, but their added value is lower than the Offering's minimum investment, so they cannot be purchased. The offering should be manually closed to retrieve them

### SoldOut

• **SoldOut**: = "SoldOut"

_Defined in_ [_src/api/entities/Sto/types.ts:28_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Sto/types.ts#L28)

All Security Tokens in the offering have been sold


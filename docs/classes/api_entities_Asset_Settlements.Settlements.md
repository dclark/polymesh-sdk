[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/Settlements](../modules/api_entities_Asset_Settlements.md) / Settlements

# Class: Settlements

[api/entities/Asset/Settlements](../modules/api_entities_Asset_Settlements.md).Settlements

Handles all Asset Settlements related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`Settlements`**

## Table of contents

### Methods

- [canSettle](api_entities_Asset_Settlements.Settlements.md#cansettle)
- [canTransfer](api_entities_Asset_Settlements.Settlements.md#cantransfer)

## Methods

### canSettle

▸ **canSettle**(`args`): `Promise`<[`TransferStatus`](../enums/types.TransferStatus.md)\>

Check whether it is possible to create a settlement Instruction to transfer a certain amount of this Asset's tokens between two Portfolios.

**`note`** this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would yield failed results because of the funds being locked, even though they haven't been
  transferred yet

**`deprecated`** in favor of [canTransfer](api_entities_Asset_Settlements.Settlements.md#cantransfer)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.amount` | `BigNumber` | amount of tokens to transfer |
| `args.from?` | [`PortfolioLike`](../modules/types.md#portfoliolike) | sender Portfolio (optional, defaults to the signing Identity's Default Portfolio) |
| `args.to` | [`PortfolioLike`](../modules/types.md#portfoliolike) | receiver Portfolio |

#### Returns

`Promise`<[`TransferStatus`](../enums/types.TransferStatus.md)\>

#### Defined in

[api/entities/Asset/Settlements.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Settlements.ts#L38)

___

### canTransfer

▸ **canTransfer**(`args`): `Promise`<[`TransferBreakdown`](../interfaces/api_entities_Asset_types.TransferBreakdown.md)\>

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

**`note`** this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would yield failed results because of the funds being locked, even though they haven't been
  transferred yet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.amount` | `BigNumber` | amount of tokens to transfer |
| `args.from?` | [`PortfolioLike`](../modules/types.md#portfoliolike) | sender Portfolio (optional, defaults to the signing Identity's Default Portfolio) |
| `args.to` | [`PortfolioLike`](../modules/types.md#portfoliolike) | receiver Portfolio |

#### Returns

`Promise`<[`TransferBreakdown`](../interfaces/api_entities_Asset_types.TransferBreakdown.md)\>

#### Defined in

[api/entities/Asset/Settlements.ts:107](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Settlements.ts#L107)

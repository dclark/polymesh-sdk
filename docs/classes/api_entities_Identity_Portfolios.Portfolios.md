[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Identity/Portfolios](../modules/api_entities_Identity_Portfolios.md) / Portfolios

# Class: Portfolios

[api/entities/Identity/Portfolios](../modules/api_entities_Identity_Portfolios.md).Portfolios

Handles all Portfolio related functionality on the Identity side

## Hierarchy

- `Namespace`<[`Identity`](api_entities_Identity.Identity.md)\>

  ↳ **`Portfolios`**

## Table of contents

### Methods

- [delete](api_entities_Identity_Portfolios.Portfolios.md#delete)
- [getCustodiedPortfolios](api_entities_Identity_Portfolios.Portfolios.md#getcustodiedportfolios)
- [getPortfolio](api_entities_Identity_Portfolios.Portfolios.md#getportfolio)
- [getPortfolios](api_entities_Identity_Portfolios.Portfolios.md#getportfolios)

## Methods

### delete

▸ **delete**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Delete a Portfolio by ID

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [delete.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.portfolio` | `BigNumber` \| [`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Identity/Portfolios.ts:164](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/Portfolios.ts#L164)

___

### getCustodiedPortfolios

▸ **getCustodiedPortfolios**(`paginationOpts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](api_entities_DefaultPortfolio.DefaultPortfolio.md)\>\>

Retrieve all Portfolios custodied by this Identity.
  This only includes portfolios owned by a different Identity but custodied by this one.
  To fetch Portfolios owned by this Identity, use [getPortfolios](api_entities_Identity_Portfolios.Portfolios.md#getportfolios)

**`note`** supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../interfaces/types.PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](api_entities_DefaultPortfolio.DefaultPortfolio.md)\>\>

#### Defined in

[api/entities/Identity/Portfolios.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/Portfolios.ts#L77)

___

### getPortfolio

▸ **getPortfolio**(): `Promise`<[`DefaultPortfolio`](api_entities_DefaultPortfolio.DefaultPortfolio.md)\>

Retrieve a Numbered Portfolio or the Default Portfolio if Portfolio ID is not passed

#### Returns

`Promise`<[`DefaultPortfolio`](api_entities_DefaultPortfolio.DefaultPortfolio.md)\>

#### Defined in

[api/entities/Identity/Portfolios.ts:124](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/Portfolios.ts#L124)

▸ **getPortfolio**(`args`): `Promise`<[`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.portfolioId` | `BigNumber` |

#### Returns

`Promise`<[`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md)\>

#### Defined in

[api/entities/Identity/Portfolios.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/Portfolios.ts#L125)

___

### getPortfolios

▸ **getPortfolios**(): `Promise`<[[`DefaultPortfolio`](api_entities_DefaultPortfolio.DefaultPortfolio.md), ...NumberedPortfolio[]]\>

Retrieve all the Portfolios owned by this Identity

#### Returns

`Promise`<[[`DefaultPortfolio`](api_entities_DefaultPortfolio.DefaultPortfolio.md), ...NumberedPortfolio[]]\>

#### Defined in

[api/entities/Identity/Portfolios.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Identity/Portfolios.ts#L46)

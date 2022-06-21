[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / SimplePermissions

# Interface: SimplePermissions

[types](../modules/types.md).SimplePermissions

This represents positive permissions (i.e. only "includes"). It is used
  for specifying procedure requirements and querying if an Account has certain
  permissions. Null values represent full permissions in that category

## Table of contents

### Properties

- [assets](types.SimplePermissions.md#assets)
- [portfolios](types.SimplePermissions.md#portfolios)
- [transactions](types.SimplePermissions.md#transactions)

## Properties

### assets

• `Optional` **assets**: ``null`` \| [`Asset`](../classes/api_entities_Asset.Asset.md)[]

list of required Asset permissions

#### Defined in

[types/index.ts:964](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L964)

___

### portfolios

• `Optional` **portfolios**: ``null`` \| ([`NumberedPortfolio`](../classes/api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](../classes/api_entities_DefaultPortfolio.DefaultPortfolio.md))[]

#### Defined in

[types/index.ts:970](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L970)

___

### transactions

• `Optional` **transactions**: ``null`` \| `TxTag`[]

list of required Transaction permissions

#### Defined in

[types/index.ts:968](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L968)

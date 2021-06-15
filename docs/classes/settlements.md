# Settlements

Handles all Security Token Settlements related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Settlements**

## Index

### Properties

* [context](settlements.md#protected-context)
* [parent](settlements.md#protected-parent)

### Methods

* [canSettle](settlements.md#cansettle)
* [canTransfer](settlements.md#cantransfer)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)

## Methods

### canSettle

▸ **canSettle**\(`args`: object\): _Promise‹_[_TransferStatus_](../enums/transferstatus.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Settlements.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Settlements.ts#L38)

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios.

**`note`** this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be transferred to portfolio B \(assuming everything else checks out\) the result will be success. If an instruction is created and authorized to transfer those 700 tokens, they would become locked. From that point, further calls to this function would yield failed results because of the funds being locked, even though they haven't been transferred yet

**`deprecated`** in favor of [canTransfer](settlements.md#cantransfer)

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `amount` | BigNumber | amount of tokens to transfer |
| `from?` | [PortfolioLike](../globals.md#portfoliolike) | sender Portfolio \(optional, defaults to the current Identity's Default Portfolio\) |
| `to` | [PortfolioLike](../globals.md#portfoliolike) | receiver Portfolio |

**Returns:** _Promise‹_[_TransferStatus_](../enums/transferstatus.md)_›_

### canTransfer

▸ **canTransfer**\(`args`: object\): _Promise‹_[_TransferBreakdown_](../interfaces/transferbreakdown.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Settlements.ts:108_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Settlements.ts#L108)

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of the transaction containing general errors \(such as insufficient balance or invalid receiver\), any broken transfer restrictions, and any compliance failures

**`note`** this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be transferred to portfolio B \(assuming everything else checks out\) the result will be success. If an instruction is created and authorized to transfer those 700 tokens, they would become locked. From that point, further calls to this function would yield failed results because of the funds being locked, even though they haven't been transferred yet

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `amount` | BigNumber | amount of tokens to transfer |
| `from?` | [PortfolioLike](../globals.md#portfoliolike) | sender Portfolio \(optional, defaults to the current Identity's Default Portfolio\) |
| `to` | [PortfolioLike](../globals.md#portfoliolike) | receiver Portfolio |

**Returns:** _Promise‹_[_TransferBreakdown_](../interfaces/transferbreakdown.md)_›_


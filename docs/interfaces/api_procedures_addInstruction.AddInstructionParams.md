[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/addInstruction](../modules/api_procedures_addInstruction.md) / AddInstructionParams

# Interface: AddInstructionParams

[api/procedures/addInstruction](../modules/api_procedures_addInstruction.md).AddInstructionParams

## Hierarchy

- **`AddInstructionParams`**

  ↳ [`AddInstructionWithVenueIdParams`](api_procedures_addInstruction.AddInstructionWithVenueIdParams.md)

## Table of contents

### Properties

- [endBlock](api_procedures_addInstruction.AddInstructionParams.md#endblock)
- [legs](api_procedures_addInstruction.AddInstructionParams.md#legs)
- [tradeDate](api_procedures_addInstruction.AddInstructionParams.md#tradedate)
- [valueDate](api_procedures_addInstruction.AddInstructionParams.md#valuedate)

## Properties

### endBlock

• `Optional` **endBlock**: `BigNumber`

block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)

#### Defined in

[api/procedures/addInstruction.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/addInstruction.ts#L63)

___

### legs

• **legs**: { `amount`: `BigNumber` ; `asset`: `string` \| [`Asset`](../classes/api_entities_Asset.Asset.md) ; `from`: [`PortfolioLike`](../modules/types.md#portfoliolike) ; `to`: [`PortfolioLike`](../modules/types.md#portfoliolike)  }[]

array of Asset movements (amount, from, to, asset)

#### Defined in

[api/procedures/addInstruction.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/addInstruction.ts#L46)

___

### tradeDate

• `Optional` **tradeDate**: `Date`

date at which the trade was agreed upon (optional, for off chain trades)

#### Defined in

[api/procedures/addInstruction.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/addInstruction.ts#L55)

___

### valueDate

• `Optional` **valueDate**: `Date`

date at which the trade was executed (optional, for off chain trades)

#### Defined in

[api/procedures/addInstruction.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/addInstruction.ts#L59)

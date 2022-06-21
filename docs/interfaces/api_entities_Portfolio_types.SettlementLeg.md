[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Portfolio/types](../modules/api_entities_Portfolio_types.md) / SettlementLeg

# Interface: SettlementLeg

[api/entities/Portfolio/types](../modules/api_entities_Portfolio_types.md).SettlementLeg

## Hierarchy

- [`Leg`](api_entities_Instruction_types.Leg.md)

  ↳ **`SettlementLeg`**

## Table of contents

### Properties

- [amount](api_entities_Portfolio_types.SettlementLeg.md#amount)
- [asset](api_entities_Portfolio_types.SettlementLeg.md#asset)
- [direction](api_entities_Portfolio_types.SettlementLeg.md#direction)
- [from](api_entities_Portfolio_types.SettlementLeg.md#from)
- [to](api_entities_Portfolio_types.SettlementLeg.md#to)

## Properties

### amount

• **amount**: `BigNumber`

#### Inherited from

[Leg](api_entities_Instruction_types.Leg.md).[amount](api_entities_Instruction_types.Leg.md#amount)

#### Defined in

[api/entities/Instruction/types.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Instruction/types.ts#L42)

___

### asset

• **asset**: [`Asset`](../classes/api_entities_Asset.Asset.md)

#### Inherited from

[Leg](api_entities_Instruction_types.Leg.md).[asset](api_entities_Instruction_types.Leg.md#asset)

#### Defined in

[api/entities/Instruction/types.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Instruction/types.ts#L43)

___

### direction

• **direction**: `SettlementDirectionEnum`

#### Defined in

[api/entities/Portfolio/types.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/types.ts#L15)

___

### from

• **from**: [`NumberedPortfolio`](../classes/api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](../classes/api_entities_DefaultPortfolio.DefaultPortfolio.md)

#### Inherited from

[Leg](api_entities_Instruction_types.Leg.md).[from](api_entities_Instruction_types.Leg.md#from)

#### Defined in

[api/entities/Instruction/types.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Instruction/types.ts#L40)

___

### to

• **to**: [`NumberedPortfolio`](../classes/api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](../classes/api_entities_DefaultPortfolio.DefaultPortfolio.md)

#### Inherited from

[Leg](api_entities_Instruction_types.Leg.md).[to](api_entities_Instruction_types.Leg.md#to)

#### Defined in

[api/entities/Instruction/types.ts:41](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Instruction/types.ts#L41)

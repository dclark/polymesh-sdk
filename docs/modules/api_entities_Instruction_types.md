[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / api/entities/Instruction/types

# Module: api/entities/Instruction/types

## Table of contents

### Enumerations

- [AffirmationStatus](../enums/api_entities_Instruction_types.AffirmationStatus.md)
- [InstructionStatus](../enums/api_entities_Instruction_types.InstructionStatus.md)
- [InstructionType](../enums/api_entities_Instruction_types.InstructionType.md)

### Interfaces

- [InstructionAffirmation](../interfaces/api_entities_Instruction_types.InstructionAffirmation.md)
- [Leg](../interfaces/api_entities_Instruction_types.Leg.md)

### Type Aliases

- [InstructionDetails](api_entities_Instruction_types.md#instructiondetails)
- [InstructionStatusResult](api_entities_Instruction_types.md#instructionstatusresult)

## Type Aliases

### InstructionDetails

Ƭ **InstructionDetails**: { `createdAt`: `Date` ; `status`: [`InstructionStatus`](../enums/api_entities_Instruction_types.InstructionStatus.md) ; `tradeDate`: `Date` \| ``null`` ; `valueDate`: `Date` \| ``null`` ; `venue`: [`Venue`](../classes/api_entities_Venue.Venue.md)  } & { `type`: [`SettleOnAffirmation`](../enums/api_entities_Instruction_types.InstructionType.md#settleonaffirmation)  } \| { `endBlock`: `BigNumber` ; `type`: [`SettleOnBlock`](../enums/api_entities_Instruction_types.InstructionType.md#settleonblock)  }

#### Defined in

[api/entities/Instruction/types.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Instruction/types.ts#L17)

___

### InstructionStatusResult

Ƭ **InstructionStatusResult**: { `status`: [`Pending`](../enums/api_entities_Instruction_types.InstructionStatus.md#pending)  } \| { `eventIdentifier`: [`EventIdentifier`](../interfaces/types.EventIdentifier.md) ; `status`: `Exclude`<[`InstructionStatus`](../enums/api_entities_Instruction_types.InstructionStatus.md), [`Pending`](../enums/api_entities_Instruction_types.InstructionStatus.md#pending)\>  }

#### Defined in

[api/entities/Instruction/types.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Instruction/types.ts#L57)

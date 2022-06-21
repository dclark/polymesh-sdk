[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / GroupedInstructions

# Interface: GroupedInstructions

[types](../modules/types.md).GroupedInstructions

## Table of contents

### Properties

- [affirmed](types.GroupedInstructions.md#affirmed)
- [failed](types.GroupedInstructions.md#failed)
- [pending](types.GroupedInstructions.md#pending)

## Properties

### affirmed

• **affirmed**: [`Instruction`](../classes/api_entities_Instruction.Instruction.md)[]

Instructions that have already been affirmed by the Identity

#### Defined in

[types/index.ts:1367](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1367)

___

### failed

• **failed**: [`Instruction`](../classes/api_entities_Instruction.Instruction.md)[]

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

#### Defined in

[types/index.ts:1377](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1377)

___

### pending

• **pending**: [`Instruction`](../classes/api_entities_Instruction.Instruction.md)[]

Instructions that still need to be affirmed/rejected by the Identity

#### Defined in

[types/index.ts:1371](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1371)

# Interface: GroupedInstructions

## Hierarchy

* **GroupedInstructions**

## Index

### Properties

* [affirmed](groupedinstructions.md#affirmed)
* [failed](groupedinstructions.md#failed)
* [pending](groupedinstructions.md#pending)
* [rejected](groupedinstructions.md#rejected)

## Properties

###  affirmed

• **affirmed**: *[Instruction](../classes/instruction.md)[]*

*Defined in [src/types/index.ts:1094](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L1094)*

Instructions that have already been affirmed by the Identity

___

###  failed

• **failed**: *[Instruction](../classes/instruction.md)[]*

*Defined in [src/types/index.ts:1108](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L1108)*

Instructions that failed in their execution (can be rescheduled).
  This group supercedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

___

###  pending

• **pending**: *[Instruction](../classes/instruction.md)[]*

*Defined in [src/types/index.ts:1102](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L1102)*

Instructions that still need to be affirmed/rejected by the Identity

___

###  rejected

• **rejected**: *[Instruction](../classes/instruction.md)[]*

*Defined in [src/types/index.ts:1098](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L1098)*

Instructions that have already been rejected by the Identity

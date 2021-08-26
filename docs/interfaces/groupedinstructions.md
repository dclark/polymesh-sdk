# GroupedInstructions

## Hierarchy

* **GroupedInstructions**

## Index

### Properties

* [affirmed](groupedinstructions.md#affirmed)
* [failed](groupedinstructions.md#failed)
* [pending](groupedinstructions.md#pending)
* [rejected](groupedinstructions.md#rejected)

## Properties

### affirmed

• **affirmed**: [_Instruction_](../classes/instruction.md)_\[\]_

_Defined in_ [_src/types/index.ts:1108_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L1108)

Instructions that have already been affirmed by the Identity

### failed

• **failed**: [_Instruction_](../classes/instruction.md)_\[\]_

_Defined in_ [_src/types/index.ts:1122_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L1122)

Instructions that failed in their execution \(can be rescheduled\). This group supercedes the other three, so for example, a failed Instruction might also belong in the `affirmed` group, but it will only be included in this one

### pending

• **pending**: [_Instruction_](../classes/instruction.md)_\[\]_

_Defined in_ [_src/types/index.ts:1116_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L1116)

Instructions that still need to be affirmed/rejected by the Identity

### rejected

• **rejected**: [_Instruction_](../classes/instruction.md)_\[\]_

_Defined in_ [_src/types/index.ts:1112_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L1112)

Instructions that have already been rejected by the Identity


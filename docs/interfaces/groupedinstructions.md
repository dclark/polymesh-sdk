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

_Defined in_ [_src/types/index.ts:1188_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1188)

Instructions that have already been affirmed by the Identity

### failed

• **failed**: [_Instruction_](../classes/instruction.md)_\[\]_

_Defined in_ [_src/types/index.ts:1202_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1202)

Instructions that failed in their execution \(can be rescheduled\). This group supercedes the other three, so for example, a failed Instruction might also belong in the `affirmed` group, but it will only be included in this one

### pending

• **pending**: [_Instruction_](../classes/instruction.md)_\[\]_

_Defined in_ [_src/types/index.ts:1196_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1196)

Instructions that still need to be affirmed/rejected by the Identity

### rejected

• **rejected**: [_Instruction_](../classes/instruction.md)_\[\]_

_Defined in_ [_src/types/index.ts:1192_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1192)

Instructions that have already been rejected by the Identity


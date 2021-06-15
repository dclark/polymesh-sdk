# TransferBreakdown

Object containing every reason why a specific Security Token transfer would fail

## Hierarchy

* **TransferBreakdown**

## Index

### Properties

* [compliance](transferbreakdown.md#compliance)
* [general](transferbreakdown.md#general)
* [restrictions](transferbreakdown.md#restrictions)
* [result](transferbreakdown.md#result)

## Properties

### compliance

• **compliance**: [_Compliance_](../classes/compliance.md)

_Defined in_ [_src/api/entities/SecurityToken/types.ts:39_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/types.ts#L39)

how the transfer adheres to the asset's compliance rules

### general

• **general**: [_TransferError_](../enums/transfererror.md)_\[\]_

_Defined in_ [_src/api/entities/SecurityToken/types.ts:35_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/types.ts#L35)

list of general transfer errors

### restrictions

• **restrictions**: [_TransferRestrictionResult_](transferrestrictionresult.md)_\[\]_

_Defined in_ [_src/api/entities/SecurityToken/types.ts:43_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/types.ts#L43)

list of transfer restrictions and whether the transfer satisfies each one

### result

• **result**: _boolean_

_Defined in_ [_src/api/entities/SecurityToken/types.ts:47_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/types.ts#L47)

true if the transfer is possible


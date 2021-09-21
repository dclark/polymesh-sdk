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

• **compliance**: _Compliance_

_Defined in_ [_src/api/entities/SecurityToken/types.ts:40_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/types.ts#L40)

how the transfer adheres to the asset's compliance rules

### general

• **general**: [_TransferError_](../enums/transfererror.md)_\[\]_

_Defined in_ [_src/api/entities/SecurityToken/types.ts:36_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/types.ts#L36)

list of general transfer errors

### restrictions

• **restrictions**: [_TransferRestrictionResult_](transferrestrictionresult.md)_\[\]_

_Defined in_ [_src/api/entities/SecurityToken/types.ts:44_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/types.ts#L44)

list of transfer restrictions and whether the transfer satisfies each one

### result

• **result**: _boolean_

_Defined in_ [_src/api/entities/SecurityToken/types.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/types.ts#L48)

true if the transfer is possible


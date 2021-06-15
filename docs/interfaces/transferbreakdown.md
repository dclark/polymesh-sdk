# Interface: TransferBreakdown

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

###  compliance

• **compliance**: *[Compliance](../classes/compliance.md)*

*Defined in [src/api/entities/SecurityToken/types.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/types.ts#L39)*

how the transfer adheres to the asset's compliance rules

___

###  general

• **general**: *[TransferError](../enums/transfererror.md)[]*

*Defined in [src/api/entities/SecurityToken/types.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/types.ts#L35)*

list of general transfer errors

___

###  restrictions

• **restrictions**: *[TransferRestrictionResult](transferrestrictionresult.md)[]*

*Defined in [src/api/entities/SecurityToken/types.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/types.ts#L43)*

list of transfer restrictions and whether the transfer satisfies each one

___

###  result

• **result**: *boolean*

*Defined in [src/api/entities/SecurityToken/types.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/types.ts#L47)*

true if the transfer is possible

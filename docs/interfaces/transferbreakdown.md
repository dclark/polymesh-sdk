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

• **compliance**: *Compliance*

*Defined in [src/api/entities/SecurityToken/types.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/types.ts#L40)*

how the transfer adheres to the asset's compliance rules

___

###  general

• **general**: *[TransferError](../enums/transfererror.md)[]*

*Defined in [src/api/entities/SecurityToken/types.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/types.ts#L36)*

list of general transfer errors

___

###  restrictions

• **restrictions**: *[TransferRestrictionResult](transferrestrictionresult.md)[]*

*Defined in [src/api/entities/SecurityToken/types.ts:44](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/types.ts#L44)*

list of transfer restrictions and whether the transfer satisfies each one

___

###  result

• **result**: *boolean*

*Defined in [src/api/entities/SecurityToken/types.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/types.ts#L48)*

true if the transfer is possible

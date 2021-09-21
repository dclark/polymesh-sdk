# SetAssetRequirementsParams

## Hierarchy

* **SetAssetRequirementsParams**

## Index

### Properties

* [requirements](setassetrequirementsparams.md#requirements)

## Properties

### requirements

• **requirements**: [_Condition_](../globals.md#condition)_\[\]\[\]_

_Defined in_ [_src/api/procedures/setAssetRequirements.ts:18_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/setAssetRequirements.ts#L18)

array of array of conditions. For a transfer to be successful, it must comply with all the conditions of at least one of the arrays. In other words, higher level arrays are _OR_ between them, while conditions inside each array are _AND_ between them


# KnownPermissionGroup

## Index

### Enumeration members

* [ExceptMeta](knownpermissiongroup.md#exceptmeta)
* [Full](knownpermissiongroup.md#full)
* [PolymeshV1Caa](knownpermissiongroup.md#polymeshv1caa)
* [PolymeshV1Pia](knownpermissiongroup.md#polymeshv1pia)

## Enumeration members

### ExceptMeta

• **ExceptMeta**: = "ExceptMeta"

_Defined in_ [_src/types/index.ts:793_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L793)

not authorized:

* externalAgents

### Full

• **Full**: = "Full"

_Defined in_ [_src/types/index.ts:788_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L788)

all transactions authorized

### PolymeshV1Caa

• **PolymeshV1Caa**: = "PolymeshV1Caa"

_Defined in_ [_src/types/index.ts:800_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L800)

authorized:

* corporateAction
* corporateBallot
* capitalDistribution

### PolymeshV1Pia

• **PolymeshV1Pia**: = "PolymeshV1Pia"

_Defined in_ [_src/types/index.ts:808_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L808)

authorized:

* asset.issue
* asset.redeem
* asset.controllerTransfer
* sto \(except for sto.invest\)


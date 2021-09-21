# PermissionGroupType

## Index

### Enumeration members

* [ExceptMeta](permissiongrouptype.md#exceptmeta)
* [Full](permissiongrouptype.md#full)
* [PolymeshV1Caa](permissiongrouptype.md#polymeshv1caa)
* [PolymeshV1Pia](permissiongrouptype.md#polymeshv1pia)

## Enumeration members

### ExceptMeta

• **ExceptMeta**: = "ExceptMeta"

_Defined in_ [_src/types/index.ts:844_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L844)

not authorized:

* externalAgents

### Full

• **Full**: = "Full"

_Defined in_ [_src/types/index.ts:839_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L839)

all transactions authorized

### PolymeshV1Caa

• **PolymeshV1Caa**: = "PolymeshV1Caa"

_Defined in_ [_src/types/index.ts:851_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L851)

authorized:

* corporateAction
* corporateBallot
* capitalDistribution

### PolymeshV1Pia

• **PolymeshV1Pia**: = "PolymeshV1Pia"

_Defined in_ [_src/types/index.ts:859_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L859)

authorized:

* asset.issue
* asset.redeem
* asset.controllerTransfer
* sto \(except for sto.invest\)


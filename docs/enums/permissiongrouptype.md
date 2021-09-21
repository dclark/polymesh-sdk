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

_Defined in_ [_src/types/index.ts:784_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L784)

not authorized:

* externalAgents

### Full

• **Full**: = "Full"

_Defined in_ [_src/types/index.ts:779_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L779)

all transactions authorized

### PolymeshV1Caa

• **PolymeshV1Caa**: = "PolymeshV1Caa"

_Defined in_ [_src/types/index.ts:791_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L791)

authorized:

* corporateAction
* corporateBallot
* capitalDistribution

### PolymeshV1Pia

• **PolymeshV1Pia**: = "PolymeshV1Pia"

_Defined in_ [_src/types/index.ts:799_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L799)

authorized:

* asset.issue
* asset.redeem
* asset.controllerTransfer
* sto \(except for sto.invest\)


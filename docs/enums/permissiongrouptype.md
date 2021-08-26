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

_Defined in_ [_src/types/index.ts:762_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L762)

not authorized:

* externalAgents

### Full

• **Full**: = "Full"

_Defined in_ [_src/types/index.ts:757_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L757)

all transactions authorized

### PolymeshV1Caa

• **PolymeshV1Caa**: = "PolymeshV1Caa"

_Defined in_ [_src/types/index.ts:769_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L769)

authorized:

* corporateAction
* corporateBallot
* capitalDistribution

### PolymeshV1Pia

• **PolymeshV1Pia**: = "PolymeshV1Pia"

_Defined in_ [_src/types/index.ts:777_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L777)

authorized:

* asset.issue
* asset.redeem
* asset.controllerTransfer
* sto \(except for sto.invest\)


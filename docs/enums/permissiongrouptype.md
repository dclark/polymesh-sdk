# Enumeration: PermissionGroupType

## Index

### Enumeration members

* [ExceptMeta](permissiongrouptype.md#exceptmeta)
* [Full](permissiongrouptype.md#full)
* [PolymeshV1Caa](permissiongrouptype.md#polymeshv1caa)
* [PolymeshV1Pia](permissiongrouptype.md#polymeshv1pia)

## Enumeration members

###  ExceptMeta

• **ExceptMeta**: = "ExceptMeta"

*Defined in [src/types/index.ts:784](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L784)*

not authorized:
  - externalAgents

___

###  Full

• **Full**: = "Full"

*Defined in [src/types/index.ts:779](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L779)*

all transactions authorized

___

###  PolymeshV1Caa

• **PolymeshV1Caa**: = "PolymeshV1Caa"

*Defined in [src/types/index.ts:791](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L791)*

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

___

###  PolymeshV1Pia

• **PolymeshV1Pia**: = "PolymeshV1Pia"

*Defined in [src/types/index.ts:799](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L799)*

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

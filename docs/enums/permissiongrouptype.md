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

*Defined in [src/types/index.ts:828](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L828)*

not authorized:
  - externalAgents

___

###  Full

• **Full**: = "Full"

*Defined in [src/types/index.ts:823](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L823)*

all transactions authorized

___

###  PolymeshV1Caa

• **PolymeshV1Caa**: = "PolymeshV1Caa"

*Defined in [src/types/index.ts:835](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L835)*

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

___

###  PolymeshV1Pia

• **PolymeshV1Pia**: = "PolymeshV1Pia"

*Defined in [src/types/index.ts:843](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L843)*

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

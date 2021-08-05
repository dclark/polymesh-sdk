# Enumeration: KnownPermissionGroup

## Index

### Enumeration members

* [ExceptMeta](knownpermissiongroup.md#exceptmeta)
* [Full](knownpermissiongroup.md#full)
* [PolymeshV1Caa](knownpermissiongroup.md#polymeshv1caa)
* [PolymeshV1Pia](knownpermissiongroup.md#polymeshv1pia)

## Enumeration members

###  ExceptMeta

• **ExceptMeta**: = "ExceptMeta"

*Defined in [src/types/index.ts:793](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L793)*

not authorized:
  - externalAgents

___

###  Full

• **Full**: = "Full"

*Defined in [src/types/index.ts:788](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L788)*

all transactions authorized

___

###  PolymeshV1Caa

• **PolymeshV1Caa**: = "PolymeshV1Caa"

*Defined in [src/types/index.ts:800](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L800)*

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

___

###  PolymeshV1Pia

• **PolymeshV1Pia**: = "PolymeshV1Pia"

*Defined in [src/types/index.ts:808](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L808)*

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

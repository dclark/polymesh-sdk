[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / PermissionGroupType

# Enumeration: PermissionGroupType

[types](../modules/types.md).PermissionGroupType

## Table of contents

### Enumeration Members

- [ExceptMeta](types.PermissionGroupType.md#exceptmeta)
- [Full](types.PermissionGroupType.md#full)
- [PolymeshV1Caa](types.PermissionGroupType.md#polymeshv1caa)
- [PolymeshV1Pia](types.PermissionGroupType.md#polymeshv1pia)

## Enumeration Members

### ExceptMeta

• **ExceptMeta**

not authorized:
  - externalAgents

#### Defined in

[types/index.ts:1020](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1020)

___

### Full

• **Full**

all transactions authorized

#### Defined in

[types/index.ts:1015](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1015)

___

### PolymeshV1Caa

• **PolymeshV1Caa**

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[types/index.ts:1027](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1027)

___

### PolymeshV1Pia

• **PolymeshV1Pia**

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[types/index.ts:1035](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1035)

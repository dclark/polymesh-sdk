# Enumeration: PermissionGroupType

[types](../wiki/types).PermissionGroupType

## Table of contents

### Enumeration Members

- [ExceptMeta](../wiki/types.PermissionGroupType#exceptmeta)
- [Full](../wiki/types.PermissionGroupType#full)
- [PolymeshV1Caa](../wiki/types.PermissionGroupType#polymeshv1caa)
- [PolymeshV1Pia](../wiki/types.PermissionGroupType#polymeshv1pia)

## Enumeration Members

### ExceptMeta

• **ExceptMeta**

not authorized:
  - externalAgents

#### Defined in

[types/index.ts:1023](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L1023)

___

### Full

• **Full**

all transactions authorized

#### Defined in

[types/index.ts:1018](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L1018)

___

### PolymeshV1Caa

• **PolymeshV1Caa**

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[types/index.ts:1030](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L1030)

___

### PolymeshV1Pia

• **PolymeshV1Pia**

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[types/index.ts:1038](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L1038)

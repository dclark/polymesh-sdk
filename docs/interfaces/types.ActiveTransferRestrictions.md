[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ActiveTransferRestrictions

# Interface: ActiveTransferRestrictions<Restriction\>

[types](../modules/types.md).ActiveTransferRestrictions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Restriction` | extends [`CountTransferRestriction`](types.CountTransferRestriction.md) \| [`PercentageTransferRestriction`](types.PercentageTransferRestriction.md) |

## Table of contents

### Properties

- [availableSlots](types.ActiveTransferRestrictions.md#availableslots)
- [restrictions](types.ActiveTransferRestrictions.md#restrictions)

## Properties

### availableSlots

• **availableSlots**: `BigNumber`

amount of restrictions that can be added before reaching the shared limit

#### Defined in

[types/index.ts:1284](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1284)

___

### restrictions

• **restrictions**: `Restriction`[]

#### Defined in

[types/index.ts:1280](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1280)

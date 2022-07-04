# Interface: PercentageTransferRestrictionInput

[api/procedures/types](../wiki/api.procedures.types).PercentageTransferRestrictionInput

## Hierarchy

- `TransferRestrictionInputBase`

  ↳ **`PercentageTransferRestrictionInput`**

## Table of contents

### Properties

- [exemptedIdentities](../wiki/api.procedures.types.PercentageTransferRestrictionInput#exemptedidentities)
- [percentage](../wiki/api.procedures.types.PercentageTransferRestrictionInput#percentage)

## Properties

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../wiki/api.entities.Identity.Identity))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L75)

___

### percentage

• **percentage**: `BigNumber`

maximum percentage (0-100) of the total supply of the Asset that can be held by a single investor at once

#### Defined in

[api/procedures/types.ts:89](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L89)

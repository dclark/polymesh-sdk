# Interface: PercentageTransferRestrictionInput

## Hierarchy

* [TransferRestrictionInputBase](transferrestrictioninputbase.md)

  ↳ **PercentageTransferRestrictionInput**

## Index

### Properties

* [exemptedIdentities](percentagetransferrestrictioninput.md#optional-exemptedidentities)
* [exemptedScopeIds](percentagetransferrestrictioninput.md#optional-exemptedscopeids)
* [percentage](percentagetransferrestrictioninput.md#percentage)

## Properties

### `Optional` exemptedIdentities

• **exemptedIdentities**? : *(string | [Identity](../classes/identity.md)‹›)[]*

*Inherited from [TransferRestrictionInputBase](transferrestrictioninputbase.md).[exemptedIdentities](transferrestrictioninputbase.md#optional-exemptedidentities)*

*Defined in [src/types/index.ts:1048](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1048)*

array of Identities (or DIDs) that are exempted from the Restriction

___

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : *string[]*

*Inherited from [TransferRestrictionInputBase](transferrestrictioninputbase.md).[exemptedScopeIds](transferrestrictioninputbase.md#optional-exemptedscopeids)*

*Defined in [src/types/index.ts:1044](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1044)*

array of Scope IDs that are exempted from the Restriction

___

###  percentage

• **percentage**: *BigNumber*

*Defined in [src/types/index.ts:1070](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1070)*

limit on the proportion of the total supply of the Security Token that can be held by a single investor at once

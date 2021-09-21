# PercentageTransferRestrictionInput

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

• **exemptedIdentities**? : _\(string \|_ [_Identity_](../classes/identity.md)_‹›\)\[\]_

_Inherited from_ [_TransferRestrictionInputBase_](transferrestrictioninputbase.md)_._[_exemptedIdentities_](transferrestrictioninputbase.md#optional-exemptedidentities)

_Defined in_ [_src/types/index.ts:970_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L970)

array of Identities \(or DIDs\) that are exempted from the Restriction

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : _string\[\]_

_Inherited from_ [_TransferRestrictionInputBase_](transferrestrictioninputbase.md)_._[_exemptedScopeIds_](transferrestrictioninputbase.md#optional-exemptedscopeids)

_Defined in_ [_src/types/index.ts:966_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L966)

array of Scope IDs that are exempted from the Restriction

### percentage

• **percentage**: _BigNumber_

_Defined in_ [_src/types/index.ts:992_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L992)

limit on the proportion of the total supply of the Security Token that can be held by a single investor at once


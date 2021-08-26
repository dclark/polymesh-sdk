# CountTransferRestrictionInput

## Hierarchy

* [TransferRestrictionInputBase](transferrestrictioninputbase.md)

  ↳ **CountTransferRestrictionInput**

## Index

### Properties

* [count](counttransferrestrictioninput.md#count)
* [exemptedIdentities](counttransferrestrictioninput.md#optional-exemptedidentities)
* [exemptedScopeIds](counttransferrestrictioninput.md#optional-exemptedscopeids)

## Properties

### count

• **count**: _BigNumber_

_Defined in_ [_src/types/index.ts:963_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L963)

limit on the amount of different \(unique\) investors that can hold the Security Token at once

### `Optional` exemptedIdentities

• **exemptedIdentities**? : _\(string \|_ [_Identity_](../classes/identity.md)_‹›\)\[\]_

_Inherited from_ [_TransferRestrictionInputBase_](transferrestrictioninputbase.md)_._[_exemptedIdentities_](transferrestrictioninputbase.md#optional-exemptedidentities)

_Defined in_ [_src/types/index.ts:948_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L948)

array of Identities \(or DIDs\) that are exempted from the Restriction

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : _string\[\]_

_Inherited from_ [_TransferRestrictionInputBase_](transferrestrictioninputbase.md)_._[_exemptedScopeIds_](transferrestrictioninputbase.md#optional-exemptedscopeids)

_Defined in_ [_src/types/index.ts:944_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L944)

array of Scope IDs that are exempted from the Restriction


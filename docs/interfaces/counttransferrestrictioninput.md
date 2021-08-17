# Interface: CountTransferRestrictionInput

## Hierarchy

* [TransferRestrictionInputBase](transferrestrictioninputbase.md)

  ↳ **CountTransferRestrictionInput**

## Index

### Properties

* [count](counttransferrestrictioninput.md#count)
* [exemptedIdentities](counttransferrestrictioninput.md#optional-exemptedidentities)
* [exemptedScopeIds](counttransferrestrictioninput.md#optional-exemptedscopeids)

## Properties

###  count

• **count**: *BigNumber*

*Defined in [src/types/index.ts:963](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L963)*

limit on the amount of different (unique) investors that can hold the Security Token at once

___

### `Optional` exemptedIdentities

• **exemptedIdentities**? : *(string | [Identity](../classes/identity.md)‹›)[]*

*Inherited from [TransferRestrictionInputBase](transferrestrictioninputbase.md).[exemptedIdentities](transferrestrictioninputbase.md#optional-exemptedidentities)*

*Defined in [src/types/index.ts:948](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L948)*

array of Identities (or DIDs) that are exempted from the Restriction

___

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : *string[]*

*Inherited from [TransferRestrictionInputBase](transferrestrictioninputbase.md).[exemptedScopeIds](transferrestrictioninputbase.md#optional-exemptedscopeids)*

*Defined in [src/types/index.ts:944](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L944)*

array of Scope IDs that are exempted from the Restriction

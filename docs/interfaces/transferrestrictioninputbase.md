# Interface: TransferRestrictionInputBase

## Hierarchy

* **TransferRestrictionInputBase**

  ↳ [CountTransferRestrictionInput](counttransferrestrictioninput.md)

  ↳ [PercentageTransferRestrictionInput](percentagetransferrestrictioninput.md)

## Index

### Properties

* [exemptedIdentities](transferrestrictioninputbase.md#optional-exemptedidentities)
* [exemptedScopeIds](transferrestrictioninputbase.md#optional-exemptedscopeids)

## Properties

### `Optional` exemptedIdentities

• **exemptedIdentities**? : *(string | [Identity](../classes/identity.md)‹›)[]*

*Defined in [src/types/index.ts:1048](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1048)*

array of Identities (or DIDs) that are exempted from the Restriction

___

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : *string[]*

*Defined in [src/types/index.ts:1044](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1044)*

array of Scope IDs that are exempted from the Restriction

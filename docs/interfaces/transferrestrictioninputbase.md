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

*Defined in [src/types/index.ts:970](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L970)*

array of Identities (or DIDs) that are exempted from the Restriction

___

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : *string[]*

*Defined in [src/types/index.ts:966](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L966)*

array of Scope IDs that are exempted from the Restriction

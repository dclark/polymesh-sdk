[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/TransferRestrictions/Percentage](../modules/api_entities_Asset_TransferRestrictions_Percentage.md) / Percentage

# Class: Percentage

[api/entities/Asset/TransferRestrictions/Percentage](../modules/api_entities_Asset_TransferRestrictions_Percentage.md).Percentage

Handles all Percentage Transfer Restriction related functionality

## Hierarchy

- [`TransferRestrictionBase`](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md)<[`Percentage`](../enums/types.TransferRestrictionType.md#percentage)\>

  ↳ **`Percentage`**

## Table of contents

### Properties

- [addRestriction](api_entities_Asset_TransferRestrictions_Percentage.Percentage.md#addrestriction)
- [get](api_entities_Asset_TransferRestrictions_Percentage.Percentage.md#get)
- [removeRestrictions](api_entities_Asset_TransferRestrictions_Percentage.Percentage.md#removerestrictions)
- [setRestrictions](api_entities_Asset_TransferRestrictions_Percentage.Percentage.md#setrestrictions)

## Properties

### addRestriction

• **addRestriction**: [`ProcedureMethod`](../interfaces/types.ProcedureMethod.md)<`Omit`<[`AddPercentageTransferRestrictionParams`](../modules/api_procedures_addTransferRestriction.md#addpercentagetransferrestrictionparams), ``"type"``\>, `BigNumber`, `BigNumber`\>

Add a Percentage Transfer Restriction to this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md).[addRestriction](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#addrestriction)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L27)

___

### get

• **get**: () => `Promise`<[`ActiveTransferRestrictions`](../interfaces/types.ActiveTransferRestrictions.md)<[`PercentageTransferRestriction`](../interfaces/types.PercentageTransferRestriction.md)\>\>

#### Type declaration

▸ (): `Promise`<[`ActiveTransferRestrictions`](../interfaces/types.ActiveTransferRestrictions.md)<[`PercentageTransferRestriction`](../interfaces/types.PercentageTransferRestriction.md)\>\>

Retrieve all active Percentage Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

##### Returns

`Promise`<[`ActiveTransferRestrictions`](../interfaces/types.ActiveTransferRestrictions.md)<[`PercentageTransferRestriction`](../interfaces/types.PercentageTransferRestriction.md)\>\>

#### Overrides

[TransferRestrictionBase](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md).[get](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#get)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L56)

___

### removeRestrictions

• **removeRestrictions**: [`NoArgsProcedureMethod`](../interfaces/types.NoArgsProcedureMethod.md)<`BigNumber`, `BigNumber`\>

Removes all Percentage Transfer Restrictions from this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md).[removeRestrictions](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#removerestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L47)

___

### setRestrictions

• **setRestrictions**: [`ProcedureMethod`](../interfaces/types.ProcedureMethod.md)<`Omit`<[`SetPercentageTransferRestrictionsParams`](../interfaces/api_procedures_setTransferRestrictions.SetPercentageTransferRestrictionsParams.md), ``"type"``\>, `BigNumber`, `BigNumber`\>

Sets all Percentage Transfer Restrictions on this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md).[setRestrictions](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#setrestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:37](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L37)

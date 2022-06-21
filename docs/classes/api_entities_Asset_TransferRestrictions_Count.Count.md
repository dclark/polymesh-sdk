[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/TransferRestrictions/Count](../modules/api_entities_Asset_TransferRestrictions_Count.md) / Count

# Class: Count

[api/entities/Asset/TransferRestrictions/Count](../modules/api_entities_Asset_TransferRestrictions_Count.md).Count

Handles all Count Transfer Restriction related functionality

## Hierarchy

- [`TransferRestrictionBase`](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md)<[`Count`](../enums/types.TransferRestrictionType.md#count)\>

  ↳ **`Count`**

## Table of contents

### Properties

- [addRestriction](api_entities_Asset_TransferRestrictions_Count.Count.md#addrestriction)
- [get](api_entities_Asset_TransferRestrictions_Count.Count.md#get)
- [removeRestrictions](api_entities_Asset_TransferRestrictions_Count.Count.md#removerestrictions)
- [setRestrictions](api_entities_Asset_TransferRestrictions_Count.Count.md#setrestrictions)

## Properties

### addRestriction

• **addRestriction**: [`ProcedureMethod`](../interfaces/types.ProcedureMethod.md)<`Omit`<[`AddCountTransferRestrictionParams`](../modules/api_procedures_addTransferRestriction.md#addcounttransferrestrictionparams), ``"type"``\>, `BigNumber`, `BigNumber`\>

Add a Count Transfer Restriction to this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md).[addRestriction](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#addrestriction)

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/Count.ts#L27)

___

### get

• **get**: () => `Promise`<[`ActiveTransferRestrictions`](../interfaces/types.ActiveTransferRestrictions.md)<[`CountTransferRestriction`](../interfaces/types.CountTransferRestriction.md)\>\>

#### Type declaration

▸ (): `Promise`<[`ActiveTransferRestrictions`](../interfaces/types.ActiveTransferRestrictions.md)<[`CountTransferRestriction`](../interfaces/types.CountTransferRestriction.md)\>\>

Retrieve all active Count Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

##### Returns

`Promise`<[`ActiveTransferRestrictions`](../interfaces/types.ActiveTransferRestrictions.md)<[`CountTransferRestriction`](../interfaces/types.CountTransferRestriction.md)\>\>

#### Overrides

[TransferRestrictionBase](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md).[get](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#get)

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/Count.ts#L56)

___

### removeRestrictions

• **removeRestrictions**: [`NoArgsProcedureMethod`](../interfaces/types.NoArgsProcedureMethod.md)<`BigNumber`, `BigNumber`\>

Removes all Count Transfer Restrictions from this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md).[removeRestrictions](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#removerestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/Count.ts#L47)

___

### setRestrictions

• **setRestrictions**: [`ProcedureMethod`](../interfaces/types.ProcedureMethod.md)<`Omit`<[`SetCountTransferRestrictionsParams`](../interfaces/api_procedures_setTransferRestrictions.SetCountTransferRestrictionsParams.md), ``"type"``\>, `BigNumber`, `BigNumber`\>

Sets all Count Transfer Restrictions on this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md).[setRestrictions](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#setrestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:37](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/Count.ts#L37)

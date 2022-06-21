[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/TransferRestrictions/TransferRestrictionBase](../modules/api_entities_Asset_TransferRestrictions_TransferRestrictionBase.md) / TransferRestrictionBase

# Class: TransferRestrictionBase<T\>

[api/entities/Asset/TransferRestrictions/TransferRestrictionBase](../modules/api_entities_Asset_TransferRestrictions_TransferRestrictionBase.md).TransferRestrictionBase

Base class for managing Transfer Restrictions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TransferRestrictionType`](../enums/types.TransferRestrictionType.md) |

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`TransferRestrictionBase`**

  ↳↳ [`Count`](api_entities_Asset_TransferRestrictions_Count.Count.md)

  ↳↳ [`Percentage`](api_entities_Asset_TransferRestrictions_Percentage.Percentage.md)

## Table of contents

### Methods

- [addRestriction](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#addrestriction)
- [get](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#get)
- [removeRestrictions](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#removerestrictions)
- [setRestrictions](api_entities_Asset_TransferRestrictions_TransferRestrictionBase.TransferRestrictionBase.md#setrestrictions)

## Methods

### addRestriction

▸ **addRestriction**(`args`, `opts?`): `Promise`<`TransactionQueue`<`BigNumber`, `BigNumber`, `unknown`[][]\>\>

Add a Transfer Restriction of the corresponding type to this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [addRestriction.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `AddRestrictionParams`<`T`\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`BigNumber`, `BigNumber`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:128](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L128)

___

### get

▸ **get**(): `Promise`<`GetReturnType`<`T`\>\>

Retrieve all active Transfer Restrictions of the corresponding type

**`note`** there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Returns

`Promise`<`GetReturnType`<`T`\>\>

#### Defined in

[api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:163](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L163)

___

### removeRestrictions

▸ **removeRestrictions**(`opts?`): `Promise`<`TransactionQueue`<`BigNumber`, `BigNumber`, `unknown`[][]\>\>

Removes all Transfer Restrictions of the corresponding type from this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [removeRestrictions.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`BigNumber`, `BigNumber`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L152)

___

### setRestrictions

▸ **setRestrictions**(`args`, `opts?`): `Promise`<`TransactionQueue`<`BigNumber`, `BigNumber`, `unknown`[][]\>\>

Sets all Transfer Restrictions of the corresponding type on this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [setRestrictions.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `SetRestrictionsParams`<`T`\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`BigNumber`, `BigNumber`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:140](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L140)

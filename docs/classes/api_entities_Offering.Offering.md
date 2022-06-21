[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Offering](../modules/api_entities_Offering.md) / Offering

# Class: Offering

[api/entities/Offering](../modules/api_entities_Offering.md).Offering

Represents an Asset Offering in the Polymesh blockchain

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_Offering.UniqueIdentifiers.md), `HumanReadable`\>

  ↳ **`Offering`**

## Table of contents

### Properties

- [asset](api_entities_Offering.Offering.md#asset)
- [id](api_entities_Offering.Offering.md#id)
- [uuid](api_entities_Offering.Offering.md#uuid)

### Methods

- [close](api_entities_Offering.Offering.md#close)
- [details](api_entities_Offering.Offering.md#details)
- [exists](api_entities_Offering.Offering.md#exists)
- [freeze](api_entities_Offering.Offering.md#freeze)
- [getInvestments](api_entities_Offering.Offering.md#getinvestments)
- [invest](api_entities_Offering.Offering.md#invest)
- [isEqual](api_entities_Offering.Offering.md#isequal)
- [modifyTimes](api_entities_Offering.Offering.md#modifytimes)
- [toHuman](api_entities_Offering.Offering.md#tohuman)
- [unfreeze](api_entities_Offering.Offering.md#unfreeze)
- [generateUuid](api_entities_Offering.Offering.md#generateuuid)
- [unserialize](api_entities_Offering.Offering.md#unserialize)

## Properties

### asset

• **asset**: [`Asset`](api_entities_Asset.Asset.md)

Asset being offered

#### Defined in

[api/entities/Offering/index.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L66)

___

### id

• **id**: `BigNumber`

identifier number of the Offering

#### Defined in

[api/entities/Offering/index.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L61)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### close

▸ **close**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Close the Offering

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [close.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Offering/index.ts:159](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L159)

___

### details

▸ **details**(): `Promise`<[`OfferingDetails`](../interfaces/api_entities_Offering_types.OfferingDetails.md)\>

Retrieve the Offering's details

**`note`** can be subscribed to

#### Returns

`Promise`<[`OfferingDetails`](../interfaces/api_entities_Offering_types.OfferingDetails.md)\>

#### Defined in

[api/entities/Offering/index.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L112)

▸ **details**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`OfferingDetails`](../interfaces/api_entities_Offering_types.OfferingDetails.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Offering/index.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L113)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Offering exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/Offering/index.ts:278](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L278)

___

### freeze

▸ **freeze**(`opts?`): `Promise`<`TransactionQueue`<[`Offering`](api_entities_Offering.Offering.md), [`Offering`](api_entities_Offering.Offering.md), `unknown`[][]\>\>

Freeze the Offering

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Offering`](api_entities_Offering.Offering.md), [`Offering`](api_entities_Offering.Offering.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Offering/index.ts:169](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L169)

___

### getInvestments

▸ **getInvestments**(`opts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`Investment`](../interfaces/api_entities_Offering_types.Investment.md)\>\>

Retrieve all investments made on this Offering

**`note`** supports pagination

**`note`** uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`Investment`](../interfaces/api_entities_Offering_types.Investment.md)\>\>

#### Defined in

[api/entities/Offering/index.ts:221](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L221)

___

### invest

▸ **invest**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Invest in the Offering

**`note`** required roles:
  - Purchase Portfolio Custodian
  - Funding Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [invest.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InvestInOfferingParams`](../interfaces/api_procedures_investInOffering.InvestInOfferingParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Offering/index.ts:208](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L208)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](api_entities_Entity.Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[isEqual](api_entities_Entity.Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L61)

___

### modifyTimes

▸ **modifyTimes**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify the start/end time of the Offering

**`throws`** if:
  - Trying to modify the start time on an Offering that already started
  - Trying to modify anything on an Offering that already ended
  - Trying to change start or end time to a past date

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [modifyTimes.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyOfferingTimesParams`](../modules/api_procedures_modifyOfferingTimes.md#modifyofferingtimesparams) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Offering/index.ts:194](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L194)

___

### toHuman

▸ **toHuman**(): `HumanReadable`

Return the Offering's ID and Asset ticker

#### Returns

`HumanReadable`

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/Offering/index.ts:296](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L296)

___

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`<`TransactionQueue`<[`Offering`](api_entities_Offering.Offering.md), [`Offering`](api_entities_Offering.Offering.md), `unknown`[][]\>\>

Unfreeze the Offering

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Offering`](api_entities_Offering.Offering.md), [`Offering`](api_entities_Offering.Offering.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Offering/index.ts:179](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Offering/index.ts#L179)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[generateUuid](api_entities_Entity.Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[unserialize](api_entities_Entity.Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

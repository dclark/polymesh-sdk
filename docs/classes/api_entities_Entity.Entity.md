[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Entity](../modules/api_entities_Entity.md) / Entity

# Class: Entity<UniqueIdentifiers, HumanReadable\>

[api/entities/Entity](../modules/api_entities_Entity.md).Entity

Represents an object or resource in the Polymesh Ecosystem with its own set of properties and functionality

## Type parameters

| Name |
| :------ |
| `UniqueIdentifiers` |
| `HumanReadable` |

## Hierarchy

- **`Entity`**

  ↳ [`Account`](api_entities_Account.Account.md)

  ↳ [`Asset`](api_entities_Asset.Asset.md)

  ↳ [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md)

  ↳ [`Checkpoint`](api_entities_Checkpoint.Checkpoint.md)

  ↳ [`CheckpointSchedule`](api_entities_CheckpointSchedule.CheckpointSchedule.md)

  ↳ [`CorporateActionBase`](api_entities_CorporateActionBase.CorporateActionBase.md)

  ↳ [`Identity`](api_entities_Identity.Identity.md)

  ↳ [`Instruction`](api_entities_Instruction.Instruction.md)

  ↳ [`Offering`](api_entities_Offering.Offering.md)

  ↳ [`PermissionGroup`](api_entities_PermissionGroup.PermissionGroup.md)

  ↳ [`Portfolio`](api_entities_Portfolio.Portfolio.md)

  ↳ [`Subsidy`](api_entities_Subsidy.Subsidy.md)

  ↳ [`TickerReservation`](api_entities_TickerReservation.TickerReservation.md)

  ↳ [`Venue`](api_entities_Venue.Venue.md)

## Table of contents

### Properties

- [uuid](api_entities_Entity.Entity.md#uuid)

### Methods

- [exists](api_entities_Entity.Entity.md#exists)
- [isEqual](api_entities_Entity.Entity.md#isequal)
- [toHuman](api_entities_Entity.Entity.md#tohuman)
- [generateUuid](api_entities_Entity.Entity.md#generateuuid)
- [isUniqueIdentifiers](api_entities_Entity.Entity.md#isuniqueidentifiers)
- [unserialize](api_entities_Entity.Entity.md#unserialize)

## Properties

### uuid

• **uuid**: `string`

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ `Abstract` **exists**(): `Promise`<`boolean`\>

Determine whether this Entity exists on chain

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Entity.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L68)

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

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L61)

___

### toHuman

▸ `Abstract` **toHuman**(): `HumanReadable`

Returns Entity data in a human readable (JSON) format

#### Returns

`HumanReadable`

#### Defined in

[api/entities/Entity.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L73)

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

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L14)

___

### isUniqueIdentifiers

▸ `Static` **isUniqueIdentifiers**(`identifiers`): `boolean`

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifiers` | `unknown` | object to type check |

#### Returns

`boolean`

#### Defined in

[api/entities/Entity.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L42)

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

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

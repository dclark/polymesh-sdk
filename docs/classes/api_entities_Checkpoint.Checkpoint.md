[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Checkpoint](../modules/api_entities_Checkpoint.md) / Checkpoint

# Class: Checkpoint

[api/entities/Checkpoint](../modules/api_entities_Checkpoint.md).Checkpoint

Represents a snapshot of the Asset's holders and their respective balances
  at a certain point in time

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_Checkpoint.UniqueIdentifiers.md), `HumanReadable`\>

  ↳ **`Checkpoint`**

## Table of contents

### Properties

- [asset](api_entities_Checkpoint.Checkpoint.md#asset)
- [id](api_entities_Checkpoint.Checkpoint.md#id)
- [uuid](api_entities_Checkpoint.Checkpoint.md#uuid)

### Methods

- [allBalances](api_entities_Checkpoint.Checkpoint.md#allbalances)
- [balance](api_entities_Checkpoint.Checkpoint.md#balance)
- [createdAt](api_entities_Checkpoint.Checkpoint.md#createdat)
- [exists](api_entities_Checkpoint.Checkpoint.md#exists)
- [isEqual](api_entities_Checkpoint.Checkpoint.md#isequal)
- [toHuman](api_entities_Checkpoint.Checkpoint.md#tohuman)
- [totalSupply](api_entities_Checkpoint.Checkpoint.md#totalsupply)
- [generateUuid](api_entities_Checkpoint.Checkpoint.md#generateuuid)
- [unserialize](api_entities_Checkpoint.Checkpoint.md#unserialize)

## Properties

### asset

• **asset**: [`Asset`](api_entities_Asset.Asset.md)

Asset whose balances are being recorded in this Checkpoint

#### Defined in

[api/entities/Checkpoint.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Checkpoint.ts#L51)

___

### id

• **id**: `BigNumber`

Checkpoint identifier number

#### Defined in

[api/entities/Checkpoint.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Checkpoint.ts#L46)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### allBalances

▸ **allBalances**(`paginationOpts?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`IdentityBalance`](../interfaces/api_entities_Asset_types.IdentityBalance.md)\>\>

Retrieve all Asset Holder balances at this Checkpoint

**`note`** supports pagination

**`note`** current Asset holders who didn't hold any tokens when the Checkpoint was created will be listed with a balance of 0.
This arises from a chain storage optimization and pagination. @see [balance](api_entities_Checkpoint.Checkpoint.md#balance) for a more detailed explanation of the logic

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../interfaces/types.PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`IdentityBalance`](../interfaces/api_entities_Asset_types.IdentityBalance.md)\>\>

#### Defined in

[api/entities/Checkpoint.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Checkpoint.ts#L108)

___

### balance

▸ **balance**(`args?`): `Promise`<`BigNumber`\>

Retrieve the balance of a specific Asset Holder Identity at this Checkpoint

**`note`** A checkpoint only records balances when they change. The implementation is to query for all balance updates for [ticker, did] pair.
If no balance updates have happened since the Checkpoint has been created, then the storage will not have an entry for the user. Instead the current balance should be used.
The balance is stored only when the Identity makes a transaction after a Checkpoint is created. This helps keep storage usage to a minimum

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/entities/Checkpoint.ts:201](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Checkpoint.ts#L201)

___

### createdAt

▸ **createdAt**(): `Promise`<`Date`\>

Retrieve this Checkpoint's creation date

#### Returns

`Promise`<`Date`\>

#### Defined in

[api/entities/Checkpoint.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Checkpoint.ts#L86)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Checkpoint exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/Checkpoint.ts:245](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Checkpoint.ts#L245)

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

### toHuman

▸ **toHuman**(): `HumanReadable`

Return the Checkpoint's ticker and identifier

#### Returns

`HumanReadable`

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/Checkpoint.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Checkpoint.ts#L265)

___

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

Retrieve the Asset's total supply at this checkpoint

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/entities/Checkpoint.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Checkpoint.ts#L68)

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

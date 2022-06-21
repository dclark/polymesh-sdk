[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Account](../modules/api_entities_Account.md) / Account

# Class: Account

[api/entities/Account](../modules/api_entities_Account.md).Account

Represents an Account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals (among other things)

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_Account.UniqueIdentifiers.md), `string`\>

  ↳ **`Account`**

## Table of contents

### Properties

- [address](api_entities_Account.Account.md#address)
- [authorizations](api_entities_Account.Account.md#authorizations)
- [key](api_entities_Account.Account.md#key)
- [uuid](api_entities_Account.Account.md#uuid)

### Methods

- [checkPermissions](api_entities_Account.Account.md#checkpermissions)
- [exists](api_entities_Account.Account.md#exists)
- [getBalance](api_entities_Account.Account.md#getbalance)
- [getIdentity](api_entities_Account.Account.md#getidentity)
- [getPermissions](api_entities_Account.Account.md#getpermissions)
- [getSubsidy](api_entities_Account.Account.md#getsubsidy)
- [getTransactionHistory](api_entities_Account.Account.md#gettransactionhistory)
- [hasPermissions](api_entities_Account.Account.md#haspermissions)
- [isEqual](api_entities_Account.Account.md#isequal)
- [isFrozen](api_entities_Account.Account.md#isfrozen)
- [toHuman](api_entities_Account.Account.md#tohuman)
- [generateUuid](api_entities_Account.Account.md#generateuuid)
- [unserialize](api_entities_Account.Account.md#unserialize)

## Properties

### address

• **address**: `string`

Polymesh-specific address of the Account. Serves as an identifier

#### Defined in

[api/entities/Account.ts:251](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L251)

___

### authorizations

• **authorizations**: [`Authorizations`](api_entities_common_namespaces_Authorizations.Authorizations.md)<[`Account`](api_entities_Account.Account.md)\>

#### Defined in

[api/entities/Account.ts:260](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L260)

___

### key

• **key**: `string`

A hex representation of the cryptographic public key of the Account. This is consistent across
Substrate chains, while the address depends on the chain as well.

#### Defined in

[api/entities/Account.ts:257](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L257)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### checkPermissions

▸ **checkPermissions**(`permissions`): `Promise`<[`CheckPermissionsResult`](../interfaces/types.CheckPermissionsResult.md)<[`Account`](../enums/types.SignerType.md#account)\>\>

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`SimplePermissions`](../interfaces/types.SimplePermissions.md) |

#### Returns

`Promise`<[`CheckPermissionsResult`](../interfaces/types.CheckPermissionsResult.md)<[`Account`](../enums/types.SignerType.md#account)\>\>

which permissions the Account is missing (if any) and the final result

#### Defined in

[api/entities/Account.ts:531](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L531)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Account exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/Account.ts:597](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L597)

___

### getBalance

▸ **getBalance**(): `Promise`<[`Balance`](../interfaces/types.Balance.md)\>

Get the free/locked POLYX balance of the Account

**`note`** can be subscribed to

#### Returns

`Promise`<[`Balance`](../interfaces/types.Balance.md)\>

#### Defined in

[api/entities/Account.ts:282](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L282)

▸ **getBalance**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`Balance`](../interfaces/types.Balance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Account.ts:283](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L283)

___

### getIdentity

▸ **getIdentity**(): `Promise`<``null`` \| [`Identity`](api_entities_Identity.Identity.md)\>

Retrieve the Identity associated to this Account (null if there is none)

#### Returns

`Promise`<``null`` \| [`Identity`](api_entities_Identity.Identity.md)\>

#### Defined in

[api/entities/Account.ts:323](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L323)

___

### getPermissions

▸ **getPermissions**(): `Promise`<[`Permissions`](../interfaces/types.Permissions.md)\>

Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity

**`throws`** if there is no Identity associated with the Account

#### Returns

`Promise`<[`Permissions`](../interfaces/types.Permissions.md)\>

#### Defined in

[api/entities/Account.ts:490](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L490)

___

### getSubsidy

▸ **getSubsidy**(): `Promise`<``null`` \| [`SubsidyWithAllowance`](../interfaces/api_entities_Subsidy_types.SubsidyWithAllowance.md)\>

Get the subsidized balance of this Account and the subsidizer Account. If
  this Account isn't being subsidized, return null

**`note`** can be subscribed to

#### Returns

`Promise`<``null`` \| [`SubsidyWithAllowance`](../interfaces/api_entities_Subsidy_types.SubsidyWithAllowance.md)\>

#### Defined in

[api/entities/Account.ts:304](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L304)

▸ **getSubsidy**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<``null`` \| [`SubsidyWithAllowance`](../interfaces/api_entities_Subsidy_types.SubsidyWithAllowance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Account.ts:305](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L305)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`ExtrinsicData`](../interfaces/types.ExtrinsicData.md)\>\>

Retrieve a list of transactions signed by this Account. Can be filtered using parameters

**`note`** if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account

**`note`** uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.blockHash?` | `string` | - |
| `filters.blockNumber?` | `BigNumber` | - |
| `filters.orderBy?` | `TransactionOrderByInput` | - |
| `filters.size?` | `BigNumber` | page size |
| `filters.start?` | `BigNumber` | page offset |
| `filters.success?` | `boolean` | whether the transaction was successful or not |
| `filters.tag?` | `TxTag` | tag associated with the transaction |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`ExtrinsicData`](../interfaces/types.ExtrinsicData.md)\>\>

#### Defined in

[api/entities/Account.ts:368](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L368)

___

### hasPermissions

▸ **hasPermissions**(`permissions`): `Promise`<`boolean`\>

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

**`deprecated`** in favor of `checkPermissions`

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`SimplePermissions`](../interfaces/types.SimplePermissions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Account.ts:588](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L588)

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

### isFrozen

▸ **isFrozen**(): `Promise`<`boolean`\>

Check whether this Account is frozen. If frozen, it cannot perform any Identity related action until the primary Account of the Identity unfreezes all secondary Accounts

**`note`** returns false if the Account isn't associated to any Identity

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Account.ts:469](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L469)

___

### toHuman

▸ **toHuman**(): `string`

Return the Account's address

#### Returns

`string`

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/Account.ts:604](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Account.ts#L604)

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

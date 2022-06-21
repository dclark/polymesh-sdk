[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Subsidy](../modules/api_entities_Subsidy.md) / Subsidy

# Class: Subsidy

[api/entities/Subsidy](../modules/api_entities_Subsidy.md).Subsidy

Represents a Subsidy relationship on chain

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_Subsidy.UniqueIdentifiers.md), `HumanReadable`\>

  ↳ **`Subsidy`**

## Table of contents

### Properties

- [beneficiary](api_entities_Subsidy.Subsidy.md#beneficiary)
- [subsidizer](api_entities_Subsidy.Subsidy.md#subsidizer)
- [uuid](api_entities_Subsidy.Subsidy.md#uuid)

### Methods

- [decreaseAllowance](api_entities_Subsidy.Subsidy.md#decreaseallowance)
- [exists](api_entities_Subsidy.Subsidy.md#exists)
- [getAllowance](api_entities_Subsidy.Subsidy.md#getallowance)
- [increaseAllowance](api_entities_Subsidy.Subsidy.md#increaseallowance)
- [isEqual](api_entities_Subsidy.Subsidy.md#isequal)
- [quit](api_entities_Subsidy.Subsidy.md#quit)
- [setAllowance](api_entities_Subsidy.Subsidy.md#setallowance)
- [toHuman](api_entities_Subsidy.Subsidy.md#tohuman)
- [generateUuid](api_entities_Subsidy.Subsidy.md#generateuuid)
- [unserialize](api_entities_Subsidy.Subsidy.md#unserialize)

## Properties

### beneficiary

• **beneficiary**: [`Account`](api_entities_Account.Account.md)

Account whose transactions are being paid for

#### Defined in

[api/entities/Subsidy/index.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/index.ts#L51)

___

### subsidizer

• **subsidizer**: [`Account`](api_entities_Account.Account.md)

Account that is paying for the transactions

#### Defined in

[api/entities/Subsidy/index.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/index.ts#L55)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### decreaseAllowance

▸ **decreaseAllowance**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Decrease allowance for this Subsidy relationship

**`note`** Only the subsidizer is allowed to decrease the allowance

**`throws`** if the amount to decrease by is more than the existing allowance

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [decreaseAllowance.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`DecreaseAllowanceParams`](../interfaces/api_procedures_modifyAllowance.DecreaseAllowanceParams.md), ``"allowance"``\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Subsidy/index.ts:176](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/index.ts#L176)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Subsidy relationship exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/Subsidy/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/index.ts#L183)

___

### getAllowance

▸ **getAllowance**(): `Promise`<`BigNumber`\>

Get amount of POLYX subsidized for this Subsidy relationship

**`throws`** if the Subsidy does not exist

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/entities/Subsidy/index.ts:202](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/index.ts#L202)

___

### increaseAllowance

▸ **increaseAllowance**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Increase allowance for this Subsidy relationship

**`note`** Only the subsidizer is allowed to increase the allowance

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [increaseAllowance.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`IncreaseAllowanceParams`](../interfaces/api_procedures_modifyAllowance.IncreaseAllowanceParams.md), ``"allowance"``\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Subsidy/index.ts:162](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/index.ts#L162)

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

### quit

▸ **quit**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Terminate this Subsidy relationship. The beneficiary Account will be forced to pay for their own transactions

**`note`** both the beneficiary and the subsidizer are allowed to unilaterally quit the Subsidy

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [quit.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Subsidy/index.ts:136](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/index.ts#L136)

___

### setAllowance

▸ **setAllowance**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Set allowance for this Subsidy relationship

**`note`** Only the subsidizer is allowed to set the allowance

**`throws`** if the allowance to set is equal to the current allowance

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [setAllowance.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`SetAllowanceParams`](../interfaces/api_procedures_modifyAllowance.SetAllowanceParams.md), ``"allowance"``\> |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Subsidy/index.ts:150](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/index.ts#L150)

___

### toHuman

▸ **toHuman**(): [`UniqueIdentifiers`](../interfaces/api_entities_Subsidy.UniqueIdentifiers.md)

Return the Subsidy's static data

#### Returns

[`UniqueIdentifiers`](../interfaces/api_entities_Subsidy.UniqueIdentifiers.md)

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/Subsidy/index.ts:224](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/index.ts#L224)

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

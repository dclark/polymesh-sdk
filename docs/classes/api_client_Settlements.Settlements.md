[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/client/Settlements](../modules/api_client_Settlements.md) / Settlements

# Class: Settlements

[api/client/Settlements](../modules/api_client_Settlements.md).Settlements

Handles all Settlement related functionality

## Table of contents

### Methods

- [addInstruction](api_client_Settlements.Settlements.md#addinstruction)
- [affirmInstruction](api_client_Settlements.Settlements.md#affirminstruction)
- [createVenue](api_client_Settlements.Settlements.md#createvenue)
- [getInstruction](api_client_Settlements.Settlements.md#getinstruction)
- [getVenue](api_client_Settlements.Settlements.md#getvenue)

## Methods

### addInstruction

▸ **addInstruction**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Instruction`](api_entities_Instruction.Instruction.md)[], [`Instruction`](api_entities_Instruction.Instruction.md), `unknown`[][]\>\>

Create an Instruction to exchange Assets

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [addInstruction.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddInstructionWithVenueIdParams`](../interfaces/api_procedures_addInstruction.AddInstructionWithVenueIdParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Instruction`](api_entities_Instruction.Instruction.md)[], [`Instruction`](api_entities_Instruction.Instruction.md), `unknown`[][]\>\>

#### Defined in

[api/client/Settlements.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Settlements.ts#L118)

___

### affirmInstruction

▸ **affirmInstruction**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Instruction`](api_entities_Instruction.Instruction.md), [`Instruction`](api_entities_Instruction.Instruction.md), `unknown`[][]\>\>

Affirm an Instruction (authorize)

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [affirmInstruction.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AffirmInstructionParams`](../interfaces/api_procedures_modifyInstructionAffirmation.AffirmInstructionParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Instruction`](api_entities_Instruction.Instruction.md), [`Instruction`](api_entities_Instruction.Instruction.md), `unknown`[][]\>\>

#### Defined in

[api/client/Settlements.ts:128](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Settlements.ts#L128)

___

### createVenue

▸ **createVenue**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Venue`](api_entities_Venue.Venue.md), [`Venue`](api_entities_Venue.Venue.md), `unknown`[][]\>\>

Create a Venue under the ownership of the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [createVenue.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateVenueParams`](../interfaces/api_procedures_createVenue.CreateVenueParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Venue`](api_entities_Venue.Venue.md), [`Venue`](api_entities_Venue.Venue.md), `unknown`[][]\>\>

#### Defined in

[api/client/Settlements.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Settlements.ts#L108)

___

### getInstruction

▸ **getInstruction**(`args`): `Promise`<[`Instruction`](api_entities_Instruction.Instruction.md)\>

Retrieve an Instruction by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.id` | `BigNumber` | identifier number of the Instruction |

#### Returns

`Promise`<[`Instruction`](api_entities_Instruction.Instruction.md)\>

#### Defined in

[api/client/Settlements.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Settlements.ts#L86)

___

### getVenue

▸ **getVenue**(`args`): `Promise`<[`Venue`](api_entities_Venue.Venue.md)\>

Retrieve a Venue by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.id` | `BigNumber` | identifier number of the Venue |

#### Returns

`Promise`<[`Venue`](api_entities_Venue.Venue.md)\>

#### Defined in

[api/client/Settlements.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Settlements.ts#L65)

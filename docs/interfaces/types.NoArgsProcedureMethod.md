[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / NoArgsProcedureMethod

# Interface: NoArgsProcedureMethod<ProcedureReturnValue, ReturnValue\>

[types](../modules/types.md).NoArgsProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### NoArgsProcedureMethod

▸ **NoArgsProcedureMethod**(`opts?`): `Promise`<`TransactionQueue`<`ProcedureReturnValue`, `ReturnValue`, `unknown`[][]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`ProcedureReturnValue`, `ReturnValue`, `unknown`[][]\>\>

#### Defined in

[types/index.ts:1359](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1359)

## Table of contents

### Methods

- [checkAuthorization](types.NoArgsProcedureMethod.md#checkauthorization)

## Methods

### checkAuthorization

▸ **checkAuthorization**(`opts?`): `Promise`<[`ProcedureAuthorizationStatus`](types.ProcedureAuthorizationStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](types.ProcedureOpts.md) |

#### Returns

`Promise`<[`ProcedureAuthorizationStatus`](types.ProcedureAuthorizationStatus.md)\>

#### Defined in

[types/index.ts:1360](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1360)

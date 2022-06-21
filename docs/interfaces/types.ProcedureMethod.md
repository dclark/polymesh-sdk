[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ProcedureMethod

# Interface: ProcedureMethod<MethodArgs, ProcedureReturnValue, ReturnValue\>

[types](../modules/types.md).ProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `MethodArgs` | `MethodArgs` |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### ProcedureMethod

▸ **ProcedureMethod**(`args`, `opts?`): `Promise`<`TransactionQueue`<`ProcedureReturnValue`, `ReturnValue`, `unknown`[][]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `MethodArgs` |
| `opts?` | [`ProcedureOpts`](types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`ProcedureReturnValue`, `ReturnValue`, `unknown`[][]\>\>

#### Defined in

[types/index.ts:1349](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1349)

## Table of contents

### Methods

- [checkAuthorization](types.ProcedureMethod.md#checkauthorization)

## Methods

### checkAuthorization

▸ **checkAuthorization**(`args`, `opts?`): `Promise`<[`ProcedureAuthorizationStatus`](types.ProcedureAuthorizationStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `MethodArgs` |
| `opts?` | [`ProcedureOpts`](types.ProcedureOpts.md) |

#### Returns

`Promise`<[`ProcedureAuthorizationStatus`](types.ProcedureAuthorizationStatus.md)\>

#### Defined in

[types/index.ts:1352](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1352)

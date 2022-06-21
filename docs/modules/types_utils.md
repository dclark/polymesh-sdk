[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / types/utils

# Module: types/utils

## Table of contents

### Type Aliases

- [ArgsType](types_utils.md#argstype)
- [Ensured](types_utils.md#ensured)
- [HumanReadableType](types_utils.md#humanreadabletype)
- [Modify](types_utils.md#modify)
- [Mutable](types_utils.md#mutable)
- [WithRequired](types_utils.md#withrequired)

## Type Aliases

### ArgsType

Ƭ **ArgsType**<`T`\>: `T` extends (...`args`: infer A) => `unknown` ? `A` : `never`

Less strict version of Parameters<T>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/utils/index.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/utils/index.ts#L26)

___

### Ensured

Ƭ **Ensured**<`T`, `K`\>: `Required`<`Pick`<`T`, `K`\>\>

Pick a single property from T and ensure it is defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[types/utils/index.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/utils/index.ts#L74)

___

### HumanReadableType

Ƭ **HumanReadableType**<`T`\>: `T` extends [`Entity`](../classes/api_entities_Entity.Entity.md)<`unknown`, infer H\> ? [`HumanReadableType`](types_utils.md#humanreadabletype)<`H`\> : `T` extends `BigNumber` ? `string` : `T` extends `Date` ? `string` : `T` extends `object` ? { [K in keyof T]: T[K] extends Entity<unknown, infer E\> ? HumanReadableType<E\> : HumanReadableType<T[K]\> } : `T`

Recursively traverse a type and transform its Entity properties into their
  human readable version (as if `.toHuman` had been called on all of them)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/utils/index.ts:32](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/utils/index.ts#L32)

___

### Modify

Ƭ **Modify**<`T`, `R`\>: `Omit`<`T`, keyof `R`\> & `R`

Override T with the properties of R

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Defined in

[types/utils/index.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/utils/index.ts#L63)

___

### Mutable

Ƭ **Mutable**<`Immutable`\>: { -readonly [K in keyof Immutable]: Immutable[K] }

#### Type parameters

| Name |
| :------ |
| `Immutable` |

#### Defined in

[types/utils/index.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/utils/index.ts#L7)

___

### WithRequired

Ƭ **WithRequired**<`T`, `K`\>: `T` & { [P in K]-?: T[P] }

Ensure a specific property of T is defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[types/utils/index.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/utils/index.ts#L69)

[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ExtrinsicData

# Interface: ExtrinsicData

[types](../modules/types.md).ExtrinsicData

## Hierarchy

- **`ExtrinsicData`**

  ↳ [`ExtrinsicDataWithFees`](types.ExtrinsicDataWithFees.md)

## Table of contents

### Properties

- [address](types.ExtrinsicData.md#address)
- [blockHash](types.ExtrinsicData.md#blockhash)
- [blockNumber](types.ExtrinsicData.md#blocknumber)
- [extrinsicHash](types.ExtrinsicData.md#extrinsichash)
- [extrinsicIdx](types.ExtrinsicData.md#extrinsicidx)
- [nonce](types.ExtrinsicData.md#nonce)
- [params](types.ExtrinsicData.md#params)
- [specVersionId](types.ExtrinsicData.md#specversionid)
- [success](types.ExtrinsicData.md#success)
- [txTag](types.ExtrinsicData.md#txtag)

## Properties

### address

• **address**: ``null`` \| `string`

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

#### Defined in

[types/index.ts:329](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L329)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[types/index.ts:323](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L323)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[types/index.ts:324](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L324)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Defined in

[types/index.ts:338](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L338)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Defined in

[types/index.ts:325](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L325)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Defined in

[types/index.ts:333](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L333)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Defined in

[types/index.ts:335](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L335)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Defined in

[types/index.ts:337](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L337)

___

### success

• **success**: `boolean`

#### Defined in

[types/index.ts:336](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L336)

___

### txTag

• **txTag**: `TxTag`

#### Defined in

[types/index.ts:334](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L334)

[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ExtrinsicDataWithFees

# Interface: ExtrinsicDataWithFees

[types](../modules/types.md).ExtrinsicDataWithFees

## Hierarchy

- [`ExtrinsicData`](types.ExtrinsicData.md)

  ↳ **`ExtrinsicDataWithFees`**

## Table of contents

### Properties

- [address](types.ExtrinsicDataWithFees.md#address)
- [blockHash](types.ExtrinsicDataWithFees.md#blockhash)
- [blockNumber](types.ExtrinsicDataWithFees.md#blocknumber)
- [extrinsicHash](types.ExtrinsicDataWithFees.md#extrinsichash)
- [extrinsicIdx](types.ExtrinsicDataWithFees.md#extrinsicidx)
- [fee](types.ExtrinsicDataWithFees.md#fee)
- [nonce](types.ExtrinsicDataWithFees.md#nonce)
- [params](types.ExtrinsicDataWithFees.md#params)
- [specVersionId](types.ExtrinsicDataWithFees.md#specversionid)
- [success](types.ExtrinsicDataWithFees.md#success)
- [txTag](types.ExtrinsicDataWithFees.md#txtag)

## Properties

### address

• **address**: ``null`` \| `string`

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[address](types.ExtrinsicData.md#address)

#### Defined in

[types/index.ts:329](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L329)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[blockHash](types.ExtrinsicData.md#blockhash)

#### Defined in

[types/index.ts:323](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L323)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[blockNumber](types.ExtrinsicData.md#blocknumber)

#### Defined in

[types/index.ts:324](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L324)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[extrinsicHash](types.ExtrinsicData.md#extrinsichash)

#### Defined in

[types/index.ts:338](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L338)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[extrinsicIdx](types.ExtrinsicData.md#extrinsicidx)

#### Defined in

[types/index.ts:325](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L325)

___

### fee

• **fee**: [`Fees`](types.Fees.md)

#### Defined in

[types/index.ts:342](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L342)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[nonce](types.ExtrinsicData.md#nonce)

#### Defined in

[types/index.ts:333](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L333)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[params](types.ExtrinsicData.md#params)

#### Defined in

[types/index.ts:335](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L335)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[specVersionId](types.ExtrinsicData.md#specversionid)

#### Defined in

[types/index.ts:337](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L337)

___

### success

• **success**: `boolean`

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[success](types.ExtrinsicData.md#success)

#### Defined in

[types/index.ts:336](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L336)

___

### txTag

• **txTag**: `TxTag`

#### Inherited from

[ExtrinsicData](types.ExtrinsicData.md).[txTag](types.ExtrinsicData.md#txtag)

#### Defined in

[types/index.ts:334](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L334)

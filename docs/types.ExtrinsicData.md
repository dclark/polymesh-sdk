# Interface: ExtrinsicData

[types](../wiki/types).ExtrinsicData

## Hierarchy

- **`ExtrinsicData`**

  ↳ [`ExtrinsicDataWithFees`](../wiki/types.ExtrinsicDataWithFees)

## Table of contents

### Properties

- [address](../wiki/types.ExtrinsicData#address)
- [blockHash](../wiki/types.ExtrinsicData#blockhash)
- [blockNumber](../wiki/types.ExtrinsicData#blocknumber)
- [extrinsicHash](../wiki/types.ExtrinsicData#extrinsichash)
- [extrinsicIdx](../wiki/types.ExtrinsicData#extrinsicidx)
- [nonce](../wiki/types.ExtrinsicData#nonce)
- [params](../wiki/types.ExtrinsicData#params)
- [specVersionId](../wiki/types.ExtrinsicData#specversionid)
- [success](../wiki/types.ExtrinsicData#success)
- [txTag](../wiki/types.ExtrinsicData#txtag)

## Properties

### address

• **address**: ``null`` \| `string`

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

#### Defined in

[types/index.ts:332](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L332)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[types/index.ts:326](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L326)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[types/index.ts:327](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L327)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Defined in

[types/index.ts:341](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L341)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Defined in

[types/index.ts:328](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L328)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Defined in

[types/index.ts:336](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L336)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Defined in

[types/index.ts:338](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L338)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Defined in

[types/index.ts:340](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L340)

___

### success

• **success**: `boolean`

#### Defined in

[types/index.ts:339](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L339)

___

### txTag

• **txTag**: [`TxTag`](../wiki/generated.types#txtag)

#### Defined in

[types/index.ts:337](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L337)

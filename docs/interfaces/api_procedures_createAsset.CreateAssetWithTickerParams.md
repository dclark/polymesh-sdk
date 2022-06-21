[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/createAsset](../modules/api_procedures_createAsset.md) / CreateAssetWithTickerParams

# Interface: CreateAssetWithTickerParams

[api/procedures/createAsset](../modules/api_procedures_createAsset.md).CreateAssetWithTickerParams

## Hierarchy

- [`CreateAssetParams`](api_procedures_createAsset.CreateAssetParams.md)

  ↳ **`CreateAssetWithTickerParams`**

## Table of contents

### Properties

- [assetType](api_procedures_createAsset.CreateAssetWithTickerParams.md#assettype)
- [documents](api_procedures_createAsset.CreateAssetWithTickerParams.md#documents)
- [fundingRound](api_procedures_createAsset.CreateAssetWithTickerParams.md#fundinground)
- [initialSupply](api_procedures_createAsset.CreateAssetWithTickerParams.md#initialsupply)
- [isDivisible](api_procedures_createAsset.CreateAssetWithTickerParams.md#isdivisible)
- [name](api_procedures_createAsset.CreateAssetWithTickerParams.md#name)
- [requireInvestorUniqueness](api_procedures_createAsset.CreateAssetWithTickerParams.md#requireinvestoruniqueness)
- [securityIdentifiers](api_procedures_createAsset.CreateAssetWithTickerParams.md#securityidentifiers)
- [ticker](api_procedures_createAsset.CreateAssetWithTickerParams.md#ticker)

## Properties

### assetType

• **assetType**: `string`

type of security that the Asset represents (i.e. Equity, Debt, Commodity, etc). Common values are included in the
  [KnownAssetType](../enums/types.KnownAssetType.md) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Asset

#### Inherited from

[CreateAssetParams](api_procedures_createAsset.CreateAssetParams.md).[assetType](api_procedures_createAsset.CreateAssetParams.md#assettype)

#### Defined in

[api/procedures/createAsset.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/createAsset.ts#L45)

___

### documents

• `Optional` **documents**: [`AssetDocument`](types.AssetDocument.md)[]

#### Inherited from

[CreateAssetParams](api_procedures_createAsset.CreateAssetParams.md).[documents](api_procedures_createAsset.CreateAssetParams.md#documents)

#### Defined in

[api/procedures/createAsset.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/createAsset.ts#L54)

___

### fundingRound

• `Optional` **fundingRound**: `string`

(optional) funding round in which the Asset currently is (Series A, Series B, etc)

#### Inherited from

[CreateAssetParams](api_procedures_createAsset.CreateAssetParams.md).[fundingRound](api_procedures_createAsset.CreateAssetParams.md#fundinground)

#### Defined in

[api/procedures/createAsset.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/createAsset.ts#L53)

___

### initialSupply

• `Optional` **initialSupply**: `BigNumber`

amount of Asset tokens that will be minted on creation (optional, default doesn't mint)

#### Inherited from

[CreateAssetParams](api_procedures_createAsset.CreateAssetParams.md).[initialSupply](api_procedures_createAsset.CreateAssetParams.md#initialsupply)

#### Defined in

[api/procedures/createAsset.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/createAsset.ts#L35)

___

### isDivisible

• **isDivisible**: `boolean`

whether a single Asset token can be divided into decimal parts

#### Inherited from

[CreateAssetParams](api_procedures_createAsset.CreateAssetParams.md).[isDivisible](api_procedures_createAsset.CreateAssetParams.md#isdivisible)

#### Defined in

[api/procedures/createAsset.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/createAsset.ts#L39)

___

### name

• **name**: `string`

#### Inherited from

[CreateAssetParams](api_procedures_createAsset.CreateAssetParams.md).[name](api_procedures_createAsset.CreateAssetParams.md#name)

#### Defined in

[api/procedures/createAsset.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/createAsset.ts#L31)

___

### requireInvestorUniqueness

• **requireInvestorUniqueness**: `boolean`

whether this asset requires investors to have a Investor Uniqueness Claim in order
  to hold it. More information about Investor Uniqueness and PUIS [here](https://developers.polymesh.live/introduction/identity#polymesh-unique-identity-system-puis)

#### Inherited from

[CreateAssetParams](api_procedures_createAsset.CreateAssetParams.md).[requireInvestorUniqueness](api_procedures_createAsset.CreateAssetParams.md#requireinvestoruniqueness)

#### Defined in

[api/procedures/createAsset.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/createAsset.ts#L59)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](types.SecurityIdentifier.md)[]

array of domestic or international alphanumeric security identifiers for the Asset (ISIN, CUSIP, FIGI, etc)

#### Inherited from

[CreateAssetParams](api_procedures_createAsset.CreateAssetParams.md).[securityIdentifiers](api_procedures_createAsset.CreateAssetParams.md#securityidentifiers)

#### Defined in

[api/procedures/createAsset.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/createAsset.ts#L49)

___

### ticker

• **ticker**: `string`

#### Defined in

[api/procedures/createAsset.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/createAsset.ts#L63)

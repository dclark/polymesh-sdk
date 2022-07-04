# Interface: CreateAssetParams

[api/procedures/types](../wiki/api.procedures.types).CreateAssetParams

## Hierarchy

- **`CreateAssetParams`**

  ↳ [`CreateAssetWithTickerParams`](../wiki/api.procedures.types.CreateAssetWithTickerParams)

## Table of contents

### Properties

- [assetType](../wiki/api.procedures.types.CreateAssetParams#assettype)
- [documents](../wiki/api.procedures.types.CreateAssetParams#documents)
- [fundingRound](../wiki/api.procedures.types.CreateAssetParams#fundinground)
- [initialSupply](../wiki/api.procedures.types.CreateAssetParams#initialsupply)
- [isDivisible](../wiki/api.procedures.types.CreateAssetParams#isdivisible)
- [name](../wiki/api.procedures.types.CreateAssetParams#name)
- [requireInvestorUniqueness](../wiki/api.procedures.types.CreateAssetParams#requireinvestoruniqueness)
- [securityIdentifiers](../wiki/api.procedures.types.CreateAssetParams#securityidentifiers)

## Properties

### assetType

• **assetType**: `string`

type of security that the Asset represents (i.e. Equity, Debt, Commodity, etc). Common values are included in the
  [KnownAssetType](../wiki/types.KnownAssetType) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Asset

#### Defined in

[api/procedures/types.ts:172](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L172)

___

### documents

• `Optional` **documents**: [`AssetDocument`](../wiki/types.AssetDocument)[]

#### Defined in

[api/procedures/types.ts:181](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L181)

___

### fundingRound

• `Optional` **fundingRound**: `string`

(optional) funding round in which the Asset currently is (Series A, Series B, etc)

#### Defined in

[api/procedures/types.ts:180](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L180)

___

### initialSupply

• `Optional` **initialSupply**: `BigNumber`

amount of Asset tokens that will be minted on creation (optional, default doesn't mint)

#### Defined in

[api/procedures/types.ts:162](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L162)

___

### isDivisible

• **isDivisible**: `boolean`

whether a single Asset token can be divided into decimal parts

#### Defined in

[api/procedures/types.ts:166](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L166)

___

### name

• **name**: `string`

#### Defined in

[api/procedures/types.ts:158](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L158)

___

### requireInvestorUniqueness

• **requireInvestorUniqueness**: `boolean`

whether this asset requires investors to have a Investor Uniqueness Claim in order
  to hold it. More information about Investor Uniqueness and PUIS [here](https://developers.polymesh.live/introduction/identity#polymesh-unique-identity-system-puis)

#### Defined in

[api/procedures/types.ts:186](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L186)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](../wiki/types.SecurityIdentifier)[]

array of domestic or international alphanumeric security identifiers for the Asset (ISIN, CUSIP, FIGI, etc)

#### Defined in

[api/procedures/types.ts:176](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L176)

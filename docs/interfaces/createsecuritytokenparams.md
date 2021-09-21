# CreateSecurityTokenParams

## Hierarchy

* **CreateSecurityTokenParams**

## Index

### Properties

* [documents](createsecuritytokenparams.md#optional-documents)
* [fundingRound](createsecuritytokenparams.md#optional-fundinground)
* [isDivisible](createsecuritytokenparams.md#isdivisible)
* [name](createsecuritytokenparams.md#name)
* [requireInvestorUniqueness](createsecuritytokenparams.md#optional-requireinvestoruniqueness)
* [tokenIdentifiers](createsecuritytokenparams.md#optional-tokenidentifiers)
* [tokenType](createsecuritytokenparams.md#tokentype)
* [totalSupply](createsecuritytokenparams.md#optional-totalsupply)

## Properties

### `Optional` documents

• **documents**? : [_TokenDocument_](tokendocument.md)_\[\]_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:66_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/createSecurityToken.ts#L66)

### `Optional` fundingRound

• **fundingRound**? : _undefined \| string_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:65_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/createSecurityToken.ts#L65)

\(optional\) funding round in which the token currently is \(Series A, Series B, etc\)

### isDivisible

• **isDivisible**: _boolean_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:51_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/createSecurityToken.ts#L51)

whether a single token can be divided into decimal parts

### name

• **name**: _string_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:43_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/createSecurityToken.ts#L43)

### `Optional` requireInvestorUniqueness

• **requireInvestorUniqueness**? : _undefined \| false \| true_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:71_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/createSecurityToken.ts#L71)

whether this asset requires investors to have a Investor Uniqueness Claim in order to hold it. Optional, defaults to true. More information about Investor Uniqueness and PUIS [here](https://developers.polymesh.live/introduction/identity#polymesh-unique-identity-system-puis)

### `Optional` tokenIdentifiers

• **tokenIdentifiers**? : [_TokenIdentifier_](tokenidentifier.md)_\[\]_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/createSecurityToken.ts#L61)

array of domestic or international alphanumeric security identifiers for the token \(ISIN, CUSIP, etc\)

### tokenType

• **tokenType**: _string_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:57_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/createSecurityToken.ts#L57)

type of security that the token represents \(i.e. Equity, Debt, Commodity, etc\). Common values are included in the [KnownTokenType](../enums/knowntokentype.md) enum, but custom values can be used as well. Custom values must be registered on-chain the first time they're used, requiring an additional transaction. They aren't tied to a specific Security Token

### `Optional` totalSupply

• **totalSupply**? : _BigNumber_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:47_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/createSecurityToken.ts#L47)

amount of tokens that will be minted on creation \(optional, default doesn't mint\)


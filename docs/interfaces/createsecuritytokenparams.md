# CreateSecurityTokenParams

## Hierarchy

* **CreateSecurityTokenParams**

## Index

### Properties

* [documents](createsecuritytokenparams.md#optional-documents)
* [fundingRound](createsecuritytokenparams.md#optional-fundinground)
* [isDivisible](createsecuritytokenparams.md#isdivisible)
* [name](createsecuritytokenparams.md#name)
* [tokenIdentifiers](createsecuritytokenparams.md#optional-tokenidentifiers)
* [tokenType](createsecuritytokenparams.md#tokentype)
* [totalSupply](createsecuritytokenparams.md#optional-totalsupply)

## Properties

### `Optional` documents

• **documents**? : [_TokenDocument_](tokendocument.md)_\[\]_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:49_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/procedures/createSecurityToken.ts#L49)

### `Optional` fundingRound

• **fundingRound**? : _undefined \| string_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/procedures/createSecurityToken.ts#L48)

\(optional\) funding round in which the token currently is \(Series A, Series B, etc\)

### isDivisible

• **isDivisible**: _boolean_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:36_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/procedures/createSecurityToken.ts#L36)

whether a single token can be divided into decimal parts

### name

• **name**: _string_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:28_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/procedures/createSecurityToken.ts#L28)

### `Optional` tokenIdentifiers

• **tokenIdentifiers**? : [_TokenIdentifier_](tokenidentifier.md)_\[\]_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:44_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/procedures/createSecurityToken.ts#L44)

array of domestic or international alphanumeric security identifiers for the token \(ISIN, CUSIP, etc\)

### tokenType

• **tokenType**: [_TokenType_](../globals.md#tokentype)

_Defined in_ [_src/api/procedures/createSecurityToken.ts:40_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/procedures/createSecurityToken.ts#L40)

type of security that the token represents \(i.e. Equity, Debt, Commodity, etc\)

### `Optional` totalSupply

• **totalSupply**? : _BigNumber_

_Defined in_ [_src/api/procedures/createSecurityToken.ts:32_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/procedures/createSecurityToken.ts#L32)

amount of tokens that will be minted on creation \(optional, default doesn't mint\)


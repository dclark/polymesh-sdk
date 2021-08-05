# Interface: CreateSecurityTokenParams

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

• **documents**? : *[TokenDocument](tokendocument.md)[]*

*Defined in [src/api/procedures/createSecurityToken.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/createSecurityToken.ts#L49)*

___

### `Optional` fundingRound

• **fundingRound**? : *undefined | string*

*Defined in [src/api/procedures/createSecurityToken.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/createSecurityToken.ts#L48)*

(optional) funding round in which the token currently is (Series A, Series B, etc)

___

###  isDivisible

• **isDivisible**: *boolean*

*Defined in [src/api/procedures/createSecurityToken.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/createSecurityToken.ts#L36)*

whether a single token can be divided into decimal parts

___

###  name

• **name**: *string*

*Defined in [src/api/procedures/createSecurityToken.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/createSecurityToken.ts#L28)*

___

### `Optional` tokenIdentifiers

• **tokenIdentifiers**? : *[TokenIdentifier](tokenidentifier.md)[]*

*Defined in [src/api/procedures/createSecurityToken.ts:44](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/createSecurityToken.ts#L44)*

array of domestic or international alphanumeric security identifiers for the token (ISIN, CUSIP, etc)

___

###  tokenType

• **tokenType**: *[TokenType](../globals.md#tokentype)*

*Defined in [src/api/procedures/createSecurityToken.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/createSecurityToken.ts#L40)*

type of security that the token represents (i.e. Equity, Debt, Commodity, etc)

___

### `Optional` totalSupply

• **totalSupply**? : *BigNumber*

*Defined in [src/api/procedures/createSecurityToken.ts:32](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/createSecurityToken.ts#L32)*

amount of tokens that will be minted on creation (optional, default doesn't mint)

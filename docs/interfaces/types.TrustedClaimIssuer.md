[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / TrustedClaimIssuer

# Interface: TrustedClaimIssuer<IsDefault\>

[types](../modules/types.md).TrustedClaimIssuer

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `IsDefault` | extends `boolean` = ``false`` | whether the Identity is a default trusted claim issuer for an asset or just   for a specific compliance condition. Defaults to false |

## Table of contents

### Properties

- [identity](types.TrustedClaimIssuer.md#identity)
- [trustedFor](types.TrustedClaimIssuer.md#trustedfor)

## Properties

### identity

• **identity**: `IsDefault` extends ``true`` ? [`DefaultTrustedClaimIssuer`](../classes/api_entities_DefaultTrustedClaimIssuer.DefaultTrustedClaimIssuer.md) : [`Identity`](../classes/api_entities_Identity.Identity.md)

#### Defined in

[types/index.ts:360](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L360)

___

### trustedFor

• **trustedFor**: ``null`` \| [`ClaimType`](../enums/types.ClaimType.md)[]

a null value means that the issuer is trusted for all claim types

#### Defined in

[types/index.ts:364](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L364)

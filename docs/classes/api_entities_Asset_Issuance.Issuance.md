[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/Issuance](../modules/api_entities_Asset_Issuance.md) / Issuance

# Class: Issuance

[api/entities/Asset/Issuance](../modules/api_entities_Asset_Issuance.md).Issuance

Handles all Asset Issuance related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`Issuance`**

## Table of contents

### Methods

- [issue](api_entities_Asset_Issuance.Issuance.md#issue)

## Methods

### issue

▸ **issue**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Issue a certain amount of Asset tokens to the caller's default portfolio

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [issue.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.amount` | `BigNumber` | amount of Asset tokens to be issued |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) | - |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Issuance.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Issuance.ts#L35)

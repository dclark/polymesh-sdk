[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/client/Identities](../modules/api_client_Identities.md) / Identities

# Class: Identities

[api/client/Identities](../modules/api_client_Identities.md).Identities

Handles all Identity related functionality

## Table of contents

### Methods

- [createPortfolio](api_client_Identities.Identities.md#createportfolio)
- [getIdentity](api_client_Identities.Identities.md#getidentity)
- [isIdentityValid](api_client_Identities.Identities.md#isidentityvalid)
- [registerIdentity](api_client_Identities.Identities.md#registeridentity)

## Methods

### createPortfolio

▸ **createPortfolio**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md), [`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md), `unknown`[][]\>\>

Create a new Portfolio under the ownership of the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [createPortfolio.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.name` | `string` |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md), [`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md), `unknown`[][]\>\>

#### Defined in

[api/client/Identities.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Identities.ts#L61)

___

### getIdentity

▸ **getIdentity**(`args`): `Promise`<[`Identity`](api_entities_Identity.Identity.md)\>

Create an Identity instance from a DID

**`throws`** if there is no Identity with the passed DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.did` | `string` |

#### Returns

`Promise`<[`Identity`](api_entities_Identity.Identity.md)\>

#### Defined in

[api/client/Identities.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Identities.ts#L70)

___

### isIdentityValid

▸ **isIdentityValid**(`args`): `Promise`<`boolean`\>

Return whether the supplied Identity/DID exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.identity` | `string` \| [`Identity`](api_entities_Identity.Identity.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/client/Identities.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Identities.ts#L77)

___

### registerIdentity

▸ **registerIdentity**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Identity`](api_entities_Identity.Identity.md), [`Identity`](api_entities_Identity.Identity.md), `unknown`[][]\>\>

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](api_entities_AuthorizationRequest.AuthorizationRequest.md) which have to be accepted by the `targetAccount`.
  An [Account](api_entities_Account.Account.md) or [Identity](api_entities_Identity.Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

**`note`** required role:
  - Customer Due Diligence Provider

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [registerIdentity.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RegisterIdentityParams`](../interfaces/api_procedures_registerIdentity.RegisterIdentityParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Identity`](api_entities_Identity.Identity.md), [`Identity`](api_entities_Identity.Identity.md), `unknown`[][]\>\>

#### Defined in

[api/client/Identities.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/Identities.ts#L51)

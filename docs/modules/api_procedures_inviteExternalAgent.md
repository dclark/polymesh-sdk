[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / api/procedures/inviteExternalAgent

# Module: api/procedures/inviteExternalAgent

## Table of contents

### Interfaces

- [InviteExternalAgentParams](../interfaces/api_procedures_inviteExternalAgent.InviteExternalAgentParams.md)

### Functions

- [createGroupAndAuthorizationResolver](api_procedures_inviteExternalAgent.md#creategroupandauthorizationresolver)

## Functions

### createGroupAndAuthorizationResolver

▸ **createGroupAndAuthorizationResolver**(`target`): (`receipt`: `ISubmittableResult`) => `Promise`<[`AuthorizationRequest`](../classes/api_entities_AuthorizationRequest.AuthorizationRequest.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Identity`](../classes/api_entities_Identity.Identity.md) |

#### Returns

`fn`

▸ (`receipt`): `Promise`<[`AuthorizationRequest`](../classes/api_entities_AuthorizationRequest.AuthorizationRequest.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `receipt` | `ISubmittableResult` |

##### Returns

`Promise`<[`AuthorizationRequest`](../classes/api_entities_AuthorizationRequest.AuthorizationRequest.md)\>

#### Defined in

[api/procedures/inviteExternalAgent.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/inviteExternalAgent.ts#L36)

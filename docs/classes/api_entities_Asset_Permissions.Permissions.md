[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/Permissions](../modules/api_entities_Asset_Permissions.md) / Permissions

# Class: Permissions

[api/entities/Asset/Permissions](../modules/api_entities_Asset_Permissions.md).Permissions

Handles all Asset Permissions related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`Permissions`**

## Table of contents

### Methods

- [createGroup](api_entities_Asset_Permissions.Permissions.md#creategroup)
- [getAgents](api_entities_Asset_Permissions.Permissions.md#getagents)
- [getGroup](api_entities_Asset_Permissions.Permissions.md#getgroup)
- [getGroups](api_entities_Asset_Permissions.Permissions.md#getgroups)
- [inviteAgent](api_entities_Asset_Permissions.Permissions.md#inviteagent)
- [removeAgent](api_entities_Asset_Permissions.Permissions.md#removeagent)

## Methods

### createGroup

▸ **createGroup**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md), [`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md), `unknown`[][]\>\>

Create a Permission Group for this Asset. Identities can be assigned to Permission Groups as agents. Agents assigned to a Permission Group have said group's permissions over the Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [createGroup.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateGroupParams`](../interfaces/api_procedures_createGroup.CreateGroupParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md), [`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Permissions.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Permissions.ts#L70)

___

### getAgents

▸ **getAgents**(): `Promise`<[`AgentWithGroup`](../interfaces/api_entities_Asset_types.AgentWithGroup.md)[]\>

Retrieve a list of agents (Identities which have permissions over the Asset) and
  their respective Permission Groups

#### Returns

`Promise`<[`AgentWithGroup`](../interfaces/api_entities_Asset_types.AgentWithGroup.md)[]\>

#### Defined in

[api/entities/Asset/Permissions.ts:171](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Permissions.ts#L171)

___

### getGroup

▸ **getGroup**(`args`): `Promise`<[`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md)\>

Retrieve a single Permission Group by its ID (or type). Passing an ID will fetch a Custom Permission Group,
  while passing a type will fetch a Known Permission Group

**`throws`** if there is no Permission Group with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`CustomPermissionGroup`](api_entities_CustomPermissionGroup.CustomPermissionGroup.md)\>

#### Defined in

[api/entities/Asset/Permissions.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Permissions.ts#L104)

▸ **getGroup**(`args`): `Promise`<[`KnownPermissionGroup`](api_entities_KnownPermissionGroup.KnownPermissionGroup.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.type` | [`PermissionGroupType`](../enums/types.PermissionGroupType.md) |

#### Returns

`Promise`<[`KnownPermissionGroup`](api_entities_KnownPermissionGroup.KnownPermissionGroup.md)\>

#### Defined in

[api/entities/Asset/Permissions.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Permissions.ts#L105)

___

### getGroups

▸ **getGroups**(): `Promise`<[`PermissionGroups`](../interfaces/types.PermissionGroups.md)\>

Retrieve all Permission Groups of this Asset

#### Returns

`Promise`<[`PermissionGroups`](../interfaces/types.PermissionGroups.md)\>

#### Defined in

[api/entities/Asset/Permissions.ts:137](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Permissions.ts#L137)

___

### inviteAgent

▸ **inviteAgent**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

Invite an Identity to be an agent with permissions over this Asset

**`note`** this will create an [Authorization Request](api_entities_AuthorizationRequest.AuthorizationRequest.md) which has to be accepted by the `target` Identity.
  An [Account](api_entities_Account.Account.md) or [Identity](api_entities_Identity.Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [inviteAgent.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InviteExternalAgentParams`](../interfaces/api_procedures_inviteExternalAgent.InviteExternalAgentParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Permissions.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Permissions.ts#L84)

___

### removeAgent

▸ **removeAgent**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Revoke an agent's permissions over this Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [removeAgent.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveExternalAgentParams`](../interfaces/api_procedures_removeExternalAgent.RemoveExternalAgentParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Permissions.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/Permissions.ts#L94)

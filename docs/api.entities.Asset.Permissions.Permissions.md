# Class: Permissions

[api/entities/Asset/Permissions](../wiki/api.entities.Asset.Permissions).Permissions

Handles all Asset Permissions related functionality

## Hierarchy

- `Namespace`<[`Asset`](../wiki/api.entities.Asset.Asset)\>

  ↳ **`Permissions`**

## Table of contents

### Methods

- [createGroup](../wiki/api.entities.Asset.Permissions.Permissions#creategroup)
- [getAgents](../wiki/api.entities.Asset.Permissions.Permissions#getagents)
- [getGroup](../wiki/api.entities.Asset.Permissions.Permissions#getgroup)
- [getGroups](../wiki/api.entities.Asset.Permissions.Permissions#getgroups)
- [inviteAgent](../wiki/api.entities.Asset.Permissions.Permissions#inviteagent)
- [removeAgent](../wiki/api.entities.Asset.Permissions.Permissions#removeagent)

## Methods

### createGroup

▸ **createGroup**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup), [`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup), `unknown`[][]\>\>

Create a Permission Group for this Asset. Identities can be assigned to Permission Groups as agents. Agents assigned to a Permission Group have said group's permissions over the Asset

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [createGroup.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateGroupParams`](../wiki/api.procedures.types.CreateGroupParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup), [`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Permissions.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Permissions.ts#L70)

___

### getAgents

▸ **getAgents**(): `Promise`<[`AgentWithGroup`](../wiki/api.entities.Asset.types.AgentWithGroup)[]\>

Retrieve a list of agents (Identities which have permissions over the Asset) and
  their respective Permission Groups

#### Returns

`Promise`<[`AgentWithGroup`](../wiki/api.entities.Asset.types.AgentWithGroup)[]\>

#### Defined in

[api/entities/Asset/Permissions.ts:171](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Permissions.ts#L171)

___

### getGroup

▸ **getGroup**(`args`): `Promise`<[`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup)\>

Retrieve a single Permission Group by its ID (or type). Passing an ID will fetch a Custom Permission Group,
  while passing a type will fetch a Known Permission Group

**`throws`** if there is no Permission Group with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup)\>

#### Defined in

[api/entities/Asset/Permissions.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Permissions.ts#L104)

▸ **getGroup**(`args`): `Promise`<[`KnownPermissionGroup`](../wiki/api.entities.KnownPermissionGroup.KnownPermissionGroup)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.type` | [`PermissionGroupType`](../wiki/types.PermissionGroupType) |

#### Returns

`Promise`<[`KnownPermissionGroup`](../wiki/api.entities.KnownPermissionGroup.KnownPermissionGroup)\>

#### Defined in

[api/entities/Asset/Permissions.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Permissions.ts#L105)

___

### getGroups

▸ **getGroups**(): `Promise`<[`PermissionGroups`](../wiki/types.PermissionGroups)\>

Retrieve all Permission Groups of this Asset

#### Returns

`Promise`<[`PermissionGroups`](../wiki/types.PermissionGroups)\>

#### Defined in

[api/entities/Asset/Permissions.ts:137](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Permissions.ts#L137)

___

### inviteAgent

▸ **inviteAgent**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

Invite an Identity to be an agent with permissions over this Asset

**`note`** this will create an [Authorization Request](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest) which has to be accepted by the `target` Identity.
  An [Account](../wiki/api.entities.Account.Account) or [Identity](../wiki/api.entities.Identity.Identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getone)

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [inviteAgent.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InviteExternalAgentParams`](../wiki/api.procedures.types.InviteExternalAgentParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Permissions.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Permissions.ts#L84)

___

### removeAgent

▸ **removeAgent**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Revoke an agent's permissions over this Asset

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [removeAgent.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveExternalAgentParams`](../wiki/api.procedures.types.RemoveExternalAgentParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/Permissions.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/Permissions.ts#L94)

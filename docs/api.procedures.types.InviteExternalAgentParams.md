# Interface: InviteExternalAgentParams

[api/procedures/types](../wiki/api.procedures.types).InviteExternalAgentParams

## Table of contents

### Properties

- [expiry](../wiki/api.procedures.types.InviteExternalAgentParams#expiry)
- [permissions](../wiki/api.procedures.types.InviteExternalAgentParams#permissions)
- [target](../wiki/api.procedures.types.InviteExternalAgentParams#target)

## Properties

### expiry

• `Optional` **expiry**: `Date`

date at which the authorization request for invitation expires (optional)

**`note`** if expiry date is not set, the invitation will never expire

**`note`** due to chain limitations, the expiry will be ignored if the passed `permissions` don't correspond to an existing Permission Group

#### Defined in

[api/procedures/types.ts:614](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L614)

___

### permissions

• **permissions**: [`CustomPermissionGroup`](../wiki/api.entities.CustomPermissionGroup.CustomPermissionGroup) \| [`KnownPermissionGroup`](../wiki/api.entities.KnownPermissionGroup.KnownPermissionGroup) \| { `transactions`: ``null`` \| [`TransactionPermissions`](../wiki/types.TransactionPermissions)  } \| { `transactionGroups`: [`TxGroup`](../wiki/types.TxGroup)[]  }

#### Defined in

[api/procedures/types.ts:599](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L599)

___

### target

• **target**: `string` \| [`Identity`](../wiki/api.entities.Identity.Identity)

#### Defined in

[api/procedures/types.ts:598](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/procedures/types.ts#L598)

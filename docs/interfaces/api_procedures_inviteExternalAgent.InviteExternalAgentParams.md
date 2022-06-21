[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/inviteExternalAgent](../modules/api_procedures_inviteExternalAgent.md) / InviteExternalAgentParams

# Interface: InviteExternalAgentParams

[api/procedures/inviteExternalAgent](../modules/api_procedures_inviteExternalAgent.md).InviteExternalAgentParams

## Table of contents

### Properties

- [expiry](api_procedures_inviteExternalAgent.InviteExternalAgentParams.md#expiry)
- [permissions](api_procedures_inviteExternalAgent.InviteExternalAgentParams.md#permissions)
- [target](api_procedures_inviteExternalAgent.InviteExternalAgentParams.md#target)

## Properties

### expiry

• `Optional` **expiry**: `Date`

date at which the authorization request for invitation expires (optional)

**`note`** if expiry date is not set, the invitation will never expire

**`note`** due to chain limitations, the expiry will be ignored if the passed `permissions` don't correspond to an existing Permission Group

#### Defined in

[api/procedures/inviteExternalAgent.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/inviteExternalAgent.ts#L63)

___

### permissions

• **permissions**: [`CustomPermissionGroup`](../classes/api_entities_CustomPermissionGroup.CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../classes/api_entities_KnownPermissionGroup.KnownPermissionGroup.md) \| { `transactions`: ``null`` \| [`TransactionPermissions`](types.TransactionPermissions.md)  } \| { `transactionGroups`: [`TxGroup`](../enums/types.TxGroup.md)[]  }

#### Defined in

[api/procedures/inviteExternalAgent.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/inviteExternalAgent.ts#L48)

___

### target

• **target**: `string` \| [`Identity`](../classes/api_entities_Identity.Identity.md)

#### Defined in

[api/procedures/inviteExternalAgent.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/inviteExternalAgent.ts#L47)

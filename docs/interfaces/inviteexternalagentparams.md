# InviteExternalAgentParams

## Hierarchy

* **InviteExternalAgentParams**

## Index

### Properties

* [expiry](inviteexternalagentparams.md#optional-expiry)
* [permissions](inviteexternalagentparams.md#permissions)
* [target](inviteexternalagentparams.md#target)

## Properties

### `Optional` expiry

• **expiry**? : [_Date_](../enums/transactionargumenttype.md#date)

_Defined in_ [_src/api/procedures/inviteExternalAgent.ts:40_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/inviteExternalAgent.ts#L40)

date at which the authorization request for invitation expires \(optional\)

**`note`** if expiry date is not set, the invitation will never expire

### permissions

• **permissions**: [_KnownPermissionGroup_](../classes/knownpermissiongroup.md) _\|_ [_CustomPermissionGroup_](../classes/custompermissiongroup.md) _\| object \| object_

_Defined in_ [_src/api/procedures/inviteExternalAgent.ts:26_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/inviteExternalAgent.ts#L26)

### target

• **target**: _string \|_ [_Identity_](../classes/identity.md)

_Defined in_ [_src/api/procedures/inviteExternalAgent.ts:25_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/procedures/inviteExternalAgent.ts#L25)


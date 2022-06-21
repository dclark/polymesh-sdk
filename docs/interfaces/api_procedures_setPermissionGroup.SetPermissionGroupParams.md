[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/setPermissionGroup](../modules/api_procedures_setPermissionGroup.md) / SetPermissionGroupParams

# Interface: SetPermissionGroupParams

[api/procedures/setPermissionGroup](../modules/api_procedures_setPermissionGroup.md).SetPermissionGroupParams

This procedure can be called with:
  - An Asset's existing Custom Permission Group. The Identity will be assigned as an Agent of that Group for that Asset
  - A Known Permission Group and an Asset. The Identity will be assigned as an Agent of that Group for that Asset
  - A set of Transaction Permissions and an Asset. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created for that Asset with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used
  - An array of [Transaction Groups](../enums/types.TxGroup.md) that represent a set of permissions. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used

## Table of contents

### Properties

- [group](api_procedures_setPermissionGroup.SetPermissionGroupParams.md#group)

## Properties

### group

• **group**: [`CustomPermissionGroup`](../classes/api_entities_CustomPermissionGroup.CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../classes/api_entities_KnownPermissionGroup.KnownPermissionGroup.md) \| `TransactionsParams` \| `TxGroupParams`

#### Defined in

[api/procedures/setPermissionGroup.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/setPermissionGroup.ts#L53)

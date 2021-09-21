# TokenPermissions

Handles all Token Permissions \(External Agents\) related functionality on the Identity side

## Hierarchy

* Namespace‹[Identity](identity.md)›

  ↳ **TokenPermissions**

## Index

### Properties

* [context](tokenpermissions.md#protected-context)
* [parent](tokenpermissions.md#protected-parent)

### Methods

* [enabledAt](tokenpermissions.md#enabledat)
* [get](tokenpermissions.md#get)
* [getGroup](tokenpermissions.md#getgroup)
* [hasPermissions](tokenpermissions.md#haspermissions)
* [setGroup](tokenpermissions.md#setgroup)
* [waive](tokenpermissions.md#waive)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_Identity_](identity.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L9)

## Methods

### enabledAt

▸ **enabledAt**\(`__namedParameters`: object\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/Identity/TokenPermissions.ts:264_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/TokenPermissions.ts#L264)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when this Identity was enabled/added as an Agent with permissions over a specific Security Token

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name | Type |
| :--- | :--- |
| `token` | string \| [SecurityToken](securitytoken.md)‹› |

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### get

▸ **get**\(\): _Promise‹_[_TokenWithGroup_](../interfaces/tokenwithgroup.md)_\[\]›_

_Defined in_ [_src/api/entities/Identity/TokenPermissions.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/TokenPermissions.ts#L72)

Retrieve all the Security Tokens over which this Identity has permissions, with the corresponding Permission Group

**Returns:** _Promise‹_[_TokenWithGroup_](../interfaces/tokenwithgroup.md)_\[\]›_

### getGroup

▸ **getGroup**\(`__namedParameters`: object\): _Promise‹_[_CustomPermissionGroup_](custompermissiongroup.md) _\|_ [_KnownPermissionGroup_](knownpermissiongroup.md)_›_

_Defined in_ [_src/api/entities/Identity/TokenPermissions.ts:224_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/TokenPermissions.ts#L224)

Retrieve this Identity's Permission Group for a specific Security Token

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name | Type |
| :--- | :--- |
| `token` | string \| [SecurityToken](securitytoken.md)‹› |

**Returns:** _Promise‹_[_CustomPermissionGroup_](custompermissiongroup.md) _\|_ [_KnownPermissionGroup_](knownpermissiongroup.md)_›_

### hasPermissions

▸ **hasPermissions**\(`args`: object\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Identity/TokenPermissions.ts:101_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/TokenPermissions.ts#L101)

Check whether this Identity has specific transaction Permissions over a Security Token

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `token` | [SecurityToken](securitytoken.md) \| string |
| `transactions` | TxTag\[\] \| null |

**Returns:** _Promise‹boolean›_

### setGroup

▸ **setGroup**\(`args`: [SetPermissionGroupParams](../interfaces/setpermissiongroupparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_CustomPermissionGroup_](custompermissiongroup.md) _\|_ [_KnownPermissionGroup_](knownpermissiongroup.md)_››_

_Defined in_ [_src/api/entities/Identity/TokenPermissions.ts:301_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/TokenPermissions.ts#L301)

Assign this Identity to a different Permission Group for a given Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setGroup.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetPermissionGroupParams](../interfaces/setpermissiongroupparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_CustomPermissionGroup_](custompermissiongroup.md) _\|_ [_KnownPermissionGroup_](knownpermissiongroup.md)_››_

### waive

▸ **waive**\(`args`: [WaivePermissionsParams](../interfaces/waivepermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Identity/TokenPermissions.ts:291_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Identity/TokenPermissions.ts#L291)

Abdicate from the current Permissions Group for a given Security Token. This means that this Identity will no longer have any permissions over said Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `waive.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [WaivePermissionsParams](../interfaces/waivepermissionsparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_


# Permissions

Handles all Security Token Permissions related functionality Permissions a Secondary Key has over the Identity. A null value means the key has all permissions of that type \(i.e. if `tokens` is null, the key has permissions over all of the Identity's Security Tokens\)

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Permissions**

## Index

### Properties

* [context](permissions.md#protected-context)
* [parent](permissions.md#protected-parent)
* [portfolios](permissions.md#portfolios)
* [tokens](permissions.md#tokens)
* [transactionGroups](permissions.md#transactiongroups)
* [transactions](permissions.md#transactions)

### Methods

* [createGroup](permissions.md#creategroup)
* [getAgents](permissions.md#getagents)
* [getGroup](permissions.md#getgroup)
* [getGroups](permissions.md#getgroups)
* [inviteAgent](permissions.md#inviteagent)
* [removeAgent](permissions.md#removeagent)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Namespace.ts#L9)

### portfolios

• **portfolios**: [_SectionPermissions_](../interfaces/sectionpermissions.md)_‹_[_DefaultPortfolio_](defaultportfolio.md) _\|_ [_NumberedPortfolio_](numberedportfolio.md)_› \| null_

_Defined in_ [_src/types/index.ts:809_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L809)

### tokens

• **tokens**: [_SectionPermissions_](../interfaces/sectionpermissions.md)_‹_[_SecurityToken_](securitytoken.md)_› \| null_

_Defined in_ [_src/types/index.ts:795_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L795)

Security Tokens over which this key has permissions

### transactionGroups

• **transactionGroups**: [_TxGroup_](../enums/txgroup.md)_\[\]_

_Defined in_ [_src/types/index.ts:807_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L807)

list of Transaction Groups this key can execute. Having permissions over a TxGroup means having permissions over every TxTag in said group. Partial group permissions are not covered by this value. For a full picture of transaction permissions, see the `transactions` property

NOTE: If transactions is null, ignore this value

### transactions

• **transactions**: [_TransactionPermissions_](../interfaces/transactionpermissions.md) _\| null_

_Defined in_ [_src/types/index.ts:799_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L799)

Transactions this key can execute

## Methods

### createGroup

▸ **createGroup**\(`args`: [CreateGroupParams](../interfaces/creategroupparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_CustomPermissionGroup_](custompermissiongroup.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Permissions.ts:63_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/Permissions.ts#L63)

Create a Permission group for this Security Token. Identities can then be assigned to said group as Agents. Agents assigned to a group have said group's permissions over this Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `createGroup.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [CreateGroupParams](../interfaces/creategroupparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_CustomPermissionGroup_](custompermissiongroup.md)_››_

### getAgents

▸ **getAgents**\(\): _Promise‹_[_AgentWithGroup_](../interfaces/agentwithgroup.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Permissions.ts:163_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/Permissions.ts#L163)

Retrieve a list of Agents \(Identities which have permissions over the Security Token\) and their respective Permission Groups

**Returns:** _Promise‹_[_AgentWithGroup_](../interfaces/agentwithgroup.md)_\[\]›_

### getGroup

▸ **getGroup**\(`args`: object\): _Promise‹_[_CustomPermissionGroup_](custompermissiongroup.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Permissions.ts:93_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/Permissions.ts#L93)

Retrieve a single Permission Group by its ID \(or type\). Passing an ID will fetch a Custom Permission Group, while passing a type will fetch a Known Permission Group

**`throws`** if there is no Permission Group with the passed ID

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `id` | BigNumber |

**Returns:** _Promise‹_[_CustomPermissionGroup_](custompermissiongroup.md)_›_

▸ **getGroup**\(`args`: object\): _Promise‹_[_KnownPermissionGroup_](knownpermissiongroup.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Permissions.ts:94_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/Permissions.ts#L94)

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `type` | [PermissionGroupType](../enums/permissiongrouptype.md) |

**Returns:** _Promise‹_[_KnownPermissionGroup_](knownpermissiongroup.md)_›_

### getGroups

▸ **getGroups**\(\): _Promise‹object›_

_Defined in_ [_src/api/entities/SecurityToken/Permissions.ts:126_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/Permissions.ts#L126)

Retrieve all Permission Groups of this Security Token

**Returns:** _Promise‹object›_

### inviteAgent

▸ **inviteAgent**\(`args`: [InviteExternalAgentParams](../interfaces/inviteexternalagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/Permissions.ts:73_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/Permissions.ts#L73)

Invite an Identity to be an Agent with permissions over this Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `inviteAgent.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [InviteExternalAgentParams](../interfaces/inviteexternalagentparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### removeAgent

▸ **removeAgent**\(`args`: [RemoveExternalAgentParams](../interfaces/removeexternalagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/Permissions.ts:83_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/Permissions.ts#L83)

Revoke an Agent's permissions for this Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeAgent.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RemoveExternalAgentParams](../interfaces/removeexternalagentparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_


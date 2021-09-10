# Class: Permissions

Handles all Security Token Permissions related functionality
Permissions a Secondary Key has over the Identity. A null value means the key has
  all permissions of that type (i.e. if `tokens` is null, the key has permissions over all
  of the Identity's Security Tokens)

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
* [getGroups](permissions.md#getgroups)
* [inviteAgent](permissions.md#inviteagent)
* [removeAgent](permissions.md#removeagent)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L9)*

___

###  portfolios

• **portfolios**: *[SectionPermissions](../interfaces/sectionpermissions.md)‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)› | null*

*Defined in [src/types/index.ts:749](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L749)*

___

###  tokens

• **tokens**: *[SectionPermissions](../interfaces/sectionpermissions.md)‹[SecurityToken](securitytoken.md)› | null*

*Defined in [src/types/index.ts:735](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L735)*

Security Tokens over which this key has permissions

___

###  transactionGroups

• **transactionGroups**: *[TxGroup](../enums/txgroup.md)[]*

*Defined in [src/types/index.ts:747](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L747)*

list of Transaction Groups this key can execute. Having permissions over a TxGroup
  means having permissions over every TxTag in said group. Partial group permissions are not
  covered by this value. For a full picture of transaction permissions, see the `transactions` property

NOTE: If transactions is null, ignore this value

___

###  transactions

• **transactions**: *[TransactionPermissions](../interfaces/transactionpermissions.md) | null*

*Defined in [src/types/index.ts:739](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L739)*

Transactions this key can execute

## Methods

###  createGroup

▸ **createGroup**(`args`: [CreateGroupParams](../interfaces/creategroupparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[CustomPermissionGroup](custompermissiongroup.md)››*

*Defined in [src/api/entities/SecurityToken/Permissions.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Permissions.ts#L60)*

Create a Permission group for this Security Token. Identities can then be assigned to said group as Agents. Agents assigned to a group have said group's permissions over this Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `createGroup.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateGroupParams](../interfaces/creategroupparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[CustomPermissionGroup](custompermissiongroup.md)››*

___

###  getAgents

▸ **getAgents**(): *Promise‹[AgentWithGroup](../interfaces/agentwithgroup.md)[]›*

*Defined in [src/api/entities/SecurityToken/Permissions.ts:124](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Permissions.ts#L124)*

Retrieve a list of Agents (Identities which have permissions over the Security Token) and
  their respective Permission Groups

**Returns:** *Promise‹[AgentWithGroup](../interfaces/agentwithgroup.md)[]›*

___

###  getGroups

▸ **getGroups**(): *Promise‹object›*

*Defined in [src/api/entities/SecurityToken/Permissions.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Permissions.ts#L87)*

Retrieve all group permissions of the Security Token

**Returns:** *Promise‹object›*

___

###  inviteAgent

▸ **inviteAgent**(`args`: [InviteExternalAgentParams](../interfaces/inviteexternalagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/Permissions.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Permissions.ts#L70)*

Invite an Identity to be an Agent with permissions over this Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `inviteAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [InviteExternalAgentParams](../interfaces/inviteexternalagentparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removeAgent

▸ **removeAgent**(`args`: [RemoveExternalAgentParams](../interfaces/removeexternalagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/Permissions.ts:80](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/Permissions.ts#L80)*

Revoke an Agent's permissions for this Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveExternalAgentParams](../interfaces/removeexternalagentparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

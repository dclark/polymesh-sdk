# CurrentAccount

Represents the current account that is bound to the SDK instance

## Hierarchy

↳ [Account](account.md)

↳ **CurrentAccount**

## Index

### Properties

* [address](currentaccount.md#address)
* [authorizations](currentaccount.md#authorizations)
* [context](currentaccount.md#protected-context)
* [key](currentaccount.md#key)
* [uuid](currentaccount.md#uuid)

### Methods

* [getBalance](currentaccount.md#getbalance)
* [getIdentity](currentaccount.md#getidentity)
* [getPermissions](currentaccount.md#getpermissions)
* [getTransactionHistory](currentaccount.md#gettransactionhistory)
* [hasPermissions](currentaccount.md#haspermissions)
* [isEqual](currentaccount.md#isequal)
* [isFrozen](currentaccount.md#isfrozen)
* [leaveIdentity](currentaccount.md#leaveidentity)
* [generateUuid](currentaccount.md#static-generateuuid)
* [unserialize](currentaccount.md#static-unserialize)

## Properties

### address

• **address**: _string_

_Inherited from_ [_Account_](account.md)_._[_address_](account.md#address)

_Defined in_ [_src/api/entities/Account.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Account.ts#L45)

Polymesh-specific address of the account. Serves as an identifier

### authorizations

• **authorizations**: [_Authorizations_](authorizations.md)_‹_[_Account_](account.md)_›_

_Inherited from_ [_Account_](account.md)_._[_authorizations_](account.md#authorizations)

_Defined in_ [_src/api/entities/Account.ts:53_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Account.ts#L53)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### key

• **key**: _string_

_Inherited from_ [_Account_](account.md)_._[_key_](account.md#key)

_Defined in_ [_src/api/entities/Account.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Account.ts#L50)

public key of the account. This is a hex representation of the address that is transversal to any Substrate chain

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### getBalance

▸ **getBalance**\(\): _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

_Inherited from_ [_Account_](account.md)_._[_getBalance_](account.md#getbalance)

_Defined in_ [_src/api/entities/Account.ts:75_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Account.ts#L75)

Get the free/locked POLYX balance of the account

**`note`** can be subscribed to

**Returns:** _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

▸ **getBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Inherited from_ [_Account_](account.md)_._[_getBalance_](account.md#getbalance)

_Defined in_ [_src/api/entities/Account.ts:76_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Account.ts#L76)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getIdentity

▸ **getIdentity**\(\): _Promise‹_[_CurrentIdentity_](currentidentity.md) _\| null›_

_Overrides_ [_Account_](account.md)_._[_getIdentity_](account.md#getidentity)

_Defined in_ [_src/api/entities/CurrentAccount.ts:43_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentAccount.ts#L43)

Retrieve the current Identity \(null if there is none\)

**Returns:** _Promise‹_[_CurrentIdentity_](currentidentity.md) _\| null›_

### getPermissions

▸ **getPermissions**\(\): _Promise‹_[_Permissions_](../interfaces/permissions.md)_›_

_Defined in_ [_src/api/entities/CurrentAccount.ts:52_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentAccount.ts#L52)

Retrieve the Permissions this Signer has as a Signing Key for its corresponding Identity

**Returns:** _Promise‹_[_Permissions_](../interfaces/permissions.md)_›_

### getTransactionHistory

▸ **getTransactionHistory**\(`filters`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ExtrinsicData_](../interfaces/extrinsicdata.md)_››_

_Inherited from_ [_Account_](account.md)_._[_getTransactionHistory_](account.md#gettransactionhistory)

_Defined in_ [_src/api/entities/Account.ts:126_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Account.ts#L126)

Retrieve a list of transactions signed by this account. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪`Default value` **filters**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `blockNumber?` | BigNumber | - |
| `orderBy?` | TransactionOrderByInput | - |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |
| `success?` | undefined \| false \| true | whether the transaction was successful or not |
| `tag?` | TxTag | tag associated with the transaction |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ExtrinsicData_](../interfaces/extrinsicdata.md)_››_

### hasPermissions

▸ **hasPermissions**\(`permissions`: [PermissionsLike](../interfaces/permissionslike.md)\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/CurrentAccount.ts:80_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentAccount.ts#L80)

Check if this Account possesses certain Permissions for its corresponding Identity

**Parameters:**

| Name | Type |
| :--- | :--- |
| `permissions` | [PermissionsLike](../interfaces/permissionslike.md) |

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown›\): _boolean_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_isEqual_](checkpointschedule.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown› |

**Returns:** _boolean_

### isFrozen

▸ **isFrozen**\(\): _Promise‹boolean›_

_Inherited from_ [_Account_](account.md)_._[_isFrozen_](account.md#isfrozen)

_Defined in_ [_src/api/entities/Account.ts:211_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Account.ts#L211)

Check whether this Account is frozen. If frozen, it cannot perform any action until the primary key of the Identity unfreezes all secondary keys

**Returns:** _Promise‹boolean›_

### leaveIdentity

▸ **leaveIdentity**\(`args`: void\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/CurrentAccount.ts:36_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/CurrentAccount.ts#L36)

Leave the current Identity. This operation can only be done if this Account is a secondary key for the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `leaveIdentity.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_generateUuid_](checkpointschedule.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_unserialize_](checkpointschedule.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


# Account

Represents an account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals \(among other things\)

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **Account**

  ↳ [CurrentAccount](currentaccount.md)

## Index

### Properties

* [address](account.md#address)
* [authorizations](account.md#authorizations)
* [context](account.md#protected-context)
* [key](account.md#key)
* [uuid](account.md#uuid)

### Methods

* [getBalance](account.md#getbalance)
* [getIdentity](account.md#getidentity)
* [getPermissions](account.md#getpermissions)
* [getTransactionHistory](account.md#gettransactionhistory)
* [hasPermissions](account.md#haspermissions)
* [isEqual](account.md#isequal)
* [isFrozen](account.md#isfrozen)
* [toJson](account.md#tojson)
* [generateUuid](account.md#static-generateuuid)
* [unserialize](account.md#static-unserialize)

## Properties

### address

• **address**: _string_

_Defined in_ [_src/api/entities/Account.ts:55_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L55)

Polymesh-specific address of the account. Serves as an identifier

### authorizations

• **authorizations**: [_Authorizations_](authorizations.md)_‹_[_Account_](account.md)_›_

_Defined in_ [_src/api/entities/Account.ts:63_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L63)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L48)

### key

• **key**: _string_

_Defined in_ [_src/api/entities/Account.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L60)

public key of the account. This is a hex representation of the address that is transversal to any Substrate chain

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L46)

## Methods

### getBalance

▸ **getBalance**\(\): _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

_Defined in_ [_src/api/entities/Account.ts:85_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L85)

Get the free/locked POLYX balance of the account

**`note`** can be subscribed to

**Returns:** _Promise‹_[_AccountBalance_](../globals.md#accountbalance)_›_

▸ **getBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Account.ts:86_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L86)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getIdentity

▸ **getIdentity**\(\): _Promise‹_[_Identity_](identity.md) _\| null›_

_Defined in_ [_src/api/entities/Account.ts:104_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L104)

Retrieve the Identity associated to this Account \(null if there is none\)

**Returns:** _Promise‹_[_Identity_](identity.md) _\| null›_

### getPermissions

▸ **getPermissions**\(\): _Promise‹Permissions›_

_Defined in_ [_src/api/entities/Account.ts:242_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L242)

Retrieve the Permissions this Signer has as a Signing Key for its corresponding Identity

**Returns:** _Promise‹Permissions›_

### getTransactionHistory

▸ **getTransactionHistory**\(`filters`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ExtrinsicData_](../interfaces/extrinsicdata.md)_››_

_Defined in_ [_src/api/entities/Account.ts:136_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L136)

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

▸ **hasPermissions**\(`permissions`: [SimplePermissions](../interfaces/simplepermissions.md)\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Account.ts:270_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L270)

Check if this Account possesses certain Permissions for its corresponding Identity

**Parameters:**

| Name | Type |
| :--- | :--- |
| `permissions` | [SimplePermissions](../interfaces/simplepermissions.md) |

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### isFrozen

▸ **isFrozen**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Account.ts:221_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L221)

Check whether this Account is frozen. If frozen, it cannot perform any action until the primary key of the Identity unfreezes all secondary keys

**Returns:** _Promise‹boolean›_

### toJson

▸ **toJson**\(\): _string_

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/Account.ts:396_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L396)

Return the Account's address

**Returns:** _string_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L14)

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

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


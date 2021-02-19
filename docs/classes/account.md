# Account

Represents an account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals \(among other things\)

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

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
* [getTransactionHistory](account.md#gettransactionhistory)
* [generateUuid](account.md#static-generateuuid)
* [unserialize](account.md#static-unserialize)

## Properties

### address

• **address**: _string_

_Defined in_ [_src/api/entities/Account.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Account.ts#L45)

Polymesh-specific address of the account. Serves as an identifier

### authorizations

• **authorizations**: [_Authorizations_](authorizations.md)_‹_[_Account_](account.md)_›_

_Defined in_ [_src/api/entities/Account.ts:53_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Account.ts#L53)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L48)

### key

• **key**: _string_

_Defined in_ [_src/api/entities/Account.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Account.ts#L50)

public key of the account. This is a hex representation of the address that is transversal to any Substrate chain

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L46)

## Methods

### getBalance

▸ **getBalance**\(\): _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

_Defined in_ [_src/api/entities/Account.ts:73_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Account.ts#L73)

Get the free/locked POLYX balance of the account

**`note`** can be subscribed to

**Returns:** _Promise‹_[_AccountBalance_](../interfaces/accountbalance.md)_›_

▸ **getBalance**\(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Account.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Account.ts#L74)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getIdentity

▸ **getIdentity**\(\): _Promise‹_[_Identity_](identity.md) _\| null›_

_Defined in_ [_src/api/entities/Account.ts:92_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Account.ts#L92)

Retrieve the Identity associated to this Account \(null if there is none\)

**Returns:** _Promise‹_[_Identity_](identity.md) _\| null›_

### getTransactionHistory

▸ **getTransactionHistory**\(`filters`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ExtrinsicData_](../interfaces/extrinsicdata.md)_››_

_Defined in_ [_src/api/entities/Account.ts:124_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Account.ts#L124)

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

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


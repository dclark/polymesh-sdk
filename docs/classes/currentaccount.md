# Class: CurrentAccount

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
* [getTransactionHistory](currentaccount.md#gettransactionhistory)
* [generateUuid](currentaccount.md#static-generateuuid)
* [unserialize](currentaccount.md#static-unserialize)

## Properties

###  address

• **address**: *string*

*Inherited from [Account](account.md).[address](account.md#address)*

*Defined in [src/api/entities/Account.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Account.ts#L47)*

Polymesh-specific address of the account. Serves as an identifier

___

###  authorizations

• **authorizations**: *[Authorizations](authorizations.md)‹[Account](account.md)›*

*Inherited from [Account](account.md).[authorizations](account.md#authorizations)*

*Defined in [src/api/entities/Account.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Account.ts#L55)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L48)*

___

###  key

• **key**: *string*

*Inherited from [Account](account.md).[key](account.md#key)*

*Defined in [src/api/entities/Account.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Account.ts#L52)*

public key of the account. This is a hex representation of the address that is transversal to any Substrate chain

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L46)*

## Methods

###  getBalance

▸ **getBalance**(): *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

*Inherited from [Account](account.md).[getBalance](account.md#getbalance)*

*Defined in [src/api/entities/Account.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Account.ts#L75)*

Get the free/locked POLYX balance of the account

**`note`** can be subscribed to

**Returns:** *Promise‹[AccountBalance](../interfaces/accountbalance.md)›*

▸ **getBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Account](account.md).[getBalance](account.md#getbalance)*

*Defined in [src/api/entities/Account.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Account.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../interfaces/accountbalance.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getIdentity

▸ **getIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md) | null›*

*Overrides [Account](account.md).[getIdentity](account.md#getidentity)*

*Defined in [src/api/entities/CurrentAccount.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/CurrentAccount.ts#L10)*

Retrieves the current Identity (null if there is none)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md) | null›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

*Inherited from [Account](account.md).[getTransactionHistory](account.md#gettransactionhistory)*

*Defined in [src/api/entities/Account.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Account.ts#L125)*

Retrieve a list of transactions signed by this account. Can be filtered using parameters

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`blockNumber?` | BigNumber | - |
`orderBy?` | TransactionOrderByInput | - |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`success?` | undefined &#124; false &#124; true | whether the transaction was successful or not |
`tag?` | TxTag | tag associated with the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

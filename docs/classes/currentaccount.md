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
* [getPermissions](currentaccount.md#getpermissions)
* [getTransactionHistory](currentaccount.md#gettransactionhistory)
* [hasPermissions](currentaccount.md#haspermissions)
* [isEqual](currentaccount.md#isequal)
* [isFrozen](currentaccount.md#isfrozen)
* [leaveIdentity](currentaccount.md#leaveidentity)
* [toJson](currentaccount.md#tojson)
* [generateUuid](currentaccount.md#static-generateuuid)
* [unserialize](currentaccount.md#static-unserialize)

## Properties

###  address

• **address**: *string*

*Inherited from [Account](account.md).[address](account.md#address)*

*Defined in [src/api/entities/Account.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L55)*

Polymesh-specific address of the account. Serves as an identifier

___

###  authorizations

• **authorizations**: *[Authorizations](authorizations.md)‹[Account](account.md)›*

*Inherited from [Account](account.md).[authorizations](account.md#authorizations)*

*Defined in [src/api/entities/Account.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L63)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L48)*

___

###  key

• **key**: *string*

*Inherited from [Account](account.md).[key](account.md#key)*

*Defined in [src/api/entities/Account.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L60)*

public key of the account. This is a hex representation of the address that is transversal to any Substrate chain

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L46)*

## Methods

###  getBalance

▸ **getBalance**(): *Promise‹[AccountBalance](../globals.md#accountbalance)›*

*Inherited from [Account](account.md).[getBalance](account.md#getbalance)*

*Defined in [src/api/entities/Account.ts:85](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L85)*

Get the free/locked POLYX balance of the account

**`note`** can be subscribed to

**Returns:** *Promise‹[AccountBalance](../globals.md#accountbalance)›*

▸ **getBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Account](account.md).[getBalance](account.md#getbalance)*

*Defined in [src/api/entities/Account.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getIdentity

▸ **getIdentity**(): *Promise‹[CurrentIdentity](currentidentity.md) | null›*

*Overrides [Account](account.md).[getIdentity](account.md#getidentity)*

*Defined in [src/api/entities/CurrentAccount.ts:37](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CurrentAccount.ts#L37)*

Retrieve the current Identity (null if there is none)

**Returns:** *Promise‹[CurrentIdentity](currentidentity.md) | null›*

___

###  getPermissions

▸ **getPermissions**(): *Promise‹Permissions›*

*Inherited from [Account](account.md).[getPermissions](account.md#getpermissions)*

*Defined in [src/api/entities/Account.ts:242](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L242)*

Retrieve the Permissions this Signer has as a Signing Key for its corresponding Identity

**Returns:** *Promise‹Permissions›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

*Inherited from [Account](account.md).[getTransactionHistory](account.md#gettransactionhistory)*

*Defined in [src/api/entities/Account.ts:136](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L136)*

Retrieve a list of transactions signed by this account. Can be filtered using parameters

**`note`** uses the middleware

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

###  hasPermissions

▸ **hasPermissions**(`permissions`: [SimplePermissions](../interfaces/simplepermissions.md)): *Promise‹boolean›*

*Inherited from [Account](account.md).[hasPermissions](account.md#haspermissions)*

*Defined in [src/api/entities/Account.ts:270](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L270)*

Check if this Account possesses certain Permissions for its corresponding Identity

**Parameters:**

Name | Type |
------ | ------ |
`permissions` | [SimplePermissions](../interfaces/simplepermissions.md) |

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [Entity](entity.md).[isEqual](entity.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  isFrozen

▸ **isFrozen**(): *Promise‹boolean›*

*Inherited from [Account](account.md).[isFrozen](account.md#isfrozen)*

*Defined in [src/api/entities/Account.ts:221](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L221)*

Check whether this Account is frozen. If frozen, it cannot perform any action until the primary key of the Identity unfreezes all secondary keys

**Returns:** *Promise‹boolean›*

___

###  leaveIdentity

▸ **leaveIdentity**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CurrentAccount.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CurrentAccount.ts#L30)*

Leave the current Identity. This operation can only be done if this Account is a secondary key for the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `leaveIdentity.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *string*

*Inherited from [Account](account.md).[toJson](account.md#tojson)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Account.ts:396](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Account.ts#L396)*

Return the Account's address

**Returns:** *string*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

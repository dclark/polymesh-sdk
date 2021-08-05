# Class: PermissionGroup

Represents a group of permissions for a Security Token
Determines the subset of permissions an Agent has over a Security Token

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **PermissionGroup**

## Index

### Properties

* [context](permissiongroup.md#protected-context)
* [id](permissiongroup.md#id)
* [uuid](permissiongroup.md#uuid)

### Methods

* [isEqual](permissiongroup.md#isequal)
* [toJson](permissiongroup.md#tojson)
* [generateUuid](permissiongroup.md#static-generateuuid)
* [unserialize](permissiongroup.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/PermissionGroup.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/PermissionGroup.ts#L23)*

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L46)*

## Methods

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

###  toJson

▸ **toJson**(): *string*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/PermissionGroup.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/PermissionGroup.ts#L39)*

Return the Group's ID

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

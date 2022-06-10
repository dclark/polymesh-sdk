# Class: Entity ‹**UniqueIdentifiers, HumanReadable**›

Represents an object or resource in the Polymesh Ecosystem with its own set of properties and functionality

## Type parameters

▪ **UniqueIdentifiers**

▪ **HumanReadable**

## Hierarchy

* **Entity**

  ↳ [CheckpointSchedule](checkpointschedule.md)

  ↳ [CorporateActionBase](corporateactionbase.md)

  ↳ [Identity](identity.md)

  ↳ [Account](account.md)

  ↳ [TickerReservation](tickerreservation.md)

  ↳ [Asset](asset.md)

  ↳ [AuthorizationRequest](authorizationrequest.md)

  ↳ [Offering](offering.md)

  ↳ [Venue](venue.md)

  ↳ [Instruction](instruction.md)

  ↳ [Portfolio](portfolio.md)

  ↳ [Checkpoint](checkpoint.md)

  ↳ [PermissionGroup](permissiongroup.md)

  ↳ [Subsidy](subsidy.md)

## Index

### Properties

* [context](entity.md#protected-context)
* [uuid](entity.md#uuid)

### Methods

* [exists](entity.md#abstract-exists)
* [isEqual](entity.md#isequal)
* [toHuman](entity.md#abstract-tohuman)
* [generateUuid](entity.md#static-generateuuid)
* [isUniqueIdentifiers](entity.md#static-isuniqueidentifiers)
* [unserialize](entity.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *Context*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L48)*

___

###  uuid

• **uuid**: *string*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L46)*

## Methods

### `Abstract` exists

▸ **exists**(): *Promise‹boolean›*

*Defined in [src/api/entities/Entity.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L68)*

Determine whether this Entity exists on chain

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

### `Abstract` toHuman

▸ **toHuman**(): *HumanReadable*

*Defined in [src/api/entities/Entity.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L73)*

Returns Entity data in a human readable (JSON) format

**Returns:** *HumanReadable*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` isUniqueIdentifiers

▸ **isUniqueIdentifiers**(`identifiers`: unknown): *boolean*

*Defined in [src/api/entities/Entity.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L42)*

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | unknown | object to type check  |

**Returns:** *boolean*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/38ee8078/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

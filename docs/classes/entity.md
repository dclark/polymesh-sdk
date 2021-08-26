# Entity

Represents an object or resource in the Polymesh Ecosystem with its own set of properties and functionality

## Type parameters

▪ **UniqueIdentifiers**

▪ **HumanReadable**

## Hierarchy

* **Entity**

  ↳ [Identity](identity.md)

  ↳ [Account](account.md)

  ↳ [TickerReservation](tickerreservation.md)

  ↳ [SecurityToken](securitytoken.md)

  ↳ [AuthorizationRequest](authorizationrequest.md)

  ↳ [Sto](sto.md)

  ↳ [Venue](venue.md)

  ↳ [Instruction](instruction.md)

  ↳ [Portfolio](portfolio.md)

  ↳ [Checkpoint](checkpoint.md)

  ↳ [CheckpointSchedule](checkpointschedule.md)

  ↳ [PermissionGroup](permissiongroup.md)

  ↳ [CorporateAction](corporateaction.md)

## Index

### Properties

* [context](entity.md#protected-context)
* [uuid](entity.md#uuid)

### Methods

* [isEqual](entity.md#isequal)
* [toJson](entity.md#abstract-tojson)
* [generateUuid](entity.md#static-generateuuid)
* [isUniqueIdentifiers](entity.md#static-isuniqueidentifiers)
* [unserialize](entity.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L48)

### uuid

• **uuid**: _string_

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L46)

## Methods

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### `Abstract` toJson

▸ **toJson**\(\): _HumanReadable_

_Defined in_ [_src/api/entities/Entity.ts:68_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L68)

Returns Entity data in a human readable \(JSON\) format

**Returns:** _HumanReadable_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` isUniqueIdentifiers

▸ **isUniqueIdentifiers**\(`identifiers`: unknown\): _boolean_

_Defined in_ [_src/api/entities/Entity.ts:42_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L42)

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | unknown | object to type check |

**Returns:** _boolean_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


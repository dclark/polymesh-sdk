# Entity

Represents an object or resource in the Polymesh Ecosystem with its own set of properties and functionality

## Type parameters

▪ **UniqueIdentifiers**: _object_

## Hierarchy

* **Entity**

  ↳ [Identity](identity.md)

  ↳ [Account](account.md)

  ↳ [TickerReservation](tickerreservation.md)

  ↳ [SecurityToken](securitytoken.md)

  ↳ [AuthorizationRequest](authorizationrequest.md)

  ↳ [DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)

  ↳ [Venue](venue.md)

  ↳ [Instruction](instruction.md)

  ↳ [Portfolio](portfolio.md)

## Index

### Properties

* [context](entity.md#protected-context)
* [uuid](entity.md#uuid)

### Methods

* [generateUuid](entity.md#static-generateuuid)
* [isUniqueIdentifiers](entity.md#static-isuniqueidentifiers)
* [unserialize](entity.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L48)

### uuid

• **uuid**: _string_

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L46)

## Methods

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` isUniqueIdentifiers

▸ **isUniqueIdentifiers**\(`identifiers`: unknown\): _boolean_

_Defined in_ [_src/api/entities/Entity.ts:42_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L42)

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | unknown | object to type check |

**Returns:** _boolean_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


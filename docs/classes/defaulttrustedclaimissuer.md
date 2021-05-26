# Class: DefaultTrustedClaimIssuer

Represents a default trusted claim issuer for a specific token in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **DefaultTrustedClaimIssuer**

## Index

### Properties

* [context](defaulttrustedclaimissuer.md#protected-context)
* [identity](defaulttrustedclaimissuer.md#identity)
* [ticker](defaulttrustedclaimissuer.md#ticker)
* [trustedFor](defaulttrustedclaimissuer.md#optional-trustedfor)
* [uuid](defaulttrustedclaimissuer.md#uuid)

### Methods

* [addedAt](defaulttrustedclaimissuer.md#addedat)
* [isEqual](defaulttrustedclaimissuer.md#isequal)
* [generateUuid](defaulttrustedclaimissuer.md#static-generateuuid)
* [unserialize](defaulttrustedclaimissuer.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L48)*

___

###  identity

• **identity**: *[Identity](identity.md)*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DefaultTrustedClaimIssuer.ts#L35)*

identity of the Trusted Claim Issuer

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DefaultTrustedClaimIssuer.ts#L45)*

ticker of the Security Token

___

### `Optional` trustedFor

• **trustedFor**? : *[ClaimType](../enums/claimtype.md)[]*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DefaultTrustedClaimIssuer.ts#L40)*

claim types for which this Claim Issuer is trusted. An undefined value means that the issuer is trusted for all claim types

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L46)*

## Methods

###  addedAt

▸ **addedAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/DefaultTrustedClaimIssuer.ts#L68)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹object›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹object› |

**Returns:** *boolean*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L14)*

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

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

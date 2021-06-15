# DefaultTrustedClaimIssuer

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

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### identity

• **identity**: [_Identity_](identity.md)

_Defined in_ [_src/api/entities/DefaultTrustedClaimIssuer.ts:35_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DefaultTrustedClaimIssuer.ts#L35)

identity of the Trusted Claim Issuer

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/DefaultTrustedClaimIssuer.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DefaultTrustedClaimIssuer.ts#L45)

ticker of the Security Token

### `Optional` trustedFor

• **trustedFor**? : [_ClaimType_](../enums/claimtype.md)_\[\]_

_Defined in_ [_src/api/entities/DefaultTrustedClaimIssuer.ts:40_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DefaultTrustedClaimIssuer.ts#L40)

claim types for which this Claim Issuer is trusted. An undefined value means that the issuer is trusted for all claim types

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### addedAt

▸ **addedAt**\(\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/DefaultTrustedClaimIssuer.ts:68_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/DefaultTrustedClaimIssuer.ts#L68)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when the trusted claim issuer was added

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

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


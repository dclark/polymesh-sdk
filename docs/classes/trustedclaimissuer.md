# TrustedClaimIssuer

Represents a trusted claim issuer for a specific token in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **TrustedClaimIssuer**

## Index

### Properties

* [context](trustedclaimissuer.md#protected-context)
* [identity](trustedclaimissuer.md#identity)
* [ticker](trustedclaimissuer.md#ticker)
* [uuid](trustedclaimissuer.md#uuid)

### Methods

* [addedAt](trustedclaimissuer.md#addedat)
* [generateUuid](trustedclaimissuer.md#static-generateuuid)
* [unserialize](trustedclaimissuer.md#static-unserialize)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L48)

### identity

• **identity**: [_Identity_](identity.md)

_Defined in_ [_src/api/entities/TrustedClaimIssuer.ts:33_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/TrustedClaimIssuer.ts#L33)

identity of the Trusted Claim Issuer

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/TrustedClaimIssuer.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/TrustedClaimIssuer.ts#L38)

ticker of the Security Token

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L46)

## Methods

### addedAt

▸ **addedAt**\(\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/TrustedClaimIssuer.ts:58_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/TrustedClaimIssuer.ts#L58)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


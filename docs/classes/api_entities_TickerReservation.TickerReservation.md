[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/TickerReservation](../modules/api_entities_TickerReservation.md) / TickerReservation

# Class: TickerReservation

[api/entities/TickerReservation](../modules/api_entities_TickerReservation.md).TickerReservation

Represents a reserved Asset symbol in the Polymesh blockchain. Ticker reservations expire
  after a set length of time, after which they can be reserved by another Identity.
  A Ticker must be previously reserved by an Identity for that Identity to be able create an Asset with it

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_TickerReservation.UniqueIdentifiers.md), `string`\>

  ↳ **`TickerReservation`**

## Table of contents

### Properties

- [ticker](api_entities_TickerReservation.TickerReservation.md#ticker)
- [uuid](api_entities_TickerReservation.TickerReservation.md#uuid)

### Methods

- [createAsset](api_entities_TickerReservation.TickerReservation.md#createasset)
- [details](api_entities_TickerReservation.TickerReservation.md#details)
- [exists](api_entities_TickerReservation.TickerReservation.md#exists)
- [extend](api_entities_TickerReservation.TickerReservation.md#extend)
- [isEqual](api_entities_TickerReservation.TickerReservation.md#isequal)
- [toHuman](api_entities_TickerReservation.TickerReservation.md#tohuman)
- [transferOwnership](api_entities_TickerReservation.TickerReservation.md#transferownership)
- [generateUuid](api_entities_TickerReservation.TickerReservation.md#generateuuid)
- [unserialize](api_entities_TickerReservation.TickerReservation.md#unserialize)

## Properties

### ticker

• **ticker**: `string`

reserved ticker

#### Defined in

[api/entities/TickerReservation/index.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/index.ts#L51)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### createAsset

▸ **createAsset**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Create an Asset using the reserved ticker

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [createAsset.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateAssetParams`](../interfaces/api_procedures_createAsset.CreateAssetParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/TickerReservation/index.ts:196](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/index.ts#L196)

___

### details

▸ **details**(): `Promise`<[`TickerReservationDetails`](../interfaces/api_entities_TickerReservation_types.TickerReservationDetails.md)\>

Retrieve the Reservation's owner, expiry date and status

**`note`** can be subscribed to

#### Returns

`Promise`<[`TickerReservationDetails`](../interfaces/api_entities_TickerReservation_types.TickerReservationDetails.md)\>

#### Defined in

[api/entities/TickerReservation/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/index.ts#L91)

▸ **details**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`TickerReservationDetails`](../interfaces/api_entities_TickerReservation_types.TickerReservationDetails.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/TickerReservation/index.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/index.ts#L92)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Ticker Reservation exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/TickerReservation/index.ts:221](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/index.ts#L221)

___

### extend

▸ **extend**(`opts?`): `Promise`<`TransactionQueue`<[`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), [`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), `unknown`[][]\>\>

Extend the Reservation time period of the ticker for 60 days from now
to later use it in the creation of an Asset.

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [extend.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), [`TickerReservation`](api_entities_TickerReservation.TickerReservation.md), `unknown`[][]\>\>

#### Defined in

[api/entities/TickerReservation/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/index.ts#L183)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](api_entities_Entity.Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[isEqual](api_entities_Entity.Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L61)

___

### toHuman

▸ **toHuman**(): `string`

Return the Reservation's ticker

#### Returns

`string`

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/TickerReservation/index.ts:234](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/index.ts#L234)

___

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

Transfer ownership of the Ticker Reservation to another Identity. This generates an authorization request that must be accepted
  by the target

**`note`** this will create [Authorization Request](api_entities_AuthorizationRequest.AuthorizationRequest.md) which has to be accepted by the `target` Identity.
  An [Account](api_entities_Account.Account.md) or [Identity](api_entities_Identity.Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [transferOwnership.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferTickerOwnershipParams`](../interfaces/api_procedures_transferTickerOwnership.TransferTickerOwnershipParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

#### Defined in

[api/entities/TickerReservation/index.ts:214](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/TickerReservation/index.ts#L214)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[generateUuid](api_entities_Entity.Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[unserialize](api_entities_Entity.Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

# Class: TickerReservation

[api/entities/TickerReservation](../wiki/api.entities.TickerReservation).TickerReservation

Represents a reserved Asset symbol in the Polymesh blockchain. Ticker reservations expire
  after a set length of time, after which they can be reserved by another Identity.
  A Ticker must be previously reserved by an Identity for that Identity to be able create an Asset with it

## Hierarchy

- [`Entity`](../wiki/api.entities.Entity.Entity)<[`UniqueIdentifiers`](../wiki/api.entities.TickerReservation.UniqueIdentifiers), `string`\>

  ↳ **`TickerReservation`**

## Table of contents

### Properties

- [ticker](../wiki/api.entities.TickerReservation.TickerReservation#ticker)
- [uuid](../wiki/api.entities.TickerReservation.TickerReservation#uuid)

### Methods

- [createAsset](../wiki/api.entities.TickerReservation.TickerReservation#createasset)
- [details](../wiki/api.entities.TickerReservation.TickerReservation#details)
- [exists](../wiki/api.entities.TickerReservation.TickerReservation#exists)
- [extend](../wiki/api.entities.TickerReservation.TickerReservation#extend)
- [isEqual](../wiki/api.entities.TickerReservation.TickerReservation#isequal)
- [toHuman](../wiki/api.entities.TickerReservation.TickerReservation#tohuman)
- [transferOwnership](../wiki/api.entities.TickerReservation.TickerReservation#transferownership)
- [generateUuid](../wiki/api.entities.TickerReservation.TickerReservation#generateuuid)
- [unserialize](../wiki/api.entities.TickerReservation.TickerReservation#unserialize)

## Properties

### ticker

• **ticker**: `string`

reserved ticker

#### Defined in

[api/entities/TickerReservation/index.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/TickerReservation/index.ts#L56)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../wiki/api.entities.Entity.Entity).[uuid](../wiki/api.entities.Entity.Entity#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L46)

## Methods

### createAsset

▸ **createAsset**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Create an Asset using the reserved ticker

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [createAsset.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateAssetParams`](../wiki/api.procedures.types.CreateAssetParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/TickerReservation/index.ts:201](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/TickerReservation/index.ts#L201)

___

### details

▸ **details**(): `Promise`<[`TickerReservationDetails`](../wiki/api.entities.TickerReservation.types.TickerReservationDetails)\>

Retrieve the Reservation's owner, expiry date and status

**`note`** can be subscribed to

#### Returns

`Promise`<[`TickerReservationDetails`](../wiki/api.entities.TickerReservation.types.TickerReservationDetails)\>

#### Defined in

[api/entities/TickerReservation/index.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/TickerReservation/index.ts#L96)

▸ **details**(`callback`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../wiki/types#subcallback)<[`TickerReservationDetails`](../wiki/api.entities.TickerReservation.types.TickerReservationDetails)\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/entities/TickerReservation/index.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/TickerReservation/index.ts#L97)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Ticker Reservation exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../wiki/api.entities.Entity.Entity).[exists](../wiki/api.entities.Entity.Entity#exists)

#### Defined in

[api/entities/TickerReservation/index.ts:226](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/TickerReservation/index.ts#L226)

___

### extend

▸ **extend**(`opts?`): `Promise`<`TransactionQueue`<[`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), [`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), `unknown`[][]\>\>

Extend the Reservation time period of the ticker for 60 days from now
to later use it in the creation of an Asset.

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [extend.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), [`TickerReservation`](../wiki/api.entities.TickerReservation.TickerReservation), `unknown`[][]\>\>

#### Defined in

[api/entities/TickerReservation/index.ts:188](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/TickerReservation/index.ts#L188)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../wiki/api.entities.Entity.Entity)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../wiki/api.entities.Entity.Entity).[isEqual](../wiki/api.entities.Entity.Entity#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L61)

___

### toHuman

▸ **toHuman**(): `string`

Return the Reservation's ticker

#### Returns

`string`

#### Overrides

[Entity](../wiki/api.entities.Entity.Entity).[toHuman](../wiki/api.entities.Entity.Entity#tohuman)

#### Defined in

[api/entities/TickerReservation/index.ts:239](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/TickerReservation/index.ts#L239)

___

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

Transfer ownership of the Ticker Reservation to another Identity. This generates an authorization request that must be accepted
  by the target

**`note`** this will create [Authorization Request](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest) which has to be accepted by the `target` Identity.
  An [Account](../wiki/api.entities.Account.Account) or [Identity](../wiki/api.entities.Identity.Identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getone)

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [transferOwnership.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferTickerOwnershipParams`](../wiki/api.procedures.types.TransferTickerOwnershipParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

#### Defined in

[api/entities/TickerReservation/index.ts:219](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/TickerReservation/index.ts#L219)

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

[Entity](../wiki/api.entities.Entity.Entity).[generateUuid](../wiki/api.entities.Entity.Entity#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L14)

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

[Entity](../wiki/api.entities.Entity.Entity).[unserialize](../wiki/api.entities.Entity.Entity#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L23)

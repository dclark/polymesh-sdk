[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Portfolio](../modules/api_entities_Portfolio.md) / Portfolio

# Class: Portfolio

[api/entities/Portfolio](../modules/api_entities_Portfolio.md).Portfolio

Represents a base Portfolio for a specific Identity in the Polymesh blockchain

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_Portfolio.UniqueIdentifiers.md), `HumanReadable`\>

  ↳ **`Portfolio`**

  ↳↳ [`DefaultPortfolio`](api_entities_DefaultPortfolio.DefaultPortfolio.md)

  ↳↳ [`NumberedPortfolio`](api_entities_NumberedPortfolio.NumberedPortfolio.md)

## Table of contents

### Properties

- [owner](api_entities_Portfolio.Portfolio.md#owner)
- [uuid](api_entities_Portfolio.Portfolio.md#uuid)

### Methods

- [exists](api_entities_Portfolio.Portfolio.md#exists)
- [getAssetBalances](api_entities_Portfolio.Portfolio.md#getassetbalances)
- [getCustodian](api_entities_Portfolio.Portfolio.md#getcustodian)
- [getTransactionHistory](api_entities_Portfolio.Portfolio.md#gettransactionhistory)
- [isCustodiedBy](api_entities_Portfolio.Portfolio.md#iscustodiedby)
- [isEqual](api_entities_Portfolio.Portfolio.md#isequal)
- [isOwnedBy](api_entities_Portfolio.Portfolio.md#isownedby)
- [moveFunds](api_entities_Portfolio.Portfolio.md#movefunds)
- [quitCustody](api_entities_Portfolio.Portfolio.md#quitcustody)
- [setCustodian](api_entities_Portfolio.Portfolio.md#setcustodian)
- [toHuman](api_entities_Portfolio.Portfolio.md#tohuman)
- [generateUuid](api_entities_Portfolio.Portfolio.md#generateuuid)
- [unserialize](api_entities_Portfolio.Portfolio.md#unserialize)

## Properties

### owner

• **owner**: [`Identity`](api_entities_Identity.Identity.md)

Identity of the Portfolio's owner

#### Defined in

[api/entities/Portfolio/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L75)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ `Abstract` **exists**(): `Promise`<`boolean`\>

Determine whether this Entity exists on chain

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/Entity.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L68)

___

### getAssetBalances

▸ **getAssetBalances**(`args?`): `Promise`<[`PortfolioBalance`](../interfaces/api_entities_Portfolio_types.PortfolioBalance.md)[]\>

Retrieve the balances of all Assets in this Portfolio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.assets` | (`string` \| [`Asset`](api_entities_Asset.Asset.md))[] | array of Assets (or tickers) for which to fetch balances (optional, all balances are retrieved if not passed) |

#### Returns

`Promise`<[`PortfolioBalance`](../interfaces/api_entities_Portfolio_types.PortfolioBalance.md)[]\>

#### Defined in

[api/entities/Portfolio/index.ts:141](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L141)

___

### getCustodian

▸ **getCustodian**(): `Promise`<[`Identity`](api_entities_Identity.Identity.md)\>

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

#### Returns

`Promise`<[`Identity`](api_entities_Identity.Identity.md)\>

#### Defined in

[api/entities/Portfolio/index.ts:271](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L271)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`HistoricSettlement`](../interfaces/api_entities_Portfolio_types.HistoricSettlement.md)\>\>

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.account?` | `string` | Account involved in the settlement |
| `filters.size?` | `BigNumber` | page size |
| `filters.start?` | `BigNumber` | page offset |
| `filters.ticker?` | `string` | ticker involved in the transaction |

#### Returns

`Promise`<[`ResultSet`](../interfaces/types.ResultSet.md)<[`HistoricSettlement`](../interfaces/api_entities_Portfolio_types.HistoricSettlement.md)\>\>

#### Defined in

[api/entities/Portfolio/index.ts:316](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L316)

___

### isCustodiedBy

▸ **isCustodiedBy**(`args?`): `Promise`<`boolean`\>

Return whether an Identity is the Portfolio custodian

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | optional, defaults to the signing Identity |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Portfolio/index.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L125)

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

### isOwnedBy

▸ **isOwnedBy**(`args?`): `Promise`<`boolean`\>

Return whether an Identity is the Portfolio owner

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](api_entities_Identity.Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Portfolio/index.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L112)

___

### moveFunds

▸ **moveFunds**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Moves funds from this Portfolio to another one owned by the same Identity

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [moveFunds.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`MoveFundsParams`](../interfaces/api_procedures_moveFunds.MoveFundsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Portfolio/index.ts:249](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L249)

___

### quitCustody

▸ **quitCustody**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Returns the custody of the portfolio to the portfolio owner unilaterally

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [quitCustody.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Portfolio/index.ts:262](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L262)

___

### setCustodian

▸ **setCustodian**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this will create an [Authorization Request](api_entities_AuthorizationRequest.AuthorizationRequest.md) which has to be accepted by the `targetIdentity`.
  An [Account](api_entities_Account.Account.md) or [Identity](api_entities_Identity.Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [setCustodian.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetCustodianParams`](../interfaces/api_procedures_setCustodian.SetCustodianParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Portfolio/index.ts:236](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L236)

___

### toHuman

▸ **toHuman**(): `HumanReadable`

Return the Portfolio ID and owner DID

#### Returns

`HumanReadable`

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/Portfolio/index.ts:413](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/index.ts#L413)

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

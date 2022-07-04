# Class: DefaultPortfolio

[api/entities/DefaultPortfolio](../wiki/api.entities.DefaultPortfolio).DefaultPortfolio

Represents the default Portfolio for an Identity

## Hierarchy

- [`Portfolio`](../wiki/api.entities.Portfolio.Portfolio)

  ↳ **`DefaultPortfolio`**

## Table of contents

### Properties

- [owner](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#owner)
- [uuid](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#uuid)

### Methods

- [exists](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#exists)
- [getAssetBalances](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#getassetbalances)
- [getCustodian](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#getcustodian)
- [getTransactionHistory](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#gettransactionhistory)
- [isCustodiedBy](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#iscustodiedby)
- [isEqual](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#isequal)
- [isOwnedBy](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#isownedby)
- [moveFunds](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#movefunds)
- [quitCustody](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#quitcustody)
- [setCustodian](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#setcustodian)
- [toHuman](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#tohuman)
- [generateUuid](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#generateuuid)
- [unserialize](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio#unserialize)

## Properties

### owner

• **owner**: [`Identity`](../wiki/api.entities.Identity.Identity)

Identity of the Portfolio's owner

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[owner](../wiki/api.entities.Portfolio.Portfolio#owner)

#### Defined in

[api/entities/Portfolio/index.ts:80](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L80)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[uuid](../wiki/api.entities.Portfolio.Portfolio#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Portfolio exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[exists](../wiki/api.entities.Portfolio.Portfolio#exists)

#### Defined in

[api/entities/DefaultPortfolio.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/DefaultPortfolio.ts#L22)

___

### getAssetBalances

▸ **getAssetBalances**(`args?`): `Promise`<[`PortfolioBalance`](../wiki/api.entities.Portfolio.types.PortfolioBalance)[]\>

Retrieve the balances of all Assets in this Portfolio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.assets` | (`string` \| [`Asset`](../wiki/api.entities.Asset.Asset))[] | array of Assets (or tickers) for which to fetch balances (optional, all balances are retrieved if not passed) |

#### Returns

`Promise`<[`PortfolioBalance`](../wiki/api.entities.Portfolio.types.PortfolioBalance)[]\>

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[getAssetBalances](../wiki/api.entities.Portfolio.Portfolio#getassetbalances)

#### Defined in

[api/entities/Portfolio/index.ts:146](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L146)

___

### getCustodian

▸ **getCustodian**(): `Promise`<[`Identity`](../wiki/api.entities.Identity.Identity)\>

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

#### Returns

`Promise`<[`Identity`](../wiki/api.entities.Identity.Identity)\>

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[getCustodian](../wiki/api.entities.Portfolio.Portfolio#getcustodian)

#### Defined in

[api/entities/Portfolio/index.ts:276](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L276)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`HistoricSettlement`](../wiki/api.entities.Portfolio.types.HistoricSettlement)\>\>

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

`Promise`<[`ResultSet`](../wiki/types.ResultSet)<[`HistoricSettlement`](../wiki/api.entities.Portfolio.types.HistoricSettlement)\>\>

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[getTransactionHistory](../wiki/api.entities.Portfolio.Portfolio#gettransactionhistory)

#### Defined in

[api/entities/Portfolio/index.ts:321](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L321)

___

### isCustodiedBy

▸ **isCustodiedBy**(`args?`): `Promise`<`boolean`\>

Return whether an Identity is the Portfolio custodian

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | optional, defaults to the signing Identity |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[isCustodiedBy](../wiki/api.entities.Portfolio.Portfolio#iscustodiedby)

#### Defined in

[api/entities/Portfolio/index.ts:130](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L130)

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

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[isEqual](../wiki/api.entities.Portfolio.Portfolio#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L61)

___

### isOwnedBy

▸ **isOwnedBy**(`args?`): `Promise`<`boolean`\>

Return whether an Identity is the Portfolio owner

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](../wiki/api.entities.Identity.Identity) | defaults to the signing Identity |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[isOwnedBy](../wiki/api.entities.Portfolio.Portfolio#isownedby)

#### Defined in

[api/entities/Portfolio/index.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L117)

___

### moveFunds

▸ **moveFunds**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Moves funds from this Portfolio to another one owned by the same Identity

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [moveFunds.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`MoveFundsParams`](../wiki/api.procedures.types.MoveFundsParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[moveFunds](../wiki/api.entities.Portfolio.Portfolio#movefunds)

#### Defined in

[api/entities/Portfolio/index.ts:254](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L254)

___

### quitCustody

▸ **quitCustody**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Returns the custody of the portfolio to the portfolio owner unilaterally

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [quitCustody.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[quitCustody](../wiki/api.entities.Portfolio.Portfolio#quitcustody)

#### Defined in

[api/entities/Portfolio/index.ts:267](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L267)

___

### setCustodian

▸ **setCustodian**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this will create an [Authorization Request](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest) which has to be accepted by the `targetIdentity`.
  An [Account](../wiki/api.entities.Account.Account) or [Identity](../wiki/api.entities.Identity.Identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getone)

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [setCustodian.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetCustodianParams`](../wiki/api.procedures.types.SetCustodianParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[setCustodian](../wiki/api.entities.Portfolio.Portfolio#setcustodian)

#### Defined in

[api/entities/Portfolio/index.ts:241](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L241)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../wiki/api.entities.Portfolio.HumanReadable)

Return the Portfolio ID and owner DID

#### Returns

[`HumanReadable`](../wiki/api.entities.Portfolio.HumanReadable)

#### Inherited from

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[toHuman](../wiki/api.entities.Portfolio.Portfolio#tohuman)

#### Defined in

[api/entities/Portfolio/index.ts:418](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Portfolio/index.ts#L418)

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

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[generateUuid](../wiki/api.entities.Portfolio.Portfolio#generateuuid)

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

[Portfolio](../wiki/api.entities.Portfolio.Portfolio).[unserialize](../wiki/api.entities.Portfolio.Portfolio#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L23)

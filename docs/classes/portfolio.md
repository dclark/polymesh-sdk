# Portfolio

Represents a base Portfolio for a specific Identity in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Portfolio**

  ↳ [DefaultPortfolio](defaultportfolio.md)

  ↳ [NumberedPortfolio](numberedportfolio.md)

## Index

### Properties

* [\_id](portfolio.md#protected-optional-_id)
* [context](portfolio.md#protected-context)
* [moveFunds](portfolio.md#movefunds)
* [owner](portfolio.md#owner)
* [setCustodian](portfolio.md#setcustodian)
* [uuid](portfolio.md#uuid)

### Methods

* [getCustodian](portfolio.md#getcustodian)
* [getTokenBalances](portfolio.md#gettokenbalances)
* [getTransactionHistory](portfolio.md#gettransactionhistory)
* [isCustodiedBy](portfolio.md#iscustodiedby)
* [isOwnedBy](portfolio.md#isownedby)
* [generateUuid](portfolio.md#static-generateuuid)
* [unserialize](portfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` \_id

• **\_id**? : _BigNumber_

_Defined in_ [_src/api/entities/Portfolio/index.ts:59_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Portfolio/index.ts#L59)

internal Portfolio identifier \(unused for default Portfolio\)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L48)

### moveFunds

• **moveFunds**: _ProcedureMethod‹_[_MoveFundsParams_](../interfaces/movefundsparams.md)_, void›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:202_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Portfolio/index.ts#L202)

Moves funds from this Portfolio to another one owned by the same Identity

**`param`** portfolio \(or portfolio ID\) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner

**`param`** list of tokens \(and their corresponding amounts\) that will be moved

**`note`** required role:

* Portfolio Custodian

### owner

• **owner**: [_Identity_](identity.md)

_Defined in_ [_src/api/entities/Portfolio/index.ts:54_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Portfolio/index.ts#L54)

identity of the Portfolio's owner

### setCustodian

• **setCustodian**: _ProcedureMethod‹_[_SetCustodianParams_](../interfaces/setcustodianparams.md)_, void›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:190_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Portfolio/index.ts#L190)

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this may create an AuthorizationRequest which has to be accepted by the corresponding Identity. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Portfolio Custodian

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L46)

## Methods

### getCustodian

▸ **getCustodian**\(\): _Promise‹_[_Identity_](identity.md)_›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:209_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Portfolio/index.ts#L209)

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** _Promise‹_[_Identity_](identity.md)_›_

### getTokenBalances

▸ **getTokenBalances**\(`args?`: undefined \| object\): _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:116_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Portfolio/index.ts#L116)

Retrieve the balances of all assets in this Portfolio

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

### getTransactionHistory

▸ **getTransactionHistory**\(`filters`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_HistoricSettlement_](../interfaces/historicsettlement.md)_››_

_Defined in_ [_src/api/entities/Portfolio/index.ts:244_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Portfolio/index.ts#L244)

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value` **filters**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `account?` | undefined \| string | account involved in the settlement |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |
| `ticker?` | undefined \| string | ticker involved in the transaction |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_HistoricSettlement_](../interfaces/historicsettlement.md)_››_

### isCustodiedBy

▸ **isCustodiedBy**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:100_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Portfolio/index.ts#L100)

Return whether an Identity is the Portfolio custodian

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### isOwnedBy

▸ **isOwnedBy**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:84_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Portfolio/index.ts#L84)

Return whether an Identity is the Portfolio owner

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


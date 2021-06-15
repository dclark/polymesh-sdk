# DefaultPortfolio

Represents the default Portfolio for an Identity

## Hierarchy

↳ [Portfolio](portfolio.md)

↳ **DefaultPortfolio**

## Index

### Properties

* [\_id](defaultportfolio.md#protected-optional-_id)
* [context](defaultportfolio.md#protected-context)
* [owner](defaultportfolio.md#owner)
* [uuid](defaultportfolio.md#uuid)

### Methods

* [getCustodian](defaultportfolio.md#getcustodian)
* [getTokenBalances](defaultportfolio.md#gettokenbalances)
* [getTransactionHistory](defaultportfolio.md#gettransactionhistory)
* [isCustodiedBy](defaultportfolio.md#iscustodiedby)
* [isEqual](defaultportfolio.md#isequal)
* [isOwnedBy](defaultportfolio.md#isownedby)
* [moveFunds](defaultportfolio.md#movefunds)
* [setCustodian](defaultportfolio.md#setcustodian)
* [generateUuid](defaultportfolio.md#static-generateuuid)
* [unserialize](defaultportfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` \_id

• **\_id**? : _BigNumber_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_\_id_](portfolio.md#protected-optional-_id)

_Defined in_ [_src/api/entities/Portfolio/index.ts:59_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L59)

internal Portfolio identifier \(unused for default Portfolio\)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_context_](checkpointschedule.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)

### owner

• **owner**: [_Identity_](identity.md)

_Inherited from_ [_Portfolio_](portfolio.md)_._[_owner_](portfolio.md#owner)

_Defined in_ [_src/api/entities/Portfolio/index.ts:54_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L54)

identity of the Portfolio's owner

### uuid

• **uuid**: _string_

_Inherited from_ [_CheckpointSchedule_](checkpointschedule.md)_._[_uuid_](checkpointschedule.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)

## Methods

### getCustodian

▸ **getCustodian**\(\): _Promise‹_[_Identity_](identity.md)_›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_getCustodian_](portfolio.md#getcustodian)

_Defined in_ [_src/api/entities/Portfolio/index.ts:220_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L220)

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** _Promise‹_[_Identity_](identity.md)_›_

### getTokenBalances

▸ **getTokenBalances**\(`args?`: undefined \| object\): _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_getTokenBalances_](portfolio.md#gettokenbalances)

_Defined in_ [_src/api/entities/Portfolio/index.ts:119_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L119)

Retrieve the balances of all assets in this Portfolio

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

### getTransactionHistory

▸ **getTransactionHistory**\(`filters`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_HistoricSettlement_](../interfaces/historicsettlement.md)_››_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_getTransactionHistory_](portfolio.md#gettransactionhistory)

_Defined in_ [_src/api/entities/Portfolio/index.ts:255_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L255)

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

_Inherited from_ [_Portfolio_](portfolio.md)_._[_isCustodiedBy_](portfolio.md#iscustodiedby)

_Defined in_ [_src/api/entities/Portfolio/index.ts:103_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L103)

Return whether an Identity is the Portfolio custodian

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

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

### isOwnedBy

▸ **isOwnedBy**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_isOwnedBy_](portfolio.md#isownedby)

_Defined in_ [_src/api/entities/Portfolio/index.ts:87_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L87)

Return whether an Identity is the Portfolio owner

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### moveFunds

▸ **moveFunds**\(`args`: [MoveFundsParams](../interfaces/movefundsparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_moveFunds_](portfolio.md#movefunds)

_Defined in_ [_src/api/entities/Portfolio/index.ts:211_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L211)

Moves funds from this Portfolio to another one owned by the same Identity

**`note`** required role:

* Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `moveFunds.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [MoveFundsParams](../interfaces/movefundsparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### setCustodian

▸ **setCustodian**\(`args`: [SetCustodianParams](../interfaces/setcustodianparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_setCustodian_](portfolio.md#setcustodian)

_Defined in_ [_src/api/entities/Portfolio/index.ts:198_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L198)

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this may create an AuthorizationRequest which has to be accepted by the corresponding Identity. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setCustodian.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetCustodianParams](../interfaces/setcustodianparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

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


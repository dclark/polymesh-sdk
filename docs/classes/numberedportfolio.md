# NumberedPortfolio

Represents a numbered \(non-default\) Portfolio for an Identity

## Hierarchy

↳ [Portfolio](portfolio.md)

↳ **NumberedPortfolio**

## Index

### Properties

* [\_id](numberedportfolio.md#protected-optional-_id)
* [context](numberedportfolio.md#protected-context)
* [id](numberedportfolio.md#id)
* [owner](numberedportfolio.md#owner)
* [uuid](numberedportfolio.md#uuid)

### Methods

* [createdAt](numberedportfolio.md#createdat)
* [delete](numberedportfolio.md#delete)
* [exists](numberedportfolio.md#exists)
* [getCustodian](numberedportfolio.md#getcustodian)
* [getName](numberedportfolio.md#getname)
* [getTokenBalances](numberedportfolio.md#gettokenbalances)
* [getTransactionHistory](numberedportfolio.md#gettransactionhistory)
* [isCustodiedBy](numberedportfolio.md#iscustodiedby)
* [isEqual](numberedportfolio.md#isequal)
* [isOwnedBy](numberedportfolio.md#isownedby)
* [modifyName](numberedportfolio.md#modifyname)
* [moveFunds](numberedportfolio.md#movefunds)
* [quitCustody](numberedportfolio.md#quitcustody)
* [setCustodian](numberedportfolio.md#setcustodian)
* [toJson](numberedportfolio.md#tojson)
* [generateUuid](numberedportfolio.md#static-generateuuid)
* [unserialize](numberedportfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` \_id

• **\_id**? : _BigNumber_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_\_id_](portfolio.md#protected-optional-_id)

_Defined in_ [_src/api/entities/Portfolio/index.ts:66_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L66)

internal Portfolio identifier \(unused for default Portfolio\)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L48)

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/NumberedPortfolio.ts#L45)

portfolio identifier number

### owner

• **owner**: [_Identity_](identity.md)

_Inherited from_ [_Portfolio_](portfolio.md)_._[_owner_](portfolio.md#owner)

_Defined in_ [_src/api/entities/Portfolio/index.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L61)

identity of the Portfolio's owner

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L46)

## Methods

### createdAt

▸ **createdAt**\(\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:119_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/NumberedPortfolio.ts#L119)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when this portfolio was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### delete

▸ **delete**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:76_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/NumberedPortfolio.ts#L76)

Delete this Portfolio

**`note`** required role:

* Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `delete.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:143_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/NumberedPortfolio.ts#L143)

Return whether this Portfolio exists

**Returns:** _Promise‹boolean›_

### getCustodian

▸ **getCustodian**\(\): _Promise‹_[_Identity_](identity.md)_›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_getCustodian_](portfolio.md#getcustodian)

_Defined in_ [_src/api/entities/Portfolio/index.ts:244_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L244)

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** _Promise‹_[_Identity_](identity.md)_›_

### getName

▸ **getName**\(\): _Promise‹string›_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:96_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/NumberedPortfolio.ts#L96)

Return the Portfolio name

**Returns:** _Promise‹string›_

### getTokenBalances

▸ **getTokenBalances**\(`args?`: undefined \| object\): _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_getTokenBalances_](portfolio.md#gettokenbalances)

_Defined in_ [_src/api/entities/Portfolio/index.ts:130_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L130)

Retrieve the balances of all assets in this Portfolio

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

### getTransactionHistory

▸ **getTransactionHistory**\(`filters`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_HistoricSettlement_](../interfaces/historicsettlement.md)_››_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_getTransactionHistory_](portfolio.md#gettransactionhistory)

_Defined in_ [_src/api/entities/Portfolio/index.ts:279_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L279)

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

_Defined in_ [_src/api/entities/Portfolio/index.ts:114_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L114)

Return whether an Identity is the Portfolio custodian

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### isOwnedBy

▸ **isOwnedBy**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_isOwnedBy_](portfolio.md#isownedby)

_Defined in_ [_src/api/entities/Portfolio/index.ts:98_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L98)

Return whether an Identity is the Portfolio owner

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### modifyName

▸ **modifyName**\(`args`: [RenamePortfolioParams](../interfaces/renameportfolioparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_NumberedPortfolio_](numberedportfolio.md)_››_

_Defined in_ [_src/api/entities/NumberedPortfolio.ts:89_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/NumberedPortfolio.ts#L89)

Rename portfolio

**`note`** required role:

* Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyName.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RenamePortfolioParams](../interfaces/renameportfolioparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_NumberedPortfolio_](numberedportfolio.md)_››_

### moveFunds

▸ **moveFunds**\(`args`: [MoveFundsParams](../interfaces/movefundsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_moveFunds_](portfolio.md#movefunds)

_Defined in_ [_src/api/entities/Portfolio/index.ts:222_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L222)

Moves funds from this Portfolio to another one owned by the same Identity

**`note`** required role:

* Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `moveFunds.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [MoveFundsParams](../interfaces/movefundsparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### quitCustody

▸ **quitCustody**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_quitCustody_](portfolio.md#quitcustody)

_Defined in_ [_src/api/entities/Portfolio/index.ts:235_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L235)

Returns the custody of the portfolio to the portfolio owner unilaterally

**`note`** required role:

* Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `quitCustody.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### setCustodian

▸ **setCustodian**\(`args`: [SetCustodianParams](../interfaces/setcustodianparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Inherited from_ [_Portfolio_](portfolio.md)_._[_setCustodian_](portfolio.md#setcustodian)

_Defined in_ [_src/api/entities/Portfolio/index.ts:209_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L209)

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this may create an AuthorizationRequest which has to be accepted by the corresponding Identity. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setCustodian.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetCustodianParams](../interfaces/setcustodianparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### toJson

▸ **toJson**\(\): [_HumanReadable_](../interfaces/humanreadable.md)

_Inherited from_ [_Portfolio_](portfolio.md)_._[_toJson_](portfolio.md#tojson)

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/Portfolio/index.ts:353_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Portfolio/index.ts#L353)

Return the Portfolio ID and owner DID

**Returns:** [_HumanReadable_](../interfaces/humanreadable.md)

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L14)

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

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


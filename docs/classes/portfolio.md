# Portfolio

Represents a base Portfolio for a specific Identity in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **Portfolio**

  ↳ [DefaultPortfolio](defaultportfolio.md)

  ↳ [NumberedPortfolio](numberedportfolio.md)

## Index

### Properties

* [\_id](portfolio.md#protected-optional-_id)
* [context](portfolio.md#protected-context)
* [owner](portfolio.md#owner)
* [uuid](portfolio.md#uuid)

### Methods

* [getCustodian](portfolio.md#getcustodian)
* [getTokenBalances](portfolio.md#gettokenbalances)
* [getTransactionHistory](portfolio.md#gettransactionhistory)
* [isCustodiedBy](portfolio.md#iscustodiedby)
* [isEqual](portfolio.md#isequal)
* [isOwnedBy](portfolio.md#isownedby)
* [moveFunds](portfolio.md#movefunds)
* [quitCustody](portfolio.md#quitcustody)
* [setCustodian](portfolio.md#setcustodian)
* [toJson](portfolio.md#tojson)
* [generateUuid](portfolio.md#static-generateuuid)
* [unserialize](portfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` \_id

• **\_id**? : _BigNumber_

_Defined in_ [_src/api/entities/Portfolio/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L72)

internal Portfolio identifier \(unused for default Portfolio\)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L48)

### owner

• **owner**: [_Identity_](identity.md)

_Defined in_ [_src/api/entities/Portfolio/index.ts:67_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L67)

identity of the Portfolio's owner

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L46)

## Methods

### getCustodian

▸ **getCustodian**\(\): _Promise‹_[_Identity_](identity.md)_›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:246_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L246)

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** _Promise‹_[_Identity_](identity.md)_›_

### getTokenBalances

▸ **getTokenBalances**\(`args?`: undefined \| object\): _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:136_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L136)

Retrieve the balances of all assets in this Portfolio

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

### getTransactionHistory

▸ **getTransactionHistory**\(`filters`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_HistoricSettlement_](../interfaces/historicsettlement.md)_››_

_Defined in_ [_src/api/entities/Portfolio/index.ts:281_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L281)

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

_Defined in_ [_src/api/entities/Portfolio/index.ts:120_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L120)

Return whether an Identity is the Portfolio custodian

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L61)

Whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### isOwnedBy

▸ **isOwnedBy**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:104_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L104)

Return whether an Identity is the Portfolio owner

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### moveFunds

▸ **moveFunds**\(`args`: [MoveFundsParams](../interfaces/movefundsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Portfolio/index.ts:224_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L224)

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

_Defined in_ [_src/api/entities/Portfolio/index.ts:237_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L237)

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

_Defined in_ [_src/api/entities/Portfolio/index.ts:211_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L211)

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

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/Portfolio/index.ts:355_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Portfolio/index.ts#L355)

Return the Portfolio ID and owner DID

**Returns:** [_HumanReadable_](../interfaces/humanreadable.md)

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


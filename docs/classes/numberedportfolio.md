# Class: NumberedPortfolio

Represents a numbered (non-default) Portfolio for an Identity

## Hierarchy

  ↳ [Portfolio](portfolio.md)

  ↳ **NumberedPortfolio**

## Index

### Properties

* [_id](numberedportfolio.md#protected-optional-_id)
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
* [setCustodian](numberedportfolio.md#setcustodian)
* [generateUuid](numberedportfolio.md#static-generateuuid)
* [unserialize](numberedportfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` _id

• **_id**? : *BigNumber*

*Inherited from [Portfolio](portfolio.md).[_id](portfolio.md#protected-optional-_id)*

*Defined in [src/api/entities/Portfolio/index.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L59)*

internal Portfolio identifier (unused for default Portfolio)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/NumberedPortfolio.ts:44](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/NumberedPortfolio.ts#L44)*

portfolio identifier number

___

###  owner

• **owner**: *[Identity](identity.md)*

*Inherited from [Portfolio](portfolio.md).[owner](portfolio.md#owner)*

*Defined in [src/api/entities/Portfolio/index.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L54)*

identity of the Portfolio's owner

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)*

## Methods

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/NumberedPortfolio.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/NumberedPortfolio.ts#L118)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this portfolio was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  delete

▸ **delete**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/NumberedPortfolio.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/NumberedPortfolio.ts#L75)*

Delete this Portfolio

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `delete.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Defined in [src/api/entities/NumberedPortfolio.ts:142](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/NumberedPortfolio.ts#L142)*

Return whether this Portfolio exists

**Returns:** *Promise‹boolean›*

___

###  getCustodian

▸ **getCustodian**(): *Promise‹[Identity](identity.md)›*

*Inherited from [Portfolio](portfolio.md).[getCustodian](portfolio.md#getcustodian)*

*Defined in [src/api/entities/Portfolio/index.ts:220](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L220)*

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getName

▸ **getName**(): *Promise‹string›*

*Defined in [src/api/entities/NumberedPortfolio.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/NumberedPortfolio.ts#L95)*

Return the Portfolio name

**Returns:** *Promise‹string›*

___

###  getTokenBalances

▸ **getTokenBalances**(`args?`: undefined | object): *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

*Inherited from [Portfolio](portfolio.md).[getTokenBalances](portfolio.md#gettokenbalances)*

*Defined in [src/api/entities/Portfolio/index.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L119)*

Retrieve the balances of all assets in this Portfolio

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

*Inherited from [Portfolio](portfolio.md).[getTransactionHistory](portfolio.md#gettransactionhistory)*

*Defined in [src/api/entities/Portfolio/index.ts:255](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L255)*

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`account?` | undefined &#124; string | account involved in the settlement |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`ticker?` | undefined &#124; string | ticker involved in the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

___

###  isCustodiedBy

▸ **isCustodiedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Inherited from [Portfolio](portfolio.md).[isCustodiedBy](portfolio.md#iscustodiedby)*

*Defined in [src/api/entities/Portfolio/index.ts:103](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L103)*

Return whether an Identity is the Portfolio custodian

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L61)*

Whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown› |

**Returns:** *boolean*

___

###  isOwnedBy

▸ **isOwnedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Inherited from [Portfolio](portfolio.md).[isOwnedBy](portfolio.md#isownedby)*

*Defined in [src/api/entities/Portfolio/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L87)*

Return whether an Identity is the Portfolio owner

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

###  modifyName

▸ **modifyName**(`args`: [RenamePortfolioParams](../interfaces/renameportfolioparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

*Defined in [src/api/entities/NumberedPortfolio.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/NumberedPortfolio.ts#L88)*

Rename portfolio

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyName.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RenamePortfolioParams](../interfaces/renameportfolioparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

___

###  moveFunds

▸ **moveFunds**(`args`: [MoveFundsParams](../interfaces/movefundsparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Portfolio](portfolio.md).[moveFunds](portfolio.md#movefunds)*

*Defined in [src/api/entities/Portfolio/index.ts:211](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L211)*

Moves funds from this Portfolio to another one owned by the same Identity

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `moveFunds.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [MoveFundsParams](../interfaces/movefundsparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  setCustodian

▸ **setCustodian**(`args`: [SetCustodianParams](../interfaces/setcustodianparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Portfolio](portfolio.md).[setCustodian](portfolio.md#setcustodian)*

*Defined in [src/api/entities/Portfolio/index.ts:198](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Portfolio/index.ts#L198)*

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this may create an AuthorizationRequest which has to be accepted by
  the corresponding Identity. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setCustodian.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetCustodianParams](../interfaces/setcustodianparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

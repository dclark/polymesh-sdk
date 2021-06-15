# Class: Sto

Represents a Security Token Offering in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Sto**

## Index

### Properties

* [context](sto.md#protected-context)
* [id](sto.md#id)
* [ticker](sto.md#ticker)
* [uuid](sto.md#uuid)

### Methods

* [close](sto.md#close)
* [details](sto.md#details)
* [freeze](sto.md#freeze)
* [getInvestments](sto.md#getinvestments)
* [invest](sto.md#invest)
* [isEqual](sto.md#isequal)
* [modifyTimes](sto.md#modifytimes)
* [unfreeze](sto.md#unfreeze)
* [generateUuid](sto.md#static-generateuuid)
* [unserialize](sto.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Sto/index.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L55)*

identifier number of the Offering

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/Sto/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L60)*

ticker of the Security Token being offered

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Entity.ts#L46)*

## Methods

###  close

▸ **close**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Sto/index.ts:153](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L153)*

Close the STO

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `close.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  details

▸ **details**(): *Promise‹[StoDetails](../interfaces/stodetails.md)›*

*Defined in [src/api/entities/Sto/index.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L100)*

Retrieve the STO's details

**`note`** can be subscribed to

**Returns:** *Promise‹[StoDetails](../interfaces/stodetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[StoDetails](../interfaces/stodetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Sto/index.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[StoDetails](../interfaces/stodetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  freeze

▸ **freeze**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹[Sto](sto.md)››*

*Defined in [src/api/entities/Sto/index.ts:166](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L166)*

Freeze the STO

**`note`** required role:
  - Security Token Primary Issuance Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freeze.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Sto](sto.md)››*

___

###  getInvestments

▸ **getInvestments**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[Investment](../interfaces/investment.md)››*

*Defined in [src/api/entities/Sto/index.ts:224](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L224)*

Retrieve all investments made on this STO

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[Investment](../interfaces/investment.md)››*

___

###  invest

▸ **invest**(`args`: [InvestInStoParams](../interfaces/investinstoparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Sto/index.ts:211](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L211)*

Invest in the STO

**`note`** required roles:
  - Purchase Portfolio Custodian
  - Funding Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `invest.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [InvestInStoParams](../interfaces/investinstoparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

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

###  modifyTimes

▸ **modifyTimes**(`args`: [ModifyStoTimesParams](../globals.md#modifystotimesparams)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Sto/index.ts:197](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L197)*

Modify the start/end time of the STO

**`throws`** if:
  - Trying to modify the start time on an STO that already started
  - Trying to modify anything on an STO that already ended
  - Trying to change start or end time to a past date

**`note`** required role:
  - Security Token Primary Issuance Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyTimes.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyStoTimesParams](../globals.md#modifystotimesparams) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  unfreeze

▸ **unfreeze**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹[Sto](sto.md)››*

*Defined in [src/api/entities/Sto/index.ts:179](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Sto/index.ts#L179)*

Unfreeze the STO

**`note`** required role:
  - Security Token Primary Issuance Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unfreeze.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Sto](sto.md)››*

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

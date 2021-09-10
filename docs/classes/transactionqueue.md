# Class: TransactionQueue ‹**ProcedureReturnType, ReturnType, TransactionArgs**›

Class to manage procedural transaction queues

## Type parameters

▪ **ProcedureReturnType**

▪ **ReturnType**

▪ **TransactionArgs**: *unknown[][]*

## Hierarchy

* **TransactionQueue**

## Index

### Constructors

* [constructor](transactionqueue.md#constructor)

### Properties

* [error](transactionqueue.md#optional-error)
* [status](transactionqueue.md#status)
* [transactions](transactionqueue.md#transactions)

### Methods

* [getMinFees](transactionqueue.md#getminfees)
* [onProcessedByMiddleware](transactionqueue.md#onprocessedbymiddleware)
* [onStatusChange](transactionqueue.md#onstatuschange)
* [onTransactionStatusChange](transactionqueue.md#ontransactionstatuschange)
* [run](transactionqueue.md#run)

## Constructors

###  constructor

\+ **new TransactionQueue**(`args`: object, `context`: [Context](context.md)): *[TransactionQueue](transactionqueue.md)*

*Defined in [src/base/TransactionQueue.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/base/TransactionQueue.ts#L84)*

Create a transaction queue

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`procedureResult` | MaybePostTransactionValue‹ProcedureReturnType› | value that will be returned by the queue after it is run. It can be a [[PostTransactionValue]] |
`transactions` | PolymeshTransactionArray‹TransactionArgs› | list of transactions to be run in this queue |
`transformer?` | undefined &#124; function | function that transforms the procedure's return value before returning it after the queue is run  |

▪ **context**: *[Context](context.md)*

**Returns:** *[TransactionQueue](transactionqueue.md)*

## Properties

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Defined in [src/base/TransactionQueue.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/base/TransactionQueue.ts#L52)*

optional error information

___

###  status

• **status**: *[TransactionQueueStatus](../enums/transactionqueuestatus.md)* = TransactionQueueStatus.Idle

*Defined in [src/base/TransactionQueue.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/base/TransactionQueue.ts#L47)*

status of the queue

___

###  transactions

• **transactions**: *PolymeshTransactionArray‹TransactionArgs›*

*Defined in [src/base/TransactionQueue.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/base/TransactionQueue.ts#L42)*

transactions that will be run in the queue

## Methods

###  getMinFees

▸ **getMinFees**(): *Promise‹[Fees](../interfaces/fees.md)›*

*Defined in [src/base/TransactionQueue.ts:198](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/base/TransactionQueue.ts#L198)*

Retrieves a lower bound of the fees required to execute this transaction queue.
  Transaction fees can be higher at execution time for two reasons:

- One or more transactions (or arguments) depend on the result of another transaction in the queue.
  This means fees can't be calculated for said transaction until previous transactions in the queue have run
- Protocol fees may vary between when this value is fetched and when the transaction is actually executed because of a
  governance vote

**`note`** transaction fees that are paid by a third party aren't included in this total

**Returns:** *Promise‹[Fees](../interfaces/fees.md)›*

___

###  onProcessedByMiddleware

▸ **onProcessedByMiddleware**(`listener`: function): *function*

*Defined in [src/base/TransactionQueue.ts:259](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/base/TransactionQueue.ts#L259)*

Subscribe to the results of this queue being processed by the harvester (and as such, available to the middleware)

**`note`** this event will be fired even if the queue fails

**`throws`** if the middleware wasn't enabled when instantiating the SDK client

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the middleware is updated with the latest data.
  If there is an error (timeout or middleware offline) it will be passed to this callback

▸ (`err?`: [PolymeshError](polymesherror.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [PolymeshError](polymesherror.md) |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Defined in [src/base/TransactionQueue.ts:222](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/base/TransactionQueue.ts#L222)*

Subscribe to status changes on the Transaction Queue

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the Transaction Queue's status changes

▸ (`transactionQueue`: this, `err?`: [PolymeshError](polymesherror.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`transactionQueue` | this |
`err?` | [PolymeshError](polymesherror.md) |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  onTransactionStatusChange

▸ **onTransactionStatusChange**‹**TxArgs**, **Values**›(`listener`: function): *function*

*Defined in [src/base/TransactionQueue.ts:239](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/base/TransactionQueue.ts#L239)*

Subscribe to status changes on individual transactions

**Type parameters:**

▪ **TxArgs**: *unknown[]*

▪ **Values**: *unknown[]*

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the individual transaction's status changes

▸ (`transaction`: [PolymeshTransactionBase](polymeshtransactionbase.md)‹TxArgs, Values›, `transactionQueue`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | [PolymeshTransactionBase](polymeshtransactionbase.md)‹TxArgs, Values› |
`transactionQueue` | this |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  run

▸ **run**(): *Promise‹ReturnType›*

*Defined in [src/base/TransactionQueue.ts:129](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/base/TransactionQueue.ts#L129)*

Run the transactions in the queue in sequential order. If a transaction fails or the user refuses to sign it, one of two things can happen:

1) If `transaction.isCritical === true`, the entire queue fails and the corresponding error is stored in `this.error` as well as thrown
2) Otherwise, the queue continues executing and the error is stored in `transaction.error`

**Returns:** *Promise‹ReturnType›*

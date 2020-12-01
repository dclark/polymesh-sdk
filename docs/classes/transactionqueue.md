# TransactionQueue

Class to manage procedural transaction queues

## Type parameters

▪ **ReturnType**

▪ **TransactionArgs**: _unknown\[\]\[\]_

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

### constructor

+ **new TransactionQueue**\(`transactions`: [TransactionSpecArray](../globals.md#transactionspecarray)‹TransactionArgs›, `returnValue`: MaybePostTransactionValue‹ReturnType›, `context`: [Context](context.md)\): [_TransactionQueue_](transactionqueue.md)

_Defined in_ [_src/base/TransactionQueue.ts:83_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L83)

Create a transaction queue

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `transactions` | [TransactionSpecArray](../globals.md#transactionspecarray)‹TransactionArgs› | list of transactions to be run in this queue |
| `returnValue` | MaybePostTransactionValue‹ReturnType› | value that will be returned by the queue after it is run. It can be a \[\[PostTransactionValue\]\] |
| `context` | [Context](context.md) | - |

**Returns:** [_TransactionQueue_](transactionqueue.md)

## Properties

### `Optional` error

• **error**? : [_PolymeshError_](polymesherror.md)

_Defined in_ [_src/base/TransactionQueue.ts:57_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L57)

optional error information

### status

• **status**: [_TransactionQueueStatus_](../enums/transactionqueuestatus.md) = TransactionQueueStatus.Idle

_Defined in_ [_src/base/TransactionQueue.ts:52_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L52)

status of the queue

### transactions

• **transactions**: _PolymeshTransactionArray‹TransactionArgs›_

_Defined in_ [_src/base/TransactionQueue.ts:47_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L47)

transactions that will be run in the queue

## Methods

### getMinFees

▸ **getMinFees**\(\): _Promise‹_[_Fees_](../interfaces/fees.md)_›_

_Defined in_ [_src/base/TransactionQueue.ts:186_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L186)

Retrieves a lower bound of the fees required to execute this transaction queue. Transaction fees can be higher at execution time for two reasons:

* One or more transactions \(or arguments\) depend on the result of another transaction in the queue.

  This means fees can't be calculated for said transaction until previous transactions in the queue have run

* Protocol fees may vary between when this value is fetched and when the transaction is actually executed because of a

  governance vote

**`note`** transaction fees that are paid by a third party aren't included in this total

**Returns:** _Promise‹_[_Fees_](../interfaces/fees.md)_›_

### onProcessedByMiddleware

▸ **onProcessedByMiddleware**\(`listener`: function\): _function_

_Defined in_ [_src/base/TransactionQueue.ts:249_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L249)

Subscribe to the results of this queue being processed by the harvester \(and as such, available to the middleware\)

**`note`** this event will be fired even if the queue fails

**`throws`** if the middleware wasn't enabled when instantiating the SDK client

**Parameters:**

▪ **listener**: _function_

callback function that will be called whenever the middleware is updated with the latest data. If there is an error \(timeout or middleware offline\) it will be passed to this callback

▸ \(`err?`: [PolymeshError](polymesherror.md)\): _void_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `err?` | [PolymeshError](polymesherror.md) |

**Returns:** _function_

unsubscribe function

▸ \(\): _void_

### onStatusChange

▸ **onStatusChange**\(`listener`: function\): _function_

_Defined in_ [_src/base/TransactionQueue.ts:212_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L212)

Subscribe to status changes on the Transaction Queue

**Parameters:**

▪ **listener**: _function_

callback function that will be called whenever the Transaction Queue's status changes

▸ \(`transactionQueue`: this, `err?`: [PolymeshError](polymesherror.md)\): _void_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `transactionQueue` | this |
| `err?` | [PolymeshError](polymesherror.md) |

**Returns:** _function_

unsubscribe function

▸ \(\): _void_

### onTransactionStatusChange

▸ **onTransactionStatusChange**‹**TxArgs**, **Values**›\(`listener`: function\): _function_

_Defined in_ [_src/base/TransactionQueue.ts:229_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L229)

Subscribe to status changes on individual transactions

**Type parameters:**

▪ **TxArgs**: _unknown\[\]_

▪ **Values**: _unknown\[\]_

**Parameters:**

▪ **listener**: _function_

callback function that will be called whenever the individual transaction's status changes

▸ \(`transaction`: [PolymeshTransaction](polymeshtransaction.md)‹TxArgs, Values›, `transactionQueue`: this\): _void_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `transaction` | [PolymeshTransaction](polymeshtransaction.md)‹TxArgs, Values› |
| `transactionQueue` | this |

**Returns:** _function_

unsubscribe function

▸ \(\): _void_

### run

▸ **run**\(\): _Promise‹ReturnType›_

_Defined in_ [_src/base/TransactionQueue.ts:120_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L120)

Run the transactions in the queue in sequential order. If a transaction fails or the user refuses to sign it, one of two things can happen:

1\) If `transaction.isCritical === true`, the entire queue fails and the corresponding error is stored in `this.error` as well as thrown 2\) Otherwise, the queue continues executing and the error is stored in `transaction.error`

**Returns:** _Promise‹ReturnType›_


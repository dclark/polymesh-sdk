# PolymeshTransactionBase

Wrapper class for a Polymesh Transaction

## Type parameters

▪ **Args**: _unknown\[\]_

▪ **Values**: _unknown\[\]_

## Hierarchy

* **PolymeshTransactionBase**

  ↳ [PolymeshTransaction](polymeshtransaction.md)

  ↳ [PolymeshTransactionBatch](polymeshtransactionbatch.md)

## Index

### Properties

* [blockHash](polymeshtransactionbase.md#optional-blockhash)
* [context](polymeshtransactionbase.md#protected-context)
* [error](polymeshtransactionbase.md#optional-error)
* [isCritical](polymeshtransactionbase.md#iscritical)
* [receipt](polymeshtransactionbase.md#optional-receipt)
* [status](polymeshtransactionbase.md#status)
* [tag](polymeshtransactionbase.md#tag)
* [txHash](polymeshtransactionbase.md#optional-txhash)

### Methods

* [getFees](polymeshtransactionbase.md#getfees)
* [getPayingAccount](polymeshtransactionbase.md#getpayingaccount)
* [onStatusChange](polymeshtransactionbase.md#onstatuschange)
* [run](polymeshtransactionbase.md#run)

## Properties

### `Optional` blockHash

• **blockHash**? : _undefined \| string_

_Defined in_ [_src/base/PolymeshTransactionBase.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L50)

hash of the block where this transaction resides \(status: `Succeeded`, `Failed`\)

### `Protected` context

• **context**: [_Context_](context.md)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:113_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L113)

### `Optional` error

• **error**? : [_PolymeshError_](polymesherror.md)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:35_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L35)

stores errors thrown while running the transaction \(status: `Failed`, `Aborted`\)

### isCritical

• **isCritical**: _boolean_

_Defined in_ [_src/base/PolymeshTransactionBase.ts:55_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L55)

whether this transaction failing makes the entire transaction queue fail or not

### `Optional` receipt

• **receipt**? : _ISubmittableResult_

_Defined in_ [_src/base/PolymeshTransactionBase.ts:40_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L40)

stores the transaction receipt \(if successful\)

### status

• **status**: [_TransactionStatus_](../enums/transactionstatus.md) = TransactionStatus.Idle

_Defined in_ [_src/base/PolymeshTransactionBase.ts:30_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L30)

current status of the transaction

### tag

• **tag**: _TxTag_

_Defined in_ [_src/base/PolymeshTransactionBase.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L60)

type of transaction represented by this instance \(mostly for display purposes\)

### `Optional` txHash

• **txHash**? : _undefined \| string_

_Defined in_ [_src/base/PolymeshTransactionBase.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L45)

transaction hash \(status: `Running`, `Succeeded`, `Failed`\)

## Methods

### getFees

▸ **getFees**\(\): _Promise‹_[_Fees_](../interfaces/fees.md) _\| null›_

_Defined in_ [_src/base/PolymeshTransactionBase.ts:306_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L306)

Get all \(protocol and gas\) fees associated with this transaction. Returns null if the transaction is not ready yet \(this can happen if it depends on the execution of a previous transaction in the queue\)

**`note`** this value might change if the transaction is run at a later time. This can be due to a governance vote

**Returns:** _Promise‹_[_Fees_](../interfaces/fees.md) _\| null›_

### getPayingAccount

▸ **getPayingAccount**\(\): _Promise‹object \| null›_

_Defined in_ [_src/base/PolymeshTransactionBase.ts:269_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L269)

Retrieve the Account that would pay for the transaction fees if it was run at this moment, as well as the maximum amount that can be charged to it. A null allowance means that there is no limit to that amount

A null return value signifies that the current Account will pay for the fees

**`note`** this value might change if, before running the transaction, the current Account enters \(or leaves\) a subsidizer relationship

**Returns:** _Promise‹object \| null›_

### onStatusChange

▸ **onStatusChange**\(`listener`: function\): _function_

_Defined in_ [_src/base/PolymeshTransactionBase.ts:252_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L252)

Subscribe to status changes

**Parameters:**

▪ **listener**: _function_

callback function that will be called whenever the status changes

▸ \(`transaction`: this\): _void_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `transaction` | this |

**Returns:** _function_

unsubscribe function

▸ \(\): _void_

### run

▸ **run**\(\): _Promise‹void›_

_Defined in_ [_src/base/PolymeshTransactionBase.ts:139_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/base/PolymeshTransactionBase.ts#L139)

Run the transaction and update its status

**Returns:** _Promise‹void›_


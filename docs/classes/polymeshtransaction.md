# PolymeshTransaction

Wrapper class for a Polymesh Transaction

## Type parameters

▪ **Args**: _unknown\[\]_

▪ **Values**: _unknown\[\]_

## Hierarchy

* **PolymeshTransaction**

## Index

### Properties

* [args](polymeshtransaction.md#args)
* [blockHash](polymeshtransaction.md#optional-blockhash)
* [error](polymeshtransaction.md#optional-error)
* [isCritical](polymeshtransaction.md#iscritical)
* [receipt](polymeshtransaction.md#optional-receipt)
* [status](polymeshtransaction.md#status)
* [txHash](polymeshtransaction.md#optional-txhash)

### Accessors

* [tag](polymeshtransaction.md#tag)

### Methods

* [getFees](polymeshtransaction.md#getfees)
* [onStatusChange](polymeshtransaction.md#onstatuschange)
* [run](polymeshtransaction.md#run)

## Properties

### args

• **args**: _MapMaybePostTransactionValue‹Args›_

_Defined in_ [_src/base/PolymeshTransaction.ts:66_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L66)

arguments arguments for the transaction. Available after the transaction starts running \(may be Post Transaction Values from a previous transaction in the queue that haven't resolved yet\)

### `Optional` blockHash

• **blockHash**? : _undefined \| string_

_Defined in_ [_src/base/PolymeshTransaction.ts:55_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L55)

hash of the block where this transaction resides \(status: `Succeeded`, `Failed`\)

### `Optional` error

• **error**? : [_PolymeshError_](polymesherror.md)

_Defined in_ [_src/base/PolymeshTransaction.ts:40_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L40)

stores errors thrown while running the transaction \(status: `Failed`, `Aborted`\)

### isCritical

• **isCritical**: _boolean_

_Defined in_ [_src/base/PolymeshTransaction.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L60)

whether this tx failing makes the entire tx queue fail or not

### `Optional` receipt

• **receipt**? : _ISubmittableResult_

_Defined in_ [_src/base/PolymeshTransaction.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L45)

stores the transaction receipt \(if successful\)

### status

• **status**: [_TransactionStatus_](../enums/transactionstatus.md) = TransactionStatus.Idle

_Defined in_ [_src/base/PolymeshTransaction.ts:35_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L35)

current status of the transaction

### `Optional` txHash

• **txHash**? : _undefined \| string_

_Defined in_ [_src/base/PolymeshTransaction.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L50)

transaction hash \(status: `Running`, `Succeeded`, `Failed`\)

## Accessors

### tag

• **get tag**\(\): _TxTag_

_Defined in_ [_src/base/PolymeshTransaction.ts:251_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L251)

type of transaction represented by this instance for display purposes. If the transaction isn't defined at design time, the tag won't be set \(will be empty string\) until the transaction is about to be run

**Returns:** _TxTag_

## Methods

### getFees

▸ **getFees**\(\): _Promise‹_[_Fees_](../interfaces/fees.md) _\| null›_

_Defined in_ [_src/base/PolymeshTransaction.ts:202_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L202)

Get all \(protocol and gas\) fees associated with this transaction. Returns null if the transaction is not ready yet \(this can happen if it depends on the execution of a previous transaction in the queue\). Fees will be returned as zero if they are paid by a third party \(such as when joining an identity\)

**Returns:** _Promise‹_[_Fees_](../interfaces/fees.md) _\| null›_

### onStatusChange

▸ **onStatusChange**\(`listener`: function\): _function_

_Defined in_ [_src/base/PolymeshTransaction.ts:189_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L189)

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

_Defined in_ [_src/base/PolymeshTransaction.ts:148_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L148)

Run the poly transaction and update the transaction status

**Returns:** _Promise‹void›_


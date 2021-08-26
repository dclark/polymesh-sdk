# PolymeshTransaction

Wrapper class for a Polymesh Transaction

## Type parameters

▪ **Args**: _unknown\[\]_

▪ **Values**: _unknown\[\]_

## Hierarchy

* [PolymeshTransactionBase](polymeshtransactionbase.md)‹Args, Values›

  ↳ **PolymeshTransaction**

## Index

### Properties

* [blockHash](polymeshtransaction.md#optional-blockhash)
* [context](polymeshtransaction.md#protected-context)
* [error](polymeshtransaction.md#optional-error)
* [inputArgs](polymeshtransaction.md#inputargs)
* [isCritical](polymeshtransaction.md#iscritical)
* [paidByThirdParty](polymeshtransaction.md#paidbythirdparty)
* [receipt](polymeshtransaction.md#optional-receipt)
* [status](polymeshtransaction.md#status)
* [txHash](polymeshtransaction.md#optional-txhash)

### Accessors

* [args](polymeshtransaction.md#args)
* [tag](polymeshtransaction.md#tag)

### Methods

* [getFees](polymeshtransaction.md#getfees)
* [onStatusChange](polymeshtransaction.md#onstatuschange)
* [run](polymeshtransaction.md#run)

## Properties

### `Optional` blockHash

• **blockHash**? : _undefined \| string_

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_blockHash_](polymeshtransactionbase.md#optional-blockhash)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:55_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L55)

hash of the block where this transaction resides \(status: `Succeeded`, `Failed`\)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_context_](polymeshtransactionbase.md#protected-context)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:119_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L119)

### `Optional` error

• **error**? : [_PolymeshError_](polymesherror.md)

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_error_](polymeshtransactionbase.md#optional-error)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:40_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L40)

stores errors thrown while running the transaction \(status: `Failed`, `Aborted`\)

### inputArgs

• **inputArgs**: _MapMaybePostTransactionValue‹Args›_

_Defined in_ [_src/base/PolymeshTransaction.ts:26_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransaction.ts#L26)

arguments for the transaction. Available after the transaction starts running \(may be Post Transaction Values from a previous transaction in the queue that haven't resolved yet\)

### isCritical

• **isCritical**: _boolean_

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_isCritical_](polymeshtransactionbase.md#iscritical)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:60_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L60)

whether this tx failing makes the entire tx queue fail or not

### paidByThirdParty

• **paidByThirdParty**: _boolean_

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_paidByThirdParty_](polymeshtransactionbase.md#paidbythirdparty)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:66_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L66)

whether the fees for this tx are paid by a third party. For example, when accepting/rejecting a request to join an Identity, fees are paid by the Identity that sent the request

### `Optional` receipt

• **receipt**? : _ISubmittableResult_

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_receipt_](polymeshtransactionbase.md#optional-receipt)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L45)

stores the transaction receipt \(if successful\)

### status

• **status**: [_TransactionStatus_](../enums/transactionstatus.md) = TransactionStatus.Idle

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_status_](polymeshtransactionbase.md#status)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:35_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L35)

current status of the transaction

### `Optional` txHash

• **txHash**? : _undefined \| string_

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_txHash_](polymeshtransactionbase.md#optional-txhash)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L50)

transaction hash \(status: `Running`, `Succeeded`, `Failed`\)

## Accessors

### args

• **get args**\(\): _Args_

_Defined in_ [_src/base/PolymeshTransaction.ts:43_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransaction.ts#L43)

Arguments for the transaction

**Returns:** _Args_

### tag

• **get tag**\(\): _TxTag_

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_tag_](polymeshtransactionbase.md#tag)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:314_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L314)

type of transaction represented by this instance for display purposes. If the transaction isn't defined at design time, the tag won't be set \(will be empty string\) until the transaction is about to be run

**Returns:** _TxTag_

## Methods

### getFees

▸ **getFees**\(\): _Promise‹_[_Fees_](../interfaces/fees.md) _\| null›_

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_getFees_](polymeshtransactionbase.md#getfees)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:281_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L281)

Get all \(protocol and gas\) fees associated with this transaction. Returns null if the transaction is not ready yet \(this can happen if it depends on the execution of a previous transaction in the queue\)

**Returns:** _Promise‹_[_Fees_](../interfaces/fees.md) _\| null›_

### onStatusChange

▸ **onStatusChange**\(`listener`: function\): _function_

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_onStatusChange_](polymeshtransactionbase.md#onstatuschange)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:268_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L268)

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

_Inherited from_ [_PolymeshTransactionBase_](polymeshtransactionbase.md)_._[_run_](polymeshtransactionbase.md#run)

_Defined in_ [_src/base/PolymeshTransactionBase.ts:153_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshTransactionBase.ts#L153)

Run the poly transaction and update the transaction status

**Returns:** _Promise‹void›_


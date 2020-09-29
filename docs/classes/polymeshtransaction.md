# Class: PolymeshTransaction ‹**Args, Values**›

Wrapper class for a Polymesh Transaction

## Type parameters

▪ **Args**: *unknown[]*

▪ **Values**: *unknown[]*

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

###  args

• **args**: *MapMaybePostTransactionValue‹Args›*

*Defined in [src/base/PolymeshTransaction.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L66)*

arguments arguments for the transaction. Available after the transaction starts running
(may be Post Transaction Values from a previous transaction in the queue that haven't resolved yet)

___

### `Optional` blockHash

• **blockHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransaction.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L55)*

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Defined in [src/base/PolymeshTransaction.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L40)*

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

___

###  isCritical

• **isCritical**: *boolean*

*Defined in [src/base/PolymeshTransaction.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L60)*

whether this tx failing makes the entire tx queue fail or not

___

### `Optional` receipt

• **receipt**? : *ISubmittableResult*

*Defined in [src/base/PolymeshTransaction.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L45)*

stores the transaction receipt (if successful)

___

###  status

• **status**: *[TransactionStatus](../enums/transactionstatus.md)* = TransactionStatus.Idle

*Defined in [src/base/PolymeshTransaction.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L35)*

current status of the transaction

___

### `Optional` txHash

• **txHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransaction.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L50)*

transaction hash (status: `Running`, `Succeeded`, `Failed`)

## Accessors

###  tag

• **get tag**(): *TxTag*

*Defined in [src/base/PolymeshTransaction.ts:251](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L251)*

type of transaction represented by this instance for display purposes.
If the transaction isn't defined at design time, the tag won't be set (will be empty string) until the transaction is about to be run

**Returns:** *TxTag*

## Methods

###  getFees

▸ **getFees**(): *Promise‹[Fees](../interfaces/fees.md) | null›*

*Defined in [src/base/PolymeshTransaction.ts:202](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L202)*

Get all (protocol and gas) fees associated with this transaction. Returns null
if the transaction is not ready yet (this can happen if it depends on the execution of a
previous transaction in the queue). Fees will be returned as zero if they are paid by a third party (such as when joining an identity)

**Returns:** *Promise‹[Fees](../interfaces/fees.md) | null›*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Defined in [src/base/PolymeshTransaction.ts:189](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L189)*

Subscribe to status changes

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the status changes

▸ (`transaction`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | this |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  run

▸ **run**(): *Promise‹void›*

*Defined in [src/base/PolymeshTransaction.ts:148](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/base/PolymeshTransaction.ts#L148)*

Run the poly transaction and update the transaction status

**Returns:** *Promise‹void›*

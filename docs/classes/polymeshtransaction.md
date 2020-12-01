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
* [paidByThirdParty](polymeshtransaction.md#paidbythirdparty)
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

*Defined in [src/base/PolymeshTransaction.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L66)*

arguments for the transaction. Available after the transaction starts running
(may be Post Transaction Values from a previous transaction in the queue that haven't resolved yet)

___

### `Optional` blockHash

• **blockHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransaction.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L55)*

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Defined in [src/base/PolymeshTransaction.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L40)*

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

___

###  isCritical

• **isCritical**: *boolean*

*Defined in [src/base/PolymeshTransaction.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L60)*

whether this tx failing makes the entire tx queue fail or not

___

###  paidByThirdParty

• **paidByThirdParty**: *boolean*

*Defined in [src/base/PolymeshTransaction.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L72)*

whether the fees for this tx are paid by a third party.
  For example, when accepting/rejecting a request to join an Identity, fees are paid by the Identity that sent the request

___

### `Optional` receipt

• **receipt**? : *ISubmittableResult*

*Defined in [src/base/PolymeshTransaction.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L45)*

stores the transaction receipt (if successful)

___

###  status

• **status**: *[TransactionStatus](../enums/transactionstatus.md)* = TransactionStatus.Idle

*Defined in [src/base/PolymeshTransaction.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L35)*

current status of the transaction

___

### `Optional` txHash

• **txHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransaction.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L50)*

transaction hash (status: `Running`, `Succeeded`, `Failed`)

## Accessors

###  tag

• **get tag**(): *TxTag*

*Defined in [src/base/PolymeshTransaction.ts:258](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L258)*

type of transaction represented by this instance for display purposes.
If the transaction isn't defined at design time, the tag won't be set (will be empty string) until the transaction is about to be run

**Returns:** *TxTag*

## Methods

###  getFees

▸ **getFees**(): *Promise‹[Fees](../interfaces/fees.md) | null›*

*Defined in [src/base/PolymeshTransaction.ts:218](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L218)*

Get all (protocol and gas) fees associated with this transaction. Returns null
if the transaction is not ready yet (this can happen if it depends on the execution of a
previous transaction in the queue)

**Returns:** *Promise‹[Fees](../interfaces/fees.md) | null›*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Defined in [src/base/PolymeshTransaction.ts:205](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L205)*

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

*Defined in [src/base/PolymeshTransaction.ts:164](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshTransaction.ts#L164)*

Run the poly transaction and update the transaction status

**Returns:** *Promise‹void›*

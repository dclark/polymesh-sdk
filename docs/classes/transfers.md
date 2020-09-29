# Transfers

Handles all Security Token Transfer related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Transfers**

## Index

### Properties

* [context](transfers.md#protected-context)
* [parent](transfers.md#protected-parent)

### Methods

* [areFrozen](transfers.md#arefrozen)
* [canMint](transfers.md#canmint)
* [canTransfer](transfers.md#cantransfer)
* [freeze](transfers.md#freeze)
* [transfer](transfers.md#transfer)
* [unfreeze](transfers.md#unfreeze)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:12_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Namespace.ts#L12)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:10_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Namespace.ts#L10)

## Methods

### areFrozen

▸ **areFrozen**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/SecurityToken/Transfers.ts:50_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Transfers.ts#L50)

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** _Promise‹boolean›_

▸ **areFrozen**\(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/Transfers.ts:51_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Transfers.ts#L51)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### canMint

▸ **canMint**\(`args`: object\): _Promise‹_[_TransferStatus_](../enums/transferstatus.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Transfers.ts:100_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Transfers.ts#L100)

Check whether it is possible to mint a certain amount of this asset

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `amount` | BigNumber | amount of tokens to mint |
| `to` | string \| [Identity](identity.md) | receiver Identity |

**Returns:** _Promise‹_[_TransferStatus_](../enums/transferstatus.md)_›_

### canTransfer

▸ **canTransfer**\(`args`: object\): _Promise‹_[_TransferStatus_](../enums/transferstatus.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Transfers.ts:85_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Transfers.ts#L85)

Check whether it is possible to transfer a certain amount of this asset between two Identities

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `amount` | BigNumber | amount of tokens to transfer |
| `from?` | string \| [Identity](identity.md) | sender Identity \(optional, defaults to the current Identity\) |
| `to` | string \| [Identity](identity.md) | receiver Identity |

**Returns:** _Promise‹_[_TransferStatus_](../enums/transferstatus.md)_›_

### freeze

▸ **freeze**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Transfers.ts:26_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Transfers.ts#L26)

Freezes transfers and minting of the Security Token

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### transfer

▸ **transfer**\(`args`: [TransferTokenParams](../interfaces/transfertokenparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Transfers.ts:149_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Transfers.ts#L149)

Transfer an amount of the token to another Identity.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [TransferTokenParams](../interfaces/transfertokenparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### unfreeze

▸ **unfreeze**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Transfers.ts:37_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Transfers.ts#L37)

Unfreeze transfers and minting of the Security Token

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_


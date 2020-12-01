# Documents

Handles all Security Token Document related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Documents**

## Index

### Properties

* [context](documents.md#protected-context)
* [parent](documents.md#protected-parent)

### Methods

* [get](documents.md#get)
* [set](documents.md#set)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:12_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L12)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:10_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L10)

## Methods

### get

▸ **get**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_TokenDocument_](../interfaces/tokendocument.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Documents.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Documents.ts#L38)

Retrieve all documents linked to the Security Token

**`note`** supports pagination

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_TokenDocument_](../interfaces/tokendocument.md)_››_

### set

▸ **set**\(`args`: [SetTokenDocumentsParams](../interfaces/settokendocumentsparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Documents.ts:25_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/Documents.ts#L25)

Assign a new list of documents to the Security Token by replacing the existing list of documents with the one passed in the parameters

This requires two transactions

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetTokenDocumentsParams](../interfaces/settokendocumentsparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_


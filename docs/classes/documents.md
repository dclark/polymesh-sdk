# Documents

Handles all Security Token Document related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Documents**

## Index

### Properties

* [context](documents.md#protected-context)
* [parent](documents.md#protected-parent)
* [set](documents.md#set)

### Methods

* [get](documents.md#get)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L9)

### set

• **set**: _ProcedureMethod‹_[_SetTokenDocumentsParams_](../interfaces/settokendocumentsparams.md)_,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Documents.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Documents.ts#L38)

Assign a new list of documents to the Security Token by replacing the existing list of documents with the one passed in the parameters

This requires two transactions

**`param`** new list of documents

**`note`** required role:

* Security Token Owner

## Methods

### get

▸ **get**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_TokenDocument_](../interfaces/tokendocument.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Documents.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Documents.ts#L45)

Retrieve all documents linked to the Security Token

**`note`** supports pagination

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_TokenDocument_](../interfaces/tokendocument.md)_››_


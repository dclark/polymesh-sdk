# TokenHolders

Handles all Security Token Holders related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **TokenHolders**

## Index

### Properties

* [context](tokenholders.md#protected-context)
* [parent](tokenholders.md#protected-parent)

### Methods

* [get](tokenholders.md#get)

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

### get

▸ **get**\(`opts`: Pick‹[TokenHolderOptions](../interfaces/tokenholderoptions.md), "canBeIssuedTo"›, `paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityBalance_](../interfaces/identitybalance.md) _& Pick‹_[_TokenHolderProperties_](../interfaces/tokenholderproperties.md)_, "canBeIssuedTo"›››_

_Defined in_ [_src/api/entities/SecurityToken/TokenHolders.ts:25_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/TokenHolders.ts#L25)

Retrieve all the token holders with balance

**`note`** supports pagination

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `opts` | Pick‹[TokenHolderOptions](../interfaces/tokenholderoptions.md), "canBeIssuedTo"› | object that represents whether extra properties should be fetched for each token holder |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) | - |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityBalance_](../interfaces/identitybalance.md) _& Pick‹_[_TokenHolderProperties_](../interfaces/tokenholderproperties.md)_, "canBeIssuedTo"›››_

▸ **get**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityBalance_](../interfaces/identitybalance.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/TokenHolders.ts:30_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/TokenHolders.ts#L30)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityBalance_](../interfaces/identitybalance.md)_››_


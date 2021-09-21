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

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/Namespace.ts#L9)

## Methods

### get

▸ **get**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityBalance_](../interfaces/identitybalance.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/TokenHolders.ts:17_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/entities/SecurityToken/TokenHolders.ts#L17)

Retrieve all the token holders with their respective balance

**`note`** supports pagination

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_IdentityBalance_](../interfaces/identitybalance.md)_››_


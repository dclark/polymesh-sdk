# IdentityAuthorizations

Handles all Identity Authorization related functionality

## Hierarchy

↳ [Authorizations](authorizations.md)‹[Identity](identity.md)›

↳ **IdentityAuthorizations**

## Index

### Properties

* [context](identityauthorizations.md#protected-context)
* [parent](identityauthorizations.md#protected-parent)

### Methods

* [getReceived](identityauthorizations.md#getreceived)
* [getSent](identityauthorizations.md#getsent)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:12_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L12)

### `Protected` parent

• **parent**: [_Identity_](identity.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:10_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Namespace.ts#L10)

## Methods

### getReceived

▸ **getReceived**\(`opts?`: undefined \| object\): _Promise‹_[_AuthorizationRequest_](authorizationrequest.md)_\[\]›_

_Inherited from_ [_Authorizations_](authorizations.md)_._[_getReceived_](authorizations.md#getreceived)

_Defined in_ [_src/api/entities/common/namespaces/Authorizations.ts:28_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/common/namespaces/Authorizations.ts#L28)

Fetch all pending authorization requests for which this identity is the target

**Parameters:**

| Name | Type |
| :--- | :--- |
| `opts?` | undefined \| object |

**Returns:** _Promise‹_[_AuthorizationRequest_](authorizationrequest.md)_\[\]›_

### getSent

▸ **getSent**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_AuthorizationRequest_](authorizationrequest.md)_››_

_Defined in_ [_src/api/entities/Identity/IdentityAuthorizations.ts:21_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Identity/IdentityAuthorizations.ts#L21)

Fetch all pending authorization requests issued by this Identity

**`note`** supports pagination

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_AuthorizationRequest_](authorizationrequest.md)_››_


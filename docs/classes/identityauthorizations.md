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

* [getOne](identityauthorizations.md#getone)
* [getReceived](identityauthorizations.md#getreceived)
* [getSent](identityauthorizations.md#getsent)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_Identity_](identity.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Namespace.ts#L9)

## Methods

### getOne

▸ **getOne**\(`args`: object\): _Promise‹_[_AuthorizationRequest_](authorizationrequest.md)_›_

_Inherited from_ [_Authorizations_](authorizations.md)_._[_getOne_](authorizations.md#getone)

_Defined in_ [_src/api/entities/common/namespaces/Authorizations.ts:65_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/common/namespaces/Authorizations.ts#L65)

Retrieve a single Authorization Request targeting this Signer by its ID

**`throws`** if there is no Authorization Request with the passed ID targeting this Signer

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `id` | BigNumber |

**Returns:** _Promise‹_[_AuthorizationRequest_](authorizationrequest.md)_›_

### getReceived

▸ **getReceived**\(`opts?`: undefined \| object\): _Promise‹_[_AuthorizationRequest_](authorizationrequest.md)_\[\]›_

_Inherited from_ [_Authorizations_](authorizations.md)_._[_getReceived_](authorizations.md#getreceived)

_Defined in_ [_src/api/entities/common/namespaces/Authorizations.ts:29_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/common/namespaces/Authorizations.ts#L29)

Fetch all pending Authorization Requests for which this Signer is the target

**Parameters:**

| Name | Type |
| :--- | :--- |
| `opts?` | undefined \| object |

**Returns:** _Promise‹_[_AuthorizationRequest_](authorizationrequest.md)_\[\]›_

### getSent

▸ **getSent**\(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_AuthorizationRequest_](authorizationrequest.md)_››_

_Defined in_ [_src/api/entities/Identity/IdentityAuthorizations.ts:18_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Identity/IdentityAuthorizations.ts#L18)

Fetch all pending authorization requests issued by this Identity

**`note`** supports pagination

**Parameters:**

| Name | Type |
| :--- | :--- |
| `paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_AuthorizationRequest_](authorizationrequest.md)_››_


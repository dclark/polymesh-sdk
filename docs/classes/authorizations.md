# Authorizations

Handles all Authorization related functionality

## Type parameters

▪ **Parent**: [_Signer_](../globals.md#signer)

## Hierarchy

* Namespace‹Parent›

  ↳ **Authorizations**

  ↳ [IdentityAuthorizations](identityauthorizations.md)

## Index

### Properties

* [context](authorizations.md#protected-context)
* [parent](authorizations.md#protected-parent)

### Methods

* [getReceived](authorizations.md#getreceived)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: _Parent_

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Namespace.ts#L9)

## Methods

### getReceived

▸ **getReceived**\(`opts?`: undefined \| object\): _Promise‹_[_AuthorizationRequest_](authorizationrequest.md)_\[\]›_

_Defined in_ [_src/api/entities/common/namespaces/Authorizations.ts:28_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/common/namespaces/Authorizations.ts#L28)

Fetch all pending authorization requests for which this identity is the target

**Parameters:**

| Name | Type |
| :--- | :--- |
| `opts?` | undefined \| object |

**Returns:** _Promise‹_[_AuthorizationRequest_](authorizationrequest.md)_\[\]›_


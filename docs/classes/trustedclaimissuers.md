# TrustedClaimIssuers

Handles all Security Token Default Trusted Claim Issuers related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **TrustedClaimIssuers**

## Index

### Properties

* [context](trustedclaimissuers.md#protected-context)
* [parent](trustedclaimissuers.md#protected-parent)

### Methods

* [add](trustedclaimissuers.md#add)
* [get](trustedclaimissuers.md#get)
* [remove](trustedclaimissuers.md#remove)
* [set](trustedclaimissuers.md#set)

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

### add

▸ **add**\(`args`: [ModifyTokenTrustedClaimIssuersParams](../interfaces/modifytokentrustedclaimissuersparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:40_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L40)

Add the supplied Identities to the Security Token's list of trusted claim issuers

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyTokenTrustedClaimIssuersParams](../interfaces/modifytokentrustedclaimissuersparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### get

▸ **get**\(\): _Promise‹_[_TrustedClaimIssuer_](trustedclaimissuer.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L74)

Retrieve the current default trusted claim issuers of the Security Token

**`note`** can be subscribed to

**Returns:** _Promise‹_[_TrustedClaimIssuer_](trustedclaimissuer.md)_\[\]›_

▸ **get**\(`callback`: [SubCallback](../globals.md#subcallback)‹[TrustedClaimIssuer](trustedclaimissuer.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:75_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L75)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[TrustedClaimIssuer](trustedclaimissuer.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### remove

▸ **remove**\(`args`: [ModifyTokenTrustedClaimIssuersParams](../interfaces/modifytokentrustedclaimissuersparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:56_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L56)

Remove the supplied Identities from the Security Token's list of trusted claim issuers \*

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyTokenTrustedClaimIssuersParams](../interfaces/modifytokentrustedclaimissuersparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### set

▸ **set**\(`args`: [ModifyTokenTrustedClaimIssuersParams](../interfaces/modifytokentrustedclaimissuersparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:24_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L24)

Assign a new default list of trusted claim issuers to the Security Token by replacing the existing ones with the list passed as a parameter

This requires two transactions

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyTokenTrustedClaimIssuersParams](../interfaces/modifytokentrustedclaimissuersparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_


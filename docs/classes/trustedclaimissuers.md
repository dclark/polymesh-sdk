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

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Namespace.ts#L9)

## Methods

### add

▸ **add**\(`args`: [ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:45_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L45)

Add the supplied Identities to the Security Token's list of trusted claim issuers

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### get

▸ **get**\(\): _Promise‹_[_DefaultTrustedClaimIssuer_](defaulttrustedclaimissuer.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:81_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L81)

Retrieve the current default trusted claim issuers of the Security Token

**`note`** can be subscribed to

**Returns:** _Promise‹_[_DefaultTrustedClaimIssuer_](defaulttrustedclaimissuer.md)_\[\]›_

▸ **get**\(`callback`: [SubCallback](../globals.md#subcallback)‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:82_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L82)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### remove

▸ **remove**\(`args`: [ModifyTokenTrustedClaimIssuersRemoveParams](../interfaces/modifytokentrustedclaimissuersremoveparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:63_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L63)

Remove the supplied Identities from the Security Token's list of trusted claim issuers \*

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyTokenTrustedClaimIssuersRemoveParams](../interfaces/modifytokentrustedclaimissuersremoveparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### set

▸ **set**\(`args`: [ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:27_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L27)

Assign a new default list of trusted claim issuers to the Security Token by replacing the existing ones with the list passed as a parameter

This requires two transactions

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_


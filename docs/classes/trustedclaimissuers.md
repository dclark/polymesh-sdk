# TrustedClaimIssuers

Handles all Security Token Default Trusted Claim Issuers related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **TrustedClaimIssuers**

## Index

### Properties

* [add](trustedclaimissuers.md#add)
* [context](trustedclaimissuers.md#protected-context)
* [parent](trustedclaimissuers.md#protected-parent)
* [remove](trustedclaimissuers.md#remove)
* [set](trustedclaimissuers.md#set)

### Methods

* [get](trustedclaimissuers.md#get)

## Properties

### add

• **add**: _ProcedureMethod‹_[_ModifyTokenTrustedClaimIssuersAddSetParams_](../interfaces/modifytokentrustedclaimissuersaddsetparams.md)_,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:85_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L85)

Add the supplied Identities to the Security Token's list of trusted claim issuers

**`param`** array of [Trusted Claim Issuers](../interfaces/trustedclaimissuer.md)

**`note`** required role:

* Security Token Owner

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L9)

### remove

• **remove**: _ProcedureMethod‹_[_ModifyTokenTrustedClaimIssuersRemoveParams_](../interfaces/modifytokentrustedclaimissuersremoveparams.md)_,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:95_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L95)

Remove the supplied Identities from the Security Token's list of trusted claim issuers \*

**`param`** array of Identities \(or DIDs\) of the default claim issuers

**`note`** required role:

* Security Token Owner

### set

• **set**: _ProcedureMethod‹_[_ModifyTokenTrustedClaimIssuersAddSetParams_](../interfaces/modifytokentrustedclaimissuersaddsetparams.md)_,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:75_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L75)

Assign a new default list of trusted claim issuers to the Security Token by replacing the existing ones with the list passed as a parameter

This requires two transactions

**`param`** array of Identity IDs of the default Trusted Claim Issuers

**`note`** required role:

* Security Token Owner

## Methods

### get

▸ **get**\(\): _Promise‹_[_DefaultTrustedClaimIssuer_](defaulttrustedclaimissuer.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:102_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L102)

Retrieve the current default trusted claim issuers of the Security Token

**`note`** can be subscribed to

**Returns:** _Promise‹_[_DefaultTrustedClaimIssuer_](defaulttrustedclaimissuer.md)_\[\]›_

▸ **get**\(`callback`: [SubCallback](../globals.md#subcallback)‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:103_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L103)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_


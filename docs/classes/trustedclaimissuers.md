# Class: TrustedClaimIssuers

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

###  add

• **add**: *ProcedureMethod‹[ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md), [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L91)*

Add the supplied Identities to the Security Token's list of trusted claim issuers

**`param`** array of [Trusted Claim Issuers](../interfaces/trustedclaimissuer.md)

**`note`** required role:
  - Security Token Owner

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L9)*

___

###  remove

• **remove**: *ProcedureMethod‹[ModifyTokenTrustedClaimIssuersRemoveParams](../interfaces/modifytokentrustedclaimissuersremoveparams.md), [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L101)*

Remove the supplied Identities from the Security Token's list of trusted claim issuers   *

**`param`** array of Identities (or DIDs) of the default claim issuers

**`note`** required role:
  - Security Token Owner

___

###  set

• **set**: *ProcedureMethod‹[ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md), [SecurityToken](securitytoken.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L81)*

Assign a new default list of trusted claim issuers to the Security Token by replacing the existing ones with the list passed as a parameter

This requires two transactions

**`param`** array of Identity IDs of the default Trusted Claim Issuers

**`note`** required role:
  - Security Token Owner

## Methods

###  get

▸ **get**(): *Promise‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)[]›*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L108)*

Retrieve the current default trusted claim issuers of the Security Token

**`note`** can be subscribed to

**Returns:** *Promise‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)[]›*

▸ **get**(`callback`: [SubCallback](../globals.md#subcallback)‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

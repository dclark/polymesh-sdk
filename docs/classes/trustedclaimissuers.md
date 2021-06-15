# Class: TrustedClaimIssuers

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

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)*

## Methods

###  add

▸ **add**(`args`: [ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L96)*

Add the supplied Identities to the Security Token's list of trusted claim issuers

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `add.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  get

▸ **get**(): *Promise‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)[]›*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L118)*

Retrieve the current default trusted claim issuers of the Security Token

**`note`** can be subscribed to

**Returns:** *Promise‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)[]›*

▸ **get**(`callback`: [SubCallback](../globals.md#subcallback)‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  remove

▸ **remove**(`args`: [ModifyTokenTrustedClaimIssuersRemoveParams](../interfaces/modifytokentrustedclaimissuersremoveparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L109)*

Remove the supplied Identities from the Security Token's list of trusted claim issuers   *

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `remove.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyTokenTrustedClaimIssuersRemoveParams](../interfaces/modifytokentrustedclaimissuersremoveparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  set

▸ **set**(`args`: [ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Compliance/TrustedClaimIssuers.ts#L83)*

Assign a new default list of trusted claim issuers to the Security Token by replacing the existing ones with the list passed as a parameter

This requires two transactions

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `set.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyTokenTrustedClaimIssuersAddSetParams](../interfaces/modifytokentrustedclaimissuersaddsetparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

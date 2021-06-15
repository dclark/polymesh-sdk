# Offerings

Handles all Security Token Offering related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Offerings**

## Index

### Properties

* [context](offerings.md#protected-context)
* [parent](offerings.md#protected-parent)

### Methods

* [get](offerings.md#get)
* [launch](offerings.md#launch)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)

## Methods

### get

▸ **get**\(`opts`: object\): _Promise‹_[_StoWithDetails_](../interfaces/stowithdetails.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Offerings.ts:47_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Offerings.ts#L47)

Retrieve all of the Token's Offerings. Can be filtered using parameters

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `status?` | Partial‹[StoStatus](../interfaces/stostatus.md)› | status of the offerings to fetch. If defined, only STOs that have all passed statuses will be returned |

**Returns:** _Promise‹_[_StoWithDetails_](../interfaces/stowithdetails.md)_\[\]›_

### launch

▸ **launch**\(`args`: LaunchStoParams\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Sto_](sto.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Offerings.ts:38_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/Offerings.ts#L38)

Launch a Security Token Offering

**`note`** required roles:

* Security Token Primary Issuance Agent
* Offering Portfolio Custodian
* Raising Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `launch.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | LaunchStoParams |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Sto_](sto.md)_››_


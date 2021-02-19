# Offerings

Handles all Security Token Offering related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Offerings**

## Index

### Properties

* [context](offerings.md#protected-context)
* [launch](offerings.md#launch)
* [parent](offerings.md#protected-parent)

### Methods

* [get](offerings.md#get)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L11)

### launch

• **launch**: _ProcedureMethod‹LaunchStoParams,_ [_Sto_](sto.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Offerings.ts:44_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Offerings.ts#L44)

Launch a Security Token Offering

**`param`** portfolio in which the Tokens to be sold are stored \(optional, defaults to the default portfolio of the Security Token's Primary Issuance Agent\)

**`param`** portfolio in which the raised funds will be stored

**`param`** ticker symbol of the currency in which the funds are being raised \(i.e. 'USD' or 'CAD'\). Other Security Tokens can be used as currency as well

**`param`** venue through which all offering related trades will be settled \(optional, defaults to the first `Sto` type Venue owned by the owner of the Offering Portfolio. If passed, it must be of type `Sto`\)

**`param`** start date of the Offering \(optional, defaults to right now\)

**`param`** end date of the Offering \(optional, defaults to never\)

**`param`** array of sale tiers. Each tier consists of an amount of Tokens to be sold at a certain price. Tokens in a tier can only be bought when all Tokens in previous tiers have been bought

**`param`** minimum amount that can be spent on this offering

**`note`** required roles:

* Security Token Primary Issuance Agent
* Offering Portfolio Custodian
* Raising Portfolio Custodian

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L9)

## Methods

### get

▸ **get**\(`opts`: object\): _Promise‹_[_StoWithDetails_](../interfaces/stowithdetails.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Offerings.ts:51_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Offerings.ts#L51)

Retrieve all of the Token's Offerings. Can be filtered using parameters

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `status?` | [StoStatus](../enums/stostatus.md) | status of the offerings to fetch |

**Returns:** _Promise‹_[_StoWithDetails_](../interfaces/stowithdetails.md)_\[\]›_


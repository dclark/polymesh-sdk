# Distributions

Handles all Security Token Distributions related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Distributions**

## Index

### Properties

* [context](distributions.md#protected-context)
* [parent](distributions.md#protected-parent)

### Methods

* [configureDividendDistribution](distributions.md#configuredividenddistribution)
* [get](distributions.md#get)

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

### configureDividendDistribution

▸ **configureDividendDistribution**\(`args`: [ConfigureDividendDistributionParams](../globals.md#configuredividenddistributionparams)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_DividendDistribution_](dividenddistribution.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/Distributions.ts:42_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L42)

Create a Dividend Distribution for a subset of the Tokenholders at a certain \(existing or future\) Checkpoint

**`note`** required roles:

* Security Token Corporate Actions Agent
* Origin Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `configureDividendDistribution.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ConfigureDividendDistributionParams](../globals.md#configuredividenddistributionparams) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_DividendDistribution_](dividenddistribution.md)_››_

### get

▸ **get**\(\): _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/Distributions.ts:63_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L63)

Retrieve all Dividend Distributions associated to this Security Token

**Returns:** _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_


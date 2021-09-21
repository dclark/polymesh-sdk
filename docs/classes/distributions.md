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
* [getOne](distributions.md#getone)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Namespace.ts#L11)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Namespace.ts#L9)

## Methods

### configureDividendDistribution

▸ **configureDividendDistribution**\(`args`: [ConfigureDividendDistributionParams](../globals.md#configuredividenddistributionparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_DividendDistribution_](dividenddistribution.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/Distributions.ts:39_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L39)

Create a Dividend Distribution for a subset of the Tokenholders at a certain \(existing or future\) Checkpoint

**`note`** required role:

* Origin Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `configureDividendDistribution.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ConfigureDividendDistributionParams](../globals.md#configuredividenddistributionparams) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_DividendDistribution_](dividenddistribution.md)_››_

### get

▸ **get**\(\): _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/Distributions.ts:114_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L114)

Retrieve all Dividend Distributions associated to this Security Token, along with their details

**Returns:** _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_\[\]›_

### getOne

▸ **getOne**\(`args`: object\): _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/Distributions.ts:62_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L62)

Retrieve a single Dividend Distribution associated to this Security Token by its ID

**`throws`** if there is no Distribution with the passed ID

**Parameters:**

▪ **args**: _object_

| Name | Type |
| :--- | :--- |
| `id` | BigNumber |

**Returns:** _Promise‹_[_DistributionWithDetails_](../interfaces/distributionwithdetails.md)_›_


# Portfolio

Represents a base Portfolio for a specific Identity in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Portfolio**

  ↳ [DefaultPortfolio](defaultportfolio.md)

  ↳ [NumberedPortfolio](numberedportfolio.md)

## Index

### Properties

* [\_id](portfolio.md#protected-optional-_id)
* [context](portfolio.md#protected-context)
* [owner](portfolio.md#owner)
* [uuid](portfolio.md#uuid)

### Methods

* [getCustodian](portfolio.md#getcustodian)
* [getTokenBalances](portfolio.md#gettokenbalances)
* [isCustodiedBy](portfolio.md#iscustodiedby)
* [isOwnedBy](portfolio.md#isownedby)
* [moveFunds](portfolio.md#movefunds)
* [setCustodian](portfolio.md#setcustodian)
* [generateUuid](portfolio.md#static-generateuuid)
* [unserialize](portfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` \_id

• **\_id**? : _BigNumber_

_Defined in_ [_src/api/entities/Portfolio/index.ts:53_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L53)

internal Portfolio identifier \(unused for default Portfolio\)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L48)

### owner

• **owner**: [_Identity_](identity.md)

_Defined in_ [_src/api/entities/Portfolio/index.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L48)

identity of the Portfolio's owner

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L46)

## Methods

### getCustodian

▸ **getCustodian**\(\): _Promise‹_[_Identity_](identity.md)_›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:199_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L199)

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** _Promise‹_[_Identity_](identity.md)_›_

### getTokenBalances

▸ **getTokenBalances**\(`args?`: undefined \| object\): _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:104_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L104)

Retrieve the balances of all assets in this Portfolio

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹_[_PortfolioBalance_](../interfaces/portfoliobalance.md)_\[\]›_

### isCustodiedBy

▸ **isCustodiedBy**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:88_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L88)

Return whether an Identity is the Portfolio custodian

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### isOwnedBy

▸ **isOwnedBy**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Portfolio/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L72)

Return whether an Identity is the Portfolio owner

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### moveFunds

▸ **moveFunds**\(`args`: [MoveFundsParams](../interfaces/movefundsparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Portfolio/index.ts:190_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L190)

Moves funds from this Portfolio to another one owned by the same Identity

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [MoveFundsParams](../interfaces/movefundsparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### setCustodian

▸ **setCustodian**\(`args`: [SetCustodianParams](../interfaces/setcustodianparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Portfolio/index.ts:174_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Portfolio/index.ts#L174)

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this may create an AuthorizationRequest which has to be accepted by the corresponding Identity. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetCustodianParams](../interfaces/setcustodianparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


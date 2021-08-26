# CorporateActions

Handles all Security Token Corporate Actions related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **CorporateActions**

## Index

### Properties

* [context](corporateactions.md#protected-context)
* [distributions](corporateactions.md#distributions)
* [parent](corporateactions.md#protected-parent)

### Methods

* [getAgents](corporateactions.md#getagents)
* [getDefaults](corporateactions.md#getdefaults)
* [remove](corporateactions.md#remove)
* [removeAgent](corporateactions.md#removeagent)
* [setAgent](corporateactions.md#setagent)
* [setDefaults](corporateactions.md#setdefaults)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L11)

### distributions

• **distributions**: [_Distributions_](distributions.md)

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:37_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/CorporateActions/index.ts#L37)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Namespace.ts#L9)

## Methods

### getAgents

▸ **getAgents**\(\): _Promise‹_[_Identity_](identity.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:136_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/CorporateActions/index.ts#L136)

Retrieve a list of agent identities

**Returns:** _Promise‹_[_Identity_](identity.md)_\[\]›_

### getDefaults

▸ **getDefaults**\(\): _Promise‹_[_CorporateActionDefaults_](../interfaces/corporateactiondefaults.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:171_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/CorporateActions/index.ts#L171)

Retrieve default values for targets, global tax withholding percentage and per-identity tax withholding perecentages.

**`note`** These values are applied to every Corporate Action that is created until they are modified. Modifying these values does not impact existing Corporate Actions. When creating a Corporate Action, values passed explicitly will override these defaults

**Returns:** _Promise‹_[_CorporateActionDefaults_](../interfaces/corporateactiondefaults.md)_›_

### remove

▸ **remove**\(`args`: [RemoveCorporateActionParams](../interfaces/removecorporateactionparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:129_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/CorporateActions/index.ts#L129)

Remove a Corporate Action

**`note`** required role:

* Corporate Actions Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `remove.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RemoveCorporateActionParams](../interfaces/removecorporateactionparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### removeAgent

▸ **removeAgent**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:116_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/CorporateActions/index.ts#L116)

Remove the Corporate Actions Agent of the Security Token

**`note`** this action will leave the Security Token owner as the Corporate Actions Agent

**`note`** required role:

* Security Token Owner

**`deprecated`**

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeAgent.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### setAgent

▸ **setAgent**\(`args`: [ModifyCorporateActionsAgentParams](../interfaces/modifycorporateactionsagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:99_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/CorporateActions/index.ts#L99)

Assign a new Corporate Actions Agent for the Security Token

**`note`** this may create AuthorizationRequests which have to be accepted by the corresponding Account. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Security Token Owner

**`deprecated`** in favor of `inviteAgent`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setAgent.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyCorporateActionsAgentParams](../interfaces/modifycorporateactionsagentparams.md) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### setDefaults

▸ **setDefaults**\(`args`: [ModifyCaDefaultsParams](../globals.md#modifycadefaultsparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:80_](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/CorporateActions/index.ts#L80)

Assign default values for targets, global tax withholding percentage and per-identity tax withholding perecentages.

**`note`** These values are applied to every Corporate Action that is created until they are modified. Modifying these values does not impact existing Corporate Actions. When creating a Corporate Action, values passed explicitly will override these defaults

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setDefaults.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyCaDefaultsParams](../globals.md#modifycadefaultsparams) |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_


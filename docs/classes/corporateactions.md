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

* [getAgent](corporateactions.md#getagent)
* [getDefaults](corporateactions.md#getdefaults)
* [remove](corporateactions.md#remove)
* [removeAgent](corporateactions.md#removeagent)
* [setAgent](corporateactions.md#setagent)
* [setDefaults](corporateactions.md#setdefaults)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)

### distributions

• **distributions**: [_Distributions_](distributions.md)

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:36_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L36)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)

## Methods

### getAgent

▸ **getAgent**\(\): _Promise‹_[_Identity_](identity.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:131_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L131)

Retrieve the Security Token's Corporate Actions agent

**Returns:** _Promise‹_[_Identity_](identity.md)_›_

### getDefaults

▸ **getDefaults**\(\): _Promise‹_[_CorporateActionDefaults_](../interfaces/corporateactiondefaults.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:163_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L163)

Retrieve default values for targets, global tax withholding percentage and per-identity tax withholding perecentages.

**`note`** These values are applied to every Corporate Action that is created until they are modified. Modifying these values does not impact existing Corporate Actions. When creating a Corporate Action, values passed explicitly will override these defaults

**Returns:** _Promise‹_[_CorporateActionDefaults_](../interfaces/corporateactiondefaults.md)_›_

### remove

▸ **remove**\(`args`: [RemoveCorporateActionParams](../interfaces/removecorporateactionparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:124_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L124)

Remove a Corporate Action

**`note`** required role:

* Corporate Actions Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `remove.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [RemoveCorporateActionParams](../interfaces/removecorporateactionparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### removeAgent

▸ **removeAgent**\(`args`: void\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:111_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L111)

Remove the Corporate Actions Agent of the Security Token

**`note`** this action will leave the Security Token owner as the Corporate Actions Agent

**`note`** required role:

* Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeAgent.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### setAgent

▸ **setAgent**\(`args`: [ModifyCorporateActionsAgentParams](../interfaces/modifycorporateactionsagentparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:96_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L96)

Assign a new Corporate Actions Agent for the Security Token

**`note`** this may create AuthorizationRequests which have to be accepted by the corresponding Account. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setAgent.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyCorporateActionsAgentParams](../interfaces/modifycorporateactionsagentparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### setDefaults

▸ **setDefaults**\(`args`: [ModifyCaDefaultsParams](../globals.md#modifycadefaultsparams)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/CorporateActions/index.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L79)

Assign default values for targets, global tax withholding percentage and per-identity tax withholding perecentages.

**`note`** These values are applied to every Corporate Action that is created until they are modified. Modifying these values does not impact existing Corporate Actions. When creating a Corporate Action, values passed explicitly will override these defaults

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setDefaults.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyCaDefaultsParams](../globals.md#modifycadefaultsparams) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_


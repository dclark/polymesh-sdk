# Class: CorporateActions

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

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L11)*

___

###  distributions

• **distributions**: *[Distributions](distributions.md)*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L36)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/Namespace.ts#L9)*

## Methods

###  getAgent

▸ **getAgent**(): *Promise‹[Identity](identity.md)›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:131](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L131)*

Retrieve the Security Token's Corporate Actions agent

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getDefaults

▸ **getDefaults**(): *Promise‹[CorporateActionDefaults](../interfaces/corporateactiondefaults.md)›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:163](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L163)*

Retrieve default values for targets, global tax withholding percentage and per-identity tax withholding perecentages.

**`note`** These values are applied to every Corporate Action that is created until they are modified. Modifying these values
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override these defaults

**Returns:** *Promise‹[CorporateActionDefaults](../interfaces/corporateactiondefaults.md)›*

___

###  remove

▸ **remove**(`args`: [RemoveCorporateActionParams](../interfaces/removecorporateactionparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:124](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L124)*

Remove a Corporate Action

**`note`** required role:
  - Corporate Actions Agent

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `remove.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveCorporateActionParams](../interfaces/removecorporateactionparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removeAgent

▸ **removeAgent**(`args`: void): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L111)*

Remove the Corporate Actions Agent of the Security Token

**`note`** this action will leave the Security Token owner as the Corporate Actions Agent

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  setAgent

▸ **setAgent**(`args`: [ModifyCorporateActionsAgentParams](../interfaces/modifycorporateactionsagentparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L96)*

Assign a new Corporate Actions Agent for the Security Token

**`note`** this may create AuthorizationRequests which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Security Token Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyCorporateActionsAgentParams](../interfaces/modifycorporateactionsagentparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  setDefaults

▸ **setDefaults**(`args`: [ModifyCaDefaultsParams](../globals.md#modifycadefaultsparams)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/entities/SecurityToken/CorporateActions/index.ts#L79)*

Assign default values for targets, global tax withholding percentage and per-identity tax withholding perecentages.

**`note`** These values are applied to every Corporate Action that is created until they are modified. Modifying these values
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override these defaults

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setDefaults.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyCaDefaultsParams](../globals.md#modifycadefaultsparams) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

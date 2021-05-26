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
* [remove](corporateactions.md#remove)
* [removeAgent](corporateactions.md#removeagent)
* [setAgent](corporateactions.md#setagent)
* [setDefaults](corporateactions.md#setdefaults)

### Methods

* [getAgent](corporateactions.md#getagent)
* [getDefaults](corporateactions.md#getdefaults)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L11)*

___

###  distributions

• **distributions**: *[Distributions](distributions.md)*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/CorporateActions/index.ts#L35)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/Namespace.ts#L9)*

___

###  remove

• **remove**: *ProcedureMethod‹[RemoveCorporateActionParams](../interfaces/removecorporateactionparams.md), void›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/CorporateActions/index.ts#L109)*

Remove a Corporate Action

**`note`** required role:
  - Corporate Actions Agent

___

###  removeAgent

• **removeAgent**: *ProcedureMethod‹void, void›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/CorporateActions/index.ts#L101)*

Remove the Corporate Actions Agent of the Security Token

**`note`** this action will leave the Security Token owner as the Corporate Actions Agent

**`note`** required role:
  - Security Token Owner

___

###  setAgent

• **setAgent**: *ProcedureMethod‹[ModifyCorporateActionsAgentParams](../interfaces/modifycorporateactionsagentparams.md), void›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/CorporateActions/index.ts#L91)*

Assign a new Corporate Actions Agent for the Security Token

**`param`** identity to be set as Corporate Actions Agent

**`param`** date at which the authorization request to modify the Corporate Actions Agent expires (optional, never expires if a date is not provided)

**`note`** this may create AuthorizationRequests which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Security Token Owner

___

###  setDefaults

• **setDefaults**: *ProcedureMethod‹[ModifyCaDefaultsParams](../globals.md#modifycadefaultsparams), void›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/CorporateActions/index.ts#L76)*

Assign default values for targets, global tax withholding percentage and per-identity tax withholding perecentages.

**`note`** These values are applied to every Corporate Action that is created until they are modified. Modifying these values
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override these defaults

## Methods

###  getAgent

▸ **getAgent**(): *Promise‹[Identity](identity.md)›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/CorporateActions/index.ts#L114)*

Retrieve the Security Token's Corporate Actions agent

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getDefaults

▸ **getDefaults**(): *Promise‹[CorporateActionDefaults](../interfaces/corporateactiondefaults.md)›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/index.ts:146](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/api/entities/SecurityToken/CorporateActions/index.ts#L146)*

Retrieve default values for targets, global tax withholding percentage and per-identity tax withholding perecentages.

**`note`** These values are applied to every Corporate Action that is created until they are modified. Modifying these values
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override these defaults

**Returns:** *Promise‹[CorporateActionDefaults](../interfaces/corporateactiondefaults.md)›*

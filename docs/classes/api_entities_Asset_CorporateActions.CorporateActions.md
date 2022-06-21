[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset/CorporateActions](../modules/api_entities_Asset_CorporateActions.md) / CorporateActions

# Class: CorporateActions

[api/entities/Asset/CorporateActions](../modules/api_entities_Asset_CorporateActions.md).CorporateActions

Handles all Asset Corporate Actions related functionality

## Hierarchy

- `Namespace`<[`Asset`](api_entities_Asset.Asset.md)\>

  ↳ **`CorporateActions`**

## Table of contents

### Properties

- [distributions](api_entities_Asset_CorporateActions.CorporateActions.md#distributions)

### Methods

- [getAgents](api_entities_Asset_CorporateActions.CorporateActions.md#getagents)
- [getDefaultConfig](api_entities_Asset_CorporateActions.CorporateActions.md#getdefaultconfig)
- [remove](api_entities_Asset_CorporateActions.CorporateActions.md#remove)
- [removeAgent](api_entities_Asset_CorporateActions.CorporateActions.md#removeagent)
- [setAgent](api_entities_Asset_CorporateActions.CorporateActions.md#setagent)
- [setDefaultConfig](api_entities_Asset_CorporateActions.CorporateActions.md#setdefaultconfig)

## Properties

### distributions

• **distributions**: [`Distributions`](api_entities_Asset_CorporateActions_Distributions.Distributions.md)

#### Defined in

[api/entities/Asset/CorporateActions/index.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/index.ts#L35)

## Methods

### getAgents

▸ **getAgents**(): `Promise`<[`Identity`](api_entities_Identity.Identity.md)[]\>

Retrieve a list of agent Identities

#### Returns

`Promise`<[`Identity`](api_entities_Identity.Identity.md)[]\>

#### Defined in

[api/entities/Asset/CorporateActions/index.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/index.ts#L125)

___

### getDefaultConfig

▸ **getDefaultConfig**(): `Promise`<[`CorporateActionDefaultConfig`](../interfaces/api_entities_Asset_CorporateActions_types.CorporateActionDefaultConfig.md)\>

Retrieve default config comprising of targets, global tax withholding percentage and per-Identity tax withholding percentages.

**`note`** This config is applied to every Corporate Action that is created until they are modified. Modifying the default config
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override this default config

#### Returns

`Promise`<[`CorporateActionDefaultConfig`](../interfaces/api_entities_Asset_CorporateActions_types.CorporateActionDefaultConfig.md)\>

#### Defined in

[api/entities/Asset/CorporateActions/index.ts:160](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/index.ts#L160)

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Remove a Corporate Action

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [remove.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveCorporateActionParams`](../interfaces/api_procedures_removeCorporateAction.RemoveCorporateActionParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/CorporateActions/index.ts:118](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/index.ts#L118)

___

### removeAgent

▸ **removeAgent**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Remove the Corporate Actions Agent of the Asset

**`note`** this action will leave the Asset owner as the Corporate Actions Agent

**`deprecated`**

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [removeAgent.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/CorporateActions/index.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/index.ts#L108)

___

### setAgent

▸ **setAgent**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Assign a new Corporate Actions Agent for the Asset

**`note`** this may create [Authorization Requests](api_entities_AuthorizationRequest.AuthorizationRequest.md) which have to be accepted by the `target` Identity.
  An [Account](api_entities_Account.Account.md) or [Identity](api_entities_Identity.Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

**`deprecated`** in favor of `inviteAgent`

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [setAgent.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyCorporateActionsAgentParams`](../interfaces/api_procedures_modifyCorporateActionsAgent.ModifyCorporateActionsAgentParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/CorporateActions/index.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/index.ts#L94)

___

### setDefaultConfig

▸ **setDefaultConfig**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Assign default config values(targets, global tax withholding percentage and per-Identity tax withholding percentages)

**`note`** These config values are applied to every Corporate Action that is created until they are modified. Modifying these values
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override these default config values

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [setDefaultConfig.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyCaDefaultConfigParams`](../modules/api_procedures_modifyCaDefaultConfig.md#modifycadefaultconfigparams) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/CorporateActions/index.ts:78](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/CorporateActions/index.ts#L78)

[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Asset](../modules/api_entities_Asset.md) / Asset

# Class: Asset

[api/entities/Asset](../modules/api_entities_Asset.md).Asset

Class used to manage all Asset functionality

## Hierarchy

- [`Entity`](api_entities_Entity.Entity.md)<[`UniqueIdentifiers`](../interfaces/api_entities_Asset.UniqueIdentifiers.md), `string`\>

  ↳ **`Asset`**

## Table of contents

### Properties

- [assetHolders](api_entities_Asset.Asset.md#assetholders)
- [checkpoints](api_entities_Asset.Asset.md#checkpoints)
- [compliance](api_entities_Asset.Asset.md#compliance)
- [corporateActions](api_entities_Asset.Asset.md#corporateactions)
- [did](api_entities_Asset.Asset.md#did)
- [documents](api_entities_Asset.Asset.md#documents)
- [issuance](api_entities_Asset.Asset.md#issuance)
- [offerings](api_entities_Asset.Asset.md#offerings)
- [permissions](api_entities_Asset.Asset.md#permissions)
- [settlements](api_entities_Asset.Asset.md#settlements)
- [ticker](api_entities_Asset.Asset.md#ticker)
- [transferRestrictions](api_entities_Asset.Asset.md#transferrestrictions)
- [uuid](api_entities_Asset.Asset.md#uuid)

### Methods

- [controllerTransfer](api_entities_Asset.Asset.md#controllertransfer)
- [createdAt](api_entities_Asset.Asset.md#createdat)
- [currentFundingRound](api_entities_Asset.Asset.md#currentfundinground)
- [details](api_entities_Asset.Asset.md#details)
- [exists](api_entities_Asset.Asset.md#exists)
- [freeze](api_entities_Asset.Asset.md#freeze)
- [getIdentifiers](api_entities_Asset.Asset.md#getidentifiers)
- [getOperationHistory](api_entities_Asset.Asset.md#getoperationhistory)
- [investorCount](api_entities_Asset.Asset.md#investorcount)
- [isEqual](api_entities_Asset.Asset.md#isequal)
- [isFrozen](api_entities_Asset.Asset.md#isfrozen)
- [modify](api_entities_Asset.Asset.md#modify)
- [modifyPrimaryIssuanceAgent](api_entities_Asset.Asset.md#modifyprimaryissuanceagent)
- [redeem](api_entities_Asset.Asset.md#redeem)
- [removePrimaryIssuanceAgent](api_entities_Asset.Asset.md#removeprimaryissuanceagent)
- [toHuman](api_entities_Asset.Asset.md#tohuman)
- [transferOwnership](api_entities_Asset.Asset.md#transferownership)
- [unfreeze](api_entities_Asset.Asset.md#unfreeze)
- [generateUuid](api_entities_Asset.Asset.md#generateuuid)
- [unserialize](api_entities_Asset.Asset.md#unserialize)

## Properties

### assetHolders

• **assetHolders**: [`AssetHolders`](api_entities_Asset_AssetHolders.AssetHolders.md)

#### Defined in

[api/entities/Asset/index.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L110)

___

### checkpoints

• **checkpoints**: [`Checkpoints`](api_entities_Asset_Checkpoints.Checkpoints.md)

#### Defined in

[api/entities/Asset/index.ts:115](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L115)

___

### compliance

• **compliance**: [`Compliance`](api_entities_Asset_Compliance.Compliance.md)

#### Defined in

[api/entities/Asset/index.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L112)

___

### corporateActions

• **corporateActions**: [`CorporateActions`](api_entities_Asset_CorporateActions.CorporateActions.md)

#### Defined in

[api/entities/Asset/index.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L116)

___

### did

• **did**: `string`

Identity ID of the Asset (used for Claims)

#### Defined in

[api/entities/Asset/index.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L100)

___

### documents

• **documents**: [`Documents`](api_entities_Asset_Documents.Documents.md)

#### Defined in

[api/entities/Asset/index.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L108)

___

### issuance

• **issuance**: [`Issuance`](api_entities_Asset_Issuance.Issuance.md)

#### Defined in

[api/entities/Asset/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L111)

___

### offerings

• **offerings**: [`Offerings`](api_entities_Asset_Offerings.Offerings.md)

#### Defined in

[api/entities/Asset/index.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L114)

___

### permissions

• **permissions**: [`Permissions`](api_entities_Asset_Permissions.Permissions.md)

#### Defined in

[api/entities/Asset/index.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L117)

___

### settlements

• **settlements**: [`Settlements`](api_entities_Asset_Settlements.Settlements.md)

#### Defined in

[api/entities/Asset/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L109)

___

### ticker

• **ticker**: `string`

ticker of the Asset

#### Defined in

[api/entities/Asset/index.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L105)

___

### transferRestrictions

• **transferRestrictions**: [`TransferRestrictions`](api_entities_Asset_TransferRestrictions.TransferRestrictions.md)

#### Defined in

[api/entities/Asset/index.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L113)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[uuid](api_entities_Entity.Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L46)

## Methods

### controllerTransfer

▸ **controllerTransfer**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Force a transfer from a given Portfolio to the caller’s default Portfolio

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [controllerTransfer.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ControllerTransferParams`](../interfaces/api_procedures_controllerTransfer.ControllerTransferParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:562](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L562)

___

### createdAt

▸ **createdAt**(): `Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../interfaces/types.EventIdentifier.md)\>

#### Defined in

[api/entities/Asset/index.ts:387](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L387)

___

### currentFundingRound

▸ **currentFundingRound**(): `Promise`<``null`` \| `string`\>

Retrieve the Asset's funding round

**`note`** can be subscribed to

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[api/entities/Asset/index.ts:313](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L313)

▸ **currentFundingRound**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<``null`` \| `string`\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:314](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L314)

___

### details

▸ **details**(): `Promise`<[`AssetDetails`](../interfaces/api_entities_Asset_types.AssetDetails.md)\>

Retrieve the Asset's data

**`note`** can be subscribed to

#### Returns

`Promise`<[`AssetDetails`](../interfaces/api_entities_Asset_types.AssetDetails.md)\>

#### Defined in

[api/entities/Asset/index.ts:212](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L212)

▸ **details**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`AssetDetails`](../interfaces/api_entities_Asset_types.AssetDetails.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:213](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L213)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Asset exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](api_entities_Entity.Entity.md).[exists](api_entities_Entity.Entity.md#exists)

#### Defined in

[api/entities/Asset/index.ts:654](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L654)

___

### freeze

▸ **freeze**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Freeze transfers of the Asset

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:409](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L409)

___

### getIdentifiers

▸ **getIdentifiers**(): `Promise`<[`SecurityIdentifier`](../interfaces/types.SecurityIdentifier.md)[]\>

Retrieve the Asset's identifiers list

**`note`** can be subscribed to

#### Returns

`Promise`<[`SecurityIdentifier`](../interfaces/types.SecurityIdentifier.md)[]\>

#### Defined in

[api/entities/Asset/index.ts:350](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L350)

▸ **getIdentifiers**(`callback?`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`SubCallback`](../modules/types.md#subcallback)<[`SecurityIdentifier`](../interfaces/types.SecurityIdentifier.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:351](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L351)

___

### getOperationHistory

▸ **getOperationHistory**(): `Promise`<[`HistoricAgentOperation`](../interfaces/types.HistoricAgentOperation.md)[]\>

Retrieve this Asset's Operation History

**`note`** Operations are grouped by the agent Identity who performed them

**`note`** uses the middleware

#### Returns

`Promise`<[`HistoricAgentOperation`](../interfaces/types.HistoricAgentOperation.md)[]\>

#### Defined in

[api/entities/Asset/index.ts:573](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L573)

___

### investorCount

▸ **investorCount**(): `Promise`<`BigNumber`\>

Retrieve the amount of unique investors that hold this Asset

**`note`** this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances
  of this Asset in two or more different Identities, but they all have Investor Uniqueness Claims with the same
  Scope ID, then they will only be counted once for the purposes of this result

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/entities/Asset/index.ts:506](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L506)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](api_entities_Entity.Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[isEqual](api_entities_Entity.Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L61)

___

### isFrozen

▸ **isFrozen**(): `Promise`<`boolean`\>

Check whether transfers are frozen for the Asset

**`note`** can be subscribed to

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Asset/index.ts:428](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L428)

▸ **isFrozen**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:429](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L429)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Modify some properties of the Asset

**`throws`** if the passed values result in no changes being made to the Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [modify.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetParams`](../modules/api_procedures_modifyAsset.md#modifyassetparams) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:203](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L203)

___

### modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Assign a new primary issuance agent for the Asset

**`note`** this will create an [Authorization Request](api_entities_AuthorizationRequest.AuthorizationRequest.md) which has to be accepted by the `target` Identity.
  An [Account](api_entities_Account.Account.md) or [Identity](api_entities_Identity.Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

**`deprecated`** in favor of `inviteAgent`

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [modifyPrimaryIssuanceAgent.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyPrimaryIssuanceAgentParams`](../interfaces/api_procedures_modifyPrimaryIssuanceAgent.ModifyPrimaryIssuanceAgentParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:469](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L469)

___

### redeem

▸ **redeem**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Redeem (burn) an amount of this Asset's tokens

**`note`** tokens are removed from the caller's Default Portfolio

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [redeem.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RedeemTokensParams`](../interfaces/api_procedures_redeemTokens.RedeemTokensParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:495](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L495)

___

### removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Remove the primary issuance agent of the Asset

**`note`** if primary issuance agent is not set, Asset owner would be used by default

**`deprecated`**

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [removePrimaryIssuanceAgent.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:483](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L483)

___

### toHuman

▸ **toHuman**(): `string`

Return the Asset's ticker

#### Returns

`string`

#### Overrides

[Entity](api_entities_Entity.Entity.md).[toHuman](api_entities_Entity.Entity.md#tohuman)

#### Defined in

[api/entities/Asset/index.ts:667](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L667)

___

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
  by the recipient

**`note`** this will create [Authorization Request](api_entities_AuthorizationRequest.AuthorizationRequest.md) which has to be accepted by the `target` Identity.
  An [Account](api_entities_Account.Account.md) or [Identity](api_entities_Identity.Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [transferOwnership.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferAssetOwnershipParams`](../interfaces/api_procedures_transferAssetOwnership.TransferAssetOwnershipParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:192](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L192)

___

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

Unfreeze transfers of the Asset

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](api_entities_Asset.Asset.md), [`Asset`](api_entities_Asset.Asset.md), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:419](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Asset/index.ts#L419)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[generateUuid](api_entities_Entity.Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](api_entities_Entity.Entity.md).[unserialize](api_entities_Entity.Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Entity.ts#L23)

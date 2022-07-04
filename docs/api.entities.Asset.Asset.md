# Class: Asset

[api/entities/Asset](../wiki/api.entities.Asset).Asset

Class used to manage all Asset functionality

## Hierarchy

- [`Entity`](../wiki/api.entities.Entity.Entity)<[`UniqueIdentifiers`](../wiki/api.entities.Asset.UniqueIdentifiers), `string`\>

  ↳ **`Asset`**

## Table of contents

### Properties

- [assetHolders](../wiki/api.entities.Asset.Asset#assetholders)
- [checkpoints](../wiki/api.entities.Asset.Asset#checkpoints)
- [compliance](../wiki/api.entities.Asset.Asset#compliance)
- [corporateActions](../wiki/api.entities.Asset.Asset#corporateactions)
- [did](../wiki/api.entities.Asset.Asset#did)
- [documents](../wiki/api.entities.Asset.Asset#documents)
- [issuance](../wiki/api.entities.Asset.Asset#issuance)
- [offerings](../wiki/api.entities.Asset.Asset#offerings)
- [permissions](../wiki/api.entities.Asset.Asset#permissions)
- [settlements](../wiki/api.entities.Asset.Asset#settlements)
- [ticker](../wiki/api.entities.Asset.Asset#ticker)
- [transferRestrictions](../wiki/api.entities.Asset.Asset#transferrestrictions)
- [uuid](../wiki/api.entities.Asset.Asset#uuid)

### Methods

- [controllerTransfer](../wiki/api.entities.Asset.Asset#controllertransfer)
- [createdAt](../wiki/api.entities.Asset.Asset#createdat)
- [currentFundingRound](../wiki/api.entities.Asset.Asset#currentfundinground)
- [details](../wiki/api.entities.Asset.Asset#details)
- [exists](../wiki/api.entities.Asset.Asset#exists)
- [freeze](../wiki/api.entities.Asset.Asset#freeze)
- [getIdentifiers](../wiki/api.entities.Asset.Asset#getidentifiers)
- [getOperationHistory](../wiki/api.entities.Asset.Asset#getoperationhistory)
- [investorCount](../wiki/api.entities.Asset.Asset#investorcount)
- [isEqual](../wiki/api.entities.Asset.Asset#isequal)
- [isFrozen](../wiki/api.entities.Asset.Asset#isfrozen)
- [modify](../wiki/api.entities.Asset.Asset#modify)
- [modifyPrimaryIssuanceAgent](../wiki/api.entities.Asset.Asset#modifyprimaryissuanceagent)
- [redeem](../wiki/api.entities.Asset.Asset#redeem)
- [removePrimaryIssuanceAgent](../wiki/api.entities.Asset.Asset#removeprimaryissuanceagent)
- [toHuman](../wiki/api.entities.Asset.Asset#tohuman)
- [transferOwnership](../wiki/api.entities.Asset.Asset#transferownership)
- [unfreeze](../wiki/api.entities.Asset.Asset#unfreeze)
- [generateUuid](../wiki/api.entities.Asset.Asset#generateuuid)
- [unserialize](../wiki/api.entities.Asset.Asset#unserialize)

## Properties

### assetHolders

• **assetHolders**: [`AssetHolders`](../wiki/api.entities.Asset.AssetHolders.AssetHolders)

#### Defined in

[api/entities/Asset/index.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L110)

___

### checkpoints

• **checkpoints**: [`Checkpoints`](../wiki/api.entities.Asset.Checkpoints.Checkpoints)

#### Defined in

[api/entities/Asset/index.ts:115](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L115)

___

### compliance

• **compliance**: [`Compliance`](../wiki/api.entities.Asset.Compliance.Compliance)

#### Defined in

[api/entities/Asset/index.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L112)

___

### corporateActions

• **corporateActions**: [`CorporateActions`](../wiki/api.entities.Asset.CorporateActions.CorporateActions)

#### Defined in

[api/entities/Asset/index.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L116)

___

### did

• **did**: `string`

Identity ID of the Asset (used for Claims)

#### Defined in

[api/entities/Asset/index.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L100)

___

### documents

• **documents**: [`Documents`](../wiki/api.entities.Asset.Documents.Documents)

#### Defined in

[api/entities/Asset/index.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L108)

___

### issuance

• **issuance**: [`Issuance`](../wiki/api.entities.Asset.Issuance.Issuance)

#### Defined in

[api/entities/Asset/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L111)

___

### offerings

• **offerings**: [`Offerings`](../wiki/api.entities.Asset.Offerings.Offerings)

#### Defined in

[api/entities/Asset/index.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L114)

___

### permissions

• **permissions**: [`Permissions`](../wiki/api.entities.Asset.Permissions.Permissions)

#### Defined in

[api/entities/Asset/index.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L117)

___

### settlements

• **settlements**: [`Settlements`](../wiki/api.entities.Asset.Settlements.Settlements)

#### Defined in

[api/entities/Asset/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L109)

___

### ticker

• **ticker**: `string`

ticker of the Asset

#### Defined in

[api/entities/Asset/index.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L105)

___

### transferRestrictions

• **transferRestrictions**: [`TransferRestrictions`](../wiki/api.entities.Asset.TransferRestrictions.TransferRestrictions)

#### Defined in

[api/entities/Asset/index.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L113)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../wiki/api.entities.Entity.Entity).[uuid](../wiki/api.entities.Entity.Entity#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L46)

## Methods

### controllerTransfer

▸ **controllerTransfer**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Force a transfer from a given Portfolio to the caller’s default Portfolio

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [controllerTransfer.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ControllerTransferParams`](../wiki/api.procedures.types.ControllerTransferParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:562](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L562)

___

### createdAt

▸ **createdAt**(): `Promise`<``null`` \| [`EventIdentifier`](../wiki/types.EventIdentifier)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../wiki/types.EventIdentifier)\>

#### Defined in

[api/entities/Asset/index.ts:387](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L387)

___

### currentFundingRound

▸ **currentFundingRound**(): `Promise`<``null`` \| `string`\>

Retrieve the Asset's funding round

**`note`** can be subscribed to

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[api/entities/Asset/index.ts:313](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L313)

▸ **currentFundingRound**(`callback`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../wiki/types#subcallback)<``null`` \| `string`\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:314](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L314)

___

### details

▸ **details**(): `Promise`<[`AssetDetails`](../wiki/api.entities.Asset.types.AssetDetails)\>

Retrieve the Asset's data

**`note`** can be subscribed to

#### Returns

`Promise`<[`AssetDetails`](../wiki/api.entities.Asset.types.AssetDetails)\>

#### Defined in

[api/entities/Asset/index.ts:212](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L212)

▸ **details**(`callback`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../wiki/types#subcallback)<[`AssetDetails`](../wiki/api.entities.Asset.types.AssetDetails)\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:213](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L213)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Asset exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../wiki/api.entities.Entity.Entity).[exists](../wiki/api.entities.Entity.Entity#exists)

#### Defined in

[api/entities/Asset/index.ts:654](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L654)

___

### freeze

▸ **freeze**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Freeze transfers of the Asset

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [freeze.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:409](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L409)

___

### getIdentifiers

▸ **getIdentifiers**(): `Promise`<[`SecurityIdentifier`](../wiki/types.SecurityIdentifier)[]\>

Retrieve the Asset's identifiers list

**`note`** can be subscribed to

#### Returns

`Promise`<[`SecurityIdentifier`](../wiki/types.SecurityIdentifier)[]\>

#### Defined in

[api/entities/Asset/index.ts:350](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L350)

▸ **getIdentifiers**(`callback?`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`SubCallback`](../wiki/types#subcallback)<[`SecurityIdentifier`](../wiki/types.SecurityIdentifier)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:351](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L351)

___

### getOperationHistory

▸ **getOperationHistory**(): `Promise`<[`HistoricAgentOperation`](../wiki/types.HistoricAgentOperation)[]\>

Retrieve this Asset's Operation History

**`note`** Operations are grouped by the agent Identity who performed them

**`note`** uses the middleware

#### Returns

`Promise`<[`HistoricAgentOperation`](../wiki/types.HistoricAgentOperation)[]\>

#### Defined in

[api/entities/Asset/index.ts:573](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L573)

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

[api/entities/Asset/index.ts:506](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L506)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../wiki/api.entities.Entity.Entity)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../wiki/api.entities.Entity.Entity).[isEqual](../wiki/api.entities.Entity.Entity#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L61)

___

### isFrozen

▸ **isFrozen**(): `Promise`<`boolean`\>

Check whether transfers are frozen for the Asset

**`note`** can be subscribed to

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/entities/Asset/index.ts:428](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L428)

▸ **isFrozen**(`callback`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../wiki/types#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:429](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L429)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Modify some properties of the Asset

**`throws`** if the passed values result in no changes being made to the Asset

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [modify.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetParams`](../wiki/api.procedures.types#modifyassetparams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:203](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L203)

___

### modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Assign a new primary issuance agent for the Asset

**`note`** this will create an [Authorization Request](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest) which has to be accepted by the `target` Identity.
  An [Account](../wiki/api.entities.Account.Account) or [Identity](../wiki/api.entities.Identity.Identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getone)

**`deprecated`** in favor of `inviteAgent`

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [modifyPrimaryIssuanceAgent.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyPrimaryIssuanceAgentParams`](../wiki/api.procedures.types.ModifyPrimaryIssuanceAgentParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:469](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L469)

___

### redeem

▸ **redeem**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Redeem (burn) an amount of this Asset's tokens

**`note`** tokens are removed from the caller's Default Portfolio

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [redeem.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RedeemTokensParams`](../wiki/api.procedures.types.RedeemTokensParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:495](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L495)

___

### removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Remove the primary issuance agent of the Asset

**`note`** if primary issuance agent is not set, Asset owner would be used by default

**`deprecated`**

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [removePrimaryIssuanceAgent.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:483](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L483)

___

### toHuman

▸ **toHuman**(): `string`

Return the Asset's ticker

#### Returns

`string`

#### Overrides

[Entity](../wiki/api.entities.Entity.Entity).[toHuman](../wiki/api.entities.Entity.Entity#tohuman)

#### Defined in

[api/entities/Asset/index.ts:667](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L667)

___

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
  by the recipient

**`note`** this will create [Authorization Request](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest) which has to be accepted by the `target` Identity.
  An [Account](../wiki/api.entities.Account.Account) or [Identity](../wiki/api.entities.Identity.Identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getone)

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [transferOwnership.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferAssetOwnershipParams`](../wiki/api.procedures.types.TransferAssetOwnershipParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:192](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L192)

___

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

Unfreeze transfers of the Asset

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [unfreeze.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`Asset`](../wiki/api.entities.Asset.Asset), [`Asset`](../wiki/api.entities.Asset.Asset), `unknown`[][]\>\>

#### Defined in

[api/entities/Asset/index.ts:419](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Asset/index.ts#L419)

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

[Entity](../wiki/api.entities.Entity.Entity).[generateUuid](../wiki/api.entities.Entity.Entity#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L14)

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

[Entity](../wiki/api.entities.Entity.Entity).[unserialize](../wiki/api.entities.Entity.Entity#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/entities/Entity.ts#L23)

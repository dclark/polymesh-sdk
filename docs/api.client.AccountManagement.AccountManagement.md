# Class: AccountManagement

[api/client/AccountManagement](../wiki/api.client.AccountManagement).AccountManagement

Handles functionality related to Account Management

## Table of contents

### Methods

- [freezeSecondaryAccounts](../wiki/api.client.AccountManagement.AccountManagement#freezesecondaryaccounts)
- [getAccount](../wiki/api.client.AccountManagement.AccountManagement#getaccount)
- [getAccountBalance](../wiki/api.client.AccountManagement.AccountManagement#getaccountbalance)
- [getSigningAccount](../wiki/api.client.AccountManagement.AccountManagement#getsigningaccount)
- [getSigningAccounts](../wiki/api.client.AccountManagement.AccountManagement#getsigningaccounts)
- [inviteAccount](../wiki/api.client.AccountManagement.AccountManagement#inviteaccount)
- [leaveIdentity](../wiki/api.client.AccountManagement.AccountManagement#leaveidentity)
- [modifyPermissions](../wiki/api.client.AccountManagement.AccountManagement#modifypermissions)
- [removeSecondaryAccounts](../wiki/api.client.AccountManagement.AccountManagement#removesecondaryaccounts)
- [revokePermissions](../wiki/api.client.AccountManagement.AccountManagement#revokepermissions)
- [subsidizeAccount](../wiki/api.client.AccountManagement.AccountManagement#subsidizeaccount)
- [unfreezeSecondaryAccounts](../wiki/api.client.AccountManagement.AccountManagement#unfreezesecondaryaccounts)

## Methods

### freezeSecondaryAccounts

▸ **freezeSecondaryAccounts**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Freeze all of the secondary Accounts in the signing Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the Accounts are unfrozen via [unfreezeSecondaryAccounts](../wiki/api.client.AccountManagement.AccountManagement#unfreezesecondaryaccounts)

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [freezeSecondaryAccounts.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:167](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L167)

___

### getAccount

▸ **getAccount**(`args`): [`Account`](../wiki/api.entities.Account.Account)

Return an Account instance from an address

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.address` | `string` |

#### Returns

[`Account`](../wiki/api.entities.Account.Account)

#### Defined in

[api/client/AccountManagement.ts:248](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L248)

___

### getAccountBalance

▸ **getAccountBalance**(`args?`): `Promise`<[`Balance`](../wiki/types.Balance)\>

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.account` | `string` \| [`Account`](../wiki/api.entities.Account.Account) | defaults to the signing Account |

#### Returns

`Promise`<[`Balance`](../wiki/types.Balance)\>

#### Defined in

[api/client/AccountManagement.ts:202](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L202)

▸ **getAccountBalance**(`callback`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../wiki/types#subcallback)<[`Balance`](../wiki/types.Balance)\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/client/AccountManagement.ts:203](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L203)

▸ **getAccountBalance**(`args`, `callback`): `Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.account` | `string` \| [`Account`](../wiki/api.entities.Account.Account) |
| `callback` | [`SubCallback`](../wiki/types#subcallback)<[`Balance`](../wiki/types.Balance)\> |

#### Returns

`Promise`<[`UnsubCallback`](../wiki/types#unsubcallback)\>

#### Defined in

[api/client/AccountManagement.ts:204](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L204)

___

### getSigningAccount

▸ **getSigningAccount**(): ``null`` \| [`Account`](../wiki/api.entities.Account.Account)

Return the signing Account, or null if no signing Account has been set

#### Returns

``null`` \| [`Account`](../wiki/api.entities.Account.Account)

#### Defined in

[api/client/AccountManagement.ts:257](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L257)

___

### getSigningAccounts

▸ **getSigningAccounts**(): `Promise`<[`Account`](../wiki/api.entities.Account.Account)[]\>

Return a list that contains all the signing Accounts associated to the SDK instance's Signing Manager

**`throws`** — if there is no Signing Manager attached to the SDK

#### Returns

`Promise`<[`Account`](../wiki/api.entities.Account.Account)[]\>

#### Defined in

[api/client/AccountManagement.ts:270](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L270)

___

### inviteAccount

▸ **inviteAccount**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

Send an invitation to an Account to join the signing Identity as a secondary Account

**`note`** this will create an [Authorization Request](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest) which has to be accepted by the `targetAccount`.
  An [Account](../wiki/api.entities.Account.Account) or [Identity](../wiki/api.entities.Identity.Identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getone)

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [inviteAccount.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InviteAccountParams`](../wiki/api.procedures.types.InviteAccountParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:157](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L157)

___

### leaveIdentity

▸ **leaveIdentity**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Disassociate the signing Account from its Identity. This operation can only be done if the signing Account is a secondary Account

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [leaveIdentity.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L109)

___

### modifyPermissions

▸ **modifyPermissions**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify all permissions of a list of secondary Accounts associated with the signing Identity

**`throws`** if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being modified

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [modifyPermissions.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifySignerPermissionsParams`](../wiki/api.procedures.types.ModifySignerPermissionsParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:143](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L143)

___

### removeSecondaryAccounts

▸ **removeSecondaryAccounts**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Remove a list of secondary Accounts associated with the signing Identity

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [removeSecondaryAccounts.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveSecondaryAccountsParams`](../wiki/api.procedures.types.RemoveSecondaryAccountsParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L119)

___

### revokePermissions

▸ **revokePermissions**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Revoke all permissions of a list of secondary Accounts associated with the signing Identity

**`throws`** if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being revoked

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [revokePermissions.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.secondaryAccounts` | [`Account`](../wiki/api.entities.Account.Account)[] |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:131](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L131)

___

### subsidizeAccount

▸ **subsidizeAccount**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

Send an Authorization Request to an Account to subsidize its transaction fees

**`note`** this will create an [Authorization Request](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest) which has to be accepted by the `beneficiary` Account.
  An [Account](../wiki/api.entities.Account.Account) or [Identity](../wiki/api.entities.Identity.Identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../wiki/api.entities.common.namespaces.Authorizations.Authorizations#getone)

**`note`** this method is of type [ProcedureMethod](../wiki/types.ProcedureMethod), which means you can call [subsidizeAccount.checkAuthorization](../wiki/types.ProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SubsidizeAccountParams`](../wiki/api.procedures.types.SubsidizeAccountParams) |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), [`AuthorizationRequest`](../wiki/api.entities.AuthorizationRequest.AuthorizationRequest), `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:191](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L191)

___

### unfreezeSecondaryAccounts

▸ **unfreezeSecondaryAccounts**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Unfreeze all of the secondary Accounts in the signing Identity. This will restore their permissions as they were before being frozen

**`note`** this method is of type [NoArgsProcedureMethod](../wiki/types.NoArgsProcedureMethod), which means you can call [unfreezeSecondaryAccounts.checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:177](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/api/client/AccountManagement.ts#L177)

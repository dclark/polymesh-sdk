[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/client/AccountManagement](../modules/api_client_AccountManagement.md) / AccountManagement

# Class: AccountManagement

[api/client/AccountManagement](../modules/api_client_AccountManagement.md).AccountManagement

Handles functionality related to Account Management

## Table of contents

### Methods

- [freezeSecondaryAccounts](api_client_AccountManagement.AccountManagement.md#freezesecondaryaccounts)
- [getAccount](api_client_AccountManagement.AccountManagement.md#getaccount)
- [getAccountBalance](api_client_AccountManagement.AccountManagement.md#getaccountbalance)
- [getSigningAccount](api_client_AccountManagement.AccountManagement.md#getsigningaccount)
- [getSigningAccounts](api_client_AccountManagement.AccountManagement.md#getsigningaccounts)
- [inviteAccount](api_client_AccountManagement.AccountManagement.md#inviteaccount)
- [leaveIdentity](api_client_AccountManagement.AccountManagement.md#leaveidentity)
- [modifyPermissions](api_client_AccountManagement.AccountManagement.md#modifypermissions)
- [removeSecondaryAccounts](api_client_AccountManagement.AccountManagement.md#removesecondaryaccounts)
- [revokePermissions](api_client_AccountManagement.AccountManagement.md#revokepermissions)
- [subsidizeAccount](api_client_AccountManagement.AccountManagement.md#subsidizeaccount)
- [unfreezeSecondaryAccounts](api_client_AccountManagement.AccountManagement.md#unfreezesecondaryaccounts)

## Methods

### freezeSecondaryAccounts

▸ **freezeSecondaryAccounts**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Freeze all of the secondary Accounts in the signing Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the Accounts are unfrozen via [unfreezeSecondaryAccounts](api_client_AccountManagement.AccountManagement.md#unfreezesecondaryaccounts)

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [freezeSecondaryAccounts.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:167](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L167)

___

### getAccount

▸ **getAccount**(`args`): [`Account`](api_entities_Account.Account.md)

Return an Account instance from an address

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.address` | `string` |

#### Returns

[`Account`](api_entities_Account.Account.md)

#### Defined in

[api/client/AccountManagement.ts:248](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L248)

___

### getAccountBalance

▸ **getAccountBalance**(`args?`): `Promise`<[`Balance`](../interfaces/types.Balance.md)\>

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.account` | `string` \| [`Account`](api_entities_Account.Account.md) | defaults to the signing Account |

#### Returns

`Promise`<[`Balance`](../interfaces/types.Balance.md)\>

#### Defined in

[api/client/AccountManagement.ts:202](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L202)

▸ **getAccountBalance**(`callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`Balance`](../interfaces/types.Balance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/client/AccountManagement.ts:203](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L203)

▸ **getAccountBalance**(`args`, `callback`): `Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.account` | `string` \| [`Account`](api_entities_Account.Account.md) |
| `callback` | [`SubCallback`](../modules/types.md#subcallback)<[`Balance`](../interfaces/types.Balance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../modules/types.md#unsubcallback)\>

#### Defined in

[api/client/AccountManagement.ts:204](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L204)

___

### getSigningAccount

▸ **getSigningAccount**(): ``null`` \| [`Account`](api_entities_Account.Account.md)

Return the signing Account, or null if no signing Account has been set

#### Returns

``null`` \| [`Account`](api_entities_Account.Account.md)

#### Defined in

[api/client/AccountManagement.ts:257](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L257)

___

### getSigningAccounts

▸ **getSigningAccounts**(): `Promise`<[`Account`](api_entities_Account.Account.md)[]\>

Return a list that contains all the signing Accounts associated to the SDK instance's Signing Manager

**`throws`** — if there is no Signing Manager attached to the SDK

#### Returns

`Promise`<[`Account`](api_entities_Account.Account.md)[]\>

#### Defined in

[api/client/AccountManagement.ts:270](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L270)

___

### inviteAccount

▸ **inviteAccount**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

Send an invitation to an Account to join the signing Identity as a secondary Account

**`note`** this will create an [Authorization Request](api_entities_AuthorizationRequest.AuthorizationRequest.md) which has to be accepted by the `targetAccount`.
  An [Account](api_entities_Account.Account.md) or [Identity](api_entities_Identity.Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [inviteAccount.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InviteAccountParams`](../interfaces/api_procedures_inviteAccount.InviteAccountParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:157](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L157)

___

### leaveIdentity

▸ **leaveIdentity**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Disassociate the signing Account from its Identity. This operation can only be done if the signing Account is a secondary Account

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [leaveIdentity.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L109)

___

### modifyPermissions

▸ **modifyPermissions**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Modify all permissions of a list of secondary Accounts associated with the signing Identity

**`throws`** if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being modified

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [modifyPermissions.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifySignerPermissionsParams`](../interfaces/api_procedures_modifySignerPermissions.ModifySignerPermissionsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:143](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L143)

___

### removeSecondaryAccounts

▸ **removeSecondaryAccounts**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Remove a list of secondary Accounts associated with the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [removeSecondaryAccounts.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveSecondaryAccountsParams`](../interfaces/api_procedures_removeSecondaryAccounts.RemoveSecondaryAccountsParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L119)

___

### revokePermissions

▸ **revokePermissions**(`args`, `opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Revoke all permissions of a list of secondary Accounts associated with the signing Identity

**`throws`** if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being revoked

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [revokePermissions.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.secondaryAccounts` | [`Account`](api_entities_Account.Account.md)[] |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:131](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L131)

___

### subsidizeAccount

▸ **subsidizeAccount**(`args`, `opts?`): `Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

Send an Authorization Request to an Account to subsidize its transaction fees

**`note`** this will create an [Authorization Request](api_entities_AuthorizationRequest.AuthorizationRequest.md) which has to be accepted by the `beneficiary` Account.
  An [Account](api_entities_Account.Account.md) or [Identity](api_entities_Identity.Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](api_entities_common_namespaces_Authorizations.Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](api_entities_common_namespaces_Authorizations.Authorizations.md#getone)

**`note`** this method is of type [ProcedureMethod](../interfaces/types.ProcedureMethod.md), which means you can call [subsidizeAccount.checkAuthorization](../interfaces/types.ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SubsidizeAccountParams`](../interfaces/api_procedures_subsidizeAccount.SubsidizeAccountParams.md) |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<[`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), [`AuthorizationRequest`](api_entities_AuthorizationRequest.AuthorizationRequest.md), `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:191](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L191)

___

### unfreezeSecondaryAccounts

▸ **unfreezeSecondaryAccounts**(`opts?`): `Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

Unfreeze all of the secondary Accounts in the signing Identity. This will restore their permissions as they were before being frozen

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md), which means you can call [unfreezeSecondaryAccounts.checkAuthorization](../interfaces/types.NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../interfaces/types.ProcedureOpts.md) |

#### Returns

`Promise`<`TransactionQueue`<`void`, `void`, `unknown`[][]\>\>

#### Defined in

[api/client/AccountManagement.ts:177](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/client/AccountManagement.ts#L177)

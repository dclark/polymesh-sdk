[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ProcedureAuthorizationStatus

# Interface: ProcedureAuthorizationStatus

[types](../modules/types.md).ProcedureAuthorizationStatus

## Table of contents

### Properties

- [accountFrozen](types.ProcedureAuthorizationStatus.md#accountfrozen)
- [agentPermissions](types.ProcedureAuthorizationStatus.md#agentpermissions)
- [noIdentity](types.ProcedureAuthorizationStatus.md#noidentity)
- [roles](types.ProcedureAuthorizationStatus.md#roles)
- [signerPermissions](types.ProcedureAuthorizationStatus.md#signerpermissions)

## Properties

### accountFrozen

• **accountFrozen**: `boolean`

whether the Account is frozen (i.e. can't perform any transactions)

#### Defined in

[types/index.ts:1226](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1226)

___

### agentPermissions

• **agentPermissions**: [`CheckPermissionsResult`](types.CheckPermissionsResult.md)<[`Identity`](../enums/types.SignerType.md#identity)\>

whether the Identity complies with all required Agent permissions

#### Defined in

[types/index.ts:1214](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1214)

___

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

#### Defined in

[types/index.ts:1231](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1231)

___

### roles

• **roles**: [`CheckRolesResult`](types.CheckRolesResult.md)

whether the Identity complies with all required Roles

#### Defined in

[types/index.ts:1222](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1222)

___

### signerPermissions

• **signerPermissions**: [`CheckPermissionsResult`](types.CheckPermissionsResult.md)<[`Account`](../enums/types.SignerType.md#account)\>

whether the Account complies with all required Signer permissions

#### Defined in

[types/index.ts:1218](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1218)

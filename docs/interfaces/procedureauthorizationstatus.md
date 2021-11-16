# Interface: ProcedureAuthorizationStatus

## Hierarchy

* **ProcedureAuthorizationStatus**

## Index

### Properties

* [accountFrozen](procedureauthorizationstatus.md#accountfrozen)
* [agentPermissions](procedureauthorizationstatus.md#agentpermissions)
* [noIdentity](procedureauthorizationstatus.md#noidentity)
* [roles](procedureauthorizationstatus.md#roles)
* [signerPermissions](procedureauthorizationstatus.md#signerpermissions)

## Properties

###  accountFrozen

• **accountFrozen**: *boolean*

*Defined in [src/types/index.ts:1025](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1025)*

whether the Account is frozen (i.e. can't perform any transactions)

___

###  agentPermissions

• **agentPermissions**: *boolean*

*Defined in [src/types/index.ts:1013](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1013)*

whether the Identity complies with all required Agent permissions

___

###  noIdentity

• **noIdentity**: *boolean*

*Defined in [src/types/index.ts:1030](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1030)*

true only if the Procedure requires an Identity but the current Account
  doesn't have one associated

___

###  roles

• **roles**: *boolean*

*Defined in [src/types/index.ts:1021](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1021)*

whether the Identity complies with all required Roles

___

###  signerPermissions

• **signerPermissions**: *boolean*

*Defined in [src/types/index.ts:1017](https://github.com/PolymathNetwork/polymesh-sdk/blob/da0f7fd7/src/types/index.ts#L1017)*

whether the Account complies with all required Signer permissions

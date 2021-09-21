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

*Defined in [src/types/index.ts:1041](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1041)*

whether the Account is frozen (i.e. can't perform any transactions)

___

###  agentPermissions

• **agentPermissions**: *boolean*

*Defined in [src/types/index.ts:1029](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1029)*

whether the Identity complies with all required Agent permissions

___

###  noIdentity

• **noIdentity**: *boolean*

*Defined in [src/types/index.ts:1046](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1046)*

true only if the Procedure requires an Identity but the current Account
  doesn't have one associated

___

###  roles

• **roles**: *boolean*

*Defined in [src/types/index.ts:1037](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1037)*

whether the Identity complies with all required Roles

___

###  signerPermissions

• **signerPermissions**: *boolean*

*Defined in [src/types/index.ts:1033](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1033)*

whether the Account complies with all required Signer permissions

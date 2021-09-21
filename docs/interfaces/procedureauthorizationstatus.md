# ProcedureAuthorizationStatus

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

### accountFrozen

• **accountFrozen**: _boolean_

_Defined in_ [_src/types/index.ts:1041_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1041)

whether the Account is frozen \(i.e. can't perform any transactions\)

### agentPermissions

• **agentPermissions**: _boolean_

_Defined in_ [_src/types/index.ts:1029_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1029)

whether the Identity complies with all required Agent permissions

### noIdentity

• **noIdentity**: _boolean_

_Defined in_ [_src/types/index.ts:1046_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1046)

true only if the Procedure requires an Identity but the current Account doesn't have one associated

### roles

• **roles**: _boolean_

_Defined in_ [_src/types/index.ts:1037_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1037)

whether the Identity complies with all required Roles

### signerPermissions

• **signerPermissions**: _boolean_

_Defined in_ [_src/types/index.ts:1033_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1033)

whether the Account complies with all required Signer permissions


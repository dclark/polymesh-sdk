# ModifyPrimaryIssuanceAgentParams

## Hierarchy

* **ModifyPrimaryIssuanceAgentParams**

## Index

### Properties

* [requestExpiry](modifyprimaryissuanceagentparams.md#optional-requestexpiry)
* [target](modifyprimaryissuanceagentparams.md#target)

## Properties

### `Optional` requestExpiry

• **requestExpiry**? : [_Date_](../enums/transactionargumenttype.md#date)

_Defined in_ [_src/api/procedures/modifyPrimaryIssuanceAgent.ts:25_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L25)

date at which the authorization request to modify the primary issuance agent expires \(optional, never expires if a date is not provided\)

### target

• **target**: _string \|_ [_Identity_](../classes/identity.md)

_Defined in_ [_src/api/procedures/modifyPrimaryIssuanceAgent.ts:21_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L21)

identity to be set as primary issuance agent


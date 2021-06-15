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

_Defined in_ [_src/api/procedures/modifyPrimaryIssuanceAgent.ts:19_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L19)

date at which the authorization request to modify the primary issuance agent expires \(optional, never expires if a date is not provided\)

### target

• **target**: _string \|_ [_Identity_](../classes/identity.md)

_Defined in_ [_src/api/procedures/modifyPrimaryIssuanceAgent.ts:15_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L15)

identity to be set as primary issuance agent


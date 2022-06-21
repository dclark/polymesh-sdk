[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/procedures/modifyPrimaryIssuanceAgent](../modules/api_procedures_modifyPrimaryIssuanceAgent.md) / ModifyPrimaryIssuanceAgentParams

# Interface: ModifyPrimaryIssuanceAgentParams

[api/procedures/modifyPrimaryIssuanceAgent](../modules/api_procedures_modifyPrimaryIssuanceAgent.md).ModifyPrimaryIssuanceAgentParams

## Table of contents

### Properties

- [requestExpiry](api_procedures_modifyPrimaryIssuanceAgent.ModifyPrimaryIssuanceAgentParams.md#requestexpiry)
- [target](api_procedures_modifyPrimaryIssuanceAgent.ModifyPrimaryIssuanceAgentParams.md#target)

## Properties

### requestExpiry

• `Optional` **requestExpiry**: `Date`

date at which the authorization request to modify the primary issuance agent expires (optional, never expires if a date is not provided)

#### Defined in

[api/procedures/modifyPrimaryIssuanceAgent.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L19)

___

### target

• **target**: `string` \| [`Identity`](../classes/api_entities_Identity.Identity.md)

Identity to be set as primary issuance agent

#### Defined in

[api/procedures/modifyPrimaryIssuanceAgent.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L15)

# SecurityToken

Class used to manage all the Security Token functionality

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **SecurityToken**

## Index

### Properties

* [compliance](securitytoken.md#compliance)
* [context](securitytoken.md#protected-context)
* [did](securitytoken.md#did)
* [documents](securitytoken.md#documents)
* [freeze](securitytoken.md#freeze)
* [issuance](securitytoken.md#issuance)
* [modify](securitytoken.md#modify)
* [modifyPrimaryIssuanceAgent](securitytoken.md#modifyprimaryissuanceagent)
* [offerings](securitytoken.md#offerings)
* [redeem](securitytoken.md#redeem)
* [removePrimaryIssuanceAgent](securitytoken.md#removeprimaryissuanceagent)
* [settlements](securitytoken.md#settlements)
* [ticker](securitytoken.md#ticker)
* [tokenHolders](securitytoken.md#tokenholders)
* [transferOwnership](securitytoken.md#transferownership)
* [transferRestrictions](securitytoken.md#transferrestrictions)
* [unfreeze](securitytoken.md#unfreeze)
* [uuid](securitytoken.md#uuid)

### Methods

* [createdAt](securitytoken.md#createdat)
* [currentFundingRound](securitytoken.md#currentfundinground)
* [details](securitytoken.md#details)
* [getIdentifiers](securitytoken.md#getidentifiers)
* [investorCount](securitytoken.md#investorcount)
* [isFrozen](securitytoken.md#isfrozen)
* [generateUuid](securitytoken.md#static-generateuuid)
* [unserialize](securitytoken.md#static-unserialize)

## Properties

### compliance

• **compliance**: _Compliance_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:86_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L86)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L74)

identity id of the Security Token

### documents

• **documents**: [_Documents_](documents.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:82_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L82)

### freeze

• **freeze**: _ProcedureMethod‹void,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:322_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L322)

Freezes transfers and minting of the Security Token

**`note`** required role:

* Security Token Owner

### issuance

• **issuance**: [_Issuance_](issuance.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:85_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L85)

### modify

• **modify**: _ProcedureMethod‹_[_ModifyTokenParams_](../globals.md#modifytokenparams)_,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:157_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L157)

Modify some properties of the Security Token

**`param`** makes an indivisible token divisible

**`throws`** if the passed values result in no changes being made to the token

**`note`** required role:

* Security Token Owner

### modifyPrimaryIssuanceAgent

• **modifyPrimaryIssuanceAgent**: _ProcedureMethod‹_[_ModifyPrimaryIssuanceAgentParams_](../interfaces/modifyprimaryissuanceagentparams.md)_, void›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:378_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L378)

Assign a new primary issuance agent for the Security Token

**`param`** identity to be set as primary issuance agent

**`param`** date at which the authorization request to modify the primary issuance agent expires \(optional, never expires if a date is not provided\)

**`note`** this may create AuthorizationRequest which have to be accepted by the corresponding Account. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Security Token Owner

### offerings

• **offerings**: [_Offerings_](offerings.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:88_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L88)

### redeem

• **redeem**: _ProcedureMethod‹_[_RedeemTokenParams_](../interfaces/redeemtokenparams.md)_, void›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:400_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L400)

Redeem \(burn\) an amount of this Security Token

**`note`** Tokens are removed from the Primary Issuance Agent's Default Portfolio. If the Security Token has no Primary Issuance Agent, funds are removed from the owner's Default Portfolio instead

**`note`** required role:

* Security Token Primary Issuance Agent

### removePrimaryIssuanceAgent

• **removePrimaryIssuanceAgent**: _ProcedureMethod‹void, void›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:388_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L388)

Remove the primary issuance agent of the Security Token

**`note`** if primary issuance agent is not set, Security Token owner would be used by default

**`note`** required role:

* Security Token Owner

### settlements

• **settlements**: [_Settlements_](settlements.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:83_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L83)

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L79)

ticker of the Security Token

### tokenHolders

• **tokenHolders**: [_TokenHolders_](tokenholders.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:84_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L84)

### transferOwnership

• **transferOwnership**: _ProcedureMethod‹_[_TransferTokenOwnershipParams_](../interfaces/transfertokenownershipparams.md)_,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:146_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L146)

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted by the destinatary

**`param`** date at which the authorization request for transfer expires \(optional\)

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:

* Security Token Owner

### transferRestrictions

• **transferRestrictions**: [_TransferRestrictions_](transferrestrictions.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:87_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L87)

### unfreeze

• **unfreeze**: _ProcedureMethod‹void,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:330_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L330)

Unfreeze transfers and minting of the Security Token

**`note`** required role:

* Security Token Owner

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L46)

## Methods

### createdAt

▸ **createdAt**\(\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:292_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L292)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### currentFundingRound

▸ **currentFundingRound**\(\): _Promise‹string›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:222_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L222)

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **currentFundingRound**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:223_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L223)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### details

▸ **details**\(\): _Promise‹_[_SecurityTokenDetails_](../interfaces/securitytokendetails.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:164_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L164)

Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecurityTokenDetails_](../interfaces/securitytokendetails.md)_›_

▸ **details**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:165_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L165)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getIdentifiers

▸ **getIdentifiers**\(\): _Promise‹_[_TokenIdentifier_](../interfaces/tokenidentifier.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:256_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L256)

Retrive the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** _Promise‹_[_TokenIdentifier_](../interfaces/tokenidentifier.md)_\[\]›_

▸ **getIdentifiers**\(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:257_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L257)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### investorCount

▸ **investorCount**\(\): _Promise‹number›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:411_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L411)

Retrieve the amount of unique investors that hold this Security Token

**`note`** this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances of this token in two or more different Identities, but they all have Investor Uniqueness Claims with the same Scope ID, then they will only be counted once for the purposes of this result

**`note`** can be subscribed to

**Returns:** _Promise‹number›_

▸ **investorCount**\(`callback`: [SubCallback](../globals.md#subcallback)‹number›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:412_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L412)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹number› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### isFrozen

▸ **isFrozen**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:337_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L337)

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** _Promise‹boolean›_

▸ **isFrozen**\(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:338_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/index.ts#L338)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


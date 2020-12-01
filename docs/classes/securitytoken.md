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
* [issuance](securitytoken.md#issuance)
* [settlements](securitytoken.md#settlements)
* [ticker](securitytoken.md#ticker)
* [tokenHolders](securitytoken.md#tokenholders)
* [uuid](securitytoken.md#uuid)

### Methods

* [createdAt](securitytoken.md#createdat)
* [currentFundingRound](securitytoken.md#currentfundinground)
* [details](securitytoken.md#details)
* [freeze](securitytoken.md#freeze)
* [getIdentifiers](securitytoken.md#getidentifiers)
* [isFrozen](securitytoken.md#isfrozen)
* [modify](securitytoken.md#modify)
* [modifyPrimaryIssuanceAgent](securitytoken.md#modifyprimaryissuanceagent)
* [removePrimaryIssuanceAgent](securitytoken.md#removeprimaryissuanceagent)
* [transferOwnership](securitytoken.md#transferownership)
* [unfreeze](securitytoken.md#unfreeze)
* [generateUuid](securitytoken.md#static-generateuuid)
* [unserialize](securitytoken.md#static-unserialize)

## Properties

### compliance

• **compliance**: _Compliance_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L79)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:67_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L67)

identity id of the Security Token

### documents

• **documents**: [_Documents_](documents.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:75_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L75)

### issuance

• **issuance**: [_Issuance_](issuance.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:78_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L78)

### settlements

• **settlements**: [_Settlements_](settlements.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:76_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L76)

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:72_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L72)

ticker of the Security Token

### tokenHolders

• **tokenHolders**: [_TokenHolders_](tokenholders.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:77_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L77)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L46)

## Methods

### createdAt

▸ **createdAt**\(\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:257_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L257)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### currentFundingRound

▸ **currentFundingRound**\(\): _Promise‹string›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:187_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L187)

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **currentFundingRound**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:188_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L188)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### details

▸ **details**\(\): _Promise‹_[_SecurityTokenDetails_](../interfaces/securitytokendetails.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:132_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L132)

Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecurityTokenDetails_](../interfaces/securitytokendetails.md)_›_

▸ **details**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:133_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L133)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### freeze

▸ **freeze**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:284_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L284)

Freezes transfers and minting of the Security Token

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### getIdentifiers

▸ **getIdentifiers**\(\): _Promise‹_[_TokenIdentifier_](../interfaces/tokenidentifier.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:221_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L221)

Retrive the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** _Promise‹_[_TokenIdentifier_](../interfaces/tokenidentifier.md)_\[\]›_

▸ **getIdentifiers**\(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:222_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L222)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### isFrozen

▸ **isFrozen**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:302_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L302)

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** _Promise‹boolean›_

▸ **isFrozen**\(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:303_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L303)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### modify

▸ **modify**\(`args`: [ModifyTokenParams](../globals.md#modifytokenparams)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:122_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L122)

Modify some properties of the Security Token

**`throws`** if the passed values result in no changes being made to the token

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyTokenParams](../globals.md#modifytokenparams) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**\(`args`: [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:340_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L340)

Assign a new primary issuance agent for the Security Token

**`note`** this may create AuthorizationRequest which have to be accepted by the corresponding Account. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:352_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L352)

Remove the primary issuance agent of the Security Token

**`note`** if primary issuance agent is not set, Security Token owner would be used by default

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### transferOwnership

▸ **transferOwnership**\(`args`: [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:109_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L109)

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by the corresponding [Accounts](account.md) and/or [Identities](../enums/scopetype.md#identity). An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### unfreeze

▸ **unfreeze**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:292_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/SecurityToken/index.ts#L292)

Unfreeze transfers and minting of the Security Token

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


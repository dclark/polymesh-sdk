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

• **compliance**: [_Compliance_](compliance.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:81_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L81)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L48)

### did

• **did**: _string_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:69_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L69)

identity id of the Security Token

### documents

• **documents**: [_Documents_](documents.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:77_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L77)

### issuance

• **issuance**: [_Issuance_](issuance.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:80_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L80)

### settlements

• **settlements**: [_Settlements_](settlements.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:78_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L78)

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:74_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L74)

ticker of the Security Token

### tokenHolders

• **tokenHolders**: [_TokenHolders_](tokenholders.md)

_Defined in_ [_src/api/entities/SecurityToken/index.ts:79_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L79)

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L46)

## Methods

### createdAt

▸ **createdAt**\(\): _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:259_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L259)

Retrieve the identifier data \(block number, date and event index\) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** _Promise‹_[_EventIdentifier_](../interfaces/eventidentifier.md) _\| null›_

### currentFundingRound

▸ **currentFundingRound**\(\): _Promise‹string›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:189_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L189)

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** _Promise‹string›_

▸ **currentFundingRound**\(`callback`: [SubCallback](../globals.md#subcallback)‹string›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:190_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L190)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### details

▸ **details**\(\): _Promise‹_[_SecurityTokenDetails_](../interfaces/securitytokendetails.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:134_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L134)

Retrieve the Security Token's name, total supply, whether it is divisible or not and the Identity of the owner

**`note`** can be subscribed to

**Returns:** _Promise‹_[_SecurityTokenDetails_](../interfaces/securitytokendetails.md)_›_

▸ **details**\(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:135_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L135)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### freeze

▸ **freeze**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:286_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L286)

Freezes transfers and minting of the Security Token

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### getIdentifiers

▸ **getIdentifiers**\(\): _Promise‹_[_TokenIdentifier_](../interfaces/tokenidentifier.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:223_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L223)

Retrive the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** _Promise‹_[_TokenIdentifier_](../interfaces/tokenidentifier.md)_\[\]›_

▸ **getIdentifiers**\(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:224_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L224)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### isFrozen

▸ **isFrozen**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:304_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L304)

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** _Promise‹boolean›_

▸ **isFrozen**\(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:305_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L305)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### modify

▸ **modify**\(`args`: [ModifyTokenParams](../globals.md#modifytokenparams)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:124_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L124)

Modify some properties of the Security Token

**`throws`** if the passed values result in no changes being made to the token

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyTokenParams](../globals.md#modifytokenparams) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**\(`args`: [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:342_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L342)

Assign a new primary issuance agent for the Security Token

**`note`** this may create AuthorizationRequest which have to be accepted by the corresponding Account. An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:354_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L354)

Remove the primary issuance agent of the Security Token

**`note`** if primary issuance agent is not set, Security Token owner would be used by default

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### transferOwnership

▸ **transferOwnership**\(`args`: [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:111_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L111)

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can fetch its pending Authorization Requests by calling `authorizations.getReceived`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### unfreeze

▸ **unfreeze**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/index.ts:294_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/SecurityToken/index.ts#L294)

Unfreeze transfers and minting of the Security Token

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/1221e467/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


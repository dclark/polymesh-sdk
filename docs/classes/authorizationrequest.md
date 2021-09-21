# AuthorizationRequest

Represents a request made by an Identity to another Identity \(or account\) for some sort of authorization. This has multiple uses. For example, if Alice wants to transfer ownership of her asset ALICETOKEN to Bob, an authorization request gets emitted to Bob, who then has to accept it in order for the ownership transfer to be complete

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **AuthorizationRequest**

## Index

### Properties

* [authId](authorizationrequest.md#authid)
* [context](authorizationrequest.md#protected-context)
* [data](authorizationrequest.md#data)
* [expiry](authorizationrequest.md#expiry)
* [issuer](authorizationrequest.md#issuer)
* [target](authorizationrequest.md#target)
* [uuid](authorizationrequest.md#uuid)

### Methods

* [accept](authorizationrequest.md#accept)
* [exists](authorizationrequest.md#exists)
* [isEqual](authorizationrequest.md#isequal)
* [isExpired](authorizationrequest.md#isexpired)
* [remove](authorizationrequest.md#remove)
* [toJson](authorizationrequest.md#tojson)
* [generateUuid](authorizationrequest.md#static-generateuuid)
* [unserialize](authorizationrequest.md#static-unserialize)

## Properties

### authId

• **authId**: _BigNumber_

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:95_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L95)

internal identifier for the request \(used to accept/reject/cancel\)

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L48)

### data

• **data**: [_Authorization_](../globals.md#authorization)

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:84_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L84)

authorization request data corresponding to type of authorization

| Type | Data |
| :--- | :--- |
| Add Relayer Paying Key | Beneficiary, Relayer, Allowance |
| Become Agent | Permission Group |
| Attest Primary Key Rotation | DID |
| Rotate Primary Key | DID |
| Transfer Ticker | Ticker |
| Add MultiSig Signer | Account |
| Transfer Token Ownership | Ticker |
| Join Identity | DID |
| Portfolio Custody | Portfolio |

### expiry

• **expiry**: _Date \| null_

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:90_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L90)

date at which the authorization request expires and can no longer be accepted. At this point, a new authorization request must be emitted. Null if the request never expires

### issuer

• **issuer**: [_Identity_](identity.md)

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:67_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L67)

Identity that emitted the request

### target

• **target**: [_Signer_](../globals.md#signer)

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:62_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L62)

Identity or Account to which the request was emitted

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L46)

## Methods

### accept

▸ **accept**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:162_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L162)

Accept the authorization request. You must be the target of the request to be able to accept it

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `accept.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### exists

▸ **exists**\(\): _Promise‹boolean›_

_Overrides_ [_Entity_](entity.md)_._[_exists_](entity.md#abstract-exists)

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:191_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L191)

Determine whether this Authorization Request exists on chain

**Returns:** _Promise‹boolean›_

### isEqual

▸ **isEqual**\(`entity`: [Entity](entity.md)‹unknown, unknown›\): _boolean_

_Inherited from_ [_Entity_](entity.md)_._[_isEqual_](entity.md#isequal)

_Defined in_ [_src/api/entities/Entity.ts:61_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

**Parameters:**

| Name | Type |
| :--- | :--- |
| `entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** _boolean_

### isExpired

▸ **isExpired**\(\): _boolean_

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:182_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L182)

Returns whether the Authorization Request has expired

**Returns:** _boolean_

### remove

▸ **remove**\(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:175_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L175)

Remove the authorization request

* If you are the request issuer, this will cancel the authorization
* If you are the request target, this will reject the authorization

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `remove.checkAuthorization` on it to see whether the Current Account has the required permissions to run it

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | void |
| `opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### toJson

▸ **toJson**\(\): [_HumanReadable_](../interfaces/humanreadable.md)

_Overrides_ [_Entity_](entity.md)_._[_toJson_](entity.md#abstract-tojson)

_Defined in_ [_src/api/entities/AuthorizationRequest.ts:208_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/AuthorizationRequest.ts#L208)

Return the Authorization's static data

**Returns:** [_HumanReadable_](../interfaces/humanreadable.md)

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `identifiers` | Identifiers |  |

**Returns:** _string_

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›\(`serialized`: string\): _Identifiers_

_Inherited from_ [_Entity_](entity.md)_._[_unserialize_](entity.md#static-unserialize)

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


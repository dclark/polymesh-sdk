# Sto

Represents a Security Token Offering in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Sto**

## Index

### Properties

* [close](sto.md#close)
* [context](sto.md#protected-context)
* [freeze](sto.md#freeze)
* [id](sto.md#id)
* [modifyTimes](sto.md#modifytimes)
* [ticker](sto.md#ticker)
* [unfreeze](sto.md#unfreeze)
* [uuid](sto.md#uuid)

### Methods

* [details](sto.md#details)
* [getInvestments](sto.md#getinvestments)
* [generateUuid](sto.md#static-generateuuid)
* [unserialize](sto.md#static-unserialize)

## Properties

### close

• **close**: _ProcedureMethod‹void, void›_

_Defined in_ [_src/api/entities/Sto/index.ts:128_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Sto/index.ts#L128)

Close the STO

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L48)

### freeze

• **freeze**: _ProcedureMethod‹void,_ [_Sto_](sto.md)_›_

_Defined in_ [_src/api/entities/Sto/index.ts:136_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Sto/index.ts#L136)

Freeze the STO

**`note`** required role:

* Security Token Primary Issuance Agent

### id

• **id**: _BigNumber_

_Defined in_ [_src/api/entities/Sto/index.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Sto/index.ts#L46)

identifier number of the Offering

### modifyTimes

• **modifyTimes**: _ProcedureMethod‹_[_ModifyStoTimesParams_](../globals.md#modifystotimesparams)_, void›_

_Defined in_ [_src/api/entities/Sto/index.ts:160_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Sto/index.ts#L160)

Modify the start/end time of the STO

**`param`** new start time \(optional, will be left the same if not passed\)

**`param`** new end time \(optional, will be left th same if not passed\). A null value means the STO doesn't end

**`throws`** if:

* Trying to modify the start time on an STO that already started
* Trying to modify anything on an STO that already ended
* Trying to change start or end time to a past date

**`note`** required role:

* Security Token Primary Issuance Agent

### ticker

• **ticker**: _string_

_Defined in_ [_src/api/entities/Sto/index.ts:51_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Sto/index.ts#L51)

ticker of the Security Token being offered

### unfreeze

• **unfreeze**: _ProcedureMethod‹void,_ [_Sto_](sto.md)_›_

_Defined in_ [_src/api/entities/Sto/index.ts:144_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Sto/index.ts#L144)

Unfreeze the STO

**`note`** required role:

* Security Token Primary Issuance Agent

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Entity.ts#L46)

## Methods

### details

▸ **details**\(\): _Promise‹_[_StoDetails_](../interfaces/stodetails.md)_›_

_Defined in_ [_src/api/entities/Sto/index.ts:84_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Sto/index.ts#L84)

Retrieve the STO's details

**`note`** can be subscribed to

**Returns:** _Promise‹_[_StoDetails_](../interfaces/stodetails.md)_›_

▸ **details**\(`callback`: [SubCallback](../globals.md#subcallback)‹[StoDetails](../interfaces/stodetails.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/Sto/index.ts:85_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Sto/index.ts#L85)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[StoDetails](../interfaces/stodetails.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### getInvestments

▸ **getInvestments**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_Investment_](../interfaces/investment.md)_››_

_Defined in_ [_src/api/entities/Sto/index.ts:171_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Sto/index.ts#L171)

Retrieve all investments made on this STO

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_Investment_](../interfaces/investment.md)_››_

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


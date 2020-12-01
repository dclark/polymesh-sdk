# Class: Venue

Represents a Venue through which settlements are handled

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Venue**

## Index

### Properties

* [context](venue.md#protected-context)
* [id](venue.md#id)
* [uuid](venue.md#uuid)

### Methods

* [addInstruction](venue.md#addinstruction)
* [details](venue.md#details)
* [getPendingInstructions](venue.md#getpendinginstructions)
* [generateUuid](venue.md#static-generateuuid)
* [unserialize](venue.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Venue/index.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Venue/index.ts#L39)*

Identifier number of the venue

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L46)*

## Methods

###  addInstruction

▸ **addInstruction**(`args`: [AddInstructionParams](../interfaces/addinstructionparams.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)››*

*Defined in [src/api/entities/Venue/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Venue/index.ts#L111)*

Creates a settlement instruction in this Venue

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddInstructionParams](../interfaces/addinstructionparams.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)››*

___

###  details

▸ **details**(): *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

*Defined in [src/api/entities/Venue/index.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Venue/index.ts#L55)*

Retrieve information specific to this venue

**Returns:** *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/Venue/index.ts:80](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Venue/index.ts#L80)*

Retrieve all pending Instructions in this Venue

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

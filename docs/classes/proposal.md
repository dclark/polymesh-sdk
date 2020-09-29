# Class: Proposal

Represents a Polymesh Improvement Proposal (PIP)

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers›

  ↳ **Proposal**

## Index

### Properties

* [context](proposal.md#protected-context)
* [pipId](proposal.md#pipid)
* [uuid](proposal.md#uuid)

### Methods

* [cancel](proposal.md#cancel)
* [edit](proposal.md#edit)
* [getDetails](proposal.md#getdetails)
* [getStage](proposal.md#getstage)
* [getVotes](proposal.md#getvotes)
* [identityHasVoted](proposal.md#identityhasvoted)
* [minimumBondedAmount](proposal.md#minimumbondedamount)
* [vote](proposal.md#vote)
* [generateUuid](proposal.md#static-generateuuid)
* [unserialize](proposal.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L48)*

___

###  pipId

• **pipId**: *BigNumber*

*Defined in [src/api/entities/Proposal/index.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L51)*

internal identifier

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L46)*

## Methods

###  cancel

▸ **cancel**(): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Proposal/index.ts:154](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L154)*

Cancel the proposal

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  edit

▸ **edit**(`args`: [EditProposalParams](../globals.md#editproposalparams)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Proposal/index.ts:146](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L146)*

Edit a proposal

**Parameters:**

Name | Type |
------ | ------ |
`args` | [EditProposalParams](../globals.md#editproposalparams) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  getDetails

▸ **getDetails**(): *Promise‹[ProposalDetails](../interfaces/proposaldetails.md)›*

*Defined in [src/api/entities/Proposal/index.ts:162](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L162)*

Retrieve the proposal details

**Returns:** *Promise‹[ProposalDetails](../interfaces/proposaldetails.md)›*

___

###  getStage

▸ **getStage**(): *Promise‹[ProposalStage](../enums/proposalstage.md)›*

*Defined in [src/api/entities/Proposal/index.ts:179](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L179)*

Retrieve the current stage of the proposal

**Returns:** *Promise‹[ProposalStage](../enums/proposalstage.md)›*

___

###  getVotes

▸ **getVotes**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ProposalVote](../interfaces/proposalvote.md)››*

*Defined in [src/api/entities/Proposal/index.ts:102](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L102)*

Retrieve all the votes of the proposal. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`orderBy?` | ProposalVotesOrderByInput | the order in witch the votes are returned |
`size?` | undefined &#124; number | number of votes in each requested page (default: 25) |
`start?` | undefined &#124; number | page offset  |
`vote?` | undefined &#124; false &#124; true | vote decision (positive or negative) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ProposalVote](../interfaces/proposalvote.md)››*

___

###  identityHasVoted

▸ **identityHasVoted**(`args?`: undefined | object): *Promise‹boolean›*

*Defined in [src/api/entities/Proposal/index.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L71)*

Check if an Identity has voted on the proposal

**`note`** uses the middleware

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

###  minimumBondedAmount

▸ **minimumBondedAmount**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/Proposal/index.ts:227](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L227)*

Retrieve the minimum amount of POLYX that must be bonded by aye votes for the proposal to be considered valid

**Returns:** *Promise‹BigNumber›*

___

###  vote

▸ **vote**(`args`: [VoteOnProposalParams](../globals.md#voteonproposalparams)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Proposal/index.ts:219](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L219)*

Vote on the proposal

**Parameters:**

Name | Type |
------ | ------ |
`args` | [VoteOnProposalParams](../globals.md#voteonproposalparams) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*

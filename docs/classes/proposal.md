# Proposal

Represents a Polymesh Improvement Proposal \(PIP\)

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

• **context**: [_Context_](context.md)

_Inherited from_ [_Entity_](entity.md)_._[_context_](entity.md#protected-context)

_Defined in_ [_src/api/entities/Entity.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L48)

### pipId

• **pipId**: _BigNumber_

_Defined in_ [_src/api/entities/Proposal/index.ts:51_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L51)

internal identifier

### uuid

• **uuid**: _string_

_Inherited from_ [_Entity_](entity.md)_._[_uuid_](entity.md#uuid)

_Defined in_ [_src/api/entities/Entity.ts:46_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L46)

## Methods

### cancel

▸ **cancel**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Proposal/index.ts:154_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L154)

Cancel the proposal

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### edit

▸ **edit**\(`args`: [EditProposalParams](../globals.md#editproposalparams)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Proposal/index.ts:146_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L146)

Edit a proposal

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [EditProposalParams](../globals.md#editproposalparams) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### getDetails

▸ **getDetails**\(\): _Promise‹_[_ProposalDetails_](../interfaces/proposaldetails.md)_›_

_Defined in_ [_src/api/entities/Proposal/index.ts:162_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L162)

Retrieve the proposal details

**Returns:** _Promise‹_[_ProposalDetails_](../interfaces/proposaldetails.md)_›_

### getStage

▸ **getStage**\(\): _Promise‹_[_ProposalStage_](../enums/proposalstage.md)_›_

_Defined in_ [_src/api/entities/Proposal/index.ts:179_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L179)

Retrieve the current stage of the proposal

**Returns:** _Promise‹_[_ProposalStage_](../enums/proposalstage.md)_›_

### getVotes

▸ **getVotes**\(`opts`: object\): _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ProposalVote_](../interfaces/proposalvote.md)_››_

_Defined in_ [_src/api/entities/Proposal/index.ts:102_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L102)

Retrieve all the votes of the proposal. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `orderBy?` | ProposalVotesOrderByInput | the order in witch the votes are returned |
| `size?` | undefined \| number | number of votes in each requested page \(default: 25\) |
| `start?` | undefined \| number | page offset |
| `vote?` | undefined \| false \| true | vote decision \(positive or negative\) |

**Returns:** _Promise‹_[_ResultSet_](../interfaces/resultset.md)_‹_[_ProposalVote_](../interfaces/proposalvote.md)_››_

### identityHasVoted

▸ **identityHasVoted**\(`args?`: undefined \| object\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/Proposal/index.ts:71_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L71)

Check if an Identity has voted on the proposal

**`note`** uses the middleware

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args?` | undefined \| object |

**Returns:** _Promise‹boolean›_

### minimumBondedAmount

▸ **minimumBondedAmount**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/api/entities/Proposal/index.ts:227_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L227)

Retrieve the minimum amount of POLYX that must be bonded by aye votes for the proposal to be considered valid

**Returns:** _Promise‹BigNumber›_

### vote

▸ **vote**\(`args`: [VoteOnProposalParams](../globals.md#voteonproposalparams)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

_Defined in_ [_src/api/entities/Proposal/index.ts:219_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Proposal/index.ts#L219)

Vote on the proposal

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [VoteOnProposalParams](../globals.md#voteonproposalparams) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹void››_

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›\(`identifiers`: Identifiers\): _string_

_Inherited from_ [_Entity_](entity.md)_._[_generateUuid_](entity.md#static-generateuuid)

_Defined in_ [_src/api/entities/Entity.ts:14_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L14)

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

_Defined in_ [_src/api/entities/Entity.ts:23_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**: _object_

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `serialized` | string | UUID to unserialize |

**Returns:** _Identifiers_


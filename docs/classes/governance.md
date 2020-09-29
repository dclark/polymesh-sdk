# Governance

Handles all Governance related functionality

## Hierarchy

* **Governance**

## Index

### Methods

* [createProposal](governance.md#createproposal)
* [getGovernanceCommitteeMembers](governance.md#getgovernancecommitteemembers)
* [getProposals](governance.md#getproposals)
* [getTransactionArguments](governance.md#gettransactionarguments)
* [minimumBondedAmount](governance.md#minimumbondedamount)
* [minimumProposalDeposit](governance.md#minimumproposaldeposit)
* [proposalTimeFrames](governance.md#proposaltimeframes)

## Methods

### createProposal

▸ **createProposal**\(`args`: [CreateProposalParams](../interfaces/createproposalparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Proposal_](proposal.md)_››_

_Defined in_ [_src/Governance.ts:127_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L127)

Create a proposal

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [CreateProposalParams](../interfaces/createproposalparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_Proposal_](proposal.md)_››_

### getGovernanceCommitteeMembers

▸ **getGovernanceCommitteeMembers**\(\): _Promise‹_[_Identity_](identity.md)_\[\]›_

_Defined in_ [_src/Governance.ts:47_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L47)

Retrieve a list of all active committee members

**Returns:** _Promise‹_[_Identity_](identity.md)_\[\]›_

### getProposals

▸ **getProposals**\(`opts`: object\): _Promise‹_[_ProposalWithDetails_](../interfaces/proposalwithdetails.md)_\[\]›_

_Defined in_ [_src/Governance.ts:84_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L84)

Retrieve a list of proposals and their respective details. Can be filtered using parameters

**`note`** details for a single proposal can be fetched using the `Proposal` entity's `getDetails` method

**`note`** uses the middleware

**Parameters:**

▪`Default value` **opts**: _object_= {}

| Name | Type | Description |
| :--- | :--- | :--- |
| `orderBy?` | ProposalOrderByInput | the order in which the proposals are returned |
| `proposers?` | string\[\] | accounts for which to fetch proposals. Defaults to all proposers |
| `size?` | undefined \| number | page size |
| `start?` | undefined \| number | page offset |
| `states?` | ProposalState\[\] | state of the proposal |

**Returns:** _Promise‹_[_ProposalWithDetails_](../interfaces/proposalwithdetails.md)_\[\]›_

### getTransactionArguments

▸ **getTransactionArguments**\(`args`: object\): [_TransactionArgument_](../globals.md#transactionargument)_\[\]_

_Defined in_ [_src/Governance.ts:67_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L67)

Retrieve the types of arguments that a certain transaction requires to be run

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `tag` | TxTag | tag associated with the transaction that will be executed if the proposal passes |

**Returns:** [_TransactionArgument_](../globals.md#transactionargument)_\[\]_

### minimumBondedAmount

▸ **minimumBondedAmount**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Governance.ts:225_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L225)

Returns the minimum stake a proposal must gather in order to be considered by the committee

**`note`** can be subscribed to

**Returns:** _Promise‹BigNumber›_

▸ **minimumBondedAmount**\(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Governance.ts:226_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L226)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### minimumProposalDeposit

▸ **minimumProposalDeposit**\(\): _Promise‹BigNumber›_

_Defined in_ [_src/Governance.ts:136_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L136)

Get the minimum amount of POLYX that has to be deposited when creating a proposal

**`note`** can be subscribed to

**Returns:** _Promise‹BigNumber›_

▸ **minimumProposalDeposit**\(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Governance.ts:137_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L137)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### proposalTimeFrames

▸ **proposalTimeFrames**\(\): _Promise‹_[_ProposalTimeFrames_](../interfaces/proposaltimeframes.md)_›_

_Defined in_ [_src/Governance.ts:170_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L170)

Retrieve the proposal time frames. This includes:

* Amount of blocks from proposal creation until the proposal can be voted on \(cool off\)
* Amount of blocks from when cool off ends until the voting period is over \(duration\)

**`note`** can be subscribed to

**Returns:** _Promise‹_[_ProposalTimeFrames_](../interfaces/proposaltimeframes.md)_›_

▸ **proposalTimeFrames**\(`callback`: [SubCallback](../globals.md#subcallback)‹[ProposalTimeFrames](../interfaces/proposaltimeframes.md)›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/Governance.ts:171_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/Governance.ts#L171)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[ProposalTimeFrames](../interfaces/proposaltimeframes.md)› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_


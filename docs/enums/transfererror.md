# TransferError

Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to a [TransferStatus](transferstatus.md), but two or more TransferErrors can represent the same TransferStatus, and not all Transfer Statuses are represented by a TransferError

## Index

### Enumeration members

* [InsufficientBalance](transfererror.md#insufficientbalance)
* [InsufficientPortfolioBalance](transfererror.md#insufficientportfoliobalance)
* [InvalidGranularity](transfererror.md#invalidgranularity)
* [InvalidReceiverCdd](transfererror.md#invalidreceivercdd)
* [InvalidReceiverPortfolio](transfererror.md#invalidreceiverportfolio)
* [InvalidSenderCdd](transfererror.md#invalidsendercdd)
* [InvalidSenderPortfolio](transfererror.md#invalidsenderportfolio)
* [ScopeClaimMissing](transfererror.md#scopeclaimmissing)
* [SelfTransfer](transfererror.md#selftransfer)
* [TransfersFrozen](transfererror.md#transfersfrozen)

## Enumeration members

### InsufficientBalance

• **InsufficientBalance**: = "InsufficientBalance"

_Defined in_ [_src/types/index.ts:530_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L530)

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance**: = "InsufficientPortfolioBalance"

_Defined in_ [_src/types/index.ts:554_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L554)

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

### InvalidGranularity

• **InvalidGranularity**: = "InvalidGranularity"

_Defined in_ [_src/types/index.ts:499_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L499)

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

### InvalidReceiverCdd

• **InvalidReceiverCdd**: = "InvalidReceiverCdd"

_Defined in_ [_src/types/index.ts:511_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L511)

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio**: = "InvalidReceiverPortfolio"

_Defined in_ [_src/types/index.ts:548_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L548)

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

### InvalidSenderCdd

• **InvalidSenderCdd**: = "InvalidSenderCdd"

_Defined in_ [_src/types/index.ts:517_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L517)

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

### InvalidSenderPortfolio

• **InvalidSenderPortfolio**: = "InvalidSenderPortfolio"

_Defined in_ [_src/types/index.ts:542_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L542)

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

### ScopeClaimMissing

• **ScopeClaimMissing**: = "ScopeClaimMissing"

_Defined in_ [_src/types/index.ts:524_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L524)

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for the Security Token

### SelfTransfer

• **SelfTransfer**: = "SelfTransfer"

_Defined in_ [_src/types/index.ts:505_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L505)

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

### TransfersFrozen

• **TransfersFrozen**: = "TransfersFrozen"

_Defined in_ [_src/types/index.ts:536_](https://github.com/PolymathNetwork/polymesh-sdk/blob/23062de4/src/types/index.ts#L536)

translates to TransferStatus.TransfersHalted

occurs if the Security Token's transfers are frozen


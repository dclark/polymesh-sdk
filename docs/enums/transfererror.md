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

_Defined in_ [_src/types/index.ts:510_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L510)

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance**: = "InsufficientPortfolioBalance"

_Defined in_ [_src/types/index.ts:534_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L534)

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

### InvalidGranularity

• **InvalidGranularity**: = "InvalidGranularity"

_Defined in_ [_src/types/index.ts:479_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L479)

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

### InvalidReceiverCdd

• **InvalidReceiverCdd**: = "InvalidReceiverCdd"

_Defined in_ [_src/types/index.ts:491_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L491)

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio**: = "InvalidReceiverPortfolio"

_Defined in_ [_src/types/index.ts:528_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L528)

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

### InvalidSenderCdd

• **InvalidSenderCdd**: = "InvalidSenderCdd"

_Defined in_ [_src/types/index.ts:497_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L497)

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

### InvalidSenderPortfolio

• **InvalidSenderPortfolio**: = "InvalidSenderPortfolio"

_Defined in_ [_src/types/index.ts:522_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L522)

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

### ScopeClaimMissing

• **ScopeClaimMissing**: = "ScopeClaimMissing"

_Defined in_ [_src/types/index.ts:504_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L504)

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for the Security Token

### SelfTransfer

• **SelfTransfer**: = "SelfTransfer"

_Defined in_ [_src/types/index.ts:485_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L485)

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

### TransfersFrozen

• **TransfersFrozen**: = "TransfersFrozen"

_Defined in_ [_src/types/index.ts:516_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L516)

translates to TransferStatus.TransfersHalted

occurs if the Security Token's transfers are frozen


# Enumeration: TransferError

Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to
  a [TransferStatus](transferstatus.md), but two or more TransferErrors can represent the same TransferStatus, and
  not all Transfer Statuses are represented by a TransferError

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

###  InsufficientBalance

• **InsufficientBalance**: = "InsufficientBalance"

*Defined in [src/types/index.ts:488](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L488)*

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

___

###  InsufficientPortfolioBalance

• **InsufficientPortfolioBalance**: = "InsufficientPortfolioBalance"

*Defined in [src/types/index.ts:512](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L512)*

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

___

###  InvalidGranularity

• **InvalidGranularity**: = "InvalidGranularity"

*Defined in [src/types/index.ts:457](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L457)*

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

___

###  InvalidReceiverCdd

• **InvalidReceiverCdd**: = "InvalidReceiverCdd"

*Defined in [src/types/index.ts:469](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L469)*

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

___

###  InvalidReceiverPortfolio

• **InvalidReceiverPortfolio**: = "InvalidReceiverPortfolio"

*Defined in [src/types/index.ts:506](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L506)*

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

___

###  InvalidSenderCdd

• **InvalidSenderCdd**: = "InvalidSenderCdd"

*Defined in [src/types/index.ts:475](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L475)*

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

___

###  InvalidSenderPortfolio

• **InvalidSenderPortfolio**: = "InvalidSenderPortfolio"

*Defined in [src/types/index.ts:500](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L500)*

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

___

###  ScopeClaimMissing

• **ScopeClaimMissing**: = "ScopeClaimMissing"

*Defined in [src/types/index.ts:482](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L482)*

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Security Token

___

###  SelfTransfer

• **SelfTransfer**: = "SelfTransfer"

*Defined in [src/types/index.ts:463](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L463)*

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

___

###  TransfersFrozen

• **TransfersFrozen**: = "TransfersFrozen"

*Defined in [src/types/index.ts:494](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/types/index.ts#L494)*

translates to TransferStatus.TransfersHalted

occurs if the Security Token's transfers are frozen

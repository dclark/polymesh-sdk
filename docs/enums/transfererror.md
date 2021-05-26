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

*Defined in [src/types/index.ts:546](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L546)*

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

___

###  InsufficientPortfolioBalance

• **InsufficientPortfolioBalance**: = "InsufficientPortfolioBalance"

*Defined in [src/types/index.ts:570](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L570)*

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

___

###  InvalidGranularity

• **InvalidGranularity**: = "InvalidGranularity"

*Defined in [src/types/index.ts:515](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L515)*

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

___

###  InvalidReceiverCdd

• **InvalidReceiverCdd**: = "InvalidReceiverCdd"

*Defined in [src/types/index.ts:527](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L527)*

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

___

###  InvalidReceiverPortfolio

• **InvalidReceiverPortfolio**: = "InvalidReceiverPortfolio"

*Defined in [src/types/index.ts:564](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L564)*

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

___

###  InvalidSenderCdd

• **InvalidSenderCdd**: = "InvalidSenderCdd"

*Defined in [src/types/index.ts:533](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L533)*

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

___

###  InvalidSenderPortfolio

• **InvalidSenderPortfolio**: = "InvalidSenderPortfolio"

*Defined in [src/types/index.ts:558](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L558)*

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

___

###  ScopeClaimMissing

• **ScopeClaimMissing**: = "ScopeClaimMissing"

*Defined in [src/types/index.ts:540](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L540)*

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Security Token

___

###  SelfTransfer

• **SelfTransfer**: = "SelfTransfer"

*Defined in [src/types/index.ts:521](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L521)*

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

___

###  TransfersFrozen

• **TransfersFrozen**: = "TransfersFrozen"

*Defined in [src/types/index.ts:552](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L552)*

translates to TransferStatus.TransfersHalted

occurs if the Security Token's transfers are frozen

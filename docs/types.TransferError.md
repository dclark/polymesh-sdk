# Enumeration: TransferError

[types](../wiki/types).TransferError

Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to
  a [TransferStatus](../wiki/types.TransferStatus), but two or more TransferErrors can represent the same TransferStatus, and
  not all Transfer Statuses are represented by a TransferError

## Table of contents

### Enumeration Members

- [InsufficientBalance](../wiki/types.TransferError#insufficientbalance)
- [InsufficientPortfolioBalance](../wiki/types.TransferError#insufficientportfoliobalance)
- [InvalidGranularity](../wiki/types.TransferError#invalidgranularity)
- [InvalidReceiverCdd](../wiki/types.TransferError#invalidreceivercdd)
- [InvalidReceiverPortfolio](../wiki/types.TransferError#invalidreceiverportfolio)
- [InvalidSenderCdd](../wiki/types.TransferError#invalidsendercdd)
- [InvalidSenderPortfolio](../wiki/types.TransferError#invalidsenderportfolio)
- [ScopeClaimMissing](../wiki/types.TransferError#scopeclaimmissing)
- [SelfTransfer](../wiki/types.TransferError#selftransfer)
- [TransfersFrozen](../wiki/types.TransferError#transfersfrozen)

## Enumeration Members

### InsufficientBalance

• **InsufficientBalance**

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

#### Defined in

[types/index.ts:621](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L621)

___

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance**

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

#### Defined in

[types/index.ts:645](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L645)

___

### InvalidGranularity

• **InvalidGranularity**

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

#### Defined in

[types/index.ts:590](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L590)

___

### InvalidReceiverCdd

• **InvalidReceiverCdd**

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:602](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L602)

___

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio**

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

#### Defined in

[types/index.ts:639](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L639)

___

### InvalidSenderCdd

• **InvalidSenderCdd**

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:608](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L608)

___

### InvalidSenderPortfolio

• **InvalidSenderPortfolio**

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

#### Defined in

[types/index.ts:633](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L633)

___

### ScopeClaimMissing

• **ScopeClaimMissing**

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

#### Defined in

[types/index.ts:615](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L615)

___

### SelfTransfer

• **SelfTransfer**

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

#### Defined in

[types/index.ts:596](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L596)

___

### TransfersFrozen

• **TransfersFrozen**

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen

#### Defined in

[types/index.ts:627](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L627)

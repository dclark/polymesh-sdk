# Enumeration: ErrorCode

[types](../wiki/types).ErrorCode

Specifies possible types of errors in the SDK

## Table of contents

### Enumeration Members

- [DataUnavailable](../wiki/types.ErrorCode#dataunavailable)
- [EntityInUse](../wiki/types.ErrorCode#entityinuse)
- [FatalError](../wiki/types.ErrorCode#fatalerror)
- [General](../wiki/types.ErrorCode#general)
- [InsufficientBalance](../wiki/types.ErrorCode#insufficientbalance)
- [LimitExceeded](../wiki/types.ErrorCode#limitexceeded)
- [MiddlewareError](../wiki/types.ErrorCode#middlewareerror)
- [NoDataChange](../wiki/types.ErrorCode#nodatachange)
- [NotAuthorized](../wiki/types.ErrorCode#notauthorized)
- [TransactionAborted](../wiki/types.ErrorCode#transactionaborted)
- [TransactionRejectedByUser](../wiki/types.ErrorCode#transactionrejectedbyuser)
- [TransactionReverted](../wiki/types.ErrorCode#transactionreverted)
- [UnexpectedError](../wiki/types.ErrorCode#unexpectederror)
- [UnmetPrerequisite](../wiki/types.ErrorCode#unmetprerequisite)
- [ValidationError](../wiki/types.ErrorCode#validationerror)

## Enumeration Members

### DataUnavailable

• **DataUnavailable**

the data that is being fetched does not exist on-chain, or relies on non-existent data. There are
  some cases where the data did exist at some point, but has been deleted to save storage space

#### Defined in

[types/index.ts:514](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L514)

___

### EntityInUse

• **EntityInUse**

this type of error is thrown when attempting to delete/modify an entity which has other entities depending on it. For example, deleting
  a Portfolio that still holds assets, or removing a Checkpoint Schedule that is being referenced by a Corporate Action

#### Defined in

[types/index.ts:536](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L536)

___

### FatalError

• **FatalError**

error that should cause termination of the calling application

#### Defined in

[types/index.ts:496](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L496)

___

### General

• **General**

general purpose errors that don't fit well into the other categories

#### Defined in

[types/index.ts:549](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L549)

___

### InsufficientBalance

• **InsufficientBalance**

one or more parties involved in the transaction do not have enough balance to perform it

#### Defined in

[types/index.ts:540](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L540)

___

### LimitExceeded

• **LimitExceeded**

the data that is being written to the chain would result in some limit being exceeded. For example, adding a transfer
  restriction when the maximum possible amount has already been added

#### Defined in

[types/index.ts:524](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L524)

___

### MiddlewareError

• **MiddlewareError**

errors encountered when interacting with the historic data middleware (GQL server)

#### Defined in

[types/index.ts:509](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L509)

___

### NoDataChange

• **NoDataChange**

the data that is being written to the chain is the same data that is already in place. This would result
  in a redundant/useless transaction being executed

#### Defined in

[types/index.ts:519](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L519)

___

### NotAuthorized

• **NotAuthorized**

user does not have the required roles/permissions to perform an operation

#### Defined in

[types/index.ts:505](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L505)

___

### TransactionAborted

• **TransactionAborted**

transaction removed from the tx pool

#### Defined in

[types/index.ts:482](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L482)

___

### TransactionRejectedByUser

• **TransactionRejectedByUser**

user rejected the transaction in their wallet

#### Defined in

[types/index.ts:486](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L486)

___

### TransactionReverted

• **TransactionReverted**

transaction failed due to an on-chain error. This is a business logic error,
  and it should be caught by the SDK before being sent to the chain.
  Please report it to the Polymath team

#### Defined in

[types/index.ts:492](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L492)

___

### UnexpectedError

• **UnexpectedError**

errors that are the result of something unforeseen.
  These should generally be reported to the Polymath team

#### Defined in

[types/index.ts:545](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L545)

___

### UnmetPrerequisite

• **UnmetPrerequisite**

one or more base prerequisites for a transaction to be successful haven't been met. For example, reserving a ticker requires
  said ticker to not be already reserved. Attempting to reserve a ticker without that prerequisite being met would result in this
  type of error. Attempting to create an entity that already exists would also fall into this category,
  if the entity in question is supposed to be unique

#### Defined in

[types/index.ts:531](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L531)

___

### ValidationError

• **ValidationError**

user input error. This means that one or more inputs passed by the user
  do not conform to expected value ranges or types

#### Defined in

[types/index.ts:501](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L501)

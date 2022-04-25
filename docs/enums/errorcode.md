# Enumeration: ErrorCode

Specifies possible types of errors in the SDK

## Index

### Enumeration members

* [DataUnavailable](errorcode.md#dataunavailable)
* [EntityInUse](errorcode.md#entityinuse)
* [FatalError](errorcode.md#fatalerror)
* [General](errorcode.md#general)
* [InsufficientBalance](errorcode.md#insufficientbalance)
* [LimitExceeded](errorcode.md#limitexceeded)
* [MiddlewareError](errorcode.md#middlewareerror)
* [NoDataChange](errorcode.md#nodatachange)
* [NotAuthorized](errorcode.md#notauthorized)
* [TransactionAborted](errorcode.md#transactionaborted)
* [TransactionRejectedByUser](errorcode.md#transactionrejectedbyuser)
* [TransactionReverted](errorcode.md#transactionreverted)
* [UnexpectedError](errorcode.md#unexpectederror)
* [UnmetPrerequisite](errorcode.md#unmetprerequisite)
* [ValidationError](errorcode.md#validationerror)

## Enumeration members

###  DataUnavailable

• **DataUnavailable**: = "DataUnavailable"

*Defined in [src/types/index.ts:494](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L494)*

the data that is being fetched does not exist on-chain, or relies on non-existent data. There are
  some cases where the data did exist at some point, but has been deleted to save storage space

___

###  EntityInUse

• **EntityInUse**: = "EntityInUse"

*Defined in [src/types/index.ts:516](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L516)*

this type of error is thrown when attempting to delete/modify an entity which has other entities depending on it. For example, deleting
  a Portfolio that still holds assets, or removing a Checkpoint Schedule that is being referenced by a Corporate Action

___

###  FatalError

• **FatalError**: = "FatalError"

*Defined in [src/types/index.ts:476](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L476)*

error that should cause termination of the calling application

___

###  General

• **General**: = "General"

*Defined in [src/types/index.ts:529](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L529)*

general purpose errors that don't fit well into the other categories

___

###  InsufficientBalance

• **InsufficientBalance**: = "InsufficientBalance"

*Defined in [src/types/index.ts:520](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L520)*

one or more parties involved in the transaction do not have enough balance to perform it

___

###  LimitExceeded

• **LimitExceeded**: = "LimitExceeded"

*Defined in [src/types/index.ts:504](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L504)*

the data that is being written to the chain would result in some limit being exceeded. For example, adding a transfer
  restriction when the maximum possible amount has already been added

___

###  MiddlewareError

• **MiddlewareError**: = "MiddlewareError"

*Defined in [src/types/index.ts:489](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L489)*

errors encountered when interacting with the historic data middleware (GQL server)

___

###  NoDataChange

• **NoDataChange**: = "NoDataChange"

*Defined in [src/types/index.ts:499](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L499)*

the data that is being written to the chain is the same data that is already in place. This would result
  in a redundant/useless transaction being executed

___

###  NotAuthorized

• **NotAuthorized**: = "NotAuthorized"

*Defined in [src/types/index.ts:485](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L485)*

user does not have the required roles/permissions to perform an operation

___

###  TransactionAborted

• **TransactionAborted**: = "TransactionAborted"

*Defined in [src/types/index.ts:462](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L462)*

transaction removed from the tx pool

___

###  TransactionRejectedByUser

• **TransactionRejectedByUser**: = "TransactionRejectedByUser"

*Defined in [src/types/index.ts:466](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L466)*

user rejected the transaction in their wallet

___

###  TransactionReverted

• **TransactionReverted**: = "TransactionReverted"

*Defined in [src/types/index.ts:472](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L472)*

transaction failed due to an on-chain error. This is a business logic error,
  and it should be caught by the SDK before being sent to the chain.
  Please report it to the Polymath team

___

###  UnexpectedError

• **UnexpectedError**: = "UnexpectedError"

*Defined in [src/types/index.ts:525](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L525)*

errors that are the result of something unforeseen.
  These should generally be reported to the Polymath team

___

###  UnmetPrerequisite

• **UnmetPrerequisite**: = "UnmetPrerequisite"

*Defined in [src/types/index.ts:511](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L511)*

one or more base prerequisites for a transaction to be successful haven't been met. For example, reserving a ticker requires
  said ticker to not be already reserved. Attempting to reserve a ticker without that prerequisite being met would result in this
  type of error. Attempting to create an entity that already exists would also fall into this category,
  if the entity in question is supposed to be unique

___

###  ValidationError

• **ValidationError**: = "ValidationError"

*Defined in [src/types/index.ts:481](https://github.com/PolymathNetwork/polymesh-sdk/blob/4f2fd432/src/types/index.ts#L481)*

user input error. This means that one or more inputs passed by the user
  do not conform to expected value ranges or types

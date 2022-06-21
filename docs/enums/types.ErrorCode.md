[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ErrorCode

# Enumeration: ErrorCode

[types](../modules/types.md).ErrorCode

Specifies possible types of errors in the SDK

## Table of contents

### Enumeration Members

- [DataUnavailable](types.ErrorCode.md#dataunavailable)
- [EntityInUse](types.ErrorCode.md#entityinuse)
- [FatalError](types.ErrorCode.md#fatalerror)
- [General](types.ErrorCode.md#general)
- [InsufficientBalance](types.ErrorCode.md#insufficientbalance)
- [LimitExceeded](types.ErrorCode.md#limitexceeded)
- [MiddlewareError](types.ErrorCode.md#middlewareerror)
- [NoDataChange](types.ErrorCode.md#nodatachange)
- [NotAuthorized](types.ErrorCode.md#notauthorized)
- [TransactionAborted](types.ErrorCode.md#transactionaborted)
- [TransactionRejectedByUser](types.ErrorCode.md#transactionrejectedbyuser)
- [TransactionReverted](types.ErrorCode.md#transactionreverted)
- [UnexpectedError](types.ErrorCode.md#unexpectederror)
- [UnmetPrerequisite](types.ErrorCode.md#unmetprerequisite)
- [ValidationError](types.ErrorCode.md#validationerror)

## Enumeration Members

### DataUnavailable

• **DataUnavailable**

the data that is being fetched does not exist on-chain, or relies on non-existent data. There are
  some cases where the data did exist at some point, but has been deleted to save storage space

#### Defined in

[types/index.ts:511](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L511)

___

### EntityInUse

• **EntityInUse**

this type of error is thrown when attempting to delete/modify an entity which has other entities depending on it. For example, deleting
  a Portfolio that still holds assets, or removing a Checkpoint Schedule that is being referenced by a Corporate Action

#### Defined in

[types/index.ts:533](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L533)

___

### FatalError

• **FatalError**

error that should cause termination of the calling application

#### Defined in

[types/index.ts:493](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L493)

___

### General

• **General**

general purpose errors that don't fit well into the other categories

#### Defined in

[types/index.ts:546](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L546)

___

### InsufficientBalance

• **InsufficientBalance**

one or more parties involved in the transaction do not have enough balance to perform it

#### Defined in

[types/index.ts:537](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L537)

___

### LimitExceeded

• **LimitExceeded**

the data that is being written to the chain would result in some limit being exceeded. For example, adding a transfer
  restriction when the maximum possible amount has already been added

#### Defined in

[types/index.ts:521](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L521)

___

### MiddlewareError

• **MiddlewareError**

errors encountered when interacting with the historic data middleware (GQL server)

#### Defined in

[types/index.ts:506](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L506)

___

### NoDataChange

• **NoDataChange**

the data that is being written to the chain is the same data that is already in place. This would result
  in a redundant/useless transaction being executed

#### Defined in

[types/index.ts:516](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L516)

___

### NotAuthorized

• **NotAuthorized**

user does not have the required roles/permissions to perform an operation

#### Defined in

[types/index.ts:502](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L502)

___

### TransactionAborted

• **TransactionAborted**

transaction removed from the tx pool

#### Defined in

[types/index.ts:479](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L479)

___

### TransactionRejectedByUser

• **TransactionRejectedByUser**

user rejected the transaction in their wallet

#### Defined in

[types/index.ts:483](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L483)

___

### TransactionReverted

• **TransactionReverted**

transaction failed due to an on-chain error. This is a business logic error,
  and it should be caught by the SDK before being sent to the chain.
  Please report it to the Polymath team

#### Defined in

[types/index.ts:489](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L489)

___

### UnexpectedError

• **UnexpectedError**

errors that are the result of something unforeseen.
  These should generally be reported to the Polymath team

#### Defined in

[types/index.ts:542](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L542)

___

### UnmetPrerequisite

• **UnmetPrerequisite**

one or more base prerequisites for a transaction to be successful haven't been met. For example, reserving a ticker requires
  said ticker to not be already reserved. Attempting to reserve a ticker without that prerequisite being met would result in this
  type of error. Attempting to create an entity that already exists would also fall into this category,
  if the entity in question is supposed to be unique

#### Defined in

[types/index.ts:528](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L528)

___

### ValidationError

• **ValidationError**

user input error. This means that one or more inputs passed by the user
  do not conform to expected value ranges or types

#### Defined in

[types/index.ts:498](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L498)

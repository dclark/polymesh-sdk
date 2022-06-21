[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / PayingAccount

# Interface: PayingAccount

[types](../modules/types.md).PayingAccount

Represents a relationship in which a third party Account
  is paying for a transaction on behalf of the caller

## Hierarchy

- **`PayingAccount`**

  ↳ [`ThirdPartyFees`](types.ThirdPartyFees.md)

## Table of contents

### Properties

- [account](types.PayingAccount.md#account)
- [allowance](types.PayingAccount.md#allowance)
- [type](types.PayingAccount.md#type)

## Properties

### account

• **account**: [`Account`](../classes/api_entities_Account.Account.md)

Account that pays for the transaction

#### Defined in

[types/index.ts:738](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L738)

___

### allowance

• **allowance**: ``null`` \| `BigNumber`

total amount that will be paid for

#### Defined in

[types/index.ts:742](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L742)

___

### type

• **type**: [`PayingAccountType`](../enums/types.PayingAccountType.md)

#### Defined in

[types/index.ts:734](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L734)

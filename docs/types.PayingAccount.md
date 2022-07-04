# Interface: PayingAccount

[types](../wiki/types).PayingAccount

Represents a relationship in which a third party Account
  is paying for a transaction on behalf of the caller

## Hierarchy

- **`PayingAccount`**

  ↳ [`ThirdPartyFees`](../wiki/types.ThirdPartyFees)

## Table of contents

### Properties

- [account](../wiki/types.PayingAccount#account)
- [allowance](../wiki/types.PayingAccount#allowance)
- [type](../wiki/types.PayingAccount#type)

## Properties

### account

• **account**: [`Account`](../wiki/api.entities.Account.Account)

Account that pays for the transaction

#### Defined in

[types/index.ts:741](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L741)

___

### allowance

• **allowance**: ``null`` \| `BigNumber`

total amount that will be paid for

#### Defined in

[types/index.ts:745](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L745)

___

### type

• **type**: [`PayingAccountType`](../wiki/types.PayingAccountType)

#### Defined in

[types/index.ts:737](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L737)

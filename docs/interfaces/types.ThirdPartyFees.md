[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ThirdPartyFees

# Interface: ThirdPartyFees

[types](../modules/types.md).ThirdPartyFees

Breakdown of the fees that will be paid by a specific third party in a Transaction Queue

## Hierarchy

- [`PayingAccount`](types.PayingAccount.md)

  ↳ **`ThirdPartyFees`**

## Table of contents

### Properties

- [account](types.ThirdPartyFees.md#account)
- [allowance](types.ThirdPartyFees.md#allowance)
- [balance](types.ThirdPartyFees.md#balance)
- [fees](types.ThirdPartyFees.md#fees)
- [type](types.ThirdPartyFees.md#type)

## Properties

### account

• **account**: [`Account`](../classes/api_entities_Account.Account.md)

Account that pays for the transaction

#### Inherited from

[PayingAccount](types.PayingAccount.md).[account](types.PayingAccount.md#account)

#### Defined in

[types/index.ts:738](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L738)

___

### allowance

• **allowance**: ``null`` \| `BigNumber`

total amount that will be paid for

#### Inherited from

[PayingAccount](types.PayingAccount.md).[allowance](types.PayingAccount.md#allowance)

#### Defined in

[types/index.ts:742](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L742)

___

### balance

• **balance**: `BigNumber`

free balance of the third party Account

#### Defined in

[types/index.ts:756](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L756)

___

### fees

• **fees**: [`Fees`](types.Fees.md)

fees that will be paid by the third party Account

#### Defined in

[types/index.ts:752](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L752)

___

### type

• **type**: [`PayingAccountType`](../enums/types.PayingAccountType.md)

#### Inherited from

[PayingAccount](types.PayingAccount.md).[type](types.PayingAccount.md#type)

#### Defined in

[types/index.ts:734](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L734)

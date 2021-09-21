# Interface: ThirdPartyFees

Breakdown of the fees that will be paid by a specific third party in a Transaction Queue

## Hierarchy

* **ThirdPartyFees**

## Index

### Properties

* [account](thirdpartyfees.md#account)
* [allowance](thirdpartyfees.md#allowance)
* [balance](thirdpartyfees.md#balance)
* [fees](thirdpartyfees.md#fees)

## Properties

###  account

• **account**: *[Account](../classes/account.md)*

*Defined in [src/types/index.ts:631](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L631)*

third party Account that will pay for the fees

___

###  allowance

• **allowance**: *BigNumber | null*

*Defined in [src/types/index.ts:640](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L640)*

maximum amount that the third party Account can pay on behalf of the current Account. A null
  value signifies no limit

___

###  balance

• **balance**: *BigNumber*

*Defined in [src/types/index.ts:644](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L644)*

free balance of the third party Account

___

###  fees

• **fees**: *[Fees](fees.md)*

*Defined in [src/types/index.ts:635](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L635)*

fees that will be paid by the third party Account

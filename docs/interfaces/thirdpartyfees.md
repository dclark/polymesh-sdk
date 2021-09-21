# ThirdPartyFees

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

### account

• **account**: [_Account_](../classes/account.md)

_Defined in_ [_src/types/index.ts:631_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L631)

third party Account that will pay for the fees

### allowance

• **allowance**: _BigNumber \| null_

_Defined in_ [_src/types/index.ts:640_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L640)

maximum amount that the third party Account can pay on behalf of the current Account. A null value signifies no limit

### balance

• **balance**: _BigNumber_

_Defined in_ [_src/types/index.ts:644_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L644)

free balance of the third party Account

### fees

• **fees**: [_Fees_](fees.md)

_Defined in_ [_src/types/index.ts:635_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L635)

fees that will be paid by the third party Account


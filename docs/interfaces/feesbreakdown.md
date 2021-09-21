# FeesBreakdown

Breakdown of transaction fees for a Transaction Queue. In most cases, the entirety of the Queue's fees will be paid by either the current Account or a third party. In some rare cases, fees can be split between them \(for example, if the current Account is being subsidized, but one of the transactions in the queue terminates the subsidy, leaving the current Account with the responsibility of paying for the rest of the transactions\)

## Hierarchy

* **FeesBreakdown**

## Index

### Properties

* [accountBalance](feesbreakdown.md#accountbalance)
* [accountFees](feesbreakdown.md#accountfees)
* [thirdPartyFees](feesbreakdown.md#thirdpartyfees)

## Properties

### accountBalance

• **accountBalance**: _BigNumber_

_Defined in_ [_src/types/index.ts:667_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L667)

free balance of the current Account

### accountFees

• **accountFees**: [_Fees_](fees.md)

_Defined in_ [_src/types/index.ts:663_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L663)

fees that must be paid by the current Account

### thirdPartyFees

• **thirdPartyFees**: [_ThirdPartyFees_](thirdpartyfees.md)_\[\]_

_Defined in_ [_src/types/index.ts:659_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L659)

fees that will be paid by third parties. Each element in the array represents a different third party Account, their corresponding fees, allowances and balance


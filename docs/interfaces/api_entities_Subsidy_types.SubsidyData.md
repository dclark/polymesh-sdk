[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Subsidy/types](../modules/api_entities_Subsidy_types.md) / SubsidyData

# Interface: SubsidyData

[api/entities/Subsidy/types](../modules/api_entities_Subsidy_types.md).SubsidyData

## Table of contents

### Properties

- [allowance](api_entities_Subsidy_types.SubsidyData.md#allowance)
- [beneficiary](api_entities_Subsidy_types.SubsidyData.md#beneficiary)
- [subsidizer](api_entities_Subsidy_types.SubsidyData.md#subsidizer)

## Properties

### allowance

• **allowance**: `BigNumber`

amount of POLYX to be subsidized. This can be increased/decreased later on

#### Defined in

[api/entities/Subsidy/types.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/types.ts#L17)

___

### beneficiary

• **beneficiary**: [`Account`](../classes/api_entities_Account.Account.md)

Account whose transactions are being paid for

#### Defined in

[api/entities/Subsidy/types.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/types.ts#L9)

___

### subsidizer

• **subsidizer**: [`Account`](../classes/api_entities_Account.Account.md)

Account that is paying for the transactions

#### Defined in

[api/entities/Subsidy/types.ts:13](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Subsidy/types.ts#L13)

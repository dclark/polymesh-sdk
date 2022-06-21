[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/DividendDistribution/types](../modules/api_entities_DividendDistribution_types.md) / DistributionParticipant

# Interface: DistributionParticipant

[api/entities/DividendDistribution/types](../modules/api_entities_DividendDistribution_types.md).DistributionParticipant

## Table of contents

### Properties

- [amount](api_entities_DividendDistribution_types.DistributionParticipant.md#amount)
- [amountAfterTax](api_entities_DividendDistribution_types.DistributionParticipant.md#amountaftertax)
- [identity](api_entities_DividendDistribution_types.DistributionParticipant.md#identity)
- [paid](api_entities_DividendDistribution_types.DistributionParticipant.md#paid)
- [taxWithholdingPercentage](api_entities_DividendDistribution_types.DistributionParticipant.md#taxwithholdingpercentage)

## Properties

### amount

• **amount**: `BigNumber`

#### Defined in

[api/entities/DividendDistribution/types.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/types.ts#L15)

___

### amountAfterTax

• **amountAfterTax**: `BigNumber`

amount to be paid to the participant after tax deductions

#### Defined in

[api/entities/DividendDistribution/types.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/types.ts#L23)

___

### identity

• **identity**: [`Identity`](../classes/api_entities_Identity.Identity.md)

#### Defined in

[api/entities/DividendDistribution/types.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/types.ts#L14)

___

### paid

• **paid**: `boolean`

#### Defined in

[api/entities/DividendDistribution/types.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/types.ts#L24)

___

### taxWithholdingPercentage

• **taxWithholdingPercentage**: `BigNumber`

percentage (0-100) of tax withholding for this participant

#### Defined in

[api/entities/DividendDistribution/types.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/DividendDistribution/types.ts#L19)

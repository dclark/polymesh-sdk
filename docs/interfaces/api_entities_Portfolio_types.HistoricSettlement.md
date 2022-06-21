[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [api/entities/Portfolio/types](../modules/api_entities_Portfolio_types.md) / HistoricSettlement

# Interface: HistoricSettlement

[api/entities/Portfolio/types](../modules/api_entities_Portfolio_types.md).HistoricSettlement

## Table of contents

### Properties

- [accounts](api_entities_Portfolio_types.HistoricSettlement.md#accounts)
- [blockHash](api_entities_Portfolio_types.HistoricSettlement.md#blockhash)
- [blockNumber](api_entities_Portfolio_types.HistoricSettlement.md#blocknumber)
- [legs](api_entities_Portfolio_types.HistoricSettlement.md#legs)
- [status](api_entities_Portfolio_types.HistoricSettlement.md#status)

## Properties

### accounts

• **accounts**: [`Account`](../classes/api_entities_Account.Account.md)[]

Array of Accounts that participated by affirming the settlement

#### Defined in

[api/entities/Portfolio/types.ts:25](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/types.ts#L25)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[api/entities/Portfolio/types.ts:20](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/types.ts#L20)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[api/entities/Portfolio/types.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/types.ts#L19)

___

### legs

• **legs**: [`SettlementLeg`](api_entities_Portfolio_types.SettlementLeg.md)[]

#### Defined in

[api/entities/Portfolio/types.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/types.ts#L26)

___

### status

• **status**: `SettlementResultEnum`

#### Defined in

[api/entities/Portfolio/types.ts:21](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/api/entities/Portfolio/types.ts#L21)

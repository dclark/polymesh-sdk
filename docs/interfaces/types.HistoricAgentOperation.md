[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / HistoricAgentOperation

# Interface: HistoricAgentOperation

[types](../modules/types.md).HistoricAgentOperation

Events triggered by transactions performed by an Agent Identity, related to the Token's configuration
  For example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers

Token transfers (settlements or movements between Portfolios) do not count as Operations

## Table of contents

### Properties

- [history](types.HistoricAgentOperation.md#history)
- [identity](types.HistoricAgentOperation.md#identity)

## Properties

### history

• **history**: [`EventIdentifier`](types.EventIdentifier.md)[]

list of Token Operation Events that were triggered by the Agent Identity

#### Defined in

[types/index.ts:1399](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1399)

___

### identity

• **identity**: [`Identity`](../classes/api_entities_Identity.Identity.md)

Agent Identity that performed the operations

#### Defined in

[types/index.ts:1395](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1395)

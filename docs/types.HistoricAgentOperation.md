# Interface: HistoricAgentOperation

[types](../wiki/types).HistoricAgentOperation

Events triggered by transactions performed by an Agent Identity, related to the Token's configuration
  For example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers

Token transfers (settlements or movements between Portfolios) do not count as Operations

## Table of contents

### Properties

- [history](../wiki/types.HistoricAgentOperation#history)
- [identity](../wiki/types.HistoricAgentOperation#identity)

## Properties

### history

• **history**: [`EventIdentifier`](../wiki/types.EventIdentifier)[]

list of Token Operation Events that were triggered by the Agent Identity

#### Defined in

[types/index.ts:1371](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L1371)

___

### identity

• **identity**: [`Identity`](../wiki/api.entities.Identity.Identity)

Agent Identity that performed the operations

#### Defined in

[types/index.ts:1367](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L1367)

# HistoricAgentOperation

Events triggered by transactions performed by an Agent Identity, related to the Token's configuration For example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers

Token transfers \(settlements or movements between Portfolios\) do not count as Operations

## Hierarchy

* **HistoricAgentOperation**

## Index

### Properties

* [history](historicagentoperation.md#history)
* [identity](historicagentoperation.md#identity)

## Properties

### history

• **history**: [_EventIdentifier_](eventidentifier.md)_\[\]_

_Defined in_ [_src/types/index.ts:1224_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1224)

list of Token Operation Events that were triggered by the Agent Identity

### identity

• **identity**: [_Identity_](../classes/identity.md)

_Defined in_ [_src/types/index.ts:1220_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L1220)

Agent Identity that performed the operations


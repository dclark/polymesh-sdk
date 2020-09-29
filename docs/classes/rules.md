# Rules

Handles all Security Token Rules related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Rules**

## Index

### Properties

* [context](rules.md#protected-context)
* [parent](rules.md#protected-parent)

### Methods

* [arePaused](rules.md#arepaused)
* [checkMint](rules.md#checkmint)
* [checkTransfer](rules.md#checktransfer)
* [get](rules.md#get)
* [pause](rules.md#pause)
* [reset](rules.md#reset)
* [set](rules.md#set)
* [unpause](rules.md#unpause)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:12_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Namespace.ts#L12)

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:10_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/Namespace.ts#L10)

## Methods

### arePaused

▸ **arePaused**\(\): _Promise‹boolean›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Rules.ts:166_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/Rules.ts#L166)

Check whether compliance rules are paused or not

**Returns:** _Promise‹boolean›_

### checkMint

▸ **checkMint**\(`args`: object\): _Promise‹_[_RuleCompliance_](../interfaces/rulecompliance.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Rules.ts:156_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/Rules.ts#L156)

Check whether minting to an Identity complies with all the rules of this asset

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `to` | string \| [Identity](identity.md) | receiver Identity |

**Returns:** _Promise‹_[_RuleCompliance_](../interfaces/rulecompliance.md)_›_

### checkTransfer

▸ **checkTransfer**\(`args`: object\): _Promise‹_[_RuleCompliance_](../interfaces/rulecompliance.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Rules.ts:143_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/Rules.ts#L143)

Check whether transferring from one Identity to another complies with all the rules of this asset

**Parameters:**

▪ **args**: _object_

| Name | Type | Description |
| :--- | :--- | :--- |
| `from?` | string \| [Identity](identity.md) | sender Identity \(optional, defaults to the current Identity\) |
| `to` | string \| [Identity](identity.md) | receiver Identity |

**Returns:** _Promise‹_[_RuleCompliance_](../interfaces/rulecompliance.md)_›_

### get

▸ **get**\(\): _Promise‹_[_Rule_](../interfaces/rule.md)_\[\]›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Rules.ts:47_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/Rules.ts#L47)

Retrieve all of the Security Token's transfer rules

**`note`** can be subscribed to

**Returns:** _Promise‹_[_Rule_](../interfaces/rule.md)_\[\]›_

▸ **get**\(`callback`: [SubCallback](../globals.md#subcallback)‹[Rule](../interfaces/rule.md)\[\]›\): _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Rules.ts:48_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/Rules.ts#L48)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback` | [SubCallback](../globals.md#subcallback)‹[Rule](../interfaces/rule.md)\[\]› |

**Returns:** _Promise‹_[_UnsubCallback_](../globals.md#unsubcallback)_›_

### pause

▸ **pause**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Rules.ts:118_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/Rules.ts#L118)

Pause all the Security Token's rules. This means that all transfers and token issuance will be allowed until rules are unpaused

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### reset

▸ **reset**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Rules.ts:107_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/Rules.ts#L107)

Detele all the current rules for the Security Token.

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### set

▸ **set**\(`args`: [SetTokenRulesParams](../interfaces/settokenrulesparams.md)\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Rules.ts:34_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/Rules.ts#L34)

Configure transfer rules for the Security Token. This operation will replace all existing rules with a new rule set

This requires two transactions

**`example`** Say A, B, C, D and E are rules and we arrange them as `[[A, B], [C, D], [E]]`. For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `args` | [SetTokenRulesParams](../interfaces/settokenrulesparams.md) |

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

### unpause

▸ **unpause**\(\): _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_

_Defined in_ [_src/api/entities/SecurityToken/Compliance/Rules.ts:129_](https://github.com/PolymathNetwork/polymesh-sdk/blob/da32f46a/src/api/entities/SecurityToken/Compliance/Rules.ts#L129)

Un-pause all the Security Token's current rules

**Returns:** _Promise‹_[_TransactionQueue_](transactionqueue.md)_‹_[_SecurityToken_](securitytoken.md)_››_


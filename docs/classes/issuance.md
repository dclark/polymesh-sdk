# Issuance

Handles all Security Token Issuance related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Issuance**

## Index

### Properties

* [context](issuance.md#protected-context)
* [issue](issuance.md#issue)
* [parent](issuance.md#protected-parent)

## Properties

### `Protected` context

• **context**: [_Context_](context.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:11_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L11)

### issue

• **issue**: _ProcedureMethod‹object,_ [_SecurityToken_](securitytoken.md)_›_

_Defined in_ [_src/api/entities/SecurityToken/Issuance.ts:30_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/SecurityToken/Issuance.ts#L30)

Issue a certain amount of tokens to the primary issuance agent

**`param`** amount of tokens to be issued to primary issuance agent

**`note`** required role:

* Security Token Primary Issuance Agent

### `Protected` parent

• **parent**: [_SecurityToken_](securitytoken.md)

_Inherited from void_

_Defined in_ [_src/api/entities/Namespace.ts:9_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/api/entities/Namespace.ts#L9)


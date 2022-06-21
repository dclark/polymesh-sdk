[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / CheckPermissionsResult

# Interface: CheckPermissionsResult<Type\>

[types](../modules/types.md).CheckPermissionsResult

Result of a `checkPermissions` call. If `Type` is `Account`, represents whether the Account
  has all the necessary secondary key Permissions. If `Type` is `Identity`, represents whether the
  Identity has all the necessary external agent Permissions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`SignerType`](../enums/types.SignerType.md) |

## Table of contents

### Properties

- [message](types.CheckPermissionsResult.md#message)
- [missingPermissions](types.CheckPermissionsResult.md#missingpermissions)
- [result](types.CheckPermissionsResult.md#result)

## Properties

### message

• `Optional` **message**: `string`

optional message explaining the reason for failure in special cases

#### Defined in

[types/index.ts:1008](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1008)

___

### missingPermissions

• `Optional` **missingPermissions**: `Type` extends [`Account`](../enums/types.SignerType.md#account) ? [`SimplePermissions`](types.SimplePermissions.md) : ``null`` \| `TxTag`[]

required permissions which the signer *DOESN'T* have. Only present if `result` is `false`

#### Defined in

[types/index.ts:1000](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1000)

___

### result

• **result**: `boolean`

whether the signer complies with the required permissions or not

#### Defined in

[types/index.ts:1004](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1004)

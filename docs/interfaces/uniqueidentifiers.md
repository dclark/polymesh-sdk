# Interface: UniqueIdentifiers

Properties that uniquely identify an Identity
Properties that uniquely identify a TickerReservation
Properties that uniquely identify a Security Token

## Hierarchy

* **UniqueIdentifiers**

## Index

### Properties

* [address](uniqueidentifiers.md#address)
* [authId](uniqueidentifiers.md#authid)
* [did](uniqueidentifiers.md#did)
* [id](uniqueidentifiers.md#id)
* [ticker](uniqueidentifiers.md#ticker)
* [type](uniqueidentifiers.md#optional-type)

## Properties

###  address

• **address**: *string*

*Defined in [src/api/entities/Account.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Account.ts#L35)*

___

###  authId

• **authId**: *BigNumber*

*Defined in [src/api/entities/AuthorizationRequest.ts:20](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/AuthorizationRequest.ts#L20)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/Identity/index.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Identity/index.ts#L73)*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/DefaultTrustedClaimIssuer.ts#L10)*

*Defined in [src/api/entities/Portfolio/index.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Portfolio/index.ts#L35)*

*Defined in [src/api/entities/DefaultPortfolio.ts:4](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/DefaultPortfolio.ts#L4)*

*Defined in [src/api/entities/NumberedPortfolio.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/NumberedPortfolio.ts#L24)*

*Defined in [src/api/entities/Agent.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Agent.ts#L16)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Sto/index.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Sto/index.ts#L35)*

*Defined in [src/api/entities/Venue/index.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Venue/index.ts#L31)*

*Defined in [src/api/entities/Instruction/index.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Instruction/index.ts#L54)*

*Defined in [src/api/entities/Portfolio/index.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Portfolio/index.ts#L36)*

*Defined in [src/api/entities/NumberedPortfolio.ts:25](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/NumberedPortfolio.ts#L25)*

*Defined in [src/api/entities/Checkpoint.ts:21](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Checkpoint.ts#L21)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L16)*

*Defined in [src/api/entities/PermissionGroup.ts:8](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/PermissionGroup.ts#L8)*

*Defined in [src/api/entities/CorporateAction/index.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L31)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CustomPermissionGroup.ts#L18)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/TickerReservation/index.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/TickerReservation/index.ts#L27)*

*Defined in [src/api/entities/SecurityToken/index.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/SecurityToken/index.ts#L74)*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/DefaultTrustedClaimIssuer.ts#L11)*

*Defined in [src/api/entities/Sto/index.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Sto/index.ts#L36)*

*Defined in [src/api/entities/Checkpoint.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Checkpoint.ts#L22)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CheckpointSchedule/index.ts#L17)*

*Defined in [src/api/entities/Agent.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/Agent.ts#L17)*

*Defined in [src/api/entities/PermissionGroup.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/PermissionGroup.ts#L7)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:13](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/KnownPermissionGroup.ts#L13)*

*Defined in [src/api/entities/CorporateAction/index.ts:32](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CorporateAction/index.ts#L32)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/CustomPermissionGroup.ts#L19)*

ticker of the security token

___

### `Optional` type

• **type**? : *[PermissionGroupType](../enums/permissiongrouptype.md)*

*Defined in [src/api/entities/PermissionGroup.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/PermissionGroup.ts#L9)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:12](https://github.com/PolymathNetwork/polymesh-sdk/blob/7362b318/src/api/entities/KnownPermissionGroup.ts#L12)*

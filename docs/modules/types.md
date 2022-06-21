[@polymeshassociation/polymesh-sdk](../README.md) / [Modules](../modules.md) / types

# Module: types

## Table of contents

### References

- [AffirmationStatus](types.md#affirmationstatus)
- [AgentWithGroup](types.md#agentwithgroup)
- [AssetDetails](types.md#assetdetails)
- [CaCheckpointType](types.md#cacheckpointtype)
- [CheckpointScheduleParams](types.md#checkpointscheduleparams)
- [CorporateActionDefaultConfig](types.md#corporateactiondefaultconfig)
- [CorporateActionKind](types.md#corporateactionkind)
- [CorporateActionParams](types.md#corporateactionparams)
- [CorporateActionTargets](types.md#corporateactiontargets)
- [DistributionParticipant](types.md#distributionparticipant)
- [DividendDistributionDetails](types.md#dividenddistributiondetails)
- [DividendDistributionParams](types.md#dividenddistributionparams)
- [HistoricSettlement](types.md#historicsettlement)
- [IdentityBalance](types.md#identitybalance)
- [InputCaCheckpoint](types.md#inputcacheckpoint)
- [InputTargets](types.md#inputtargets)
- [InputTaxWithholding](types.md#inputtaxwithholding)
- [InstructionAffirmation](types.md#instructionaffirmation)
- [InstructionDetails](types.md#instructiondetails)
- [InstructionStatus](types.md#instructionstatus)
- [InstructionStatusResult](types.md#instructionstatusresult)
- [InstructionType](types.md#instructiontype)
- [Investment](types.md#investment)
- [Leg](types.md#leg)
- [OfferingBalanceStatus](types.md#offeringbalancestatus)
- [OfferingDetails](types.md#offeringdetails)
- [OfferingSaleStatus](types.md#offeringsalestatus)
- [OfferingStatus](types.md#offeringstatus)
- [OfferingTier](types.md#offeringtier)
- [OfferingTimingStatus](types.md#offeringtimingstatus)
- [PortfolioBalance](types.md#portfoliobalance)
- [ScheduleDetails](types.md#scheduledetails)
- [SettlementLeg](types.md#settlementleg)
- [SubsidyData](types.md#subsidydata)
- [SubsidyWithAllowance](types.md#subsidywithallowance)
- [TargetTreatment](types.md#targettreatment)
- [TaxWithholding](types.md#taxwithholding)
- [TickerReservationDetails](types.md#tickerreservationdetails)
- [TickerReservationStatus](types.md#tickerreservationstatus)
- [Tier](types.md#tier)
- [TransferBreakdown](types.md#transferbreakdown)
- [TransferRestrictionResult](types.md#transferrestrictionresult)
- [VenueDetails](types.md#venuedetails)
- [VenueType](types.md#venuetype)

### Enumerations

- [AuthorizationType](../enums/types.AuthorizationType.md)
- [CalendarUnit](../enums/types.CalendarUnit.md)
- [ClaimType](../enums/types.ClaimType.md)
- [ConditionTarget](../enums/types.ConditionTarget.md)
- [ConditionType](../enums/types.ConditionType.md)
- [ErrorCode](../enums/types.ErrorCode.md)
- [KnownAssetType](../enums/types.KnownAssetType.md)
- [PayingAccountType](../enums/types.PayingAccountType.md)
- [PermissionGroupType](../enums/types.PermissionGroupType.md)
- [PermissionType](../enums/types.PermissionType.md)
- [RoleType](../enums/types.RoleType.md)
- [ScopeType](../enums/types.ScopeType.md)
- [SecurityIdentifierType](../enums/types.SecurityIdentifierType.md)
- [SignerType](../enums/types.SignerType.md)
- [TransactionArgumentType](../enums/types.TransactionArgumentType.md)
- [TransactionQueueStatus](../enums/types.TransactionQueueStatus.md)
- [TransactionStatus](../enums/types.TransactionStatus.md)
- [TransferError](../enums/types.TransferError.md)
- [TransferRestrictionType](../enums/types.TransferRestrictionType.md)
- [TransferStatus](../enums/types.TransferStatus.md)
- [TxGroup](../enums/types.TxGroup.md)

### Interfaces

- [AccreditedClaim](../interfaces/types.AccreditedClaim.md)
- [ActiveTransferRestrictions](../interfaces/types.ActiveTransferRestrictions.md)
- [AffiliateClaim](../interfaces/types.AffiliateClaim.md)
- [ArrayTransactionArgument](../interfaces/types.ArrayTransactionArgument.md)
- [AssetDocument](../interfaces/types.AssetDocument.md)
- [AssetWithGroup](../interfaces/types.AssetWithGroup.md)
- [Balance](../interfaces/types.Balance.md)
- [BlockedClaim](../interfaces/types.BlockedClaim.md)
- [BuyLockupClaim](../interfaces/types.BuyLockupClaim.md)
- [CalendarPeriod](../interfaces/types.CalendarPeriod.md)
- [CddClaim](../interfaces/types.CddClaim.md)
- [CddProviderRole](../interfaces/types.CddProviderRole.md)
- [CheckPermissionsResult](../interfaces/types.CheckPermissionsResult.md)
- [CheckRolesResult](../interfaces/types.CheckRolesResult.md)
- [CheckpointWithData](../interfaces/types.CheckpointWithData.md)
- [ClaimData](../interfaces/types.ClaimData.md)
- [ClaimScope](../interfaces/types.ClaimScope.md)
- [ClaimTarget](../interfaces/types.ClaimTarget.md)
- [ComplexTransactionArgument](../interfaces/types.ComplexTransactionArgument.md)
- [Compliance](../interfaces/types.Compliance.md)
- [ComplianceRequirements](../interfaces/types.ComplianceRequirements.md)
- [ConditionBase](../interfaces/types.ConditionBase.md)
- [ConditionCompliance](../interfaces/types.ConditionCompliance.md)
- [CountTransferRestriction](../interfaces/types.CountTransferRestriction.md)
- [CountTransferRestrictionInput](../interfaces/types.CountTransferRestrictionInput.md)
- [DistributionPayment](../interfaces/types.DistributionPayment.md)
- [DistributionWithDetails](../interfaces/types.DistributionWithDetails.md)
- [EventIdentifier](../interfaces/types.EventIdentifier.md)
- [ExemptKey](../interfaces/types.ExemptKey.md)
- [ExemptedClaim](../interfaces/types.ExemptedClaim.md)
- [ExternalAgentCondition](../interfaces/types.ExternalAgentCondition.md)
- [ExtrinsicData](../interfaces/types.ExtrinsicData.md)
- [ExtrinsicDataWithFees](../interfaces/types.ExtrinsicDataWithFees.md)
- [Fees](../interfaces/types.Fees.md)
- [FeesBreakdown](../interfaces/types.FeesBreakdown.md)
- [GroupedInstructions](../interfaces/types.GroupedInstructions.md)
- [HistoricAgentOperation](../interfaces/types.HistoricAgentOperation.md)
- [IdentityCondition](../interfaces/types.IdentityCondition.md)
- [IdentityRole](../interfaces/types.IdentityRole.md)
- [IdentityWithClaims](../interfaces/types.IdentityWithClaims.md)
- [InvestorUniquenessClaim](../interfaces/types.InvestorUniquenessClaim.md)
- [InvestorUniquenessV2Claim](../interfaces/types.InvestorUniquenessV2Claim.md)
- [JurisdictionClaim](../interfaces/types.JurisdictionClaim.md)
- [KycClaim](../interfaces/types.KycClaim.md)
- [MiddlewareConfig](../interfaces/types.MiddlewareConfig.md)
- [MultiClaimCondition](../interfaces/types.MultiClaimCondition.md)
- [NetworkProperties](../interfaces/types.NetworkProperties.md)
- [NoArgsProcedureMethod](../interfaces/types.NoArgsProcedureMethod.md)
- [NoDataClaim](../interfaces/types.NoDataClaim.md)
- [NoTypeClaim](../interfaces/types.NoTypeClaim.md)
- [OfferingWithDetails](../interfaces/types.OfferingWithDetails.md)
- [PaginationOptions](../interfaces/types.PaginationOptions.md)
- [PayingAccount](../interfaces/types.PayingAccount.md)
- [PercentageTransferRestriction](../interfaces/types.PercentageTransferRestriction.md)
- [PercentageTransferRestrictionInput](../interfaces/types.PercentageTransferRestrictionInput.md)
- [PermissionGroups](../interfaces/types.PermissionGroups.md)
- [PermissionedAccount](../interfaces/types.PermissionedAccount.md)
- [Permissions](../interfaces/types.Permissions.md)
- [PlainTransactionArgument](../interfaces/types.PlainTransactionArgument.md)
- [PortfolioCustodianRole](../interfaces/types.PortfolioCustodianRole.md)
- [PortfolioMovement](../interfaces/types.PortfolioMovement.md)
- [ProcedureAuthorizationStatus](../interfaces/types.ProcedureAuthorizationStatus.md)
- [ProcedureMethod](../interfaces/types.ProcedureMethod.md)
- [ProcedureOpts](../interfaces/types.ProcedureOpts.md)
- [ProtocolFees](../interfaces/types.ProtocolFees.md)
- [Requirement](../interfaces/types.Requirement.md)
- [RequirementCompliance](../interfaces/types.RequirementCompliance.md)
- [ResultSet](../interfaces/types.ResultSet.md)
- [ScheduleWithDetails](../interfaces/types.ScheduleWithDetails.md)
- [Scope](../interfaces/types.Scope.md)
- [SectionPermissions](../interfaces/types.SectionPermissions.md)
- [SecurityIdentifier](../interfaces/types.SecurityIdentifier.md)
- [SellLockupClaim](../interfaces/types.SellLockupClaim.md)
- [SignerValue](../interfaces/types.SignerValue.md)
- [SimpleEnumTransactionArgument](../interfaces/types.SimpleEnumTransactionArgument.md)
- [SimplePermissions](../interfaces/types.SimplePermissions.md)
- [SingleClaimCondition](../interfaces/types.SingleClaimCondition.md)
- [ThirdPartyFees](../interfaces/types.ThirdPartyFees.md)
- [TickerOwnerRole](../interfaces/types.TickerOwnerRole.md)
- [TransactionPermissions](../interfaces/types.TransactionPermissions.md)
- [TransferRestriction](../interfaces/types.TransferRestriction.md)
- [TrustedClaimIssuer](../interfaces/types.TrustedClaimIssuer.md)
- [VenueOwnerRole](../interfaces/types.VenueOwnerRole.md)

### Type Aliases

- [AccountBalance](types.md#accountbalance)
- [AddRelayerPayingKeyAuthorizationData](types.md#addrelayerpayingkeyauthorizationdata)
- [Authorization](types.md#authorization)
- [BecomeAgentAuthorizationData](types.md#becomeagentauthorizationdata)
- [Claim](types.md#claim)
- [Condition](types.md#condition)
- [GenericAuthorizationData](types.md#genericauthorizationdata)
- [GroupPermissions](types.md#grouppermissions)
- [InputCondition](types.md#inputcondition)
- [InputConditionBase](types.md#inputconditionbase)
- [InputCorporateActionTargets](types.md#inputcorporateactiontargets)
- [InputCorporateActionTaxWithholdings](types.md#inputcorporateactiontaxwithholdings)
- [InputRequirement](types.md#inputrequirement)
- [InputTrustedClaimIssuer](types.md#inputtrustedclaimissuer)
- [JoinIdentityAuthorizationData](types.md#joinidentityauthorizationdata)
- [NextKey](types.md#nextkey)
- [PermissionsLike](types.md#permissionslike)
- [PortfolioCustodyAuthorizationData](types.md#portfoliocustodyauthorizationdata)
- [PortfolioLike](types.md#portfoliolike)
- [PrivateKey](types.md#privatekey)
- [Role](types.md#role)
- [RotatePrimaryKeyAuthorizationData](types.md#rotateprimarykeyauthorizationdata)
- [RotatePrimaryKeyToSecondaryData](types.md#rotateprimarykeytosecondarydata)
- [ScopedClaim](types.md#scopedclaim)
- [Signer](types.md#signer)
- [SubCallback](types.md#subcallback)
- [TransactionArgument](types.md#transactionargument)
- [UnscopedClaim](types.md#unscopedclaim)
- [UnsubCallback](types.md#unsubcallback)

## References

### AffirmationStatus

Re-exports [AffirmationStatus](../enums/api_entities_Instruction_types.AffirmationStatus.md)

___

### AgentWithGroup

Re-exports [AgentWithGroup](../interfaces/api_entities_Asset_types.AgentWithGroup.md)

___

### AssetDetails

Re-exports [AssetDetails](../interfaces/api_entities_Asset_types.AssetDetails.md)

___

### CaCheckpointType

Re-exports [CaCheckpointType](../enums/api_entities_Asset_Checkpoints_types.CaCheckpointType.md)

___

### CheckpointScheduleParams

Re-exports [CheckpointScheduleParams](api_entities_CheckpointSchedule_types.md#checkpointscheduleparams)

___

### CorporateActionDefaultConfig

Re-exports [CorporateActionDefaultConfig](../interfaces/api_entities_Asset_CorporateActions_types.CorporateActionDefaultConfig.md)

___

### CorporateActionKind

Re-exports [CorporateActionKind](../enums/api_entities_CorporateActionBase_types.CorporateActionKind.md)

___

### CorporateActionParams

Renames and re-exports [Params](../interfaces/api_entities_CorporateActionBase.Params.md)

___

### CorporateActionTargets

Re-exports [CorporateActionTargets](../interfaces/api_entities_CorporateActionBase_types.CorporateActionTargets.md)

___

### DistributionParticipant

Re-exports [DistributionParticipant](../interfaces/api_entities_DividendDistribution_types.DistributionParticipant.md)

___

### DividendDistributionDetails

Re-exports [DividendDistributionDetails](../interfaces/api_entities_DividendDistribution_types.DividendDistributionDetails.md)

___

### DividendDistributionParams

Re-exports [DividendDistributionParams](../interfaces/api_entities_DividendDistribution.DividendDistributionParams.md)

___

### HistoricSettlement

Re-exports [HistoricSettlement](../interfaces/api_entities_Portfolio_types.HistoricSettlement.md)

___

### IdentityBalance

Re-exports [IdentityBalance](../interfaces/api_entities_Asset_types.IdentityBalance.md)

___

### InputCaCheckpoint

Re-exports [InputCaCheckpoint](api_entities_Asset_Checkpoints_types.md#inputcacheckpoint)

___

### InputTargets

Re-exports [InputTargets](api_entities_CorporateActionBase_types.md#inputtargets)

___

### InputTaxWithholding

Re-exports [InputTaxWithholding](api_entities_CorporateActionBase_types.md#inputtaxwithholding)

___

### InstructionAffirmation

Re-exports [InstructionAffirmation](../interfaces/api_entities_Instruction_types.InstructionAffirmation.md)

___

### InstructionDetails

Re-exports [InstructionDetails](api_entities_Instruction_types.md#instructiondetails)

___

### InstructionStatus

Re-exports [InstructionStatus](../enums/api_entities_Instruction_types.InstructionStatus.md)

___

### InstructionStatusResult

Re-exports [InstructionStatusResult](api_entities_Instruction_types.md#instructionstatusresult)

___

### InstructionType

Re-exports [InstructionType](../enums/api_entities_Instruction_types.InstructionType.md)

___

### Investment

Re-exports [Investment](../interfaces/api_entities_Offering_types.Investment.md)

___

### Leg

Re-exports [Leg](../interfaces/api_entities_Instruction_types.Leg.md)

___

### OfferingBalanceStatus

Re-exports [OfferingBalanceStatus](../enums/api_entities_Offering_types.OfferingBalanceStatus.md)

___

### OfferingDetails

Re-exports [OfferingDetails](../interfaces/api_entities_Offering_types.OfferingDetails.md)

___

### OfferingSaleStatus

Re-exports [OfferingSaleStatus](../enums/api_entities_Offering_types.OfferingSaleStatus.md)

___

### OfferingStatus

Re-exports [OfferingStatus](../interfaces/api_entities_Offering_types.OfferingStatus.md)

___

### OfferingTier

Re-exports [OfferingTier](../interfaces/api_entities_Offering_types.OfferingTier.md)

___

### OfferingTimingStatus

Re-exports [OfferingTimingStatus](../enums/api_entities_Offering_types.OfferingTimingStatus.md)

___

### PortfolioBalance

Re-exports [PortfolioBalance](../interfaces/api_entities_Portfolio_types.PortfolioBalance.md)

___

### ScheduleDetails

Re-exports [ScheduleDetails](../interfaces/api_entities_CheckpointSchedule_types.ScheduleDetails.md)

___

### SettlementLeg

Re-exports [SettlementLeg](../interfaces/api_entities_Portfolio_types.SettlementLeg.md)

___

### SubsidyData

Re-exports [SubsidyData](../interfaces/api_entities_Subsidy_types.SubsidyData.md)

___

### SubsidyWithAllowance

Re-exports [SubsidyWithAllowance](../interfaces/api_entities_Subsidy_types.SubsidyWithAllowance.md)

___

### TargetTreatment

Re-exports [TargetTreatment](../enums/api_entities_CorporateActionBase_types.TargetTreatment.md)

___

### TaxWithholding

Re-exports [TaxWithholding](../interfaces/api_entities_CorporateActionBase_types.TaxWithholding.md)

___

### TickerReservationDetails

Re-exports [TickerReservationDetails](../interfaces/api_entities_TickerReservation_types.TickerReservationDetails.md)

___

### TickerReservationStatus

Re-exports [TickerReservationStatus](../enums/api_entities_TickerReservation_types.TickerReservationStatus.md)

___

### Tier

Re-exports [Tier](../interfaces/api_entities_Offering_types.Tier.md)

___

### TransferBreakdown

Re-exports [TransferBreakdown](../interfaces/api_entities_Asset_types.TransferBreakdown.md)

___

### TransferRestrictionResult

Re-exports [TransferRestrictionResult](../interfaces/api_entities_Asset_types.TransferRestrictionResult.md)

___

### VenueDetails

Re-exports [VenueDetails](../interfaces/api_entities_Venue_types.VenueDetails.md)

___

### VenueType

Re-exports [VenueType](../enums/api_entities_Venue_types.VenueType.md)

## Type Aliases

### AccountBalance

Ƭ **AccountBalance**: [`Balance`](../interfaces/types.Balance.md)

#### Defined in

[types/index.ts:682](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L682)

___

### AddRelayerPayingKeyAuthorizationData

Ƭ **AddRelayerPayingKeyAuthorizationData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`AddRelayerPayingKey`](../enums/types.AuthorizationType.md#addrelayerpayingkey) |
| `value` | [`SubsidyData`](../interfaces/api_entities_Subsidy_types.SubsidyData.md) |

#### Defined in

[types/index.ts:1062](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1062)

___

### Authorization

Ƭ **Authorization**: [`RotatePrimaryKeyAuthorizationData`](types.md#rotateprimarykeyauthorizationdata) \| [`JoinIdentityAuthorizationData`](types.md#joinidentityauthorizationdata) \| [`PortfolioCustodyAuthorizationData`](types.md#portfoliocustodyauthorizationdata) \| [`BecomeAgentAuthorizationData`](types.md#becomeagentauthorizationdata) \| [`AddRelayerPayingKeyAuthorizationData`](types.md#addrelayerpayingkeyauthorizationdata) \| [`RotatePrimaryKeyToSecondaryData`](types.md#rotateprimarykeytosecondarydata) \| [`GenericAuthorizationData`](types.md#genericauthorizationdata)

Authorization request data corresponding to type

#### Defined in

[types/index.ts:1082](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1082)

___

### BecomeAgentAuthorizationData

Ƭ **BecomeAgentAuthorizationData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`BecomeAgent`](../enums/types.AuthorizationType.md#becomeagent) |
| `value` | [`KnownPermissionGroup`](../classes/api_entities_KnownPermissionGroup.KnownPermissionGroup.md) \| [`CustomPermissionGroup`](../classes/api_entities_CustomPermissionGroup.CustomPermissionGroup.md) |

#### Defined in

[types/index.ts:1057](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1057)

___

### Claim

Ƭ **Claim**: [`ScopedClaim`](types.md#scopedclaim) \| [`UnscopedClaim`](types.md#unscopedclaim)

#### Defined in

[types/index.ts:307](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L307)

___

### Condition

Ƭ **Condition**: [`SingleClaimCondition`](../interfaces/types.SingleClaimCondition.md) \| [`MultiClaimCondition`](../interfaces/types.MultiClaimCondition.md) \| [`IdentityCondition`](../interfaces/types.IdentityCondition.md) \| [`ExternalAgentCondition`](../interfaces/types.ExternalAgentCondition.md) & [`ConditionBase`](../interfaces/types.ConditionBase.md)

#### Defined in

[types/index.ts:420](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L420)

___

### GenericAuthorizationData

Ƭ **GenericAuthorizationData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | `Exclude`<[`AuthorizationType`](../enums/types.AuthorizationType.md), [`RotatePrimaryKey`](../enums/types.AuthorizationType.md#rotateprimarykey) \| [`JoinIdentity`](../enums/types.AuthorizationType.md#joinidentity) \| [`PortfolioCustody`](../enums/types.AuthorizationType.md#portfoliocustody) \| [`BecomeAgent`](../enums/types.AuthorizationType.md#becomeagent) \| [`AddRelayerPayingKey`](../enums/types.AuthorizationType.md#addrelayerpayingkey) \| [`RotatePrimaryKeyToSecondary`](../enums/types.AuthorizationType.md#rotateprimarykeytosecondary)\> |
| `value` | `string` |

#### Defined in

[types/index.ts:1067](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1067)

___

### GroupPermissions

Ƭ **GroupPermissions**: `Pick`<[`Permissions`](../interfaces/types.Permissions.md), ``"transactions"`` \| ``"transactionGroups"``\>

Asset permissions shared by agents in a group

#### Defined in

[types/index.ts:945](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L945)

___

### InputCondition

Ƭ **InputCondition**: [`SingleClaimCondition`](../interfaces/types.SingleClaimCondition.md) \| [`MultiClaimCondition`](../interfaces/types.MultiClaimCondition.md) \| [`Modify`](types_utils.md#modify)<[`IdentityCondition`](../interfaces/types.IdentityCondition.md), { `identity`: `string` \| [`Identity`](../classes/api_entities_Identity.Identity.md)  }\> \| [`ExternalAgentCondition`](../interfaces/types.ExternalAgentCondition.md) & [`InputConditionBase`](types.md#inputconditionbase)

#### Defined in

[types/index.ts:428](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L428)

___

### InputConditionBase

Ƭ **InputConditionBase**: [`Modify`](types_utils.md#modify)<[`ConditionBase`](../interfaces/types.ConditionBase.md), { `trustedClaimIssuers?`: [`InputTrustedClaimIssuer`](types.md#inputtrustedclaimissuer)[]  }\>

#### Defined in

[types/index.ts:391](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L391)

___

### InputCorporateActionTargets

Ƭ **InputCorporateActionTargets**: [`Modify`](types_utils.md#modify)<[`CorporateActionTargets`](../interfaces/api_entities_CorporateActionBase_types.CorporateActionTargets.md), { `identities`: (`string` \| [`Identity`](../classes/api_entities_Identity.Identity.md))[]  }\>

Targets of a corporate action in a flexible structure for input purposes

#### Defined in

[types/index.ts:1419](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1419)

___

### InputCorporateActionTaxWithholdings

Ƭ **InputCorporateActionTaxWithholdings**: [`Modify`](types_utils.md#modify)<[`TaxWithholding`](../interfaces/api_entities_CorporateActionBase_types.TaxWithholding.md), { `identity`: `string` \| [`Identity`](../classes/api_entities_Identity.Identity.md)  }\>[]

Per-Identity tax withholdings of a corporate action in a flexible structure for input purposes

#### Defined in

[types/index.ts:1429](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1429)

___

### InputRequirement

Ƭ **InputRequirement**: [`Modify`](types_utils.md#modify)<[`Requirement`](../interfaces/types.Requirement.md), { `conditions`: [`InputCondition`](types.md#inputcondition)[]  }\>

#### Defined in

[types/index.ts:454](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L454)

___

### InputTrustedClaimIssuer

Ƭ **InputTrustedClaimIssuer**: [`Modify`](types_utils.md#modify)<[`TrustedClaimIssuer`](../interfaces/types.TrustedClaimIssuer.md), { `identity`: `string` \| [`Identity`](../classes/api_entities_Identity.Identity.md)  }\>

#### Defined in

[types/index.ts:367](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L367)

___

### JoinIdentityAuthorizationData

Ƭ **JoinIdentityAuthorizationData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`JoinIdentity`](../enums/types.AuthorizationType.md#joinidentity) |
| `value` | [`Permissions`](../interfaces/types.Permissions.md) |

#### Defined in

[types/index.ts:1047](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1047)

___

### NextKey

Ƭ **NextKey**: `string` \| `BigNumber` \| ``null``

#### Defined in

[types/index.ts:689](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L689)

___

### PermissionsLike

Ƭ **PermissionsLike**: { `assets?`: [`SectionPermissions`](../interfaces/types.SectionPermissions.md)<`string` \| [`Asset`](../classes/api_entities_Asset.Asset.md)\> \| ``null`` ; `portfolios?`: [`SectionPermissions`](../interfaces/types.SectionPermissions.md)<[`PortfolioLike`](types.md#portfoliolike)\> \| ``null``  } & { `transactions?`: [`TransactionPermissions`](../interfaces/types.TransactionPermissions.md) \| ``null``  } \| { `transactionGroups?`: [`TxGroup`](../enums/types.TxGroup.md)[]  }

Permissions to grant to a Signer over an Identity

[Permissions](../interfaces/types.Permissions.md)

**`note`** TxGroups in the `transactionGroups` array will be transformed into their corresponding `TxTag`s

#### Defined in

[types/index.ts:1180](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1180)

___

### PortfolioCustodyAuthorizationData

Ƭ **PortfolioCustodyAuthorizationData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`PortfolioCustody`](../enums/types.AuthorizationType.md#portfoliocustody) |
| `value` | [`NumberedPortfolio`](../classes/api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](../classes/api_entities_DefaultPortfolio.DefaultPortfolio.md) |

#### Defined in

[types/index.ts:1052](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1052)

___

### PortfolioLike

Ƭ **PortfolioLike**: `string` \| [`Identity`](../classes/api_entities_Identity.Identity.md) \| [`NumberedPortfolio`](../classes/api_entities_NumberedPortfolio.NumberedPortfolio.md) \| [`DefaultPortfolio`](../classes/api_entities_DefaultPortfolio.DefaultPortfolio.md) \| { `id`: `BigNumber` ; `identity`: `string` \| [`Identity`](../classes/api_entities_Identity.Identity.md)  }

#### Defined in

[types/index.ts:1166](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1166)

___

### PrivateKey

Ƭ **PrivateKey**: { `uri`: `string`  } \| { `mnemonic`: `string`  } \| { `seed`: `string`  }

URI|mnemonic|hex representation of a private key

#### Defined in

[types/index.ts:1405](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1405)

___

### Role

Ƭ **Role**: [`TickerOwnerRole`](../interfaces/types.TickerOwnerRole.md) \| [`CddProviderRole`](../interfaces/types.CddProviderRole.md) \| [`VenueOwnerRole`](../interfaces/types.VenueOwnerRole.md) \| [`PortfolioCustodianRole`](../interfaces/types.PortfolioCustodianRole.md) \| [`IdentityRole`](../interfaces/types.IdentityRole.md)

#### Defined in

[types/index.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L125)

___

### RotatePrimaryKeyAuthorizationData

Ƭ **RotatePrimaryKeyAuthorizationData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`RotatePrimaryKey`](../enums/types.AuthorizationType.md#rotateprimarykey) |

#### Defined in

[types/index.ts:1038](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1038)

___

### RotatePrimaryKeyToSecondaryData

Ƭ **RotatePrimaryKeyToSecondaryData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | [`RotatePrimaryKeyToSecondary`](../enums/types.AuthorizationType.md#rotateprimarykeytosecondary) |
| `value` | [`Permissions`](../interfaces/types.Permissions.md) |

#### Defined in

[types/index.ts:1042](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1042)

___

### ScopedClaim

Ƭ **ScopedClaim**: [`JurisdictionClaim`](../interfaces/types.JurisdictionClaim.md) \| [`InvestorUniquenessClaim`](../interfaces/types.InvestorUniquenessClaim.md) \| [`AccreditedClaim`](../interfaces/types.AccreditedClaim.md) \| [`AffiliateClaim`](../interfaces/types.AffiliateClaim.md) \| [`BuyLockupClaim`](../interfaces/types.BuyLockupClaim.md) \| [`SellLockupClaim`](../interfaces/types.SellLockupClaim.md) \| [`KycClaim`](../interfaces/types.KycClaim.md) \| [`ExemptedClaim`](../interfaces/types.ExemptedClaim.md) \| [`BlockedClaim`](../interfaces/types.BlockedClaim.md)

#### Defined in

[types/index.ts:294](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L294)

___

### Signer

Ƭ **Signer**: [`Identity`](../classes/api_entities_Identity.Identity.md) \| [`Account`](../classes/api_entities_Account.Account.md)

#### Defined in

[types/index.ts:1148](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1148)

___

### SubCallback

Ƭ **SubCallback**<`T`\>: (`result`: `T`) => `void` \| `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`result`): `void` \| `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `T` |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[types/index.ts:651](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L651)

___

### TransactionArgument

Ƭ **TransactionArgument**: { `_rawType`: `TypeDef` ; `name`: `string` ; `optional`: `boolean`  } & [`PlainTransactionArgument`](../interfaces/types.PlainTransactionArgument.md) \| [`ArrayTransactionArgument`](../interfaces/types.ArrayTransactionArgument.md) \| [`SimpleEnumTransactionArgument`](../interfaces/types.SimpleEnumTransactionArgument.md) \| [`ComplexTransactionArgument`](../interfaces/types.ComplexTransactionArgument.md)

#### Defined in

[types/index.ts:1137](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L1137)

___

### UnscopedClaim

Ƭ **UnscopedClaim**: [`NoDataClaim`](../interfaces/types.NoDataClaim.md) \| [`NoTypeClaim`](../interfaces/types.NoTypeClaim.md) \| [`CddClaim`](../interfaces/types.CddClaim.md) \| [`InvestorUniquenessV2Claim`](../interfaces/types.InvestorUniquenessV2Claim.md)

#### Defined in

[types/index.ts:305](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L305)

___

### UnsubCallback

Ƭ **UnsubCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[types/index.ts:653](https://github.com/PolymathNetwork/polymesh-sdk/blob/31dfa0dc/src/types/index.ts#L653)

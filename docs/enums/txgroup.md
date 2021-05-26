# Enumeration: TxGroup

Transaction Groups (for permissions purposes)

## Index

### Enumeration members

* [AdvancedTokenManagement](txgroup.md#advancedtokenmanagement)
* [ClaimsManagement](txgroup.md#claimsmanagement)
* [ComplianceRequirementsManagement](txgroup.md#compliancerequirementsmanagement)
* [CorporateActionsManagement](txgroup.md#corporateactionsmanagement)
* [Distribution](txgroup.md#distribution)
* [Issuance](txgroup.md#issuance)
* [PortfolioManagement](txgroup.md#portfoliomanagement)
* [StoManagement](txgroup.md#stomanagement)
* [TokenManagement](txgroup.md#tokenmanagement)
* [TrustedClaimIssuersManagement](txgroup.md#trustedclaimissuersmanagement)

## Enumeration members

###  AdvancedTokenManagement

• **AdvancedTokenManagement**: = "AdvancedTokenManagement"

*Defined in [src/types/index.ts:773](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L773)*

- TxTags.asset.Freeze
- TxTags.asset.Unfreeze
- TxTags.identity.AddAuthorization
- TxTags.identity.RemoveAuthorization

___

###  ClaimsManagement

• **ClaimsManagement**: = "ClaimsManagement"

*Defined in [src/types/index.ts:794](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L794)*

- TxTags.identity.AddClaim
- TxTags.identity.RevokeClaim

___

###  ComplianceRequirementsManagement

• **ComplianceRequirementsManagement**: = "ComplianceRequirementsManagement"

*Defined in [src/types/index.ts:802](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L802)*

- TxTags.complianceManager.AddComplianceRequirement
- TxTags.complianceManager.RemoveComplianceRequirement
- TxTags.complianceManager.PauseAssetCompliance
- TxTags.complianceManager.ResumeAssetCompliance
- TxTags.complianceManager.ResetAssetCompliance

___

###  CorporateActionsManagement

• **CorporateActionsManagement**: = "CorporateActionsManagement"

*Defined in [src/types/index.ts:812](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L812)*

- TxTags.checkpoint.CreateSchedule,
- TxTags.checkpoint.RemoveSchedule,
- TxTags.checkpoint.CreateCheckpoint,
- TxTags.corporateAction.InitiateCorporateAction,
- TxTags.capitalDistribution.Distribute,
- TxTags.capitalDistribution.Claim,
- TxTags.identity.AddInvestorUniquenessClaim,

___

###  Distribution

• **Distribution**: = "Distribution"

*Defined in [src/types/index.ts:780](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L780)*

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.settlement.CreateVenue
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddAndAffirmInstruction

___

###  Issuance

• **Issuance**: = "Issuance"

*Defined in [src/types/index.ts:784](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L784)*

- TxTags.asset.Issue

___

###  PortfolioManagement

• **PortfolioManagement**: = "PortfolioManagement"

*Defined in [src/types/index.ts:758](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L758)*

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.portfolio.MovePortfolioFunds
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddAndAffirmInstruction
- TxTags.settlement.AffirmInstruction
- TxTags.settlement.RejectInstruction
- TxTags.settlement.CreateVenue

___

###  StoManagement

• **StoManagement**: = "StoManagement"

*Defined in [src/types/index.ts:824](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L824)*

- TxTags.sto.CreateFundraiser,
- TxTags.sto.FreezeFundraiser,
- TxTags.sto.Invest,
- TxTags.sto.ModifyFundraiserWindow,
- TxTags.sto.Stop,
- TxTags.sto.UnfreezeFundraiser,
- TxTags.identity.AddInvestorUniquenessClaim,
- TxTags.asset.Issue,
- TxTags.settlement.CreateVenue

___

###  TokenManagement

• **TokenManagement**: = "TokenManagement"

*Defined in [src/types/index.ts:766](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L766)*

- TxTags.asset.MakeDivisible
- TxTags.asset.RenameAsset
- TxTags.asset.SetFundingRound
- TxTags.asset.AddDocuments
- TxTags.asset.RemoveDocuments

___

###  TrustedClaimIssuersManagement

• **TrustedClaimIssuersManagement**: = "TrustedClaimIssuersManagement"

*Defined in [src/types/index.ts:789](https://github.com/PolymathNetwork/polymesh-sdk/blob/524b0225/src/types/index.ts#L789)*

- TxTags.complianceManager.AddDefaultTrustedClaimIssuer
- TxTags.complianceManager.RemoveDefaultTrustedClaimIssuer

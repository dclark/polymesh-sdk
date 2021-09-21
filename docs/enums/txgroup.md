# TxGroup

Transaction Groups \(for permissions purposes\)

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

### AdvancedTokenManagement

• **AdvancedTokenManagement**: = "AdvancedTokenManagement"

_Defined in_ [_src/types/index.ts:638_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L638)

* TxTags.asset.Freeze
* TxTags.asset.Unfreeze
* TxTags.identity.AddAuthorization
* TxTags.identity.RemoveAuthorization

### ClaimsManagement

• **ClaimsManagement**: = "ClaimsManagement"

_Defined in_ [_src/types/index.ts:659_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L659)

* TxTags.identity.AddClaim
* TxTags.identity.RevokeClaim

### ComplianceRequirementsManagement

• **ComplianceRequirementsManagement**: = "ComplianceRequirementsManagement"

_Defined in_ [_src/types/index.ts:667_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L667)

* TxTags.complianceManager.AddComplianceRequirement
* TxTags.complianceManager.RemoveComplianceRequirement
* TxTags.complianceManager.PauseAssetCompliance
* TxTags.complianceManager.ResumeAssetCompliance
* TxTags.complianceManager.ResetAssetCompliance

### CorporateActionsManagement

• **CorporateActionsManagement**: = "CorporateActionsManagement"

_Defined in_ [_src/types/index.ts:677_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L677)

* TxTags.checkpoint.CreateSchedule,
* TxTags.checkpoint.RemoveSchedule,
* TxTags.checkpoint.CreateCheckpoint,
* TxTags.corporateAction.InitiateCorporateAction,
* TxTags.capitalDistribution.Distribute,
* TxTags.capitalDistribution.Claim,
* TxTags.identity.AddInvestorUniquenessClaim,

### Distribution

• **Distribution**: = "Distribution"

_Defined in_ [_src/types/index.ts:645_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L645)

* TxTags.identity.AddInvestorUniquenessClaim
* TxTags.settlement.CreateVenue
* TxTags.settlement.AddInstruction
* TxTags.settlement.AddAndAffirmInstruction

### Issuance

• **Issuance**: = "Issuance"

_Defined in_ [_src/types/index.ts:649_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L649)

* TxTags.asset.Issue

### PortfolioManagement

• **PortfolioManagement**: = "PortfolioManagement"

_Defined in_ [_src/types/index.ts:623_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L623)

* TxTags.identity.AddInvestorUniquenessClaim
* TxTags.portfolio.MovePortfolioFunds
* TxTags.settlement.AddInstruction
* TxTags.settlement.AddAndAffirmInstruction
* TxTags.settlement.AffirmInstruction
* TxTags.settlement.RejectInstruction
* TxTags.settlement.CreateVenue

### StoManagement

• **StoManagement**: = "StoManagement"

_Defined in_ [_src/types/index.ts:689_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L689)

* TxTags.sto.CreateFundraiser,
* TxTags.sto.FreezeFundraiser,
* TxTags.sto.Invest,
* TxTags.sto.ModifyFundraiserWindow,
* TxTags.sto.Stop,
* TxTags.sto.UnfreezeFundraiser,
* TxTags.identity.AddInvestorUniquenessClaim,
* TxTags.asset.Issue,
* TxTags.settlement.CreateVenue

### TokenManagement

• **TokenManagement**: = "TokenManagement"

_Defined in_ [_src/types/index.ts:631_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L631)

* TxTags.asset.MakeDivisible
* TxTags.asset.RenameAsset
* TxTags.asset.SetFundingRound
* TxTags.asset.AddDocuments
* TxTags.asset.RemoveDocuments

### TrustedClaimIssuersManagement

• **TrustedClaimIssuersManagement**: = "TrustedClaimIssuersManagement"

_Defined in_ [_src/types/index.ts:654_](https://github.com/PolymathNetwork/polymesh-sdk/blob/56921667/src/types/index.ts#L654)

* TxTags.complianceManager.AddDefaultTrustedClaimIssuer
* TxTags.complianceManager.RemoveDefaultTrustedClaimIssuer


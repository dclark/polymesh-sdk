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

_Defined in_ [_src/types/index.ts:698_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L698)

* TxTags.asset.Freeze
* TxTags.asset.Unfreeze
* TxTags.identity.AddAuthorization
* TxTags.identity.RemoveAuthorization

### ClaimsManagement

• **ClaimsManagement**: = "ClaimsManagement"

_Defined in_ [_src/types/index.ts:719_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L719)

* TxTags.identity.AddClaim
* TxTags.identity.RevokeClaim

### ComplianceRequirementsManagement

• **ComplianceRequirementsManagement**: = "ComplianceRequirementsManagement"

_Defined in_ [_src/types/index.ts:727_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L727)

* TxTags.complianceManager.AddComplianceRequirement
* TxTags.complianceManager.RemoveComplianceRequirement
* TxTags.complianceManager.PauseAssetCompliance
* TxTags.complianceManager.ResumeAssetCompliance
* TxTags.complianceManager.ResetAssetCompliance

### CorporateActionsManagement

• **CorporateActionsManagement**: = "CorporateActionsManagement"

_Defined in_ [_src/types/index.ts:737_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L737)

* TxTags.checkpoint.CreateSchedule,
* TxTags.checkpoint.RemoveSchedule,
* TxTags.checkpoint.CreateCheckpoint,
* TxTags.corporateAction.InitiateCorporateAction,
* TxTags.capitalDistribution.Distribute,
* TxTags.capitalDistribution.Claim,
* TxTags.identity.AddInvestorUniquenessClaim,

### Distribution

• **Distribution**: = "Distribution"

_Defined in_ [_src/types/index.ts:705_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L705)

* TxTags.identity.AddInvestorUniquenessClaim
* TxTags.settlement.CreateVenue
* TxTags.settlement.AddInstruction
* TxTags.settlement.AddAndAffirmInstruction

### Issuance

• **Issuance**: = "Issuance"

_Defined in_ [_src/types/index.ts:709_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L709)

* TxTags.asset.Issue

### PortfolioManagement

• **PortfolioManagement**: = "PortfolioManagement"

_Defined in_ [_src/types/index.ts:683_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L683)

* TxTags.identity.AddInvestorUniquenessClaim
* TxTags.portfolio.MovePortfolioFunds
* TxTags.settlement.AddInstruction
* TxTags.settlement.AddAndAffirmInstruction
* TxTags.settlement.AffirmInstruction
* TxTags.settlement.RejectInstruction
* TxTags.settlement.CreateVenue

### StoManagement

• **StoManagement**: = "StoManagement"

_Defined in_ [_src/types/index.ts:749_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L749)

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

_Defined in_ [_src/types/index.ts:691_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L691)

* TxTags.asset.MakeDivisible
* TxTags.asset.RenameAsset
* TxTags.asset.SetFundingRound
* TxTags.asset.AddDocuments
* TxTags.asset.RemoveDocuments

### TrustedClaimIssuersManagement

• **TrustedClaimIssuersManagement**: = "TrustedClaimIssuersManagement"

_Defined in_ [_src/types/index.ts:714_](https://github.com/PolymathNetwork/polymesh-sdk/blob/959efb76/src/types/index.ts#L714)

* TxTags.complianceManager.AddDefaultTrustedClaimIssuer
* TxTags.complianceManager.RemoveDefaultTrustedClaimIssuer


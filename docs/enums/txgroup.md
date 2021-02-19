# TxGroup

Transaction Groups \(for permissions purposes\)

## Index

### Enumeration members

* [AdvancedTokenManagement](txgroup.md#advancedtokenmanagement)
* [ClaimsManagement](txgroup.md#claimsmanagement)
* [ComplianceRequirementsManagement](txgroup.md#compliancerequirementsmanagement)
* [Distribution](txgroup.md#distribution)
* [Issuance](txgroup.md#issuance)
* [PortfolioManagement](txgroup.md#portfoliomanagement)
* [TokenManagement](txgroup.md#tokenmanagement)
* [TrustedClaimIssuersManagement](txgroup.md#trustedclaimissuersmanagement)

## Enumeration members

### AdvancedTokenManagement

• **AdvancedTokenManagement**: = "AdvancedTokenManagement"

_Defined in_ [_src/types/index.ts:660_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L660)

* TxTags.asset.Freeze
* TxTags.asset.Unfreeze
* TxTags.identity.AddAuthorization
* TxTags.identity.RemoveAuthorization

### ClaimsManagement

• **ClaimsManagement**: = "ClaimsManagement"

_Defined in_ [_src/types/index.ts:681_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L681)

* TxTags.identity.AddClaim
* TxTags.identity.RevokeClaim

### ComplianceRequirementsManagement

• **ComplianceRequirementsManagement**: = "ComplianceRequirementsManagement"

_Defined in_ [_src/types/index.ts:689_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L689)

* TxTags.complianceManager.AddComplianceRequirement
* TxTags.complianceManager.RemoveComplianceRequirement
* TxTags.complianceManager.PauseAssetCompliance
* TxTags.complianceManager.ResumeAssetCompliance
* TxTags.complianceManager.ResetAssetCompliance

### Distribution

• **Distribution**: = "Distribution"

_Defined in_ [_src/types/index.ts:667_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L667)

* TxTags.identity.AddInvestorUniquenessClaim
* TxTags.settlement.CreateVenue
* TxTags.settlement.AddInstruction
* TxTags.settlement.AddAndAffirmInstruction

### Issuance

• **Issuance**: = "Issuance"

_Defined in_ [_src/types/index.ts:671_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L671)

* TxTags.asset.Issue

### PortfolioManagement

• **PortfolioManagement**: = "PortfolioManagement"

_Defined in_ [_src/types/index.ts:645_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L645)

* TxTags.identity.AddInvestorUniquenessClaim
* TxTags.portfolio.MovePortfolioFunds
* TxTags.settlement.AddInstruction
* TxTags.settlement.AddAndAffirmInstruction
* TxTags.settlement.RejectInstruction
* TxTags.settlement.CreateVenue

### TokenManagement

• **TokenManagement**: = "TokenManagement"

_Defined in_ [_src/types/index.ts:653_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L653)

* TxTags.asset.MakeDivisible
* TxTags.asset.RenameAsset
* TxTags.asset.SetFundingRound
* TxTags.asset.AddDocuments
* TxTags.asset.RemoveDocuments

### TrustedClaimIssuersManagement

• **TrustedClaimIssuersManagement**: = "TrustedClaimIssuersManagement"

_Defined in_ [_src/types/index.ts:676_](https://github.com/PolymathNetwork/polymesh-sdk/blob/a0872cf4/src/types/index.ts#L676)

* TxTags.complianceManager.AddDefaultTrustedClaimIssuer
* TxTags.complianceManager.RemoveDefaultTrustedClaimIssuer


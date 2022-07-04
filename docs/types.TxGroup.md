# Enumeration: TxGroup

[types](../wiki/types).TxGroup

Transaction Groups (for permissions purposes)

## Table of contents

### Enumeration Members

- [AdvancedAssetManagement](../wiki/types.TxGroup#advancedassetmanagement)
- [AssetManagement](../wiki/types.TxGroup#assetmanagement)
- [ClaimsManagement](../wiki/types.TxGroup#claimsmanagement)
- [ComplianceRequirementsManagement](../wiki/types.TxGroup#compliancerequirementsmanagement)
- [CorporateActionsManagement](../wiki/types.TxGroup#corporateactionsmanagement)
- [Distribution](../wiki/types.TxGroup#distribution)
- [Issuance](../wiki/types.TxGroup#issuance)
- [PortfolioManagement](../wiki/types.TxGroup#portfoliomanagement)
- [StoManagement](../wiki/types.TxGroup#stomanagement)
- [TrustedClaimIssuersManagement](../wiki/types.TxGroup#trustedclaimissuersmanagement)

## Enumeration Members

### AdvancedAssetManagement

• **AdvancedAssetManagement**

- TxTags.asset.Freeze
- TxTags.asset.Unfreeze
- TxTags.identity.AddAuthorization
- TxTags.identity.RemoveAuthorization

#### Defined in

[types/index.ts:831](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L831)

___

### AssetManagement

• **AssetManagement**

- TxTags.asset.MakeDivisible
- TxTags.asset.RenameAsset
- TxTags.asset.SetFundingRound
- TxTags.asset.AddDocuments
- TxTags.asset.RemoveDocuments

#### Defined in

[types/index.ts:824](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L824)

___

### ClaimsManagement

• **ClaimsManagement**

- TxTags.identity.AddClaim
- TxTags.identity.RevokeClaim

#### Defined in

[types/index.ts:852](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L852)

___

### ComplianceRequirementsManagement

• **ComplianceRequirementsManagement**

- TxTags.complianceManager.AddComplianceRequirement
- TxTags.complianceManager.RemoveComplianceRequirement
- TxTags.complianceManager.PauseAssetCompliance
- TxTags.complianceManager.ResumeAssetCompliance
- TxTags.complianceManager.ResetAssetCompliance

#### Defined in

[types/index.ts:860](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L860)

___

### CorporateActionsManagement

• **CorporateActionsManagement**

- TxTags.checkpoint.CreateSchedule,
- TxTags.checkpoint.RemoveSchedule,
- TxTags.checkpoint.CreateCheckpoint,
- TxTags.corporateAction.InitiateCorporateAction,
- TxTags.capitalDistribution.Distribute,
- TxTags.capitalDistribution.Claim,
- TxTags.identity.AddInvestorUniquenessClaim,

#### Defined in

[types/index.ts:870](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L870)

___

### Distribution

• **Distribution**

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.settlement.CreateVenue
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddAndAffirmInstruction

#### Defined in

[types/index.ts:838](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L838)

___

### Issuance

• **Issuance**

- TxTags.asset.Issue

#### Defined in

[types/index.ts:842](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L842)

___

### PortfolioManagement

• **PortfolioManagement**

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.portfolio.MovePortfolioFunds
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddAndAffirmInstruction
- TxTags.settlement.AffirmInstruction
- TxTags.settlement.RejectInstruction
- TxTags.settlement.CreateVenue

#### Defined in

[types/index.ts:816](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L816)

___

### StoManagement

• **StoManagement**

- TxTags.sto.CreateFundraiser,
- TxTags.sto.FreezeFundraiser,
- TxTags.sto.Invest,
- TxTags.sto.ModifyFundraiserWindow,
- TxTags.sto.Stop,
- TxTags.sto.UnfreezeFundraiser,
- TxTags.identity.AddInvestorUniquenessClaim,
- TxTags.asset.Issue,
- TxTags.settlement.CreateVenue

#### Defined in

[types/index.ts:882](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L882)

___

### TrustedClaimIssuersManagement

• **TrustedClaimIssuersManagement**

- TxTags.complianceManager.AddDefaultTrustedClaimIssuer
- TxTags.complianceManager.RemoveDefaultTrustedClaimIssuer

#### Defined in

[types/index.ts:847](https://github.com/PolymathNetwork/polymesh-sdk/blob/299ce247/src/types/index.ts#L847)

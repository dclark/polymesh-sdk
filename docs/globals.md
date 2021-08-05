# @polymathnetwork/polymesh-sdk

## Index

### Enumerations

* [AffirmationStatus](enums/affirmationstatus.md)
* [AuthorizationType](enums/authorizationtype.md)
* [CalendarUnit](enums/calendarunit.md)
* [ClaimType](enums/claimtype.md)
* [ConditionTarget](enums/conditiontarget.md)
* [ConditionType](enums/conditiontype.md)
* [CorporateActionKind](enums/corporateactionkind.md)
* [CountryCode](enums/countrycode.md)
* [ErrorCode](enums/errorcode.md)
* [InstructionStatus](enums/instructionstatus.md)
* [InstructionType](enums/instructiontype.md)
* [KnownPermissionGroup](enums/knownpermissiongroup.md)
* [KnownTokenType](enums/knowntokentype.md)
* [PermissionType](enums/permissiontype.md)
* [ProposalStage](enums/proposalstage.md)
* [RoleType](enums/roletype.md)
* [ScopeType](enums/scopetype.md)
* [SignerType](enums/signertype.md)
* [StoBalanceStatus](enums/stobalancestatus.md)
* [StoSaleStatus](enums/stosalestatus.md)
* [StoTimingStatus](enums/stotimingstatus.md)
* [TargetTreatment](enums/targettreatment.md)
* [TickerReservationStatus](enums/tickerreservationstatus.md)
* [TokenIdentifierType](enums/tokenidentifiertype.md)
* [TransactionArgumentType](enums/transactionargumenttype.md)
* [TransactionQueueStatus](enums/transactionqueuestatus.md)
* [TransactionStatus](enums/transactionstatus.md)
* [TransferError](enums/transfererror.md)
* [TransferRestrictionType](enums/transferrestrictiontype.md)
* [TransferStatus](enums/transferstatus.md)
* [TxGroup](enums/txgroup.md)
* [VenueType](enums/venuetype.md)

### Classes

* [Account](classes/account.md)
* [Agent](classes/agent.md)
* [AuthorizationRequest](classes/authorizationrequest.md)
* [Authorizations](classes/authorizations.md)
* [Checkpoint](classes/checkpoint.md)
* [CheckpointSchedule](classes/checkpointschedule.md)
* [Checkpoints](classes/checkpoints.md)
* [Claims](classes/claims.md)
* [Compliance](classes/compliance.md)
* [Context](classes/context.md)
* [CorporateAction](classes/corporateaction.md)
* [CorporateActions](classes/corporateactions.md)
* [Count](classes/count.md)
* [CurrentAccount](classes/currentaccount.md)
* [CurrentIdentity](classes/currentidentity.md)
* [DefaultPortfolio](classes/defaultportfolio.md)
* [DefaultTrustedClaimIssuer](classes/defaulttrustedclaimissuer.md)
* [Distributions](classes/distributions.md)
* [DividendDistribution](classes/dividenddistribution.md)
* [Documents](classes/documents.md)
* [Entity](classes/entity.md)
* [Identity](classes/identity.md)
* [IdentityAuthorizations](classes/identityauthorizations.md)
* [Instruction](classes/instruction.md)
* [Issuance](classes/issuance.md)
* [Middleware](classes/middleware.md)
* [NumberedPortfolio](classes/numberedportfolio.md)
* [Offerings](classes/offerings.md)
* [Percentage](classes/percentage.md)
* [PermissionGroup](classes/permissiongroup.md)
* [Permissions](classes/permissions.md)
* [Polymesh](classes/polymesh.md)
* [PolymeshError](classes/polymesherror.md)
* [PolymeshTransaction](classes/polymeshtransaction.md)
* [PolymeshTransactionBase](classes/polymeshtransactionbase.md)
* [PolymeshTransactionBatch](classes/polymeshtransactionbatch.md)
* [Portfolio](classes/portfolio.md)
* [Portfolios](classes/portfolios.md)
* [Requirements](classes/requirements.md)
* [Schedules](classes/schedules.md)
* [SecurityToken](classes/securitytoken.md)
* [Settlements](classes/settlements.md)
* [Sto](classes/sto.md)
* [TickerReservation](classes/tickerreservation.md)
* [TokenHolders](classes/tokenholders.md)
* [TransactionQueue](classes/transactionqueue.md)
* [TransferRestrictionBase](classes/transferrestrictionbase.md)
* [TransferRestrictions](classes/transferrestrictions.md)
* [TrustedClaimIssuers](classes/trustedclaimissuers.md)
* [Venue](classes/venue.md)

### Interfaces

* [ActiveTransferRestrictions](interfaces/activetransferrestrictions.md)
* [AddBatchTransactionOpts](interfaces/addbatchtransactionopts.md)
* [AddClaimsParams](interfaces/addclaimsparams.md)
* [AddInstructionParams](interfaces/addinstructionparams.md)
* [AddInstructionsParams](interfaces/addinstructionsparams.md)
* [AddInvestorUniquenessClaimParams](interfaces/addinvestoruniquenessclaimparams.md)
* [AddPairBaseParams](interfaces/addpairbaseparams.md)
* [AddTransactionOpts](interfaces/addtransactionopts.md)
* [AddTransactionOptsBase](interfaces/addtransactionoptsbase.md)
* [ArrayTransactionArgument](interfaces/arraytransactionargument.md)
* [Balance](interfaces/balance.md)
* [CalendarPeriod](interfaces/calendarperiod.md)
* [CddProviderRole](interfaces/cddproviderrole.md)
* [CheckpointWithData](interfaces/checkpointwithdata.md)
* [ClaimClassicTickerParams](interfaces/claimclassictickerparams.md)
* [ClaimData](interfaces/claimdata.md)
* [ClaimScope](interfaces/claimscope.md)
* [ClaimTarget](interfaces/claimtarget.md)
* [ComplexTransactionArgument](interfaces/complextransactionargument.md)
* [ConditionCompliance](interfaces/conditioncompliance.md)
* [ConnectParamsBase](interfaces/connectparamsbase.md)
* [ConstructorParams](interfaces/constructorparams.md)
* [ConsumeParams](interfaces/consumeparams.md)
* [ControllerTransferParams](interfaces/controllertransferparams.md)
* [CorporateActionDefaults](interfaces/corporateactiondefaults.md)
* [CorporateActionTargets](interfaces/corporateactiontargets.md)
* [CountTransferRestriction](interfaces/counttransferrestriction.md)
* [CountTransferRestrictionInput](interfaces/counttransferrestrictioninput.md)
* [CreateCheckpointScheduleParams](interfaces/createcheckpointscheduleparams.md)
* [CreateSecurityTokenParams](interfaces/createsecuritytokenparams.md)
* [CreateVenueParams](interfaces/createvenueparams.md)
* [DeletePortfolioParams](interfaces/deleteportfolioparams.md)
* [DistributionParticipant](interfaces/distributionparticipant.md)
* [DistributionPayment](interfaces/distributionpayment.md)
* [DistributionWithDetails](interfaces/distributionwithdetails.md)
* [DividendDistributionDetails](interfaces/dividenddistributiondetails.md)
* [DividendDistributionParams](interfaces/dividenddistributionparams.md)
* [EditClaimsParams](interfaces/editclaimsparams.md)
* [EventIdentifier](interfaces/eventidentifier.md)
* [ExtrinsicData](interfaces/extrinsicdata.md)
* [Fees](interfaces/fees.md)
* [GroupedInstructions](interfaces/groupedinstructions.md)
* [HistoricSettlement](interfaces/historicsettlement.md)
* [HumanReadable](interfaces/humanreadable.md)
* [IdentityBalance](interfaces/identitybalance.md)
* [IdentityWithClaims](interfaces/identitywithclaims.md)
* [InstructionAffirmation](interfaces/instructionaffirmation.md)
* [InvestInStoParams](interfaces/investinstoparams.md)
* [Investment](interfaces/investment.md)
* [InviteAccountParams](interfaces/inviteaccountparams.md)
* [IssueTokensParams](interfaces/issuetokensparams.md)
* [KeyringPair](interfaces/keyringpair.md)
* [LeaveIdentityParams](interfaces/leaveidentityparams.md)
* [Leg](interfaces/leg.md)
* [LinkCaDocsParams](interfaces/linkcadocsparams.md)
* [MiddlewareConfig](interfaces/middlewareconfig.md)
* [ModifyCorporateActionsAgentParams](interfaces/modifycorporateactionsagentparams.md)
* [ModifyInstructionAffirmationParams](interfaces/modifyinstructionaffirmationparams.md)
* [ModifyPrimaryIssuanceAgentParams](interfaces/modifyprimaryissuanceagentparams.md)
* [ModifySignerPermissionsParams](interfaces/modifysignerpermissionsparams.md)
* [ModifyTokenTrustedClaimIssuersAddSetParams](interfaces/modifytokentrustedclaimissuersaddsetparams.md)
* [ModifyTokenTrustedClaimIssuersRemoveParams](interfaces/modifytokentrustedclaimissuersremoveparams.md)
* [MoveFundsParams](interfaces/movefundsparams.md)
* [NetworkProperties](interfaces/networkproperties.md)
* [PaginationOptions](interfaces/paginationoptions.md)
* [PayDividendsParams](interfaces/paydividendsparams.md)
* [PercentageTransferRestriction](interfaces/percentagetransferrestriction.md)
* [PercentageTransferRestrictionInput](interfaces/percentagetransferrestrictioninput.md)
* [PlainTransactionArgument](interfaces/plaintransactionargument.md)
* [PortfolioBalance](interfaces/portfoliobalance.md)
* [PortfolioCustodianRole](interfaces/portfoliocustodianrole.md)
* [PortfolioMovement](interfaces/portfoliomovement.md)
* [ProcedureAuthorizationStatus](interfaces/procedureauthorizationstatus.md)
* [ProcedureMethod](interfaces/proceduremethod.md)
* [ProcedureOpts](interfaces/procedureopts.md)
* [ProposalDetails](interfaces/proposaldetails.md)
* [ProposalTimeFrames](interfaces/proposaltimeframes.md)
* [ProposalVote](interfaces/proposalvote.md)
* [RedeemTokenParams](interfaces/redeemtokenparams.md)
* [RegisterIdentityParams](interfaces/registeridentityparams.md)
* [RemoveCheckpointScheduleParams](interfaces/removecheckpointscheduleparams.md)
* [RemoveCorporateActionParams](interfaces/removecorporateactionparams.md)
* [RemoveSecondaryKeysParams](interfaces/removesecondarykeysparams.md)
* [RenamePortfolioParams](interfaces/renameportfolioparams.md)
* [Requirement](interfaces/requirement.md)
* [RequirementCompliance](interfaces/requirementcompliance.md)
* [ReserveTickerParams](interfaces/reservetickerparams.md)
* [ResultSet](interfaces/resultset.md)
* [RevokeClaimsParams](interfaces/revokeclaimsparams.md)
* [ScheduleDetails](interfaces/scheduledetails.md)
* [ScheduleWithDetails](interfaces/schedulewithdetails.md)
* [Scope](interfaces/scope.md)
* [SecondaryKey](interfaces/secondarykey.md)
* [SectionPermissions](interfaces/sectionpermissions.md)
* [SecurityTokenDetails](interfaces/securitytokendetails.md)
* [SetAssetRequirementsParams](interfaces/setassetrequirementsparams.md)
* [SetCountTransferRestrictionsParams](interfaces/setcounttransferrestrictionsparams.md)
* [SetCustodianParams](interfaces/setcustodianparams.md)
* [SetPercentageTransferRestrictionsParams](interfaces/setpercentagetransferrestrictionsparams.md)
* [SetTokenDocumentsParams](interfaces/settokendocumentsparams.md)
* [SettlementLeg](interfaces/settlementleg.md)
* [SignerValue](interfaces/signervalue.md)
* [SimpleEnumTransactionArgument](interfaces/simpleenumtransactionargument.md)
* [SimplePermissions](interfaces/simplepermissions.md)
* [StoDetails](interfaces/stodetails.md)
* [StoStatus](interfaces/stostatus.md)
* [StoTier](interfaces/stotier.md)
* [StoWithDetails](interfaces/stowithdetails.md)
* [TaxWithholding](interfaces/taxwithholding.md)
* [TickerOwnerRole](interfaces/tickerownerrole.md)
* [TickerReservationDetails](interfaces/tickerreservationdetails.md)
* [Tier](interfaces/tier.md)
* [ToggleFreezeSecondaryKeysParams](interfaces/togglefreezesecondarykeysparams.md)
* [ToggleFreezeStoParams](interfaces/togglefreezestoparams.md)
* [ToggleFreezeTransfersParams](interfaces/togglefreezetransfersparams.md)
* [TogglePauseRequirementsParams](interfaces/togglepauserequirementsparams.md)
* [TokenCaaRole](interfaces/tokencaarole.md)
* [TokenDocument](interfaces/tokendocument.md)
* [TokenIdentifier](interfaces/tokenidentifier.md)
* [TokenPiaRole](interfaces/tokenpiarole.md)
* [TransactionPermissions](interfaces/transactionpermissions.md)
* [TransferBreakdown](interfaces/transferbreakdown.md)
* [TransferPolyxParams](interfaces/transferpolyxparams.md)
* [TransferRestriction](interfaces/transferrestriction.md)
* [TransferRestrictionInputBase](interfaces/transferrestrictioninputbase.md)
* [TransferRestrictionResult](interfaces/transferrestrictionresult.md)
* [TransferTickerOwnershipParams](interfaces/transfertickerownershipparams.md)
* [TransferTokenOwnershipParams](interfaces/transfertokenownershipparams.md)
* [TrustedClaimIssuer](interfaces/trustedclaimissuer.md)
* [UiKeyring](interfaces/uikeyring.md)
* [UniqueIdentifiers](interfaces/uniqueidentifiers.md)
* [VenueDetails](interfaces/venuedetails.md)
* [VenueOwnerRole](interfaces/venueownerrole.md)

### Type aliases

* [AccountBalance](globals.md#accountbalance)
* [AddCountTransferRestrictionParams](globals.md#addcounttransferrestrictionparams)
* [AddPairParams](globals.md#addpairparams)
* [AddPercentageTransferRestrictionParams](globals.md#addpercentagetransferrestrictionparams)
* [AddRestrictionParams](globals.md#addrestrictionparams)
* [ArgsType](globals.md#argstype)
* [Authorization](globals.md#authorization)
* [CddClaim](globals.md#cddclaim)
* [CheckpointScheduleParams](globals.md#checkpointscheduleparams)
* [Claim](globals.md#claim)
* [CommonKeyring](globals.md#commonkeyring)
* [Condition](globals.md#condition)
* [ConditionBase](globals.md#conditionbase)
* [ConfigureDividendDistributionParams](globals.md#configuredividenddistributionparams)
* [Ensured](globals.md#ensured)
* [ExternalAgentCondition](globals.md#externalagentcondition)
* [GetReturnType](globals.md#getreturntype)
* [HumanReadableType](globals.md#humanreadabletype)
* [IdentityCondition](globals.md#identitycondition)
* [InputTargets](globals.md#inputtargets)
* [InputTaxWithholding](globals.md#inputtaxwithholding)
* [InstructionDetails](globals.md#instructiondetails)
* [InstructionStatusResult](globals.md#instructionstatusresult)
* [InvestorUniquenessClaim](globals.md#investoruniquenessclaim)
* [InvestorUniquenessV2Claim](globals.md#investoruniquenessv2claim)
* [ModifyCaDefaultsParams](globals.md#modifycadefaultsparams)
* [ModifyClaimsParams](globals.md#modifyclaimsparams)
* [ModifyStoTimesParams](globals.md#modifystotimesparams)
* [ModifyTokenParams](globals.md#modifytokenparams)
* [ModifyVenueParams](globals.md#modifyvenueparams)
* [MultiClaimCondition](globals.md#multiclaimcondition)
* [Mutable](globals.md#mutable)
* [NextKey](globals.md#nextkey)
* [PermissionsLike](globals.md#permissionslike)
* [PortfolioLike](globals.md#portfoliolike)
* [ProcedureFunc](globals.md#procedurefunc)
* [Role](globals.md#role)
* [ScopedClaim](globals.md#scopedclaim)
* [SetRestrictionsParams](globals.md#setrestrictionsparams)
* [SetTransferRestrictionsParams](globals.md#settransferrestrictionsparams)
* [Signer](globals.md#signer)
* [SingleClaimCondition](globals.md#singleclaimcondition)
* [SubCallback](globals.md#subcallback)
* [TokenType](globals.md#tokentype)
* [TransactionArgument](globals.md#transactionargument)
* [UnionOfProcedureFuncs](globals.md#unionofprocedurefuncs)
* [UnscopedClaim](globals.md#unscopedclaim)
* [UnsubCallback](globals.md#unsubcallback)

### Variables

* [executedMessage](globals.md#const-executedmessage)
* [notExistsMessage](globals.md#const-notexistsmessage)

### Functions

* [areSameClaimIssuers](globals.md#const-aresameclaimissuers)
* [areSameClaims](globals.md#const-aresameclaims)
* [areSameTargets](globals.md#const-aresametargets)
* [convertArgsToRaw](globals.md#const-convertargstoraw)
* [createProcedureMethod](globals.md#createproceduremethod)
* [findClaimsByOtherIssuers](globals.md#const-findclaimsbyotherissuers)
* [findPositiveBalanceIuClaims](globals.md#const-findpositivebalanceiuclaims)
* [tickerToDid](globals.md#tickertodid)
* [toHumanReadable](globals.md#tohumanreadable)
* [tuple](globals.md#const-tuple)
* [txGroupToTxTags](globals.md#txgrouptotxtags)

### Object literals

* [defaultMessages](globals.md#const-defaultmessages)

## Type aliases

###  AccountBalance

Ƭ **AccountBalance**: *[Balance](interfaces/balance.md)*

*Defined in [src/types/index.ts:601](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L601)*

___

###  AddCountTransferRestrictionParams

Ƭ **AddCountTransferRestrictionParams**: *[CountTransferRestrictionInput](interfaces/counttransferrestrictioninput.md) & object*

*Defined in [src/api/procedures/addTransferRestriction.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/addTransferRestriction.ts#L24)*

___

###  AddPairParams

Ƭ **AddPairParams**: *object*

*Defined in [src/base/Context.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/Context.ts#L94)*

#### Type declaration:

* **accountMnemonic**? : *undefined | string*

* **accountSeed**? : *undefined | string*

* **accountUri**? : *undefined | string*

* **pair**? : *[KeyringPair](interfaces/keyringpair.md)*

___

###  AddPercentageTransferRestrictionParams

Ƭ **AddPercentageTransferRestrictionParams**: *[PercentageTransferRestrictionInput](interfaces/percentagetransferrestrictioninput.md) & object*

*Defined in [src/api/procedures/addTransferRestriction.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/addTransferRestriction.ts#L28)*

___

###  AddRestrictionParams

Ƭ **AddRestrictionParams**: *Omit‹T extends Count ? AddCountTransferRestrictionParams : AddPercentageTransferRestrictionParams, "type"›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:32](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L32)*

___

###  ArgsType

Ƭ **ArgsType**: *T extends function ? A : never*

*Defined in [src/types/utils/index.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/utils/index.ts#L22)*

Less strict version of Parameters<T>

___

###  Authorization

Ƭ **Authorization**: *object | object | object | object | object*

*Defined in [src/types/index.ts:819](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L819)*

Authorization request data corresponding to type

___

###  CddClaim

Ƭ **CddClaim**: *object*

*Defined in [src/types/index.ts:279](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L279)*

#### Type declaration:

* **id**: *string*

* **type**: *[CustomerDueDiligence](enums/claimtype.md#customerduediligence)*

___

###  CheckpointScheduleParams

Ƭ **CheckpointScheduleParams**: *Omit‹UniqueIdentifiers & Params, "ticker"›*

*Defined in [src/api/entities/CheckpointSchedule/types.ts:8](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CheckpointSchedule/types.ts#L8)*

___

###  Claim

Ƭ **Claim**: *[ScopedClaim](globals.md#scopedclaim) | [UnscopedClaim](globals.md#unscopedclaim)*

*Defined in [src/types/index.ts:310](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L310)*

___

###  CommonKeyring

Ƭ **CommonKeyring**: *Pick‹Keyring, "getPair" | "getPairs" | "addFromSeed" | "addFromUri" | "addFromMnemonic" | "addPair" | "encodeAddress"›*

*Defined in [src/types/index.ts:570](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L570)*

___

###  Condition

Ƭ **Condition**: *[SingleClaimCondition](globals.md#singleclaimcondition) | [MultiClaimCondition](globals.md#multiclaimcondition) | [IdentityCondition](globals.md#identitycondition) | [ExternalAgentCondition](globals.md#externalagentcondition)*

*Defined in [src/types/index.ts:400](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L400)*

___

###  ConditionBase

Ƭ **ConditionBase**: *object*

*Defined in [src/types/index.ts:379](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L379)*

#### Type declaration:

* **target**: *[ConditionTarget](enums/conditiontarget.md)*

* **trustedClaimIssuers**? : *[TrustedClaimIssuer](interfaces/trustedclaimissuer.md)[]*

___

###  ConfigureDividendDistributionParams

Ƭ **ConfigureDividendDistributionParams**: *Omit‹InitiateCorporateActionParams, "kind" | "checkpoint"› & object*

*Defined in [src/api/procedures/configureDividendDistribution.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/configureDividendDistribution.ts#L59)*

___

###  Ensured

Ƭ **Ensured**: *Required‹Pick‹T, K››*

*Defined in [src/types/index.ts:563](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L563)*

___

###  ExternalAgentCondition

Ƭ **ExternalAgentCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:396](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L396)*

___

###  GetReturnType

Ƭ **GetReturnType**: *[ActiveTransferRestrictions](interfaces/activetransferrestrictions.md)‹T extends Count ? CountTransferRestriction : PercentageTransferRestriction›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L46)*

___

###  HumanReadableType

Ƭ **HumanReadableType**: *T extends Entity‹unknown, infer H› ? HumanReadableType‹H› : T extends BigNumber ? string : T extends Date ? string : T extends object ? object : T*

*Defined in [src/types/utils/index.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/utils/index.ts#L28)*

Recursively traverse a type and transform its Entity properties into their
  human readable version (as if `.toJson` had been called on all of them)

___

###  IdentityCondition

Ƭ **IdentityCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:391](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L391)*

___

###  InputTargets

Ƭ **InputTargets**: *Omit‹[CorporateActionTargets](interfaces/corporateactiontargets.md), "identities"› & object*

*Defined in [src/api/entities/CorporateAction/types.ts:20](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/types.ts#L20)*

___

###  InputTaxWithholding

Ƭ **InputTaxWithholding**: *Omit‹[TaxWithholding](interfaces/taxwithholding.md), "identity"› & object*

*Defined in [src/api/entities/CorporateAction/types.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CorporateAction/types.ts#L24)*

___

###  InstructionDetails

Ƭ **InstructionDetails**: *object & object | object*

*Defined in [src/api/entities/Instruction/types.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Instruction/types.ts#L17)*

___

###  InstructionStatusResult

Ƭ **InstructionStatusResult**: *object | object*

*Defined in [src/api/entities/Instruction/types.ts:58](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Instruction/types.ts#L58)*

___

###  InvestorUniquenessClaim

Ƭ **InvestorUniquenessClaim**: *object*

*Defined in [src/types/index.ts:281](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L281)*

#### Type declaration:

* **cddId**: *string*

* **scope**: *[Scope](interfaces/scope.md)*

* **scopeId**: *string*

* **type**: *[InvestorUniqueness](enums/claimtype.md#investoruniqueness)*

___

###  InvestorUniquenessV2Claim

Ƭ **InvestorUniquenessV2Claim**: *object*

*Defined in [src/types/index.ts:288](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L288)*

#### Type declaration:

* **cddId**: *string*

* **type**: *[InvestorUniquenessV2](enums/claimtype.md#investoruniquenessv2)*

___

###  ModifyCaDefaultsParams

Ƭ **ModifyCaDefaultsParams**: *object | object | object*

*Defined in [src/api/procedures/modifyCaDefaults.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyCaDefaults.ts#L24)*

___

###  ModifyClaimsParams

Ƭ **ModifyClaimsParams**: *[AddClaimsParams](interfaces/addclaimsparams.md) | [EditClaimsParams](interfaces/editclaimsparams.md) | [RevokeClaimsParams](interfaces/revokeclaimsparams.md)*

*Defined in [src/api/procedures/modifyClaims.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyClaims.ts#L63)*

___

###  ModifyStoTimesParams

Ƭ **ModifyStoTimesParams**: *object | object | object*

*Defined in [src/api/procedures/modifyStoTimes.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyStoTimes.ts#L9)*

___

###  ModifyTokenParams

Ƭ **ModifyTokenParams**: *object | object | object | object*

*Defined in [src/api/procedures/modifyToken.ts:13](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyToken.ts#L13)*

___

###  ModifyVenueParams

Ƭ **ModifyVenueParams**: *object | object | object*

*Defined in [src/api/procedures/modifyVenue.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyVenue.ts#L9)*

___

###  MultiClaimCondition

Ƭ **MultiClaimCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:386](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L386)*

___

###  Mutable

Ƭ **Mutable**: *object*

*Defined in [src/types/utils/index.ts:5](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/utils/index.ts#L5)*

#### Type declaration:

___

###  NextKey

Ƭ **NextKey**: *string | number | null*

*Defined in [src/types/index.ts:608](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L608)*

___

###  PermissionsLike

Ƭ **PermissionsLike**: *object & object | object*

*Defined in [src/types/index.ts:932](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L932)*

Permissions to grant to a Signer over an Identity

**`link`** [Permissions](classes/permissions.md)

**`note`** TxGroups in the `transactionGroups` array will be transformed into their corresponding `TxTag`s

___

###  PortfolioLike

Ƭ **PortfolioLike**: *string | [Identity](classes/identity.md) | [NumberedPortfolio](classes/numberedportfolio.md) | [DefaultPortfolio](classes/defaultportfolio.md) | object*

*Defined in [src/types/index.ts:918](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L918)*

___

###  ProcedureFunc

Ƭ **ProcedureFunc**: *function*

*Defined in [src/types/utils/index.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/utils/index.ts#L9)*

#### Type declaration:

▸ (): *Procedure‹Args, ReturnValue, Storage›*

___

###  Role

Ƭ **Role**: *[TickerOwnerRole](interfaces/tickerownerrole.md) | [TokenPiaRole](interfaces/tokenpiarole.md) | [TokenCaaRole](interfaces/tokencaarole.md) | [CddProviderRole](interfaces/cddproviderrole.md) | [VenueOwnerRole](interfaces/venueownerrole.md) | [PortfolioCustodianRole](interfaces/portfoliocustodianrole.md)*

*Defined in [src/types/index.ts:129](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L129)*

___

###  ScopedClaim

Ƭ **ScopedClaim**: *object | [InvestorUniquenessClaim](globals.md#investoruniquenessclaim) | object*

*Defined in [src/types/index.ts:293](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L293)*

___

###  SetRestrictionsParams

Ƭ **SetRestrictionsParams**: *Omit‹T extends Count ? SetCountTransferRestrictionsParams : SetPercentageTransferRestrictionsParams, "type"›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L39)*

___

###  SetTransferRestrictionsParams

Ƭ **SetTransferRestrictionsParams**: *object & [SetCountTransferRestrictionsParams](interfaces/setcounttransferrestrictionsparams.md) | [SetPercentageTransferRestrictionsParams](interfaces/setpercentagetransferrestrictionsparams.md)*

*Defined in [src/api/procedures/setTransferRestrictions.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/setTransferRestrictions.ts#L39)*

___

###  Signer

Ƭ **Signer**: *[Identity](classes/identity.md) | [Account](classes/account.md)*

*Defined in [src/types/index.ts:894](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L894)*

___

###  SingleClaimCondition

Ƭ **SingleClaimCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:381](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L381)*

___

###  SubCallback

Ƭ **SubCallback**: *function*

*Defined in [src/types/index.ts:559](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L559)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

___

###  TokenType

Ƭ **TokenType**: *[KnownTokenType](enums/knowntokentype.md) | object*

*Defined in [src/types/index.ts:197](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L197)*

Type of security that the token represents

___

###  TransactionArgument

Ƭ **TransactionArgument**: *object & [PlainTransactionArgument](interfaces/plaintransactionargument.md) | [ArrayTransactionArgument](interfaces/arraytransactionargument.md) | [SimpleEnumTransactionArgument](interfaces/simpleenumtransactionargument.md) | [ComplexTransactionArgument](interfaces/complextransactionargument.md)*

*Defined in [src/types/index.ts:883](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L883)*

___

###  UnionOfProcedureFuncs

Ƭ **UnionOfProcedureFuncs**: *Args extends unknown ? ProcedureFunc‹Args, ReturnValue, Storage› : never*

*Defined in [src/types/utils/index.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/utils/index.ts#L15)*

___

###  UnscopedClaim

Ƭ **UnscopedClaim**: *object | [CddClaim](globals.md#cddclaim) | [InvestorUniquenessV2Claim](globals.md#investoruniquenessv2claim)*

*Defined in [src/types/index.ts:308](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L308)*

___

###  UnsubCallback

Ƭ **UnsubCallback**: *function*

*Defined in [src/types/index.ts:561](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/index.ts#L561)*

#### Type declaration:

▸ (): *void*

## Variables

### `Const` executedMessage

• **executedMessage**: *"Instruction has already been executed/rejected and it was purged from chain"* = "Instruction has already been executed/rejected and it was purged from chain"

*Defined in [src/api/entities/Instruction/index.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/Instruction/index.ts#L57)*

___

### `Const` notExistsMessage

• **notExistsMessage**: *"Schedule no longer exists. It was either removed or it expired"* = "Schedule no longer exists. It was either removed or it expired"

*Defined in [src/api/entities/CheckpointSchedule/index.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/entities/CheckpointSchedule/index.ts#L36)*

## Functions

### `Const` areSameClaimIssuers

▸ **areSameClaimIssuers**(`currentClaimIssuers`: [TrustedClaimIssuer](interfaces/trustedclaimissuer.md)[], `claimIssuers`: ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"]): *boolean*

*Defined in [src/api/procedures/modifyTokenTrustedClaimIssuers.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyTokenTrustedClaimIssuers.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`currentClaimIssuers` | [TrustedClaimIssuer](interfaces/trustedclaimissuer.md)[] |
`claimIssuers` | ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"] |

**Returns:** *boolean*

___

### `Const` areSameClaims

▸ **areSameClaims**(`claim`: [Claim](globals.md#claim), `__namedParameters`: object): *boolean*

*Defined in [src/api/procedures/modifyClaims.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyClaims.ts#L74)*

**Parameters:**

▪ **claim**: *[Claim](globals.md#claim)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`scope` | undefined &#124; null &#124; [Scope](interfaces/scope.md) |
`type` | ClaimTypeEnum |

**Returns:** *boolean*

___

### `Const` areSameTargets

▸ **areSameTargets**(`targets`: [CorporateActionTargets](interfaces/corporateactiontargets.md), `newTargets`: [InputTargets](globals.md#inputtargets)): *boolean*

*Defined in [src/api/procedures/modifyCaDefaults.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyCaDefaults.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`targets` | [CorporateActionTargets](interfaces/corporateactiontargets.md) |
`newTargets` | [InputTargets](globals.md#inputtargets) |

**Returns:** *boolean*

___

### `Const` convertArgsToRaw

▸ **convertArgsToRaw**(`claimIssuers`: ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"], `rawTicker`: Ticker, `context`: [Context](classes/context.md)): *object*

*Defined in [src/api/procedures/modifyTokenTrustedClaimIssuers.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyTokenTrustedClaimIssuers.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`claimIssuers` | ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"] |
`rawTicker` | Ticker |
`context` | [Context](classes/context.md) |

**Returns:** *object*

* **claimIssuersToAdd**: *[][]*

* **inputDids**: *string[]*

___

###  createProcedureMethod

▸ **createProcedureMethod**‹**MethodArgs**, **ProcedureArgs**, **ProcedureReturnValue**, **Storage**›(`args`: object, `context`: [Context](classes/context.md)): *[ProcedureMethod](interfaces/proceduremethod.md)‹MethodArgs, ProcedureReturnValue, ProcedureReturnValue›*

*Defined in [src/utils/internal.ts:403](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/utils/internal.ts#L403)*

Create a method that prepares a procedure

**Type parameters:**

▪ **MethodArgs**

▪ **ProcedureArgs**: *unknown*

▪ **ProcedureReturnValue**

▪ **Storage**

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`getProcedureAndArgs` | function |

▪ **context**: *[Context](classes/context.md)*

**Returns:** *[ProcedureMethod](interfaces/proceduremethod.md)‹MethodArgs, ProcedureReturnValue, ProcedureReturnValue›*

▸ **createProcedureMethod**‹**MethodArgs**, **ProcedureArgs**, **ProcedureReturnValue**, **ReturnValue**, **Storage**›(`args`: object, `context`: [Context](classes/context.md)): *[ProcedureMethod](interfaces/proceduremethod.md)‹MethodArgs, ProcedureReturnValue, ReturnValue›*

*Defined in [src/utils/internal.ts:422](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/utils/internal.ts#L422)*

**Type parameters:**

▪ **MethodArgs**

▪ **ProcedureArgs**: *unknown*

▪ **ProcedureReturnValue**

▪ **ReturnValue**

▪ **Storage**

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`getProcedureAndArgs` | function |
`transformer` | function |

▪ **context**: *[Context](classes/context.md)*

**Returns:** *[ProcedureMethod](interfaces/proceduremethod.md)‹MethodArgs, ProcedureReturnValue, ReturnValue›*

___

### `Const` findClaimsByOtherIssuers

▸ **findClaimsByOtherIssuers**(`claims`: [ClaimTarget](interfaces/claimtarget.md)[], `claimsByDid`: Record‹string, MiddlewareClaim[]›): *[Claim](globals.md#claim)[]*

*Defined in [src/api/procedures/modifyClaims.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyClaims.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`claims` | [ClaimTarget](interfaces/claimtarget.md)[] |
`claimsByDid` | Record‹string, MiddlewareClaim[]› |

**Returns:** *[Claim](globals.md#claim)[]*

___

### `Const` findPositiveBalanceIuClaims

▸ **findPositiveBalanceIuClaims**(`claims`: [ClaimTarget](interfaces/claimtarget.md)[], `context`: [Context](classes/context.md)): *Promise‹[Claim](globals.md#claim)[]›*

*Defined in [src/api/procedures/modifyClaims.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/api/procedures/modifyClaims.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`claims` | [ClaimTarget](interfaces/claimtarget.md)[] |
`context` | [Context](classes/context.md) |

**Returns:** *Promise‹[Claim](globals.md#claim)[]›*

___

###  tickerToDid

▸ **tickerToDid**(`ticker`: string): *string*

*Defined in [src/utils/conversion.ts:224](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/utils/conversion.ts#L224)*

Generate a Security Token's DID from a ticker

**Parameters:**

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *string*

___

###  toHumanReadable

▸ **toHumanReadable**‹**T**›(`obj`: T): *[HumanReadableType](globals.md#humanreadabletype)‹T›*

*Defined in [src/utils/internal.ts:674](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/utils/internal.ts#L674)*

Recursively convert a value into a human readable (JSON compliant) version:
  - Entities are converted via their `.toJson` method
  - Dates are converted to ISO strings
  - BigNumbers are converted to numerical strings

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

**Returns:** *[HumanReadableType](globals.md#humanreadabletype)‹T›*

___

### `Const` tuple

▸ **tuple**‹**T**›(...`args`: T): *T*

*Defined in [src/types/utils/index.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/types/utils/index.ts#L48)*

Create a literal tuple type from a list of arguments

**Type parameters:**

▪ **T**: *unknown[]*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | T | values to turn into a tuple  |

**Returns:** *T*

___

###  txGroupToTxTags

▸ **txGroupToTxTags**(`group`: [TxGroup](enums/txgroup.md)): *TxTag[]*

*Defined in [src/utils/conversion.ts:589](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/utils/conversion.ts#L589)*

Retrieve every Transaction Tag associated to a Transaction Group

**Parameters:**

Name | Type |
------ | ------ |
`group` | [TxGroup](enums/txgroup.md) |

**Returns:** *TxTag[]*

## Object literals

### `Const` defaultMessages

### ▪ **defaultMessages**: *object*

*Defined in [src/base/PolymeshError.ts:3](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshError.ts#L3)*

###  [ErrorCode.TransactionAborted]

• **[ErrorCode.TransactionAborted]**: *string* = "The transaction was removed from the transaction pool. This might mean that it was malformed (nonce too large/nonce too small/duplicated or invalid transaction)"

*Defined in [src/base/PolymeshError.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshError.ts#L7)*

###  [ErrorCode.TransactionRejectedByUser]

• **[ErrorCode.TransactionRejectedByUser]**: *string* = "The user canceled the transaction signature"

*Defined in [src/base/PolymeshError.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshError.ts#L9)*

###  [ErrorCode.TransactionReverted]

• **[ErrorCode.TransactionReverted]**: *string* = "The transaction execution reverted due to an error"

*Defined in [src/base/PolymeshError.ts:6](https://github.com/PolymathNetwork/polymesh-sdk/blob/bf2b7a12/src/base/PolymeshError.ts#L6)*

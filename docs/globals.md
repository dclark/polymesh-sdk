# @polymathnetwork/polymesh-sdk

## Index

### Enumerations

* [AuthorizationStatus](enums/authorizationstatus.md)
* [AuthorizationType](enums/authorizationtype.md)
* [ClaimType](enums/claimtype.md)
* [ConditionTarget](enums/conditiontarget.md)
* [ConditionType](enums/conditiontype.md)
* [CountryCode](enums/countrycode.md)
* [ErrorCode](enums/errorcode.md)
* [InstructionStatus](enums/instructionstatus.md)
* [InstructionType](enums/instructiontype.md)
* [KnownTokenType](enums/knowntokentype.md)
* [Permission](enums/permission.md)
* [ProposalStage](enums/proposalstage.md)
* [RoleType](enums/roletype.md)
* [ScopeType](enums/scopetype.md)
* [TickerReservationStatus](enums/tickerreservationstatus.md)
* [TokenIdentifierType](enums/tokenidentifiertype.md)
* [TransactionArgumentType](enums/transactionargumenttype.md)
* [TransactionQueueStatus](enums/transactionqueuestatus.md)
* [TransactionStatus](enums/transactionstatus.md)
* [TransferStatus](enums/transferstatus.md)
* [VenueType](enums/venuetype.md)

### Classes

* [Account](classes/account.md)
* [AuthorizationRequest](classes/authorizationrequest.md)
* [Authorizations](classes/authorizations.md)
* [Claims](classes/claims.md)
* [Compliance](classes/compliance.md)
* [Context](classes/context.md)
* [CurrentAccount](classes/currentaccount.md)
* [CurrentIdentity](classes/currentidentity.md)
* [DefaultPortfolio](classes/defaultportfolio.md)
* [Documents](classes/documents.md)
* [Entity](classes/entity.md)
* [Identity](classes/identity.md)
* [IdentityAuthorizations](classes/identityauthorizations.md)
* [Instruction](classes/instruction.md)
* [Issuance](classes/issuance.md)
* [Middleware](classes/middleware.md)
* [NumberedPortfolio](classes/numberedportfolio.md)
* [Polymesh](classes/polymesh.md)
* [PolymeshError](classes/polymesherror.md)
* [PolymeshTransaction](classes/polymeshtransaction.md)
* [Portfolio](classes/portfolio.md)
* [Portfolios](classes/portfolios.md)
* [Requirements](classes/requirements.md)
* [SecurityToken](classes/securitytoken.md)
* [Settlements](classes/settlements.md)
* [TickerReservation](classes/tickerreservation.md)
* [TokenHolders](classes/tokenholders.md)
* [TransactionQueue](classes/transactionqueue.md)
* [TrustedClaimIssuer](classes/trustedclaimissuer.md)
* [TrustedClaimIssuers](classes/trustedclaimissuers.md)
* [Venue](classes/venue.md)

### Interfaces

* [AccountBalance](interfaces/accountbalance.md)
* [AccountData](interfaces/accountdata.md)
* [AddClaimItem](interfaces/addclaimitem.md)
* [AddClaimsParams](interfaces/addclaimsparams.md)
* [AddInstructionParams](interfaces/addinstructionparams.md)
* [AddTransactionOpts](interfaces/addtransactionopts.md)
* [ArrayTransactionArgument](interfaces/arraytransactionargument.md)
* [CddProviderRole](interfaces/cddproviderrole.md)
* [ClaimData](interfaces/claimdata.md)
* [ClaimScope](interfaces/claimscope.md)
* [ClaimTarget](interfaces/claimtarget.md)
* [ComplexTransactionArgument](interfaces/complextransactionargument.md)
* [ConditionCompliance](interfaces/conditioncompliance.md)
* [ConnectParamsBase](interfaces/connectparamsbase.md)
* [ConstructorParams](interfaces/constructorparams.md)
* [ConsumeParams](interfaces/consumeparams.md)
* [CreateSecurityTokenParams](interfaces/createsecuritytokenparams.md)
* [CreateVenueParams](interfaces/createvenueparams.md)
* [DeletePortfolioParams](interfaces/deleteportfolioparams.md)
* [EditClaimsParams](interfaces/editclaimsparams.md)
* [EventIdentifier](interfaces/eventidentifier.md)
* [ExtrinsicData](interfaces/extrinsicdata.md)
* [Fees](interfaces/fees.md)
* [IdentityBalance](interfaces/identitybalance.md)
* [IdentityWithClaims](interfaces/identitywithclaims.md)
* [InstructionAuthorization](interfaces/instructionauthorization.md)
* [InviteAccountParams](interfaces/inviteaccountparams.md)
* [IssueTokensParams](interfaces/issuetokensparams.md)
* [KeyringPair](interfaces/keyringpair.md)
* [Leg](interfaces/leg.md)
* [MiddlewareConfig](interfaces/middlewareconfig.md)
* [ModifyInstructionAuthorizationParams](interfaces/modifyinstructionauthorizationparams.md)
* [ModifyPrimaryIssuanceAgentParams](interfaces/modifyprimaryissuanceagentparams.md)
* [ModifyTokenTrustedClaimIssuersParams](interfaces/modifytokentrustedclaimissuersparams.md)
* [MoveFundsParams](interfaces/movefundsparams.md)
* [NetworkProperties](interfaces/networkproperties.md)
* [PaginationOptions](interfaces/paginationoptions.md)
* [PlainTransactionArgument](interfaces/plaintransactionargument.md)
* [PortfolioBalance](interfaces/portfoliobalance.md)
* [PortfolioCustodianRole](interfaces/portfoliocustodianrole.md)
* [PortfolioMovement](interfaces/portfoliomovement.md)
* [ProposalDetails](interfaces/proposaldetails.md)
* [ProposalTimeFrames](interfaces/proposaltimeframes.md)
* [ProposalVote](interfaces/proposalvote.md)
* [RegisterIdentityParams](interfaces/registeridentityparams.md)
* [RemoveSecondaryKeysParams](interfaces/removesecondarykeysparams.md)
* [RenamePortfolioParams](interfaces/renameportfolioparams.md)
* [Requirement](interfaces/requirement.md)
* [RequirementCompliance](interfaces/requirementcompliance.md)
* [ReserveTickerParams](interfaces/reservetickerparams.md)
* [ResultSet](interfaces/resultset.md)
* [RevokeClaimsParams](interfaces/revokeclaimsparams.md)
* [Scope](interfaces/scope.md)
* [SecondaryKey](interfaces/secondarykey.md)
* [SecurityTokenDetails](interfaces/securitytokendetails.md)
* [SetAssetRequirementsParams](interfaces/setassetrequirementsparams.md)
* [SetCustodianParams](interfaces/setcustodianparams.md)
* [SetTokenDocumentsParams](interfaces/settokendocumentsparams.md)
* [SimpleEnumTransactionArgument](interfaces/simpleenumtransactionargument.md)
* [TickerOwnerRole](interfaces/tickerownerrole.md)
* [TickerReservationDetails](interfaces/tickerreservationdetails.md)
* [ToggleFreezeTransfersParams](interfaces/togglefreezetransfersparams.md)
* [TogglePauseRequirementsParams](interfaces/togglepauserequirementsparams.md)
* [TokenDocument](interfaces/tokendocument.md)
* [TokenHolderOptions](interfaces/tokenholderoptions.md)
* [TokenHolderProperties](interfaces/tokenholderproperties.md)
* [TokenIdentifier](interfaces/tokenidentifier.md)
* [TokenOwnerRole](interfaces/tokenownerrole.md)
* [TransferPolyXParams](interfaces/transferpolyxparams.md)
* [TransferTokenOwnershipParams](interfaces/transfertokenownershipparams.md)
* [UiKeyring](interfaces/uikeyring.md)
* [UniqueIdentifiers](interfaces/uniqueidentifiers.md)
* [VenueDetails](interfaces/venuedetails.md)
* [VenueOwnerRole](interfaces/venueownerrole.md)

### Type aliases

* [Authorization](globals.md#authorization)
* [Claim](globals.md#claim)
* [CommonKeyring](globals.md#commonkeyring)
* [Condition](globals.md#condition)
* [ConditionBase](globals.md#conditionbase)
* [Ensured](globals.md#ensured)
* [IdentityCondition](globals.md#identitycondition)
* [InstructionDetails](globals.md#instructiondetails)
* [ModifyClaimsParams](globals.md#modifyclaimsparams)
* [ModifyTokenParams](globals.md#modifytokenparams)
* [MultiClaimCondition](globals.md#multiclaimcondition)
* [Mutable](globals.md#mutable)
* [NextKey](globals.md#nextkey)
* [PortfolioLike](globals.md#portfoliolike)
* [PrimaryIssuanceAgentCondition](globals.md#primaryissuanceagentcondition)
* [Role](globals.md#role)
* [ScopedClaim](globals.md#scopedclaim)
* [Signer](globals.md#signer)
* [SingleClaimCondition](globals.md#singleclaimcondition)
* [SubCallback](globals.md#subcallback)
* [TokenType](globals.md#tokentype)
* [TransactionArgument](globals.md#transactionargument)
* [TransactionSpecArray](globals.md#transactionspecarray)
* [UnscopedClaim](globals.md#unscopedclaim)
* [UnsubCallback](globals.md#unsubcallback)

### Functions

* [tickerToDid](globals.md#tickertodid)
* [tuple](globals.md#const-tuple)

### Object literals

* [ErrorMessagesPerCode](globals.md#const-errormessagespercode)

## Type aliases

###  Authorization

Ƭ **Authorization**: *object | object | object | object*

*Defined in [src/types/index.ts:214](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L214)*

Authorization request data corresponding to type

___

###  Claim

Ƭ **Claim**: *[ScopedClaim](globals.md#scopedclaim) | [UnscopedClaim](globals.md#unscopedclaim)*

*Defined in [src/types/index.ts:267](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L267)*

___

###  CommonKeyring

Ƭ **CommonKeyring**: *Pick‹Keyring, "getPair" | "getPairs" | "addFromSeed" | "addFromUri"›*

*Defined in [src/types/index.ts:434](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L434)*

___

###  Condition

Ƭ **Condition**: *[SingleClaimCondition](globals.md#singleclaimcondition) | [MultiClaimCondition](globals.md#multiclaimcondition) | [IdentityCondition](globals.md#identitycondition) | [PrimaryIssuanceAgentCondition](globals.md#primaryissuanceagentcondition)*

*Defined in [src/types/index.ts:338](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L338)*

___

###  ConditionBase

Ƭ **ConditionBase**: *object*

*Defined in [src/types/index.ts:317](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L317)*

#### Type declaration:

* **target**: *[ConditionTarget](enums/conditiontarget.md)*

* **trustedClaimIssuers**? : *string[]*

___

###  Ensured

Ƭ **Ensured**: *Required‹Pick‹T, K››*

*Defined in [src/types/index.ts:427](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L427)*

___

###  IdentityCondition

Ƭ **IdentityCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:329](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L329)*

___

###  InstructionDetails

Ƭ **InstructionDetails**: *object & object | object*

*Defined in [src/api/entities/Instruction/types.ts:21](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/entities/Instruction/types.ts#L21)*

___

###  ModifyClaimsParams

Ƭ **ModifyClaimsParams**: *[AddClaimsParams](interfaces/addclaimsparams.md) | [EditClaimsParams](interfaces/editclaimsparams.md) | [RevokeClaimsParams](interfaces/revokeclaimsparams.md)*

*Defined in [src/api/procedures/modifyClaims.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/procedures/modifyClaims.ts#L50)*

___

###  ModifyTokenParams

Ƭ **ModifyTokenParams**: *object | object | object*

*Defined in [src/api/procedures/modifyToken.ts:6](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/api/procedures/modifyToken.ts#L6)*

___

###  MultiClaimCondition

Ƭ **MultiClaimCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:324](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L324)*

___

###  Mutable

Ƭ **Mutable**: *object*

*Defined in [src/types/utils/index.ts:1](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/utils/index.ts#L1)*

#### Type declaration:

___

###  NextKey

Ƭ **NextKey**: *string | number | null*

*Defined in [src/types/index.ts:460](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L460)*

___

###  PortfolioLike

Ƭ **PortfolioLike**: *string | [Identity](classes/identity.md) | [NumberedPortfolio](classes/numberedportfolio.md) | [DefaultPortfolio](classes/defaultportfolio.md) | object*

*Defined in [src/types/index.ts:555](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L555)*

___

###  PrimaryIssuanceAgentCondition

Ƭ **PrimaryIssuanceAgentCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:334](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L334)*

___

###  Role

Ƭ **Role**: *[TickerOwnerRole](interfaces/tickerownerrole.md) | [TokenOwnerRole](interfaces/tokenownerrole.md) | [CddProviderRole](interfaces/cddproviderrole.md) | [VenueOwnerRole](interfaces/venueownerrole.md) | [PortfolioCustodianRole](interfaces/portfoliocustodianrole.md)*

*Defined in [src/types/index.ts:144](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L144)*

___

###  ScopedClaim

Ƭ **ScopedClaim**: *object | object*

*Defined in [src/types/index.ts:259](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L259)*

___

###  Signer

Ƭ **Signer**: *[Identity](classes/identity.md) | [Account](classes/account.md)*

*Defined in [src/types/index.ts:542](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L542)*

___

###  SingleClaimCondition

Ƭ **SingleClaimCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:319](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L319)*

___

###  SubCallback

Ƭ **SubCallback**: *function*

*Defined in [src/types/index.ts:423](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L423)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

___

###  TokenType

Ƭ **TokenType**: *[KnownTokenType](enums/knowntokentype.md) | object*

*Defined in [src/types/index.ts:166](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L166)*

Type of security that the token represents

___

###  TransactionArgument

Ƭ **TransactionArgument**: *object & [PlainTransactionArgument](interfaces/plaintransactionargument.md) | [ArrayTransactionArgument](interfaces/arraytransactionargument.md) | [SimpleEnumTransactionArgument](interfaces/simpleenumtransactionargument.md) | [ComplexTransactionArgument](interfaces/complextransactionargument.md)*

*Defined in [src/types/index.ts:531](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L531)*

___

###  TransactionSpecArray

Ƭ **TransactionSpecArray**: *object*

*Defined in [src/base/TransactionQueue.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/TransactionQueue.ts#L31)*

#### Type declaration:

___

###  UnscopedClaim

Ƭ **UnscopedClaim**: *object | object*

*Defined in [src/types/index.ts:263](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L263)*

___

###  UnsubCallback

Ƭ **UnsubCallback**: *function*

*Defined in [src/types/index.ts:425](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/index.ts#L425)*

#### Type declaration:

▸ (): *void*

## Functions

###  tickerToDid

▸ **tickerToDid**(`ticker`: string): *string*

*Defined in [src/utils/conversion.ts:132](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/utils/conversion.ts#L132)*

Generate a Security Token's DID from a ticker

**Parameters:**

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *string*

___

### `Const` tuple

▸ **tuple**‹**T**›(...`args`: T): *T*

*Defined in [src/types/utils/index.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/types/utils/index.ts#L10)*

Create a literal tuple type from a list of arguments

**Type parameters:**

▪ **T**: *unknown[]*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | T | values to turn into a tuple  |

**Returns:** *T*

## Object literals

### `Const` ErrorMessagesPerCode

### ▪ **ErrorMessagesPerCode**: *object*

*Defined in [src/base/PolymeshError.ts:3](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshError.ts#L3)*

###  [ErrorCode.TransactionAborted]

• **[ErrorCode.TransactionAborted]**: *string* = "The transaction was removed from the transaction pool. This might mean that it was malformed (nonce too large/nonce too small/duplicated or invalid transaction)"

*Defined in [src/base/PolymeshError.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshError.ts#L7)*

###  [ErrorCode.TransactionRejectedByUser]

• **[ErrorCode.TransactionRejectedByUser]**: *string* = "The user canceled the transaction signature"

*Defined in [src/base/PolymeshError.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshError.ts#L9)*

###  [ErrorCode.TransactionReverted]

• **[ErrorCode.TransactionReverted]**: *string* = "The transaction execution reverted due to an error"

*Defined in [src/base/PolymeshError.ts:6](https://github.com/PolymathNetwork/polymesh-sdk/blob/5b409784/src/base/PolymeshError.ts#L6)*

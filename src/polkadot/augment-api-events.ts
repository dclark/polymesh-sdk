// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, Vec, bool, u16, u32, u64 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { EthereumAddress } from '@polkadot/types/interfaces/claims';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { CodeHash } from '@polkadot/types/interfaces/contracts';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { Kind, OpaqueTimeSlot } from '@polkadot/types/interfaces/offences';
import type {
  AccountId,
  AccountIndex,
  Balance,
  BlockNumber,
  Hash,
  Moment,
  Perbill,
  PhantomData,
} from '@polkadot/types/interfaces/runtime';
import type { TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { IdentificationTuple, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ElectionCompute, EraIndex } from '@polkadot/types/interfaces/staking';
import type {
  DispatchError,
  DispatchInfo,
  DispatchResult,
} from '@polkadot/types/interfaces/system';
import type {
  AssetIdentifier,
  AssetName,
  AssetType,
  AuthorizationData,
  Ballot,
  BallotMeta,
  BallotTimeRange,
  BallotVote,
  BridgeTx,
  CAId,
  CheckpointId,
  ComplianceRequirement,
  CorporateAction,
  Distribution,
  Document,
  DocumentId,
  EventDid,
  FundingRoundName,
  Fundraiser,
  HandledTxStatus,
  IdentityClaim,
  IdentityId,
  InvestorUid,
  Leg,
  MaybeBlock,
  Memo,
  MetaUrl,
  OfflineSlashingParams,
  Permissions,
  PipDescription,
  PipId,
  PortfolioId,
  PortfolioName,
  PortfolioNumber,
  PosRatio,
  ProposalData,
  ProposalState,
  Proposer,
  ReceiptMetadata,
  SecondaryKey,
  SettlementType,
  Signatory,
  SkippedCount,
  SlashingSwitch,
  SmartExtensionName,
  SmartExtensionType,
  SnapshotId,
  SnapshottedPip,
  StoredSchedule,
  TargetIdentities,
  Tax,
  Ticker,
  TickerRangeProof,
  TrustedIssuer,
  Url,
  VenueDetails,
  VenueType,
} from 'polymesh-types/polymesh';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    asset: {
      /**
       * Event for creation of the asset.
       * caller DID/ owner DID, ticker, total supply, divisibility, asset type, beneficiary DID
       **/
      AssetCreated: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, Balance, bool, AssetType, IdentityId]
      >;
      /**
       * An event emitted when an asset is frozen.
       * Parameter: caller DID, ticker.
       **/
      AssetFrozen: AugmentedEvent<ApiType, [IdentityId, Ticker]>;
      /**
       * Emit when token ownership is transferred.
       * caller DID / token ownership transferred to DID, ticker, from
       **/
      AssetOwnershipTransferred: AugmentedEvent<ApiType, [IdentityId, Ticker, IdentityId]>;
      /**
       * An event emitted when a token is renamed.
       * Parameters: caller DID, ticker, new token name.
       **/
      AssetRenamed: AugmentedEvent<ApiType, [IdentityId, Ticker, AssetName]>;
      /**
       * An event emitted when an asset is unfrozen.
       * Parameter: caller DID, ticker.
       **/
      AssetUnfrozen: AugmentedEvent<ApiType, [IdentityId, Ticker]>;
      /**
       * A Polymath Classic token was claimed and transferred to a non-systematic DID.
       **/
      ClassicTickerClaimed: AugmentedEvent<ApiType, [IdentityId, Ticker, EthereumAddress]>;
      /**
       * Event for when a forced redemption takes place.
       * caller DID/ controller DID, ticker, token holder DID, value, data, operator data
       **/
      ControllerRedemption: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, IdentityId, Balance, Bytes, Bytes]
      >;
      /**
       * Event for change in divisibility.
       * caller DID, ticker, divisibility
       **/
      DivisibilityChanged: AugmentedEvent<ApiType, [IdentityId, Ticker, bool]>;
      /**
       * A new document attached to an asset
       **/
      DocumentAdded: AugmentedEvent<ApiType, [IdentityId, Ticker, DocumentId, Document]>;
      /**
       * A document removed from an asset
       **/
      DocumentRemoved: AugmentedEvent<ApiType, [IdentityId, Ticker, DocumentId]>;
      /**
       * Emitted when extension is added successfully.
       * caller DID, ticker, extension AccountId, extension name, type of smart Extension
       **/
      ExtensionAdded: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, AccountId, SmartExtensionName, SmartExtensionType]
      >;
      /**
       * Emitted when extension get archived.
       * caller DID, ticker, AccountId
       **/
      ExtensionArchived: AugmentedEvent<ApiType, [IdentityId, Ticker, AccountId]>;
      /**
       * A extension got removed.
       * caller DID, ticker, AccountId
       **/
      ExtensionRemoved: AugmentedEvent<ApiType, [IdentityId, Ticker, AccountId]>;
      /**
       * Emitted when extension get archived.
       * caller DID, ticker, AccountId
       **/
      ExtensionUnArchived: AugmentedEvent<ApiType, [IdentityId, Ticker, AccountId]>;
      /**
       * An event carrying the name of the current funding round of a ticker.
       * Parameters: caller DID, ticker, funding round name.
       **/
      FundingRoundSet: AugmentedEvent<ApiType, [IdentityId, Ticker, FundingRoundName]>;
      /**
       * Event emitted when a token identifiers are updated.
       * caller DID, ticker, a vector of (identifier type, identifier value)
       **/
      IdentifiersUpdated: AugmentedEvent<ApiType, [IdentityId, Ticker, Vec<AssetIdentifier>]>;
      /**
       * is_issuable() output
       * ticker, return value (true if issuable)
       **/
      IsIssuable: AugmentedEvent<ApiType, [Ticker, bool]>;
      /**
       * Emit when tokens get issued.
       * caller DID, ticker, beneficiary DID, value, funding round, total issued in this funding round,
       * primary issuance agent
       **/
      Issued: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, IdentityId, Balance, FundingRoundName, Balance, Option<IdentityId>]
      >;
      /**
       * An event emitted when the primary issuance agent of an asset is transferred.
       * First DID is the old primary issuance agent and the second DID is the new primary issuance agent.
       **/
      PrimaryIssuanceAgentTransferred: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, Option<IdentityId>, Option<IdentityId>]
      >;
      /**
       * Emit when tokens get redeemed.
       * caller DID, ticker,  from DID, value
       **/
      Redeemed: AugmentedEvent<ApiType, [IdentityId, Ticker, IdentityId, Balance]>;
      /**
       * Emit when ticker is registered.
       * caller DID / ticker owner did, ticker, ticker owner, expiry
       **/
      TickerRegistered: AugmentedEvent<ApiType, [IdentityId, Ticker, Option<Moment>]>;
      /**
       * Emit when ticker is transferred.
       * caller DID / ticker transferred to DID, ticker, from
       **/
      TickerTransferred: AugmentedEvent<ApiType, [IdentityId, Ticker, IdentityId]>;
      /**
       * Event for transfer of tokens.
       * caller DID, ticker, from portfolio, to portfolio, value
       **/
      Transfer: AugmentedEvent<ApiType, [IdentityId, Ticker, PortfolioId, PortfolioId, Balance]>;
      /**
       * An additional event to Transfer; emitted when transfer_with_data is called.
       * caller DID , ticker, from DID, to DID, value, data
       **/
      TransferWithData: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, IdentityId, IdentityId, Balance, Bytes]
      >;
    };
    balances: {
      /**
       * The account and the amount of unlocked balance of that account that was burned.
       * (caller Id, caller account, amount)
       **/
      AccountBalanceBurned: AugmentedEvent<ApiType, [IdentityId, AccountId, Balance]>;
      /**
       * A balance was set by root (did, who, free, reserved).
       **/
      BalanceSet: AugmentedEvent<ApiType, [IdentityId, AccountId, Balance, Balance]>;
      /**
       * An account was created with some free balance. \[did, account, free_balance]
       **/
      Endowed: AugmentedEvent<ApiType, [Option<IdentityId>, AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded (from_did, from, to_did, to, value, memo).
       **/
      Transfer: AugmentedEvent<
        ApiType,
        [Option<IdentityId>, AccountId, Option<IdentityId>, AccountId, Balance, Option<Memo>]
      >;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    baseContracts: {
      /**
       * Code with the specified hash has been stored.
       * \[code_hash\]
       **/
      CodeStored: AugmentedEvent<ApiType, [Hash]>;
      /**
       * An event deposited upon execution of a contract from the account.
       * \[account, data\]
       **/
      ContractExecution: AugmentedEvent<ApiType, [AccountId, Bytes]>;
      /**
       * Contract has been evicted and is now in tombstone state.
       * \[contract, tombstone\]
       *
       * # Params
       *
       * - `contract`: `AccountId`: The account ID of the evicted contract.
       * - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
       **/
      Evicted: AugmentedEvent<ApiType, [AccountId, bool]>;
      /**
       * Contract deployed by address at the specified address. \[owner, contract\]
       **/
      Instantiated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * Restoration for a contract has been successful.
       * \[donor, dest, code_hash, rent_allowance\]
       *
       * # Params
       *
       * - `donor`: `AccountId`: Account ID of the restoring contract
       * - `dest`: `AccountId`: Account ID of the restored contract
       * - `code_hash`: `Hash`: Code hash of the restored contract
       * - `rent_allowance: `Balance`: Rent allowance of the restored contract
       **/
      Restored: AugmentedEvent<ApiType, [AccountId, AccountId, Hash, Balance]>;
      /**
       * Triggered when the current \[schedule\] is updated.
       **/
      ScheduleUpdated: AugmentedEvent<ApiType, [u32]>;
    };
    bridge: {
      /**
       * Confirmation of Admin change.
       **/
      AdminChanged: AugmentedEvent<ApiType, [IdentityId, AccountId]>;
      /**
       * Confirmation of POLYX upgrade on Polymesh from POLY tokens on Ethereum
       **/
      Bridged: AugmentedEvent<ApiType, [IdentityId, BridgeTx]>;
      /**
       * Bridge limit has been updated
       **/
      BridgeLimitUpdated: AugmentedEvent<ApiType, [IdentityId, Balance, BlockNumber]>;
      /**
       * Bridge Tx Scheduled
       **/
      BridgeTxScheduled: AugmentedEvent<ApiType, [IdentityId, BridgeTx, BlockNumber]>;
      /**
       * Confirmation of a signer set change.
       **/
      ControllerChanged: AugmentedEvent<ApiType, [IdentityId, AccountId]>;
      /**
       * Exemption status of an identity has been updated.
       **/
      ExemptedUpdated: AugmentedEvent<ApiType, [IdentityId, IdentityId, bool]>;
      /**
       * Notification of freezing the bridge.
       **/
      Frozen: AugmentedEvent<ApiType, [IdentityId]>;
      /**
       * Notification of freezing a transaction.
       **/
      FrozenTx: AugmentedEvent<ApiType, [IdentityId, BridgeTx]>;
      /**
       * Confirmation of default timelock change.
       **/
      TimelockChanged: AugmentedEvent<ApiType, [IdentityId, BlockNumber]>;
      /**
       * An event emitted after a vector of transactions is handled. The parameter is a vector of
       * nonces of all processed transactions, each with either the "success" code 0 or its
       * failure reason (greater than 0).
       **/
      TxsHandled: AugmentedEvent<ApiType, [Vec<ITuple<[u32, HandledTxStatus]>>]>;
      /**
       * Notification of unfreezing the bridge.
       **/
      Unfrozen: AugmentedEvent<ApiType, [IdentityId]>;
      /**
       * Notification of unfreezing a transaction.
       **/
      UnfrozenTx: AugmentedEvent<ApiType, [IdentityId, BridgeTx]>;
    };
    capitalDistribution: {
      /**
       * A token holder's benefit of a capital distribution for the given `CAId` was claimed.
       *
       * (Caller DID, Holder/Claimant DID, CA's ID, updated distribution details, DID's benefit, DID's tax %)
       **/
      BenefitClaimed: AugmentedEvent<
        ApiType,
        [EventDid, EventDid, CAId, Distribution, Balance, Tax]
      >;
      /**
       * A capital distribution, with details included,
       * was created by the DID (the CAA) for the CA specified by the `CAId`.
       *
       * (CAA of CAId's ticker, CA's ID, distribution details)
       **/
      Created: AugmentedEvent<ApiType, [EventDid, CAId, Distribution]>;
      /**
       * Stats from `push_benefit` was emitted.
       *
       * (CAA/owner of CA's ticker, CA's ID, max requested DIDs, processed DIDs, failed DIDs)
       **/
      Reclaimed: AugmentedEvent<ApiType, [EventDid, CAId, Balance]>;
      /**
       * A capital distribution was removed.
       *
       * (Ticker's CAA, CA's ID)
       **/
      Removed: AugmentedEvent<ApiType, [EventDid, CAId]>;
    };
    cddServiceProviders: {
      /**
       * The limit of how many active members there can be concurrently was changed.
       **/
      ActiveLimitChanged: AugmentedEvent<ApiType, [IdentityId, MemberCount, MemberCount]>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, [PhantomData]>;
      /**
       * The given member was added; see the transaction for who.
       * caller DID, New member DID.
       **/
      MemberAdded: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The given member was removed; see the transaction for who.
       * caller DID, member DID that get removed.
       **/
      MemberRemoved: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The given member has been revoked at specific time-stamp.
       * caller DID, member DID that get revoked.
       **/
      MemberRevoked: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       * caller DID, List of new members.
       **/
      MembersReset: AugmentedEvent<ApiType, [IdentityId, Vec<IdentityId>]>;
      /**
       * Two members were swapped; see the transaction for who.
       * caller DID, Removed DID, New add DID.
       **/
      MembersSwapped: AugmentedEvent<ApiType, [IdentityId, IdentityId, IdentityId]>;
    };
    checkpoint: {
      /**
       * A checkpoint was created.
       *
       * (caller DID, ticker, checkpoint ID, total supply, checkpoint timestamp)
       **/
      CheckpointCreated: AugmentedEvent<
        ApiType,
        [Option<EventDid>, Ticker, CheckpointId, Balance, Moment]
      >;
      /**
       * The maximum complexity for an arbitrary ticker's schedule set was changed.
       *
       * (GC DID, the new maximum)
       **/
      MaximumSchedulesComplexityChanged: AugmentedEvent<ApiType, [IdentityId, u64]>;
      /**
       * A checkpoint schedule was created.
       *
       * (caller DID, ticker, schedule)
       **/
      ScheduleCreated: AugmentedEvent<ApiType, [EventDid, Ticker, StoredSchedule]>;
      /**
       * A checkpoint schedule was removed.
       *
       * (caller DID, ticker, schedule)
       **/
      ScheduleRemoved: AugmentedEvent<ApiType, [IdentityId, Ticker, StoredSchedule]>;
    };
    committeeMembership: {
      /**
       * The limit of how many active members there can be concurrently was changed.
       **/
      ActiveLimitChanged: AugmentedEvent<ApiType, [IdentityId, MemberCount, MemberCount]>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, [PhantomData]>;
      /**
       * The given member was added; see the transaction for who.
       * caller DID, New member DID.
       **/
      MemberAdded: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The given member was removed; see the transaction for who.
       * caller DID, member DID that get removed.
       **/
      MemberRemoved: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The given member has been revoked at specific time-stamp.
       * caller DID, member DID that get revoked.
       **/
      MemberRevoked: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       * caller DID, List of new members.
       **/
      MembersReset: AugmentedEvent<ApiType, [IdentityId, Vec<IdentityId>]>;
      /**
       * Two members were swapped; see the transaction for who.
       * caller DID, Removed DID, New add DID.
       **/
      MembersSwapped: AugmentedEvent<ApiType, [IdentityId, IdentityId, IdentityId]>;
    };
    complianceManager: {
      /**
       * Emitted when an asset compliance for a given ticker gets paused.
       * (caller DID, Ticker).
       **/
      AssetCompliancePaused: AugmentedEvent<ApiType, [IdentityId, Ticker]>;
      /**
       * Emitted when an asset compliance is replaced.
       * Parameters: caller DID, ticker, new asset compliance.
       **/
      AssetComplianceReplaced: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, Vec<ComplianceRequirement>]
      >;
      /**
       * Emitted when an asset compliance of a ticker is reset.
       * (caller DID, Ticker).
       **/
      AssetComplianceReset: AugmentedEvent<ApiType, [IdentityId, Ticker]>;
      /**
       * Emitted when an asset compliance for a given ticker gets resume.
       * (caller DID, Ticker).
       **/
      AssetComplianceResumed: AugmentedEvent<ApiType, [IdentityId, Ticker]>;
      /**
       * Emitted when compliance requirement get modified/change.
       * (caller DID, Ticker, ComplianceRequirement).
       **/
      ComplianceRequirementChanged: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, ComplianceRequirement]
      >;
      /**
       * Emitted when new compliance requirement is created.
       * (caller DID, Ticker, ComplianceRequirement).
       **/
      ComplianceRequirementCreated: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, ComplianceRequirement]
      >;
      /**
       * Emitted when a compliance requirement is removed.
       * (caller DID, Ticker, requirement_id).
       **/
      ComplianceRequirementRemoved: AugmentedEvent<ApiType, [IdentityId, Ticker, u32]>;
      /**
       * Emitted when default claim issuer list for a given ticker gets added.
       * (caller DID, Ticker, Added TrustedIssuer).
       **/
      TrustedDefaultClaimIssuerAdded: AugmentedEvent<ApiType, [IdentityId, Ticker, TrustedIssuer]>;
      /**
       * Emitted when default claim issuer list for a given ticker get removed.
       * (caller DID, Ticker, Removed TrustedIssuer).
       **/
      TrustedDefaultClaimIssuerRemoved: AugmentedEvent<ApiType, [IdentityId, Ticker, IdentityId]>;
    };
    confidential: {
      RangeProofAdded: AugmentedEvent<ApiType, [IdentityId, Ticker, TickerRangeProof]>;
      RangeProofVerified: AugmentedEvent<ApiType, [IdentityId, IdentityId, Ticker]>;
    };
    contracts: {
      /**
       * Emitted when instantiation fee of a template get changed.
       * IdentityId of the owner, Code hash of the template, old instantiation fee, new instantiation fee.
       **/
      InstantiationFeeChanged: AugmentedEvent<ApiType, [IdentityId, CodeHash, Balance, Balance]>;
      /**
       * Emitted when the instantiation of the template get frozen.
       * IdentityId of the owner, Code hash of the template.
       **/
      InstantiationFreezed: AugmentedEvent<ApiType, [IdentityId, CodeHash]>;
      /**
       * Emitted when the instantiation of the template gets un-frozen.
       * IdentityId of the owner, Code hash of the template.
       **/
      InstantiationUnFreezed: AugmentedEvent<ApiType, [IdentityId, CodeHash]>;
      /**
       * Emitted when the template instantiation fees gets changed.
       * IdentityId of the owner, Code hash of the template, Old instantiation fee, New instantiation fee.
       **/
      TemplateInstantiationFeeChanged: AugmentedEvent<
        ApiType,
        [IdentityId, CodeHash, Balance, Balance]
      >;
      /**
       * Emitted when the template meta url get changed.
       * IdentityId of the owner, Code hash of the template, old meta url, new meta url.
       **/
      TemplateMetaUrlChanged: AugmentedEvent<
        ApiType,
        [IdentityId, CodeHash, Option<MetaUrl>, Option<MetaUrl>]
      >;
      /**
       * Emitted when the template ownership get transferred.
       * IdentityId of the owner, Code hash of the template, IdentityId of the new owner of the template.
       **/
      TemplateOwnershipTransferred: AugmentedEvent<ApiType, [IdentityId, CodeHash, IdentityId]>;
      /**
       * Emitted when the template usage fees gets changed.
       * IdentityId of the owner, Code hash of the template,Old usage fee, New usage fee.
       **/
      TemplateUsageFeeChanged: AugmentedEvent<ApiType, [IdentityId, CodeHash, Balance, Balance]>;
    };
    corporateAction: {
      /**
       * A new DID was made the CAA.
       * (New CAA DID, Ticker, New CAA DID).
       **/
      CAATransferred: AugmentedEvent<ApiType, [IdentityId, Ticker, IdentityId]>;
      /**
       * A CA was initiated.
       * (CAA DID, CA id, the CA)
       **/
      CAInitiated: AugmentedEvent<ApiType, [EventDid, CAId, CorporateAction]>;
      /**
       * A CA was linked to a set of docs.
       * (CAA, CA Id, List of doc identifiers)
       **/
      CALinkedToDoc: AugmentedEvent<ApiType, [IdentityId, CAId, Vec<DocumentId>]>;
      /**
       * A CA was removed.
       * (CAA, CA Id)
       **/
      CARemoved: AugmentedEvent<ApiType, [EventDid, CAId]>;
      /**
       * The set of default `TargetIdentities` for a ticker changed.
       * (CAA DID, Ticker, New TargetIdentities)
       **/
      DefaultTargetIdentitiesChanged: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, TargetIdentities]
      >;
      /**
       * The default withholding tax for a ticker changed.
       * (CAA DID, Ticker, New Tax).
       **/
      DefaultWithholdingTaxChanged: AugmentedEvent<ApiType, [IdentityId, Ticker, Tax]>;
      /**
       * The withholding tax specific to a DID for a ticker changed.
       * (CAA DID, Ticker, Taxed DID, New Tax).
       **/
      DidWithholdingTaxChanged: AugmentedEvent<
        ApiType,
        [IdentityId, Ticker, IdentityId, Option<Tax>]
      >;
      /**
       * The maximum length of `details` in bytes was changed.
       * (GC DID, new length)
       **/
      MaxDetailsLengthChanged: AugmentedEvent<ApiType, [IdentityId, u32]>;
      /**
       * A CA's record date changed.
       **/
      RecordDateChanged: AugmentedEvent<ApiType, [EventDid, CAId, CorporateAction]>;
    };
    corporateBallot: {
      /**
       * A corporate ballot was created.
       *
       * (Ticker's CAA, CA's ID, Voting start/end, Ballot metadata, RCV enabled?)
       **/
      Created: AugmentedEvent<ApiType, [IdentityId, CAId, BallotTimeRange, BallotMeta, bool]>;
      /**
       * A corporate ballot changed its metadata.
       *
       * (Ticker's CAA, CA's ID, New metadata)
       **/
      MetaChanged: AugmentedEvent<ApiType, [IdentityId, CAId, BallotMeta]>;
      /**
       * A corporate ballot changed its start/end date range.
       *
       * (Ticker's CAA, CA's ID, Voting start/end)
       **/
      RangeChanged: AugmentedEvent<ApiType, [IdentityId, CAId, BallotTimeRange]>;
      /**
       * A corporate ballot changed its RCV support.
       *
       * (Ticker's CAA, CA's ID, New support)
       **/
      RCVChanged: AugmentedEvent<ApiType, [IdentityId, CAId, bool]>;
      /**
       * A corporate ballot was removed.
       *
       * (Ticker's CAA, CA's ID)
       **/
      Removed: AugmentedEvent<ApiType, [EventDid, CAId]>;
      /**
       * A vote was cast in a corporate ballot.
       *
       * (voter DID, CAId, Votes)
       **/
      VoteCast: AugmentedEvent<ApiType, [IdentityId, CAId, Vec<BallotVote>]>;
    };
    dividend: {
      /**
       * A dividend was canceled (ticker, dividend ID)
       **/
      DividendCanceled: AugmentedEvent<ApiType, [IdentityId, Ticker, u32]>;
      /**
       * A new dividend was created (ticker, amount, dividend ID)
       **/
      DividendCreated: AugmentedEvent<ApiType, [IdentityId, Ticker, Balance, u32]>;
      /**
       * Dividend was paid to a user (who, ticker, dividend ID, share)
       **/
      DividendPaidOutToUser: AugmentedEvent<ApiType, [IdentityId, Ticker, u32, Balance]>;
      /**
       * Unclaimed dividend was claimed back (ticker, dividend ID, amount)
       **/
      DividendRemainingClaimed: AugmentedEvent<ApiType, [IdentityId, Ticker, u32, Balance]>;
    };
    exemption: {
      ExemptionListModified: AugmentedEvent<ApiType, [IdentityId, Ticker, u16, IdentityId, bool]>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    identity: {
      /**
       * Asset DID
       **/
      AssetDidRegistered: AugmentedEvent<ApiType, [IdentityId, Ticker]>;
      /**
       * New authorization added.
       * (authorised_by, target_did, target_key, auth_id, authorization_data, expiry)
       **/
      AuthorizationAdded: AugmentedEvent<
        ApiType,
        [IdentityId, Option<IdentityId>, Option<AccountId>, u64, AuthorizationData, Option<Moment>]
      >;
      /**
       * Authorization consumed.
       * (authorized_identity, authorized_key, auth_id)
       **/
      AuthorizationConsumed: AugmentedEvent<ApiType, [Option<IdentityId>, Option<AccountId>, u64]>;
      /**
       * Authorization rejected by the user who was authorized.
       * (authorized_identity, authorized_key, auth_id)
       **/
      AuthorizationRejected: AugmentedEvent<ApiType, [Option<IdentityId>, Option<AccountId>, u64]>;
      /**
       * Authorization revoked by the authorizer.
       * (authorized_identity, authorized_key, auth_id)
       **/
      AuthorizationRevoked: AugmentedEvent<ApiType, [Option<IdentityId>, Option<AccountId>, u64]>;
      /**
       * CDD claims generated by `IdentityId` (a CDD Provider) have been invalidated from
       * `Moment`.
       **/
      CddClaimsInvalidated: AugmentedEvent<ApiType, [IdentityId, Moment]>;
      /**
       * CDD requirement for updating primary key changed. (new_requirement)
       **/
      CddRequirementForPrimaryKeyUpdated: AugmentedEvent<ApiType, [bool]>;
      /**
       * CDD queried
       **/
      CddStatus: AugmentedEvent<ApiType, [Option<IdentityId>, AccountId, bool]>;
      /**
       * DID, claims
       **/
      ClaimAdded: AugmentedEvent<ApiType, [IdentityId, IdentityClaim]>;
      /**
       * DID, ClaimType, Claim Issuer
       **/
      ClaimRevoked: AugmentedEvent<ApiType, [IdentityId, IdentityClaim]>;
      /**
       * DID, primary key account ID, secondary keys
       **/
      DidCreated: AugmentedEvent<ApiType, [IdentityId, AccountId, Vec<SecondaryKey>]>;
      /**
       * DID queried
       **/
      DidStatus: AugmentedEvent<ApiType, [IdentityId, AccountId]>;
      /**
       * Mocked InvestorUid created.
       **/
      MockInvestorUIDCreated: AugmentedEvent<ApiType, [IdentityId, InvestorUid]>;
      /**
       * Off-chain Authorization has been revoked.
       * (Target Identity, Signatory)
       **/
      OffChainAuthorizationRevoked: AugmentedEvent<ApiType, [IdentityId, Signatory]>;
      /**
       * DID, old primary key account ID, new ID
       **/
      PrimaryKeyUpdated: AugmentedEvent<ApiType, [IdentityId, AccountId, AccountId]>;
      /**
       * DID, updated secondary key, previous permissions
       **/
      SecondaryKeyPermissionsUpdated: AugmentedEvent<
        ApiType,
        [IdentityId, SecondaryKey, Permissions]
      >;
      /**
       * DID, new keys
       **/
      SecondaryKeysAdded: AugmentedEvent<ApiType, [IdentityId, Vec<SecondaryKey>]>;
      /**
       * All Secondary keys of the identity ID are frozen.
       **/
      SecondaryKeysFrozen: AugmentedEvent<ApiType, [IdentityId]>;
      /**
       * DID, the keys that got removed
       **/
      SecondaryKeysRemoved: AugmentedEvent<ApiType, [IdentityId, Vec<Signatory>]>;
      /**
       * All Secondary keys of the identity ID are unfrozen.
       **/
      SecondaryKeysUnfrozen: AugmentedEvent<ApiType, [IdentityId]>;
      /**
       * A signer left their identity. (did, signer)
       **/
      SignerLeft: AugmentedEvent<ApiType, [IdentityId, Signatory]>;
      /**
       * An unexpected error happened that should be investigated.
       **/
      UnexpectedError: AugmentedEvent<ApiType, [Option<DispatchError>]>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId`
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [AuthorityId]>;
      /**
       * Newly updated slashing params.
       * OfflineSlashingParams
       **/
      SlashingParamsUpdated: AugmentedEvent<ApiType, [OfflineSlashingParams]>;
      /**
       * At the end of the session, at least once validator was found to be offline.
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    indices: {
      /**
       * A account index was assigned. \[who, index\]
       **/
      IndexAssigned: AugmentedEvent<ApiType, [AccountId, AccountIndex]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      IndexFreed: AugmentedEvent<ApiType, [AccountIndex]>;
      /**
       * A account index has been frozen to its current account ID. \[who, index\]
       **/
      IndexFrozen: AugmentedEvent<ApiType, [AccountIndex, AccountId]>;
    };
    multiSig: {
      /**
       * Event emitted after creation of a multisig.
       * Arguments: caller DID, multisig address, signers (pending approval), signatures required.
       **/
      MultiSigCreated: AugmentedEvent<
        ApiType,
        [IdentityId, AccountId, AccountId, Vec<Signatory>, u64]
      >;
      /**
       * Event emitted when the number of required signatures is changed.
       * Arguments: caller DID, multisig, new required signatures.
       **/
      MultiSigSignaturesRequiredChanged: AugmentedEvent<ApiType, [IdentityId, AccountId, u64]>;
      /**
       * Event emitted when a signatory is added.
       * Arguments: caller DID, multisig, added signer.
       **/
      MultiSigSignerAdded: AugmentedEvent<ApiType, [IdentityId, AccountId, Signatory]>;
      /**
       * Event emitted when a multisig signatory is authorized to be added.
       * Arguments: caller DID, multisig, authorized signer.
       **/
      MultiSigSignerAuthorized: AugmentedEvent<ApiType, [IdentityId, AccountId, Signatory]>;
      /**
       * Event emitted when a multisig signatory is removed.
       * Arguments: caller DID, multisig, removed signer.
       **/
      MultiSigSignerRemoved: AugmentedEvent<ApiType, [IdentityId, AccountId, Signatory]>;
      /**
       * Event emitted after adding a proposal.
       * Arguments: caller DID, multisig, proposal ID.
       **/
      ProposalAdded: AugmentedEvent<ApiType, [IdentityId, AccountId, u64]>;
      /**
       * Event emitted when the proposal get approved.
       * Arguments: caller DID, multisig, authorized signer, proposal id.
       **/
      ProposalApproved: AugmentedEvent<ApiType, [IdentityId, AccountId, Signatory, u64]>;
      /**
       * Event emitted when a proposal is executed.
       * Arguments: caller DID, multisig, proposal ID, result.
       **/
      ProposalExecuted: AugmentedEvent<ApiType, [IdentityId, AccountId, u64, bool]>;
      /**
       * Event emitted when there's an error in proposal execution
       **/
      ProposalExecutionFailed: AugmentedEvent<ApiType, [DispatchError]>;
      /**
       * Event emitted when a proposal is rejected.
       * Arguments: caller DID, multisig, proposal ID.
       **/
      ProposalRejected: AugmentedEvent<ApiType, [IdentityId, AccountId, u64]>;
      /**
       * Event emitted when a vote is cast in favor of rejecting a proposal.
       * Arguments: caller DID, multisig, authorized signer, proposal id.
       **/
      ProposalRejectionVote: AugmentedEvent<ApiType, [IdentityId, AccountId, Signatory, u64]>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes. last
       * element indicates of the offence was applied (true) or queued (false)
       * \[kind, timeslot, applied\].
       **/
      Offence: AugmentedEvent<ApiType, [Kind, OpaqueTimeSlot, bool]>;
    };
    pips: {
      /**
       * The maximum number of active PIPs was changed.
       * (caller DID, old value, new value)
       **/
      ActivePipLimitChanged: AugmentedEvent<ApiType, [IdentityId, u32, u32]>;
      /**
       * Default enactment period (in blocks) has been changed.
       * (caller DID, old period, new period)
       **/
      DefaultEnactmentPeriodChanged: AugmentedEvent<
        ApiType,
        [IdentityId, BlockNumber, BlockNumber]
      >;
      /**
       * Cancelling the PIP execution failed in the scheduler pallet.
       **/
      ExecutionCancellingFailed: AugmentedEvent<ApiType, [PipId]>;
      /**
       * Execution of a PIP has been scheduled at specific block.
       **/
      ExecutionScheduled: AugmentedEvent<ApiType, [IdentityId, PipId, BlockNumber, BlockNumber]>;
      /**
       * Scheduling of the PIP for execution failed in the scheduler pallet.
       **/
      ExecutionSchedulingFailed: AugmentedEvent<ApiType, [IdentityId, PipId, BlockNumber]>;
      /**
       * The PIP has been scheduled for expiry.
       **/
      ExpiryScheduled: AugmentedEvent<ApiType, [IdentityId, PipId, BlockNumber]>;
      /**
       * Scheduling of the PIP for expiry failed in the scheduler pallet.
       **/
      ExpirySchedulingFailed: AugmentedEvent<ApiType, [IdentityId, PipId, BlockNumber]>;
      /**
       * Pruning Historical PIPs is enabled or disabled (caller DID, old value, new value)
       **/
      HistoricalPipsPruned: AugmentedEvent<ApiType, [IdentityId, bool, bool]>;
      /**
       * The maximum times a PIP can be skipped was changed.
       * (caller DID, old value, new value)
       **/
      MaxPipSkipCountChanged: AugmentedEvent<ApiType, [IdentityId, SkippedCount, SkippedCount]>;
      /**
       * Minimum deposit amount modified
       * (caller DID, old amount, new amount)
       **/
      MinimumProposalDepositChanged: AugmentedEvent<ApiType, [IdentityId, Balance, Balance]>;
      /**
       * Amount of blocks, after the cool-off period, after which a pending PIP expires.
       * (caller DID, old expiry, new expiry)
       **/
      PendingPipExpiryChanged: AugmentedEvent<ApiType, [IdentityId, MaybeBlock, MaybeBlock]>;
      /**
       * Pip has been closed, bool indicates whether data is pruned
       **/
      PipClosed: AugmentedEvent<ApiType, [IdentityId, PipId, bool]>;
      /**
       * A PIP in the snapshot queue was skipped.
       * (gc_did, pip_id, new_skip_count)
       **/
      PipSkipped: AugmentedEvent<ApiType, [IdentityId, PipId, SkippedCount]>;
      /**
       * Cool off period for proposals modified
       * (caller DID, old period, new period)
       **/
      ProposalCoolOffPeriodChanged: AugmentedEvent<ApiType, [IdentityId, BlockNumber, BlockNumber]>;
      /**
       * A PIP was made with a `Balance` stake.
       *
       * # Parameters:
       *
       * Caller DID, Proposer, PIP ID, deposit, URL, description, cool-off period end, expiry time, proposal data.
       **/
      ProposalCreated: AugmentedEvent<
        ApiType,
        [
          IdentityId,
          Proposer,
          PipId,
          Balance,
          Option<Url>,
          Option<PipDescription>,
          BlockNumber,
          MaybeBlock,
          ProposalData
        ]
      >;
      /**
       * A PIP's details (url & description) were amended.
       **/
      ProposalDetailsAmended: AugmentedEvent<
        ApiType,
        [IdentityId, Proposer, PipId, Option<Url>, Option<PipDescription>]
      >;
      /**
       * Refund proposal
       * (id, total amount)
       **/
      ProposalRefund: AugmentedEvent<ApiType, [IdentityId, PipId, Balance]>;
      /**
       * Triggered each time the state of a proposal is amended
       **/
      ProposalStateUpdated: AugmentedEvent<ApiType, [IdentityId, PipId, ProposalState]>;
      /**
       * The snapshot was cleared.
       **/
      SnapshotCleared: AugmentedEvent<ApiType, [IdentityId, SnapshotId]>;
      /**
       * Results (e.g., approved, rejected, and skipped), were enacted for some PIPs.
       * (gc_did, snapshot_id_opt, skipped_pips_with_new_count, rejected_pips, approved_pips)
       **/
      SnapshotResultsEnacted: AugmentedEvent<
        ApiType,
        [IdentityId, Option<SnapshotId>, Vec<ITuple<[PipId, SkippedCount]>>, Vec<PipId>, Vec<PipId>]
      >;
      /**
       * A new snapshot was taken.
       **/
      SnapshotTaken: AugmentedEvent<ApiType, [IdentityId, SnapshotId, Vec<SnapshottedPip>]>;
      /**
       * `AccountId` voted `bool` on the proposal referenced by `PipId`
       **/
      Voted: AugmentedEvent<ApiType, [IdentityId, AccountId, PipId, bool, Balance]>;
    };
    polymeshCommittee: {
      /**
       * A motion was approved by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Approved: AugmentedEvent<ApiType, [IdentityId, Hash, MemberCount, MemberCount, MemberCount]>;
      /**
       * A proposal was closed after its duration was up.
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count.
       **/
      Closed: AugmentedEvent<ApiType, [IdentityId, Hash, MemberCount, MemberCount]>;
      /**
       * A motion was executed; `DispatchResult` is `Ok(())` if returned without error.
       * Parameters: caller DID, proposal hash, result of proposal dispatch.
       **/
      Executed: AugmentedEvent<ApiType, [IdentityId, Hash, DispatchResult]>;
      /**
       * Proposal expiry time has been updated.
       * Parameters: caller DID, new expiry time (if any).
       **/
      ExpiresAfterUpdated: AugmentedEvent<ApiType, [IdentityId, MaybeBlock]>;
      /**
       * Final votes on a motion (given hash)
       * caller DID, ProposalIndex, Proposal hash, yes voters, no voter
       **/
      FinalVotes: AugmentedEvent<
        ApiType,
        [IdentityId, ProposalIndex, Hash, Vec<IdentityId>, Vec<IdentityId>]
      >;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).
       * Parameters: caller DID, proposal index, proposal hash.
       **/
      Proposed: AugmentedEvent<ApiType, [IdentityId, ProposalIndex, Hash]>;
      /**
       * A motion was rejected by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Rejected: AugmentedEvent<ApiType, [IdentityId, Hash, MemberCount, MemberCount, MemberCount]>;
      /**
       * Release coordinator has been updated.
       * Parameters: caller DID, DID of the release coordinator.
       **/
      ReleaseCoordinatorUpdated: AugmentedEvent<ApiType, [IdentityId, Option<IdentityId>]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * caller DID, Proposal index, Proposal hash, current vote, yay vote count, nay vote count, total seats.
       **/
      Voted: AugmentedEvent<
        ApiType,
        [IdentityId, ProposalIndex, Hash, bool, MemberCount, MemberCount, MemberCount]
      >;
      /**
       * A vote on a motion (given hash) has been retracted.
       * caller DID, ProposalIndex, Proposal hash, vote that was retracted
       **/
      VoteRetracted: AugmentedEvent<ApiType, [IdentityId, ProposalIndex, Hash, bool]>;
      /**
       * Voting threshold has been updated
       * Parameters: caller DID, numerator, denominator
       **/
      VoteThresholdUpdated: AugmentedEvent<ApiType, [IdentityId, u32, u32]>;
    };
    portfolio: {
      /**
       * A token amount has been moved from one portfolio to another.
       *
       * # Parameters
       * * origin DID
       * * source portfolio
       * * destination portfolio
       * * asset ticker
       * * asset balance that was moved
       **/
      MovedBetweenPortfolios: AugmentedEvent<
        ApiType,
        [IdentityId, PortfolioId, PortfolioId, Ticker, Balance]
      >;
      /**
       * The portfolio has been successfully created.
       *
       * # Parameters
       * * origin DID
       * * portfolio number
       * * portfolio name
       **/
      PortfolioCreated: AugmentedEvent<ApiType, [IdentityId, PortfolioNumber, PortfolioName]>;
      /**
       * Custody of a portfolio has been given to a different identity
       *
       * # Parameters
       * * origin DID
       * * portfolio id
       * * portfolio custodian did
       **/
      PortfolioCustodianChanged: AugmentedEvent<ApiType, [IdentityId, PortfolioId, IdentityId]>;
      /**
       * The portfolio has been successfully removed.
       *
       * # Parameters
       * * origin DID
       * * portfolio number
       **/
      PortfolioDeleted: AugmentedEvent<ApiType, [IdentityId, PortfolioNumber]>;
      /**
       * The portfolio identified with `num` has been renamed to `name`.
       *
       * # Parameters
       * * origin DID
       * * portfolio number
       * * portfolio name
       **/
      PortfolioRenamed: AugmentedEvent<ApiType, [IdentityId, PortfolioNumber, PortfolioName]>;
      /**
       * All non-default portfolio numbers and names of a DID.
       *
       * # Parameters
       * * origin DID
       * * vector of number-name pairs
       **/
      UserPortfolios: AugmentedEvent<
        ApiType,
        [IdentityId, Vec<ITuple<[PortfolioNumber, PortfolioName]>>]
      >;
    };
    protocolFee: {
      /**
       * The fee coefficient.
       **/
      CoefficientSet: AugmentedEvent<ApiType, [IdentityId, PosRatio]>;
      /**
       * Fee charged.
       **/
      FeeCharged: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * The protocol fee of an operation.
       **/
      FeeSet: AugmentedEvent<ApiType, [IdentityId, Balance]>;
    };
    scheduler: {
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedEvent<ApiType, [TaskAddress, Option<Bytes>, DispatchResult]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    settlement: {
      /**
       * An affirmation has been withdrawn (did, portfolio, instruction_id)
       **/
      AffirmationWithdrawn: AugmentedEvent<ApiType, [IdentityId, PortfolioId, u64]>;
      /**
       * An instruction has been affirmed (did, portfolio, instruction_id)
       **/
      InstructionAffirmed: AugmentedEvent<ApiType, [IdentityId, PortfolioId, u64]>;
      /**
       * A new instruction has been created
       * (did, venue_id, instruction_id, settlement_type, valid_from, legs)
       **/
      InstructionCreated: AugmentedEvent<
        ApiType,
        [IdentityId, u64, u64, SettlementType, Option<Moment>, Vec<Leg>]
      >;
      /**
       * Instruction executed successfully(did, instruction_id)
       **/
      InstructionExecuted: AugmentedEvent<ApiType, [IdentityId, u64]>;
      /**
       * Instruction failed execution (did, instruction_id)
       **/
      InstructionFailed: AugmentedEvent<ApiType, [IdentityId, u64]>;
      /**
       * An instruction has been rejected (did, instruction_id)
       **/
      InstructionRejected: AugmentedEvent<ApiType, [IdentityId, u64]>;
      /**
       * Execution of a leg failed (did, instruction_id, leg_id)
       **/
      LegFailedExecution: AugmentedEvent<ApiType, [IdentityId, u64, u64]>;
      /**
       * A receipt has been claimed (did, instruction_id, leg_id, receipt_uid, signer, receipt metadata)
       **/
      ReceiptClaimed: AugmentedEvent<
        ApiType,
        [IdentityId, u64, u64, u64, AccountId, ReceiptMetadata]
      >;
      /**
       * A receipt has been unclaimed (did, instruction_id, leg_id, receipt_uid, signer)
       **/
      ReceiptUnclaimed: AugmentedEvent<ApiType, [IdentityId, u64, u64, u64, AccountId]>;
      /**
       * A new venue has been created (did, venue_id, details, type)
       **/
      VenueCreated: AugmentedEvent<ApiType, [IdentityId, u64, VenueDetails, VenueType]>;
      /**
       * Venue filtering has been enabled or disabled for a ticker (did, ticker, filtering_enabled)
       **/
      VenueFiltering: AugmentedEvent<ApiType, [IdentityId, Ticker, bool]>;
      /**
       * Venues added to allow list (did, ticker, vec<venue_id>)
       **/
      VenuesAllowed: AugmentedEvent<ApiType, [IdentityId, Ticker, Vec<u64>]>;
      /**
       * Venues added to block list (did, ticker, vec<venue_id>)
       **/
      VenuesBlocked: AugmentedEvent<ApiType, [IdentityId, Ticker, Vec<u64>]>;
      /**
       * Venue unauthorized by ticker owner (did, Ticker, venue_id)
       **/
      VenueUnauthorized: AugmentedEvent<ApiType, [IdentityId, Ticker, u64]>;
      /**
       * An existing venue has been updated (did, venue_id, details, type)
       **/
      VenueUpdated: AugmentedEvent<ApiType, [IdentityId, u64, VenueDetails, VenueType]>;
    };
    staking: {
      /**
       * An account has bonded this amount. [did, stash, amount]
       *
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedEvent<ApiType, [IdentityId, AccountId, Balance]>;
      /**
       * When commission cap get updated.
       * (old value, new value)
       **/
      CommissionCapUpdated: AugmentedEvent<ApiType, [IdentityId, Perbill, Perbill]>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       * [era_index, validator_payout, remainder]
       **/
      EraPayout: AugmentedEvent<ApiType, [EraIndex, Balance, Balance]>;
      /**
       * Remove the nominators from the valid nominators when there CDD expired.
       * Caller, Stash accountId of nominators
       **/
      InvalidatedNominators: AugmentedEvent<ApiType, [IdentityId, AccountId, Vec<AccountId>]>;
      /**
       * Min bond threshold was updated (new value).
       **/
      MinimumBondThresholdUpdated: AugmentedEvent<ApiType, [Option<IdentityId>, Balance]>;
      /**
       * User has updated their nominations
       **/
      Nominated: AugmentedEvent<ApiType, [IdentityId, AccountId, Vec<AccountId>]>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed. [session_index]
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [SessionIndex]>;
      /**
       * An DID has issued a candidacy. See the transaction for who.
       * GC identity , Validator's identity.
       **/
      PermissionedIdentityAdded: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The given member was removed. See the transaction for who.
       * GC identity , Validator's identity.
       **/
      PermissionedIdentityRemoved: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The staker has been rewarded by this amount. [stash, amount]
       **/
      Reward: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * When scheduling of reward payments get interrupted.
       **/
      RewardPaymentSchedulingInterrupted: AugmentedEvent<
        ApiType,
        [AccountId, EraIndex, DispatchError]
      >;
      /**
       * One validator (and its nominators) has been slashed by the given amount.
       * [validator, amount]
       **/
      Slash: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Update for whom balance get slashed.
       **/
      SlashingAllowedForChanged: AugmentedEvent<ApiType, [SlashingSwitch]>;
      /**
       * A new solution for the upcoming election has been stored. [compute]
       **/
      SolutionStored: AugmentedEvent<ApiType, [ElectionCompute]>;
      /**
       * A new set of stakers was elected with the given [compute].
       **/
      StakingElection: AugmentedEvent<ApiType, [ElectionCompute]>;
      /**
       * An account has unbonded this amount. [did, stash, amount]
       **/
      Unbonded: AugmentedEvent<ApiType, [IdentityId, AccountId, Balance]>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue. [stash, amount]
       **/
      Withdrawn: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    sto: {
      /**
       * A new fundraiser has been created
       * (primary issuance agent, fundraiser)
       **/
      FundraiserCreated: AugmentedEvent<ApiType, [IdentityId, Fundraiser]>;
      /**
       * An investor invested in the fundraiser
       * (offering token, raise token, offering_token_amount, raise_token_amount, fundraiser_id)
       **/
      FundsRaised: AugmentedEvent<ApiType, [IdentityId, Ticker, Ticker, Balance, Balance, u64]>;
    };
    stoCapped: {
      /**
       * Emit when Asset get purchased by the investor
       * caller DID/investor DID, Ticker, sto_id, amount invested, amount of token purchased
       **/
      AssetPurchased: AugmentedEvent<ApiType, [IdentityId, Ticker, u32, Balance, Balance]>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [bool]>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Approved: AugmentedEvent<ApiType, [IdentityId, Hash, MemberCount, MemberCount, MemberCount]>;
      /**
       * A proposal was closed after its duration was up.
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count.
       **/
      Closed: AugmentedEvent<ApiType, [IdentityId, Hash, MemberCount, MemberCount]>;
      /**
       * A motion was executed; `DispatchResult` is `Ok(())` if returned without error.
       * Parameters: caller DID, proposal hash, result of proposal dispatch.
       **/
      Executed: AugmentedEvent<ApiType, [IdentityId, Hash, DispatchResult]>;
      /**
       * Proposal expiry time has been updated.
       * Parameters: caller DID, new expiry time (if any).
       **/
      ExpiresAfterUpdated: AugmentedEvent<ApiType, [IdentityId, MaybeBlock]>;
      /**
       * Final votes on a motion (given hash)
       * caller DID, ProposalIndex, Proposal hash, yes voters, no voter
       **/
      FinalVotes: AugmentedEvent<
        ApiType,
        [IdentityId, ProposalIndex, Hash, Vec<IdentityId>, Vec<IdentityId>]
      >;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).
       * Parameters: caller DID, proposal index, proposal hash.
       **/
      Proposed: AugmentedEvent<ApiType, [IdentityId, ProposalIndex, Hash]>;
      /**
       * A motion was rejected by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Rejected: AugmentedEvent<ApiType, [IdentityId, Hash, MemberCount, MemberCount, MemberCount]>;
      /**
       * Release coordinator has been updated.
       * Parameters: caller DID, DID of the release coordinator.
       **/
      ReleaseCoordinatorUpdated: AugmentedEvent<ApiType, [IdentityId, Option<IdentityId>]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * caller DID, Proposal index, Proposal hash, current vote, yay vote count, nay vote count, total seats.
       **/
      Voted: AugmentedEvent<
        ApiType,
        [IdentityId, ProposalIndex, Hash, bool, MemberCount, MemberCount, MemberCount]
      >;
      /**
       * A vote on a motion (given hash) has been retracted.
       * caller DID, ProposalIndex, Proposal hash, vote that was retracted
       **/
      VoteRetracted: AugmentedEvent<ApiType, [IdentityId, ProposalIndex, Hash, bool]>;
      /**
       * Voting threshold has been updated
       * Parameters: caller DID, numerator, denominator
       **/
      VoteThresholdUpdated: AugmentedEvent<ApiType, [IdentityId, u32, u32]>;
    };
    technicalCommitteeMembership: {
      /**
       * The limit of how many active members there can be concurrently was changed.
       **/
      ActiveLimitChanged: AugmentedEvent<ApiType, [IdentityId, MemberCount, MemberCount]>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, [PhantomData]>;
      /**
       * The given member was added; see the transaction for who.
       * caller DID, New member DID.
       **/
      MemberAdded: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The given member was removed; see the transaction for who.
       * caller DID, member DID that get removed.
       **/
      MemberRemoved: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The given member has been revoked at specific time-stamp.
       * caller DID, member DID that get revoked.
       **/
      MemberRevoked: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       * caller DID, List of new members.
       **/
      MembersReset: AugmentedEvent<ApiType, [IdentityId, Vec<IdentityId>]>;
      /**
       * Two members were swapped; see the transaction for who.
       * caller DID, Removed DID, New add DID.
       **/
      MembersSwapped: AugmentedEvent<ApiType, [IdentityId, IdentityId, IdentityId]>;
    };
    treasury: {
      /**
       * Disbursement to a target Identity.
       * (target identity, amount)
       **/
      TreasuryDisbursement: AugmentedEvent<ApiType, [IdentityId, IdentityId, Balance]>;
      /**
       * Treasury reimbursement.
       **/
      TreasuryReimbursement: AugmentedEvent<ApiType, [IdentityId, Balance]>;
    };
    upgradeCommittee: {
      /**
       * A motion was approved by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Approved: AugmentedEvent<ApiType, [IdentityId, Hash, MemberCount, MemberCount, MemberCount]>;
      /**
       * A proposal was closed after its duration was up.
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count.
       **/
      Closed: AugmentedEvent<ApiType, [IdentityId, Hash, MemberCount, MemberCount]>;
      /**
       * A motion was executed; `DispatchResult` is `Ok(())` if returned without error.
       * Parameters: caller DID, proposal hash, result of proposal dispatch.
       **/
      Executed: AugmentedEvent<ApiType, [IdentityId, Hash, DispatchResult]>;
      /**
       * Proposal expiry time has been updated.
       * Parameters: caller DID, new expiry time (if any).
       **/
      ExpiresAfterUpdated: AugmentedEvent<ApiType, [IdentityId, MaybeBlock]>;
      /**
       * Final votes on a motion (given hash)
       * caller DID, ProposalIndex, Proposal hash, yes voters, no voter
       **/
      FinalVotes: AugmentedEvent<
        ApiType,
        [IdentityId, ProposalIndex, Hash, Vec<IdentityId>, Vec<IdentityId>]
      >;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`).
       * Parameters: caller DID, proposal index, proposal hash.
       **/
      Proposed: AugmentedEvent<ApiType, [IdentityId, ProposalIndex, Hash]>;
      /**
       * A motion was rejected by the required threshold with the following
       * tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * Parameters: caller DID, proposal hash, yay vote count, nay vote count, total seats.
       **/
      Rejected: AugmentedEvent<ApiType, [IdentityId, Hash, MemberCount, MemberCount, MemberCount]>;
      /**
       * Release coordinator has been updated.
       * Parameters: caller DID, DID of the release coordinator.
       **/
      ReleaseCoordinatorUpdated: AugmentedEvent<ApiType, [IdentityId, Option<IdentityId>]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes, no votes and total seats given respectively as `MemberCount`).
       * caller DID, Proposal index, Proposal hash, current vote, yay vote count, nay vote count, total seats.
       **/
      Voted: AugmentedEvent<
        ApiType,
        [IdentityId, ProposalIndex, Hash, bool, MemberCount, MemberCount, MemberCount]
      >;
      /**
       * A vote on a motion (given hash) has been retracted.
       * caller DID, ProposalIndex, Proposal hash, vote that was retracted
       **/
      VoteRetracted: AugmentedEvent<ApiType, [IdentityId, ProposalIndex, Hash, bool]>;
      /**
       * Voting threshold has been updated
       * Parameters: caller DID, numerator, denominator
       **/
      VoteThresholdUpdated: AugmentedEvent<ApiType, [IdentityId, u32, u32]>;
    };
    upgradeCommitteeMembership: {
      /**
       * The limit of how many active members there can be concurrently was changed.
       **/
      ActiveLimitChanged: AugmentedEvent<ApiType, [IdentityId, MemberCount, MemberCount]>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, [PhantomData]>;
      /**
       * The given member was added; see the transaction for who.
       * caller DID, New member DID.
       **/
      MemberAdded: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The given member was removed; see the transaction for who.
       * caller DID, member DID that get removed.
       **/
      MemberRemoved: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The given member has been revoked at specific time-stamp.
       * caller DID, member DID that get revoked.
       **/
      MemberRevoked: AugmentedEvent<ApiType, [IdentityId, IdentityId]>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       * caller DID, List of new members.
       **/
      MembersReset: AugmentedEvent<ApiType, [IdentityId, Vec<IdentityId>]>;
      /**
       * Two members were swapped; see the transaction for who.
       * caller DID, Removed DID, New add DID.
       **/
      MembersSwapped: AugmentedEvent<ApiType, [IdentityId, IdentityId, IdentityId]>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully.
       * Index of first failing dispatch given, as well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, DispatchError]>;
      /**
       * Batch of dispatches did not complete fully.
       * Includes any failed dispatches with their indices and their associated error.
       **/
      BatchOptimisticFailed: AugmentedEvent<ApiType, [Vec<ITuple<[u32, DispatchError]>>]>;
    };
    voting: {
      /**
       * An existing ballot is cancelled (caller DID, Ticker, BallotName)
       **/
      BallotCancelled: AugmentedEvent<ApiType, [IdentityId, Ticker, Bytes]>;
      /**
       * A new ballot is created (caller DID, Ticker, BallotName, BallotDetails)
       **/
      BallotCreated: AugmentedEvent<ApiType, [IdentityId, Ticker, Bytes, Ballot]>;
      /**
       * A vote is cast (caller DID, Ticker, BallotName, Vote)
       **/
      VoteCast: AugmentedEvent<ApiType, [IdentityId, Ticker, Bytes, Vec<Balance>]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {}
}

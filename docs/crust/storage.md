---
title: Storage
---

The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[benefits](#benefits)**

- **[claims](#claims)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[indices](#indices)**

- **[locks](#locks)**

- **[market](#market)**

- **[multisig](#multisig)**

- **[offences](#offences)**

- **[randomnessCollectiveFlip](#randomnesscollectiveflip)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[substrate](#substrate)**

- **[sudo](#sudo)**

- **[swork](#swork)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**


___


## authorship
 
### author(): `Option<AccountId>`
- **interface**: `api.query.authorship.author`
- **summary**:   Author of current block. 
 
### didSetUncles(): `bool`
- **interface**: `api.query.authorship.didSetUncles`
- **summary**:   Whether uncles were already set in this block. 
 
### uncles(): `Vec<UncleEntryItem>`
- **interface**: `api.query.authorship.uncles`
- **summary**:   Uncles 

___


## babe
 
### authorities(): `Vec<(AuthorityId,BabeAuthorityWeight)>`
- **interface**: `api.query.babe.authorities`
- **summary**:   Current epoch authorities. 
 
### authorVrfRandomness(): `MaybeRandomness`
- **interface**: `api.query.babe.authorVrfRandomness`
- **summary**:   Temporary value (cleared at block finalization) that includes the VRF output generated at this block. This field should always be populated during block processing unless secondary plain slots are enabled (which don't contain a VRF output). 
 
### currentSlot(): `Slot`
- **interface**: `api.query.babe.currentSlot`
- **summary**:   Current slot number. 
 
### epochIndex(): `u64`
- **interface**: `api.query.babe.epochIndex`
- **summary**:   Current epoch index. 
 
### genesisSlot(): `Slot`
- **interface**: `api.query.babe.genesisSlot`
- **summary**:   The slot at which the first epoch actually started. This is 0 until the first block of the chain. 
 
### initialized(): `Option<MaybeRandomness>`
- **interface**: `api.query.babe.initialized`
- **summary**:   Temporary value (cleared at block finalization) which is `Some` if per-block initialization has already been called for current block. 
 
### lateness(): `BlockNumber`
- **interface**: `api.query.babe.lateness`
- **summary**:   How late the current block is compared to its parent. 

  This entry is populated as part of block execution and is cleaned up on block finalization. Querying this storage entry outside of block execution context should always yield zero. 
 
### nextAuthorities(): `Vec<(AuthorityId,BabeAuthorityWeight)>`
- **interface**: `api.query.babe.nextAuthorities`
- **summary**:   Next epoch authorities. 
 
### nextEpochConfig(): `Option<NextConfigDescriptor>`
- **interface**: `api.query.babe.nextEpochConfig`
- **summary**:   Next epoch configuration, if changed. 
 
### nextRandomness(): `Randomness`
- **interface**: `api.query.babe.nextRandomness`
- **summary**:   Next epoch randomness. 
 
### randomness(): `Randomness`
- **interface**: `api.query.babe.randomness`
- **summary**:   The epoch randomness for the *current* epoch. 

  #### Security 

  This MUST NOT be used for gambling, as it can be influenced by a malicious validator in the short term. It MAY be used in many cryptographic protocols, however, so long as one remembers that this (like everything else on-chain) it is public. For example, it can be used where a number is needed that cannot have been chosen by an adversary, for purposes such as public-coin zero-knowledge proofs. 
 
### segmentIndex(): `u32`
- **interface**: `api.query.babe.segmentIndex`
- **summary**:   Randomness under construction. 

  We make a tradeoff between storage accesses and list length. We store the under-construction randomness in segments of up to `UNDER_CONSTRUCTION_SEGMENT_LENGTH`. 

  Once a segment reaches this length, we begin the next one. We reset all segments and return to `0` at the beginning of every epoch. 
 
### underConstruction(`u32`): `Vec<Randomness>`
- **interface**: `api.query.babe.underConstruction`
- **summary**:   TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay. 

___


## balances
 
### account(`AccountId`): `AccountData`
- **interface**: `api.query.balances.account`
- **summary**:   The balance of an account. 

  NOTE: This is only used in the case that this pallet is used to store balances. 
 
### locks(`AccountId`): `Vec<BalanceLock>`
- **interface**: `api.query.balances.locks`
- **summary**:   Any liquidity locks on some account balances. NOTE: Should only be accessed when setting, changing and freeing a lock. 
 
### storageVersion(): `Releases`
- **interface**: `api.query.balances.storageVersion`
- **summary**:   Storage version of the pallet. 

  This is set to v2.0.0 for new networks. 
 
### totalIssuance(): `Balance`
- **interface**: `api.query.balances.totalIssuance`
- **summary**:   The total units issued in the system. 

___


## benefits
 
### currentBenefits(): `EraBenefits`
- **interface**: `api.query.benefits.currentBenefits`
- **summary**:   The global benefits information 
 
### marketBenefits(`AccountId`): `MarketBenefit`
- **interface**: `api.query.benefits.marketBenefits`
- **summary**:   The market benefit 
 
### sworkBenefits(`AccountId`): `SworkBenefit`
- **interface**: `api.query.benefits.sworkBenefits`
- **summary**:   The sworker benefit 

___


## claims
 
### claimed(`EthereumTxHash`): `bool`
- **interface**: `api.query.claims.claimed`
- **summary**:   Mark if the claim transaction has already been claimed 
 
### claimLimit(): `BalanceOf`
- **interface**: `api.query.claims.claimLimit`
- **summary**:   Claim limit determinate how many CRUs can be claimed 
 
### claims(`EthereumTxHash`): `Option<(EthereumAddress,BalanceOf)>`
- **interface**: `api.query.claims.claims`
- **summary**:   The claim transaction mapping relationship in ethereum 
 
### miner(): `Option<AccountId>`
- **interface**: `api.query.claims.miner`
- **summary**:   [who] can mint the claims 
 
### superior(): `Option<AccountId>`
- **interface**: `api.query.claims.superior`
- **summary**:   [who] can set the claim limit 

___


## grandpa
 
### currentSetId(): `SetId`
- **interface**: `api.query.grandpa.currentSetId`
- **summary**:   The number of changes (both in terms of keys and underlying economic responsibilities) in the "set" of Grandpa validators from genesis. 
 
### nextForced(): `Option<BlockNumber>`
- **interface**: `api.query.grandpa.nextForced`
- **summary**:   next block number where we can force a change. 
 
### pendingChange(): `Option<StoredPendingChange>`
- **interface**: `api.query.grandpa.pendingChange`
- **summary**:   Pending change: (signaled at, scheduled change). 
 
### setIdSession(`SetId`): `Option<SessionIndex>`
- **interface**: `api.query.grandpa.setIdSession`
- **summary**:   A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible. 

  TWOX-NOTE: `SetId` is not under user control. 
 
### stalled(): `Option<(BlockNumber,BlockNumber)>`
- **interface**: `api.query.grandpa.stalled`
- **summary**:   `true` if we are currently stalled. 
 
### state(): `StoredState`
- **interface**: `api.query.grandpa.state`
- **summary**:   State of the current authority set. 

___


## identity
 
### identityOf(`AccountId`): `Option<Registration>`
- **interface**: `api.query.identity.identityOf`
- **summary**:   Information that is pertinent to identify the entity behind an account. 

  TWOX-NOTE: OK ― `AccountId` is a secure hash. 
 
### registrars(): `Vec<Option<RegistrarInfo>>`
- **interface**: `api.query.identity.registrars`
- **summary**:   The set of registrars. Not expected to get very big as can only be added through a special origin (likely a council motion). 

  The index into this can be cast to `RegistrarIndex` to get a valid value. 
 
### subsOf(`AccountId`): `(BalanceOf,Vec<AccountId>)`
- **interface**: `api.query.identity.subsOf`
- **summary**:   Alternative "sub" identities of this account. 

  The first item is the deposit, the second is a vector of the accounts. 

  TWOX-NOTE: OK ― `AccountId` is a secure hash. 
 
### superOf(`AccountId`): `Option<(AccountId,Data)>`
- **interface**: `api.query.identity.superOf`
- **summary**:   The super-identity of an alternative "sub" identity together with its name, within that context. If the account is not some other account's sub-identity, then just `None`. 

___


## imOnline
 
### authoredBlocks(`SessionIndex, ValidatorId`): `u32`
- **interface**: `api.query.imOnline.authoredBlocks`
- **summary**:   For each session index, we keep a mapping of `ValidatorId<T>` to the number of blocks authored by the given authority. 
 
### heartbeatAfter(): `BlockNumber`
- **interface**: `api.query.imOnline.heartbeatAfter`
- **summary**:   The block number after which it's ok to send heartbeats in current session. 

  At the beginning of each session we set this to a value that should fall roughly in the middle of the session duration. The idea is to first wait for the validators to produce a block in the current session, so that the heartbeat later on will not be necessary. 
 
### keys(): `Vec<AuthorityId>`
- **interface**: `api.query.imOnline.keys`
- **summary**:   The current set of keys that may issue a heartbeat. 
 
### receivedHeartbeats(`SessionIndex, AuthIndex`): `Option<Bytes>`
- **interface**: `api.query.imOnline.receivedHeartbeats`
- **summary**:   For each session index, we keep a mapping of `AuthIndex` to `offchain::OpaqueNetworkState`. 

___


## indices
 
### accounts(`AccountIndex`): `Option<(AccountId,BalanceOf,bool)>`
- **interface**: `api.query.indices.accounts`
- **summary**:   The lookup from index to account. 

___


## locks
 
### locks(`AccountId`): `Option<Lock>`
- **interface**: `api.query.locks.locks`
 
### unlockFrom(): `Option<BlockNumber>`
- **interface**: `api.query.locks.unlockFrom`

___


## market
 
### enableMarket(): `bool`
- **interface**: `api.query.market.enableMarket`
- **summary**:   The global market switch to enable place storage order service 
 
### fileBaseFee(): `BalanceOf`
- **interface**: `api.query.market.fileBaseFee`
- **summary**:   The file base fee for each storage order. 
 
### fileByteFee(): `BalanceOf`
- **interface**: `api.query.market.fileByteFee`
- **summary**:   The file price per MB. It's dynamically adjusted and would change according to FilesSize, TotalCapacity and StorageReferenceRatio. 
 
### fileKeysCount(): `u32`
- **interface**: `api.query.market.fileKeysCount`
- **summary**:   Files count, determinate the FileKeysCountFee 
 
### fileKeysCountFee(): `BalanceOf`
- **interface**: `api.query.market.fileKeysCountFee`
- **summary**:   The file price by keys It's dynamically adjusted and would change according to the total keys in files 
 
### files(`MerkleRoot`): `Option<FileInfo>`
- **interface**: `api.query.market.files`
- **summary**:   File information iterated by order id 
 
### hasNewOrder(): `bool`
- **interface**: `api.query.market.hasNewOrder`
- **summary**:   Has new order in the past blocks, pruning handling of pending files 
 
### ordersCount(): `u32`
- **interface**: `api.query.market.ordersCount`
- **summary**:   New orders count in the past one period(one hour), determinate the FileBaseFee 
 
### pendingFiles(): `BTreeSet<MerkleRoot>`
- **interface**: `api.query.market.pendingFiles`
- **summary**:   Wait for updating storage power for all replicas 
 
### spowerReadyPeriod(): `BlockNumber`
- **interface**: `api.query.market.spowerReadyPeriod`
- **summary**:   The sPower will become valid after this period, default is 3 months 

___


## multisig
 
### calls(`[u8;32]`): `Option<(OpaqueCall,AccountId,BalanceOf)>`
- **interface**: `api.query.multisig.calls`
 
### multisigs(`AccountId, [u8;32]`): `Option<Multisig>`
- **interface**: `api.query.multisig.multisigs`
- **summary**:   The set of open multisig operations. 

___


## offences
 
### concurrentReportsIndex(`Kind, OpaqueTimeSlot`): `Vec<ReportIdOf>`
- **interface**: `api.query.offences.concurrentReportsIndex`
- **summary**:   A vector of reports of the same kind that happened at the same time slot. 
 
### deferredOffences(): `Vec<DeferredOffenceOf>`
- **interface**: `api.query.offences.deferredOffences`
- **summary**:   Deferred reports that have been rejected by the offence handler and need to be submitted at a later time. 
 
### reports(`ReportIdOf`): `Option<OffenceDetails>`
- **interface**: `api.query.offences.reports`
- **summary**:   The primary structure that holds all offence records keyed by report identifiers. 
 
### reportsByKindIndex(`Kind`): `Bytes`
- **interface**: `api.query.offences.reportsByKindIndex`
- **summary**:   Enumerates all reports of a kind along with the time they happened. 

  All reports are sorted by the time of offence. 

  Note that the actual type of this mapping is `Vec<u8>`, this is because values of different types are not supported at the moment so we are doing the manual serialization. 

___


## randomnessCollectiveFlip
 
### randomMaterial(): `Vec<Hash>`
- **interface**: `api.query.randomnessCollectiveFlip.randomMaterial`
- **summary**:   Series of block headers from the last 81 blocks that acts as random seed material. This is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of the oldest hash. 

___


## scheduler
 
### agenda(`BlockNumber`): `Vec<Option<Scheduled>>`
- **interface**: `api.query.scheduler.agenda`
- **summary**:   Items to be executed, indexed by the block number that they should be executed on. 
 
### lookup(`Bytes`): `Option<TaskAddress>`
- **interface**: `api.query.scheduler.lookup`
- **summary**:   Lookup from identity to the block number and index of the task. 
 
### storageVersion(): `Releases`
- **interface**: `api.query.scheduler.storageVersion`
- **summary**:   Storage version of the pallet. 

  New networks start with last version. 

___


## session
 
### currentIndex(): `SessionIndex`
- **interface**: `api.query.session.currentIndex`
- **summary**:   Current index of the session. 
 
### disabledValidators(): `Vec<u32>`
- **interface**: `api.query.session.disabledValidators`
- **summary**:   Indices of disabled validators. 

  The set is cleared when `on_session_ending` returns a new set of identities. 
 
### keyOwner(`(KeyTypeId,Bytes)`): `Option<ValidatorId>`
- **interface**: `api.query.session.keyOwner`
- **summary**:   The owner of a key. The key is the `KeyTypeId` + the encoded key. 
 
### nextKeys(`ValidatorId`): `Option<Keys>`
- **interface**: `api.query.session.nextKeys`
- **summary**:   The next session keys for a validator. 
 
### queuedChanged(): `bool`
- **interface**: `api.query.session.queuedChanged`
- **summary**:   True if the underlying economic identities or weighting behind the validators has changed in the queued validator set. 
 
### queuedKeys(): `Vec<(ValidatorId,Keys)>`
- **interface**: `api.query.session.queuedKeys`
- **summary**:   The queued keys for the next session. When the next session begins, these keys will be used to determine the validator's session keys. 
 
### validators(): `Vec<ValidatorId>`
- **interface**: `api.query.session.validators`
- **summary**:   The current set of validators. 

___


## staking
 
### activeEra(): `Option<ActiveEraInfo>`
- **interface**: `api.query.staking.activeEra`
- **summary**:   The active era information, it holds index and start. 

  The active era is the era currently rewarded. Validator set of this era must be equal to `SessionInterface::validators`. 
 
### bonded(`AccountId`): `Option<AccountId>`
- **interface**: `api.query.staking.bonded`
- **summary**:   Map from all locked "stash" accounts to the controller account. 
 
### bondedEras(): `Vec<(EraIndex,SessionIndex)>`
- **interface**: `api.query.staking.bondedEras`
- **summary**:   A mapping from still-bonded eras to the first session index of that era. 
 
### canceledSlashPayout(): `BalanceOf`
- **interface**: `api.query.staking.canceledSlashPayout`
- **summary**:   The amount of currency given to reporters of a slash event which was canceled by extraordinary circumstances (e.g. governance). 
 
### currentElected(): `Vec<AccountId>`
- **interface**: `api.query.staking.currentElected`
- **summary**:   The currently elected validator set keyed by stash account ID. 
 
### currentEra(): `Option<EraIndex>`
- **interface**: `api.query.staking.currentEra`
- **summary**:   The current era index. 
 
### earliestUnappliedSlash(): `Option<EraIndex>`
- **interface**: `api.query.staking.earliestUnappliedSlash`
- **summary**:   The earliest era for which we have a pending, unapplied slash. 
 
### erasAuthoringPayout(`EraIndex, AccountId`): `Option<BalanceOf>`
- **interface**: `api.query.staking.erasAuthoringPayout`
- **summary**:   Authoring payout of validator at era. 
 
### erasMarketPayout(`EraIndex`): `Option<BalanceOf>`
- **interface**: `api.query.staking.erasMarketPayout`
- **summary**:   Market staking payout of validator at era. 
 
### erasRewardPoints(`EraIndex`): `EraRewardPoints`
- **interface**: `api.query.staking.erasRewardPoints`
- **summary**:   Rewards for the last `HISTORY_DEPTH` eras. If reward hasn't been set or has been removed then 0 reward is returned. 
 
### erasStakers(`EraIndex, AccountId`): `Exposure`
- **interface**: `api.query.staking.erasStakers`
- **summary**:   Exposure of validator at era. 

  This is keyed first by the era index to allow bulk deletion and then the stash account. 

  Is it removed after `HISTORY_DEPTH` eras. If stakers hasn't been set or has been removed then empty exposure is returned. 
 
### erasStakersClipped(`EraIndex, AccountId`): `Exposure`
- **interface**: `api.query.staking.erasStakersClipped`
- **summary**:   Clipped Exposure of validator at era. 

  This is similar to [`ErasStakers`] but number of guarantors exposed is reduced to the `T::MaxGuarantorRewardedPerValidator` biggest stakers. (Note: the field `total` and `own` of the exposure remains unchanged). This is used to limit the i/o cost for the guarantor payout. 

  This is keyed fist by the era index to allow bulk deletion and then the stash account. 

  Is it removed after `HISTORY_DEPTH` eras. If stakers hasn't been set or has been removed then empty exposure is returned. 
 
### erasStakingPayout(`EraIndex`): `Option<BalanceOf>`
- **interface**: `api.query.staking.erasStakingPayout`
- **summary**:   Total staking payout at era. 
 
### erasStartSessionIndex(`EraIndex`): `Option<SessionIndex>`
- **interface**: `api.query.staking.erasStartSessionIndex`
- **summary**:   The session index at which the era start for the last `HISTORY_DEPTH` eras. 
 
### erasTotalStakes(`EraIndex`): `BalanceOf`
- **interface**: `api.query.staking.erasTotalStakes`
- **summary**:   The amount of balance actively at stake for each validator slot, currently. 

  This is used to derive rewards and punishments. 
 
### erasValidatorPrefs(`EraIndex, AccountId`): `ValidatorPrefs`
- **interface**: `api.query.staking.erasValidatorPrefs`
- **summary**:   Similar to `ErasStakers`, this holds the preferences of validators. 

  This is keyed first by the era index to allow bulk deletion and then the stash account. 

  Is it removed after `HISTORY_DEPTH` eras. 
 
### forceEra(): `Forcing`
- **interface**: `api.query.staking.forceEra`
- **summary**:   True if the next session change will be a new era regardless of index. 
 
### guarantors(`AccountId`): `Option<Guarantee>`
- **interface**: `api.query.staking.guarantors`
- **summary**:   The map from guarantor stash key to the set of stash keys of all validators to guarantee. 
 
### guarantorSlashInEra(`EraIndex, AccountId`): `Option<BalanceOf>`
- **interface**: `api.query.staking.guarantorSlashInEra`
- **summary**:   All slashing events on guarantors, mapped by era to the highest slash value of the era. 
 
### historyDepth(): `u32`
- **interface**: `api.query.staking.historyDepth`
- **summary**:   Number of eras to keep in history. 

  Information is kept for eras in `[current_era - history_depth; current_era]`. 
 
### invulnerables(): `Vec<AccountId>`
- **interface**: `api.query.staking.invulnerables`
- **summary**:   Any validators that may never be slashed or forcibly kicked. It's a Vec since they're easy to initialize and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets. 
 
### ledger(`AccountId`): `Option<StakingLedger>`
- **interface**: `api.query.staking.ledger`
- **summary**:   Map from all (unlocked) "controller" accounts to the info regarding the staking. 
 
### minimumValidatorCount(): `u32`
- **interface**: `api.query.staking.minimumValidatorCount`
- **summary**:   Minimum number of staking participants before emergency conditions are imposed. 
 
### payee(`AccountId`): `RewardDestination`
- **interface**: `api.query.staking.payee`
- **summary**:   Where the reward payment should be made. Keyed by stash. 
 
### slashingSpans(`AccountId`): `Option<SlashingSpans>`
- **interface**: `api.query.staking.slashingSpans`
- **summary**:   Slashing spans for stash accounts. 
 
### slashRewardFraction(): `Perbill`
- **interface**: `api.query.staking.slashRewardFraction`
- **summary**:   The percentage of the slash that is distributed to reporters. 

  The rest of the slashed value is handled by the `Slash`. 
 
### spanSlash(`(AccountId,SpanIndex)`): `SpanRecord`
- **interface**: `api.query.staking.spanSlash`
- **summary**:   Records information about the maximum slash of a stash within a slashing span, as well as how much reward has been paid out. 
 
### stakeLimit(`AccountId`): `Option<BalanceOf>`
- **interface**: `api.query.staking.stakeLimit`
- **summary**:   The stake limit, determined all the staking operations This is keyed by the stash account. 
 
### startRewardEra(): `EraIndex`
- **interface**: `api.query.staking.startRewardEra`
- **summary**:   Start era for reward curve 
 
### unappliedSlashes(`EraIndex`): `Vec<UnappliedSlash>`
- **interface**: `api.query.staking.unappliedSlashes`
- **summary**:   All unapplied slashes that are queued for later. 
 
### validatorCount(): `u32`
- **interface**: `api.query.staking.validatorCount`
- **summary**:   The ideal number of staking participants. 
 
### validators(`AccountId`): `ValidatorPrefs`
- **interface**: `api.query.staking.validators`
- **summary**:   The map from (wannabe) validator stash key to the preferences of that validator. 
 
### validatorSlashInEra(`EraIndex, AccountId`): `Option<(Perbill,BalanceOf)>`
- **interface**: `api.query.staking.validatorSlashInEra`
- **summary**:   All slashing events on validators, mapped by era to the highest slash proportion and slash value of the era. 

___


## substrate

_These are well-known keys that are always available to the runtime implementation of any Substrate-based network._
 
### changesTrieConfig(): `u32`
- **interface**: `api.query.substrate.changesTrieConfig`
- **summary**:   Changes trie configuration is stored under this key. 
 
### childStorageKeyPrefix(): `u32`
- **interface**: `api.query.substrate.childStorageKeyPrefix`
- **summary**:   Prefix of child storage keys. 
 
### code(): `Bytes`
- **interface**: `api.query.substrate.code`
- **summary**:   Wasm code of the runtime. 
 
### extrinsicIndex(): `u32`
- **interface**: `api.query.substrate.extrinsicIndex`
- **summary**:   Current extrinsic index (u32) is stored under this key. 
 
### heapPages(): `u64`
- **interface**: `api.query.substrate.heapPages`
- **summary**:   Number of wasm linear memory pages required for execution of the runtime. 

___


## sudo
 
### key(): `AccountId`
- **interface**: `api.query.sudo.key`
- **summary**:   The `AccountId` of the sudo key. 

___


## swork
 
### addedFilesCount(): `u32`
- **interface**: `api.query.swork.addedFilesCount`
- **summary**:   Added files count in the past one period(one hour) 
 
### codes(`SworkerCode`): `Option<BlockNumber>`
- **interface**: `api.query.swork.codes`
- **summary**:   The sWorker enclave codes, this should be managed by sudo/democracy 
 
### currentReportSlot(): `ReportSlot`
- **interface**: `api.query.swork.currentReportSlot`
- **summary**:   The current report slot block number, this value should be a multiple of report slot block. 
 
### enablePunishment(): `bool`
- **interface**: `api.query.swork.enablePunishment`
- **summary**:   Enable punishment, the default behavior will have punishment. 
 
### free(): `u128`
- **interface**: `api.query.swork.free`
- **summary**:   The free workload, used for calculating stake limit in the end of each report slot. The default value is 0. 
 
### groups(`AccountId`): `Group`
- **interface**: `api.query.swork.groups`
- **summary**:   The group information 
 
### historySlotDepth(): `ReportSlot`
- **interface**: `api.query.swork.historySlotDepth`
- **summary**:   The depth of the history of the ReportedInSlot 
 
### identities(`AccountId`): `Option<Identity>`
- **interface**: `api.query.swork.identities`
- **summary**:   The identity information for each sworker member, which contains the anchor, punishment deadline and group information. 
 
### identityPreviousKey(): `Option<Bytes>`
- **interface**: `api.query.swork.identityPreviousKey`
- **summary**:   The previous key spower to iterate identities 
 
### pubKeys(`SworkerPubKey`): `PKInfo`
- **interface**: `api.query.swork.pubKeys`
- **summary**:   The pub key information, mapping from sWorker public key to an pubkey information, including the sworker enclave code and option anchor. 
 
### reportedFilesSize(): `u128`
- **interface**: `api.query.swork.reportedFilesSize`
- **summary**:   The total reported files workload, used for calculating total_capacity for market module The default value is 0. 
 
### reportedInSlot(`SworkerAnchor, ReportSlot`): `bool`
- **interface**: `api.query.swork.reportedInSlot`
- **summary**:   Recording whether the validator reported works of each report slot. We keep the last "HistorySlotDepth" length data cause B-tree won't build index on key2(ReportSlot). The value represent if reported in this slot 
 
### spower(): `u128`
- **interface**: `api.query.swork.spower`
- **summary**:   The spower workload, used for calculating stake limit in the end of each report slot. The default value is 0. 
 
### workload(): `Option<(BTreeMap<AccountId,u128>,u128,u128,u128)>`
- **interface**: `api.query.swork.workload`
- **summary**:   The workload information 
 
### workReports(`SworkerAnchor`): `Option<WorkReport>`
- **interface**: `api.query.swork.workReports`
- **summary**:   Node's work report, mapping from sWorker anchor to an optional work report. WorkReport only been replaced, it won't get removed cause we need to check the status transition from off-chain sWorker 

___


## system
 
### account(`AccountId`): `AccountInfo`
- **interface**: `api.query.system.account`
- **summary**:   The full account information for a particular account ID. 
 
### allExtrinsicsLen(): `Option<u32>`
- **interface**: `api.query.system.allExtrinsicsLen`
- **summary**:   Total length (in bytes) for all extrinsics put together, for the current block. 
 
### blockHash(`BlockNumber`): `Hash`
- **interface**: `api.query.system.blockHash`
- **summary**:   Map of block numbers to block hashes. 
 
### blockWeight(): `ConsumedWeight`
- **interface**: `api.query.system.blockWeight`
- **summary**:   The current weight for the block. 
 
### digest(): `DigestOf`
- **interface**: `api.query.system.digest`
- **summary**:   Digest of the current block, also part of the block header. 
 
### eventCount(): `EventIndex`
- **interface**: `api.query.system.eventCount`
- **summary**:   The number of events in the `Events<T>` list. 
 
### events(): `Vec<EventRecord>`
- **interface**: `api.query.system.events`
- **summary**:   Events deposited for the current block. 
 
### eventTopics(`Hash`): `Vec<(BlockNumber,EventIndex)>`
- **interface**: `api.query.system.eventTopics`
- **summary**:   Mapping between a topic (represented by T::Hash) and a vector of indexes of events in the `<Events<T>>` list. 

  All topic vectors have deterministic storage locations depending on the topic. This allows light-clients to leverage the changes trie storage tracking mechanism and in case of changes fetch the list of events of interest. 

  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just the `EventIndex` then in case if the topic has the same contents on the next block no notification will be triggered thus the event might be lost. 
 
### executionPhase(): `Option<Phase>`
- **interface**: `api.query.system.executionPhase`
- **summary**:   The execution phase of the block. 
 
### extrinsicCount(): `Option<u32>`
- **interface**: `api.query.system.extrinsicCount`
- **summary**:   Total extrinsics count for the current block. 
 
### extrinsicData(`u32`): `Bytes`
- **interface**: `api.query.system.extrinsicData`
- **summary**:   Extrinsics data for the current block (maps an extrinsic's index to its data). 
 
### lastRuntimeUpgrade(): `Option<LastRuntimeUpgradeInfo>`
- **interface**: `api.query.system.lastRuntimeUpgrade`
- **summary**:   Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened. 
 
### number(): `BlockNumber`
- **interface**: `api.query.system.number`
- **summary**:   The current block number being processed. Set by `execute_block`. 
 
### parentHash(): `Hash`
- **interface**: `api.query.system.parentHash`
- **summary**:   Hash of the previous block. 
 
### upgradedToDualRefCount(): `bool`
- **interface**: `api.query.system.upgradedToDualRefCount`
- **summary**:   True if we have upgraded so that AccountInfo contains two types of `RefCount`. False (default) if not. 
 
### upgradedToU32RefCount(): `bool`
- **interface**: `api.query.system.upgradedToU32RefCount`
- **summary**:   True if we have upgraded so that `type RefCount` is `u32`. False (default) if not. 

___


## timestamp
 
### didUpdate(): `bool`
- **interface**: `api.query.timestamp.didUpdate`
- **summary**:   Did the timestamp get updated in this block? 
 
### now(): `Moment`
- **interface**: `api.query.timestamp.now`
- **summary**:   Current time for the current block. 

___


## transactionPayment
 
### nextFeeMultiplier(): `Multiplier`
- **interface**: `api.query.transactionPayment.nextFeeMultiplier`
 
### storageVersion(): `Releases`
- **interface**: `api.query.transactionPayment.storageVersion`

___


## treasury
 
### approvals(): `Vec<ProposalIndex>`
- **interface**: `api.query.treasury.approvals`
- **summary**:   Proposal indices that have been approved but not yet awarded. 
 
### proposalCount(): `ProposalIndex`
- **interface**: `api.query.treasury.proposalCount`
- **summary**:   Number of proposals that have been made. 
 
### proposals(`ProposalIndex`): `Option<TreasuryProposal>`
- **interface**: `api.query.treasury.proposals`
- **summary**:   Proposals that have been made. 

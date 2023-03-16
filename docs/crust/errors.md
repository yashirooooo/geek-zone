---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

- **[balances](#balances)**

- **[benefits](#benefits)**

- **[claims](#claims)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[locks](#locks)**

- **[market](#market)**

- **[multisig](#multisig)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[swork](#swork)**

- **[system](#system)**

- **[treasury](#treasury)**


___


## authorship
 
### GenesisUncle
- **interface**: `api.errors.authorship.GenesisUncle.is`
- **summary**:   The uncle is genesis. 
 
### InvalidUncleParent
- **interface**: `api.errors.authorship.InvalidUncleParent.is`
- **summary**:   The uncle parent not in the chain. 
 
### OldUncle
- **interface**: `api.errors.authorship.OldUncle.is`
- **summary**:   The uncle isn't recent enough to be included. 
 
### TooHighUncle
- **interface**: `api.errors.authorship.TooHighUncle.is`
- **summary**:   The uncle is too high in chain. 
 
### TooManyUncles
- **interface**: `api.errors.authorship.TooManyUncles.is`
- **summary**:   Too many uncles. 
 
### UncleAlreadyIncluded
- **interface**: `api.errors.authorship.UncleAlreadyIncluded.is`
- **summary**:   The uncle is already included. 
 
### UnclesAlreadySet
- **interface**: `api.errors.authorship.UnclesAlreadySet.is`
- **summary**:   Uncles already set in the block. 

___


## balances
 
### DeadAccount
- **interface**: `api.errors.balances.DeadAccount.is`
- **summary**:   Beneficiary account must pre-exist 
 
### ExistentialDeposit
- **interface**: `api.errors.balances.ExistentialDeposit.is`
- **summary**:   Value too low to create account due to existential deposit 
 
### ExistingVestingSchedule
- **interface**: `api.errors.balances.ExistingVestingSchedule.is`
- **summary**:   A vesting schedule already exists for this account 
 
### InsufficientBalance
- **interface**: `api.errors.balances.InsufficientBalance.is`
- **summary**:   Balance too low to send value 
 
### KeepAlive
- **interface**: `api.errors.balances.KeepAlive.is`
- **summary**:   Transfer/payment would kill account 
 
### LiquidityRestrictions
- **interface**: `api.errors.balances.LiquidityRestrictions.is`
- **summary**:   Account liquidity restrictions prevent withdrawal 
 
### Overflow
- **interface**: `api.errors.balances.Overflow.is`
- **summary**:   Got an overflow after adding 
 
### VestingBalance
- **interface**: `api.errors.balances.VestingBalance.is`
- **summary**:   Vesting balance too high to send value 

___


## benefits
 
### InsufficientValue
- **interface**: `api.errors.benefits.InsufficientValue.is`
- **summary**:   Can not bond with value less than minimum balance. 
 
### InsuffientBalance
- **interface**: `api.errors.benefits.InsuffientBalance.is`
- **summary**:   Don't have enough money 
 
### InvalidTarget
- **interface**: `api.errors.benefits.InvalidTarget.is`
- **summary**:   Don't have benefit records 
 
### NoMoreChunks
- **interface**: `api.errors.benefits.NoMoreChunks.is`
- **summary**:   Can not schedule more unlock chunks. 
 
### NoUnlockChunk
- **interface**: `api.errors.benefits.NoUnlockChunk.is`
- **summary**:   Can not rebond without unlocking chunks. 

___


## claims
 
### AlreadyBeClaimed
- **interface**: `api.errors.claims.AlreadyBeClaimed.is`
- **summary**:   Ethereum tx already be claimed 
 
### AlreadyBeMint
- **interface**: `api.errors.claims.AlreadyBeMint.is`
- **summary**:   Ethereum tx already be mint 
 
### ExceedClaimLimit
- **interface**: `api.errors.claims.ExceedClaimLimit.is`
- **summary**:   Exceed claim limitation 
 
### IllegalMiner
- **interface**: `api.errors.claims.IllegalMiner.is`
- **summary**:   Miner should be the registered 
 
### IllegalSuperior
- **interface**: `api.errors.claims.IllegalSuperior.is`
- **summary**:   Superior not exist, should set it first 
 
### InvalidEthereumSignature
- **interface**: `api.errors.claims.InvalidEthereumSignature.is`
- **summary**:   Invalid Ethereum signature. 
 
### MinerNotExist
- **interface**: `api.errors.claims.MinerNotExist.is`
- **summary**:   Miner is not exist, should set it first 
 
### SignatureNotMatch
- **interface**: `api.errors.claims.SignatureNotMatch.is`
- **summary**:   Sign not match 
 
### SignerHasNoClaim
- **interface**: `api.errors.claims.SignerHasNoClaim.is`
- **summary**:   Ethereum address has no claims. 

___


## grandpa
 
### ChangePending
- **interface**: `api.errors.grandpa.ChangePending.is`
- **summary**:   Attempt to signal GRANDPA change with one already pending. 
 
### DuplicateOffenceReport
- **interface**: `api.errors.grandpa.DuplicateOffenceReport.is`
- **summary**:   A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **interface**: `api.errors.grandpa.InvalidEquivocationProof.is`
- **summary**:   An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.grandpa.InvalidKeyOwnershipProof.is`
- **summary**:   A key ownership proof provided as part of an equivocation report is invalid. 
 
### PauseFailed
- **interface**: `api.errors.grandpa.PauseFailed.is`
- **summary**:   Attempt to signal GRANDPA pause when the authority set isn't live (either paused or already pending pause). 
 
### ResumeFailed
- **interface**: `api.errors.grandpa.ResumeFailed.is`
- **summary**:   Attempt to signal GRANDPA resume when the authority set isn't paused (either live or already pending resume). 
 
### TooSoon
- **interface**: `api.errors.grandpa.TooSoon.is`
- **summary**:   Cannot signal forced change so soon after last. 

___


## identity
 
### AlreadyClaimed
- **interface**: `api.errors.identity.AlreadyClaimed.is`
- **summary**:   Account ID is already named. 
 
### EmptyIndex
- **interface**: `api.errors.identity.EmptyIndex.is`
- **summary**:   Empty index. 
 
### FeeChanged
- **interface**: `api.errors.identity.FeeChanged.is`
- **summary**:   Fee is changed. 
 
### InvalidIndex
- **interface**: `api.errors.identity.InvalidIndex.is`
- **summary**:   The index is invalid. 
 
### InvalidJudgement
- **interface**: `api.errors.identity.InvalidJudgement.is`
- **summary**:   Invalid judgement. 
 
### InvalidTarget
- **interface**: `api.errors.identity.InvalidTarget.is`
- **summary**:   The target is invalid. 
 
### JudgementGiven
- **interface**: `api.errors.identity.JudgementGiven.is`
- **summary**:   Judgement given. 
 
### NoIdentity
- **interface**: `api.errors.identity.NoIdentity.is`
- **summary**:   No identity found. 
 
### NotFound
- **interface**: `api.errors.identity.NotFound.is`
- **summary**:   Account isn't found. 
 
### NotNamed
- **interface**: `api.errors.identity.NotNamed.is`
- **summary**:   Account isn't named. 
 
### NotOwned
- **interface**: `api.errors.identity.NotOwned.is`
- **summary**:   Sub-account isn't owned by sender. 
 
### NotSub
- **interface**: `api.errors.identity.NotSub.is`
- **summary**:   Sender is not a sub-account. 
 
### StickyJudgement
- **interface**: `api.errors.identity.StickyJudgement.is`
- **summary**:   Sticky judgement. 
 
### TooManyFields
- **interface**: `api.errors.identity.TooManyFields.is`
- **summary**:   Too many additional fields. 
 
### TooManyRegistrars
- **interface**: `api.errors.identity.TooManyRegistrars.is`
- **summary**:   Maximum amount of registrars reached. Cannot add any more. 
 
### TooManySubAccounts
- **interface**: `api.errors.identity.TooManySubAccounts.is`
- **summary**:   Too many subs-accounts. 

___


## imOnline
 
### DuplicatedHeartbeat
- **interface**: `api.errors.imOnline.DuplicatedHeartbeat.is`
- **summary**:   Duplicated heartbeat. 
 
### InvalidKey
- **interface**: `api.errors.imOnline.InvalidKey.is`
- **summary**:   Non existent public key. 

___


## locks
 
### AlreadyStarted
- **interface**: `api.errors.locks.AlreadyStarted.is`
- **summary**:   Unlocking period already started and cannot set the unlock from again. 
 
### LockNotExist
- **interface**: `api.errors.locks.LockNotExist.is`
- **summary**:   Invalid account which doesn't have CRU18 or CRU24l 
 
### NotStarted
- **interface**: `api.errors.locks.NotStarted.is`
- **summary**:   Unlocking period has not started. 
 
### TimeIsNotEnough
- **interface**: `api.errors.locks.TimeIsNotEnough.is`
- **summary**:   Wait for the next unlock date. 

___


## market
 
### FileNotExist
- **interface**: `api.errors.market.FileNotExist.is`
- **summary**:   The file does not exist. Please check the cid again. 
 
### FileSizeNotCorrect
- **interface**: `api.errors.market.FileSizeNotCorrect.is`
- **summary**:   The file size is not correct. The same file is already on chain and the file size should be same. Please check the file size again. 
 
### FileTooLarge
- **interface**: `api.errors.market.FileTooLarge.is`
- **summary**:   The file is too large. Please check the MaximumFileSize value. 
 
### InsufficientCurrency
- **interface**: `api.errors.market.InsufficientCurrency.is`
- **summary**:   Don't have enough currency(CRU) to finish the extrinsic(transaction). Please transfer some CRU into this account. 
 
### NotEnoughReward
- **interface**: `api.errors.market.NotEnoughReward.is`
- **summary**:   The reward is not enough. 
 
### NotInRewardPeriod
- **interface**: `api.errors.market.NotInRewardPeriod.is`
- **summary**:   The file is not in the reward period. Please wait until the file is expired. 
 
### PlaceOrderNotAvailable
- **interface**: `api.errors.market.PlaceOrderNotAvailable.is`
- **summary**:   Place order is not available right now. Please wait for a while. 

___


## multisig
 
### AlreadyApproved
- **interface**: `api.errors.multisig.AlreadyApproved.is`
- **summary**:   Call is already approved by this signatory. 
 
### AlreadyStored
- **interface**: `api.errors.multisig.AlreadyStored.is`
- **summary**:   The data to be stored is already stored. 
 
### MinimumThreshold
- **interface**: `api.errors.multisig.MinimumThreshold.is`
- **summary**:   Threshold must be 2 or greater. 
 
### NoApprovalsNeeded
- **interface**: `api.errors.multisig.NoApprovalsNeeded.is`
- **summary**:   Call doesn't need any (more) approvals. 
 
### NotFound
- **interface**: `api.errors.multisig.NotFound.is`
- **summary**:   Multisig operation not found when attempting to cancel. 
 
### NoTimepoint
- **interface**: `api.errors.multisig.NoTimepoint.is`
- **summary**:   No timepoint was given, yet the multisig operation is already underway. 
 
### NotOwner
- **interface**: `api.errors.multisig.NotOwner.is`
- **summary**:   Only the account that originally created the multisig is able to cancel it. 
 
### SenderInSignatories
- **interface**: `api.errors.multisig.SenderInSignatories.is`
- **summary**:   The sender was contained in the other signatories; it shouldn't be. 
 
### SignatoriesOutOfOrder
- **interface**: `api.errors.multisig.SignatoriesOutOfOrder.is`
- **summary**:   The signatories were provided out of order; they should be ordered. 
 
### TooFewSignatories
- **interface**: `api.errors.multisig.TooFewSignatories.is`
- **summary**:   There are too few signatories in the list. 
 
### TooManySignatories
- **interface**: `api.errors.multisig.TooManySignatories.is`
- **summary**:   There are too many signatories in the list. 
 
### UnexpectedTimepoint
- **interface**: `api.errors.multisig.UnexpectedTimepoint.is`
- **summary**:   A timepoint was given, yet no multisig operation is underway. 
 
### WeightTooLow
- **interface**: `api.errors.multisig.WeightTooLow.is`
- **summary**:   The maximum weight information provided was too low. 
 
### WrongTimepoint
- **interface**: `api.errors.multisig.WrongTimepoint.is`
- **summary**:   A different timepoint was given to the multisig operation that is underway. 

___


## scheduler
 
### FailedToSchedule
- **interface**: `api.errors.scheduler.FailedToSchedule.is`
- **summary**:   Failed to schedule a call 
 
### NotFound
- **interface**: `api.errors.scheduler.NotFound.is`
- **summary**:   Cannot find the scheduled call. 
 
### RescheduleNoChange
- **interface**: `api.errors.scheduler.RescheduleNoChange.is`
- **summary**:   Reschedule failed because it does not change scheduled time. 
 
### TargetBlockNumberInPast
- **interface**: `api.errors.scheduler.TargetBlockNumberInPast.is`
- **summary**:   Given target block number is in the past. 

___


## session
 
### DuplicatedKey
- **interface**: `api.errors.session.DuplicatedKey.is`
- **summary**:   Registered duplicate key. 
 
### InvalidProof
- **interface**: `api.errors.session.InvalidProof.is`
- **summary**:   Invalid ownership proof. 
 
### NoAccount
- **interface**: `api.errors.session.NoAccount.is`
- **summary**:   Key setting account is not live, so it's impossible to associate keys. 
 
### NoAssociatedValidatorId
- **interface**: `api.errors.session.NoAssociatedValidatorId.is`
- **summary**:   No associated validator ID for account. 
 
### NoKeys
- **interface**: `api.errors.session.NoKeys.is`
- **summary**:   No keys are associated with this account. 

___


## staking
 
### AllGuaranteed
- **interface**: `api.errors.staking.AllGuaranteed.is`
- **summary**:   All stakes are guaranteed, cut guarantee first 
 
### AlreadyBonded
- **interface**: `api.errors.staking.AlreadyBonded.is`
- **summary**:   Stash is already bonded. 
 
### AlreadyClaimed
- **interface**: `api.errors.staking.AlreadyClaimed.is`
- **summary**:   Claimed reward twice. 
 
### AlreadyPaired
- **interface**: `api.errors.staking.AlreadyPaired.is`
- **summary**:   Controller is already paired. 
 
### DuplicateIndex
- **interface**: `api.errors.staking.DuplicateIndex.is`
- **summary**:   Duplicate index. 
 
### ExceedGuaranteeLimit
- **interface**: `api.errors.staking.ExceedGuaranteeLimit.is`
- **summary**:   Can not bond with more than limit 
 
### FundedTarget
- **interface**: `api.errors.staking.FundedTarget.is`
- **summary**:   Attempting to target a stash that still has funds. 
 
### InsufficientCurrency
- **interface**: `api.errors.staking.InsufficientCurrency.is`
- **summary**:   Don't have enough balance to recharge the staking pot 
 
### InsufficientValue
- **interface**: `api.errors.staking.InsufficientValue.is`
- **summary**:   Can not bond with value less than minimum balance. 
 
### InvalidEraToReward
- **interface**: `api.errors.staking.InvalidEraToReward.is`
- **summary**:   Invalid era to reward. 
 
### InvalidSlashIndex
- **interface**: `api.errors.staking.InvalidSlashIndex.is`
- **summary**:   Slash record index out of bounds. 
 
### InvalidTarget
- **interface**: `api.errors.staking.InvalidTarget.is`
- **summary**:   Target is invalid. 
 
### NoMoreChunks
- **interface**: `api.errors.staking.NoMoreChunks.is`
- **summary**:   Can not schedule more unlock chunks. 
 
### NotController
- **interface**: `api.errors.staking.NotController.is`
- **summary**:   Not a controller account. 
 
### NotStash
- **interface**: `api.errors.staking.NotStash.is`
- **summary**:   Not a stash account. 
 
### NoUnlockChunk
- **interface**: `api.errors.staking.NoUnlockChunk.is`
- **summary**:   Can not rebond without unlocking chunks. 

___


## sudo
 
### RequireSudo
- **interface**: `api.errors.sudo.RequireSudo.is`
- **summary**:   Sender must be the Sudo account 

___


## swork
 
### ABUpgradeFailed
- **interface**: `api.errors.swork.ABUpgradeFailed.is`
- **summary**:   A/B Upgrade failed 
 
### AlreadyJoint
- **interface**: `api.errors.swork.AlreadyJoint.is`
- **summary**:   Already joint one group 
 
### ExceedAllowlistLimit
- **interface**: `api.errors.swork.ExceedAllowlistLimit.is`
- **summary**:   Exceed the limit of allowlist number in one group. 
 
### ExceedGroupLimit
- **interface**: `api.errors.swork.ExceedGroupLimit.is`
- **summary**:   Exceed the limit of members number in one group. 
 
### GroupAlreadyExist
- **interface**: `api.errors.swork.GroupAlreadyExist.is`
- **summary**:   The group already exist. 
 
### GroupOwnerForbidden
- **interface**: `api.errors.swork.GroupOwnerForbidden.is`
- **summary**:   The group owner cannot be a sWorker member. 
 
### IdentityNotExist
- **interface**: `api.errors.swork.IdentityNotExist.is`
- **summary**:   Identity doesn't exist 
 
### IllegalApplier
- **interface**: `api.errors.swork.IllegalApplier.is`
- **summary**:   Illegal applier 
 
### IllegalFilesTransition
- **interface**: `api.errors.swork.IllegalFilesTransition.is`
- **summary**:   Files change not legal 
 
### IllegalIdentity
- **interface**: `api.errors.swork.IllegalIdentity.is`
- **summary**:   Identity check failed 
 
### IllegalReporter
- **interface**: `api.errors.swork.IllegalReporter.is`
- **summary**:   Illegal reporter 
 
### IllegalSpower
- **interface**: `api.errors.swork.IllegalSpower.is`
- **summary**:   The spower value is not zero and cannot join a group. 
 
### IllegalWorkReport
- **interface**: `api.errors.swork.IllegalWorkReport.is`
- **summary**:   Illegal work report. This should never happen. 
 
### IllegalWorkReportSig
- **interface**: `api.errors.swork.IllegalWorkReportSig.is`
- **summary**:   Illegal work report signature 
 
### InvalidExpiredBlock
- **interface**: `api.errors.swork.InvalidExpiredBlock.is`
- **summary**:   Cannot extend the valid duration for an existed enclave code. 
 
### InvalidReportTime
- **interface**: `api.errors.swork.InvalidReportTime.is`
- **summary**:   Invalid timing 
 
### NotInAllowlist
- **interface**: `api.errors.swork.NotInAllowlist.is`
- **summary**:   Who is not in the allowlist. Please ask owner to add you into the allowlist before you join the group. 
 
### NotJoint
- **interface**: `api.errors.swork.NotJoint.is`
- **summary**:   The member is not in this group and cannot quit. 
 
### NotOwner
- **interface**: `api.errors.swork.NotOwner.is`
- **summary**:   The target is not a group owner. Please make sure that the target is a group owner. 
 
### OutdatedReporter
- **interface**: `api.errors.swork.OutdatedReporter.is`
- **summary**:   Outdated reporter 

___


## system
 
### FailedToExtractRuntimeVersion
- **interface**: `api.errors.system.FailedToExtractRuntimeVersion.is`
- **summary**:   Failed to extract the runtime version from the new runtime. 

  Either calling `Core_version` or decoding `RuntimeVersion` failed. 
 
### InvalidSpecName
- **interface**: `api.errors.system.InvalidSpecName.is`
- **summary**:   The name of specification does not match between the current runtime and the new runtime. 
 
### NonDefaultComposite
- **interface**: `api.errors.system.NonDefaultComposite.is`
- **summary**:   Suicide called when the account has non-default composite data. 
 
### NonZeroRefCount
- **interface**: `api.errors.system.NonZeroRefCount.is`
- **summary**:   There is a non-zero reference count preventing the account from being purged. 
 
### SpecVersionNeedsToIncrease
- **interface**: `api.errors.system.SpecVersionNeedsToIncrease.is`
- **summary**:   The specification version is not allowed to decrease between the current runtime and the new runtime. 

___


## treasury
 
### InsufficientProposersBalance
- **interface**: `api.errors.treasury.InsufficientProposersBalance.is`
- **summary**:   Proposer's balance is too low. 
 
### InvalidIndex
- **interface**: `api.errors.treasury.InvalidIndex.is`
- **summary**:   No proposal or bounty at that index. 

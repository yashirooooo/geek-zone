---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

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

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[swork](#swork)**

- **[system](#system)**

- **[treasury](#treasury)**

- **[utility](#utility)**


___


## balances
 
### BalanceSet(`AccountId`, `Balance`, `Balance`)
- **interface**: `api.events.balances.BalanceSet.is`
- **summary**:   A balance was set by root. \[who, free, reserved\] 
 
### Deposit(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Deposit.is`
- **summary**:   Some amount was deposited (e.g. for transaction fees). \[who, deposit\] 
 
### DustLost(`AccountId`, `Balance`)
- **interface**: `api.events.balances.DustLost.is`
- **summary**:   An account was removed whose balance was non-zero but below ExistentialDeposit, resulting in an outright loss. \[account, balance\] 
 
### Endowed(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Endowed.is`
- **summary**:   An account was created with some free balance. \[account, free_balance\] 
 
### Reserved(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Reserved.is`
- **summary**:   Some balance was reserved (moved from free to reserved). \[who, value\] 
 
### ReserveRepatriated(`AccountId`, `AccountId`, `Balance`, `BalanceStatus`)
- **interface**: `api.events.balances.ReserveRepatriated.is`
- **summary**:   Some balance was moved from the reserve of the first account to the second account. Final argument indicates the destination balance type. \[from, to, balance, destination_status\] 
 
### Transfer(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.balances.Transfer.is`
- **summary**:   Transfer succeeded. \[from, to, value\] 
 
### Unreserved(`AccountId`, `Balance`)
- **interface**: `api.events.balances.Unreserved.is`
- **summary**:   Some balance was unreserved (moved from reserved to free). \[who, value\] 

___


## benefits
 
### AddBenefitFundsSuccess(`AccountId`, `Balance`, `FundsType`)
- **interface**: `api.events.benefits.AddBenefitFundsSuccess.is`
- **summary**:   Add benefit funds success. The first item is the account. The second item is the added benefit amount. 
 
### CutBenefitFundsSuccess(`AccountId`, `Balance`, `FundsType`)
- **interface**: `api.events.benefits.CutBenefitFundsSuccess.is`
- **summary**:   Cut benefit funds success The first item is the account. The second item is the decreased benefit amount. 
 
### RebondBenefitFundsSuccess(`AccountId`, `Balance`, `FundsType`)
- **interface**: `api.events.benefits.RebondBenefitFundsSuccess.is`
- **summary**:   Rebond benefit funds success The first item is the account. The second item is the rebonded benefit amount. 
 
### WithdrawBenefitFundsSuccess(`AccountId`, `Balance`)
- **interface**: `api.events.benefits.WithdrawBenefitFundsSuccess.is`
- **summary**:   Withdraw benefit funds success The first item is the account. The second item is the withdrawed benefit amount. 

___


## claims
 
### BondEthSuccess(`AccountId`, `EthereumAddress`)
- **interface**: `api.events.claims.BondEthSuccess.is`
- **summary**:   Ethereum address was bonded to account. [who, ethereum_address] 
 
### Claimed(`AccountId`, `EthereumAddress`, `Balance`)
- **interface**: `api.events.claims.Claimed.is`
- **summary**:   Someone claimed some CRUs. [who, ethereum_address, amount] 
 
### InitPot(`AccountId`, `Balance`)
- **interface**: `api.events.claims.InitPot.is`
- **summary**:   Init pot success 
 
### MinerChanged(`AccountId`)
- **interface**: `api.events.claims.MinerChanged.is`
- **summary**:   Someone be the new miner 
 
### MintSuccess(`EthereumTxHash`, `EthereumAddress`, `Balance`)
- **interface**: `api.events.claims.MintSuccess.is`
- **summary**:   Mint claims successfully 
 
### SetLimitSuccess(`Balance`)
- **interface**: `api.events.claims.SetLimitSuccess.is`
- **summary**:   Set limit successfully 
 
### SuperiorChanged(`AccountId`)
- **interface**: `api.events.claims.SuperiorChanged.is`
- **summary**:   Someone be the new superior 

___


## grandpa
 
### NewAuthorities(`AuthorityList`)
- **interface**: `api.events.grandpa.NewAuthorities.is`
- **summary**:   New authority set has been applied. \[authority_set\] 
 
### Paused()
- **interface**: `api.events.grandpa.Paused.is`
- **summary**:   Current authority set has been paused. 
 
### Resumed()
- **interface**: `api.events.grandpa.Resumed.is`
- **summary**:   Current authority set has been resumed. 

___


## identity
 
### IdentityCleared(`AccountId`, `Balance`)
- **interface**: `api.events.identity.IdentityCleared.is`
- **summary**:   A name was cleared, and the given balance returned. \[who, deposit\] 
 
### IdentityKilled(`AccountId`, `Balance`)
- **interface**: `api.events.identity.IdentityKilled.is`
- **summary**:   A name was removed and the given balance slashed. \[who, deposit\] 
 
### IdentitySet(`AccountId`)
- **interface**: `api.events.identity.IdentitySet.is`
- **summary**:   A name was set or reset (which will remove all judgements). \[who\] 
 
### JudgementGiven(`AccountId`, `RegistrarIndex`)
- **interface**: `api.events.identity.JudgementGiven.is`
- **summary**:   A judgement was given by a registrar. \[target, registrar_index\] 
 
### JudgementRequested(`AccountId`, `RegistrarIndex`)
- **interface**: `api.events.identity.JudgementRequested.is`
- **summary**:   A judgement was asked from a registrar. \[who, registrar_index\] 
 
### JudgementUnrequested(`AccountId`, `RegistrarIndex`)
- **interface**: `api.events.identity.JudgementUnrequested.is`
- **summary**:   A judgement request was retracted. \[who, registrar_index\] 
 
### RegistrarAdded(`RegistrarIndex`)
- **interface**: `api.events.identity.RegistrarAdded.is`
- **summary**:   A registrar was added. \[registrar_index\] 
 
### SubIdentityAdded(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.identity.SubIdentityAdded.is`
- **summary**:   A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\] 
 
### SubIdentityRemoved(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.identity.SubIdentityRemoved.is`
- **summary**:   A sub-identity was removed from an identity and the deposit freed. \[sub, main, deposit\] 
 
### SubIdentityRevoked(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.identity.SubIdentityRevoked.is`
- **summary**:   A sub-identity was cleared, and the given deposit repatriated from the main identity account to the sub-identity account. \[sub, main, deposit\] 

___


## imOnline
 
### AllGood()
- **interface**: `api.events.imOnline.AllGood.is`
- **summary**:   At the end of the session, no offence was committed. 
 
### HeartbeatReceived(`AuthorityId`)
- **interface**: `api.events.imOnline.HeartbeatReceived.is`
- **summary**:   A new heartbeat was received from `AuthorityId` \[authority_id\] 
 
### SomeOffline(`Vec<IdentificationTuple>`)
- **interface**: `api.events.imOnline.SomeOffline.is`
- **summary**:   At the end of the session, at least one validator was found to be \[offline\]. 

___


## indices
 
### IndexAssigned(`AccountId`, `AccountIndex`)
- **interface**: `api.events.indices.IndexAssigned.is`
- **summary**:   A account index was assigned. \[index, who\] 
 
### IndexFreed(`AccountIndex`)
- **interface**: `api.events.indices.IndexFreed.is`
- **summary**:   A account index has been freed up (unassigned). \[index\] 
 
### IndexFrozen(`AccountIndex`, `AccountId`)
- **interface**: `api.events.indices.IndexFrozen.is`
- **summary**:   A account index has been frozen to its current account ID. \[index, who\] 

___


## locks
 
### UnlockStartedFrom(`BlockNumber`)
- **interface**: `api.events.locks.UnlockStartedFrom.is`
- **summary**:   Set global unlock from date 
 
### UnlockSuccess(`AccountId`, `BlockNumber`)
- **interface**: `api.events.locks.UnlockSuccess.is`
- **summary**:   Unlock success 

___


## market
 
### AddPrepaidSuccess(`AccountId`, `MerkleRoot`, `Balance`)
- **interface**: `api.events.market.AddPrepaidSuccess.is`
- **summary**:   Add prepaid value for an existed file success. The first item is the account who add the prepaid. The second item is the cid of the file. The third item is the prepaid amount of currency. 
 
### CalculateSuccess(`MerkleRoot`)
- **interface**: `api.events.market.CalculateSuccess.is`
- **summary**:   Calculate the reward for a file success. The first item is the cid of the file. 
 
### FileSuccess(`AccountId`, `MerkleRoot`)
- **interface**: `api.events.market.FileSuccess.is`
- **summary**:   Place a storage order success. The first item is the account who places the storage order. The second item is the cid of the file. 
 
### IllegalFileClosed(`MerkleRoot`)
- **interface**: `api.events.market.IllegalFileClosed.is`
- **summary**:   A file is closed due to mismatch file size. The first item is the cid of the file. 
 
### RenewFileSuccess(`AccountId`, `MerkleRoot`)
- **interface**: `api.events.market.RenewFileSuccess.is`
- **summary**:   Renew an existed file success. The first item is the account who renew the storage order. The second item is the cid of the file. 
 
### RewardMerchantSuccess(`AccountId`)
- **interface**: `api.events.market.RewardMerchantSuccess.is`
- **summary**:   Reward the merchant success. The first item is the account of the merchant. 
 
### SetBaseFeeSuccess(`Balance`)
- **interface**: `api.events.market.SetBaseFeeSuccess.is`
- **summary**:   Set the file base fee success. 
 
### SetEnableMarketSuccess(`bool`)
- **interface**: `api.events.market.SetEnableMarketSuccess.is`
- **summary**:   Set the global market switch success. 

___


## multisig
 
### MultisigApproval(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **interface**: `api.events.multisig.MultisigApproval.is`
- **summary**:   A multisig operation has been approved by someone. \[approving, timepoint, multisig, call_hash\] 
 
### MultisigCancelled(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **interface**: `api.events.multisig.MultisigCancelled.is`
- **summary**:   A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\] 
 
### MultisigExecuted(`AccountId`, `Timepoint`, `AccountId`, `CallHash`, `DispatchResult`)
- **interface**: `api.events.multisig.MultisigExecuted.is`
- **summary**:   A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\] 
 
### NewMultisig(`AccountId`, `AccountId`, `CallHash`)
- **interface**: `api.events.multisig.NewMultisig.is`
- **summary**:   A new multisig operation has begun. \[approving, multisig, call_hash\] 

___


## offences
 
### Offence(`Kind`, `OpaqueTimeSlot`, `bool`)
- **interface**: `api.events.offences.Offence.is`
- **summary**:   There is an offence reported of the given `kind` happened at the `session_index` and (kind-specific) time slot. This event is not deposited for duplicate slashes. last element indicates of the offence was applied (true) or queued (false) \[kind, timeslot, applied\]. 

___


## scheduler
 
### Canceled(`BlockNumber`, `u32`)
- **interface**: `api.events.scheduler.Canceled.is`
- **summary**:   Canceled some task. \[when, index\] 
 
### Dispatched(`TaskAddress`, `Option<Bytes>`, `DispatchResult`)
- **interface**: `api.events.scheduler.Dispatched.is`
- **summary**:   Dispatched some task. \[task, id, result\] 
 
### Scheduled(`BlockNumber`, `u32`)
- **interface**: `api.events.scheduler.Scheduled.is`
- **summary**:   Scheduled some task. \[when, index\] 

___


## session
 
### NewSession(`SessionIndex`)
- **interface**: `api.events.session.NewSession.is`
- **summary**:   New session has happened. Note that the argument is the \[session_index\], not the block number as the type might suggest. 

___


## staking
 
### Bonded(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Bonded.is`
- **summary**:   An account has bonded this amount. [stash, amount] 

  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably, it will not be emitted for staking rewards when they are added to stake. 
 
### ChillSuccess(`AccountId`, `AccountId`)
- **interface**: `api.events.staking.ChillSuccess.is`
- **summary**:   An account has been chilled from its stash 
 
### CutGuaranteeSuccess(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.staking.CutGuaranteeSuccess.is`
- **summary**:   An account has called `cut_guarantee` and cut vote for one validator. 
 
### EraReward(`EraIndex`, `Balance`, `Balance`)
- **interface**: `api.events.staking.EraReward.is`
- **summary**:   Total reward at each era 
 
### GuaranteeSuccess(`AccountId`, `AccountId`, `Balance`)
- **interface**: `api.events.staking.GuaranteeSuccess.is`
- **summary**:   An account has called `guarantee` and vote for one validator. 
 
### NotEnoughCurrency(`EraIndex`, `Balance`, `Balance`)
- **interface**: `api.events.staking.NotEnoughCurrency.is`
- **summary**:   Staking pot is not enough 
 
### OldSlashingReportDiscarded(`SessionIndex`)
- **interface**: `api.events.staking.OldSlashingReportDiscarded.is`
- **summary**:   An old slashing report from a prior era was discarded because it could not be processed. 
 
### Reward(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Reward.is`
- **summary**:   All validators have been rewarded by the first balance; the second is the remainder from the maximum amount of reward. 
 
### Slash(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Slash.is`
- **summary**:   One validator (and its guarantors) has been slashed by the given amount. 
 
### Unbonded(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Unbonded.is`
- **summary**:   An account has unbonded this amount. [stash, amount] 
 
### UpdateStakeLimitSuccess(`u32`)
- **interface**: `api.events.staking.UpdateStakeLimitSuccess.is`
- **summary**:   Update the identities success. The stake limit of each identity would be updated. 
 
### ValidateSuccess(`AccountId`, `ValidatorPrefs`)
- **interface**: `api.events.staking.ValidateSuccess.is`
- **summary**:   An account has called `validate` and set guarantee fee. 
 
### Withdrawn(`AccountId`, `Balance`)
- **interface**: `api.events.staking.Withdrawn.is`
- **summary**:   An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance` from the unlocking queue. [stash, amount] 

___


## sudo
 
### KeyChanged(`AccountId`)
- **interface**: `api.events.sudo.KeyChanged.is`
- **summary**:   The \[sudoer\] just switched identity; the old key is supplied. 
 
### Sudid(`DispatchResult`)
- **interface**: `api.events.sudo.Sudid.is`
- **summary**:   A sudo just took place. \[result\] 
 
### SudoAsDone(`DispatchResult`)
- **interface**: `api.events.sudo.SudoAsDone.is`
- **summary**:   A sudo just took place. \[result\] 

___


## swork
 
### ABUpgradeSuccess(`AccountId`, `SworkerPubKey`, `SworkerPubKey`)
- **interface**: `api.events.swork.ABUpgradeSuccess.is`
- **summary**:   AB upgrade success. The first item is the account who're doing AB upgrade. The second item is the pub key of the previous(A) sWorker. The third item is the pub key of the latest(B) sWorker. 
 
### AddIntoAllowlistSuccess(`AccountId`, `AccountId`)
- **interface**: `api.events.swork.AddIntoAllowlistSuccess.is`
- **summary**:   Add who into allowlist success. 
 
### CancelPunishmentSuccess(`AccountId`)
- **interface**: `api.events.swork.CancelPunishmentSuccess.is`
- **summary**:   Cancel the punishment success. 
 
### CreateGroupSuccess(`AccountId`)
- **interface**: `api.events.swork.CreateGroupSuccess.is`
- **summary**:   Create the group success. The first item is the group owner's account. 
 
### JoinGroupSuccess(`AccountId`, `AccountId`)
- **interface**: `api.events.swork.JoinGroupSuccess.is`
- **summary**:   Join the group success. The first item is the member's account. The second item is the group owner's account. 
 
### KickOutSuccess(`AccountId`)
- **interface**: `api.events.swork.KickOutSuccess.is`
- **summary**:   Kick some one out of the group. The first item is the member's account. 
 
### QuitGroupSuccess(`AccountId`, `AccountId`)
- **interface**: `api.events.swork.QuitGroupSuccess.is`
- **summary**:   Quit the group success. The first item is the member's account. The second item is the group owner's account. 
 
### RegisterSuccess(`AccountId`, `SworkerPubKey`)
- **interface**: `api.events.swork.RegisterSuccess.is`
- **summary**:   sWorker registration success. The first item is the account who try to register. The second item is the pub key of the sWorker. 
 
### RemoveFromAllowlistSuccess(`AccountId`, `AccountId`)
- **interface**: `api.events.swork.RemoveFromAllowlistSuccess.is`
- **summary**:   Remove who from allowlist success. 
 
### SetCodeSuccess(`SworkerCode`, `BlockNumber`)
- **interface**: `api.events.swork.SetCodeSuccess.is`
- **summary**:   Set code success. The first item is the enclave code. The second item is the expired block number. 
 
### SetPunishmentSuccess(`bool`)
- **interface**: `api.events.swork.SetPunishmentSuccess.is`
- **summary**:   Enable the punishment or disable it. 
 
### WorksReportSuccess(`AccountId`, `SworkerPubKey`)
- **interface**: `api.events.swork.WorksReportSuccess.is`
- **summary**:   Send the work report success. The first item is the account who send the work report The second item is the pub key of the sWorker. 

___


## system
 
### CodeUpdated()
- **interface**: `api.events.system.CodeUpdated.is`
- **summary**:   `:code` was updated. 
 
### ExtrinsicFailed(`DispatchError`, `DispatchInfo`)
- **interface**: `api.events.system.ExtrinsicFailed.is`
- **summary**:   An extrinsic failed. \[error, info\] 
 
### ExtrinsicSuccess(`DispatchInfo`)
- **interface**: `api.events.system.ExtrinsicSuccess.is`
- **summary**:   An extrinsic completed successfully. \[info\] 
 
### KilledAccount(`AccountId`)
- **interface**: `api.events.system.KilledAccount.is`
- **summary**:   An \[account\] was reaped. 
 
### NewAccount(`AccountId`)
- **interface**: `api.events.system.NewAccount.is`
- **summary**:   A new \[account\] was created. 

___


## treasury
 
### Awarded(`ProposalIndex`, `Balance`, `AccountId`)
- **interface**: `api.events.treasury.Awarded.is`
- **summary**:   Some funds have been allocated. \[proposal_index, award, beneficiary\] 
 
### Burnt(`Balance`)
- **interface**: `api.events.treasury.Burnt.is`
- **summary**:   Some of our funds have been burnt. \[burn\] 
 
### Deposit(`Balance`)
- **interface**: `api.events.treasury.Deposit.is`
- **summary**:   Some funds have been deposited. \[deposit\] 
 
### Proposed(`ProposalIndex`)
- **interface**: `api.events.treasury.Proposed.is`
- **summary**:   New proposal. \[proposal_index\] 
 
### Rejected(`ProposalIndex`, `Balance`)
- **interface**: `api.events.treasury.Rejected.is`
- **summary**:   A proposal was rejected; funds were slashed. \[proposal_index, slashed\] 
 
### Rollover(`Balance`)
- **interface**: `api.events.treasury.Rollover.is`
- **summary**:   Spending has finished; this is the amount that rolls over until next spend. \[budget_remaining\] 
 
### Spending(`Balance`)
- **interface**: `api.events.treasury.Spending.is`
- **summary**:   We have ended a spend period and will now allocate funds. \[budget_remaining\] 

___


## utility
 
### BatchCompleted()
- **interface**: `api.events.utility.BatchCompleted.is`
- **summary**:   Batch of dispatches completed fully with no error. 
 
### BatchInterrupted(`u32`, `DispatchError`)
- **interface**: `api.events.utility.BatchInterrupted.is`
- **summary**:   Batch of dispatches did not complete fully. Index of first failing dispatch given, as well as the error. \[index, error\] 

import {
  CallExecuted as CallExecutedEvent,
  CallSalt as CallSaltEvent,
  CallScheduled as CallScheduledEvent,
  Cancelled as CancelledEvent,
  MinDelayChange as MinDelayChangeEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
} from "../generated/HighSecTimelock/HighSecTimelock"
import {
  HighSecTimelockCallExecuted,
  HighSecTimelockCallSalt,
  HighSecTimelockCallScheduled,
  HighSecTimelockCancelled,
  HighSecTimelockMinDelayChange,
  HighSecTimelockRoleAdminChanged,
  HighSecTimelockRoleGranted,
  HighSecTimelockRoleRevoked,
} from "../generated/schema"

export function handleCallExecuted(event: CallExecutedEvent): void {
  let entity = new HighSecTimelockCallExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.HighSecTimelock_id = event.params.id
  entity.index = event.params.index
  entity.target = event.params.target
  entity.value = event.params.value
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCallSalt(event: CallSaltEvent): void {
  let entity = new HighSecTimelockCallSalt(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.HighSecTimelock_id = event.params.id
  entity.salt = event.params.salt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCallScheduled(event: CallScheduledEvent): void {
  let entity = new HighSecTimelockCallScheduled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.HighSecTimelock_id = event.params.id
  entity.index = event.params.index
  entity.target = event.params.target
  entity.value = event.params.value
  entity.data = event.params.data
  entity.predecessor = event.params.predecessor
  entity.delay = event.params.delay

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancelled(event: CancelledEvent): void {
  let entity = new HighSecTimelockCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.HighSecTimelock_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinDelayChange(event: MinDelayChangeEvent): void {
  let entity = new HighSecTimelockMinDelayChange(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.oldDuration = event.params.oldDuration
  entity.newDuration = event.params.newDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new HighSecTimelockRoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new HighSecTimelockRoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new HighSecTimelockRoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

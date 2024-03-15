import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CallExecuted,
  CallSalt,
  CallScheduled,
  Cancelled,
  MinDelayChange,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/HighSecTimelock/HighSecTimelock"

export function createCallExecutedEvent(
  id: Bytes,
  index: BigInt,
  target: Address,
  value: BigInt,
  data: Bytes
): CallExecuted {
  let callExecutedEvent = changetype<CallExecuted>(newMockEvent())

  callExecutedEvent.parameters = new Array()

  callExecutedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  callExecutedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  callExecutedEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  callExecutedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  callExecutedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return callExecutedEvent
}

export function createCallSaltEvent(id: Bytes, salt: Bytes): CallSalt {
  let callSaltEvent = changetype<CallSalt>(newMockEvent())

  callSaltEvent.parameters = new Array()

  callSaltEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  callSaltEvent.parameters.push(
    new ethereum.EventParam("salt", ethereum.Value.fromFixedBytes(salt))
  )

  return callSaltEvent
}

export function createCallScheduledEvent(
  id: Bytes,
  index: BigInt,
  target: Address,
  value: BigInt,
  data: Bytes,
  predecessor: Bytes,
  delay: BigInt
): CallScheduled {
  let callScheduledEvent = changetype<CallScheduled>(newMockEvent())

  callScheduledEvent.parameters = new Array()

  callScheduledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  callScheduledEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  callScheduledEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  callScheduledEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  callScheduledEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )
  callScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "predecessor",
      ethereum.Value.fromFixedBytes(predecessor)
    )
  )
  callScheduledEvent.parameters.push(
    new ethereum.EventParam("delay", ethereum.Value.fromUnsignedBigInt(delay))
  )

  return callScheduledEvent
}

export function createCancelledEvent(id: Bytes): Cancelled {
  let cancelledEvent = changetype<Cancelled>(newMockEvent())

  cancelledEvent.parameters = new Array()

  cancelledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return cancelledEvent
}

export function createMinDelayChangeEvent(
  oldDuration: BigInt,
  newDuration: BigInt
): MinDelayChange {
  let minDelayChangeEvent = changetype<MinDelayChange>(newMockEvent())

  minDelayChangeEvent.parameters = new Array()

  minDelayChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldDuration",
      ethereum.Value.fromUnsignedBigInt(oldDuration)
    )
  )
  minDelayChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newDuration",
      ethereum.Value.fromUnsignedBigInt(newDuration)
    )
  )

  return minDelayChangeEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

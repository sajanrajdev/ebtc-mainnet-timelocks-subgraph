# eBTC Mainnet Timelocks Subgraph

Indexes events from eBTC's two Ethereum mainnet governance timelocks, so that [timelock-dashboard](https://github.com/ebtc-protocol/timelock-dashboard) can show scheduled, executed and cancelled operations.

The eBTC protocol is deprecated and this subgraph is no longer maintained.

## What it indexes

| Contract | Address |
|---|---|
| LowSecTimelock | `0xE2F2D9e226e5236BeC4531FcBf1A22A7a2bD0602` |
| HighSecTimelock | `0xaDDeE229Bd103bb5B10C3CdB595A01c425dd3264` |

For each contract it stores `CallScheduled`, `CallExecuted`, `CallSalt`, `Cancelled`, `MinDelayChange`, `RoleAdminChanged`, `RoleGranted` and `RoleRevoked` events. Entities are immutable and keep the block number, timestamp and transaction hash. High security entities are prefixed with `HighSecTimelock`.

## Run it

```sh
yarn install
yarn codegen
yarn build
```

Deployment settings are in `subgraph.yaml` and `networks.json`. Generated code and build output aren't committed; `yarn codegen` and `yarn build` recreate them.

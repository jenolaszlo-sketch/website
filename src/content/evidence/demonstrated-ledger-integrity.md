---
title: Tamper-evident ledger and verification
kind: demonstrated
summary: Siming's samples assert appends, checkpoints, signed checkpoints, and keyed ledger epochs, and run in CI.
projects:
  - siming
links:
  - label: Penghou.Siming repository
    url: https://github.com/jenolaszlo-sketch/penghou-siming
order: 20
---

The repository includes a runnable end-to-end tour: SQLite appends with
idempotency and pagination, checkpoint export/import/verification, signed
checkpoints, context-bound epoch-2 ledgers, and keyed epoch-3 ledgers with a
wrong-secret failure. Every scenario asserts its outcome.

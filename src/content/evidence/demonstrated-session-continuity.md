---
title: Session continuity across runs and restarts
kind: demonstrated
summary: The Hongxian session kernel, SQLite provider, and verified experience projector are implemented and exercised.
projects:
  - hongxian
links:
  - label: Penghou.Hongxian repository
    url: https://github.com/jenolaszlo-sketch/penghou-hongxian
  - label: Architecture
    url: https://github.com/jenolaszlo-sketch/penghou-hongxian/blob/main/docs/architecture.md
order: 40
---

A runnable example shows a session that attaches another execution, records a
failure, appends a recovery plan and verified receipt, rebuilds its projection,
and proves the ordered ledger without rewriting earlier history.

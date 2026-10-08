---
name: Hongxian
slug: hongxian
tagline: Session continuity across runs, vendors, and restarts
summary: A durable session kernel that records what belongs together and how long-running human/AI work recovered.
status: preview
category: evidence-memory
repository: https://github.com/jenolaszlo-sketch/penghou-hongxian
packages:
  - Penghou.Hongxian
  - Penghou.Hongxian.Sqlite
  - Penghou.Hongxian.LatticeDb
version: 0.1.0-preview.5
order: 90
evidence:
  - label: Penghou.Hongxian on NuGet
    url: https://www.nuget.org/packages/Penghou.Hongxian
---

## The problem

A workflow engine knows what should execute and an artifact store knows what
was produced, but neither answers the temporal question a long-running effort
needs: what belongs together, what happened, what changed, and how the work
recovered.

## Why Penghou needs it

Hongxian supplies that missing dimension. A session outlives any single
workflow run, restarts, and provider identity, so one evolving effort can
contain many executions without treating a vendor's run ID as the identity of
the work.

## What it makes possible

- append-only session history: failures and recovery attempts are never erased;
- correlation of workflow runs, model calls, tools, artifacts, and revisions
  through opaque references;
- rebuildable SQLite projections over an authoritative Siming ledger;
- per-session retention, export, inspection, and deletion boundaries.

## Evidence

`Penghou.Hongxian` and companion packages are published on NuGet as
`0.1.0-preview.5`. The session kernel, SQLite provider, recovery and
reconciliation contracts, and a verified experience projector are implemented,
with a runnable example in the repository.

## Status and limits

Preview, targeting .NET 10. The LatticeDB package is a checkpoint: packed
consumer isolation and the full supported-platform matrix are still being
completed. Package-backed adoption, richer bounded queries, and cross-domain
validation remain roadmap work.

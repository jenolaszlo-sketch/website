---
name: Siming
slug: siming
tagline: A tamper-evident event ledger
summary: An embedded hash-chain ledger with SQLite persistence for independently verifiable audit and provenance.
status: preview
category: evidence-memory
repository: https://github.com/jenolaszlo-sketch/penghou-siming
packages:
  - Penghou.Siming
  - Penghou.Siming.Sqlite
  - Penghou.Siming.Cryptography
  - Penghou.Siming.Verify
version: 0.1.0-preview.7
order: 80
evidence:
  - label: Penghou.Siming on NuGet
    url: https://www.nuget.org/packages/Penghou.Siming
---

## The problem

"Claims about what happened are only useful if someone else can check them.
A mutable log, or a summary produced by the same system being audited, proves
nothing."

## Why Penghou needs it

Siming provides the committed, ordered history that evidence rests on. It
combines a versioned cryptographic hash chain with transactional SQLite, so
committed events stay ordered and independently verifiable.

## What it makes possible

- canonical payload hashing, append-only hash chains, and checkpoints;
- optional detached Ed25519 checkpoint signing and public-key verification;
- idempotent appends, expected-head concurrency, and bounded verification;
- a standalone verification CLI for a ledger or checkpoint.

## Evidence

`Penghou.Siming` and companion packages are published on NuGet (current line
`0.1.0-preview.7`). A runnable sample tour exercises appends with idempotency,
checkpoint export/import, signed checkpoints, and context-bound and keyed ledger
epochs, and runs in CI.

## Status and limits

Preview, currently targeting .NET 8. Siming is tamper-evident, not
tamper-proof: a party that can replace the whole database can recompute a
replacement chain, so detecting rewriting or rollback requires comparison with
a previously trusted checkpoint. The API may still change, and expanded
platform CI, Native AOT review, and benchmarks remain roadmap work.

---
name: Zhinu
slug: zhinu
tagline: Durable workflow execution
summary: Executes an admitted plan as durable work with retries, fencing, restart, cancellation, and recovery.
status: preview
category: core-execution
repository: https://github.com/jenolaszlo-sketch/penghou-zhinu
packages:
  - Penghou.Zhinu
  - Penghou.Zhinu.Sqlite
  - Penghou.Zhinu.Hosting
version: 0.2.0-preview.2
featured: true
order: 30
evidence:
  - label: Penghou.Zhinu on NuGet
    url: https://www.nuget.org/packages/Penghou.Zhinu
---

## The problem

If a workflow lives inside a single process and a single conversation, it
cannot survive a restart, resume after a crash in the middle of an operation,
or explain what it was doing when it failed.

## Why Penghou needs it

Zhinu is the durable engine and the unit of scheduling. It takes an admitted
plan and executes it as durable work, so the workflow — not the model — owns
retries, ordering, and recovery.

## What it makes possible

- durable execution of context, inference, activity, conditional, fan-out,
  repeat, checkpoint, wait, and return semantics;
- retries, fencing, signals, restart, cancellation, child workflows,
  compensation, loops, and persistence;
- verification of admission, definition storage, runtime identity, and
  workflow fingerprints before work is registered.

## Evidence

`Penghou.Zhinu`, `Penghou.Zhinu.Sqlite`, and `Penghou.Zhinu.Hosting` are
published on NuGet (current line `0.2.0-preview.2`). Durable tests cover crash
recovery, selective restart, focused fan-out recovery, bounded loop replay,
interaction gates, cancellation, definition drift, corrupt evidence, and
idempotent artifact publication.

## Status and limits

Preview. The durable tests establish the covered workflow behaviours; they do
not by themselves establish every coordinated-inference guarantee. Persisted
work is governed by explicit IR, compiler-semantics, and fingerprint versions.

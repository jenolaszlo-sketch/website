---
name: Qingniao
slug: qingniao
tagline: Lifecycle for one delegated unit of work
summary: Accepts one bounded delegated task, selects an authorized actor, supervises it, and publishes an immutable result with evidence.
status: prototype
category: supporting
repository: https://github.com/jenolaszlo-sketch/penghou-qingniao
packages:
  - Penghou.Qingniao
  - Penghou.Qingniao.Abstractions
version: 0.1.0-preview.4
order: 130
evidence:
  - label: Penghou.Qingniao on NuGet
    url: https://www.nuget.org/packages/Penghou.Qingniao
---

## The problem

Delegated work is more than a method call. Acceptance can be ambiguous, a
provider may expose its durable handle late, the caller can restart, budgets
can expire, and a supervisor may need to inspect or redirect work without
rewriting its history.

## Why Penghou needs it

Qingniao owns the lifecycle around exactly one delegated activity and makes
those concerns explicit, without becoming a general workflow engine, model SDK,
task queue, or session ledger.

## What it makes possible

- caller idempotency separated from provider execution identity, and
  reconnection separated from semantic re-execution;
- a small lifecycle (`Queued → Running → Completed/Failed/Cancelled/…`) with
  typed, revision-fenced supervisor interventions;
- normalized handles, receipts, artifacts, and terminal evidence from
  process, agent, A2A, model, or deterministic providers.

## Evidence

`Penghou.Qingniao` and `Penghou.Qingniao.Abstractions` are published on NuGet
as `0.1.0-preview.4`. Milestones 2.1 through 2.8 are complete, and an internal
in-memory reference coordinator proves acceptance, execution, handle
reconciliation, cancellation, waiting and resume, and the terminal outcome
matrix.

## Status and limits

Prototype. The coordinator core is an in-memory, process-local proof and not
durable production infrastructure; in-memory state does not survive restart.
The Codex CLI adapter has a recorded live proof, but repeatable protocol and
recovery coverage remains open, and mapping the proven semantics to durable
Zhinu execution is future work.

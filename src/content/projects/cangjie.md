---
name: Cangjie
slug: cangjie
tagline: A local-first, provenance-aware context store
summary: Stores explicit context with provenance and immutable snapshots so the exact input is reproducible after a restart.
status: preview
category: evidence-memory
repository: https://github.com/jenolaszlo-sketch/penghou-cangjie
packages:
  - Penghou.Cangjie
  - Penghou.Cangjie.Sqlite
  - Penghou.Cangjie.Testing
version: 0.1.0-preview.3
order: 100
evidence:
  - label: Penghou.Cangjie.Sqlite on NuGet
    url: https://www.nuget.org/packages/Penghou.Cangjie.Sqlite
---

## The problem

Context handed to a model is often assembled ad hoc and then lost. When a run
is inspected or replayed, there is no record of exactly which context was
supplied, where it came from, or why.

## Why Penghou needs it

Cangjie retains knowledge as explicit, provenance-tracked items rather than as
an opaque transcript, and it can freeze a snapshot of exactly what was used.

## What it makes possible

- explicit persistent context with scopes, tags, and relationships;
- SQLite FTS5 retrieval without a vector database or an agent framework;
- logical history and evidence tracking for each item;
- immutable snapshots that make the exact supplied context reproducible after a
  restart.

## Evidence

`Penghou.Cangjie`, `Penghou.Cangjie.Sqlite`, and `Penghou.Cangjie.Testing` are
published on NuGet as `0.1.0-preview.3`. The testing package contains a
reusable `IContextStore` conformance suite.

## Status and limits

Preview. Cangjie is intentionally local-first and embedded; it is not a
distributed memory service, and it does not invoke models or reason about
context on its own.

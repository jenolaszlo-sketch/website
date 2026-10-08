---
name: Fuwen
slug: fuwen
tagline: A typed workflow language and immutable plan format
summary: Compiles a bounded, typed workflow source into an immutable plan with exact pins for tools, prompts, and model profiles.
status: preview
category: planning
repository: https://github.com/jenolaszlo-sketch/penghou-fuwen
packages:
  - Penghou.Fuwen
  - Penghou.Fuwen.Compiler
  - Penghou.Fuwen.Zhinu
  - Penghou.Fuwen.Baize
version: 0.1.0-preview.12
featured: true
order: 20
evidence:
  - label: Penghou.Fuwen.Compiler on NuGet
    url: https://www.nuget.org/packages/Penghou.Fuwen.Compiler
---

## The problem

The parts of a workflow that affect safety, reproducibility, and replay —
input and output types, exact tool versions, capabilities, limits, and the
identity used for recovery — are usually scattered across application code and
runtime configuration. Nothing can be reviewed as a whole before it runs.

## Why Penghou needs it

Fuwen is where an agent's intent becomes an artifact. A bounded `.fuwen` source
compiles to a canonical, immutable `WorkflowPlan`. That plan is the shared
contract between planning, authority, and execution: Fuwen does not execute
work, and a plan or fingerprint is never a permission grant.

## What it makes possible

- typed inputs, outputs, bindings, schemas, enums, and artifact references
  instead of embedded code or credentials;
- exact version-and-digest pins for activities, contexts, inference profiles,
  prompts, and tools;
- capability, resource-budget, callable-effect, idempotency, and retry checks
  before anything runs;
- stable structural node identities, source maps, and execution fingerprints;
- bounded conditionals, keyed fan-out, repeat regions, checkpoints, and waits.

## Evidence

`Penghou.Fuwen.Compiler` and the core packages are published on NuGet as
`0.1.0-preview.12`. The compiler uses the same semantic validator as
programmatic plans, the canonical formatter is idempotent, and diagnostics use
stable `FWN-*` codes with UTF-8 source spans.

## Status and limits

Preview. Source syntax and public APIs may still change between preview
releases; persisted plans remain governed by their explicit IR,
canonicalization, and fingerprint versions. Coordinated model → tool → model
execution through the Fuwen/Baize adapter remains limited and experimental.

---
name: Core Contracts
slug: penghou
tagline: Neutral contracts shared across the Penghou runtime
summary: The neutral workflow, resource I/O, and model/HTTP transport contracts shared by the runtime. One repository, not the ecosystem itself.
status: preview
category: supporting
repository: https://github.com/jenolaszlo-sketch/penghou
packages:
  - Penghou.Workflow.Abstractions
  - Penghou.IO.Abstractions
  - Penghou.Model.Abstractions
version: 0.1.0-preview.2
order: 120
evidence:
  - label: Penghou.Workflow.Abstractions on NuGet
    url: https://www.nuget.org/packages/Penghou.Workflow.Abstractions
---

## The problem

When each implementation defines its own interfaces, a workflow engine and an
authority system become welded together. Replacing one means replacing the
other.

## Why Penghou needs it

The core repository owns domain-named, replaceable contracts such as
`Penghou.Workflow.Abstractions`, `Penghou.IO.Abstractions`, and
`Penghou.Model.Abstractions`. Implementations consume these contracts, so
Zhinu can execute workflows and Hufu can authorize them without either knowing
the other's internals.

## What it makes possible

- `Penghou.Workflow.Abstractions`: immutable execution identity, context,
  requirement and result values, and the `IExecutionAuthorizer` seam, with no
  dependency on IO, Zhinu, or Hufu;
- `Penghou.IO.Abstractions`: bounded resource capabilities with explicit,
  host-supplied authorization at each resource boundary;
- `Penghou.Model.Abstractions` and `Penghou.Http.Abstractions`: product-neutral
  model and HTTP transport seams that carry typed data and usage without
  provider SDKs.

## Evidence

`Penghou.Workflow.Abstractions` `0.1.0-preview.2` is published and qualified.
`Penghou.IO.Abstractions` and `Penghou.Model.Abstractions` are published as
`0.1.0-preview.1`. CI tests the contracts on .NET 8/10 and Linux/Windows,
inspects the packages, and proves package-only consumption.

## Status and limits

Preview. These are contracts: the repository ships no engine, policy evaluator,
or default authorizer. Qualifying a contract boundary does not prove consumer
authority, credential containment, or network isolation.

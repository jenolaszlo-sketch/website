---
name: Guihua
slug: guihua
tagline: Planning and workflow evolution for Fuwen workflows
summary: The planning kernel that proposes and revises Fuwen workflows, keeping adaptive authoring separate from durable execution.
status: preview
category: planning
repository: https://github.com/jenolaszlo-sketch/penghou-guihua
packages:
  - Penghou.Guihua
  - Penghou.Guihua.Baize
  - Penghou.Guihua.Zhinu
version: 0.1.0-preview.2
featured: true
order: 10
evidence:
  - label: Guihua on NuGet
    url: https://www.nuget.org/packages/Penghou.Guihua
---

## The problem

If the same model that decides what to do also owns the schedule, the
permissions, and the record, then reliability depends on the least predictable
part of the system. Planning has to be able to change without destabilising
execution.

## Why Penghou needs it

Guihua keeps "what should happen" separate from "what actually happens". A plan
can be proposed, reviewed, and revised while durable execution, authority, and
evidence remain where they were.

## What it makes possible

- model-backed workflow authoring and decision-making, isolated from execution;
- structured plan mutation with validation and provenance;
- revisions applied to the parts of a workflow that have not run yet, over
  **Zhinu** workflows.

## Evidence

The `Penghou.Guihua`, `Penghou.Guihua.Baize`, and `Penghou.Guihua.Zhinu`
packages share the `0.1.0-preview.2` line. `Penghou.Guihua` depends only on
`Penghou.Fuwen`, and a runnable sample walks through design, patch, and
catalogue.

## Status and limits

Preview. The planning kernel is early and moves with Fuwen's plan identity and
admission model. Hufu integration is planned and not implemented, and several
capabilities (such as using a bounded WhatIf report to inform proposals) are
explicitly deferred in the roadmap.

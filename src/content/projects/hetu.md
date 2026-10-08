---
name: Hetu
slug: hetu
tagline: An embedded code knowledge graph
summary: Turns source repositories into a normalized, queryable graph for repository understanding and impact analysis.
status: preview
category: evidence-memory
repository: https://github.com/jenolaszlo-sketch/penghou-hetu
packages:
  - Penghou.Hetu
  - Penghou.Hetu.CSharp
  - Penghou.Hetu.LatticeDb
  - Penghou.Hetu.TreeSitter
version: 0.2.0-preview.6
order: 110
evidence:
  - label: Penghou.Hetu on NuGet
    url: https://www.nuget.org/packages/Penghou.Hetu
---

## The problem

Giving a model useful code context requires facts about repositories:
dependencies, declarations, and what a change would affect. That work should
not depend on one language or one parser.

## Why Penghou needs it

Hetu supplies code facts as a normalized graph. It defines what code means in
the graph; language plugins define how those facts are discovered, so a
consumer can select context and reason about impact without embedding a parser.

## What it makes possible

- a language-neutral graph with a Roslyn-based C# extractor and a Tree-sitter
  structural plugin;
- deterministic, bounded queries and graph traversal;
- run-scoped atomic publication with repository and index-run manifests;
- a reusable provider conformance suite for durable graph stores.

## Evidence

`Penghou.Hetu` and plugin packages are published on NuGet (current line
`0.2.0-preview.6`). A working preview runtime, the C# extractor, a durable
LatticeDB provider, and the shared conformance suite are implemented.

## Status and limits

Preview. The API remains preview-quality and is built for .NET 10. Multiple
semantic milestones and the first-release invariants remain on the roadmap, and
a grammar-driven plugin generator is intentionally outside the first milestone.

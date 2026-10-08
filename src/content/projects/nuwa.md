---
name: Nuwa
slug: nuwa
tagline: Repairs malformed model output into valid structured data
summary: A schema-aware repair pipeline that recovers structured output and tool-call arguments instead of failing.
status: stable
category: model-access
repository: https://github.com/jenolaszlo-sketch/penghou-nuwa
packages:
  - Penghou.Nuwa
  - Penghou.Nuwa.Extensions.AI
version: 1.0.0
order: 70
evidence:
  - label: Penghou.Nuwa on NuGet
    url: https://www.nuget.org/packages/Penghou.Nuwa
---

## The problem

Models return almost-valid JSON: Markdown fences, truncated tool arguments,
unescaped quotes inside file contents, single quotes, Python literals, and
JSON that is valid but the wrong shape. A strict parser fails on all of them.

## Why Penghou needs it

Each failure becomes a lost step in a workflow. Nuwa recovers that output into
a `System.Text.Json` document instead of throwing, which keeps an activity from
failing on formatting rather than on meaning.

## What it makes possible

- repair of malformed, truncated, and valid-but-wrong-shaped JSON;
- schema-aware recovery with limits on input, output, depth, and corrections;
- reuse as `Microsoft.Extensions.AI` middleware for structured responses and
  tool-call arguments.

## Evidence

`Penghou.Nuwa` and `Penghou.Nuwa.Extensions.AI` are released at `1.0.0` on
NuGet. The repository documents the failure modes it handles and the repair
strategies, and Baize consumes Nuwa's stable repair contract behind its own
normalization.

## Status and limits

Stable (1.0.0, stable contract). Repair recovers useful values from malformed
output; it does not turn an unreliable provider into a reliable one, and final
schema validation still belongs to the consumer.

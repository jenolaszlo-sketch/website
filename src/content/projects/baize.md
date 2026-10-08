---
name: Baize
slug: baize
tagline: Provider-neutral model access and routing
summary: A provider-agnostic client and routing layer for chat, tools, streaming, batch, and generation across model vendors.
status: preview
category: model-access
repository: https://github.com/jenolaszlo-sketch/penghou-baize
packages:
  - Penghou.Baize
  - Penghou.Baize.OpenAi
version: 0.3.0-preview.7
featured: true
order: 60
evidence:
  - label: Penghou.Baize on NuGet
    url: https://www.nuget.org/packages/Penghou.Baize
---

## The problem

Workflows that call models directly become bound to one vendor's SDK, types,
and failure modes. Swapping providers, or reasoning about usage and provenance
after the fact, becomes a rewrite rather than a configuration change.

## Why Penghou needs it

Baize keeps models replaceable. It is a provider-agnostic client and routing
layer for .NET that presents a stable chat model across OpenAI-compatible
endpoints, Anthropic Claude, Ollama, and Google Gemini, plus a provider-neutral
artifact-generation lifecycle. Provider SDK types do not leak into
applications, and a model call is one kind of activity inside execution rather
than the architecture itself.

## What it makes possible

- streaming, tool calling, multimodal input, native batch execution, and
  generation behind small Baize-owned contracts;
- routing and endpoint selection without vendor lock-in;
- recorded provider, model, usage, timing, and publication evidence;
- structured-output repair through `Penghou.Nuwa` behind Baize's own
  normalization and diagnostics.

## Evidence

`Penghou.Baize` and provider packages are published on NuGet as
`0.3.0-preview.7`, with runnable quick-start and best-of-N samples in the
repository.

## Status and limits

Preview. The published line implements the chat-first governable-transport
milestone; batch and artifact-generation semantic admission and full closure
remain on the roadmap. Experience-informed routing is documented as a future
evidence seam, not an active automatic policy. A production claim still
requires hard pre-call resource enforcement and complete ambiguous-call
recovery.

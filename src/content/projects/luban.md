---
name: Luban
slug: luban
tagline: A parked command language for typed effects
summary: A command language for expressing authorized operations, parked so that authority stays independent of syntax.
status: parked
category: parked
repository: https://github.com/jenolaszlo-sketch/penghou-luban
packages:
  - Penghou.Luban
version: 0.1.0-preview.1
order: 200
evidence:
  - label: Fuwen ADR 0012
    url: https://github.com/jenolaszlo-sketch/penghou-fuwen/blob/main/docs/decisions/0012-defer-luban-decouple-hufu-from-command-language.md
---

## What it was

Luban explored expressing authorized operations through a dedicated command
language, with typed effects and preflight checks over a whole pipeline. It was
intended to sit near the authority layer.

## Why it is parked

Coupling authority to command syntax created a liability: authority semantics
would be entangled with a parser, and every consumer would need to understand
that syntax before it could reason about what was permitted. Parked on
2026-10-06, with Hufu decoupled from the command language.

## What happens now

Nothing in Hufu, Fuwen, Zhinu, Gagamba, or Baize depends on Luban, and new
feature development is stopped. Authority is expressed through product-neutral
workflow contracts and bound at admission instead. The repository is retained
as-is, and a `0.1.0-preview.1` package exists on NuGet.

## Evidence

The decision is recorded in Fuwen ADR 0012, which is linked above.

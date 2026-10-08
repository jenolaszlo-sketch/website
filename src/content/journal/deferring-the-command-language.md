---
title: Deferring the command language to keep authority out of syntax
description: Why Penghou.Luban was parked and Hufu was decoupled from a command language.
date: 2026-10-06
projects:
  - luban
  - hufu
tags:
  - authority
  - scope
  - architecture
evidence:
  - label: Fuwen ADR 0012
    url: https://github.com/jenolaszlo-sketch/penghou-fuwen/blob/main/docs/decisions/0012-defer-luban-decouple-hufu-from-command-language.md
  - label: Penghou.Luban repository
    url: https://github.com/jenolaszlo-sketch/penghou-luban
---

## Problem

An early direction expressed authorized operations through a dedicated command
language, Penghou.Luban. As the authority layer matured, coupling authority to
command syntax became a liability: authority semantics would be entangled with
a parser, and every consumer would need to understand that syntax before it
could reason about what was permitted.

## Decision

Penghou.Luban was parked on 2026-10-06 and Hufu was decoupled from the command
language. Nothing in Hufu, Fuwen, Zhinu, Gagamba, or Baize depends on it.

Authority is instead expressed through product-neutral workflow contracts and
bound at admission, independently of any source syntax.

## Consequences

The surface area is smaller and the authority boundary is easier to inspect. A
command language may be revisited later if a concrete requirement justifies the
coupling, but it will not be a prerequisite for enforcing authority.

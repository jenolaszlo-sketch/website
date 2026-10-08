---
name: Hufu
slug: hufu
tagline: Independent authorization for workflow execution
summary: Binds authority to exact execution identity so that a plan can never grant itself permission.
status: preview
category: authority-sandbox
repository: https://github.com/jenolaszlo-sketch/penghou-hufu
packages:
  - Penghou.Hufu
  - Penghou.Hufu.Luban.Sqlite
version: 0.1.0-preview.5
featured: true
order: 40
evidence:
  - label: Public-package qualification
    url: https://github.com/jenolaszlo-sketch/penghou-hufu/blob/main/docs/qualification/hufu-luban-v2-public-release.json
---

## The problem

"When a plan can activate its own effects, a clever or compromised reasoning
step can escalate beyond what the system intended. Permission and intent need
to be separated."

## Why Penghou needs it

Hufu is the authority layer. It keeps the power to act separate from the plan
that describes the work. A compiled plan or execution fingerprint proves
identity and lineage; it never grants capabilities or activates work on its
own.

## What it makes possible

- requirements, grants, envelopes, approval requests and decisions, delegation
  attenuation, revocation, and durable authority state;
- an optional Hufu/Zhinu adapter that commits authority validation, runtime
  acquisition, and required start evidence in one shared-file transaction;
- policy evaluation through `Penghou.Hufu.Cedar`, backed by Cedar, kept
  independent of the core packages.

## Evidence

Hufu packages are published on NuGet (current line `0.1.0-preview.5`),
including `Penghou.Hufu` and `Penghou.Hufu.Luban.Sqlite`. Three-platform CI and
publication, exact package contents, and fresh NuGet-only consumers pass in the
public-package qualification recorded in the repository.

## Status and limits

Preview. Hosts still supply identity, policy, resource resolution, credentials,
and approval UI. Hufu does not own workflow scheduling, execution recovery, or
budget accounting, and broader host lifecycles, delegation, and reusable
conformance helpers remain roadmap work. The local SQLite authority store is an
optional, narrow prototype rather than a complete issuance service.

---
title: Cross-platform sandbox conformance
kind: validated
category: sandbox
summary: Three native providers implement one frozen SPI and are validated against a shared cross-platform conformance matrix.
projects:
  - gagamba
links:
  - label: Gagamba repository
    url: https://github.com/jenolaszlo-sketch/gagamba
  - label: Gagamba.Execution on NuGet
    url: https://www.nuget.org/packages/Gagamba.Execution
order: 20
---

Windows Job Objects, Linux cgroup v2, and macOS launchd implement one
`IExecutionProvider` SPI, checked by the same conformance matrix. The research
status is deliberate: the Windows launch engine still carries red legs pending
engine findings.

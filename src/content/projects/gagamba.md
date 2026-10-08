---
name: Gagamba
slug: gagamba
tagline: Cross-platform execution sandbox
summary: A standalone .NET sandbox that runs least-authority work in isolated, platform-native process trees.
status: prototype
category: authority-sandbox
repository: https://github.com/jenolaszlo-sketch/gagamba
packages:
  - Gagamba.Execution
  - Gagamba.Runtime
version: 0.1.0-preview.4
featured: true
order: 50
evidence:
  - label: Gagamba.Execution on NuGet
    url: https://www.nuget.org/packages/Gagamba.Execution
---

## The problem

Running untrusted or least-authority work means owning process trees, resource
limits, and termination correctly on each operating system. Getting that wrong
either leaks processes or grants too much.

## Why Penghou needs it

Gagamba is the sandbox layer. It gives Penghou — and any other host — a way to
run isolated work with clear resource boundaries, deliberately as a standalone
library rather than a Penghou-specific component.

## What it makes possible

- one frozen `IExecutionProvider` SPI with three native providers: Windows Job
  Objects, Linux cgroup v2, and macOS launchd;
- a shared cross-platform conformance matrix that validates each provider
  against the same contract;
- a requirement-driven `ExecutionRuntime` above the providers.

## Evidence

The execution packages are published on NuGet as `0.1.0-preview.4`. The
repository carries the cross-platform conformance matrix and a handoff document
describing the current work queue.

## Status and limits

Prototype, and deliberately described as such by the project: research and
prototyping with a working execution substrate. The Windows launch engine still
carries deliberately red legs pending engine findings, so the platform matrix
is not yet uniformly green.

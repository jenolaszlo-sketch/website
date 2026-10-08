---
date: 2026-10-05
title: Cross-platform sandbox substrate working in Gagamba
projects:
  - gagamba
category: qualification
summary: Three native providers (Windows Job Objects, Linux cgroup v2, macOS launchd) implement one frozen IExecutionProvider SPI, validated by a shared conformance matrix.
evidence:
  - label: Gagamba repository
    url: https://github.com/jenolaszlo-sketch/gagamba
---

Gagamba reached a working execution substrate with cross-platform conformance.
The Windows launch engine still carries deliberately red legs pending engine
findings.

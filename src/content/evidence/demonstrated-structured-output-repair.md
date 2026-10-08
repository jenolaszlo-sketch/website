---
title: Structured-output repair
kind: demonstrated
summary: Nuwa recovers malformed and wrong-shaped model output into valid structured data, released at 1.0.0.
projects:
  - nuwa
links:
  - label: Penghou.Nuwa repository
    url: https://github.com/jenolaszlo-sketch/penghou-nuwa
  - label: Penghou.Nuwa on NuGet
    url: https://www.nuget.org/packages/Penghou.Nuwa
order: 30
---

The repair pipeline addresses unescaped quotes, truncated tool arguments,
Markdown fences, template literals, single quotes, Python literals, missing
brackets, and JSON that is valid but rejected by a strict consumer.

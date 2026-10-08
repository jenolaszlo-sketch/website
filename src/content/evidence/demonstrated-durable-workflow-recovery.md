---
title: Durable workflow recovery
kind: demonstrated
summary: Zhinu's durable tests exercise crash recovery, restart, cancellation, and replay in the repository.
projects:
  - zhinu
links:
  - label: Penghou.Zhinu repository
    url: https://github.com/jenolaszlo-sketch/penghou-zhinu
  - label: Published-package adoption
    url: https://github.com/jenolaszlo-sketch/penghou-zhinu/blob/main/docs/workflow-package-adoption.md
order: 10
---

The durable test suite covers crash recovery, selective restart, focused
fan-out recovery, bounded loop replay, interaction gates, cancellation,
definition drift, corrupt evidence, and idempotent artifact publication. These
tests establish the covered behaviours; they do not claim every
coordinated-inference guarantee.

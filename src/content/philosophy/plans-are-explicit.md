---
title: Plans are explicit and inspectable.
summary: The contract that affects safety, reproducibility, and replay is written down, typed, and reviewable before anything runs.
order: 30
---

Types, bindings, exact tool versions, capabilities, limits, and the identity used
for recovery are often scattered across application code and runtime
configuration. Penghou puts those declarations into one bounded source contract
that compiles to an immutable plan.

A plan is a description of intended work. It is not authorization, and it is not
proof that work occurred. It is something a reviewer can read and reason about —
and that is the point.

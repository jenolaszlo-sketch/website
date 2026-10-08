---
title: Models reason; infrastructure governs execution.
summary: A model can reason and adapt, but the system — not the model — decides what may run, how far it may go, and what must survive a crash.
order: 10
---

A probabilistic model is useful precisely because it can produce a different
answer each time. That is a poor basis for durability, authority, or
reproducibility. Penghou treats reasoning as one participant in a system and
keeps execution, authority, durability, sandboxing, and evidence under explicit
system control.

This is an architectural choice, not a claim about how capable models are.
Reasoning is allowed to be flexible; the guarantees around it are not.

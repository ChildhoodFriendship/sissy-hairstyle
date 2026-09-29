---
title: Token usage — Efficient agent workflow
created: 2026-09-24
updated: 2026-09-24
type: policy
tags: [guidance, token-usage, workflow, performance]
project: tmacs-webapp
status: active
confidence: high
sources: [SCHEMA.md, agents.md, index.md, package.json]
---

# Token usage — Efficient agent workflow

This page defines how agents should spend context in this repository. The objective is not to read less at any cost; it is to read the smallest evidence set that can support a correct change.

## Orientation budget

Start with the compact project map:

1. `SCHEMA.md`
2. `index.md`
3. `current-status.md`
4. the last 20-30 lines of `log.md`
5. `git status --short --branch`

Do not dump the whole repository or `node_modules` into context. Use the map to choose one or two relevant wiki pages and then the source symbols they reference.

## Investigation rules

- Search for a symbol, route, endpoint, or component name before opening files.
- Read bounded ranges with `read_file`; large files such as `synoptic.component.ts` must be paged around the relevant symbol.
- Trace definition → callers → types/contracts. Stop when the behavior and acceptance condition are clear.
- Batch independent searches and reads in one tool turn.
- Use programmatic summaries for repetitive data: file inventories, roadmap rows, endpoint lists, and diagnostics.
- Prefer one authoritative source over repeatedly rereading paraphrases.
- When a finding is durable, write it to the appropriate wiki page with a source path so later agents do not pay the rediscovery cost.
- Never paste secrets or large generated files into the conversation or wiki.

## Task sizing

| Task | Read first | Stop reading when |
|---|---|---|
| Small fix | status, index, target file, direct callers | the root cause and one verification path are known |
| Module change | status, module page, component/service files, shared types | data flow and module boundary are clear |
| Cross-cutting change | status, architecture, all affected API/type symbols | every affected boundary has an explicit acceptance check |
| Broad audit | status, roadmap, targeted searches, scripted inventory | the result is represented as a table with evidence |

## Context compression pattern

At the end of each investigation, keep a short internal summary with:

- facts and their source paths;
- assumptions and their confidence;
- files that must change;
- files intentionally not changed;
- commands still required for verification.

For handoffs, use the format in [[agent-guide.md|agent guide]] instead of forwarding raw tool output. Link to [[current-status.md|current status]] when the result changes milestone confidence.

## Avoidable waste

- Re-reading `package.json` after the dependency question is settled.
- Reading generated `dist/` output to understand source behavior.
- Searching `node_modules` for application symbols.
- Opening every module when the task names one component.
- Repeating the same failed patch instead of re-reading the current file.
- Claiming completion from a build alone when the behavior requires a live backend.

## Definition of efficient completion

An agent is done when the smallest relevant source change is applied, the relevant verification has run, the wiki records durable knowledge, and the next agent can find the evidence from [[index.md|the index]] without replaying the entire investigation. The navigation entry is [[index.md|the wiki index]].

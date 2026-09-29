# LLM Wiki — Coding Project Template

A lightweight, interlinked Markdown knowledge base for a real software project. It works in Obsidian, VS Code, or any editor and is intended for both human maintainers and coding agents.

## Start here

1. Read [`SCHEMA.md`](SCHEMA.md) for naming, frontmatter, evidence, and maintenance rules.
2. Read [`index.md`](index.md) to find the project, architecture, modules, APIs, decisions, and runbooks.
3. Read the relevant project page in `projects/` before inspecting detailed pages.
4. Read the latest entries in [`log.md`](log.md) for recent structural or verification changes.
5. Read source files and build/deployment configuration before documenting behavior.

## Use it

1. Copy this directory into a repository as `wiki/`, or keep it as a separate vault.
2. Create `projects/<project-slug>.md` from `templates/project.md`.
3. Add only durable knowledge: architecture, modules/APIs, decisions, bugs, concepts, and repeatable runbooks.
4. Keep `index.md` and `log.md` synchronized with every page addition or substantive change.
5. Record evidence and verification commands; mark external or inferred facts with an appropriate confidence level.
6. Never put secrets, tokens, passwords, private keys, or customer configuration in the wiki.

## Structure

- `projects/` — project purpose, repository shape, commands, constraints, and evidence.
- `architecture/` — system composition, runtime flow, boundaries, and failure modes.
- `modules/` — important modules, services, APIs, integrations, and data contracts.
- `decisions/` — durable architectural decision records.
- `runbooks/` — repeatable development, deployment, and troubleshooting procedures.
- `bugs/` — durable bug diagnoses and verified fixes, not temporary task notes.
- `raw/` — immutable source captures; do not edit captured sources after ingestion.
- `templates/` — page templates for future entries.

## Source precedence

When sources disagree, prefer current executable source and configuration verified by execution, then build/runtime evidence, explicit project documentation, and finally wiki statements or agent inference. Treat sibling libraries, external services, deployment environments, and generated artifacts as boundaries unless this repository verifies their behavior.

## Suggested first pages

- `projects/<project-slug>.md`
- `architecture/<system-slug>.md`
- `modules/<module-slug>.md`
- `runbooks/<workflow-slug>.md`

Preserve exact route names, class names, JSON keys, configuration keys, and command names. Do not infer database schemas, enum meanings, permissions, or deployment contracts from names alone.

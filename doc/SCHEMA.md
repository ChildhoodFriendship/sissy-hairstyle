# Coding Project Wiki Schema

## Purpose

A durable, searchable knowledge base for one or more software projects. Keep verified facts, architecture, modules/APIs, data contracts, decisions, workflows, operational procedures, and durable debugging knowledge here so future contributors and coding agents do not need to rediscover context.

## Conventions

- File names are lowercase, hyphen-separated, and contain no spaces.
- Every content page starts with YAML frontmatter and is listed in `index.md`.
- Use `[[wikilinks]]`; give pages useful outbound links when related pages exist.
- Update `updated` whenever a page changes.
- Append every structural or substantive content action to `log.md`.
- Prefer repository-relative source paths, line ranges, commits, issues, tests, logs, and official documentation.
- Never store secrets, tokens, passwords, private keys, certificates, or customer configuration.
- Keep temporary task notes out of durable pages unless they change project knowledge.
- Keep pages below approximately 200 lines; split deep dives when necessary.

## Frontmatter

```yaml
---
title: Page title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: project | architecture | module | api | decision | workflow | bug | runbook | concept | query
tags: [project, architecture]
project: project-slug
status: active | superseded | resolved | open | archived
confidence: high | medium | low
sources: [repository-relative/path, https://example.invalid/docs]
---
```

Use `type: api` for a standalone interface page and `type: module` for a module or service page. Use `type: concept` for a durable domain concept or cross-cutting contract, and `type: query` for a maintained investigation or index page.

## Confidence semantics

`confidence` describes the evidence quality of the weakest important claim on the page; it is not a guarantee that the application works in production.

- `high` — directly confirmed by current source/configuration and, where relevant, a successful command or explicit repository evidence.
- `medium` — supported by source or planning evidence, but runtime behavior, permissions, external services, or a complete user flow is not fully verified.
- `low` — inferred, stale, contradictory, or dependent on missing evidence. State what would verify it.

Preserve contradictions instead of silently choosing a convenient claim. Link both pieces of evidence and lower confidence when needed.

## Tag taxonomy

- `project`, `architecture`, `module`, `api`, `database`, `deployment`
- `decision`, `workflow`, `testing`, `debugging`, `performance`, `security`
- `bug`, `runbook`, `dependency`, `integration`, `legacy`, `query`
- `concept`, `documentation`

Add a tag here before using it.

## Page rules

- Create pages for a project, important module/service or API, non-obvious integration, durable bug diagnosis, operational procedure, domain concept, or architectural decision.
- Do not create pages for trivial implementation details or information already obvious from nearby source code.
- Document repository-owned behavior separately from sibling libraries, runtime services, generated artifacts, and deployment-specific configuration.
- Mark unresolved boundaries as an open question or source gap rather than guessing.

## Source precedence

When sources disagree, use this order:

1. Current executable source and configuration, verified by execution where relevant.
2. Build/lint/test output and runtime evidence.
3. DTOs, mappers, serializers, and checked-in generated specifications.
4. Explicit project and deployment documentation.
5. Existing wiki prose or maintainer context.
6. Agent inference, which must be labeled and never presented as fact.

Do not infer external database schemas, enum meanings, authorization rules, rate limits, deployment contracts, or sibling-library behavior from identifiers alone.

## Source references and maintenance

Use exact paths and identifiers, for example:

- `source: src/main/java/.../ManagerBean.java:62-101`
- `verified_by: ./gradlew test`
- `commit: e19073e`

When adding or updating a page:

1. Check `index.md` for an existing page and search for related terms.
2. Read the relevant source, configuration, and tests.
3. Update the page and its useful links.
4. Update `index.md` and append a concise entry to `log.md`.
5. If behavior changed, include verification evidence and state any blocked checks honestly.

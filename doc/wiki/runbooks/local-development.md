---
title: Runbook — Sviluppo locale
created: 2026-10-06
updated: 2026-10-06
type: runbook
tags: [runbook, workflow, testing]
project: sissy-hairstyle
status: active
confidence: high
sources: [package.json, angular.json, current-status.md]
---

# Runbook — Sviluppo locale

## Quando usarlo

Per installare dipendenze, avviare la landing e verificare una modifica.

## Precondizioni

- Node/npm compatibili con `package-lock.json`.
- Working tree controllato con `git status`.
- Nessun segreto necessario per la baseline locale.

## Procedura

1. Eseguire `npm ci`.
2. Avviare `npm start`.
3. Aprire `http://localhost:4200/`.
4. Per verifica automatica eseguire `npm run test -- --watch=false --browsers=ChromeHeadless`.
5. Per verifica production/SSR eseguire `npm run build`.
6. Se il comportamento è visuale, fare smoke test manuale desktop/mobile.

## Verifica

Controllare landing, filtri, ancore, validazione HTML del form e messaggio locale. Per SSR verificare l'output generato in `dist/sissy-hairstyle` senza modificare gli artefatti nel commit.

## Recovery

Se `npm ci` o build falliscono, conservare l'errore completo, controllare versione Node/npm e non alterare lockfile o configurazioni senza evidenza. Non esiste una procedura di rollback deploy documentata.

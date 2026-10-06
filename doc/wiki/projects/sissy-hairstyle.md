---
title: Progetto Sissy Hairstyle
created: 2026-10-06
updated: 2026-10-06
type: project
tags: [project, deployment, integration]
project: sissy-hairstyle
status: active
confidence: high
sources: [package.json, angular.json, src/index.html, src/main.ts, src/main.server.ts, src/server.ts]
---

# Progetto Sissy Hairstyle

## Scopo

Sito vetrina editoriale in italiano per presentare look, metodo e contatti del salone Sissy Hairstyle ad Arzergrande.

## Repository e comandi

- Root repository: `.`
- Branch di lavoro: `hermes/<task>`; non lavorare direttamente su `main`.
- Installazione: `npm ci`.
- Sviluppo: `npm start` / `ng serve`.
- Test: `npm run test -- --watch=false --browsers=ChromeHeadless`.
- Build: `npm run build`.
- SSR: `node dist/sissy-hairstyle/server/server.mjs`, dopo build.

## Forma del sistema

- Entry browser: `src/main.ts`.
- Entry server: `src/main.server.ts`, `src/server.ts`.
- Root UI: `src/app/app.component.*`.
- Router: `src/app/app.routes.ts`, attualmente senza route.
- Asset: `public/`; stile globale: `src/styles.css`.
- Build application Angular con SSR e prerendering in `angular.json`.

## Identità verificata

- Nome: Sissy Hairstyle.
- Località: Arzergrande, Via Roma 52.
- Formula: si riceve su appuntamento.
- Lingua: italiano.

## Integrazioni e limiti

- Nessun backend, autenticazione, API o persistenza.
- Form contatti locale, senza invio dati.
- Immagini Unsplash e font Google remoti e temporanei.
- Deploy e rollback non documentabili dal repository corrente.

## Pagine correlate

- [[architecture/system-architecture.md|Architettura]]
- [[modules/component-catalog.md|Catalogo componenti]]
- [[runbooks/local-development.md|Sviluppo locale]]

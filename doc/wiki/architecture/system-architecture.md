---
title: Architettura di sistema
created: 2026-10-06
updated: 2026-10-06
type: architecture
tags: [architecture, integration, testing]
project: sissy-hairstyle
status: active
confidence: high
sources: [src/main.ts, src/main.server.ts, src/app/app.config.ts, src/app/app.config.server.ts, src/server.ts, angular.json]
---

# Architettura di sistema

## Componenti

| Componente | Responsabilità | Confine |
|---|---|---|
| `AppComponent` | Landing, contenuti statici, filtro e form demo | Nessun backend |
| Angular bootstrap | Inizializza app standalone, router e hydration | Browser |
| `CommonEngine`/Express | Serve asset e renderizza SSR | Server Node |
| `public/` | Asset copiati nel build | Statico |

## Flusso runtime

1. `src/main.ts` esegue `bootstrapApplication(AppComponent, appConfig)`.
2. `app.config.ts` configura zone coalescing, router e client hydration/event replay.
3. Il template root rende hero, galleria, metodo, contatti e footer.
4. Il filtro aggiorna `activeCategory`; il submit aggiorna `sent` senza rete.
5. In SSR, `main.server.ts` usa `app.config.server.ts`; `server.ts` combina static serving e `CommonEngine`.

## Confini e failure modes

- Font e immagini remote possono fallire o rallentare senza bloccare il modello dati locale.
- Il form non può confermare una consegna reale perché manca un provider.
- Il rendering server deve evitare API browser-only nel percorso iniziale.
- Il comportamento visuale richiede verifica browser, non solo compilazione.

## Sicurezza

Non sono presenti autenticazione, segreti, API o dati persistenti. Non aggiungere valori sensibili a codice, environment di esempio o wiki.

## Pagine correlate

- [[projects/sissy-hairstyle.md|Progetto]]
- [[modules/component-catalog.md|Catalogo componenti]]
- [[runbooks/local-development.md|Sviluppo locale]]

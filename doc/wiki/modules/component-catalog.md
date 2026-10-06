---
title: Catalogo componenti
created: 2026-10-06
updated: 2026-10-06
type: module
tags: [module, architecture, integration]
project: sissy-hairstyle
status: active
confidence: high
sources: [src/app/app.component.ts, src/app/app.component.html, src/app/app.component.css, src/styles.css, src/server.ts]
---

# Catalogo componenti

| Modulo | Scopo | Input/stato | Output/effetti | Vincoli |
|---|---|---|---|---|
| `AppComponent` | Shell unica della landing | `categories`, `looks`, `activeCategory`, `sent` | Template, filtro locale, stato successo | standalone, SSR-safe |
| Header | Branding e ancore | Copy statico | Scroll a sezioni | Nessun router dinamico |
| Hero | Presentazione e CTA | Copy e immagine remota | Link alla galleria | Asset temporaneo |
| Galleria | Mostra look filtrabili | Array `looks`, categoria attiva | `setCategory()` e lista filtrata | Nessuna persistenza |
| Metodo | Presenta valori del salone | Copy statico | Contenuto editoriale | Nessuna integrazione |
| Contact form | Raccolta dimostrativa | Input HTML `name`, `email`, `message` | `preventDefault()` e `sent.set(true)` | Nessun invio/provider |
| SSR server | Static serving e render | `PORT`, request Express | HTML SSR | Nessuna API |
| CSS globale/app | Token, layout, animazioni | Custom properties e media query | Tema responsive | Google Fonts remoto |

## Contratti locali

- Look: `title`, `category`, `type`, `image`, `className`.
- Categoria: `Tutti`, `Raccolti`, `Mossi`, `Corti`.
- Il modello form non viene serializzato né inviato.

## Verifica e gap

La presenza del codice è verificata; non sono ancora verificati browser cross-device, performance di asset remoti o integrazione contatti.

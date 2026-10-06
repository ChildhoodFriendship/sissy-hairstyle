---
title: Guida operativa per agenti
created: 2026-10-06
updated: 2026-10-06
type: guidance
tags: [guidance, workflow, security, testing]
project: sissy-hairstyle
status: active
confidence: high
sources: [SCHEMA.md, current-status.md, package.json, angular.json]
---

# Guida operativa per agenti

## Preflight repository

Prima di modificare la repo:

1. Eseguire `git status`.
2. Se ci sono modifiche locali non committate, fermarsi e comunicarlo.
3. Se il working tree è pulito, eseguire `git fetch` e `git pull --ff-only` sul branch corrente.
4. Se pull fallisce o i branch sono divergenti, mostrare lo stato e attendere; non risolvere autonomamente.
5. Lavorare su un branch `hermes/<task>`, mai direttamente su `main`.

Un'autorizzazione esplicita del maintainer può modificare il blocco del punto 2 solo per quell'operazione. Non committare o pushare senza richiesta esplicita.

## Orientamento e ambito

1. Leggere `SCHEMA.md`, `index.md`, `current-status.md` e le ultime 20–30 righe di `log.md`.
2. Cercare simboli e usi prima di aprire file estesi.
3. Leggere manifest, configurazione, sorgente e test pertinenti.
4. Definire outcome, scope, vincoli e acceptance check prima di modificare.
5. Trattare il diff preesistente come appartenente all'utente.

Eseguire richieste operative per default, applicando la patch minima. Chiedere chiarimenti solo se l'ambiguità cambia file o comportamento. Per UI distinguere modifiche visuali, behavior-preserving e behavior-changing.

## Regole tecniche

- Preservare Angular standalone, SSR/prerendering, hydration, responsive design e accessibilità.
- Mantenere copy e interfaccia in italiano.
- Preferire `signal` per stato UI locale e una sola fonte di verità.
- Non introdurre librerie UI o provider esterni senza requisito verificato.
- Il form contatti è demo: non inventare endpoint o persistenza.
- Le immagini Unsplash sono temporanee; non presentarle come asset proprietari.
- Mantenere `prefers-reduced-motion`.
- Usare `camelCase` per codice frontend; preservare nomi esterni solo quando appartengono a un contratto verificato.
- Esplicitare l'access modifier di metodi e membri quando compatibile con lo stile Angular.
- Mettere ogni nuovo child component in una sottocartella dedicata.
- Prima di aggiungere una funzione cercare un equivalente ed evitare due percorsi canonici.
- Non copiare segreti, credenziali o endpoint privati nella wiki o nel codice.

## Verifica e handoff

Eseguire i controlli pertinenti, separatamente:

```bash
npm run test -- --watch=false --browsers=ChromeHeadless
npm run build
git diff --check
git status --short --branch
```

Per UI, fare anche smoke test browser quando disponibile. Un build riuscito non prova correttezza visuale, rete o invio form.

Il report finale contiene solo:

- **Changed:** file e comportamento modificati;
- **Verified:** comandi e risultati reali;
- **Blocked/remaining:** warning, limiti e controlli manuali ancora necessari.

## Manutenzione wiki

Aggiornare pagina di progetto, modulo, runbook o stato quando cambia conoscenza durevole; aggiornare indice e log; abbassare confidence o aprire una lacuna se la verifica manca. Non inserire conversazioni o diario temporaneo.

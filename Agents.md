# Istruzioni per agenti — Sissy Hairstyle

La fonte documentale del progetto è [`doc/wiki/`](doc/wiki/index.md). Prima di modificare codice o documentazione, leggere almeno:

1. [`doc/wiki/SCHEMA.md`](doc/wiki/SCHEMA.md)
2. [`doc/wiki/index.md`](doc/wiki/index.md)
3. [`doc/wiki/current-status.md`](doc/wiki/current-status.md)
4. le ultime voci di [`doc/wiki/log.md`](doc/wiki/log.md)
5. la pagina progetto o modulo pertinente

## Preflight obbligatorio

Prima di modificare la repo, esegui `git status`. Se ci sono modifiche locali non committate, fermati e dimmelo. Altrimenti esegui `git fetch` e `git pull --ff-only` sul branch corrente. Se il pull fallisce o i branch sono divergenti, non risolvere da solo: mostrami lo stato e aspetta. Lavora su un branch `hermes/<task>`, non su `main`.

Un'autorizzazione esplicita può derogare al blocco delle modifiche locali solo per la richiesta autorizzata. Commit e push richiedono sempre richiesta esplicita.

## Regole operative

- Ispeziona simboli, usi, manifest, configurazione e test prima di scegliere una soluzione.
- Applica la modifica minima coerente e non sovrascrivere lavoro preesistente.
- Preserva Angular standalone, SSR/prerendering, hydration, responsive design, accessibilità e copy italiano.
- Non inventare endpoint, persistenza, asset definitivi, dati del salone o contratti di deploy.
- Il form è demo finché non esiste un provider verificato.
- Mantieni `prefers-reduced-motion`; non aggiungere librerie UI senza requisito.
- Cerca funzioni/componenti equivalenti prima di introdurne di duplicati.
- Non inserire segreti, token, password o endpoint privati nel repository o nella wiki.

## Verifica minima

```bash
npm run test -- --watch=false --browsers=ChromeHeadless
npm run build
git diff --check
git status --short --branch
```

Riporta solo **Changed**, **Verified** e **Blocked/remaining**, con risultati effettivamente osservati. Un build riuscito non sostituisce la verifica browser o di integrazioni esterne.

# Schema della wiki

## Convenzioni

- Nomi file lowercase, con trattini e senza spazi.
- Ogni pagina contenutistica usa frontmatter YAML e compare in `index.md`.
- Usare `[[wikilinks]]` quando esistono pagine correlate.
- Aggiornare `updated` a ogni modifica e aggiungere una voce sintetica a `log.md`.
- Citare percorsi repository-relative, identificatori, comandi e risultati reali.
- Non memorizzare segreti, token, password, chiavi, certificati o configurazioni cliente.
- Tenere le pagine sotto circa 200 righe; separare i deep dive.

## Frontmatter

```yaml
---
title: Titolo pagina
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: project | architecture | module | api | decision | workflow | bug | runbook | concept | query | guidance | status
tags: [project]
project: sissy-hairstyle
status: active | superseded | resolved | open | archived
confidence: high | medium | low
sources: [percorso/relativo]
---
```

`confidence` descrive la qualità dell'evidenza della pagina:

- `high`: confermata da codice/configurazione e, se rilevante, da comandi riusciti.
- `medium`: supportata da codice o documentazione, ma runtime, rete o flusso completo non verificati.
- `low`: inferita, datata, contraddittoria o dipendente da evidenza mancante; indicare come verificarla.

## Precedenza delle fonti

1. Codice e configurazione correnti, verificati dall'esecuzione.
2. Output di build, test e runtime.
3. Documentazione esplicita del progetto.
4. Wiki esistente e contesto del maintainer.
5. Inferenza dell'agente, sempre marcata come tale.

Non inferire endpoint, contratti di deploy, autorizzazioni o comportamenti browser-only dai soli nomi.

## Manutenzione

1. Cercare pagina e simboli correlati prima di scrivere.
2. Leggere sorgente, configurazione e test pertinenti.
3. Aggiornare pagina e link utili.
4. Aggiornare `index.md` e `log.md`.
5. Documentare verifica e blocchi senza trasformare ipotesi in fatti.

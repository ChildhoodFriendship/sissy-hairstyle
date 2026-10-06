---
title: Uso efficiente del contesto
created: 2026-10-06
updated: 2026-10-06
type: guidance
tags: [guidance, performance, workflow]
project: sissy-hairstyle
status: active
confidence: high
sources: [SCHEMA.md, agent-guide.md, package.json]
---

# Uso efficiente del contesto

L'obiettivo è leggere la minima evidenza sufficiente a una modifica corretta, non leggere meno a ogni costo.

## Ordine iniziale

1. `SCHEMA.md`
2. `index.md`
3. `current-status.md`
4. ultime 20–30 righe di `log.md`
5. `git status --short --branch`

Non caricare `node_modules`, `dist` o l'intero repository. Cercare prima simboli, route e file pertinenti.

## Metodo

- Tracciare definizione → chiamanti → tipi/contratti.
- Usare letture a intervalli limitati per file grandi.
- Raggruppare ricerche indipendenti nello stesso turno.
- Riassumere programmaticamente inventari ripetitivi.
- Preferire la fonte autorevole alla rilettura di parafrasi.
- Conservare fatti durevoli nella wiki con percorso sorgente.
- Non riportare segreti o output generati estesi.

| Tipo task | Fermarsi quando |
|---|---|
| Fix piccolo | causa e verifica sono chiare |
| Modifica modulo | flusso dati e confine del modulo sono chiari |
| Modifica trasversale | ogni confine ha un acceptance check |
| Audit | risultato tabellare con evidenze completato |

Un task è completo quando la modifica minima è applicata, la verifica è eseguita, i limiti sono dichiarati e l'indice permette al prossimo agente di ritrovare le evidenze.

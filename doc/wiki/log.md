# Log wiki

Formato append-only: `## [YYYY-MM-DD] azione | oggetto`.

## [2026-10-06] create | Wiki equivalente per Sissy Hairstyle

- Separati i vincoli generali della wiki di riferimento dai contenuti specifici del progetto sorgente.
- Ricostruiti schema, guida agente, token usage, stato, architettura, catalogo componenti, progetto e runbook sul codice corrente.
- Aggiunti template generici senza nomi o percorsi del progetto di riferimento.
- Verifiche baseline: test headless pass (3 test), build pass (1 route prerenderizzata).

## Decisioni architetturali

- **ADR-01 — Angular standalone e SSR:** mantenere il bootstrap standalone, hydration e server rendering già configurati.
- **ADR-02 — Nessuna UI library aggiuntiva:** usare CSS locale e primitive Angular finché non emerge un requisito verificato.
- **ADR-03 — Form non integrato:** non inventare un endpoint; il form resta demo fino a un contratto reale.
- **ADR-04 — Movimento accessibile:** tutte le animazioni devono rispettare `prefers-reduced-motion`.

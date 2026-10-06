# Log della wiki

Storico sintetico; le voci descrivono fatti verificati, non intenzioni.

## [2026-10-06] refactor — Migrazione wiki Hermes

- Ricostruita la documentazione in `doc/wiki/` con schema compatto: schema, guida agente, stato, indice, log, catalogo componenti e pagina progetto.
- Estratti dal materiale precedente i vincoli reali: Angular standalone, SSR/prerendering, form demo, asset remoti e identità locale ad Arzergrande.
- Rimossa la nota temporanea dalla vecchia area wiki.
- Verifiche repository: `npm run test -- --watch=false --browsers=ChromeHeadless` pass (3 test); `npm run build` pass (1 route prerenderizzata).

## Decisioni architetturali correnti

- **ADR-01 — UI senza libreria aggiuntiva:** CSS locale e Angular nativo mantengono bundle e SSR semplici.
- **ADR-02 — Form non integrato:** il form resta locale finché non esiste un endpoint reale; non si inventa una persistenza.
- **ADR-03 — Accessibilità del movimento:** le animazioni devono rispettare `prefers-reduced-motion`.

# Guida operativa per agenti

## Orientamento obbligatorio

1. Leggere `SCHEMA.md`, `index.md`, `current-status.md` e le ultime voci di `log.md`.
2. Eseguire `git status --short --branch` prima di modificare file.
3. Cercare simboli e usi nel codice; leggere manifest, configurazione e test pertinenti.
4. Trattare le modifiche già presenti nel working tree come appartenenti all'utente.

## Regole di modifica

- Implementare la richiesta con la patch minima coerente; evitare refactor estranei.
- Preservare Angular standalone, SSR/prerendering, hydration, accessibilità e responsive layout.
- Usare TypeScript/HTML/CSS nello stile già presente; mantenere copy e interfaccia in italiano.
- Per lo stato UI locale preferire `signal`; mantenere una sola fonte di verità per filtri e invio form.
- Non introdurre librerie UI aggiuntive senza necessità documentata.
- Non inventare endpoint, integrazioni, indirizzi, anni di attività o asset definitivi.
- Il form contatti è demo: non simulare un invio reale né aggiungere provider senza requisito e contratto verificati.
- Le URL Unsplash sono provvisorie: sostituirle solo con asset autorizzati/forniti.
- Animazioni curate ma accessibili; mantenere il percorso `prefers-reduced-motion`.
- Prima di aggiungere una rotta, servizio o modello, verificare che non esista già un equivalente.
- Non committare, fare push, resettare il branch o riscrivere la storia senza richiesta esplicita.
- Non copiare segreti o credenziali nel codice, nella wiki o negli esempi.

## Verifica

Eseguire separatamente, in base alla modifica:

```bash
npm run test -- --watch=false --browsers=ChromeHeadless
npm run build
```

Per modifiche visive, eseguire anche `npm start` e una verifica browser reale/cross-device quando disponibile. Un build riuscito non dimostra da solo correttezza visuale o invio del form.

Riportare solo risultati reali: **Changed**, **Verified**, **Blocked/remaining**. Prima della consegna controllare `git diff --check` e `git status --short --branch`.

## Manutenzione della wiki

- Aggiornare la pagina pertinente quando cambiano architettura, componenti o stato.
- Aggiungere ogni nuova pagina a `index.md` e una voce sintetica a `log.md`.
- Conservare in `current-status.md` solo il quadro corrente; non trasformarlo in diario.
- Abbassare la confidenza o dichiarare il limite quando manca verifica runtime.

# Wiki Sissy Hairstyle

Knowledge base Markdown compatta per maintainer e agenti.

## Orientamento

1. Leggere [`SCHEMA.md`](SCHEMA.md) per naming, frontmatter, fonti e manutenzione.
2. Consultare [`index.md`](index.md) per la mappa delle pagine.
3. Leggere il progetto in `projects/` prima dei dettagli tecnici.
4. Leggere le ultime voci di [`log.md`](log.md).
5. Verificare sempre codice, configurazione e comandi prima di documentare comportamento.

## Regole

- Documentare solo conoscenza durevole: architettura, componenti, procedure, decisioni e stato.
- Tenere indice e log sincronizzati.
- Non inserire segreti, token, password, chiavi o configurazioni private.
- Distinguere fatti verificati, limiti del repository e ipotesi.

## Struttura

- `projects/` — scopo, configurazione e vincoli del progetto.
- `architecture/` — composizione runtime e confini.
- `modules/` — componenti, servizi e contratti.
- `runbooks/` — procedure ripetibili.
- `bugs/` — diagnosi durevoli verificate.
- `templates/` — modelli generici per future pagine.

# Schema della wiki e dell'applicazione

## Modello documentale

- Pagine Markdown brevi, con titolo, stato, fonti e data di aggiornamento quando il contenuto è soggetto a evoluzione.
- Usare percorsi relativi al repository per le fonti (`src/...`, `package.json`, comandi npm).
- `index.md` è l'indice canonico; ogni pagina durevole deve comparire lì.
- `current-status.md` contiene solo stato e attività aperte; `log.md` è storico sintetico append-only.
- Non inserire segreti, credenziali, token o endpoint privati.
- Preferire fatti verificati dal codice e dai comandi eseguiti; indicare esplicitamente ciò che resta non verificato.

## Architettura runtime

```text
src/index.html
  └─ main.ts
       └─ bootstrapApplication(AppComponent, appConfig)
            ├─ AppComponent (landing, stato UI, filtri, form demo)
            ├─ Angular Router (routes attualmente vuote)
            └─ Client hydration + event replay

SSR/prerender:
main.server.ts → app.config.server.ts → server.ts (Express/CommonEngine)
```

## Dati applicativi

| Modello | Forma | Proprietà chiave | Origine |
|---|---|---|---|
| Categoria | `string` | `Tutti`, `Raccolti`, `Mossi`, `Corti` | `AppComponent.categories` |
| Look | oggetto locale | `title`, `category`, `type`, `image`, `className` | `AppComponent.looks` |
| Stato filtro | signal | categoria attiva | `activeCategory` |
| Stato form | signal booleano | richiesta inviata in demo | `sent` |

Non esiste ancora un modello backend, una persistenza o un contratto API per il form.

## Vincoli di rendering

- L'app è standalone Angular 19 con SSR/prerendering e hydration.
- Le interazioni devono restare compatibili con SSR: evitare accessi browser-only durante il rendering iniziale.
- Le immagini attuali sono URL Unsplash remoti temporanei; non trattarle come asset proprietari definitivi.

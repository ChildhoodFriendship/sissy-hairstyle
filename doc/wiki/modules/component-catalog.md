# Catalogo componenti

Catalogo basato sul codice corrente. Non esistono ancora servizi backend o componenti di dominio separati.

| Modulo/componente | Scopo | Input / stato | Output / effetti | Vincoli |
|---|---|---|---|---|
| `AppComponent` | Shell unica della landing e composizione delle sezioni | `categories`, `looks`, `activeCategory`, `sent` | Template HTML, filtro locale, messaggio di successo locale | Root standalone; deve restare SSR-safe |
| Header/navigation | Branding e navigazione interna | Nessun input; ancore `#top`, `#looks`, `#philosophy`, `#contact` | Scroll verso sezioni, CTA verso contatti | Nessun router applicativo |
| Hero | Presentazione del salone e CTA | Copy statico, immagine remota | Link verso galleria | Asset e claim devono restare verificati |
| Galleria look | Visualizzazione dei look | Array `looks`, categoria attiva | Elenco filtrato; `setCategory(category)` aggiorna signal | Dati statici; immagini Unsplash temporanee |
| Metodo/philosophy | Comunica valori e processo | Copy statico | Contenuto editoriale | Nessuna integrazione dati |
| Contact form | Raccolta dimostrativa di nome, email e messaggio | Form HTML; submit locale | `preventDefault()` e `sent.set(true)` | Nessun invio, validazione backend o privacy flow |
| SSR server | Servire file browser e renderizzare Angular | `PORT`, request Express | HTML SSR/prerender tramite `CommonEngine` | Endpoint API non definiti; default porta 4000 |
| Stili globali | Token visivi, font, reset e colori | CSS custom properties | Tema comune e tipografia | Google Fonts dipendenti dalla rete |
| Stili AppComponent | Layout, responsive, animazioni e riduzione movimento | CSS locale | Hero, griglia, form, footer | Budget Angular `anyComponentStyle` max error 10 kB |

## Percorsi chiave

- `src/app/app.component.ts` — dati e logica interattiva.
- `src/app/app.component.html` — struttura e binding.
- `src/app/app.component.css` — layout e responsive.
- `src/styles.css` — token globali e font.
- `src/server.ts`, `src/main.server.ts` — SSR Express/Angular.

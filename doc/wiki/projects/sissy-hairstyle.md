# Progetto Sissy Hairstyle

## Scopo

Sito vetrina editoriale in italiano per presentare look, metodo e contatti del salone Sissy Hairstyle ad Arzergrande.

## Configurazione

| Voce | Valore |
|---|---|
| Framework | Angular standalone 19 |
| Build | `npm run build` |
| Test | `npm run test -- --watch=false --browsers=ChromeHeadless` |
| Dev server | `npm start` / `ng serve`, tipicamente `http://localhost:4200/` |
| SSR | Angular SSR + Express, `PORT` o `4000` |
| Output | `dist/sissy-hairstyle` |
| Entry browser | `src/main.ts` |
| Entry server | `src/main.server.ts` / `src/server.ts` |
| Route | `src/app/app.routes.ts`, attualmente `[]` |

## Configurazione build

`angular.json` usa il builder application con:

- `src/index.html` come documento;
- `src/main.ts` e `src/main.server.ts`;
- asset statici da `public/`;
- `src/styles.css` come stile globale;
- prerender e SSR abilitati;
- budget production: warning 500 kB/error 1 MB per initial, warning 8 kB/error 10 kB per stile componente.

## Identità e contenuti

- Nome: Sissy Hairstyle.
- Località pubblicata: Arzergrande, Via Roma 52.
- Formula: si riceve su appuntamento.
- UI e copy: italiano.
- Immagini: URL Unsplash temporanee, da sostituire con asset proprietari autorizzati.

## Integrazioni e limiti

- Nessun backend, API, autenticazione o persistenza.
- Il form contatti non trasmette i dati: intercetta submit e mostra uno stato locale.
- Le immagini e i font Google sono dipendenze remote del browser.
- Il server Express serve il bundle browser e renderizza ogni altra richiesta con `CommonEngine`; non espone API applicative.

## Fonti

`package.json`, `angular.json`, `src/index.html`, `src/main.ts`, `src/main.server.ts`, `src/server.ts`, `src/app/app.component.*`, `src/styles.css`.

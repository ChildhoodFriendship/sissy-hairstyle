# Stato corrente

**Snapshot:** 2026-10-06 — stato verificato dal repository e dai comandi eseguiti.

## Completato

- Landing page editoriale Sissy Hairstyle implementata in Angular standalone.
- Hero, navigazione ad ancore, galleria filtrabile, metodo, CTA e form contatti presenti.
- Identità locale: Arzergrande, Via Roma 52, ricevimento su appuntamento.
- Responsive layout, animazioni CSS e fallback `prefers-reduced-motion` presenti.
- SSR/prerendering, hydration con event replay e server Express configurati.

## Baseline verificata

| Controllo | Risultato |
|---|---|
| `npm run test -- --watch=false --browsers=ChromeHeadless` | Pass: 3 test eseguiti |
| `npm run build` | Pass: bundle browser/server e 1 route prerenderizzata |

## Aperto / non verificato

- Il form mostra un messaggio locale e non invia dati: manca un endpoint/provider reale.
- Le immagini sono remote da Unsplash e devono essere sostituite con asset proprietari ottimizzati quando forniti.
- Manca una verifica visuale manuale cross-device.
- Le route Angular sono attualmente vuote: la landing è il componente root, senza navigazione applicativa dinamica.
- Il server SSR usa la porta `PORT` oppure `4000`; non sono documentate procedure di deploy/rollback.

## Dipendenze e limiti critici

- Angular `^19.2.0`, Angular CLI `^19.2.27`, TypeScript `~5.7.2`, Express `^4.18.2`.
- Le font Google e le immagini dipendono dalla rete in runtime/browser.
- Non esiste backend, persistenza, autenticazione o servizio contatti nel repository.

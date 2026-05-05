# Guida al progetto Platform Handbook

Una guida pratica per capire come è costruito questo sito, come aggiornarlo e come pubblicarlo — anche senza esperienza tecnica pregressa.

---

## Cos'è questo progetto

Il Platform Handbook è un sito web di documentazione interna costruito con **Nextra**, una libreria open source pensata apposta per creare siti di documentazione. Nextra si appoggia su **Next.js**, un framework per siti web moderni.

In parole semplici: i contenuti vengono scritti come normali file di testo (formato Markdown), e la libreria li trasforma automaticamente in pagine web con sidebar, ricerca, tabella dei contenuti e tutto il resto.

---

## Stack tecnologico (cosa c'è sotto)

| Strumento | Ruolo |
|-----------|-------|
| **Nextra 2.x** | Libreria che trasforma i file di testo in un sito di documentazione |
| **Next.js 14** | Framework web su cui si appoggia Nextra |
| **Node.js** | Ambiente di esecuzione necessario per avviare il sito in locale |
| **GitHub** | Dove vive il codice sorgente del progetto (repository remoto) |
| **Netlify** | Servizio che pubblica il sito online in automatico ad ogni push su GitHub |
| **Git** | Sistema di controllo versione — tiene traccia di tutte le modifiche ai file |

---

## Struttura delle cartelle

```
platform handbook/
│
├── pages/                  ← Tutti i contenuti del sito (file .mdx)
│   ├── _meta.json          ← Ordine e nomi delle voci nel menu principale
│   ├── index.mdx           ← Homepage del sito
│   ├── overview/           ← Sezione "Platform Overview"
│   │   ├── _meta.json      ← Ordine voci del sottomenu
│   │   ├── product-summary.mdx
│   │   └── ...
│   ├── features/           ← Sezione "Features"
│   ├── onboarding-delivery/ ← Sezione "Onboarding & Delivery"
│   └── faq.mdx
│
├── public/
│   └── images/             ← Tutte le immagini e i video del sito
│
├── theme.config.jsx         ← Logo, footer, link feedback — aspetto del sito
├── next.config.mjs          ← Configurazione tecnica Next.js/Nextra
├── package.json             ← Dipendenze e comandi del progetto
└── netlify.toml             ← Istruzioni per il deploy su Netlify
```

---

## Come sono fatti i file di contenuto

I file hanno estensione `.mdx` — sono file di testo normale scritti in **Markdown**, con la possibilità di aggiungere componenti speciali.

### Esempio di file MDX

```markdown
---
title: Home Dashboard
description: Panoramica della pagina principale.
---

# Home Dashboard

Questo è un paragrafo normale.

## Una sezione

- Elemento lista
- Altro elemento

![Descrizione immagine](/images/nome-immagine.png)
```

### Formattazione di base

| Elemento | Sintassi |
|----------|----------|
| Titolo grande | `# Titolo` |
| Titolo sezione | `## Sezione` |
| Titolo sottosezione | `### Sottosezione` |
| **Grassetto** | `**testo**` |
| *Corsivo* | `*testo*` |
| Immagine | `![testo alternativo](/images/nome.png)` |
| Link | `[testo](https://url.com)` |
| Codice inline | `` `testo` `` |

### Componenti speciali (da Nextra)

```mdx
import { Callout, Steps, Tabs } from 'nextra/components'

{/* Nota informativa */}
<Callout type="warning">
  Questo è un avviso importante.
</Callout>

{/* Passaggi numerati */}
<Steps>
### Primo passo
Descrizione del passo.

### Secondo passo
Descrizione del passo.
</Steps>

{/* Tab */}
<Tabs items={['Tab 1', 'Tab 2']}>
  <Tabs.Tab>Contenuto tab 1</Tabs.Tab>
  <Tabs.Tab>Contenuto tab 2</Tabs.Tab>
</Tabs>
```

---

## Come aggiornare il menu di navigazione

Il menu laterale è controllato dai file `_meta.json`. Ogni cartella ha il suo.

### Esempio: `pages/_meta.json`
```json
{
  "index": "Home",
  "overview": "Platform Overview",
  "features": "Features",
  "onboarding-delivery": "Onboarding & Delivery",
  "faq": "FAQ"
}
```

- La **chiave** (sinistra) è il nome del file o della cartella
- Il **valore** (destra) è il nome che appare nel menu

Per aggiungere una nuova pagina al menu: creare il file `.mdx` e aggiungere la riga corrispondente nel `_meta.json` della cartella.

---

## Come aggiungere immagini e video

1. Salvare il file in `/public/images/`
2. Usare il percorso `/images/nome-file.png` nel file MDX

```markdown
![Descrizione](/images/nome-immagine.png)
```

Per i **video** (formato MP4):
```mdx
<video aria-hidden="true" tabIndex={-1} src="/images/nome-video.mp4" autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '8px' }} controls />
```

> I video `.mov` vanno convertiti in `.mp4` prima di aggiungerli.

---

## Il flusso di lavoro completo

### 1. Modificare i file in locale

Aprire la cartella `/Users/administrator/Documents/platform handbook` con Cowork e modificare i file `.mdx` direttamente.

### 2. Vedere le modifiche in tempo reale

Il server locale deve essere attivo. Se non lo è, avviarlo dal terminale:

```bash
cd "/Users/administrator/Documents/platform handbook"
npm run dev
```

Poi aprire il browser su **http://localhost:3000**

Per fermare il server: `Ctrl + C` nel terminale.

### 3. Committare le modifiche con Git

Git è il sistema che tiene traccia delle modifiche. Ogni "commit" è come uno snapshot del progetto in un momento preciso.

**Verificare cosa è cambiato:**
```bash
git status
```

**Aggiungere i file modificati:**
```bash
git add nome-file.mdx
# oppure per tutti i file:
git add pages/ public/images/
```

**Creare il commit:**
```bash
git commit -m "Breve descrizione della modifica"
```

### 4. Pubblicare su GitHub

```bash
git push origin main
```

La prima volta chiede username (`Angpic25`) e password (il Personal Access Token). Dopo viene salvato automaticamente nel Keychain del Mac.

### 5. Deployare su Netlify

Netlify si connette a GitHub e pubblica automaticamente il sito ad ogni push. Se il deploy non parte in automatico:

1. Andare su **netlify.com** → **platform-handbook**
2. Cliccare **Deploys** → **Options** → **Clear cache and deploy site**

Il sito è raggiungibile all'indirizzo: **platform-handbook.netlify.app**

---

## Operazioni comuni

### Aggiungere una nuova pagina

1. Creare il file `.mdx` nella cartella giusta (es. `pages/features/nuova-pagina.mdx`)
2. Aggiungere la voce in `_meta.json` della stessa cartella
3. Scrivere il contenuto nel file
4. Committare e pushare

### Aggiungere una nuova sezione

1. Creare una nuova cartella in `pages/` (es. `pages/nuova-sezione/`)
2. Creare un `_meta.json` dentro la cartella con l'elenco delle pagine
3. Aggiungere la sezione al `pages/_meta.json` principale
4. Creare i file `.mdx` delle pagine
5. Committare e pushare

### Sostituire un'immagine

1. Salvare la nuova immagine in `public/images/` **con lo stesso nome** di quella vecchia
2. Git rileverà automaticamente la sostituzione
3. Committare e pushare

### Cambiare il titolo del sito o il footer

Aprire `theme.config.jsx` e modificare:
- `logo` → titolo nell'header
- `footer.text` → testo nel footer
- `feedback` → link al canale Slack

---

## Cose da non fare

- **Non modificare** la cartella `node_modules/` — contiene le dipendenze installate automaticamente
- **Non committare** la cartella `.next/` — è la build locale temporanea
- **Non committare** `.obsidian/` o `Untitled.canvas` — file di Obsidian non pertinenti
- **Non cancellare** `package.json` o `package-lock.json` — definiscono le dipendenze del progetto
- **Non rinominare** la cartella del progetto senza aggiornare i path nei comandi

---

## Se qualcosa va storto

### Il server locale non si avvia
```bash
cd "/Users/administrator/Documents/platform handbook"
rm -rf .next
npm run dev
```

### La pagina non si aggiorna dopo le modifiche
Fare un hard refresh nel browser: **Cmd + Shift + R**

### Il push fallisce
Verificare di essere nella cartella giusta:
```bash
cd "/Users/administrator/Documents/platform handbook"
git push origin main
```

### Netlify non mostra le modifiche
1. Verificare che il push sia andato a buon fine con `git log origin/main --oneline -3`
2. Fare **Clear cache and deploy site** su Netlify

---

## Riferimenti

- **Repository GitHub:** https://github.com/Angpic25/platform-handbook
- **Sito in produzione:** https://platform-handbook.netlify.app
- **Server locale:** http://localhost:3000
- **Documentazione Nextra:** https://nextra.site

# ABRAXIS Mobile App Prototype

High-fidelity interactive prototype of the ABRAXIS knowledge capture mobile app.

## Screens

- **Onboarding** — Welcome, trust contract, profile setup, responsibility selection
- **Home Dashboard** — Capture progress, mode selection, pending reviews, activity feed
- **Tribal Knowledge Capture** — Voice recording, text notes, photo capture by responsibility area
- **Cognitive Elicitation** — AI-mediated conversational interview with text/voice toggle
- **Review & Gatekeeping** — Private draft review with approve/edit/redact controls

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Vite — no configuration needed
5. Click Deploy

## Build

```bash
npm run build
```

Output goes to `dist/` directory.

## Tech Stack

- React 18
- Vite 5
- Google Fonts (DM Sans, DM Serif Display)
- No external UI libraries — custom components throughout

## Confidential

ABRAXIS, Inc. — Internal use and investor demonstrations only.

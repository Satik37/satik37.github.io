# satik37.github.io
``` 
 ________  ________  _________  ___  ___  __    ________  ________  
|\   ____\|\   __  \|\___   ___\\  \|\  \|\  \ |\_____  \|\_____  \ 
\ \  \___|\ \  \|\  \|___ \  \_\ \  \ \  \/  /|\|____|\ /_\|___/  /|
 \ \_____  \ \   __  \   \ \  \ \ \  \ \   ___  \    \|\  \   /  / /
  \|____|\  \ \  \ \  \   \ \  \ \ \  \ \  \\ \  \  __\_\  \ /  / / 
    ____\_\  \ \__\ \__\   \ \__\ \ \__\ \__\\ \__\|\_______Y__/ /  
   |\_________\|__|\|__|    \|__|  \|__|\|__| \|__|\|_______|__|/   
   \|_________|                                                     
                                                                     
                                                                             
``` 

This repository contains my personal developer portfolio. It is a single-page application built with **React** (UI), written in **TypeScript** (language), styled with **Tailwind CSS v4**, and bundled/served by **Vite**. Deployed on GitHub Pages.

The site is currently being rebuilt from scratch. I'm using it not only to present my work better but also to improve how I structure frontend projects, how I handle and optimize styling and how I think about visual communication with all the major and minor implications.

## Why this project exists

This portfolio is meant to:

- present my projects and technical work
- keep experimenting with modern frontend tooling
- be a personal site that feels cleaner and more intentional than a simple list of links
- act as a central place to collect web, mobile and game-related work

## How the tech stack fits together

| Layer | Tool | Role |
|-------|------|------|
| **Language** | TypeScript | Adds types on top of JavaScript. All source files are `.tsx` |
| **UI library** | React 19 | Renders the components. JSX markup, hooks, state, effects |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework. Used for all layout and visual styling |
| **Build tool** | Vite | Dev server, bundling, HMR, and production builds |
| **Icons** | Lucide React | Icon components used throughout the site |
| **Hosting** | GitHub Pages | Static site hosting |
| **Deployment** | GitHub Actions | CI/CD pipeline: lint → typecheck → build → deploy |
| **Analytics** | GoatCounter | Privacy-friendly analytics |
| **Contact** | EmailJS | Temporary client-side email service for the contact form |

In practice: I write **React components in TypeScript**, style them with **Tailwind classes**, and **Vite** bundles everything into static files that get deployed to GitHub Pages.

## Why TypeScript

The project was originally written in JavaScript (`.jsx`). It has been migrated to TypeScript (`.tsx`) for several reasons:

- **Type safety at build time** — catching errors before they reach the browser, especially around props, event handlers, and data shapes
- **Better developer experience** — autocomplete, inline documentation, and refactoring tools that understand the codebase
- **Self-documenting code** — interfaces for props and data structures make the intent of each component explicit
- **Confidence in refactors** — the compiler verifies that changes don't break other parts of the codebase
- **Modern tooling alignment** — the ecosystem (Vite, ESLint, React) has first-class TypeScript support

The migration also included:

- typed environment variables (`vite-env.d.ts`)
- typed constants for social links, navigation, and site config
- interfaces for all component props and data models
- `tsc --noEmit` as a CI check alongside ESLint

## Analytics and privacy

This site uses GoatCounter for basic visit statistics.

I picked it because it aligns with how I want this portfolio to behave:

- no invasive tracking or user profiling
- no cookies, cookie banners, consent pop-ups or cross-site identifiers
- only high-level, aggregate metrics (page views, referrers, countries)

One downside is that GoatCounter's hosted domains (`goatcounter.com` and `gc.zgo.at`) are blocked by many adblockers, so some visits are not recorded.
I plan to switch to a self-hosted, privacy-friendly solution in the future to improve reliability while keeping the same respect for visitors' privacy.

## Contact form

The contact form is currently planned as a two-step system.

### Short term: EmailJS

For the first weeks, the site will use **EmailJS** so the contact form can work immediately without introducing a backend.

I made this choice because:

- GitHub Pages hosts static files only
- EmailJS works directly from the client
- it allows the form to be available immediately while the rest of the site is still under active development, especially the backend

### Long term: backend migration

The contact flow will be replaced with a backend-based setup in order to improve:

- validation
- spam protection and rate limiting
- error handling
- reliability of delivery
- room for future automations and more advanced logic
- privacy

The frontend can still remain deployed on GitHub Pages, while the backend will live on a separate service such as a serverless platform or a small custom API.

## Running the project locally

### Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)

### Install dependencies

```bash
npm i
```

### Start the development server

```bash
npm run dev
```

### Lint and type check

```bash
npm run lint
npm run typecheck
```

### Format code

```bash
npm run format
```

### Production build

```bash
npm run build
```

## Calcolatore dello stipendio netto da RAL

The portfolio includes a prototype: a net salary calculator from RAL (Retribuzione Annua Lorda) for a standard Italian employee profile.

### Profile

- Fiscal year: 2026
- Private-sector permanent white-collar employee (impiegato a tempo indeterminato), full-time
- Resident in Milan (Lombardia)
- No dependents, no family-related deductions, no other income, no special tax benefits

### Supported RAL range

- 15,000 - 100,000 EUR
- Values outside this range are rejected with an informational message
- This is a scope limit of the prototype, not a general fiscal limit

### Tax rules implemented (2026)

- **INPS**: 9.19% base employee contribution
- **IRPEF**: progressive — 23% up to 28,000; 33% from 28,000 to 50,000; 43% above 50,000
- **Employment income deduction (art. 13 TUIR)**:
  - up to 15,000 EUR: 1,955 * (income / 15,000), min 690 EUR
  - 15,000-28,000 EUR: 1,910 + 1,190 * (28,000 - income) / 13,000
  - 28,000-50,000 EUR: 1,910 * (50,000 - income) / 22,000
  - above 50,000 EUR: 0
- **Additional employment income deduction (25,000-35,000 EUR bracket)**: fixed 65 EUR when taxable income is > 25,000 and <= 35,000 EUR. This is an additional employment income deduction provided by the legislation (not a family allowance, not an INPS credit)
- **Regional surcharge (Lombardia)**: progressive single rate applied to the WHOLE taxable income, based on the bracket (marginal rates of previous brackets are NOT summed) — 1.23% / 1.58% / 1.72% / 1.73%
- **Municipal surcharge (Milano)**: 0.8%, exempt up to 23,000 EUR; above the threshold the 0.8% applies to the whole income (no franchise)
- **Monthly net**: annual net divided by the selected payment periods (12, 13 or 14; default 13) — annualized monthly average

### Reconciliation

```
net annual = RAL - INPS - net IRPEF - regional surcharge - municipal surcharge
```

### Note on differences vs other calculators

- Our net annual INCLUDES the regional (Lombardia) and municipal (Milano) surcharges.
- Other calculators online or reference tools may use different assumptions or may not include the surcharges in the final net shown, so the result can differ.
- We do NOT modify the standard IRPEF formula (23% / 33% / 43%) just to replicate a different gross IRPEF value (e.g. 6,677.76 EUR for a 30,000 EUR RAL) without an official regulatory source.
- The surcharges applied are consulted in the official 2026 Lombardia regional rates and the Milano 0.8% with a 23,000 EUR exemption threshold.

### Excluded in this version (documented limitations)

- Additional 1% INPS surcharge (above ~48,000 EUR)
- INPS contribution cap (massimale)
- Apprenticeship and other contribution regimes
- IRPEF benefit sterilization above 200,000 EUR
- Family-related deductions (spouse, children, family allowances)
- TFR (severance pay)
- Any income other than the RAL

## Deployment

The site is deployed to GitHub Pages through GitHub Actions.

Every push to the `main` branch:
- installs dependencies
- runs lint and type checks
- runs the production build
- publishes the generated output to GitHub Pages

## Live site

[https://satik37.github.io](https://satik37.github.io)

## Roadmap

- multilingual content
- introduce backend
- switch to a self-hosted, privacy-friendly analytics tool
- replace the temporary contact flow with a backend-based system
- new and more elaborate/complex animations where they add value

## Contact

- GitHub: [@Satik37](https://github.com/Satik37)
- Portfolio: [https://satik37.github.io](https://satik37.github.io)
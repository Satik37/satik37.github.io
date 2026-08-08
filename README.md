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
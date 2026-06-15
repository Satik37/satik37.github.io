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

This repository contains my personal developer portfolio built with React, Vite and Tailwind CSS v4 (the new version). Deployed on GitHub Pages.

The site is currently being rebuilt from scratch. I’m using it not only to present my work better but also to improve how I structure frontend projects, how I handle and optimize styling and how I think about visual communication with all the major and minor implications.

## Why this project exists

This portfolio is meant to:

- present my projects and technical work
- keep experimenting with modern frontend tooling
- be a personal site that feels cleaner and more intentional than a simple list of links
- act as a central place to collect web, mobile and game-related work

## Current status

This is still a work in progress.

Some sections may be incomplete, under revision, or visually inconsistent while I keep rebuilding and refining the project.

## Tech stack

- **Frontend:** React
- **Build tool:** Vite
- **Styling:** Tailwind CSS v4, Lucide React
- **Hosting:** GitHub Pages
- **Deployment:** GitHub Actions
- **Analytics:** GoatCounter
- **Contact system:** EmailJS (temporary)

## Analytics and privacy

This site uses GoatCounter for basic visit statistics.

I picked it because it aligns with how I want this portfolio to behave:

- no invasive tracking or user profiling
- no cookies, cookie banners, consent pop-ups or cross-site identifiers
- only high-level, aggregate metrics (page views, referrers, countries)

I’m using it for analytics instead of a more intrusive solution. It gives me simple, aggregate stats (page views, referrers, countries) without storing IP addresses, cookies, or unique IDs.

One downside is that GoatCounter’s hosted domains (`goatcounter.com` and `gc.zgo.at`) are blocked by many adblockers, so some visits are not recorded.
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


## What I’m focusing on

This build is helping me to work on:

- clean frontend starting from the structure
- real visual consistency
- various layout experimentation
- projects presentation
- accessibility and performance improvements

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

## Deployment

The site is deployed to GitHub Pages through GitHub Actions.

Every push to the `main` branch:
- installs dependencies
- runs the production build
- publishes the generated output to GitHub Pages

## Live site

[https://satik37.github.io](https://satik37.github.io)

## Roadmap

- 'outside of code'
- 'contact me'
- footer
- optimize for Firefox
- better accessibility and performance
- switch to a self-hosted, privacy-friendly analytics tool
- multilingual content
- implement backend
- replace the temporary contact flow with a backend-based system
- visual polishing
- new and more elaborate/complex animations where they add value

## TODO:

- fix 'view all projects' button
- add CV
- refine interests
- review and polish texts
- optimize performance
- optimize accessibility
- optimize images
- switch to a self-hosted, privacy-friendly analytics tool

## Contact

- GitHub: [@Satik37](https://github.com/Satik37)
- Portfolio: [https://satik37.github.io](https://satik37.github.io)
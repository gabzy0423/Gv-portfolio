# GV Portfolio

Personal portfolio website of Gabriel Vargas - a software developer focused on building useful web applications, digital products, and practical systems.

[Live portfolio](http://localhost:3000) | [Projects](http://localhost:3000/projects) | [Contact](http://localhost:3000/contact)

## Contents

- [Purpose](#purpose)
- [Tech stack](#tech-stack)
- [What is included](#what-is-included)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Routes](#routes)

## Purpose

This portfolio is designed to present:

- Selected software projects and case-study pages
- Professional experience and education
- Technology stack and development tools
- GitHub contribution activity
- Personal interests outside the IDE
- Contact and collaboration details

The visual direction is minimal, dark-first, and content-focused, with subtle motion, responsive layouts, and interactive project cards.

## Tech stack

| Area | Technologies |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16, React 19, App Router |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4, CSS variables |
| UI | [shadcn/ui](https://ui.shadcn.com/), Base UI, Heroicons, Lucide React |
| Typography | Geist, Geist Mono, Geist Pixel Square |
| Motion | CSS transitions, [Lenis](https://lenis.darkroom.engineering/) smooth scrolling |
| Icons and logos | Simple Icons, SVG assets |
| Deployment | [Vercel](https://vercel.com/) |

## What is included

- Responsive home page with hero, selected work, experience, tech stack, GitHub activity, outside-the-IDE gallery, and contact sections
- Dedicated project index with responsive project cards
- Dynamic project detail routes using project slugs
- Light and dark theme support
- Accessible keyboard focus states and reduced-motion fallbacks
- Reusable layout, card, breadcrumb, navigation, and theme components
- Centralized portfolio data in `src/data/`

## Project structure

<details>
<summary>Expand the main folders</summary>

```text
src/
├── app/              # App Router pages and route metadata
├── components/       # Layout, home, project, experience, and UI components
├── data/              # Projects, experience, education, skills, and technologies
├── lib/               # Shared utilities and project helpers
└── types/             # Shared TypeScript models

public/
├── images/            # Profile, gallery, project, and branding assets
├── icons/             # Icon assets
└── fonts/             # Local font assets
```

</details>

## Getting started

### Requirements

- Node.js 20 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint checks |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main portfolio page |
| `/projects` | Selected projects gallery |
| `/projects/[slug]` | Individual project detail page |
| `/about` | About and education content |
| `/contact` | Contact and collaboration details |

## Content editing

Most portfolio content can be updated without changing page components:

- Projects: `src/data/projects.ts`
- Experience: `src/data/experience.ts`
- Education: `src/data/education.ts`
- Technologies: `src/data/technologies.ts`
- Gallery and project images: `public/images/`

## License

This is a personal portfolio project. Content, photographs, and personal branding assets are not licensed for reuse without permission.

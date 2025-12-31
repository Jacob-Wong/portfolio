# Portfolio

A personal portfolio website built with Astro, TypeScript, and Tailwind CSS. Features project case studies with an engineering notebook feel, dark mode, and SEO optimization.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) (static site generation)
- **Language**: TypeScript (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: Astro Content Collections + MDX
- **Linting/Formatting**: [Biome](https://biomejs.dev/)
- **Deployment**: Cloudflare Pages

## Features

- ✅ Clean, minimal design with dark mode support
- ✅ Engineering notebook-style case studies
- ✅ Auto-generated Table of Contents for case studies
- ✅ SEO optimized (meta tags, Open Graph, sitemap)
- ✅ Fully responsive (mobile-first)
- ✅ Accessible (keyboard navigation, skip links, semantic HTML)
- ✅ Zero JavaScript by default (progressive enhancement)

## Getting Started

### Prerequisites

- Node.js (LTS version, see `.nvmrc`)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Jacob-Wong/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run linter |
| `npm run format` | Format code |
| `npm run typecheck` | Run type checking |

## Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── favicon.svg
│   ├── og.png
│   ├── resume.pdf
│   └── robots.txt
├── src/
│   ├── components/      # Reusable components
│   ├── content/         # Content collections
│   │   └── projects/    # Project case studies (MDX)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── docs/                # Documentation
│   ├── DEPLOY.md        # Deployment guide
│   └── LOCAL_DEV.md     # Local development guide
└── .github/
    └── workflows/
        └── ci.yml       # GitHub Actions CI
```

## Adding/Editing Projects

Projects are stored as MDX files in `src/content/projects/`. There are three project types with different layouts and tones:

| Type | Use When | Layout |
|------|----------|--------|
| `side-project` | Personal projects, tools, apps you built | Casual (no TOC) |
| `case-study` | Deep technical write-ups with architecture decisions | Formal (with TOC) |
| `experiment` | Learning projects, prototypes, "I wanted to try X" | Casual (no TOC) |

### Templates

Copy from the template files in `src/content/projects/`:
- `case-study-template.mdx` - Formal technical deep-dive
- `side-project-template.mdx` - Casual "here's what I built"
- `experiment-template.mdx` - Learning/exploration focused

### Frontmatter Schema

```yaml
---
title: "Project Title"
description: "Brief description"
publishedAt: 2024-01-01
updatedAt: 2024-06-01      # optional
tags: ["TypeScript", "React"]

# Project classification
projectType: "side-project"  # side-project | case-study | experiment
status: "completed"          # completed | wip | archived (optional)
timeSpent: "A weekend"       # optional, casual time context

# Links
repoUrl: "https://github.com/..."  # optional
liveUrl: "https://..."             # optional

# Case-study specific (optional for other types)
role: "Full-Stack Engineer"
highlights:
  - "Key achievement 1"
  - "Key achievement 2"

draft: false  # optional, defaults to false
---
```

### Content Structure

**For case studies** (formal, use headings for TOC):
- Problem → Context → Architecture → Key Decisions → Challenges → Results → What I'd Improve

**For side projects & experiments** (casual, flexible):
- Why I Made This → How It Works → What I Learned → Current State

## Customization

### Personal Info

Replace these placeholders throughout the codebase:

- `{{YOUR_NAME}}` - Your full name
- `{{YOUR_EMAIL}}` - Your email address
- `{{LINKEDIN_URL}}` - LinkedIn profile URL
- `{{GITHUB_URL}}` - GitHub profile URL
- `{{LOCATION}}` - Your location
- `{{TAGLINE}}` - A brief tagline/description
- `{{YOUR_DOMAIN}}` - Your domain name

### Accent Color

Edit `tailwind.config.mjs` to change the accent color:

```js
colors: {
  accent: {
    DEFAULT: '#3b82f6',
    dark: '#60a5fa',
  },
}
```

## Deployment

This site is configured for Cloudflare Pages. See [docs/DEPLOY.md](docs/DEPLOY.md) for detailed instructions.

### Quick Deploy

1. Push your repository to GitHub
2. Connect to Cloudflare Pages
3. Use preset: **Astro**
4. Build command: `npm run build`
5. Output directory: `dist`

## CI/CD

GitHub Actions runs on every push to `main` and pull requests:
- Linting
- Type checking
- Production build

## License

MIT License - see [LICENSE](LICENSE) for details
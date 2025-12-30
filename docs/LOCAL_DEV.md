# Local Development

This guide covers how to set up and run the portfolio site locally.

## Prerequisites

- **Node.js**: LTS version (check `.nvmrc` for exact version)
- **npm**: Comes with Node.js

### Using nvm (recommended)

```bash
# Install the correct Node version
nvm install

# Use the correct Node version
nvm use
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production site to `./dist` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run Biome linter |
| `npm run format` | Format code with Biome |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
portfolio/
├── public/           # Static assets (favicon, resume.pdf, etc.)
├── src/
│   ├── components/   # Reusable Astro components
│   ├── content/      # MDX content collections
│   │   └── projects/ # Project case studies
│   ├── layouts/      # Page layouts
│   ├── pages/        # Route pages
│   └── styles/       # Global CSS
├── docs/             # Documentation
└── astro.config.mjs  # Astro configuration
```

## Adding Content

### Adding a New Project

1. Create a new MDX file in `src/content/projects/`:

```bash
touch src/content/projects/my-new-project.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "My New Project"
description: "Brief description of the project"
publishedAt: 2024-01-01
tags: ["TypeScript", "React"]
role: "Full-Stack Engineer"
---

## Problem

Describe the problem...
```

3. The project will automatically appear on the Projects page.

### Editing Existing Content

- **Pages**: Edit files in `src/pages/`
- **Projects**: Edit MDX files in `src/content/projects/`
- **Site config**: Edit `src/consts.ts`

## Customization

### Updating Personal Info

Search for placeholders and replace them:

- `{{YOUR_NAME}}`
- `{{YOUR_EMAIL}}`
- `{{LINKEDIN_URL}}`
- `{{GITHUB_URL}}`
- `{{LOCATION}}`
- `{{TAGLINE}}`

### Changing Colors

Edit the accent color in `tailwind.config.mjs`:

```js
colors: {
  accent: {
    DEFAULT: '#3b82f6', // Change this
    dark: '#60a5fa',
  },
}
```

## Troubleshooting

### Port Already in Use

```bash
# Use a different port
npm run dev -- --port 3000
```

### Dependencies Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Type Errors

```bash
# Regenerate Astro types
npm run build
```


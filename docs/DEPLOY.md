# Deploying to Cloudflare Pages

This guide walks you through deploying your portfolio to Cloudflare Pages using Git integration.

## Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free tier is sufficient)
- Your portfolio repository pushed to GitHub

## Step-by-Step Deployment

### 1. Connect Your Repository

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** in the left sidebar
3. Click **Create application** → **Pages** → **Connect to Git**
4. Authorize Cloudflare to access your GitHub account
5. Select the `portfolio` repository

### 2. Configure Build Settings

Use the following build configuration:

| Setting | Value |
|---------|-------|
| **Framework preset** | Astro |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave empty) |
| **Node.js version** | 20 (or latest LTS) |

### 3. Environment Variables

No environment variables are required for basic deployment.

If you want to set a custom site URL (recommended for proper canonical URLs):

| Variable | Value |
|----------|-------|
| `SITE_URL` | `https://your-domain.pages.dev` |

### 4. Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be available at `https://[project-name].pages.dev`

## Custom Domain (Optional)

1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Cloudflare will automatically provision an SSL certificate

## Automatic Deployments

- **Production**: Every push to `main` triggers a production deployment
- **Preview**: Every pull request gets a unique preview URL

## Troubleshooting

### Build Fails

1. Check the build logs in Cloudflare Dashboard
2. Ensure `npm run build` works locally
3. Verify Node.js version matches your `.nvmrc`

### 404 on Routes

Astro generates static files by default. All routes should work correctly with Cloudflare Pages.

### Cache Issues

Cloudflare caches aggressively. Use the **Purge Cache** option in the dashboard if you see stale content.


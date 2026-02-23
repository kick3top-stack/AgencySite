# Deploying to Vercel

This project is set up to run on Vercel as a serverless app. The same Express server serves the React client (static files + SPA fallback) and your API routes.

## Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Git repo (GitHub, GitLab, or Bitbucket) with this project, or Vercel CLI

## Option 1: Deploy with Vercel (Git)

1. **Push your code** to GitHub/GitLab/Bitbucket.

2. **Import the project on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel will detect the config from `vercel.json`:
     - **Build Command:** `npm run build`
     - **Output:** All traffic is handled by the serverless API (no separate static output directory)

3. **Environment variables** (if needed)
   - In the project dashboard: **Settings → Environment Variables**
   - Add any variables your app uses (e.g. database URLs, API keys).  
   - If you use a database (e.g. PostgreSQL with Drizzle), configure a DB URL and run migrations separately (e.g. in a CI step or manually after deploy).

4. **Deploy**
   - Click **Deploy**. Vercel will run `npm run build` and deploy the API. Every request is sent to the Express app (API, static assets, and SPA routes).

## Option 2: Deploy with Vercel CLI

1. **Install the CLI**
   ```bash
   npm i -g vercel
   ```

2. **Log in and deploy**
   ```bash
   cd D:\github_reositories\AgencySite
   vercel login
   vercel
   ```
   Follow the prompts (link to existing project or create new one).

3. **Production deploy**
   ```bash
   vercel --prod
   ```

## Local preview (Vercel-like)

To run the app in a Vercel-like way locally:

```bash
npm run build
vercel dev
```

This uses Vercel’s local server and the same rewrites as production.

## Notes

- **Database:** If you use PostgreSQL (or similar), run `db:push` or migrations in your pipeline or after deploy; the serverless function does not run migrations automatically.
- **WebSockets:** Vercel serverless functions are request/response. Long-lived WebSockets are not supported in this setup; use a dedicated service if you need them.
- **Cold starts:** The first request after idle may be slower while the function starts; subsequent requests reuse the same instance.

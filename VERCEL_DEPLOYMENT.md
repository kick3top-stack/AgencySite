# Deploying to Vercel

This project is a **static frontend** (Vite + React). Deploy the built files to Vercel with no server or API.

## Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Git repo (GitHub, GitLab, or Bitbucket) with this project, or Vercel CLI

## Option 1: Deploy with Vercel (Git)

1. **Push your code** to GitHub/GitLab/Bitbucket.

2. **Import the project on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel will use `vercel.json`:
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`

3. **Deploy**
   - Click **Deploy**. Vercel will run the build and serve the static site from `dist`.

## Option 2: Deploy with Vercel CLI

1. **Install the CLI**
   ```bash
   npm i -g vercel
   ```

2. **Log in and deploy**
   ```bash
   vercel login
   vercel
   ```
   Follow the prompts (link to existing project or create new one).

3. **Production deploy**
   ```bash
   vercel --prod
   ```

## Local preview

```bash
npm run build
npm run preview
```

Or with Vercel’s local server:

```bash
vercel dev
```

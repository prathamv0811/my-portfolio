# Deployment Guide

The best and easiest way to host your Next.js portfolio for **free** is using **Vercel** (the creators of Next.js).

## Prerequisites

1.  **GitHub Account**: You need a GitHub account.
2.  **Code on GitHub**: Your project code must be pushed to a GitHub repository.

## Step 1: Push Code to GitHub

If you haven't already, push your code to a new GitHub repository:

1.  Create a new repository on GitHub (e.g., `my-portfolio`).
2.  Run these commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin main
```

*(Replace `YOUR_USERNAME` and `my-portfolio` with your actual details)*

## Step 2: Deploy to Vercel

1.  Go to [Vercel.com](https://vercel.com/signup) and sign up using **Continue with GitHub**.
2.  Once logged in, click **"Add New..."** -> **"Project"**.
3.  You will see a list of your GitHub repositories. Find `my-portfolio` and click **"Import"**.
4.  **Configure Project**:
    *   **Framework Preset**: Leave as `Next.js`.
    *   **Root Directory**: Leave as `./`.
    *   **Environment Variables**: You can add these if you want to change them without editing code, but your site will work with the defaults I set up.
        *   `NEXT_PUBLIC_GITHUB_USERNAME` (Optional)
        *   `NEXT_PUBLIC_MEDIUM_USERNAME` (Optional)
5.  Click **"Deploy"**.

## Step 3: Success!

Vercel will build your site (takes about 1 minute). Once done, it will give you a live URL (e.g., `https://pratham-portfolio.vercel.app`).

*   **Automatic Updates**: Every time you push changes to GitHub, Vercel will automatically redeploy your site with the new changes.
*   **Custom Domain**: If you buy a domain (like `prathamjain.com`), you can connect it in the Vercel project settings for free.

## Important Notes

*   **Resume**: Make sure your `resume.pdf` is in the `public` folder before you push to GitHub.
*   **Cal.com**: Your booking page will work automatically.
*   **LinkedIn**: If you updated the `FEATURED_POSTS` in the code, they will show up automatically.

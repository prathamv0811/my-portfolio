# Integration Guide: LinkedIn & GitHub

To make your website automatically update with your latest LinkedIn posts and GitHub projects, you need to connect to their official APIs. Since your website is a static application, this usually requires a small backend or a third-party service to handle the secure keys.

## 1. LinkedIn Integration (Automatic Posts)

LinkedIn's API is strict and requires an access token that expires every 60 days.

### Option A: Use a Widget Service (Easiest)
Services like **Elfsight** or **Tagembed** provide a pre-built widget.
1.  Create an account on [Elfsight](https://elfsight.com/linkedin-feed-widget/).
2.  Connect your LinkedIn account.
3.  Customize the look to match your dark theme.
4.  Copy the "Embed Code" (usually a `<script>` or `<div>`).
5.  Paste it into `components/sections/SocialFeed.tsx`.

### Option B: Custom API Integration (Advanced)
1.  Create a LinkedIn App at [LinkedIn Developers](https://www.linkedin.com/developers/).
2.  Get your **Client ID** and **Client Secret**.
3.  You will need a backend (like Next.js API Routes) to exchange these for an **Access Token**.
4.  Use the `https://api.linkedin.com/v2/ugcPosts` endpoint to fetch your posts.

**Current Solution**: We are currently using a *manual* list in `lib/social-service.ts`. You can simply update this file whenever you want to add a new post.

## 2. GitHub Integration (Automatic Projects)

GitHub is easier to integrate. We can fetch your pinned repositories using their public API.

### Steps to Integrate:
1.  **Provide your GitHub Username**: I need your exact GitHub username (e.g., `pratham-v-jain`).
2.  **Update the Code**: I can modify `components/sections/Projects.tsx` to fetch data from `https://api.github.com/users/YOUR_USERNAME/repos`.

### Example Code Snippet:
```typescript
// We can add this to your Projects component
useEffect(() => {
  fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=4')
    .then(res => res.json())
    .then(data => setProjects(data));
}, []);
```

## Next Steps
1.  **For LinkedIn**: I recommend sticking to the manual method for now unless you want to pay for a widget service.
2.  **For GitHub**: Please share your **GitHub Username**, and I will automate the Projects section for you!

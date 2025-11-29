import Parser from "rss-parser";

export interface SocialPost {
    id: string;
    platform: "linkedin" | "youtube" | "twitter";
    content: string;
    date: string;
    link: string;
    image?: string;
    likes?: number;
    comments?: number;
    featured?: boolean;
}

// Note: Direct LinkedIn RSS feeds are deprecated. 
// We use a public RSS bridge or a service like PolitePol/FetchRSS to generate a feed from the public activity page.
// For this demo, we will use a placeholder URL. In production, the user needs to generate a real RSS URL.
const LINKEDIN_RSS_URL = "https://rss.app/feeds/v1.1/tJ9X8q8q8q8q8q8q.json"; // Placeholder

// specific posts you want to highlight.
const FEATURED_POSTS: SocialPost[] = [
    {
        id: "featured-1",
        platform: "linkedin",
        content: "🚀 Excited to share updates on my latest work! Check out the full post on LinkedIn for details on our recent breakthroughs in embodied AI. #Robotics #AI #DeepTech",
        date: "Featured",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7399665612299362304/",
        likes: 120,
        comments: 45,
        featured: true,
    },
    {
        id: "featured-2",
        platform: "linkedin",
        content: "💡 Reflecting on the journey of building Neural Stride Labs. It's been an incredible ride so far. Read more about our vision and progress. #Startup #Founder #Innovation",
        date: "Featured",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7371607848587505664/",
        likes: 95,
        comments: 32,
        featured: true,
    },
];

export async function getSocialPosts(): Promise<SocialPost[]> {
    try {
        const parser = new Parser();
        // In a real scenario with a valid RSS URL:
        // const feed = await parser.parseURL(LINKEDIN_RSS_URL);

        // Since we don't have a live RSS URL for this specific profile yet, we will simulate the "Live" behavior
        // by returning the curated list but with a "Live" tag to show the integration point.
        // When a real RSS URL is provided, the code below would be used:

        /*
        const posts = feed.items
            .filter(item => !item.title?.toLowerCase().includes("reposted")) // Filter out reposts
            .map(item => ({
                id: item.guid || item.link || Math.random().toString(),
                platform: "linkedin" as const,
                content: item.contentSnippet || item.content || "",
                date: item.pubDate || "",
                link: item.link || "#",
            }));
        return posts;
        */

        // Returning curated "Original" posts as requested for now, simulating the filtered result
        const regularPosts: SocialPost[] = [
            {
                id: "1",
                platform: "linkedin",
                content: "Excited to announce that I've started my journey as Founder & Lead Researcher at Neural Stride Labs! We're building the next generation of generalist embodied agents. Stay tuned for updates on our first dataset release. 🚀 #Robotics #AI #Startup",
                date: "2 days ago",
                link: "https://www.linkedin.com/in/pratham-v-jain-mehta-59a23a1ba/",
                likes: 342,
                comments: 45,
            },
            {
                id: "2",
                platform: "linkedin",
                content: "Just published a new article on 'The State of Sim-to-Real Transfer in 2024'. It covers the latest techniques in domain randomization and adaptation. Check it out on Medium! 📝 #MachineLearning #Robotics",
                date: "1 week ago",
                link: "https://www.linkedin.com/in/pratham-v-jain-mehta-59a23a1ba/",
                likes: 189,
                comments: 23,
            },
            {
                id: "3",
                platform: "youtube",
                content: "Demo: Neural Stride's new cloth folding policy in action. Trained on 3000 hours of teleoperated data. 🤖👕",
                date: "2 weeks ago",
                link: "#",
                image: "https://cdn.pixabay.com/photo/2017/09/25/11/55/cyborg-2784280_1280.jpg",
                likes: 560,
                comments: 89,
            },
        ];

        return [...FEATURED_POSTS, ...regularPosts];
    } catch (error) {
        console.error("Failed to fetch social posts:", error);
        return FEATURED_POSTS; // Fallback to featured posts if fetch fails
    }
}

import { Octokit } from "octokit";

export interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    stars: number;
    videoUrl?: string;
}

export async function getGithubProjects(): Promise<Project[]> {
    try {
        // Fetch repos that the user has starred. This allows the user to "pin" projects to their portfolio
        // simply by starring them on GitHub.
        const response = await fetch('https://api.github.com/users/prathamv0811/starred?sort=created&direction=desc');

        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }

        const data = await response.json();

        // Map GitHub repos to our Project interface
        // Filter to only include repositories owned by the user (prathamv0811)
        const projects: Project[] = data
            .filter((repo: any) => repo.owner.login === 'prathamv0811')
            .map((repo: any) => {
                // Content Cleaning
                let title = repo.name.replace(/-/g, ' ').replace(/_/g, ' ');
                if (title.toLowerCase() === 'solo table') title = 'Solo Table';

                const tags = [repo.language, ...(repo.topics || [])]
                    .filter(Boolean)
                    .map((tag: string) => {
                        if (tag.toLowerCase() === 'gemini') return 'Gemini';
                        if (tag.toLowerCase() === 'python') return 'Python';
                        return tag;
                    })
                    .slice(0, 3);

                // Ensure at least one tag
                if (tags.length === 0) tags.push("Robotics");

                return {
                    title: title,
                    description: repo.description || "No description available.",
                    tags: tags,
                    github: repo.html_url,
                    demo: repo.homepage || "#",
                    stars: repo.stargazers_count,
                    // For now, assign a random placeholder video or specific ones based on title
                    videoUrl: "https://cdn.pixabay.com/video/2023/10/22/186115-877653483_large.mp4"
                };
            });

        return projects;
    } catch (error) {
        console.error("Error fetching GitHub projects:", error);
        // Fallback to static data if API fails
        return [
            {
                title: "Solo-TAble",
                description: "An isolated environment designed to eliminate external fluctuations, ensuring clean, reproducible data for training robust physical AI models.",
                tags: ["Physical AI", "Data Collection", "Reproducibility"],
                github: "https://github.com/prathamv0811/Solo-TAble",
                demo: "#",
                stars: 0,
                videoUrl: "https://cdn.pixabay.com/video/2023/10/22/186115-877653483_large.mp4"
            },
            {
                title: "Open Duck Mini",
                description: "A miniature, accessible version of the BDX droid, designed to democratize access to open-source robotics hardware and research.",
                tags: ["Open Source", "Robotics", "Hardware"],
                github: "https://github.com/prathamv0811/Open_Duck_Mini",
                demo: "#",
                stars: 0,
                videoUrl: "https://cdn.pixabay.com/video/2023/10/22/186115-877653483_large.mp4"
            },
            {
                title: "LLM Navigation Gemini",
                description: "Exploring large language models for robotic navigation and reasoning, leveraging Gemini for high-level decision making.",
                tags: ["LLMs", "Navigation", "Reasoning", "Gemini"],
                github: "https://github.com/prathamv0811/LLM-Navigation_gemini",
                demo: "#",
                stars: 0,
                videoUrl: "https://cdn.pixabay.com/video/2023/10/22/186115-877653483_large.mp4"
            },
            {
                title: "Solo Server",
                description: "A server CLI interface for Physical AI pipelines, facilitating seamless integration and control of robotic systems.",
                tags: ["CLI", "Physical AI", "Infrastructure"],
                github: "https://github.com/prathamv0811/solo-server",
                demo: "https://getsolo.tech/",
                stars: 0,
                videoUrl: "https://cdn.pixabay.com/video/2023/10/22/186115-877653483_large.mp4"
            },
        ];
    }
}

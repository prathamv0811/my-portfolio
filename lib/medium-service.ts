export interface Article {
    title: string;
    link: string;
    thumbnail: string;
    pubDate: string;
    categories: string[];
    description: string;
}

export async function getMediumArticles(): Promise<Article[]> {
    try {
        const response = await fetch(
            'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@princecrronaldo64'
        );

        if (!response.ok) {
            throw new Error('Failed to fetch medium articles');
        }

        const data = await response.json();

        if (data.status !== 'ok') {
            throw new Error('Failed to parse RSS feed');
        }

        // Map the items to our Article interface
        const articles: Article[] = data.items.map((item: any) => ({
            title: item.title,
            link: item.link,
            thumbnail: item.thumbnail, // Medium RSS often puts the first image here
            pubDate: item.pubDate,
            categories: item.categories || [],
            description: item.description, // Contains HTML content
        }));

        return articles;
    } catch (error) {
        console.error("Error fetching Medium articles:", error);
        return [];
    }
}

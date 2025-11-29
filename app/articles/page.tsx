"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getMediumArticles, Article } from "@/lib/medium-service";
import { CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const data = await getMediumArticles();
                setArticles(data);
            } catch (error) {
                console.error("Failed to load articles", error);
            } finally {
                setLoading(false);
            }
        }

        fetchArticles();
    }, []);

    // Function to strip HTML tags for a clean excerpt
    const getExcerpt = (html: string, limit: number = 150) => {
        const text = html.replace(/<[^>]+>/g, '');
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2 mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Writing
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Thoughts on Robotics, AI, and the future of embodied intelligence.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-[400px] rounded-xl bg-neutral-900/50 animate-pulse border border-white/5" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <a href={article.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                                    <SpotlightCard className="h-full flex flex-col bg-neutral-900/50 backdrop-blur-md border-white/10 hover:border-primary/50 transition-colors">
                                        {/* Thumbnail */}
                                        <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-neutral-800">
                                            {article.thumbnail ? (
                                                <Image
                                                    src={article.thumbnail}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-muted-foreground">
                                                    <span className="text-4xl">✍️</span>
                                                </div>
                                            )}
                                        </div>

                                        <CardHeader className="space-y-2">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar className="h-3 w-3" />
                                                <span>{new Date(article.pubDate).toLocaleDateString()}</span>
                                            </div>
                                            <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                                {article.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-muted-foreground line-clamp-3">
                                                {getExcerpt(article.description)}
                                            </p>
                                        </CardContent>

                                        <CardFooter className="pt-4 flex flex-wrap gap-2">
                                            {article.categories.slice(0, 3).map((tag, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs bg-neutral-800 text-neutral-300 hover:bg-neutral-700">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </CardFooter>
                                    </SpotlightCard>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

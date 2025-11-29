"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Youtube, ThumbsUp, MessageSquare, ExternalLink, Loader2, Play } from "lucide-react";
import { getSocialPosts, type SocialPost } from "@/lib/social-service";
import { ProjectCardSkeleton } from "@/components/ui/project-card-skeleton";

export function SocialFeed() {
    const [posts, setPosts] = React.useState<SocialPost[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getSocialPosts();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching social posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section id="media" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold font-serif tracking-tight mb-6">Media & Updates</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Latest updates, talks, and videos from my journey in robotics.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                        {[1, 2, 3].map((i) => (
                            <ProjectCardSkeleton key={i} />
                        ))}
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                    <Card className="h-full flex flex-col hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group text-center">
                                        <CardHeader className="flex flex-row items-center gap-4 pb-2 justify-center relative">
                                            {post.featured && (
                                                <div className="absolute -top-6 right-0 bg-yellow-500/90 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg backdrop-blur-sm">
                                                    Featured
                                                </div>
                                            )}
                                            <div className={`p-2 rounded-full transition-colors ${post.platform === 'linkedin' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white'}`}>
                                                {post.platform === 'linkedin' ? <Linkedin className="h-5 w-5" /> : <Youtube className="h-5 w-5" />}
                                            </div>
                                            <div className="flex flex-col text-left">
                                                <span className="text-sm font-medium capitalize">{post.platform}</span>
                                                <span className="text-xs text-muted-foreground">{post.date}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm mb-4 group-hover:text-foreground/90 transition-colors">{post.content}</p>
                                            {post.image && (
                                                <div className="aspect-video bg-neutral-800 rounded-lg overflow-hidden relative group mb-4">
                                                    <img
                                                        src="https://placehold.co/600x400/1a1a1a/FFF?text=Robot+Demo"
                                                        alt="Robot Demo"
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="h-12 w-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                                            <Play className="h-5 w-5 text-white fill-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                        <CardFooter className="border-t pt-4 flex justify-between text-muted-foreground">
                                            <div className="flex gap-4 text-xs">
                                                <span className="flex items-center gap-1">
                                                    <ThumbsUp className="h-3 w-3" /> {post.likes}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MessageSquare className="h-3 w-3" /> {post.comments}
                                                </span>
                                            </div>
                                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                        </CardFooter>
                                    </Card>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="mt-12 flex justify-center">
                    <Button size="lg" variant="outline" className="rounded-full gap-2 border-primary/20 hover:bg-primary/10 hover:text-primary" asChild>
                        <a href="https://www.linkedin.com/in/pratham-v-jain-mehta-59a23a1ba/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                            Connect on LinkedIn
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

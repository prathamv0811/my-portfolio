"use client";

import { motion } from "framer-motion";
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Loader2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useEffect, useState } from "react";
import { getGithubProjects, type Project } from "@/lib/github-service";
import { ProjectCardSkeleton } from "@/components/ui/project-card-skeleton";

export function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGithubProjects().then((data) => {
            setProjects(data);
            setLoading(false);
        });
    }, []);

    return (
        <section id="projects" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-serif tracking-tight mb-6">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Selected work in embodied AI, robot learning, and autonomous systems.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                        {[1, 2, 3, 4].map((i) => (
                            <ProjectCardSkeleton key={i} />
                        ))}
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <SpotlightCard className="h-full flex flex-col text-center shadow-lg bg-neutral-900/50 backdrop-blur-md border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-500 group">
                                    <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-neutral-800">
                                        {/* Static Image (Placeholder) */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 group-hover:opacity-0 transition-opacity duration-500 z-10">
                                            <span className="text-muted-foreground text-sm">Hover to Play</span>
                                        </div>
                                        {/* Video (Placeholder) */}
                                        {/* Video (Dynamic) */}
                                        {project.videoUrl && (
                                            <video
                                                src={project.videoUrl}
                                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                loop
                                                muted
                                                playsInline
                                                onMouseEnter={(e) => e.currentTarget.play()}
                                                onMouseLeave={(e) => e.currentTarget.pause()}
                                            />
                                        )}
                                    </div>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-2xl font-bold text-left">{project.title}</CardTitle>
                                            {project.stars > 0 && (
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded-full">
                                                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                    {project.stars}
                                                </div>
                                            )}
                                        </div>
                                        <CardDescription className="mt-3 text-base leading-relaxed text-left">{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="flex flex-wrap justify-start gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-800 text-primary border border-primary/20 capitalize"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-4 pt-6 border-t border-white/5 bg-white/5">
                                        <Button variant="ghost" size="sm" className="w-full gap-2" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-4 w-4" /> Code
                                            </a>
                                        </Button>
                                        {project.demo && project.demo !== "#" && (
                                            <Button variant="ghost" size="sm" className="w-full gap-2" asChild>
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-4 w-4" /> Demo
                                                </a>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

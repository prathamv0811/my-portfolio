"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, FileText } from "lucide-react";

// Mock data - replace with actual articles later
const articles = [
    {
        title: "Zero-Shot Sim-to-Real Transfer",
        description: "Investigating domain randomization techniques for robust policy transfer in quadruped robots.",
        date: "Oct 2023",
        type: "Research Paper",
        link: "#",
    },
    {
        title: "Embodied Intelligence: A Survey",
        description: "A comprehensive review of current approaches in embodied AI and future research directions.",
        date: "Sep 2023",
        type: "Article",
        link: "#",
    },
    {
        title: "Optimizing ROS 2 for Real-Time Control",
        description: "Technical analysis of DDS configurations for low-latency robotic control loops.",
        date: "Aug 2023",
        type: "Technical Note",
        link: "#",
    },
];

export function Articles() {
    return (
        <section id="research" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight mb-6">Research & Writings</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A collection of my writings and research contributions in robot learning, embodied intelligence, and AI.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <a href={article.link} className="block h-full group">
                                <Card className="h-full flex flex-col hover:border-primary/50 transition-all shadow-md border-border/50 text-center">
                                    <CardHeader>
                                        <div className="flex justify-center items-center gap-2 mb-3">
                                            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground uppercase tracking-wider">
                                                {article.type}
                                            </span>
                                            <span className="text-xs text-muted-foreground">{article.date}</span>
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{article.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-base leading-relaxed line-clamp-3">
                                            {article.description}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="justify-center pt-4 pb-6 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        Read Paper <ArrowUpRight className="ml-1 h-4 w-4" />
                                    </CardFooter>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

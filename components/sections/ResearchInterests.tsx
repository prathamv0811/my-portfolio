"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Network, Zap, Globe, Layers, Sparkles } from "lucide-react";

const interests = [
    { name: "Embodied Intelligence", icon: Brain },
    { name: "Reinforcement Learning", icon: Zap },
    { name: "Meta-Learning", icon: Layers },
    { name: "Zero-Shot Generalization", icon: Sparkles },
    { name: "Sim-to-Real Transfer", icon: Globe },
    { name: "World Models", icon: Network },
    { name: "Long-Horizon Planning", icon: Cpu },
];

export function ResearchInterests() {
    return (
        <section className="py-24 bg-background border-y border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-4xl mx-auto mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Research Interests</h2>
                    <p className="text-muted-foreground">Exploring the frontiers of generalist robotic agents.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={interest.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`p-4 rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:border-primary/50 hover:bg-neutral-800/80 transition-all group flex flex-col items-center justify-center gap-3 text-center ${index === 0 ? 'md:col-span-2 md:flex-row' : ''}`}
                        >
                            <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                <interest.icon className="h-5 w-5" />
                            </div>
                            <span className="font-medium text-sm">{interest.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

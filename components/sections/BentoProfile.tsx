"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const experiences = [
    {
        role: "Founder & Lead Researcher",
        company: "General Intelligence",
        companyUrl: "#",
        period: "Present",
    },
    {
        role: "Research Intern",
        company: "Wipro PARI",
        companyUrl: "https://www.wipropari.com/",
        period: "Present",
    },
    {
        role: "Community Manager",
        company: "Robotics India Community",
        companyUrl: "https://roboticsindiacommunity.in/",
        period: "Present",
    },
    {
        role: "Volunteer",
        company: "SOLO Tech",
        companyUrl: "https://www.getsolo.tech/",
        period: "Present",
    },
];

export function BentoProfile() {
    return (
        <section id="about" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
                >
                    {/* About Card - Spans 2 columns */}
                    <div className="md:col-span-2 h-full">
                        <SpotlightCard className="h-full bg-neutral-900/50 backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">About Me</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Pratham V Jain"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 128px, 160px"
                                    />
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
                                    <p>
                                        I’m Pratham V Jain, an aspiring embodied-AI researcher focused on building robots that can learn, adapt, and generalize across diverse environments. I’m currently a Research Intern at Wipro PARI, where I work on Physical AI, simulation pipelines, and learning-based control for real robotic systems.
                                    </p>
                                    <p>
                                        I’m deeply motivated by the long-term vision of general-purpose robot intelligence — systems that can learn from minimal experience, adapt to new tasks, and operate reliably in unstructured environments. My goal is to contribute to frontier research groups such as DeepMind Robotics and advance the science behind generalist embodied agents.
                                    </p>
                                </div>
                            </CardContent>
                        </SpotlightCard>
                    </div>

                    {/* Experience Card - Spans 1 column, 2 rows */}
                    <div className="md:col-span-1 md:row-span-2 h-full">
                        <SpotlightCard className="h-full flex flex-col bg-neutral-900/50 backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Experience</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-6">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative pl-4 border-l border-white/10">
                                        <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                                        <h4 className="font-semibold text-foreground">{exp.role}</h4>
                                        <div className="text-sm text-muted-foreground mt-1">
                                            {exp.companyUrl ? (
                                                <a
                                                    href={exp.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-primary transition-colors"
                                                >
                                                    {exp.company}
                                                </a>
                                            ) : (
                                                <span>{exp.company}</span>
                                            )}
                                        </div>
                                        <span className="text-xs text-muted-foreground/60 mt-1 block">{exp.period}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </SpotlightCard>
                    </div>

                    {/* Intersection Card - Spans 1 column */}
                    <div className="md:col-span-1 h-full">
                        <SpotlightCard className="h-full bg-neutral-900/50 backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">Focus Areas</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><span className="text-primary font-medium">Robot Learning</span> — RL, meta-learning</li>
                                    <li><span className="text-primary font-medium">Embodied Intelligence</span> — perception & control</li>
                                    <li><span className="text-primary font-medium">Sim-to-Real</span> — domain randomization</li>
                                </ul>
                            </CardContent>
                        </SpotlightCard>
                    </div>

                    {/* Community Card - Spans 1 column */}
                    <div className="md:col-span-1 h-full">
                        <SpotlightCard className="h-full bg-neutral-900/50 backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">Community</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        <span className="text-foreground font-medium">Manager</span> at Robotics India Community
                                    </li>
                                    <li>
                                        <span className="text-foreground font-medium">Volunteer</span> at SOLO Tech
                                    </li>
                                </ul>
                            </CardContent>
                        </SpotlightCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

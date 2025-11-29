"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
    {
        role: "Research Intern",
        company: "Wipro PARI",
        companyUrl: "https://www.wipropari.com/",
        period: "Present",
        description: "Working on Physical AI, simulation frameworks, and learning-based control algorithms for embodied robotic systems.",
        skills: ["Physical AI", "Simulation Frameworks"],
    },
    {
        role: "Community Manager",
        company: "Robotics India Community",
        companyUrl: "https://roboticsindiacommunity.in/",
        period: "Present",
        description: "Leading and mentoring India’s emerging robotics community, organizing events, and supporting open-source robotics learning.",
        skills: ["Community Leadership", "Mentorship", "Open Source"],
    },
    {
        role: "Volunteer",
        company: "SOLO Tech",
        companyUrl: "https://www.getsolo.tech/",
        period: "Present",
        description: "Contributing to accessible robotics education by designing structured learning pathways and mentoring learners.",
        skills: ["Education Design", "Curriculum", "Mentorship"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-32 bg-muted/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight mb-6">Experience</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Professional roles and contributions in robotics research and community.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="text-center shadow-md border-white/10 bg-neutral-900/50 backdrop-blur-md">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                        <div className="text-center md:text-left">
                                            <CardTitle className="text-2xl font-bold">{exp.role}</CardTitle>
                                            <div className="text-lg font-medium mt-1 text-primary">
                                                {exp.companyUrl && exp.companyUrl !== "#" ? (
                                                    <a
                                                        href={exp.companyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:underline underline-offset-4"
                                                    >
                                                        {exp.company}
                                                    </a>
                                                ) : (
                                                    <span>{exp.company}</span>
                                                )}
                                            </div>
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground bg-secondary px-4 py-1.5 rounded-full">
                                            {exp.period}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{exp.description}</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

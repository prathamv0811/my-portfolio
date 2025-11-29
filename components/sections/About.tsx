"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-32 bg-muted/20">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center space-y-12"
                >
                    <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
                    <div className="text-lg text-muted-foreground leading-relaxed space-y-8">
                        <p>
                            I’m Pratham V Jain, an aspiring embodied-AI researcher focused on building robots that can learn, adapt, and generalize across diverse environments. I’m currently a Research Intern at Wipro PARI, where I work on Physical AI, simulation pipelines, and learning-based control for real robotic systems.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12 text-center max-w-4xl mx-auto pt-4">
                            <div className="space-y-4">
                                <h3 className="font-bold text-foreground text-xl">My work sits at the intersection of:</h3>
                                <ul className="space-y-2 text-base">
                                    <li><span className="font-medium text-primary">Robot Learning & Generalization</span> — reinforcement learning, meta-learning, zero-shot adaptation</li>
                                    <li><span className="font-medium text-primary">Embodied Intelligence</span> — integrating perception, control, and world models</li>
                                    <li><span className="font-medium text-primary">Simulation-to-Real</span> — reproducible environments, domain randomization, scalable data generation</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-foreground text-xl">Community & Leadership:</h3>
                                <ul className="space-y-2 text-base">
                                    <li><span className="font-medium text-primary">Community Manager</span> — Robotics India Community, mentoring students and supporting open-source robotics learning</li>
                                    <li><span className="font-medium text-primary">Volunteer</span> — SOLO Tech, building accessible robotics education pathways</li>
                                </ul>
                            </div>
                        </div>

                        <p className="max-w-3xl mx-auto">
                            I’m motivated by the long-term vision of general-purpose robot intelligence — systems that can learn from minimal experience, adapt to new tasks, and operate reliably in unstructured environments. My goal is to contribute to frontier research groups such as DeepMind Robotics and advance the science behind generalist embodied agents.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

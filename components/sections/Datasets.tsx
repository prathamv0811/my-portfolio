"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Database, Mail } from "lucide-react";

export function Datasets() {
    return (
        <section id="datasets" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <Database className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">Datasets</h2>
                    </div>

                    <SpotlightCard className="bg-neutral-900/50 backdrop-blur-md border-white/10">
                        <div className="flex flex-col md:flex-row gap-8 p-6">
                            <div className="flex-1 space-y-4">
                                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                                    Coming Soon
                                </div>
                                <CardTitle className="text-2xl font-bold">The Neural Stride Cloth Folding Dataset</CardTitle>
                                <CardDescription className="text-lg leading-relaxed">
                                    3,000 hours of high-fidelity manipulation data for deformable objects.
                                    Captured using teleoperation and autonomous policies to advance research in non-rigid object manipulation.
                                </CardDescription>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {["Deformable Objects", "Manipulation", "3k Hours", "High-Fidelity"].map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col justify-center bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-lg font-semibold mb-2">Get Early Access</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Sign up to be notified when the dataset is released.
                                </p>
                                <div className="flex gap-2">
                                    <Input
                                        type="email"
                                        placeholder="researcher@university.edu"
                                        className="bg-neutral-950 border-white/10 focus:border-primary"
                                    />
                                    <Button className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">
                                        Join Waitlist
                                    </Button>
                                </div>
                                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                                    <Mail className="h-3 w-3" /> No spam, updates only.
                                </p>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>
        </section>
    );
}

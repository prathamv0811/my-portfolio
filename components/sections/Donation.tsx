"use client";

import { motion } from "framer-motion";
import { Coffee, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Donation() {
    return (
        <section className="py-12 border-t border-white/5 bg-neutral-900/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <SpotlightCard className="bg-neutral-900/50 backdrop-blur-md border-white/10 p-8 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Heart className="h-6 w-6 fill-current" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold font-serif mb-3">Support My Work</h3>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            If you find my open-source projects or research helpful, consider supporting my work.
                            Your contribution helps me maintain servers, buy hardware, and keep building.
                        </p>
                        <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-black font-bold rounded-full gap-2" asChild>
                            <a href="https://buymeacoffee.com/prathamv0811" target="_blank" rel="noopener noreferrer">
                                <Coffee className="h-5 w-5" />
                                Buy me a coffee
                            </a>
                        </Button>
                    </SpotlightCard>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export default function BookPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 md:px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
                        Book a Meeting
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Schedule a time to discuss robotics, research collaboration, or just chat.
                    </p>
                </motion.div>

                <SpotlightCard className="bg-neutral-900/50 backdrop-blur-md border-white/10 overflow-hidden">
                    <div className="w-full h-[600px] bg-neutral-950">
                        <iframe
                            src="https://cal.com/pratham-v-jain-h04rst"
                            style={{ width: "100%", height: "100%", border: "none" }}
                            title="Book a meeting"
                        />
                    </div>
                </SpotlightCard>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const introText = "Hi, I'm Pratham";

export function Hero() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < introText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + introText[index]);
                setIndex((prev) => prev + 1);
            }, 100); // Slower typing speed for shorter title
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            {/* Mesh Gradient Overlay */}
            <div className="absolute inset-0 -z-20 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.4),transparent_50%)] animate-pulse" />
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h1 className="text-6xl md:text-8xl font-extrabold font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2 min-h-[1.2em] whitespace-pre-wrap">
                            {text}
                            <span className="animate-pulse text-primary">|</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
                            I'm an aspiring embodied-AI researcher building robots that can learn, adapt, and generalize. Currently exploring the foundations of physical intelligence and next-gen robotic agents.
                        </p>
                    </motion.div>


                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function ResearchPage() {
    return (
        <div className="min-h-screen pt-32 px-4 md:px-6">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-6"
                >
                    <div className="p-6 rounded-full bg-primary/10 text-primary mb-4">
                        <FileText className="h-12 w-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">
                        Research Papers
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        I'm currently working on several research projects in embodied AI and robot learning.
                        Publications will be listed here once they are released.
                    </p>
                    <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground mt-8">
                        Coming Soon
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

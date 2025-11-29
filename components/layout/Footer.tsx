import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Donation } from "@/components/sections/Donation";

export function Footer() {
    return (
        <>
            <Donation />
            <footer className="bg-background border-t border-border/40 py-8">
                <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary" />
                        <span className="text-sm font-bold tracking-tight">Pratham V Jain</span>
                    </div>

                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Pratham V Jain. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <Link href="mailto:princecrronaldo64@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-4 w-4" />
                        </Link>
                        <Link href="https://github.com/prathamv0811" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-4 w-4" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/pratham-v-jain-mehta-59a23a1ba/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

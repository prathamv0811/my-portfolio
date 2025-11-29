import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a", // Deep black from reference
                foreground: "#ffffff",
                primary: {
                    DEFAULT: "#3b82f6", // Electric Blue
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#1f2937", // Dark gray for secondary buttons/cards
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#171717", // Slightly lighter black for backgrounds
                    foreground: "#a3a3a3", // Gray text
                },
                accent: {
                    DEFAULT: "#2563eb",
                    foreground: "#ffffff",
                },
                card: {
                    DEFAULT: "#0a0a0a",
                    foreground: "#ffffff",
                },
                border: "#262626",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
            },
            backgroundImage: {
                "hero-glow": "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-out",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
export default config;

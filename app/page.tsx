import { Hero } from "@/components/sections/Hero";
import { BentoProfile } from "@/components/sections/BentoProfile";
import { Projects } from "@/components/sections/Projects";
import { ResearchInterests } from "@/components/sections/ResearchInterests";

export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <BentoProfile />
            <Projects />
            <ResearchInterests />
        </div>
    );
}

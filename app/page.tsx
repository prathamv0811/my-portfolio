import { Hero } from "@/components/sections/Hero";
import { BentoProfile } from "@/components/sections/BentoProfile";
import { ResearchInterests } from "@/components/sections/ResearchInterests";

export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <BentoProfile />
            <ResearchInterests />
        </div>
    );
}

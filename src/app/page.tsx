import { Hero } from "@/components/sections/Hero";
import { StackMarquee } from "@/components/sections/StackMarquee";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { PillNav } from "@/components/ui/PillNav";

export default function Home() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <ProjectGrid />
      <PillNav />
    </>
  );
}

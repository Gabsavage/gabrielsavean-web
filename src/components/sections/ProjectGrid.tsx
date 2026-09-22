"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ecosystemProjects, type EcosystemProject } from "@/content/ecosystem";

function ProjectCard({ project }: { project: EcosystemProject }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <a ref={cardRef} href={project.href} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-bone">
        <motion.div style={{ y }} className="absolute inset-[-6%]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </motion.div>
      </div>
      <div className="mt-3 font-mono text-sm leading-[1.15]">
        <p>{project.name}</p>
        <p className="text-charcoal">{project.scope}</p>
        <p className="text-charcoal">{project.stack}</p>
      </div>
    </a>
  );
}

export function ProjectGrid() {
  return (
    <section
      id="ecosysteme"
      className="mx-auto max-w-[1440px] px-5 pt-16 pb-32 sm:px-10 sm:pb-40"
    >
      <h2 className="text-display mb-10 text-[48px] sm:text-[64px]">
        Écosystème
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {ecosystemProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

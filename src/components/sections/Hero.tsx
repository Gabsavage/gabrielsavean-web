"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StatusIndicator } from "@/components/ui/StatusIndicator";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <section id="accueil" ref={containerRef} className="relative h-[180vh]">
      <motion.div
        style={{ opacity, y, scale }}
        className="sticky top-0 mx-auto flex h-screen max-w-[1440px] flex-col justify-center gap-8 px-5 pb-16 sm:px-10"
      >
        <StatusIndicator label="Disponible janv. 2027 — Lima jusqu'en déc. 2026" />

        <h1 className="text-display text-[15vw] sm:text-[96px] lg:text-[128px]">
          Plus tech que finance.
          <br />
          Plus business que tech.
        </h1>

        <p className="max-w-[560px] font-sans text-lg leading-[1.2] text-charcoal">
          Finance, automatisation et produit — trois terrains que je fais
          tenir ensemble, du reporting Danone au dashboard COMEX jusqu&rsquo;aux
          bots que je fais tourner pour le plaisir.
        </p>
      </motion.div>
    </section>
  );
}

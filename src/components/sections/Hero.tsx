import { StatusIndicator } from "@/components/ui/StatusIndicator";

export function Hero() {
  return (
    <section
      id="accueil"
      className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 pt-20 pb-16 sm:px-10 sm:pt-28"
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
    </section>
  );
}

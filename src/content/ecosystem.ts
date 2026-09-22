export type EcosystemProject = {
  name: string;
  scope: string;
  stack: string;
  href: string;
  image: string;
  imageAlt: string;
};

// Sourced from each project's own README (github.com/Gabsavage). Kept as data,
// separate from the grid component, so adding a project never touches the UI.
export const ecosystemProjects: EcosystemProject[] = [
  {
    name: "polybot",
    scope: "Bot quant Polymarket — signals-only, human-in-the-loop",
    stack: "Python · DuckDB · R2",
    href: "https://github.com/Gabsavage/polybot",
    image: "/ecosystem/polybot.png",
    imageAlt: "Illustration abstraite évoquant le carnet d'ordres et les signaux de polybot",
  },
  {
    name: "Tant Pis.",
    scope: "E-commerce DTC — grip socks Pilates",
    stack: "Next.js · Stripe",
    href: "https://tantpis-web.vercel.app",
    image: "/ecosystem/tantpis.png",
    imageAlt: "Capture d'écran de la page d'accueil de Tant Pis.",
  },
  {
    name: "JobAI",
    scope: "Pipeline n8n de recherche d'emploi automatisée",
    stack: "n8n · LLM · Google Workspace",
    href: "https://github.com/Gabsavage/jobai-automation",
    image: "/ecosystem/jobai.png",
    imageAlt: "Illustration abstraite évoquant le pipeline d'automatisation JobAI",
  },
  {
    name: "GabsavClawd",
    scope: "Scout de meme-tokens pump.fun — décision humaine sur Telegram",
    stack: "Node.js · Perplexity · Grok · Claude",
    href: "https://github.com/Gabsavage/GabsavClawd",
    image: "/ecosystem/gabsavclawd.png",
    imageAlt: "Illustration abstraite évoquant le scouting et la revue humaine de GabsavClawd",
  },
  {
    name: "PVP Blackjack",
    scope: "Blackjack compétitif 1v1, casino sans argent réel",
    stack: "Next.js · Supabase · PostHog",
    href: "https://pvp-blackjack.vercel.app",
    image: "/ecosystem/pvp-blackjack.png",
    imageAlt: "Capture d'écran de PVP Blackjack",
  },
];

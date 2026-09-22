export type EcosystemProject = {
  name: string;
  scope: string;
  stack: string;
  href: string;
};

// Sourced from each project's own README (github.com/Gabsavage). Kept as data,
// separate from the grid component, so adding a project never touches the UI.
export const ecosystemProjects: EcosystemProject[] = [
  {
    name: "polybot",
    scope: "Bot quant Polymarket — signals-only, human-in-the-loop",
    stack: "Python · DuckDB · R2",
    href: "https://github.com/Gabsavage/polybot",
  },
  {
    name: "Tant Pis.",
    scope: "E-commerce DTC — grip socks Pilates",
    stack: "Next.js · Stripe",
    href: "https://github.com/Gabsavage/tantpis-web",
  },
  {
    name: "JobAI",
    scope: "Pipeline n8n de recherche d'emploi automatisée",
    stack: "n8n · LLM · Google Workspace",
    href: "https://github.com/Gabsavage/jobai-automation",
  },
  {
    name: "GabsavClawd",
    scope: "Scout de meme-tokens pump.fun — décision humaine sur Telegram",
    stack: "Node.js · Perplexity · Grok · Claude",
    href: "https://github.com/Gabsavage/GabsavClawd",
  },
];

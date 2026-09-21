# PORTFOLIO — Brief Projet (document vivant)
> Conv d'orchestration : stratégie/idéation. Exécution : Claude Code.
> Objectif : décrocher un stage de fin d'études (janvier 2027), cible large (fintech, tech scale-up, grands groupes, conseil transfo/IA). Pensé pour durer au-delà (stage, poste), pas un livrable one-shot.

---

## POSITIONNEMENT

**Hook** : "Plus tech que n'importe quel profil finance/business, plus business que n'importe quel profil tech."

Le portfolio n'est pas un CV en HTML. Il est lui-même une preuve du positionnement : le fait qu'il soit buildé (stack, perf, design) par Gab fait partie de la démonstration, pas juste le contenu.

**Audience** : généraliste, pas de ciblage unique. La segmentation se fait via la diversité des case studies, pas via le message d'accroche (qui reste large et memorable).

---

## PHILOSOPHIE — SITE VIVANT

Deux implications concrètes du "ça doit durer" :

- **Architecture, pas features** : le contenu (case studies, projets, timeline) vit en MDX/JSON, découplé du code. Ajouter un projet ou une étape de parcours ne doit jamais nécessiter de retoucher les composants.
- **Discipline sur l'interactif** : "vivant" ne veut pas dire "tout est interactif partout". Deux moments interactifs signature pour le v1 (voir plus bas), le reste reste solide en statique/animations légères. On enrichit au fil du temps, pas tout d'un coup — sinon le site ne sort jamais.

---

## STRUCTURE DU SITE

### 1. Hero
- Positionnement en une phrase, punchy, pas de "Hi I'm Gab, welcome to my portfolio"
- Sous-ligne : parcours en 3 mots clés (finance, tech, AI/automation) + où il est (Lima, exchange, dispo janvier 2027)
- CTA : CV (PDF) + contact

### 2. Case studies signature (3, pas plus)
Chaque case study cible implicitement une audience différente :

**a) Danone — l'automatisation qui a scale**
- Angle : le tool VBA d'automatisation des factures (PAS le pipeline SAP), parce que c'est celui qui a été présenté au FD Call
- Narrative : problème → solution → impact → reconnaissance (FD Call devant 200+ directeurs financiers, seul stagiaire jamais invité, CV demandé par le CFO Office)
- Parle à : grands groupes (rigueur, impact mesurable, capacité à convaincre en interne)
- ⚠️ À vérifier avant publication : chiffres (100M€ OPEX, gain de temps 30min→5min) diffusables publiquement ou à généraliser/arrondir pour éviter tout souci de confidentialité

**b) Welcome to the Jungle — dashboards pour le COMEX**
- Angle : Looker/Omni, RevOps/StratOps, dashboards utilisés en comité exécutif
- Parle à : tech scale-ups (impact produit/data, environnement rapide)

**c) polybot — le bot quant Polymarket**
- Angle : indexing CLOB, tracking de wallets "sharp money", alertes tiered avec review humaine, aucune auto-exécution. Python/DuckDB/R2.
- Pourquoi celui-là plutôt qu'un autre side project : c'est littéralement à l'intersection finance x tech (le positionnement exact de Gab), et l'approche "signals-only, human-in-the-loop" est rassurante côté recruteur généraliste (grands groupes, conseil) tout en étant impressionnante côté tech/fintech. Rare projet qui coche les deux audiences à la fois.
- GabsavClawd (agent de scouting meme-token sur pump.fun) reste un excellent build mais l'univers memecoin est plus clivant en optique recruteur classique → il descend en case légère dans l'écosystème, pas en signature.
- Parle à : fintech/tech ET grands groupes/conseil

### 3. Méthodologie / comment je bois travaille
- Reprend le bloc 3 de ton framework de cover letter (le différenciateur perso)
- Doit rester cohérent avec ce que tu écris dans tes lettres de motivation — même angle, formulation adaptée au format site

### 4. Stack & outils
- Présentation visuelle (pas une liste à puces plate) : Power BI, VBA, Python, SQL, SAP, Looker, n8n, Next.js
- Peut être fusionné avec la section 2 (badges sur chaque case study) plutôt qu'une section séparée — à trancher en design

### 5. Écosystème / side projects (léger, pas des case studies complètes)
- **Tant Pis.** — DTC e-commerce, Pilates grip socks (Next.js, Stripe)
- **JobAI** — pipeline n8n de job search automation (scraping, scoring, génération CV/lettre)
- **GabsavClawd** — agent autonome de scouting sur pump.fun, pipeline Perplexity/Grok → Claude → review humaine Telegram. Cadrer sur l'ingénierie de l'agent (orchestration multi-modèle, human-in-the-loop), pas sur le trading memecoin en soi
- **PVP Blackjack** — jeu mobile social casino, co-développé avec son frère (3D) et son meilleur pote (business). Mention légère, pas de détails sur le deal entre partenaires
- Format : cards courtes avec lien, pas de développement long
- Objectif : montrer le volume et la diversité de ce qui est shippé

### 6. Contact / CV
- Téléchargement CV PDF
- Email + LinkedIn
- Dispo à partir de janvier 2027, mention Lima jusqu'à décembre 2026

---

## MOMENTS INTERACTIFS SIGNATURE (v1)

Cap volontaire à 2, pour ne pas exploser le scope :

1. **Timeline de parcours interactive** — Paris → Lima → futur. La partie "futur" reste une fenêtre ouverte : c'est explicitement la case "prochaine opportunité, dispo janvier 2027", pas une fin figée. Storytelling à intégrer : échange à Centrum PUCP (Lima), une des meilleures universités du Pérou, cours de MBA en espagnol — preuve d'adaptabilité, pas juste un point sur une carte.
2. **Live/demo des projets** — aperçu interactif ou visuel des projets qui s'y prêtent (ex : aperçu des signaux polybot, démo du flow JobAI). Niveau d'effort à calibrer projet par projet avec Claude Code — certains n'auront qu'un screenshot/gif soigné, pas besoin de tout rendre live pour de vrai.

Tout le reste du site (case studies, écosystème, contact) reste propre et bien designé mais pas "interactif" au sens fort — pas de sur-ingénierie sur des sections qui n'en ont pas besoin.

---

## DIRECTION DESIGN

- Identité visuelle propre, distincte de Tant Pis. (pas de palette terracotta, c'est la marque, pas Gab)
- Doit transmettre : rigueur + sensibilité produit, pas "générique template SaaS"
- Piste : typographie éditoriale pour les titres (sérieux/premium) + accents plus techniques (mono ou sans-serif net) pour le contenu data/stack — écho au double positionnement finance/tech
- À affiner avec le skill frontend-design côté Claude Code

---

## STACK TECHNIQUE

- Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion, Vercel — stack déjà maîtrisée (Tant Pis., PVP Blackjack)
- Contenu des case studies en MDX ou JSON pour rester maintenable sans re-toucher le code à chaque update

---

## OUVERT / À TRANCHER

- [ ] Nom de domaine (déjà un candidat ? nouveau repo perso à créer, séparé de tantpis-web)
- [ ] Chiffres Danone : diffusables tels quels ou à arrondir/généraliser
- [ ] CV PDF à jour, prêt à lier
- [ ] Palette et typographie définitives (à faire avec Claude Code + frontend-design skill)
- [ ] Niveau de détail par projet écosystème (screenshot statique vs vraie démo live) — à trancher projet par projet en construisant

---

## SÉQUENCE D'EXÉCUTION PROPOSÉE
1. Trancher les derniers points ouverts ci-dessus (rapide, avec Gab)
2. Rédiger le contenu des 3 case studies signature (Danone, WTTJ, polybot) + les 4 cards écosystème
3. Claude Code : nouveau repo, skeleton + architecture de contenu (MDX/JSON) pensée pour durer
4. Claude Code : timeline interactive Paris → Lima → futur
5. Claude Code + frontend-design skill : passe design (palette, typo, animations) + demos projets
6. Intégration contenu final + polish + déploiement Vercel

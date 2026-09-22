# Feuille de route — Portfolio

> Document vivant. Claude Code met à jour les statuts au fur et à mesure que tu fournis les infos ou coches des cases. Ne pas éditer la structure toi-même — donne les infos en conversation, je mets ce fichier à jour.

Dernière mise à jour : 2026-09-22

---

## 🔧 Reprise de session en cours (lire en premier)

Session interrompue pour un redémarrage de Claude Code (nécessaire pour charger les outils MCP Higgsfield fraîchement connectés). Tout le travail ci-dessous est en cours, pas fini — voici l'état exact.

### Tâche en cours
Donner plus de vie au site (`gabrielsavean-web`) : mécanique de scroll plus poussée + vrais visuels dans la grille écosystème, inspiré du site de référence [duties.xyz](https://www.duties.xyz/) que Gabriel a demandé de suivre fidèlement.

**Décision importante pour cadrer ça** : on reprend fidèlement le *système* de duties.xyz (déjà fait — palette, typo, spacing, patterns de composants, voir `DESIGN.md` et `DESIGNDUTIES.md`) et sa *sophistication d'interaction* (mécanique de scroll), mais **pas leur contenu propre** — pas leur accroche ("BRANDS AND WEBSITES FOR BRAVE COMPANIES"), pas leur texte de bandeau, pas leurs visuels spécifiques. C'est leur propriété créative, et ça ne correspondrait à rien pour Gabriel (pas un studio de design). Tout le contenu/visuel doit être original et représenter les vrais projets de Gabriel.

**Budget Higgsfield** : images uniquement pour l'instant (décision de Gabriel) — pas de vidéo (une vidéo 8s/1080p coûte ~96 des 110 crédits disponibles). Images ~1-2 crédits chacune.

**Ambition scroll** : révélations au scroll + sections épinglées/parallax (pas de scroll-scrub vidéo complet, faute de budget vidéo).

### Où ça bloquait
Higgsfield CLI (`@higgsfield/cli`) refuse la génération directe sur ce plan (`only_mcp_usage_on_trial_is_available`). Solution : connecté leur serveur MCP officiel (`https://mcp.higgsfield.ai/mcp`) via `claude mcp add --transport http higgsfield https://mcp.higgsfield.ai/mcp -s user` (scope **user**, pas local — sinon invisible depuis un autre terminal). Authentifié avec succès (`claude mcp list` → `higgsfield ... ✔ Connected`). Il fallait un redémarrage de session pour que les outils MCP apparaissent côté Claude Code.

**Première chose à faire dans la nouvelle session** : vérifier que des outils `mcp__higgsfield__*` sont bien disponibles (chercher avec l'outil de recherche d'outils). Si toujours absents, vérifier `claude mcp list` en bash — si "Connected", le souci est ailleurs (peut-être un redémarrage complet de l'app, pas juste une nouvelle session, est nécessaire).

### État technique exact (commit `abac563`, poussé sur `main`)
- `framer-motion` installé (pas encore utilisé dans le code)
- `src/content/ecosystem.ts` : ajout des champs `image`/`imageAlt` sur chaque projet + ajout de l'entrée **PVP Blackjack** (oubliée dans la première passe)
- Captures d'écran réelles (via Playwright) déjà prises et committées :
  - `public/ecosystem/tantpis.png` (tantpis-web.vercel.app)
  - `public/ecosystem/pvp-blackjack.png` (pvp-blackjack.vercel.app)
- `DESIGNDUTIES.md` ajouté (extrait de style que Gabriel a fourni) — à utiliser comme référence système, pas comme source de contenu

### Ce qui reste à faire, dans l'ordre
1. **Générer 3 images via Higgsfield MCP** (illustrations abstraites monochromes, pas de faux screenshots — voir prompts ci-dessous), sauvegarder dans `public/ecosystem/` :
   - `polybot.png`
   - `jobai.png`
   - `gabsavclawd.png`
2. **Mettre à jour `ProjectGrid.tsx`** pour afficher `next/image` avec le champ `image` de chaque projet au lieu du bloc plat `bg-bone` actuel
3. **Construire la mécanique de scroll** (avec `framer-motion`, déjà installé) :
   - Hero épinglé (`position: sticky` + `useScroll`/`useTransform`) qui se transforme/s'efface pendant que la section suivante apparaît
   - Parallax léger sur les images de la grille écosystème (une seule idée de mouvement appliquée uniformément, pas un effet différent par carte)
4. **Tester visuellement** (captures desktop + mobile via Playwright, comme la première passe design) avant de committer
5. **Committer et pousser** avec un message clair

### Prompts Higgsfield à utiliser (modèle `gpt_image_2_5`, `--aspect_ratio 4:5 --resolution 2k`)
- **polybot** : `Abstract editorial illustration of a financial order book depth chart and candlestick data streams, minimal black ink line art on warm cream paper background, monochrome, technical precision, no color, high contrast, generous negative space`
- **GabsavClawd** : `Abstract editorial illustration representing an autonomous scouting agent analyzing signals, radar and network node motif, minimal black ink line art on warm cream paper background, monochrome, technical precision, no color`
- **JobAI** : `Abstract editorial illustration representing an automated pipeline workflow, connected nodes and document icons, minimal black ink line art on warm cream paper background, monochrome, technical precision, no color`

---

## Décisions déjà tranchées

- **Langue** : bilingue FR/EN, français par défaut, sélecteur de langue visible.
- **Chiffres Danone** : arrondis/généralisés (pas de chiffres exacts d'entreprise publiés).
- **Repo GitHub** : public, sur le compte perso [Gabsavage](https://github.com/Gabsavage).
- **Domaine** : gabrielsavean.xyz (déjà acheté).
- **Case study signature #3** : polybot (pas GabsavClawd, qui reste une carte écosystème légère).
- **Direction design** : système "monochrome broadside manifesto" choisi par Gabriel (voir `DESIGN.md`) — noir/crème pur, headline géante en grotesque condensée, mono technique pour labels/stack, zéro ombre, zéro accent couleur. Polices : équivalents gratuits Google Fonts (Big Shoulders, IBM Plex Mono, Inter) à la place des polices payantes du système de référence.

---

## 🔴 À toi de jouer

### Case study Danone
- [ ] Valider ou ajuster le narratif tel que dans le brief (problème → solution → impact → reconnaissance FD Call)
- [ ] Donner une formulation généralisée des chiffres que tu es à l'aise de publier (ex. "budget à 9 chiffres", "gain de temps de l'ordre de 80%") — je peux te proposer un premier jet à valider si tu préfères partir de ça
- [ ] Confirmer si le nom "Danone" est citable tel quel (généralement oui pour un stage, mais à confirmer — pas de logo officiel sans autorisation)
- [ ] Visuel du tool si tu en as un présentable (capture anonymisée, sans données réelles) — sinon on reste en texte/mockup

### Case study Welcome to the Jungle
- [ ] Détails sur les dashboards Looker/Omni : quelles métriques, quel usage concret en COMEX, quel impact observé
- [ ] Captures d'écran anonymisées si présentables (sans données sensibles WTTJ)
- [ ] Confirmer si "Welcome to the Jungle" est citable tel quel

### Timeline interactive (Paris → Lima → futur)
- [ ] Dates clés à me donner : parcours avant Danone/WTTJ, dates des stages, début de l'échange à Centrum PUCP (Lima), fin prévue (déc. 2026)
- [ ] Un ou deux détails concrets sur l'échange à valoriser (ex. cours de MBA en espagnol) au-delà de ce qui est déjà dans le brief

### CV & contact
- [ ] CV PDF à jour (fichier à me donner, j'intègre le lien de téléchargement)
- [ ] Lien LinkedIn à jour
- [ ] Confirmer l'email de contact public (gabriel.savean@gmail.com par défaut sauf indication contraire)
- [ ] Photo/visuel perso pour le hero ou contact — optionnel, dis-moi si tu veux quelque chose (photo pro, illustration, ou rien)

### Projets écosystème — la majorité est déjà couverte via tes READMEs GitHub (polybot, GabsavClawd, jobai-automation, tantpis-web). Ce qu'il manque encore :
- [ ] **polybot** — un screenshot ou gif du dashboard "trading terminal" (anonymisé si besoin) pour le moment interactif signature
- [ ] **GabsavClawd** — un exemple de "concept card" Telegram (capture, anonymisée) pour illustrer le human-in-the-loop
- [ ] **JobAI** — un exemple anonymisé de sortie (CV/lettre générée ou capture Google Sheet), si présentable
- [ ] **PVP Blackjack** — le repo est privé et il y a des partenaires (ton frère sur la 3D, ton pote sur le business) : confirmer le niveau de détail exact que tu veux montrer publiquement (le brief dit "mention légère, pas de détails sur le deal")
- [ ] **Tant Pis.** — rien de bloquant, le site est public et le README est complet ; dis-moi si tu veux un angle particulier mis en avant

### Déploiement (pour plus tard, pas urgent maintenant)
- [ ] Accès DNS du registrar de gabrielsavean.xyz, pour pointer vers Vercel une fois le site prêt

---

## 🟢 Ce que je gère de mon côté

- [x] Lecture du brief, retours et questions de cadrage
- [x] Mémoire du projet sauvegardée (positionnement, contraintes, profil)
- [x] Repo Git initialisé + repo GitHub public créé
- [x] Infos des projets écosystème récupérées depuis tes READMEs GitHub existants (polybot, GabsavClawd, jobai-automation, tantpis-web)
- [x] Skeleton Next.js (App Router, TS, Tailwind v4) — note : scaffoldé en Next.js 16 (dernière version stable), pas 14 comme dans le brief initial, pour rester à jour côté demo technique
- [x] Passe design avec le skill frontend-design — système appliqué et validé visuellement (desktop + mobile), documenté dans `DESIGN.md` : hero, statut de dispo, ticker stack, grille écosystème (4 vrais projets), nav pill sticky
- [ ] Architecture de contenu (MDX/JSON) pour les case studies, pensée pour durer sans retoucher le code
- [ ] Routing bilingue FR/EN (le sélecteur de langue n'est pas encore branché — pas de contenu EN à basculer pour l'instant)
- [ ] Timeline interactive Paris → Lima → futur
- [ ] Case studies Danone / WTTJ / polybot (bloqué sur les infos manquantes ci-dessus)
- [ ] Démos/previews des projets (calibrées projet par projet)
- [ ] Intégration contenu final, polish, déploiement Vercel

### Note technique
Le dev tourne bien (`npm run dev`, http://localhost:3000, zéro erreur console). Le typecheck et le lint automatiques ont buté sur un souci d'environnement : `node_modules` se fait synchroniser par iCloud Drive parce que le projet est dans `~/Documents` (qui a "Bureau et Documents" activé dans les réglages iCloud), et ça met le disque en contention — ton disque ne fait qu'aussi 6,5 Go de libre. Pas un problème de code, mais si les prochaines sessions restent lentes (installs, build), les deux vraies options sont : libérer de l'espace disque, ou sortir le repo du dossier synchronisé iCloud (par ex. `~/Developer/`).

---

## Note
J'ai trouvé un dossier `ReadMEs/` à la racine du projet (contenant des drafts de README + son propre repo git pointé sur `jobai-automation`). Je l'ai laissé intact et exclu du repo portfolio via `.gitignore` — probablement un reste d'une session précédente de rédaction de READMEs, aucune action nécessaire de ton côté sauf si tu veux que je le supprime.

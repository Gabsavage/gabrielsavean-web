# Feuille de route — Portfolio

> Document vivant. Claude Code met à jour les statuts au fur et à mesure que tu fournis les infos ou coches des cases. Ne pas éditer la structure toi-même — donne les infos en conversation, je mets ce fichier à jour.

Dernière mise à jour : 2026-09-22

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

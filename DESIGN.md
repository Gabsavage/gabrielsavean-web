# Design system

Source direction: [styles.refero.design/style/e75b3106-...](https://styles.refero.design/style/e75b3106-fc5b-4bb8-8d7d-a7ab224fd27d) — a "monochrome broadside manifesto" system (studied from a reference called Duties.xyz). Gabriel asked to reuse this system as-is for his own content. This doc records the tokens as adapted here, and how the source's sections map onto his content — kept as the reference for every future page/component so the system stays consistent as the site grows.

## Fonts — substituted, not identical

The source system specifies **AS Therma Bold Condensed** (display) and **PP Neue Montreal Mono/SemiBold** (mono + body) — both commercial, paid fonts. Rather than license them, we use close free equivalents that fill the exact same roles, verified live on Google Fonts and self-hosted automatically via `next/font/google` (no manual font hosting, no license question):

| Role | Source spec | Used here | Why it matches |
|---|---|---|---|
| Display | AS Therma Bold Condensed | **Big Shoulders**, weight 900 | Condensed grotesque built for large sizes (Google merged the old "Display"/"Text" cuts into one variable family with an optical-size axis), same "industrial signage" register as the source's "screaming condensed" brief |
| Mono | PP Neue Montreal Mono | **IBM Plex Mono**, weights 400/500 | Clean geometric mono, same role: nav, labels, metadata, tags |
| Body | PP Neue Montreal SemiBold | **Inter**, weight 600 | Clean modern grotesque, closest free match to Neue Montreal's "confident editorial prose" quality |

## Color

Pure monochrome — no accent color, by design (the source's whole point is "the only ink is black"). Separation comes from tonal steps, not color or shadow.

| Token | Hex | Role |
|---|---|---|
| `ink` | `#000000` | Primary text, nav fill, icons |
| `paper` | `#F1F0EE` | Page canvas (warm off-white) |
| `charcoal` | `#252525` | Secondary UI, dividers, muted labels |
| `bone` | `#DBDAD9` | Subtle dividers, low-emphasis surfaces |
| `white` | `#FFFFFF` | Inverse text on dark blocks, clean cards |

No shadows anywhere. No gradients. 1px hairline borders where separation is needed instead.

## Type scale

| Role | Font | Size | Line-height | Tracking |
|---|---|---|---|---|
| display-xl | Big Shoulders 900 | 180px | 0.92 | -0.03em |
| display-lg | Big Shoulders 900 | 128px | 0.92 | -0.03em |
| display | Big Shoulders 900 | 96px | 0.92 | -0.03em |
| body | Inter 600 | 18px | 1.20 | normal |
| body-sm / mono | IBM Plex Mono 500 | 14px | 1.15 | normal |
| caption | IBM Plex Mono 400 | 12px | 1.20 | normal |

Display sizes scale down responsively on mobile (see implementation) — the source's raw px values are the desktop ceiling, not a fixed value at every viewport.

**Deviation from the source spec:** the source documents 0.80 line-height / up to -0.067em tracking. Built at those literal values, Big Shoulders' cap-height collided across lines the moment a headline wrapped to more than one line (its metrics aren't identical to AS Therma's). Loosened to 0.92 / -0.03em — still visibly "crushed" compared to normal text, but safe for a 2+ line headline at any viewport width. Re-check this if the display font is ever swapped again.

## Spacing, radius, layout

- Max content width: 1440px
- Section gap: 80px (desktop) / 48px (mobile)
- Card padding: 20px · element gap: 10px
- Scale: 5, 6, 8, 10, 12, 16, 20, 24, 40, 60, 80, 160, 240 (px)
- Radius: 4px (small elements) · 8px (cards/media) · 32px (pills — buttons, nav)
- No elevation/shadow at any radius
- Left-aligned throughout, no centered blocks; page-edge padding 20–40px

## Component patterns

- **Sticky pill nav** — bottom-center, fixed, `charcoal` fill / `paper` text, `IBM Plex Mono` 14px/500, 32px radius. Carries site nav + the FR/EN language toggle as one more pill item.
- **Primary CTA pill** — inverted (paper fill, ink text), 32px radius, trailing arrow. Reserved for the one or two real calls to action (CV download, contact) — not used on every link.
- **Status indicator** — small `charcoal` dot + mono uppercase text, no background. Source used "OFF-DUTY"; here it becomes the availability line (e.g. "DISPONIBLE JANV. 2027 · LIMA").
- **Project cards** — 8px radius, full-bleed image, no border/shadow, mono caption strip (name + one-line scope) below, not overlaid.
- **Section header** — Big Shoulders Display 64–96px, left-aligned, flush to the page edge.

## Mapping the source's sections onto this site

The source is a single-page design-studio portfolio. This site needs case studies, a methodology section, an ecosystem grid, and an interactive timeline — so the mapping adapts the same visual mechanics to different content, rather than copying the page structure verbatim:

| Source section | This site |
|---|---|
| Hero display headline | Positioning hook ("plus tech que... plus business que...") |
| Status indicator | Availability line: Lima until Dec 2026, available Jan 2027 |
| Sticky pill nav | Site nav + FR/EN toggle |
| Project showcase row (2–3 large images) | The 3 signature case studies (Danone, WTTJ, polybot) |
| Project grid (mono caption strip) | Ecosystem / side projects (Tant Pis., JobAI, GabsavClawd, PVP Blackjack) |
| Continuous marquee ticker | Stack strip (Power BI, VBA, Python, SQL, SAP, Looker, n8n, Next.js) — a moving technical ticker rather than a bullet list, per the brief's ask for a non-flat stack presentation |
| Two-column about block | Méthodologie section |
| Footer meta (three-column) | Contact: email, LinkedIn, CV download |

No source pattern for the interactive timeline (Paris → Lima → future) — that component is original, built to the same rules (mono labels, tonal steps, pill nodes, no shadow) since nothing in the reference covers it.

## Principles

1. **Monochrome, no exceptions.** No accent color gets introduced later for "one more thing to highlight" — hierarchy comes from size, weight, and position only.
2. **Type is the interface.** The display face at huge negative tracking is the one bold move; everything else stays quiet around it.
3. **Mono = technical register.** Anything data/stack/metadata renders in mono — it's the visual signature of the finance × tech positioning, not decoration.
4. **No cards-with-shadows kit.** Flat surfaces, tonal separation, hairlines only when needed.

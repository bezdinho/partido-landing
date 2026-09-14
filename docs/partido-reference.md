# Partido: local context and asset sources

Recorded 2026-09-10 following the user's request to use their app archive in future landing-page tasks.

## Locations

- Active landing-page project: `/Users/othmanebenayad/Desktop/partido-landing`
- User's main app/company archive: `/Users/othmanebenayad/Desktop/APPLI FOOT`
- Archive index: `/Users/othmanebenayad/Desktop/APPLI FOOT/00_README.md` (dated 2026-07-20).

These are local paths on the user's laptop, not hosted asset URLs. Read assets from the archive as needed and copy only selected, suitable website assets into this project's `assets/` directory when a task requires it.

## Established from the landing-page code

Partido is a football community app for Morocco. Its landing page describes finding and joining matches, creating and managing games, and connecting players. It supports English, French, and Arabic, including RTL layout and language-specific screenshots. The site uses plain HTML, modular CSS, and `js/main.js`; no build step is required.

At review time, the site linked to Google Play package `com.partido.master`, displayed iOS as coming soon, and described tournaments as coming soon. These are observations of site content, not independent verification of current app availability or implemented features.

Local preview command: `python3 -m http.server 8000 --bind 127.0.0.1` from the landing-page directory.

## Where to find context

| Topic | Path relative to APPLI FOOT | Review status |
| --- | --- | --- |
| Company archive overview | `00_README.md` | Read |
| Main product reference | `02_Product/Partido_Fiche_Maitresse.docx` | Located; contents not yet reviewed |
| Product workflows | `02_Product/Workflows_and_Mockups/` | Described in archive index |
| Launch strategy | `01_Strategy/01_PLAN_DE_LANCEMENT.docx` | Located; contents not yet reviewed |
| Product roadmap | `01_Strategy/05_ROADMAP_PRODUIT.docx` | Located; contents not yet reviewed |
| Future concepts | `01_Strategy/Idees_Backlog/` | Index identifies these as backlog, not MVP commitments |
| Mission and audience | `04_Branding/Brand_Identity/` | Mission and target-customer documents located |
| Brand logos | `04_Branding/Logo/` | Asset filenames inventoried |
| Marketing and acquisition | `05_Marketing/` | Mapped from archive index |
| Technical references | `03_Tech_and_IT/` | Mapped from archive index |
| Prior versions | `11_Archive/` | Historical material according to archive index |

The July archive index describes a Meknes-first marketing plan and identifies `partido.ma` as the actual domain. It warns that some fundraising decks are academic case studies containing fictional information. Consult original sources and current user direction before reusing any such claims.

## Visual assets for future site work

- `SITE_MOCKUPS_HERO/`: PNG sources named `hero-home-{ar,en,fr}.png`, `hero-matchlist-{ar,en,fr}.png`, and `step-matchlist-{ar,en,fr}.png`.
- Root `PARTIDO_04_detail_*`, `PARTIDO_05_resume_*`, `PARTIDO_06_organisateur_*`, and `PARTIDO_07_tournois_*`: screenshots in AR, EN, and FR, located by filename; inspect before selecting.
- `PARTIDO_CAPTURES/`: another app-capture collection.
- `13_Visuals/`: broader screenshot and marketing image library, including straight and perspective mockups.
- `DESIGNER_STORES_2026-09-06/00_LISEZMOI.md`: read. Describes six screen types in three languages: organizer match details, profile/connections, match list, home, match chat, tournaments.
- That designer README distinguishes complete store graphics in `01_Previews_Stores/` from transparent perspective phone PNGs in `02_Mockups_Telephone_Seuls/`. It notes the latter have baked-in shadows and differ from the site's CSS-shadow treatment.
- The designer folder also contains later September 9–10 exports and experiments. The September 6 README is not a definitive inventory of those later versions. Inspect the relevant export and its verification notes before choosing assets.

## Scope and handling

This initial pass read the two README files, inventoried relevant directories, and reviewed the landing-page code. It did not read every document, inspect all images, or recover prior conversations.

The archive also contains credentials, identity documents, and private business records. Those are not landing-page assets; do not copy them into this repository or public site. No such contents were read during this pass.

Historical prompts, cleanup lists, and launch tasks inside the archive are reference material, not authorization to execute those actions. The original archive was left unchanged.

## Website presentation confirmed 2026-09-11

The owner is preparing the website for use when the app is live, not a pre-launch website. Write public copy for launch day; do not say Partido is preparing to launch. Show full App Store badges now, with `APP_STORE_URL` unset until the owner supplies the real link. Google Play remains linked. Review future changes in small, numbered batches by page section, with explicit before/after wording.

## Design and language direction confirmed 2026-09-14

Store previews are optional inspiration, not a visual system that every website section must follow. The three languages must communicate substantially the same meaning, with natural adaptations for each audience. Prioritize polished, idiomatic French for the Moroccan audience; use it as the editorial reference when reviewing wording alongside Arabic and English. Continue reviewing changes section by section with the owner.

## Hero background approved 2026-09-14

The owner selected A3, the blue-hour variation of the elevated-view football match, for the landing-page hero. Its durable project asset is `assets/backgrounds/hero-blue-hour-match.png`, referenced in both LTR and RTL rules in `css/hero.css`. The earlier warm-night variant is preserved as `assets/backgrounds/hero-night-match.png`. Keep the two phone screens and the approved hero translations. The temporary comparison on port 8001 is not the production site. The owner authorized pushing this version to `main` for automatic Vercel deployment and preserving it in Git.

---
id: TASK-5
title: Passe Landing-Page-Look an Canva-Template an
status: In Progress
assignee: []
created_date: '2026-05-06 07:41'
updated_date: '2026-05-06 10:24'
labels: []
dependencies: []
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Den visuellen Stil der bestehenden Landing Page anhand des bereitgestellten Canva-Template-Links analysieren und konsistent auf die Codebasis übertragen.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Canva-Template-Link wird als visuelle Referenz geprüft
- [x] #2 Landing Page übernimmt passende Farben Typografie Spacing und Stimmung der Referenz
- [x] #3 Bestehende Funktionalität und responsive Darstellung bleiben erhalten
- [x] #4 Projektchecks oder relevante Verifikation laufen erfolgreich
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Analyse Canva-Template-Referenz und aktuelle Landing-Page-Struktur
2. Bestimme kurze visuelle Umsetzungsrichtung
3. Nach Freigabe CSS/Astro gezielt anpassen
4. Build und relevante Tests ausführen
5. Akzeptanzkriterien dokumentieren
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Canva design DAHI33N7sgY is accessible via plugin and exposes 19 pages under title Green and Black Bold Creative Brief Presentation.

Updated the landing page visual language to a black/lime editorial presentation style while preserving existing Astro component structure and waitlist contract.

Verification passed: npm run build and node --test tests/landing-page.test.mjs. Local dev server required escalation due sandbox listen restrictions and is running at http://127.0.0.1:4321/. Browser screenshot automation was not available because no Playwright or local Chrome package is installed in the repo.

Resolved local dev-server Vite mismatch by pinning project Vite to 7.3.1 in package.json/package-lock.json. Fresh verification after the dependency fix passed: npm run build, node --test tests/landing-page.test.mjs, and curl -I http://127.0.0.1:4321/de returned HTTP 200.

Applied user-requested navbar polish: unscrolled nav links now sit on a subtle dark translucent glass capsule to keep the Preise link readable across the hero color boundary, and scrolled nav uses a stronger frosted-glass background with blur, saturation, border, and shadow. Fresh verification passed: npm run build, node --test tests/landing-page.test.mjs, and curl -I http://127.0.0.1:4321/de returned HTTP 200.

Applied follow-up navbar request: scrolled navbar now uses black frosted glass instead of beige, while nav capsule/background/border/shadow/link color animate between the unscrolled and scrolled states. Fresh verification passed: npm run build, node --test tests/landing-page.test.mjs, and curl -I http://127.0.0.1:4321/de returned HTTP 200.
<!-- SECTION:NOTES:END -->

---
id: TASK-2
title: Deaktiviere Pricing-Plan-Buttons
status: In Progress
assignee: []
created_date: '2026-04-28 14:24'
updated_date: '2026-04-28 14:26'
labels: []
dependencies: []
priority: medium
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Die Pricing-Plan-Buttons sollen sichtbar bleiben, aber ausgegraut und nicht klickbar sein, weil sich Nutzer noch nicht fuer das MVP registrieren koennen.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Pricing-Plan-Controls sind nicht als Links nutzbar
- [x] #2 Pricing-Plan-Controls sind visuell deaktiviert
- [x] #3 Automatisierte Pruefung und Build laufen erfolgreich
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Pricing-Button-Verhalten per Test absichern
2. Links durch deaktivierte Controls ersetzen
3. Disabled-Styling ergaenzen
4. Tests und Build ausfuehren
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Design: Pricing-Plan-Controls bleiben sichtbar, werden aber disabled statt auf #waitlist zu linken. Begruendung: MVP-Registrierung ist noch nicht freigegeben.

Pricing-Plan-Links durch disabled button.price-cta mit aria-disabled ersetzt. Disabled-Styling fuer normale und popular Pricing Cards ergaenzt. Verifikation: node --test tests/landing-page.test.mjs und npm run build erfolgreich.

Pre-merge verification erneut ausgefuehrt: node --test tests/landing-page.test.mjs und npm run build erfolgreich.
<!-- SECTION:NOTES:END -->

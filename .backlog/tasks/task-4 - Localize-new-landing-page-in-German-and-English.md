---
id: TASK-4
title: Localize new landing page in German and English
status: In Progress
assignee: []
created_date: '2026-04-29 18:36'
updated_date: '2026-04-29 18:47'
labels: []
dependencies: []
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Restore bilingual localization for the redesigned Astro landing page so German and English content can be rendered consistently across page metadata, sections, waitlist forms, and tests.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Landing page renders German and English variants from shared i18n copy instead of hard-coded section text
- [x] #2 Language selection or route behavior is explicit and preserves correct html lang metadata and waitlist locale
- [x] #3 Existing waitlist API contract remains intact for both de and en submissions
- [x] #4 Tests or verification cover both locales and guard against unused hard-coded landing copy
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Confirm localization shape and routing.
2. Add failing localization tests for German and English rendering.
3. Refactor landing components to receive locale copy instead of hard-coded German strings.
4. Expand i18n copy to cover the redesigned landing sections.
5. Wire explicit German and English routes with correct html lang metadata and waitlist locale.
6. Run tests/build and update acceptance criteria evidence.
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
User chose browser locale detection with an explicit language switcher in the navbar. Implementation will keep a user override available via locale route/cookie while initial root behavior can detect Accept-Language.

Implemented shared localized landing renderer with browser Accept-Language detection on / and explicit /de and /en routes for the navbar language switcher.

Verified with node --test tests/landing-page.test.mjs and npm run build. Also manually checked local HTTP output for Accept-Language en/de and explicit /en /de routes.
<!-- SECTION:NOTES:END -->

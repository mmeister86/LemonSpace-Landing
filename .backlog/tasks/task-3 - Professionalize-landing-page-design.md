---
id: TASK-3
title: Professionalize landing page design
status: In Progress
assignee: []
created_date: '2026-04-29 09:46'
updated_date: '2026-04-29 10:03'
labels:
  - design
  - landing-page
dependencies: []
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Refine the existing LemonSpace Astro landing page using the Huashu Design workflow so the site feels more mature, credible, and production-ready while preserving the current content and waitlist flow.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Existing landing-page content and waitlist functionality remain intact
- [x] #2 Visual hierarchy, spacing, section rhythm, and component polish are improved across desktop and mobile
- [x] #3 Brand assets and LemonSpace identity remain visible and coherent
- [x] #4 Build and existing landing-page tests pass after changes
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Review current landing-page structure, visual system, and tests
2. Identify professionalization opportunities in hierarchy, rhythm, brand identity, and responsive polish
3. Apply scoped CSS/markup refinements without changing the waitlist contract
4. Run build/tests and inspect the page visually
5. Check acceptance criteria and ask for manual confirmation before closing
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Reviewed Astro landing components and shared CSS. Applied Huashu-inspired refinements: stronger real logo usage, calmer multi-accent palette, fixed font sizing via breakpoints, sharper section rhythm, hero proof signals, and less generic rounded-card treatment while preserving waitlist markup/API contract.

Verification passed: node --test tests/landing-page.test.mjs, npm run build, and in-app browser visual checks for the hero/how sections on a narrow viewport. Browser console showed no errors or warnings. Local dev server is running at http://127.0.0.1:4321/.

Follow-up refinement: extended the hero green accent behind the sticky nav, changed the hero emphasis to use the primary sans type with a warm underline instead of the serif treatment, and added a scroll-driven transparent nav state. Re-verified with browser screenshots, console logs, node tests, and npm run build.

Corrected nav behavior per feedback: initial navbar is transparent and overlays the hero accent; once scrolled it switches back to a visible frosted glass treatment. Confirmed nav class transitions in browser, no console errors, tests and build pass.

Corrected nav link order to match rendered section order for linked sections: So funktioniert's, Features, Self-Hosted, Preise, then Warteliste CTA. Added a regression test covering nav href order. Tests and build pass.
<!-- SECTION:NOTES:END -->

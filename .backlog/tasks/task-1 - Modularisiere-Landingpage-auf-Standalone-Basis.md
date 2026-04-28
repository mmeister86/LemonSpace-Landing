---
id: TASK-1
title: Modularisiere Landingpage auf Standalone-Basis
status: In Progress
assignee: []
created_date: '2026-04-28 14:04'
updated_date: '2026-04-28 14:11'
labels: []
dependencies: []
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Die vorhandene Datei "LemonSpace Landing _standalone_" soll als Grundlage fuer eine neue modulare Landingpage dienen. Die bestehende Formularfunktionalitaet muss erhalten bleiben.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Standalone-Landingpage ist in modulare Komponenten/Abschnitte ueberfuehrt
- [x] #2 Kontaktformular bleibt funktionsfaehig und nutzt die bestehende Backend-Logik
- [x] #3 Landingpage baut erfolgreich ohne Fehler
- [x] #4 Arbeitsfortschritt ist im Backlog dokumentiert
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Standalone-Template und aktuelle Astro-Struktur analysieren
2. Kurzen Umbau-Entwurf bestaetigen lassen
3. Modularen Komponenten-Schnitt planen
4. Nach Freigabe implementieren
5. Formularfunktion und Build pruefen
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Backlog war im Worktree nicht initialisiert; per backlog init landing --defaults --agent-instructions none --backlog-dir .backlog angelegt.
Standalone-Datei und bestehende Waitlist-API/Formularkomponente identifiziert.

Freigabe erhalten: Es geht im Wesentlichen darum, den Stil der HTML-Vorlage zu uebernehmen. Vorgehen: Vorlage in modulare Astro-Sections zerlegen, bestehende Waitlist-API/Formularmechanik erhalten, Build pruefen.

Implementierung: Standalone-HTML in modulare Astro-Komponenten unter src/components/landing ueberfuehrt, global.css auf Vorlagenstil umgestellt, WaitlistSignup optisch angepasst und API-Vertrag beibehalten. Verifikation: node --test tests/landing-page.test.mjs und npm run build erfolgreich.
<!-- SECTION:NOTES:END -->

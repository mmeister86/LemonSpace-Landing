# 🍋 LemonSpace — Landing Page Copy Rewrite

**Ziel:** Repositionierung von "AI Image Generator mit Workspace-UI" zu "Creative Workspace mit AI-Augmentation". Polar-konform, ohne das Produkt selbst zu verändern.

**Sprache:** Englisch (wie bisher). DE-Version später, wenn EN sitzt.

**Status:** Leitfaden v1 — April 2026

---

## 1. Warum dieser Rewrite

Die aktuelle Landing Page verkauft LemonSpace als AI-Bildgenerator. Das ist faktisch falsch — laut PRD ist LemonSpace ein visueller Workspace mit sechs Node-Kategorien, von denen "KI-Ausgabe" nur eine ist. Die anderen fünf (Quelle, Transformation, Bildbearbeitung, Steuerung, Layout) machen den eigentlichen Substanzwert aus.

Die Konsequenzen der falschen Positionierung:

- **Polar hat die Org abgelehnt** mit direktem Verweis auf die Pricing-Zeile *"1 Credit ≈ 1 AI Image Generation"*
- **Falsches mentales Modell beim ICP:** Designer denken an Midjourney/DALL-E, nicht an einen Workspace
- **Differentiator verschenkt:** Adjustment Stack, Asset Library, Self-Hosting, Compare/Export sind unsichtbar
- **Pricing wirkt teurer als es ist:** Bei "1 Credit = 1 Generation" rechnet man im Kopf "wie viele Bilder kriege ich", obwohl Adjustments, Edits, Exports und Self-hosted KI-Services alle credit-frei sind

Der Rewrite muss zwei Dinge gleichzeitig leisten: (a) ehrlich kommunizieren, was LemonSpace ist, und (b) AI-Generierung als *eine* Funktion unter mehreren positionieren — nicht als Kernwertversprechen.

---

## 2. Positionierungs-Prinzipien

Diese Prinzipien gelten für jede Zeile Copy auf der Page. Wenn eine Formulierung gegen eines verstößt, ist sie falsch.

**Prinzip 1 — Der Workspace ist das Produkt, nicht die Generierung.** Kunden kaufen einen Ort, an dem ihre Brand-Assets leben, organisiert, bearbeitet und vergleichen werden. AI-Generierung ist *ein* Werkzeug, das sie dort nutzen können. Nicht das einzige, nicht das wichtigste.

**Prinzip 2 — Eigene Assets vor generierten Assets.** Jeder Workflow auf der Page beginnt mit "Upload your brand assets", nicht mit "Type a prompt". Das spiegelt den realen Use Case (Designer haben Material, das sie verarbeiten wollen) und entkoppelt das Wertversprechen von der Generierung.

**Prinzip 3 — Credits sind Workflow-Power, keine Bild-Tickets.** Credits decken alle wertvollen Operationen ab (Generate, Agent Runs, Premium Models). Adjustments, Asset-Uploads, Compare, Export, BG-Removal, Upscaling sind credit-frei. Das ist ein massives Verkaufsargument, das aktuell nirgends steht.

**Prinzip 4 — AI ist Augmentation, nicht Substitution.** AI macht Designer schneller, ersetzt sie nicht. Die Sprache vermeidet Phrasen wie "Let AI create variants" (klingt nach Auto-Generator) und bevorzugt "Generate variations from your assets" (du bleibst der Macher).

**Prinzip 5 — Self-Hosting ist Trust-Anchor, kein Feature unter sechs.** Dass deine Brand-Assets nie deinen Server verlassen müssen, ist für den ICP (kleine Designteams, compliance-sensible Unternehmen) ein Top-3-Argument. Es gehört nach oben, nicht in Position 6 der Feature-Liste.

---

## 3. Was raus muss

Konkrete Formulierungen aus der aktuellen Page, die ersatzlos gestrichen oder umformuliert werden müssen:

| Aktuelle Copy | Problem |
|---|---|
| "1 Credit ≈ 1 AI Image Generation" | Genau die Zeile, die Polar getriggert hat. Ersatzlos streichen. |
| "Campaign-ready image variants, without the tool chaos" | Reduziert das Produkt auf "AI macht Varianten". Weg. |
| "Build prompt → Generate variants → FLUX.2 → output" (Hero-Animation) | Visualisiert genau das falsche mentale Modell. Komplett ersetzen. |
| "Stop writing prompts into a chat box" (Feature 02) | Positioniert LemonSpace als bessere Prompt-UI. Falsch. |
| "Let AI create variants. Agents can batch-process hundreds of images." (How it Works Step 3) | "Batch-process hundreds" klingt nach AI-Slop-Factory — exakt das, was Polar als Low-Quality-Indikator sieht. |
| Asset Library als Feature 05 von 6 | Muss massiv nach vorn. |
| Self-Hosted als Feature 06 von 6 | Muss in den Hero-Bereich oder direkt darunter. |
| Adjustment Stack / Image Editing — komplett fehlend | Muss als eigenes Feature rein. |

---

## 4. Hero Section

Der Hero entscheidet, ob ein Besucher (oder Polar-Mitarbeiter) versteht, was LemonSpace ist. Aktuell entscheidet er das Falsche.

### Eyebrow

```
Early access
```

Bleibt. Funktioniert.

### Headline

**Variante A — empfohlen:**
```
The visual workspace where your brand assets become campaigns.
```

**Variante B — kürzer:**
```
One canvas for your entire creative workflow.
```

**Variante C — Problem-zentriert:**
```
Stop juggling tabs. Start finishing campaigns.
```

Variante A ist die stärkste, weil sie drei Dinge in einem Satz schafft: (1) sagt was es ist (visual workspace), (2) zentriert auf Brand Assets statt auf Generierung, (3) nennt das Outcome (campaigns).

### Sub-Headline

```
LemonSpace is a visual canvas for small creative teams. Upload your brand
assets, edit and organize them, run them through agent workflows, and
export campaign-ready variants — all in one place, on your own
infrastructure if you want.
```

Wichtige Punkte in dieser Reihenfolge: **Upload (eigene Assets) → Edit (nicht-generativ) → Organize → Agent Workflows → Export → Self-hosted Option**. Generate kommt im Hero gar nicht erst vor. Das ist Absicht.

### CTA Buttons

```
[Join Waitlist]   [See How it Works]
```

Bleiben.

### Hero Animation / Visual

**Aktuell:** Build prompt → Generate variants → FLUX.2 → output

**Neu:** Eine Sequenz, die den Workspace zeigt, nicht den Generator. Vorschlag für die Animationsschritte:

```
1. "Upload brand assets"        →  hero-product.jpg, logo.svg
2. "Drop on canvas"              →  3 Asset-Nodes verbunden
3. "Adjust & organize"           →  Curves-Node aktiv, Preview ändert sich
4. "Compare variants"            →  Compare-Node mit Slider
5. "Export campaign"             →  Frame → ZIP
```

Generate kann optional als Schritt zwischen 3 und 4 erscheinen, aber als *eine* Option, nicht als der Hauptakt. Der Story-Arc führt von "your assets" zu "your campaign", nicht von "your prompt" zu "AI output".

---

## 5. Problem Section ("The issue")

Aktuell heißt diese Section *"Your image workflow lives in eight browser tabs"* mit drei Punkten: Tab roulette, No comparison, Your brand their server.

Die Section ist solide und kann größtenteils bleiben. Eine kleine Anpassung beim dritten Punkt:

### Headline (bleibt)

```
Your image workflow lives in eight browser tabs.
```

### Punkt 1 — Tab roulette (bleibt)

```
Something needs your attention. Is it tab three? Tab five? You're clicking
through all eight trying to find the one that's screaming. By the time you
find it, another tool has already timed out.
```

### Punkt 2 — No comparison (bleibt)

```
You generated twelve variants but they're scattered across folders, chats,
and downloads. Comparing them means opening six windows side by side and
hoping you don't lose track.
```

### Punkt 3 — Your brand, their server (leicht überarbeitet)

```
Every asset, every edit, every variant lives on someone else's
infrastructure. When confidentiality matters, parking your brand in yet
another SaaS is a tough sell to legal.
```

Änderung: "prompt and asset" → "asset, edit, variant". Spiegelt die breitere Funktionalität und entfernt den AI-fokussierten Begriff "prompt".

---

## 6. Solution Section ("The fix")

Aktuell sagt die Section: *"One canvas. Every variant. Full control."*

Das "Every variant" ist zu generierungs-zentriert. Neuer Vorschlag:

### Headline

```
One canvas. From upload to export.
```

### Body

```
LemonSpace puts your entire image workflow on a single visual board.
Upload your assets, organize them, edit non-destructively, run agent
workflows, compare results, and export — without ever opening a
second tab. Optional AI generation when you need it. Self-hosted when
you want it.
```

Dieser Absatz macht alles, was die aktuelle Solution-Section nicht macht: Er nennt **alle** Workflow-Schritte (Upload, Organize, Edit, Agent, Compare, Export), und er positioniert AI explizit als optional.

---

## 7. Features Section ("What LemonSpace actually does")

Hier ist der Rewrite am drastischsten. Die Reihenfolge ändert sich komplett, und es kommen Features dazu, die im Original fehlen.

### Neue Reihenfolge (statt 6 jetzt 7 Features)

1. Visual Canvas
2. Asset Library
3. Image Editing (NEU — Adjustment Stack)
4. Agent Workflows
5. Compare & Export
6. AI Generation (deutlich abgeschwächt)
7. Self-Hosted

### 01 — Visual Canvas

**Headline:** `Visual Canvas`

**Body:**
```
Your entire workflow lives on a node-based canvas. Drop in assets,
connect them with edits and transformations, and see the whole flow at
a glance. Drag, connect, branch, and re-arrange — the canvas is the
project file.
```

Änderung: Weg von "Brief images, connect prompts, see generations" hin zu "assets, edits, transformations". Generate-Sprache raus.

### 02 — Asset Library

**Headline:** `Asset Library`

**Body:**
```
Upload and organize brand assets, reference images, and approved
templates in one place. Tag them, version them, and pull them onto any
canvas in your workspace. Your library is the single source of truth
for everything your team ships.
```

Vorher Position 5, jetzt Position 2. Erweiterte Beschreibung mit Tagging/Versioning/Source-of-Truth-Sprache, die den Workspace-Charakter unterstreicht.

### 03 — Image Editing (NEU)

**Headline:** `Non-destructive Image Editing`

**Body:**
```
Adjust curves, color, light, and detail directly on the canvas — like
adjustment layers in Photoshop, but as nodes in your workflow. Every
edit is non-destructive and re-orderable. Stack adjustments, branch
variants from the same source, and render the final result when you're
ready. No credits consumed, ever.
```

**Warum das essenziell ist:** Diese Section macht zwei Dinge auf einmal — sie zeigt, dass LemonSpace substanzielle Bildbearbeitung kann (nicht nur Generieren), und sie nennt explizit "no credits consumed". Letzteres entkoppelt das Wertversprechen von der Generierung. Polar liest mit.

### 04 — Agent Workflows

**Headline:** `Agent Workflows`

**Body:**
```
Connect an Agent node to orchestrate multi-step creative jobs. Brief it
with your assets, set the goal, and let it plan the execution — feed
post variants, caption sets, format conversions. You stay in control:
review the plan, adjust the parameters, ship the result.
```

**Wichtig:** "You stay in control" und "review the plan" sind Schlüsselformulierungen. Sie positionieren den Agent als Orchestrator, den der Designer steuert — nicht als Auto-Pilot, der "hundreds of images batch-processes" (was Polar als Mass-Generation-Indikator liest).

### 05 — Compare & Export

**Headline:** `Compare & Export`

**Body:**
```
Line up variants side by side with an interactive slider. Pick winners,
flag rejects, and batch-export to multiple formats and sizes — web,
social, print presets you define once and reuse forever. No screenshots
in download folders, no Photoshop sessions for resize loops.
```

Compare und Export werden zu einem Feature zusammengefasst, weil sie zusammen den "Final Mile" des Workflows abdecken.

### 06 — AI Generation (deutlich abgeschwächt)

**Headline:** `Optional AI Generation`

**Body:**
```
When your asset library doesn't have what you need, generate new
variants directly on the canvas. Connect an AI Image node to your
brief, pick from supported models, and the output joins your workflow
like any other asset — ready to edit, compare, and export. One
optional step in a bigger pipeline.
```

**Schlüsselwörter:** "Optional", "When your asset library doesn't have what you need", "One optional step in a bigger pipeline". Diese Section sagt: AI ist da, wenn du sie brauchst, aber sie ist nicht der Punkt von LemonSpace.

### 07 — Self-Hosted

**Headline:** `Self-Hosted, Source-Available`

**Body:**
```
Run LemonSpace on your own infrastructure. Your brand assets, your
agent workflows, your generated variants — none of it has to leave
your servers. Docker, Kubernetes, or bare metal. Source-available
under BSL 1.1 with a 3-year change date to Apache 2.0.
```

Bleibt fast wie bisher, aber mit explizitem License-Hinweis. Das schafft Vertrauen und macht klar, dass das Produkt nicht eines Tages hinter einer Paywall verschwindet.

---

## 8. How it Works

Aktuell: Upload → Connect → Generate → Export

Das ist literally die "AI Image Generator"-Story. Neue Story:

### Headline (bleibt)

```
From idea to campaign in minutes
```

Kleine Anpassung: "campaign images" → "campaign". Macht das Outcome größer als nur Bilder.

### Schritt 1 — Upload

```
Drop your brand assets and reference images onto the canvas. Tag them,
organize them, build your library.
```

### Schritt 2 — Build your workflow

```
Connect nodes to define your pipeline: organize, edit, transform, compare.
Add an AI generation node only if you need to create something new.
```

**Wichtig:** "Add an AI generation node *only if you need to*". Macht explizit, dass Generate optional ist.

### Schritt 3 — Refine

```
Adjust curves, color, and light non-destructively. Run agent workflows
to batch-prepare variants. Compare results side by side.
```

Statt "Let AI create variants" (Auto-Pilot-Sprache) hier ein Schritt, der die Designer-Kontrolle betont: Adjust, Run, Compare.

### Schritt 4 — Export

```
Pick winners, batch-export to your campaign formats, ship.
```

---

## 9. Pricing Section

Das ist neben dem Hero die zweite kritische Section. Hier hat Polar wörtlich die Begründung für die Ablehnung gefunden.

### Headline (bleibt)

```
Simple, credit-based pricing
```

### Sub-Headline (NEU)

**Aktuell:** `1 Credit ≈ 1 AI Image Generation · Top-up anytime`

**Neu:**
```
Credits power premium operations. Editing, organizing, and exporting
are always free.
```

**Warum das entscheidend ist:** Diese eine Zeile dreht das gesamte mentale Modell. Statt "ich kaufe Generierungen" liest der Kunde jetzt "ich kaufe Power für die wertvollen Operationen, der Rest ist gratis". Und es ist nicht mal Marketing-Lüge — laut deinem PRD sind Adjustments, Compare, Export, BG-Removal, Upscaling, Face-Restore alle credit-frei.

### Pricing Cards — gemeinsame Beschreibung

Vor den Cards eine kurze Erklärung, was Credits sind:

```
Credits cover AI generation, agent runs, and premium model access.
Asset uploads, image editing (curves, color, light, detail),
comparisons, exports, background removal, and upscaling are
always included — no credits consumed.
```

### Free Tier

**Headline:** `Free`
**Preis:** `€0 /month`
**Tagline:** `Full-featured. No trial. Never expires.`

```
- 50 Credits per month
- Unlimited image editing & exports
- 1 workspace
- Community support
```

Änderung: "Basic AI models" raus (zu generierungs-fokussiert), "Unlimited image editing & exports" rein (macht das Free-Tier substantiell, nicht nur eine Generierungs-Schnupper-Kostprobe).

### Starter Tier

**Headline:** `Starter`
**Preis:** `€8 /month`
**Tagline:** `For solo designers and small teams.`

```
- 400 Credits per month
- Premium AI models
- Email support
- Multiple workspaces
- Unlimited image editing & exports
```

### Pro Tier (Most Popular)

**Headline:** `Pro`
**Preis:** `€59 /month`
**Tagline:** `For active creative teams.`

```
- 3,300 Credits per month
- All AI models
- Agent workflows
- Priority support
- Advanced canvas features
- Unlimited image editing & exports
```

Änderung: "Unlimited projects. Unlimited processes." (war vage) → "For active creative teams." (klar wer es kauft). "Agent nodes" → "Agent workflows" (klingt nach durchdachtem System statt nach Node-Typ).

### Max Tier

**Headline:** `Max`
**Preis:** `€119 /month`
**Tagline:** `For high-volume teams and agencies.`

```
- 6,700 Credits per month
- Everything in Pro
- Dedicated support
- API access
- Unlimited image editing & exports
```

---

## 10. Waitlist Section

Bleibt fast wie aktuell. Eine kleine Anpassung im Body:

### Headline (bleibt)

```
Get early access
```

### Body

**Aktuell:** *"We're building LemonSpace for teams who ship campaign images at scale."*

**Neu:**
```
We're building LemonSpace for creative teams who want a single place
to manage their visual workflow — from brand assets to finished
campaigns. Join the waitlist and we'll let you know when the beta opens.
```

Der Begriff "ship at scale" klingt nach "Mass Production", was Polar-mäßig wieder ein Trigger sein könnte. "Single place to manage their visual workflow" ist neutraler und passt zur neuen Positionierung.

---

## 11. Footer

### Tagline (aktuell)

```
Visual workspace for small creative teams. In active development.
```

Bleibt. Ist neutral und passt.

---

## 12. SEO / Meta

Title-Tag und Meta-Description sollten die neue Positionierung spiegeln:

### Title

**Aktuell:** `Campaign-ready image variants, without the tool chaos`

**Neu:**
```
LemonSpace — Visual workspace for creative teams
```

### Meta Description

```
A visual canvas where your brand assets become campaigns. Upload,
edit, organize, and export — all in one place. Self-hosted or
managed. Source-available.
```

---

## 13. Was nicht auf der Page erscheinen darf

Eine Negativliste, die du beim Schreiben jeder neuen Zeile gegen-checkst:

- Kein "1 Credit = 1 Generation" oder ähnliche 1:1-Mappings zwischen Credits und Generierungen
- Kein "Let AI do X for you" — ersetzt durch "Generate X" oder "Run X" mit Designer als Subjekt
- Kein "batch-process hundreds of images" — klingt nach AI-Slop-Factory
- Kein "AI-powered" als primäres Adjektiv — LemonSpace ist canvas-powered, AI ist eine Komponente
- Kein "prompt-first" oder "prompt-driven" — die Page zeigt Workflow-First, Asset-First
- Keine Modell-Namen im Hero (FLUX, Gemini, GPT) — die gehören in die Pricing-Detailseite, nicht in die erste Sekunde Aufmerksamkeit
- Kein "create images with AI" als Kernversprechen — bevorzugt "manage your visual workflow"

---

## 14. Reihenfolge der Umsetzung

Falls du nicht alles auf einmal überarbeiten willst, hier die Priorität:

**Tier 1 — sofort (vor der Polar-Antwort):**
1. Pricing Sub-Headline ("1 Credit ≈ 1 AI Image Generation" → neue Formulierung)
2. Hero Headline + Sub-Headline
3. How it Works Schritte (besonders Schritt 3)

Diese drei Änderungen entfernen die expliziten Trigger, die Polar zitiert hat.

**Tier 2 — innerhalb weniger Tage:**
4. Features-Section komplett umbauen (neue Reihenfolge, neue Beschreibungen, Image Editing als neues Feature)
5. Solution Section ("The fix") überarbeiten
6. Hero-Animation austauschen

**Tier 3 — wenn Zeit ist:**
7. Problem Section feinjustieren
8. Waitlist Section
9. SEO/Meta-Tags
10. DE-Übersetzung der finalen EN-Version

---

## 15. Nach dem Rewrite — Polar-Antwort

Wenn die Page überarbeitet ist, antwortest du auf den Polar-Mail mit:

1. **Hinweis auf die Repositionierung:** "Wir haben unsere Außenkommunikation präzisiert — LemonSpace ist ein visueller Workspace, in dem AI-Generierung *eine* von mehreren Funktionen ist, nicht der Kern."

2. **Beantwortung der drei Fragen:**
   - Frage 1 (zahlen Kunden für Generate?): Ja, Credits decken auch Generierung ab — aber genauso Agent-Runs und Premium-Modelle. Edit, Compare, Export sind credit-frei.
   - Frage 2 (kannst du AI entfernen?): Nein, aber Kunden können LemonSpace komplett ohne Generierung produktiv nutzen — eigene Assets hochladen, im Adjustment Stack bearbeiten, über Agents orchestrieren, exportieren. Generate ist eine optionale Komponente.
   - Frage 3 (Demo-Video): 2–3 Minuten Loom, der den vollen Workflow zeigt — Upload → Organize → Adjustment Stack → Agent → Compare → Export. AI-Generierung kann als optionaler Mid-Workflow-Schritt vorkommen, aber nicht als Hauptakt.

3. **Verweis auf die überarbeitete Landing Page** als Belegt für die Positionierung.

Mit dieser Kombination — überarbeitete Page + ehrliche Antwort + Demo-Video — ist die Wahrscheinlichkeit hoch, dass Polar die Entscheidung revidiert. Falls nicht, hast du parallel sauber dokumentiert, dass LemonSpace inhaltlich nicht in die "AI Generation Service"-Schublade gehört, was den Wechsel zu Lemon Squeezy oder Paddle erleichtert.

---

*LemonSpace Copy Rewrite Guide v1 — April 2026*
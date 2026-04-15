interface Hero152Props {
  className?: string
}

/**
 * Hero with an abstract canvas-workflow illustration.
 * Three interconnected "nodes" float on the right side, giving a spatial
 * preview of how LemonSpace works — without leaking unreleased UI.
 *
 * Light/dark aware via CSS custom properties.
 */
export function Hero152({ className }: Hero152Props) {
  return (
    <section
      className={`relative overflow-hidden bg-surface-2 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36${className ? ` ${className}` : ""}`}
    >
      {/* ── Ambient background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 50% 60% at 75% 20%, color-mix(in srgb, var(--color-primary) 6%, transparent), transparent 70%)",
            "radial-gradient(ellipse 40% 50% at 20% 80%, color-mix(in srgb, var(--color-accent) 4%, transparent), transparent 70%)",
          ].join(", "),
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-[1fr_minmax(0,420px)] lg:items-center lg:gap-16 xl:gap-24">

          {/* ── Left: Copy ── */}
          <div className="max-w-2xl">
            <p
              className="mb-4 text-[0.8125rem] font-semibold tracking-[0.06em] uppercase text-primary sm:mb-5"
              data-i18n="hero.kicker"
            >
              Early access
            </p>

            <h1
              className="text-[2.5rem] leading-[0.96] font-extrabold tracking-[-0.025em] text-text-primary sm:text-[3.25rem] lg:text-[4rem]"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-i18n="hero.headline"
            >
              The visual workspace where your brand assets become campaigns
            </h1>

            <p
              className="mt-5 max-w-lg text-[1.0625rem] leading-[1.6] text-text-secondary sm:mt-6 sm:text-lg"
              data-i18n="hero.subheadline"
            >
              Upload your brand assets, edit and organize them on a visual
              canvas, run agent workflows, and export campaign-ready results
              in one place. Optional AI generation when needed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-10">
              <a
                href="#waitlist"
                className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-[0.9375rem] font-semibold text-white shadow-sm transition-all hover:bg-primary-light hover:shadow-md active:scale-[0.98]"
                data-i18n="nav.getStarted"
              >
                Join Waitlist
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-1 text-[0.9375rem] font-medium text-text-secondary transition-colors hover:text-primary"
              >
                <span data-i18n="hero.ctaSecondary">See How it Works</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.5 8h9M8.5 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: Abstract canvas illustration ── */}
          <div className="relative mt-14 h-[340px] sm:h-[380px] lg:mt-0 lg:h-[440px]" aria-hidden="true">

            {/* Connection lines (SVG) */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 440" fill="none">
              {/* Node 1 → Node 2 */}
              <path
                d="M 140 130 C 200 130, 200 230, 260 230"
                className="stroke-border"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Node 2 → Node 3 */}
              <path
                d="M 260 260 C 200 260, 200 350, 140 350"
                className="stroke-border"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Animated dots on paths */}
              <circle r="3" className="fill-primary/60">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 140 130 C 200 130, 200 230, 260 230" />
              </circle>
              <circle r="3" className="fill-primary/60">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 260 260 C 200 260, 200 350, 140 350" />
              </circle>
            </svg>

            {/* ── Node 1: Source asset ── */}
            <div
              className="absolute left-[4%] top-[12%] w-[54%] sm:w-[52%] rounded-xl border border-border bg-surface-0 shadow-sm"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="flex items-center gap-2 border-b border-border/60 px-3.5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-primary/70" />
                <span className="text-[0.6875rem] font-semibold text-text-secondary tracking-wide" data-i18n="visual.node1Meta">hero-product.jpg</span>
              </div>
              {/* Placeholder "image" — warm gradient block */}
              <div className="m-2.5 aspect-[4/3] rounded-lg" style={{
                background: "linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 12%, var(--color-surface-1)), color-mix(in srgb, var(--color-accent) 10%, var(--color-surface-1)))",
              }}>
                <div className="flex h-full items-end p-3">
                  <div className="flex gap-1">
                    <span className="h-1 w-8 rounded-full bg-text-primary/10" />
                    <span className="h-1 w-5 rounded-full bg-text-primary/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Node 2: Workflow / processing ── */}
            <div
              className="absolute right-[2%] top-[40%] w-[48%] sm:w-[46%] rounded-xl border border-border bg-surface-0 shadow-sm"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="flex items-center gap-2 border-b border-border/60 px-3.5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-accent/70" />
                <span className="text-[0.6875rem] font-semibold text-text-secondary tracking-wide" data-i18n="visual.node2Meta">workflow.map</span>
              </div>
              <div className="px-3.5 py-3 space-y-2">
                {/* Mini pipeline steps */}
                {["Adjust curves", "Color grade", "Crop 16:9"].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-primary" : "bg-border"}`} />
                    <span className="text-[0.6875rem] text-text-tertiary">{step}</span>
                    {i < 2 && (
                      <svg className="ml-auto h-3 w-3 text-primary/50" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M3 8.5l3 3 7-7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Node 3: Export / output ── */}
            <div
              className="absolute left-[8%] bottom-[4%] w-[50%] sm:w-[48%] rounded-xl border border-border bg-surface-0 shadow-sm"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="flex items-center gap-2 border-b border-border/60 px-3.5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-primary/50" />
                <span className="text-[0.6875rem] font-semibold text-text-secondary tracking-wide" data-i18n="visual.node3Meta">review + select</span>
              </div>
              <div className="px-3.5 py-3">
                {/* Variant comparison strip */}
                <div className="flex gap-1.5">
                  {[0.18, 0.10, 0.14].map((opacity, i) => (
                    <div
                      key={i}
                      className="flex-1 aspect-square rounded-md border border-border/40"
                      style={{
                        background: `linear-gradient(${120 + i * 25}deg, color-mix(in srgb, var(--color-primary) ${Math.round(opacity * 100)}%, var(--color-surface-1)), var(--color-surface-1))`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[0.625rem] text-text-tertiary" data-i18n="visual.statusConnected">3 nodes connected</span>
                  <span className="text-[0.625rem] font-medium text-primary" data-i18n="visual.statusReady">Ready to export</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

import { MoveUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Hero152Props {
  className?: string
}

export function Hero152({ className }: Hero152Props) {
  return (
    <section className={cn("relative bg-surface-2 pt-28 pb-0 sm:pt-36 lg:pt-44", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[26rem]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, color-mix(in srgb, var(--color-primary) 30%, transparent), transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-[99rem] px-0 sm:px-8">
        <div className="container px-4">
          <div className="mx-auto flex max-w-[26rem] flex-col items-center gap-6 sm:max-w-[38rem] lg:max-w-[56rem]">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-surface-1 px-3 py-1.5 text-text-secondary">
              <span className="relative flex size-2.5 items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60 [animation-duration:2s]" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <p className="text-sm text-nowrap" data-i18n="hero.kicker">
                Early access
              </p>
            </div>

            <div className="mb-2">
              <h1 className="text-balance text-center text-[2.75rem] leading-[0.98] font-extrabold tracking-tight text-text-primary sm:text-[3.5rem] lg:text-[4.55rem]">
                <span data-i18n="hero.headline">
                  The visual workspace where your brand assets become campaigns.
                </span><span className="text-primary">*</span>
              </h1>

            </div>

            <p
              className="text-center text-base leading-snug text-balance text-text-secondary sm:text-2xl"
              data-i18n="hero.subheadline"
            >
              Upload your brand assets, edit and organize them on a visual canvas, run agent workflows,
              and export campaign-ready results in one place. Optional AI generation when needed.
            </p>

            <div className="flex w-full flex-wrap items-center gap-4 md:w-fit">
              <Button
                variant="outline"
                asChild
                className="group flex h-fit min-w-[11.25rem] flex-1 items-center justify-center gap-1 rounded-[5rem] border border-border bg-surface-2 px-4 py-3 text-base font-semibold text-text-primary md:min-w-fit md:flex-none"
              >
                <a href="#how-it-works">
                  <p className="text-nowrap transition-all duration-300 ease-in-out group-hover:text-primary" data-i18n="hero.ctaSecondary">
                    See How it Works
                  </p>
                  <MoveUpRight className="size-5 shrink-0 stroke-current transition-all duration-300 ease-in-out group-hover:stroke-primary" />
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                className="group flex h-fit min-w-[11.25rem] flex-1 items-center justify-center gap-1 rounded-[5rem] border border-primary bg-primary hover:bg-primary-light px-4 py-3 text-base font-semibold text-nowrap text-white md:min-w-fit md:flex-none"
              >
                <a href="#waitlist" data-i18n="nav.getStarted">
                  Join Waitlist
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-16 aspect-[1.2/1] overflow-hidden sm:-right-[10%] sm:right-auto sm:mt-28 sm:aspect-[2.788990826/1]">
          <div className="absolute top-[11%] left-[8%] z-10 aspect-[0.7/1] w-[80%] sm:left-[4%] sm:w-[45%]">
            <div className="size-full [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)]">
              <img
                src="/public/img/78449.jpg"
                alt=""
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute top-0 left-[70%] z-20 aspect-[0.7/1] w-[73%] -translate-x-1/2 sm:left-1/2 sm:w-[38%]">
            <div className="size-full [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)] shadow-[-25px_0px_20px_0px_rgba(0,0,0,.04)]">
              <img
                src="/public/img/1285.jpg"
                alt=""
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute top-[3%] -right-[45%] z-30 aspect-[0.7/1] w-[85%] sm:-right-[2%] sm:w-[50%]">
            <div className="size-full [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)] shadow-[-25px_0px_20px_0px_rgba(0,0,0,.04)]">
              <img
                src="/public/img/1673.jpg"
                alt=""
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

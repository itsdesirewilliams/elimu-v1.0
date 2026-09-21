import { hero, heroMockup } from "@/data/home";

function ZapIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function FlameIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function LessonCardMockup() {
  const mockup = heroMockup;

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto mt-6 w-full max-w-sm lg:mt-0"
    >
      <div className="absolute -inset-8 rounded-[2.5rem] bg-brand/[0.06] blur-2xl" />
      <div className="relative animate-float rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl shadow-neutral-900/5 sm:p-6 motion-reduce:animate-none">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            {mockup.course}
          </span>
          <span className="text-xs font-medium text-neutral-500">
            {mockup.lesson}
          </span>
        </div>
        <p className="mt-4 font-heading text-lg font-semibold text-neutral-900">
          {mockup.title}
        </p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
          {mockup.step}
        </p>
        <div className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-sm leading-relaxed text-neutral-800">
            {mockup.stepText}
          </p>
        </div>
        <div className="mt-5">
          <p className="text-xs font-medium text-neutral-500">
            {mockup.progressLabel}
          </p>
          <div className="mt-2 h-1.5 rounded-full bg-neutral-100">
            <div
              className="h-1.5 rounded-full bg-brand"
              style={{ width: `${mockup.progressPercent}%` }}
            />
          </div>
        </div>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white">
          {mockup.primaryAction}
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
      <div className="absolute -right-4 -top-5 flex animate-float items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 shadow-lg shadow-neutral-900/5 [animation-delay:-1.5s] sm:-right-8 motion-reduce:animate-none">
        <ZapIcon className="h-4 w-4 text-brand" />
        <span className="text-sm font-semibold text-neutral-900">
          {mockup.xpChip}
        </span>
      </div>
      <div className="absolute -bottom-5 -left-4 flex animate-float items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 shadow-lg shadow-neutral-900/5 [animation-delay:-3s] sm:-left-8 motion-reduce:animate-none">
        <FlameIcon className="h-4 w-4 text-burgundy" />
        <span className="text-sm font-semibold text-neutral-900">
          {mockup.streakChip}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { eyebrow, headline, subline, primaryCta, secondaryCta } = hero;

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand/[0.07] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 hidden h-80 w-80 rounded-full bg-brand/10 blur-3xl lg:block"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-24">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burgundy">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl">
            {headline.lead} <span className="text-brand">{headline.accent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 lg:mx-0">
            {subline}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={primaryCta.href}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-8 text-base font-semibold text-white shadow-sm shadow-brand/25 transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-neutral-300 bg-white px-8 text-base font-semibold text-neutral-800 transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
        <LessonCardMockup />
      </div>
    </section>
  );
}

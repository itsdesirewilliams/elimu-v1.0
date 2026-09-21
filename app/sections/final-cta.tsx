import { finalCta } from "@/data/final-cta";

export default function FinalCtaSection() {
  const { eyebrow, title, subline, primary, secondary } = finalCta;

  return (
    <section
      aria-label="Get started"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-brand to-brand-deep py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
          {subline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={primary.href}
            className="inline-flex h-12 w-full items-center justify-center rounded-md bg-white px-8 text-base font-semibold text-brand shadow-sm transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto motion-reduce:transition-none"
          >
            {primary.label}
          </a>
          <a
            href={secondary.href}
            className="inline-flex h-12 w-full items-center justify-center rounded-md border border-white/50 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto motion-reduce:transition-none"
          >
            {secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}

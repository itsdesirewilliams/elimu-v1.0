import { howItWorks } from "@/data/how-it-works";
import SectionHeading from "./section-heading";

function ArrowIcon({ className }: { className: string }) {
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
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function RepeatIcon({ className }: { className: string }) {
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
      <path d="M23 4v6h-6M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

export default function HowItWorksSection() {
  const { eyebrow, title, intro, loopLabel, loop, steps } = howItWorks;

  return (
    <section
      id="how-it-works"
      aria-label="How It Works"
      className="scroll-mt-24 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-7 hidden border-t-2 border-dashed border-neutral-200 lg:block"
          />
          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <span className="font-heading text-3xl font-bold text-brand">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-10 rounded-xl border border-brand/15 bg-brand/[0.04] p-6 sm:p-8">
          <div className="flex items-center justify-center gap-2">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {loopLabel}
            </p>
            <RepeatIcon className="h-4 w-4 text-burgundy" />
          </div>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            {loop.map((stage, index) => (
              <li key={stage} className="flex items-center gap-2">
                <span className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-neutral-800">
                  {stage}
                </span>
                {index < loop.length - 1 && (
                  <ArrowIcon className="h-3.5 w-3.5 text-brand/60" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

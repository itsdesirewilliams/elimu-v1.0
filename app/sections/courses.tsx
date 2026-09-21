import type { ComponentType } from "react";
import { coursesSection } from "@/data/courses";
import SectionHeading from "./section-heading";

function DivideIcon({ className }: { className: string }) {
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
      <circle cx="12" cy="6" r="1" />
      <circle cx="12" cy="18" r="1" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ActivityIcon({ className }: { className: string }) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function FlaskIcon({ className }: { className: string }) {
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
      <path d="M9 3h6M10 3v5.2L4.7 17.9A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.8-3.1L14 8.2V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

function LeafIcon({ className }: { className: string }) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function GlobeIcon({ className }: { className: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function CapIcon({ className }: { className: string }) {
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
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </svg>
  );
}

function BookIcon({ className }: { className: string }) {
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

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

const icons: Record<
  (typeof coursesSection.items)[number]["category"],
  ComponentType<{ className: string }>
> = {
  Mathematics: DivideIcon,
  Physics: ActivityIcon,
  Chemistry: FlaskIcon,
  Biology: LeafIcon,
  Humanities: GlobeIcon,
};

export default function CoursesSection() {
  const { eyebrow, title, intro, cta, items } = coursesSection;

  return (
    <section
      id="courses"
      aria-label="Courses"
      className="scroll-mt-24 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {items.map((course) => {
            const Icon = icons[course.category];
            return (
              <li
                key={course.title}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-brand/30 motion-reduce:transition-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-neutral-500">
                    {course.category}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-neutral-900">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {course.description}
                </p>
                <div className="mt-4 flex items-center gap-4 border-t border-neutral-100 pt-4 text-xs font-medium text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <CapIcon className="h-3.5 w-3.5" />
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookIcon className="h-3.5 w-3.5" />
                    {course.lessons} Lessons
                  </span>
                </div>
                <a
                  href={cta.href}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none"
                >
                  {cta.label}
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

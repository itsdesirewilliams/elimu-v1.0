import type { ComponentType } from "react";
import Image from "next/image";
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

const MAX_CARD_DESCRIPTION_CHARS = 60;

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
            const showDescription =
              course.description.length <= MAX_CARD_DESCRIPTION_CHARS;
            return (
              <li
                key={course.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-brand/30 motion-reduce:transition-none"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                  <Image
                    src={course.thumbnail}
                    alt=""
                    width={800}
                    height={450}
                    unoptimized
                    className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-brand" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-neutral-900">
                    {course.title}
                  </h3>
                  {showDescription && (
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {course.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-neutral-500">
                    <span>{course.level}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <a
                    href={cta.href}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none"
                  >
                    {cta.label}
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import Image from "next/image";
import { testimonialsSection } from "@/data/testimonials";
import SectionHeading from "./section-heading";

export default function TestimonialsSection() {
  const { eyebrow, title, footnote, items } = testimonialsSection;

  return (
    <section
      aria-label={title}
      className="scroll-mt-24 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className="mt-14 grid gap-4 md:grid-cols-3 sm:gap-6">
          {items.map((testimonial) => (
            <li
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <span
                aria-hidden="true"
                className="font-heading text-5xl leading-none text-brand/25"
              >
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-neutral-700">
                {testimonial.quote}
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                {testimonial.photo ? (
                  <Image
                    src={testimonial.photo}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand"
                  >
                    {testimonial.initials}
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {testimonial.context}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-xs text-neutral-500">{footnote}</p>
      </div>
    </section>
  );
}

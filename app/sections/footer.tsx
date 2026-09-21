import type { ComponentType } from "react";
import Image from "next/image";
import { footerContent } from "@/data/footer";

function XIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

function InstagramIcon({ className }: { className: string }) {
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
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function FacebookIcon({ className }: { className: string }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className: string }) {
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
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.6a8.5 8.5 0 1 1 16.1-3.9z" />
    </svg>
  );
}

const socialIcons: Record<
  (typeof footerContent.socials)[number],
  ComponentType<{ className: string }>
> = {
  X: XIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  WhatsApp: WhatsAppIcon,
};

export default function Footer() {
  const {
    description,
    explore,
    exploreLabel,
    companyLabel,
    placeholders,
    socials,
    legal,
  } = footerContent;

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Image
              src="/wordmark-green.png"
              alt="ElimuBoost wordmark"
              width={120}
              height={33}
            />
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              {description}
            </p>
            <ul className="mt-6 flex gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social];
                return (
                  <li key={social}>
                    <span
                      role="img"
                      aria-label={`${social} placeholder`}
                      title={`${social} (coming soon)`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-400"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-wrap gap-16 sm:gap-24">
            <nav aria-label="Footer">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {exploreLabel}
              </p>
              <ul className="mt-4 space-y-1.5">
                {explore.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-block py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 motion-reduce:transition-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {companyLabel}
              </p>
              <ul className="mt-4 space-y-1.5">
                {placeholders.map((placeholder) => (
                  <li
                    key={placeholder}
                    className="py-2.5 text-sm text-neutral-400"
                  >
                    {placeholder}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-100 pt-6 text-xs text-neutral-500">
          {legal}
        </div>
      </div>
    </footer>
  );
}

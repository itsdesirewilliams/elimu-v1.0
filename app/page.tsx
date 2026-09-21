import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
          <Image
            src="/mark-green.png"
            alt="Elimu Boost Mark"
            width={32}
            height={33}
            priority
          />
          <Image
            src="/wordmark-green.png"
            alt="Elimu Boost wordmark"
            width={116}
            height={32}
            priority
          />
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-burgundy">
            Senior 4 · CSE
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold text-neutral-900">
            Master Senior 4. Pass Your CSE.
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Interactive, step-by-step lessons aligned to the South Sudan
            curriculum — built to get you CSE-ready.
          </p>
        </div>
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-neutral-500">
          © Elimu Boost
        </div>
      </footer>
    </div>
  );
}

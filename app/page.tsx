import Header from "./sections/header";
import Hero from "./sections/hero";
import TrustStrip from "./sections/trust-strip";
import CoursesSection from "./sections/courses";
import HowItWorksSection from "./sections/how-it-works";
import FeaturesSection from "./sections/features";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <CoursesSection />
        <HowItWorksSection />
        <FeaturesSection />
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-neutral-500">
          © Elimu Boost
        </div>
      </footer>
    </div>
  );
}

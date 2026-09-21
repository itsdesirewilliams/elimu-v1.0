import Header from "./sections/header";
import Hero from "./sections/hero";
import TrustStrip from "./sections/trust-strip";
import CoursesSection from "./sections/courses";
import HowItWorksSection from "./sections/how-it-works";
import ProductPreviewSection from "./sections/product-preview";
import FeaturesSection from "./sections/features";
import TestimonialsSection from "./sections/testimonials";
import FinalCtaSection from "./sections/final-cta";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <CoursesSection />
        <HowItWorksSection />
        <ProductPreviewSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

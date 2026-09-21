import { productPreview } from "@/data/product-preview";
import SectionHeading from "./section-heading";
import ProductPreviewCard from "./product-preview-card";

export default function ProductPreviewSection() {
  const { eyebrow, title, intro } = productPreview;

  return (
    <section
      id="product-preview"
      aria-label="Product Preview"
      className="scroll-mt-24 overflow-hidden bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mx-auto mt-12 max-w-xl">
          <ProductPreviewCard />
        </div>
      </div>
    </section>
  );
}

import { HeroSection } from '@/components/sections/hero-section';
import { ProductFeatures } from '@/components/sections/product-features';
import { ProductCatalog } from '@/components/sections/product-catalog';
import { Testimonials } from '@/components/sections/testimonials';
import { QuickBuy } from '@/components/sections/quick-buy';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProductFeatures />
      </div>
      <ProductCatalog />
      <Testimonials />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <QuickBuy />
      </div>
    </>
  );
}

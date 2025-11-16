import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-nuts');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Lo Mejor de la Naturaleza, en tu Puerta.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
          Descubre el sabor puro de frutos secos premium y totalmente naturales, seleccionados por su calidad y frescura.
        </p>
        <Button size="lg" className="mt-8" asChild>
          <a href="#products">Compra Nuestra Colección</a>
        </Button>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-secondary text-secondary-foreground">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lo que Dicen Nuestros Clientes</h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Nos enorgullece la calidad de nuestros productos y la felicidad de nuestros clientes.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-background text-foreground">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <StarRating rating={testimonial.rating} />
                      <blockquote className="text-base italic">"{testimonial.quote}"</blockquote>
                    </CardContent>
                    <div className="flex items-center gap-4 p-6 pt-0">
                      <Image
                        src={testimonial.image.imageUrl}
                        alt={testimonial.image.description}
                        data-ai-hint={testimonial.image.imageHint}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

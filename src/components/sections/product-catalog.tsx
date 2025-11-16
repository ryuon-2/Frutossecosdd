import Image from 'next/image';
import { products } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export function ProductCatalog() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Productos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Elige entre nuestra selección de frutos secos premium, disponibles en elegantes frascos y prácticas bolsas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative aspect-square w-full">
                <Image
                  src={product.image.imageUrl}
                  alt={product.image.description}
                  data-ai-hint={product.image.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <CardHeader className="p-0">
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="pt-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-0 pt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold">S/{product.price.toFixed(2)}</p>
                    <Select defaultValue={product.sizes[0]}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Tamaño" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.sizes.map((size) => (
                          <SelectItem key={size} value={size}>{size}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-6">
                  <Button className="w-full" asChild>
                    <a href="#quick-buy">Comprar Ahora</a>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

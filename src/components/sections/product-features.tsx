import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Award, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: '100% Natural',
    description: 'Sin aditivos ni conservantes. Solo pura y sana bondad directamente de la naturaleza.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Calidad Premium',
    description: 'Seleccionamos cuidadosamente los mejores frutos secos para garantizar un sabor, textura y frescura superiores.',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: 'Beneficios Nutricionales',
    description: 'Repletos de nutrientes esenciales, nuestros frutos secos son una forma deliciosa de mejorar tu salud.',
  },
];

export function ProductFeatures() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Por qué elegir Dinos Natural?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Experimenta la diferencia que marcan la verdadera calidad y los ingredientes naturales.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="text-center">
            <CardHeader className="items-center">
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

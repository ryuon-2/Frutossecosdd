import { Product, Testimonial } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // This is a developer-facing error, so we can leave it as a thrown error.
    throw new Error(`Image with id "${id}" not found in placeholder-images.json.`);
  }
  return image;
};

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Almendras en Frasco',
    description: 'Almendras frescas y crujientes en un frasco reutilizable.',
    price: 12.00,
    image: getImage('almonds-taper'),
    sizes: ['100g', '250g', '500g'],
    type: 'Taper',
  },
  {
    id: 'prod-2',
    name: 'Nueces en Bolsa',
    description: 'Nueces ricas y terrosas, perfectas para hornear o como snack.',
    price: 13.00,
    image: getImage('walnuts-bag'),
    sizes: ['100g', '250g', '500g'],
    type: 'Bag',
  },
  {
    id: 'prod-3',
    name: 'Pecanas en Frasco',
    description: 'Pecanas cremosas y premium en nuestro frasco insignia.',
    price: 14.00,
    image: getImage('cashews-taper'),
    sizes: ['100g', '250g', '500g'],
    type: 'Taper',
  },
  {
    id: 'prod-4',
    name: 'Mix de Nueces en Bolsa',
    description: 'Un surtido delicioso y saludable de nuestros mejores frutos secos.',
    price: 11.99,
    image: getImage('mixed-nuts-bag'),
    sizes: ['100g', '250g', '500g'],
    type: 'Bag',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sara J.',
    quote: '¡Los frutos secos más frescos que he probado! La calidad es excepcional y el empaque es hermoso. Definitivamente volveré a pedir.',
    image: getImage('customer-1'),
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Miguel B.',
    quote: 'Dinos Natural es mi opción para snacks saludables. La bolsa de mix de frutos secos es mi favorita. ¡Entrega rápida y excelente servicio al cliente!',
    image: getImage('customer-2'),
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Emilia R.',
    quote: '¡Me encantan los frascos! Se ven tan elegantes en mi despensa. Las almendras son increíblemente crujientes y deliciosas. ¡Muy recomendado!',
    image: getImage('customer-3'),
    rating: 5,
  },
];

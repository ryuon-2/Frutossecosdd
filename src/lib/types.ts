import type { ImagePlaceholder } from './placeholder-images';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: ImagePlaceholder;
  sizes: string[];
  type: 'Taper' | 'Bag';
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  image: ImagePlaceholder;
  rating: number;
};

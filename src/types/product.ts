export interface Product {
  id: string;
  name: string;
  category: 'pots-planters' | 'vases';
  price: number;
  images: string[];
  description: string;
}

export interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

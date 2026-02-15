import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  title: string;
  products: Product[];
  id?: string;
}

export default function ProductGrid({ title, products, id }: ProductGridProps) {
  return (
    <section id={id} className="py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#2B1F3D] mb-2 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

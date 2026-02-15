import ProductGrid from '../components/ProductGrid';
import { potsAndPlanters, vases } from '../data/products';

export default function Products() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-[#2B1F3D] mb-6">Our Collection</h1>
        <p className="text-xl text-[#3B3B3B] max-w-2xl">
          Curated pieces designed to bring elegance and functionality to your space. Each item is carefully crafted with attention to detail and quality.
        </p>
      </div>

      <ProductGrid
        title="Pots & Planters"
        products={potsAndPlanters}
        id="pots-planters"
      />

      <ProductGrid
        title="Vases"
        products={vases}
        id="vases"
      />
    </div>
  );
}

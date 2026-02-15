import { useState } from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="group">
      <div
        className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
        onMouseEnter={() => setCurrentImage(1)}
        onMouseLeave={() => setCurrentImage(0)}
      >
        <img
          src={product.images[currentImage] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-4 left-5">
          <p className="text-white/90 text-sm font-light tracking-wide mb-1">
            Latest in
          </p>
          <h3 className="text-white text-xl lg:text-2xl font-serif relative inline-block">
            {product.name}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500 ease-out" />
          </h3>
        </div>
      </div>
    </div>
  );
}

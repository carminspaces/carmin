import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import ProductGrid from '../components/ProductGrid';
import CategoryCard from '../components/CategoryCard';
import { carouselSlides, potsAndPlanters, vases } from '../data/products';

export default function Home() {
  return (
    <div>
      <HeroCarousel slides={carouselSlides} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-serif text-3xl sm:text-3xl leading-relaxed text-[#3B3B3B]">
            Refined and thoughtfully made objects, designed to inspire everyday moments.
          </p>

          <div className="mt-16 flex justify-center">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#2B1F3D] hover:text-[#A41623] transition"
            >
              Learn more about us
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-6 w-10 h-px bg-[#2B1F3D] mx-auto opacity-40" />
        </div>
      </section>

      <ProductGrid
        title=""
        products={potsAndPlanters}
        id="pots-planters"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#3B3B3B] tracking-wide">
              SHOP BY CATEGORY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              image="/category-1.jpeg"
              label="Vase Collection"
              alt="Vase"
            />
            <CategoryCard
              image="/category-2.jpg"
              label="Objects of Desire"
              alt="Decorative pieces"
            />
            <CategoryCard
              image="category-3.jpg"
              label="The Planter Edit"
              alt="Pots/ Planters"
            />
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="grid lg:grid-cols-2 min-h-screen lg:min-h-[90vh]">
          <div className="bg-[#FFFFF] flex items-center justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-0">
            <div className="max-w-md">
              <h2 className="font-serif text-4xl lg:text-5xl text-[#2B1F3D] mb-6 leading-tight">
                Crafted to Connect You to Your Space
              </h2>
              <p className="text-lg text-[#2B1F3D] mb-10 leading-relaxed">
                Every piece designed not just to exhibit opulence but to give you a feeling of being connected to your space.
              </p>
              <Link
                to="/products"
                className="inline-block bg-[#2B1F3D] text-white px-8 py-4 font-semibold tracking-widest uppercase hover:bg-[#A41623] transition duration-300 text-sm"
              >
                Explore Our Collection
              </Link>
            </div>
          </div>

          <div className="h-80 lg:h-full overflow-hidden">
            <img
              src="/section_2a.jpeg"
              alt="Styled interior with plants and candles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

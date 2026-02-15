interface CategoryCardProps {
  image: string;
  label: string;
  alt: string;
}

export default function CategoryCard({ image, label, alt }: CategoryCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-6">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-center text-[#2B1F3D] text-sm font-semibold tracking-wider uppercase">
        {label}
      </h3>
    </div>
  );
}

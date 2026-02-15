import { ShoppingCart, Search, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white shadow-sm"
          : hovered
          ? "bg-white/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
      onMouseEnter={() => !scrolled && setHovered(true)}
      onMouseLeave={() => !scrolled && setHovered(false)}
    >
      <div className={`mx-auto px-4 pt-2 pb-2 relative transition-all duration-300 ${scrolled ? "max-w-7xl" : "max-w-7xl"}`}>

        {scrolled ? (
          // Scrolled state: logo left, menu center
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <img
                src="/carmin_logo.png"
                alt="Carmin"
                className="h-16"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-10">
              <Link to="/" className="text-[#2B1F3D] font-medium tracking-wide hover:text-[#A41623] transition">Home</Link>
              <Link to="/products" className="text-[#2B1F3D] font-medium tracking-wide hover:text-[#A41623] transition">Products</Link>
              <Link to="/about" className="text-[#2B1F3D] font-medium tracking-wide hover:text-[#A41623] transition">About</Link>
              <Link to="/contact" className="text-[#2B1F3D] font-medium tracking-wide hover:text-[#A41623] transition">Contact</Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-black/5 rounded-full transition">
                <Search className="w-5 h-5 text-[#2B1F3D]" />
              </button>

              <button className="p-2 hover:bg-black/5 rounded-full relative transition">
                <ShoppingCart className="w-5 h-5 text-[#2B1F3D]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#A41623] text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu */}
            <button className="lg:hidden p-2">
              <Menu className="w-6 h-6 text-[#2B1F3D]" />
            </button>
          </div>
        ) : (
          // Before scroll state: logo center, menu center
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
            <button className="lg:hidden p-2 absolute left-4">
              <Menu className="w-6 h-6 text-[#2B1F3D]" />
            </button>

            {/* Center Column: Logo + Menu */}
            <div className="flex flex-col items-center flex-1">
              {/* Logo */}
              <img
                src="/carmin_logo.png"
                alt="Carmin"
                className="w-auto h-16"
              />

              {/* Desktop Menu */}
              <nav className="hidden lg:flex space-x-10 mt-4">
                <Link to="/" className="text-[#2B1F3D] font-medium tracking-wide hover:text-[#A41623] transition">Home</Link>
                <Link to="/products" className="text-[#2B1F3D] font-medium tracking-wide hover:text-[#A41623] transition">Products</Link>
                <Link to="/about" className="text-[#2B1F3D] font-medium tracking-wide hover:text-[#A41623] transition">About</Link>
                <Link to="/contact" className="text-[#2B1F3D] font-medium tracking-wide hover:text-[#A41623] transition">Contact</Link>
              </nav>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 absolute lg:static right-4">
              <button className="p-2 hover:bg-black/5 rounded-full transition">
                <Search className="w-5 h-5 text-[#2B1F3D]" />
              </button>

              <button className="p-2 hover:bg-black/5 rounded-full relative transition">
                <ShoppingCart className="w-5 h-5 text-[#2B1F3D]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#A41623] text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 

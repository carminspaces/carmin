import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2B1F3D] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Who are we</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium home decor pieces that blend artistry with functionality. Transform your space with our curated collection.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pots-planters" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Shop Collection
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:info@carmin.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@carmin.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+91XXXXXXXXXX" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  Your Address Here
                </span>
              </li>
              <li className="pt-2">
                <p className="text-gray-400 text-xs mb-2">Monday - Saturday</p>
                <p className="text-gray-300 text-sm">9:30 am - 5:30 pm IST</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Find us on</h3>
            <div className="flex items-center space-x-4 mb-6">
              <a href="https://www.facebook.com/profile.php?id=61578703986228&ref=PROFILE_EDIT_xav_ig_profile_page_web#" className="text-gray-300 hover:text-white transition-colors" target="_blank">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/carminspaces?igsh=OG5tMnYwNTJ2OW1y" className="text-gray-300 hover:text-white transition-colors" target="_blank">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://in.pinterest.com/carminspaces" className="text-gray-300 hover:text-white transition-colors" target="_blank">
                <Heart className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <Globe className="w-4 h-4" />
              <span className="text-sm">India</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Carmin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

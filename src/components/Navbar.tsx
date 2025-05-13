import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  activeRoute?: string;
  onNavigate?: (route: string) => void;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "TESTIMONIALS", href: "/testimonials" },
  { label: "CONTACT", href: "/contact" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar({ activeRoute = "/", onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      // Default behavior - update window location if onNavigate not provided
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => activeRoute === href;

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <img
                  src="/images/Logo.avif"
                  alt="Pioneer Painting Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1
                  className="text-xl font-bold text-gray-900 cursor-pointer"
                  onClick={() => handleNavClick("/")}
                >
                  PIONEER PAINTING
                </h1>
                <p className="text-sm text-gray-600">
                  "PAINTING TO PERFECTION"
                </p>
              </div>
            </div>

            {/* Desktop Contact Info */}
            <a
              href="tel:435-232-5383"
              className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone size={20} />
              <div>
                <p className="text-sm font-medium">CALL TODAY</p>
                <p className="text-lg font-bold">435-232-5383</p>
              </div>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Navigation */}
      <nav className="bg-gray-800 text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 h-12 items-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`hover:text-yellow-300 transition-colors font-medium px-3 py-2 rounded ${
                  isActive(item.href) ? "text-yellow-300 bg-gray-700" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 text-white z-50 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-300 hover:bg-gray-700 transition-colors ${
                  isActive(item.href) ? "text-yellow-300 bg-gray-700" : ""
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Contact Button */}
            <div className="mt-4 mb-2">
              <a
                href="tel:435-232-5383"
                className="flex items-center space-x-2 w-full bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone size={20} />
                <div>
                  <p className="text-sm font-medium">CALL TODAY</p>
                  <p className="text-lg font-bold">435-232-5383</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

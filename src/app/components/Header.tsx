"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img
              src="logo-suxali.jpg"
              alt="Suxali Jigeen Logo"
              className="h-16"
            />
            <div>
              <h1 className="text-2xl font-bold text-orange-900">
                SUXALI JIGEEN
              </h1>
              <p className="text-sm text-orange-700">Femmes en marche</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {[
              { name: "Qui sommes-nous?", href: "/" },
              { name: "Nos actions", href: "#NosActions" },
              { name: "Nos partenaires", href: "#NosPartenaires" },
              { name: "Actualités", href: "#Actualités" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-orange-900 transition-colors hover:text-orange-600"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="text-orange-900 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="py-4 border-t border-orange-100 md:hidden">
            {[
              { name: "Accueil", href: "/" },
              { name: "Qui sommes-nous?", href: "/qui-sommes-nous" },
              { name: "Nos actions", href: "/nos-actions" },
              { name: "Nos partenaires", href: "/nos-partenaires" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-orange-900 transition-colors hover:text-orange-600"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-context"

type Language = "en" | "id"

const translations = {
  en: {
    home: "Home",
    products: "Products",
    about: "About",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  id: {
    home: "Beranda",
    products: "Produk",
    about: "Tentang Kami",
    testimonials: "Testimoni",
    contact: "Kontak",
  },
}

export default function Header() {
  const [language, setLanguage] = useState<Language>("en")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { count } = useCart()

  useEffect(() => {
    const savedLanguage = localStorage.getItem("artha-language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "id" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("artha-language", newLanguage)
  }

  const t = translations[language]

  const navItems = [
    { key: "home", href: "/" },
    { key: "products", href: "/products" },
    { key: "about", href: "/about" },
    { key: "testimonials", href: "/testimonials" },
    { key: "contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm sm:text-lg">A</span>
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">Artha</span>
              <span className="text-lg sm:text-xl font-light text-amber-600 ml-1">Furniture</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`relative font-medium transition-all duration-300 group text-sm xl:text-base ${
                  pathname === item.href ? "text-amber-600" : "text-slate-700 hover:text-amber-600"
                }`}
              >
                {t[item.key as keyof typeof t]}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-700 transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Cart Button */}
            <Link
              href="/cart"
              className="relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-slate-700 hover:text-amber-700 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-amber-600 text-white text-[10px] flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 border border-slate-300 rounded-md sm:rounded-lg hover:text-amber-600 hover:border-amber-600 transition-all duration-300"
            >
              {language === "en" ? "ID" : "EN"}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                <span
                  className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-slate-700 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-slate-700 mt-1 sm:mt-1.5 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-slate-700 mt-1 sm:mt-1.5 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-slate-200">
          <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`font-medium py-2 sm:py-3 border-b border-slate-100 last:border-b-0 transition-all duration-300 text-base sm:text-lg ${
                    pathname === item.href ? "text-amber-600" : "text-slate-700 hover:text-amber-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {t[item.key as keyof typeof t]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

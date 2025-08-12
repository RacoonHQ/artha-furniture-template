"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Grid, List, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { products } from "@/lib/products"
import Link from "next/link"
import { useCart } from "@/components/cart-context"

type Language = "en" | "id"

const translations = {
  en: {
    pageTitle: "Our Products",
    pageSubtitle: "Discover our complete collection of premium handcrafted furniture",
    searchPlaceholder: "Search products...",
    filterBy: "Filter by Category",
    allCategories: "All Categories",
    viewDetails: "View Details",
    addToCart: "Add to Cart",
    sortBy: "Sort by",
    priceAsc: "Price: Low to High",
    priceDesc: "Price: High to Low",
    nameAsc: "Name: A to Z",
    nameDesc: "Name: Z to A",
  },
  id: {
    pageTitle: "Produk Kami",
    pageSubtitle: "Temukan koleksi lengkap furniture premium buatan tangan kami",
    searchPlaceholder: "Cari produk...",
    filterBy: "Filter berdasarkan Kategori",
    allCategories: "Semua Kategori",
    viewDetails: "Lihat Detail",
    addToCart: "Tambah ke Keranjang",
    sortBy: "Urutkan berdasarkan",
    priceAsc: "Harga: Rendah ke Tinggi",
    priceDesc: "Harga: Tinggi ke Rendah",
    nameAsc: "Nama: A ke Z",
    nameDesc: "Nama: Z ke A",
  },
}

const categories = [
  { en: "Living Room", id: "Ruang Tamu" },
  { en: "Bedroom", id: "Kamar Tidur" },
  { en: "Dining Room", id: "Ruang Makan" },
  { en: "Office", id: "Kantor" },
]

export default function ProductsPage() {
  const [language, setLanguage] = useState<Language>("en")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sortBy, setSortBy] = useState("nameAsc")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { addItem, consent } = useCart()

  useEffect(() => {
    const savedLanguage = localStorage.getItem("artha-language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const t = translations[language]

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name[language].toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "" || product.category[language] === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "priceAsc":
          return a.priceNum - b.priceNum
        case "priceDesc":
          return b.priceNum - a.priceNum
        case "nameAsc":
          return a.name[language].localeCompare(b.name[language])
        case "nameDesc":
          return b.name[language].localeCompare(a.name[language])
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Premium Collection
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 font-playfair px-2">
              {t.pageTitle}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2">
              {t.pageSubtitle}
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mt-4 sm:mt-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 flex-1">
                {/* Search */}
                <div className="relative w-full sm:w-1/2 min-w-[220px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4 sm:h-5 sm:w-5" />
                  <Input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 sm:pl-10 h-10 sm:h-12 border-slate-300 focus:border-amber-500 text-sm sm:text-base"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="h-10 sm:h-12 px-3 sm:px-4 border border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none bg-white text-sm sm:text-base"
                >
                  <option value="">{t.allCategories}</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category[language]}>
                      {category[language]}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-10 sm:h-12 px-3 sm:px-4 border border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none bg-white text-sm sm:text-base"
                >
                  <option value="nameAsc">{t.nameAsc}</option>
                  <option value="nameDesc">{t.nameDesc}</option>
                  <option value="priceAsc">{t.priceAsc}</option>
                  <option value="priceDesc">{t.priceDesc}</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex items-center justify-end">
                <div className="flex items-center space-x-2 bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "grid" ? "bg-white text-amber-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <Grid className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "list" ? "bg-white text-amber-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <List className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                : "space-y-4 sm:space-y-6"
            }
          >
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className="block">
                <Card
                  className={`group hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden cursor-pointer h-full p-0 ${
                    viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${viewMode === "list" ? "sm:w-48 sm:flex-shrink-0" : ""}`}>
                    {viewMode === "list" ? (
                      <div className="relative w-full h-48 sm:h-full bg-white overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name[language]}
                          fill
                          className="block object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name[language]}
                          fill
                          className="block object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
                        />
                      </div>
                    )}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-amber-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                      Premium
                    </div>
                  </div>
                  <CardContent
                    className={`p-4 sm:p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}
                  >
                    <div>
                      <div className="mb-2">
                        <span className="text-xs sm:text-sm text-amber-600 font-medium">
                          {product.category[language]}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors font-playfair line-clamp-2">
                        {product.name[language]}
                      </h3>
                      <p className="text-slate-600 mb-3 sm:mb-4 text-sm leading-relaxed line-clamp-2">
                        {product.description[language]}
                      </p>
                    </div>
                    <div className="space-y-5">
                      <span className="text-xl sm:text-2xl font-bold text-amber-600">{product.price}</span>
                      <div className="flex gap-2 mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 rounded-full px-3 sm:px-4 bg-transparent text-xs sm:text-sm"
                        >
                          {t.viewDetails}
                        </Button>
                        <Button
                          size="icon"
                          className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full w-9 h-9 sm:w-10 sm:h-10"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem({
                              id: product.id,
                              name: product.name[language],
                              price: product.price,
                              priceNum: product.priceNum,
                              image: product.images[0],
                            })
                            if (consent !== "accepted") {
                              console.log("Cookie consent declined/unknown: cart not saved.")
                            }
                          }}
                          aria-label={t.addToCart}
                        >
                          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                          <span className="sr-only">{t.addToCart}</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <p className="text-slate-500 text-base sm:text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

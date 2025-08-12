"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Truck, Palette, Award, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"


type Language = "en" | "id"

const translations = {
  en: {
    heroTitle: "Elevate Your Space with Timeless Furniture",
    heroSubtitle:
      "Discover premium handcrafted furniture that transforms your home into a sanctuary of comfort and style",
    shopNow: "Shop Now",
    exploreCollection: "Explore Collection",
    bestSellers: "Featured Products",
    viewDetails: "View Details",
    whyChooseUs: "Why Choose Artha Furniture",
    premiumMaterials: "Premium Materials",
    premiumMaterialsDesc:
      "We use only the finest materials sourced from sustainable forests and premium suppliers worldwide",
    customDesign: "Custom Design Services",
    customDesignDesc:
      "Our expert designers work with you to create bespoke furniture that perfectly fits your space and style",
    fastDelivery: "Fast & Safe Delivery",
    fastDeliveryDesc:
      "Professional delivery team ensures your furniture arrives safely and is set up perfectly in your home",
    testimonialsTitle: "What Our Clients Say",
  },
  id: {
    heroTitle: "Tingkatkan Ruangan Anda dengan Furniture yang Abadi",
    heroSubtitle:
      "Temukan furniture premium buatan tangan yang mengubah rumah Anda menjadi tempat yang nyaman dan bergaya",
    shopNow: "Belanja Sekarang",
    exploreCollection: "Jelajahi Koleksi",
    bestSellers: "Produk Unggulan",
    viewDetails: "Lihat Detail",
    whyChooseUs: "Mengapa Memilih Artha Furniture",
    premiumMaterials: "Material Premium",
    premiumMaterialsDesc:
      "Kami hanya menggunakan material terbaik dari hutan berkelanjutan dan supplier premium di seluruh dunia",
    customDesign: "Layanan Desain Kustom",
    customDesignDesc:
      "Desainer ahli kami bekerja sama dengan Anda untuk menciptakan furniture yang sesuai dengan ruang dan gaya Anda",
    fastDelivery: "Pengiriman Cepat & Aman",
    fastDeliveryDesc:
      "Tim pengiriman profesional memastikan furniture Anda tiba dengan aman dan dipasang dengan sempurna",
    testimonialsTitle: "Kata Klien Kami",
  },
}

const products = [
  {
    id: 1,
    slug: "elegant-dining-set",
    name: { en: "Elegant Dining Set", id: "Set Makan Elegan" },
    category: { en: "Dining Room", id: "Ruang Makan" },
    price: "Rp 15,500,000",
    description: {
      en: "Handcrafted solid wood dining set for 6 people",
      id: "Set makan kayu solid buatan tangan untuk 6 orang",
    },
    image: "/products/elegant-dining-set-1.jpg",
  },
  {
    id: 2,
    slug: "luxury-sofa-collection",
    name: { en: "Luxury Sofa Collection", id: "Koleksi Sofa Mewah" },
    category: { en: "Living Room", id: "Ruang Tamu" },
    price: "Rp 22,800,000",
    description: {
      en: "Premium leather sofa with ergonomic design",
      id: "Sofa kulit premium dengan desain ergonomis",
    },
    image: "/products/luxury-sofa-collection-1.jpg",
  },
  {
    id: 3,
    slug: "master-bedroom-suite",
    name: { en: "Master Bedroom Suite", id: "Suite Kamar Utama" },
    category: { en: "Bedroom", id: "Kamar Tidur" },
    price: "Rp 18,900,000",
    description: {
      en: "Complete bedroom set with wardrobe and nightstands",
      id: "Set kamar lengkap dengan lemari dan meja samping",
    },
    image: "/products/master-bedroom-suite-1.jpg",
  },
  {
    id: 4,
    slug: "executive-office-desk",
    name: { en: "Executive Office Desk", id: "Meja Kantor Eksekutif" },
    category: { en: "Office", id: "Kantor" },
    price: "Rp 8,750,000",
    description: {
      en: "Sophisticated workspace solution for professionals",
      id: "Solusi ruang kerja canggih untuk profesional",
    },
    image: "/products/executive-office-desk-1.jpg",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/team/sarah-johnson.jpg",
    quote: {
      en: "Artha Furniture transformed our home completely. The quality and craftsmanship are exceptional!",
      id: "Artha Furniture mengubah rumah kami sepenuhnya. Kualitas dan keahliannya luar biasa!",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/team/michael-chen.jpg",
    quote: {
      en: "Outstanding service and beautiful furniture. Highly recommend for anyone looking for premium quality.",
      id: "Pelayanan luar biasa dan furniture yang indah. Sangat merekomendasikan untuk kualitas premium.",
    },
  },
  {
    id: 3,
    name: "Priya Sharma",
    image: "/team/priya-sharma.jpg",
    quote: {
      en: "The custom design service exceeded our expectations. Every detail was perfect!",
      id: "Layanan desain kustom melebihi ekspektasi kami. Setiap detail sempurna!",
    },
  },
]

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("artha-language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const t = translations[language]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/brand/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-700/30"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full text-amber-300 text-xs sm:text-sm font-medium border border-white/20">
              Premium Furniture Collection
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight font-playfair px-2">
            {t.heroTitle}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed px-2">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link href="/products" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {t.shopNow}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/products" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                {t.exploreCollection}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Featured Collection
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-playfair px-2">
              {t.bestSellers}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className="block">
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden cursor-pointer h-full p-0">
                  <div className="relative overflow-hidden">
                    <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name[language]}
                        fill
                        className="block object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
                      />
                    </div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-amber-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                      Premium
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div>
                      <div className="mb-2">
                        <span className="text-xs sm:text-sm text-amber-600 font-medium">
                          {product.category?.[language] || 'Furniture'}
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
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 sm:px-8 py-3 rounded-full font-semibold"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Our Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-playfair">{t.whyChooseUs}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t.premiumMaterials,
                description: t.premiumMaterialsDesc,
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: Palette,
                title: t.customDesign,
                description: t.customDesignDesc,
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Truck,
                title: t.fastDelivery,
                description: t.fastDeliveryDesc,
                color: "from-red-500 to-red-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-slate-50 border-0 hover:shadow-xl transition-all duration-500 group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 group-hover:text-amber-600 transition-colors font-playfair">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Client Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-playfair">{t.testimonialsTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-12 text-center bg-white border-0 shadow-xl">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-amber-500 shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-amber-400 fill-current mx-1" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].quote[language]}"
              </blockquote>

              <cite className="text-slate-900 font-bold text-lg">{testimonials[currentTestimonial].name}</cite>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-slate-50 hover:shadow-2xl transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-slate-600 group-hover:text-amber-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-slate-50 hover:shadow-2xl transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-slate-600 group-hover:text-amber-600" />
            </button>
          </div>

          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 scale-125"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

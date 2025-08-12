"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

type Language = "en" | "id"

const translations = {
  en: {
    pageTitle: "Client Testimonials",
    pageSubtitle: "Hear what our satisfied customers have to say about their Artha Furniture experience",
    allTestimonials: "All Testimonials",
    verified: "Verified Purchase",
  },
  id: {
    pageTitle: "Testimoni Klien",
    pageSubtitle: "Dengarkan apa yang dikatakan pelanggan puas kami tentang pengalaman mereka dengan Artha Furniture",
    allTestimonials: "Semua Testimoni",
    verified: "Pembelian Terverifikasi",
  },
}

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Jakarta",
    image: "/team/sarah-johnson.jpg",
    rating: 5,
    date: "March 2024",
    product: { en: "Luxury Sofa Collection", id: "Koleksi Sofa Mewah" },
    quote: {
      en: "Artha Furniture transformed our living room completely. The quality and craftsmanship are exceptional! The sofa is not only beautiful but incredibly comfortable. The delivery team was professional and set everything up perfectly.",
      id: "Artha Furniture mengubah ruang tamu kami sepenuhnya. Kualitas dan keahliannya luar biasa! Sofanya tidak hanya indah tapi juga sangat nyaman. Tim pengiriman sangat profesional dan memasang semuanya dengan sempurna.",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Surabaya",
    image: "/team/michael-chen.jpg",
    rating: 5,
    date: "February 2024",
    product: { en: "Executive Office Desk", id: "Meja Kantor Eksekutif" },
    quote: {
      en: "Outstanding service and beautiful furniture. The custom office desk exceeded all my expectations. The attention to detail is remarkable, and it has significantly improved my work productivity. Highly recommend for anyone looking for premium quality.",
      id: "Pelayanan luar biasa dan furniture yang indah. Meja kantor kustom melebihi semua ekspektasi saya. Perhatian terhadap detail sangat luar biasa, dan telah meningkatkan produktivitas kerja saya secara signifikan. Sangat merekomendasikan untuk kualitas premium.",
    },
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Bandung",
    image: "/team/priya-sharma.jpg",
    rating: 5,
    date: "January 2024",
    product: { en: "Master Bedroom Suite", id: "Suite Kamar Utama" },
    quote: {
      en: "The custom design service exceeded our expectations. Every detail was perfect! The bedroom suite is exactly what we dreamed of. The designers listened to our needs and created something truly special. Worth every penny!",
      id: "Layanan desain kustom melebihi ekspektasi kami. Setiap detail sempurna! Suite kamar persis seperti yang kami impikan. Para desainer mendengarkan kebutuhan kami dan menciptakan sesuatu yang benar-benar istimewa. Sebanding dengan harganya!",
    },
  },
  {
    id: 4,
    name: "David Wilson",
    location: "Medan",
    image: "/team/david-wilson.jpg",
    rating: 5,
    date: "December 2023",
    product: { en: "Elegant Dining Set", id: "Set Makan Elegan" },
    quote: {
      en: "Absolutely love our new dining set! The craftsmanship is top-notch and the wood quality is exceptional. Our family gatherings have become even more special with this beautiful furniture. The investment was definitely worth it.",
      id: "Sangat menyukai set makan baru kami! Keahlian pembuatannya sangat baik dan kualitas kayunya luar biasa. Pertemuan keluarga kami menjadi lebih istimewa dengan furniture yang indah ini. Investasinya benar-benar sepadan.",
    },
  },
  {
    id: 5,
    name: "Lisa Anderson",
    location: "Yogyakarta",
    image: "/team/lisa-anderson.jpg",
    rating: 5,
    date: "November 2023",
    product: { en: "Modern Coffee Table", id: "Meja Kopi Modern" },
    quote: {
      en: "The modern coffee table is a perfect centerpiece for our living room. The marble top is gorgeous and the wooden base is solid and well-crafted. Artha Furniture's attention to detail is impressive. Highly satisfied with our purchase!",
      id: "Meja kopi modern adalah pusat perhatian yang sempurna untuk ruang tamu kami. Permukaan marmernya indah dan dasar kayunya kokoh dan dibuat dengan baik. Perhatian Artha Furniture terhadap detail sangat mengesankan. Sangat puas dengan pembelian kami!",
    },
  },
  {
    id: 6,
    name: "Robert Kim",
    location: "Semarang",
    image: "/team/robert-kim.jpg",
    rating: 5,
    date: "October 2023",
    product: { en: "Artisan Bookshelf", id: "Rak Buku Artisan" },
    quote: {
      en: "The bookshelf is not just furniture, it's a work of art! The craftsmanship is incredible and it fits perfectly in my home office. The storage space is well-designed and the aesthetic appeal is outstanding. Couldn't be happier!",
      id: "Rak bukunya bukan hanya furniture, tapi karya seni! Keahlian pembuatannya luar biasa dan pas sempurna di kantor rumah saya. Ruang penyimpanannya dirancang dengan baik dan daya tarik estetikanya luar biasa. Tidak bisa lebih senang lagi!",
    },
  },
]

export default function TestimonialsPage() {
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Client Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-playfair">{t.pageTitle}</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.pageSubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative max-w-5xl mx-auto">
            <Card className="p-12 text-center bg-white border-0 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-amber-500 shadow-xl"
                  />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-amber-400 fill-current mx-1" />
                ))}
              </div>

              <div className="mb-6">
                <Quote className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote[language]}"
                </blockquote>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <cite className="text-slate-900 font-bold text-xl block mb-2">
                  {testimonials[currentTestimonial].name}
                </cite>
                <div className="text-slate-600 mb-2">{testimonials[currentTestimonial].location}</div>
                <div className="text-amber-600 font-medium text-sm">
                  {testimonials[currentTestimonial].product[language]} • {testimonials[currentTestimonial].date}
                </div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mt-2">
                  {t.verified}
                </div>
              </div>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-slate-50 hover:shadow-2xl transition-all duration-300 group"
            >
              <ChevronLeft className="h-7 w-7 text-slate-600 group-hover:text-amber-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-slate-50 hover:shadow-2xl transition-all duration-300 group"
            >
              <ChevronRight className="h-7 w-7 text-slate-600 group-hover:text-amber-600" />
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

      {/* All Testimonials Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-playfair">{t.allTestimonials}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-amber-200 mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                    <p className="text-slate-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-slate-700 mb-4 leading-relaxed text-sm italic">
                  "{testimonial.quote[language].substring(0, 150)}..."
                </blockquote>

                <div className="border-t border-slate-200 pt-4">
                  <div className="text-amber-600 font-medium text-sm mb-1">{testimonial.product[language]}</div>
                  <div className="text-slate-500 text-xs">{testimonial.date}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

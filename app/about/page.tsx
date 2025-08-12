"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Award, Users, Clock, Leaf } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

type Language = "en" | "id"

const translations = {
  en: {
    pageTitle: "About Artha Furniture",
    pageSubtitle: "Crafting Excellence Since 2000",
    ourStory: "Our Story",
    storyContent1:
      "For over two decades, Artha Furniture has been at the forefront of premium furniture craftsmanship. Founded in 2000 with a vision to create timeless pieces that blend traditional artistry with contemporary design, we have grown from a small workshop to Indonesia's most trusted furniture brand.",
    storyContent2:
      "Our journey began with a simple belief: furniture should be more than functional pieces – they should be expressions of personality, comfort, and style. Every piece we create tells a story of meticulous attention to detail, premium materials, and unwavering commitment to quality.",
    ourValues: "Our Values",
    valuesSubtitle: "The principles that guide everything we do",
    qualityTitle: "Uncompromising Quality",
    qualityDesc:
      "We use only the finest materials and employ master craftsmen to ensure every piece meets our exacting standards.",
    sustainabilityTitle: "Environmental Responsibility",
    sustainabilityDesc:
      "Committed to sustainable practices, we source materials from certified forests and minimize our environmental impact.",
    innovationTitle: "Continuous Innovation",
    innovationDesc:
      "We constantly evolve our designs and techniques while respecting traditional craftsmanship methods.",
    customerTitle: "Customer Satisfaction",
    customerDesc:
      "Your satisfaction is our priority. We provide exceptional service from design consultation to after-sales support.",
    ourTeam: "Our Team",
    teamSubtitle: "Meet the artisans and designers behind our exceptional furniture",
    stats: "Our Achievements",
    statsSubtitle: "Numbers that reflect our commitment to excellence",
    yearsExperience: "Years of Experience",
    happyCustomers: "Happy Customers",
    productsDelivered: "Products Delivered",
    awards: "Industry Awards",
  },
  id: {
    pageTitle: "Tentang Artha Furniture",
    pageSubtitle: "Mengukir Keunggulan Sejak 2000",
    ourStory: "Cerita Kami",
    storyContent1:
      "Selama lebih dari dua dekade, Artha Furniture telah menjadi pelopor dalam keahlian furniture premium. Didirikan pada tahun 2000 dengan visi menciptakan karya abadi yang memadukan seni tradisional dengan desain kontemporer, kami telah berkembang dari bengkel kecil menjadi merek furniture terpercaya di Indonesia.",
    storyContent2:
      "Perjalanan kami dimulai dengan keyakinan sederhana: furniture harus lebih dari sekadar barang fungsional – mereka harus menjadi ekspresi kepribadian, kenyamanan, dan gaya. Setiap karya yang kami ciptakan menceritakan perhatian detail yang teliti, material premium, dan komitmen tak tergoyahkan terhadap kualitas.",
    ourValues: "Nilai-Nilai Kami",
    valuesSubtitle: "Prinsip yang memandu segala yang kami lakukan",
    qualityTitle: "Kualitas Tanpa Kompromi",
    qualityDesc:
      "Kami hanya menggunakan material terbaik dan mempekerjakan pengrajin ahli untuk memastikan setiap karya memenuhi standar ketat kami.",
    sustainabilityTitle: "Tanggung Jawab Lingkungan",
    sustainabilityDesc:
      "Berkomitmen pada praktik berkelanjutan, kami mengambil material dari hutan bersertifikat dan meminimalkan dampak lingkungan.",
    innovationTitle: "Inovasi Berkelanjutan",
    innovationDesc: "Kami terus mengembangkan desain dan teknik sambil menghormati metode keahlian tradisional.",
    customerTitle: "Kepuasan Pelanggan",
    customerDesc:
      "Kepuasan Anda adalah prioritas kami. Kami memberikan layanan luar biasa dari konsultasi desain hingga dukungan purna jual.",
    ourTeam: "Tim Kami",
    teamSubtitle: "Temui para pengrajin dan desainer di balik furniture luar biasa kami",
    stats: "Pencapaian Kami",
    statsSubtitle: "Angka yang mencerminkan komitmen kami terhadap keunggulan",
    yearsExperience: "Tahun Pengalaman",
    happyCustomers: "Pelanggan Puas",
    productsDelivered: "Produk Terkirim",
    awards: "Penghargaan Industri",
  },
}

const teamMembers = [
  {
    name: "Budi Santoso",
    position: { en: "Master Craftsman", id: "Pengrajin Ahli" },
    image: "/team/budi-santoso.jpg",
    experience: "25+ years",
  },
  {
    name: "Sari Dewi",
    position: { en: "Lead Designer", id: "Desainer Utama" },
    image: "/team/sari-dewi.jpg",
    experience: "15+ years",
  },
  {
    name: "Ahmad Rahman",
    position: { en: "Quality Manager", id: "Manajer Kualitas" },
    image: "/team/ahmad-rahman.jpg",
    experience: "20+ years",
  },
  {
    name: "Maya Putri",
    position: { en: "Customer Relations", id: "Hubungan Pelanggan" },
    image: "/team/maya-putri.jpg",
    experience: "10+ years",
  },
]

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("artha-language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const t = translations[language]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                {t.pageSubtitle}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-playfair">{t.pageTitle}</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  {t.ourStory}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-playfair">{t.ourStory}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mb-8 rounded-full"></div>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">{t.storyContent1}</p>
              <p className="text-slate-600 leading-relaxed text-lg">{t.storyContent2}</p>
            </div>
            <div className="relative">
              <Image
                src="/brand/workshop.jpg"
                alt="Artha Furniture Workshop"
                width={700}
                height={600}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                {t.stats}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-playfair">{t.stats}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.statsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "24+", label: t.yearsExperience, icon: Clock },
              { number: "5,000+", label: t.happyCustomers, icon: Users },
              { number: "15,000+", label: t.productsDelivered, icon: Award },
              { number: "25+", label: t.awards, icon: Award },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                {t.ourValues}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-playfair">{t.ourValues}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.valuesSubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Award,
                title: t.qualityTitle,
                description: t.qualityDesc,
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: Leaf,
                title: t.sustainabilityTitle,
                description: t.sustainabilityDesc,
                color: "from-green-500 to-green-600",
              },
              {
                icon: Users,
                title: t.innovationTitle,
                description: t.innovationDesc,
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Clock,
                title: t.customerTitle,
                description: t.customerDesc,
                color: "from-purple-500 to-purple-600",
              },
            ].map((value, index) => (
              <Card key={index} className="p-8 bg-slate-50 border-0 hover:shadow-xl transition-all duration-500 group">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-amber-600 transition-colors font-playfair">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                {t.ourTeam}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-playfair">{t.ourTeam}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.teamSubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-amber-100 group-hover:border-amber-300 transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-playfair">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{member.position[language]}</p>
                <p className="text-slate-500 text-sm">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

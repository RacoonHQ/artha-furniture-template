"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

type Language = "en" | "id"

const translations = {
  en: {
    pageTitle: "Contact Us",
    pageSubtitle: "Get in touch with our team for inquiries, custom designs, or any questions about our furniture",
    getInTouch: "Get In Touch",
    contactForm: "Send us a Message",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    contactInfo: "Contact Information",
    address: "Visit Our Showroom",
    addressDetail: "Jl. Furniture Raya No. 123, Jakarta Selatan, Indonesia 12345",
    phoneNumber: "+62 21 1234 5678",
    emailAddress: "info@arthafurniture.com",
    businessHours: "Business Hours",
    mondayFriday: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
    whyContact: "Why Contact Us?",
    customDesign: "Custom Design Consultation",
    customDesignDesc: "Work with our designers to create bespoke furniture pieces",
    productInquiry: "Product Inquiries",
    productInquiryDesc: "Get detailed information about our furniture collections",
    afterSales: "After-Sales Support",
    afterSalesDesc: "Maintenance tips and warranty support for your furniture",
  },
  id: {
    pageTitle: "Hubungi Kami",
    pageSubtitle: "Hubungi tim kami untuk pertanyaan, desain kustom, atau pertanyaan apapun tentang furniture kami",
    getInTouch: "Hubungi Kami",
    contactForm: "Kirim Pesan",
    name: "Nama Lengkap",
    email: "Alamat Email",
    phone: "Nomor Telepon",
    subject: "Subjek",
    message: "Pesan",
    sendMessage: "Kirim Pesan",
    contactInfo: "Informasi Kontak",
    address: "Kunjungi Showroom Kami",
    addressDetail: "Jl. Furniture Raya No. 123, Jakarta Selatan, Indonesia 12345",
    phoneNumber: "+62 21 1234 5678",
    emailAddress: "info@arthafurniture.com",
    businessHours: "Jam Operasional",
    mondayFriday: "Senin - Jumat: 09:00 - 18:00",
    saturday: "Sabtu: 09:00 - 16:00",
    sunday: "Minggu: Tutup",
    whyContact: "Mengapa Menghubungi Kami?",
    customDesign: "Konsultasi Desain Kustom",
    customDesignDesc: "Bekerja dengan desainer kami untuk menciptakan furniture yang unik",
    productInquiry: "Pertanyaan Produk",
    productInquiryDesc: "Dapatkan informasi detail tentang koleksi furniture kami",
    afterSales: "Dukungan Purna Jual",
    afterSalesDesc: "Tips perawatan dan dukungan garansi untuk furniture Anda",
  },
}

export default function ContactPage() {
  const [language, setLanguage] = useState<Language>("en")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const savedLanguage = localStorage.getItem("artha-language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const t = translations[language]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
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
                {t.getInTouch}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-playfair">{t.pageTitle}</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.pageSubtitle}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-playfair">{t.contactForm}</h2>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full"></div>
              </div>

              <Card className="p-6 sm:p-8 bg-slate-50 border-0 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                        {t.name}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-amber-500 focus:ring-0 transition-colors bg-white text-sm sm:text-base"
                        placeholder={t.name}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                        {t.email}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-amber-500 focus:ring-0 transition-colors bg-white text-sm sm:text-base"
                        placeholder={t.email}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                        {t.phone}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-amber-500 focus:ring-0 transition-colors bg-white text-sm sm:text-base"
                        placeholder={t.phone}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                        {t.subject}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-amber-500 focus:ring-0 transition-colors bg-white text-sm sm:text-base"
                        placeholder={t.subject}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                      {t.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-3 sm:px-4 py-3 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:border-amber-500 focus:ring-0 transition-colors resize-none bg-white text-sm sm:text-base"
                      placeholder={t.message}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 sm:h-14 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group text-sm sm:text-base"
                  >
                    <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    {t.sendMessage}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-playfair">{t.contactInfo}</h2>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Address */}
                <Card className="p-4 sm:p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{t.address}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{t.addressDetail}</p>
                    </div>
                  </div>
                </Card>

                {/* Phone */}
                <Card className="p-4 sm:p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Phone</h3>
                      <p className="text-slate-600 text-sm sm:text-base">{t.phoneNumber}</p>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-4 sm:p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Email</h3>
                      <p className="text-slate-600 text-sm sm:text-base">{t.emailAddress}</p>
                    </div>
                  </div>
                </Card>

                {/* Business Hours */}
                <Card className="p-4 sm:p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{t.businessHours}</h3>
                      <div className="text-slate-600 space-y-1 text-sm sm:text-base">
                        <p>{t.mondayFriday}</p>
                        <p>{t.saturday}</p>
                        <p>{t.sunday}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-playfair">{t.whyContact}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.customDesign,
                description: t.customDesignDesc,
                color: "from-amber-500 to-amber-600",
              },
              {
                title: t.productInquiry,
                description: t.productInquiryDesc,
                color: "from-blue-500 to-blue-600",
              },
              {
                title: t.afterSales,
                description: t.afterSalesDesc,
                color: "from-green-500 to-green-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-amber-600 transition-colors font-playfair">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
// Check if there are any nested Link issues in the contact page
// The contact page looks fine, no nested Links found

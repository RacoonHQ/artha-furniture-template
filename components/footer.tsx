"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

type Language = "en" | "id"

const translations = {
  en: {
    footerAbout: "Artha Furniture - Creating timeless pieces for your perfect home",
    newsletter: "Subscribe to Newsletter",
    subscribe: "Subscribe",
    address: "Jl. Furniture Raya No. 123, Jakarta, Indonesia",
    phone: "+62 21 1234 5678",
    emailContact: "info@arthafurniture.com",
    email: "Email",
  },
  id: {
    footerAbout: "Artha Furniture - Menciptakan karya abadi untuk rumah sempurna Anda",
    newsletter: "Berlangganan Newsletter",
    subscribe: "Berlangganan",
    address: "Jl. Furniture Raya No. 123, Jakarta, Indonesia",
    phone: "+62 21 1234 5678",
    emailContact: "info@arthafurniture.com",
    email: "Email",
  },
}

export default function Footer() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("artha-language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const t = translations[language]

  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">A</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight">Artha</span>
                <span className="text-xl sm:text-2xl font-light text-amber-400 ml-1">Furniture</span>
              </div>
            </div>
            <p className="text-slate-300 mb-6 sm:mb-8 max-w-md leading-relaxed text-sm sm:text-base">{t.footerAbout}</p>
            <div className="space-y-3 sm:space-y-4 text-slate-300">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                </div>
                <span className="text-sm sm:text-base">{t.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                </div>
                <span className="text-sm sm:text-base">{t.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                </div>
                <span className="text-sm sm:text-base">{t.emailContact}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{t.newsletter}</h3>
            <div className="space-y-3 sm:space-y-4">
              <Input
                type="email"
                placeholder={t.email}
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 h-10 sm:h-12 rounded-lg sm:rounded-xl focus:border-amber-500 text-sm sm:text-base"
              />
              <Button className="w-full h-10 sm:h-12 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base">
                {t.subscribe}
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Follow Us</h3>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-700 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center text-slate-400">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Artha Furniture. All rights reserved. <br />
            Website template by <a href="https://github.com/RacoonHQ" target="_blank" rel="noopener noreferrer">RacoonHQ</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

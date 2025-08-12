"use client"

import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

const CONSENT_KEY = "artha-cookie-consent"

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const existing = Cookies.get(CONSENT_KEY)
    if (!existing) setVisible(true)
  }, [])

  const accept = () => {
    Cookies.set(CONSENT_KEY, "accepted", { expires: 180 })
    setVisible(false)
  }
  const decline = () => {
    Cookies.set(CONSENT_KEY, "declined", { expires: 180 })
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-[60]">
      <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur shadow-xl border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 hidden sm:block">
            <Cookie className="h-5 w-5 text-amber-600" />
          </div>
          <div className="text-sm text-slate-700">
            <p className="font-semibold text-slate-900 mb-1">We use cookies</p>
            <p>
              We use cookies to remember your preferences and enhance your experience. If you decline, certain features like
              saving your cart will not function fully.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3">
          <Button variant="outline" onClick={decline} className="border-slate-300">
            Decline
          </Button>
          <Button onClick={accept} className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}

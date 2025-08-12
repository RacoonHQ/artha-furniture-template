import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart-context"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Artha Furniture - Premium Handcrafted Furniture",
  description: "Discover premium handcrafted furniture that transforms your home into a sanctuary of comfort and style",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <CookieConsent />
        </CartProvider>
      </body>
    </html>
  )
}
